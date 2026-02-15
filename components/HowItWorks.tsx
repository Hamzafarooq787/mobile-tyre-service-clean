"use client";

import { siteConfig } from "../config/site";

const steps = [
  {
    step: "01",
    title: "Get in Touch",
    desc: "Call or message us with your tyre requirements and location. Our team will confirm availability and timing.",
  },
  {
    step: "02",
    title: "We Arrive On-Site",
    desc: "A fully equipped mobile technician travels to your chosen location, ready to carry out the job.",
  },
  {
    step: "03",
    title: "Tyres Fitted Safely",
    desc: "Your tyres are fitted, checked, and secured on-site so you can continue your journey with confidence.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0e1116] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-4">
            How It Works
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Getting your tyres replaced is simple. Just three clear steps and
            we take care of the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-14 text-center">
          {steps.map((item, index) => (
            <div key={index} className="relative">

              {/* Step Circle */}
              <div
                className="
                  w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full
                  flex items-center justify-center
                  text-lg sm:text-xl font-bold
                  mb-5 sm:mb-6 md:mb-8
                  shadow-[0_0_25px_rgba(124,252,0,0.25)]
                "
                style={{
                  backgroundColor: siteConfig.brandColor,
                  color: "#000",
                }}
              >
                {item.step}
              </div>

              {/* Text */}
              <h3 className="text-base sm:text-lg font-semibold text-white px-4">
                {item.title}
              </h3>
              <p className="mt-2 sm:mt-3 text-sm text-gray-400 max-w-xs mx-auto px-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
