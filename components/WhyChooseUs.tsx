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
    <section className="bg-[#0b0d10] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Why Choose Our Mobile Tyre Service?
            </h2>

            <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base text-gray-400">
              We focus on convenience, reliability, and safety by delivering
              professional tyre fitting services directly to your location.
            </p>

            <div className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-5 md:space-y-6">
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
          <div className="relative max-w-xl mx-auto lg:mx-0 mt-8 lg:mt-0">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src="/background/Why-choose-us.jpg"
                alt="Mobile tyre technician"
                className="
                  w-full h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px] object-cover
                  transition-transform duration-500
                  hover:scale-105
                "
              />
            </div>

            {/* Soft glow */}
            <div
              className="absolute -inset-4 sm:-inset-6 rounded-2xl sm:rounded-3xl blur-3xl opacity-20 -z-10"
              style={{ backgroundColor: siteConfig.brandColor }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
