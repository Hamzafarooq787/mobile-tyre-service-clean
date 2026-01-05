"use client";

import { siteConfig } from "../config/site";
import FloatingContactIcons from "./FloatingContactIcons";
import ServiceHighlights from "./ServiceHighlights";

export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full min-h-[80vh] flex items-center"
        style={{
          backgroundImage: "url('/background/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
            Mobile Tyre Fitting <br />
            <span style={{ color: siteConfig.brandColor }}>
              At Your Location, When You Need It
            </span>
          </h1>

          <p className="mt-6 text-lg max-w-2xl text-gray-200">
            On-demand mobile tyre fitting for cars and vans. Whether you are at
            home, work, or roadside, we come fully equipped to get you moving
            safely without delay.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href={siteConfig.links.telLink}
              className="px-6 py-3 rounded-full font-semibold text-black"
              style={{ backgroundColor: siteConfig.brandColor }}
            >
              Call Now
            </a>

            <a
              href={siteConfig.links.whatsappLink}
              className="px-6 py-3 rounded-full font-semibold border"
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
      <ServiceHighlights/>
    </>
  );
}
