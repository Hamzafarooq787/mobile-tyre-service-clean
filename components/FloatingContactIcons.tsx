"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function FloatingContactIcons() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2 sm:gap-3">

      {/* WhatsApp */}
      <a
        href={siteConfig.links.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="text-white" size={20} />
      </a>

      {/* Call */}
      <a
        href={siteConfig.links.telLink}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
        style={{ backgroundColor: siteConfig.brandColor }}
        aria-label="Call Now"
      >
        <Phone className="text-black" size={18} />
      </a>

      {/* Email */}
      <a
        href={`mailto:${siteConfig.links.email}`}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg transition hover:scale-110 bg-[#12151b] border border-white/10"
        aria-label="Email"
      >
        <Mail className="text-white" size={18} />
      </a>

    </div>
  );
}
