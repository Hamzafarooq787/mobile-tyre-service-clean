"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "../config/site";

export default function CtaSection() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: siteConfig.brandColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black px-4">
          Need Mobile Tyre Fitting Today?
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-black/80 max-w-2xl mx-auto px-4">
          Get fast, professional mobile tyre fitting at your location. We are
          available day and night for urgent tyre issues.
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">

          {/* Call Button */}
          <a
            href={siteConfig.links.telLink}
            className="
              flex items-center justify-center gap-2 sm:gap-3
              bg-black text-white
              px-6 sm:px-8 py-3 sm:py-4
              rounded-full
              font-semibold
              transition-all duration-300
              hover:bg-black/90
              w-full sm:w-auto
              text-sm sm:text-base
            "
          >
            <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
            Call 07412 840023
          </a>

          {/* WhatsApp Button */}
          <a
            href={siteConfig.links.whatsappLink}
            target="_blank"
            className="
              flex items-center justify-center gap-2 sm:gap-3
              border-2 border-black
              text-black
              px-6 sm:px-8 py-3 sm:py-4
              rounded-full
              font-semibold
              transition-all duration-300
              hover:bg-black hover:text-white
              w-full sm:w-auto
              text-sm sm:text-base
            "
          >
            <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
            WhatsApp Us
          </a>

        </div>
      </div>
    </section>
  );
}
