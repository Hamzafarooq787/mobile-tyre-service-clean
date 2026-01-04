"use client";

import { siteConfig } from "../config/site";

const points = [
  {
    title: "Fully Mobile Operation",
    desc: "No garage visits required. Our mobile service reaches you at home, work, or roadside locations.",
  },
  {
    title: "Qualified Professionals",
    desc: "Experienced technicians trained to handle modern vehicles and all tyre types safely.",
  },
  {
    title: "Clear & Fair Pricing",
    desc: "Transparent costs with no hidden charges, so you always know what you are paying for.",
  },
  {
    title: "24/7 Availability",
    desc: "Round-the-clock support for urgent tyre issues, including evenings and weekends.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0b0d10] py-24">
      {/* ✅ Extra horizontal padding added here */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose Our Mobile Tyre Service?
            </h2>

            <p className="mt-6 text-gray-400">
              We focus on convenience, reliability, and safety by delivering
              professional tyre fitting services directly to your location.
            </p>

            <div className="mt-10 space-y-6">
              {points.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center mt-1 shrink-0"
                    style={{ backgroundColor: siteConfig.brandColor }}
                  >
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative max-w-xl mx-auto lg:mx-0">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/background/Why-choose-us.jpg"
                alt="Mobile tyre technician"
                className="
                  w-full h-[420px] object-cover
                  transition-transform duration-500
                  hover:scale-105
                "
              />
            </div>

            {/* Soft glow */}
            <div
              className="absolute -inset-6 rounded-3xl blur-3xl opacity-20 -z-10"
              style={{ backgroundColor: siteConfig.brandColor }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
