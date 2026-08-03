import { siteConfig } from "@/config/site";
import { createAdminClient } from "@/lib/supabase/admin";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export type SiteSettings = {
  phone: string;
  telLink: string;
  whatsappLink: string;
  email: string;
  address: string;
  gtmHeadScript: string;
  gtmBodyScript: string;
};

const fallbackSettings: SiteSettings = {
  phone: "07412 840023",
  telLink: siteConfig.links.telLink,
  whatsappLink: siteConfig.links.whatsappLink,
  email: siteConfig.links.email,
  address: "Mobile service covering Birmingham and surrounding areas",
  gtmHeadScript: "",
  gtmBodyScript: "",
};

/**
 * Reads the single site_settings row. Falls back to config/site.ts defaults
 * when Supabase isn't configured or no row has been saved yet, so the site
 * keeps rendering even before the settings page has been used.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSupabaseConfigured || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return fallbackSettings;
  }

  try {
    const supabase = createAdminClient();
    const { data } = await supabase
      .from("site_settings")
      .select("*")
      .eq("singleton", true)
      .maybeSingle();

    if (!data) {
      return fallbackSettings;
    }

    return {
      phone: data.phone || fallbackSettings.phone,
      telLink: data.phone ? `tel:${data.phone.replace(/\s+/g, "")}` : fallbackSettings.telLink,
      whatsappLink: data.whatsapp
        ? `https://wa.me/${data.whatsapp.replace(/[^\d]/g, "")}`
        : fallbackSettings.whatsappLink,
      email: data.email || fallbackSettings.email,
      address: data.address || fallbackSettings.address,
      gtmHeadScript: data.gtm_head_script || "",
      gtmBodyScript: data.gtm_body_script || "",
    };
  } catch {
    return fallbackSettings;
  }
}
