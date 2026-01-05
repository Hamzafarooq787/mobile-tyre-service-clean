"use client";

import { siteConfig } from "../config/site";
import FloatingContactIcons from "./FloatingContactIcons";
import ServiceHighlights from "./ServiceHighlights";

export default function Hero() {
  return (
    <>
      {/* HERO */}
   <section
  className="relative w-full mt-10 min-h-[90vh] flex items-center"
  style={{
    backgroundImage: "url('/background/hero-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center text-center">
    <h1 className="w-full font-black tracking-tight leading-[1.05]">
      
      {/* Main line */}
      <span className="block text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
        Mobile Tyre Fitting
      </span>

      {/* Sub line */}
      <span
        className="block mt-1 sm:mt-2 font-black text-[1.8rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl"
        style={{ color: siteConfig.brandColor }}
      >
        At Your Location, When You Need It.
      </span>
    </h1>

    {/* Description */}
    <p className="mt-4 sm:mt-5 text-lg sm:text-xl md:text-2xl font-semibold max-w-2xl text-gray-200 leading-relaxed px-4">
      On-demand mobile tyre fitting for cars and vans. Whether you are at home,
      work, or roadside, we come fully equipped to get you moving safely without
      delay.
    </p>

    {/* CTA Buttons */}
    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
      <a
        href={siteConfig.links.telLink}
        className="px-8 py-4 rounded-full font-bold text-black text-center transition hover:opacity-90"
        style={{ backgroundColor: siteConfig.brandColor }}
      >
        Call Now
      </a>

      <a
        href={siteConfig.links.whatsappLink}
        className="px-8 py-4 rounded-full font-bold text-center border transition hover:bg-white/10"
        style={{
          borderColor: siteConfig.brandColor,
          color: siteConfig.brandColor,
        }}
      >
        WhatsApp Us
      </a>
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
