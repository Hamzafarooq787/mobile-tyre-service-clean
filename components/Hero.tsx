"use client";

import { siteConfig } from "../config/site";
import FloatingContactIcons from "./FloatingContactIcons";
import ServiceHighlights from "./ServiceHighlights";

export default function Hero() {
  return (
    <>
      {/* HERO */}
<section
  className="relative w-full pt-20 md:pt-32 min-h-[85vh] md:min-h-[90vh] flex items-center"
  style={{
    backgroundImage: "url('/background/hero-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center text-center w-full">
    
    {/* Vertical spacing wrapper */}
    <div className="w-full flex flex-col items-center py-6 md:pt-8 md:pb-12">
      
      <h1 className="w-full font-black tracking-tight leading-tight">
        
        {/* Main line - Better mobile sizing */}
        <span className="block text-[2rem] xs:text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 sm:mb-3 md:mb-4 px-2">
          Mobile Tyre Fitting
        </span>

        {/* Sub line */}
        <span
          className="block font-black text-[1.5rem] xs:text-[1.8rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-2"
          style={{ color: siteConfig.brandColor }}
        >
          At Your Location, When You Need It.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-4 sm:mt-6 md:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-2xl text-gray-200 leading-relaxed px-4">
        On-demand mobile tyre fitting for cars and vans. Whether you are at home,
        work, or roadside, we come fully equipped to get you moving safely without
        delay.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 sm:mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md sm:max-w-none sm:w-auto justify-center px-4">
        <a
          href={siteConfig.links.telLink}
          className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-black text-center transition hover:opacity-90 hover:scale-105 text-sm sm:text-base"
          style={{ backgroundColor: siteConfig.brandColor }}
        >
          Call Now
        </a>

        <a
          href={siteConfig.links.whatsappLink}
          className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-center border-2 transition hover:bg-white/10 hover:scale-105 text-sm sm:text-base"
          style={{
            borderColor: siteConfig.brandColor,
            color: siteConfig.brandColor,
          }}
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Floating Icons (scroll par fixed rahenge) */}
      <FloatingContactIcons />

      {/* FEATURES SECTION (Hero ke neeche) */}
      <ServiceHighlights />
    </>
  );
}
