"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "../config/site";

export default function CtaSection() {
  return (
    <section
      className="py-24"
      style={{ backgroundColor: siteConfig.brandColor }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Need Mobile Tyre Fitting Today?
        </h2>

        <p className="mt-4 text-black/80 max-w-2xl mx-auto">
          Get fast, professional mobile tyre fitting at your location. We are
          available day and night for urgent tyre issues.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Call Button */}
          <a
            href={siteConfig.links.telLink}
            className="
              flex items-center gap-3
              bg-black text-white
              px-8 py-4
              rounded-full
              font-semibold
              transition-all duration-300
              hover:bg-black/90
            "
          >
            <Phone size={18} />
            Call 07412 840023
          </a>

          {/* WhatsApp Button */}
          <a
            href={siteConfig.links.whatsappLink}
            target="_blank"
            className="
              flex items-center gap-3
              border border-black
              text-black
              px-8 py-4
              rounded-full
              font-semibold
              transition-all duration-300
              hover:bg-black hover:text-white
            "
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>

        </div>
      </div>
    </section>
  );
}
