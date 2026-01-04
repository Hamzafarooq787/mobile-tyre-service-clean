"use client";

import Link from "next/link";
import { siteConfig } from "../config/site";

const services = [
  {
    title: "Mobile Tyre Replacement",
    desc: "On-site tyre replacement carried out at your home, workplace, or roadside using professional-grade equipment.",
    image: "/services/service-1.jpg",
    href: "/services/mobile-tyre-replacement",
  },
  {
    title: "Emergency Tyre Call-Out",
    desc: "Rapid tyre assistance when you are unable to drive safely due to punctures or tyre damage.",
    image: "/services/service-2.jpg",
    href: "/services/emergency-tyre-call-out",
  },
  {
    title: "24/7 Tyre Assistance",
    desc: "Round-the-clock support for urgent tyre problems, day or night, whenever you need help.",
    image: "/services/service-3.jpg",
    href: "/services/24-7-tyre-assistance",
  },
  {
    title: "Same-Day Tyre Fitting",
    desc: "Book early and get your tyres fitted the same day without visiting a garage or workshop.",
    image: "/services/service-4.jpg",
    href: "/services/same-day-tyre-fitting",
  },
  {
    title: "Run-Flat Tyre Specialists",
    desc: "Correct and safe installation of run-flat tyres carried out by experienced professionals.",
    image: "/services/tyre-replacement1.jpg",
    href: "/services/run-flat-tyre-fitting",
  },
  {
    title: "Roadside Tyre Support",
    desc: "Complete roadside tyre solutions including puncture issues and full tyre replacement on-site.",
    image: "/services/service-6.jpg",
    href: "/services/roadside-tyre-support",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#0b0d10] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Mobile Tyre Services
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Professional mobile tyre fitting services delivered directly to your
            location, designed for speed, safety, and convenience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-2 sm:px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                max-w-[380px]
                mx-auto
                bg-[#12151b]
                rounded-2xl
                overflow-hidden
                border border-white/5
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(124,252,0,0.15)]
                hover:border-[#7CFC00]
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <div
                  className="
                    h-64 sm:h-72
                    bg-cover bg-center
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                  style={{ backgroundImage: `url(${service.image})` }}
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3
                  className="
                    text-lg font-semibold text-white
                    transition-colors duration-300
                    group-hover:text-[#7CFC00]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3 text-sm text-gray-400
                    transition-colors duration-300
                    group-hover:text-gray-300
                  "
                >
                  {service.desc}
                </p>

                {/* Learn more */}
                <div className="mt-5">
                  <Link href="/services">
                    <span
                      className="
        inline-block text-sm font-semibold cursor-pointer
        transition-all duration-300
        group-hover:text-[#7CFC00]
        group-hover:tracking-wide
      "
                      style={{ color: siteConfig.brandColor }}
                    >
                      Learn more →
                    </span>
                  </Link>
                </div>


              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
