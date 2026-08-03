import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getSiteSettings } from "@/lib/settings";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { updateSettings, logout } from "./actions";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function SettingsPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  if (!isSupabaseConfigured) {
    redirect("/login");
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { saved, error } = await searchParams;
  const settings = await getSiteSettings();

  return (
    <div className="min-h-screen bg-black px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Site Settings</h1>
            <p className="mt-1 text-sm text-gray-400">Signed in as {user.email}</p>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg px-4 py-2"
            >
              Sign out
            </button>
          </form>
        </div>

        {saved && (
          <p className="mt-6 rounded-lg bg-[#7CFC00]/10 border border-[#7CFC00]/30 text-[#7CFC00] text-sm px-4 py-3">
            Settings saved.
          </p>
        )}
        {error && (
          <p className="mt-6 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3">
            {error}
          </p>
        )}

        <form action={updateSettings} className="mt-8 space-y-10">
          <section className="bg-[#12151b] border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-white">Contact Details</h2>
            <p className="mt-1 text-sm text-gray-400">
              Shown across the header, footer, contact page, and call/WhatsApp buttons.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm text-gray-300 mb-1">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  defaultValue={settings.phone}
                  placeholder="07412 840023"
                  maxLength={40}
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7CFC00]"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm text-gray-300 mb-1">
                  WhatsApp number
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="text"
                  defaultValue={settings.whatsappLink.replace("https://wa.me/", "")}
                  placeholder="447412840023"
                  maxLength={40}
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7CFC00]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={settings.email}
                  maxLength={254}
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7CFC00]"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm text-gray-300 mb-1">
                  Address / coverage area
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  defaultValue={settings.address}
                  maxLength={300}
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7CFC00]"
                />
              </div>
            </div>
          </section>

          <section className="bg-[#12151b] border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-white">Google Tags</h2>
            <p className="mt-1 text-sm text-gray-400">
              Paste the raw script tags Google gives you (GTM, gtag.js, Google Ads, etc.).
              Head script loads in <code>&lt;head&gt;</code>, body script loads right after{" "}
              <code>&lt;body&gt;</code> (e.g. the GTM noscript iframe).
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="gtmHeadScript" className="block text-sm text-gray-300 mb-1">
                  Head scripts
                </label>
                <textarea
                  id="gtmHeadScript"
                  name="gtmHeadScript"
                  rows={8}
                  defaultValue={settings.gtmHeadScript}
                  placeholder="<script>...</script>"
                  maxLength={20000}
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-[#7CFC00]"
                />
              </div>

              <div>
                <label htmlFor="gtmBodyScript" className="block text-sm text-gray-300 mb-1">
                  Body scripts
                </label>
                <textarea
                  id="gtmBodyScript"
                  name="gtmBodyScript"
                  rows={5}
                  defaultValue={settings.gtmBodyScript}
                  placeholder="<noscript>...</noscript>"
                  maxLength={20000}
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-[#7CFC00]"
                />
              </div>
            </div>
          </section>

          <button
            type="submit"
            className="bg-[#7CFC00] text-black font-semibold rounded-lg px-8 py-3 hover:bg-[#6DD600] transition-colors"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
}
