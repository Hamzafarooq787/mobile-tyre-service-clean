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

  const phone = String(formData.get("phone") || "").trim();
  const whatsapp = String(formData.get("whatsapp") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const address = String(formData.get("address") || "").trim();
  const gtmHeadScript = String(formData.get("gtmHeadScript") || "").trim();
  const gtmBodyScript = String(formData.get("gtmBodyScript") || "").trim();

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
