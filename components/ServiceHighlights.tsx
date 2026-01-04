"use client";

import { Clock, MapPin, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ServiceHighlights() {
  return (
    <section className="bg-[#0b0d10] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">

          {/* Feature 1 */}
          <div className="group bg-[#12151b] rounded-2xl p-6 border border-white/5 transition hover:-translate-y-1 hover:border-[#7CFC00]">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-xl mb-4"
              style={{ backgroundColor: siteConfig.brandColor }}
            >
              <Clock className="text-black" size={20} />
            </div>

            <h3 className="text-lg font-semibold">
              Fast Call-Out Response
            </h3>

            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              Quick attendance with efficient mobile tyre fitting, reducing
              downtime and getting you moving without unnecessary delays.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-[#12151b] rounded-2xl p-6 border border-white/5 transition hover:-translate-y-1 hover:border-[#7CFC00]">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-xl mb-4"
              style={{ backgroundColor: siteConfig.brandColor }}
            >
              <MapPin className="text-black" size={20} />
            </div>

            <h3 className="text-lg font-semibold">
              Extensive Coverage Area
            </h3>

            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              Mobile service available across London and nearby areas,
              covering homes, workplaces, and roadside locations.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-[#12151b] rounded-2xl p-6 border border-white/5 transition hover:-translate-y-1 hover:border-[#7CFC00]">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-xl mb-4"
              style={{ backgroundColor: siteConfig.brandColor }}
            >
              <ShieldCheck className="text-black" size={20} />
            </div>

            <h3 className="text-lg font-semibold">
              Reliable & Professional Service
            </h3>

            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              Fully equipped mobile tyre fitting handled by experienced
              professionals with safety and quality as top priorities.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
