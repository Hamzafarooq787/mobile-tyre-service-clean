"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export async function logout() {
  if (!isSupabaseConfigured) {
    redirect("/login");
  }
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export async function updateSettings(formData: FormData) {
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

  const phone = String(formData.get("phone") || "").trim().slice(0, 40);
  const whatsapp = String(formData.get("whatsapp") || "").trim().slice(0, 40);
  const email = String(formData.get("email") || "").trim().slice(0, 254);
  const address = String(formData.get("address") || "").trim().slice(0, 300);
  const gtmHeadScript = String(formData.get("gtmHeadScript") || "").trim().slice(0, 20000);
  const gtmBodyScript = String(formData.get("gtmBodyScript") || "").trim().slice(0, 20000);

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    redirect("/settings?error=" + encodeURIComponent("Enter a valid email address."));
  }

  const admin = createAdminClient();
  const { error } = await admin.from("site_settings").upsert(
    {
      singleton: true,
      phone,
      whatsapp,
      email,
      address,
      gtm_head_script: gtmHeadScript,
      gtm_body_script: gtmBodyScript,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "singleton" }
  );

  if (error) {
    redirect(`/settings?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/", "layout");
  redirect("/settings?saved=1");
}
