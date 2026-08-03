"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useSiteSettings } from "./SiteSettingsProvider";

export default function FloatingContactIcons() {
  const settings = useSiteSettings();
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* WhatsApp */}
      <a
        href={settings.whatsappLink}
        onClick={() => (window as any).gtag_report_conversion?.(settings.whatsappLink)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="text-white" size={22} />
      </a>

      {/* Call */}
      <a
        href={settings.telLink}
        onClick={() => (window as any).gtag_report_conversion?.(settings.telLink)}
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
        style={{ backgroundColor: siteConfig.brandColor }}
        aria-label="Call Now"
      >
        <Phone className="text-black" size={20} />
      </a>

      {/* Email */}
      <a
        href={`mailto:${settings.email}`}
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition hover:scale-110 bg-[#12151b] border border-white/10"
        aria-label="Email"
      >
        <Mail className="text-white" size={20} />
      </a>

    </div>
  );
}
