"use client";

import Link from "next/link";
import {
  Phone,
  Clock,
  ShieldCheck,
  Wrench,
  CheckCircle,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function ServicesPage() {
  const services = [
    {
      title: "Mobile Tyre Fitting",
      text: "Professional tyre fitting completed at your home, workplace, or roadside location.",
      image: "/services/mobile-tyre-fitting.jpg",
      href: "/services/mobile-tyre-fitting",
    },
    {
      title: "Tyre Replacement",
      text: "Safe removal and replacement of worn or damaged tyres with careful fitting checks.",
      image: "/services/tyre-replacement.jpg",
      href: "/services/tyre-replacement",
    },
    {
      title: "Emergency Tyre Call-Out",
      text: "Rapid assistance when driving is unsafe due to a puncture or tyre failure.",
      image: "/services/emergency-tyre.jpg",
      href: "/services/emergency-tyre-call-out",
    },
    {
      title: "Same-Day Service",
      text: "Get your tyres fitted the same day without the hassle of visiting a garage.",
      image: "/services/Same-day.jpg",
      href: "/services/same-day-service",
    },
    {
      title: "24/7 Mobile Assistance",
      text: "Round-the-clock support for urgent tyre problems across London.",
      image: "/services/service-3.jpg",
      href: "/services/24-7-mobile-assistance",
    },
    {
      title: "Run-Flat Tyre Fitting",
      text: "Specialist handling and installation of run-flat tyres to manufacturer standards.",
      image: "/services/service-5.jpg",
      href: "/services/run-flat-tyre-fitting",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#0b0d10] text-white">
        {/* ================= HERO ================= */}
        <section className="relative min-h-[70vh] flex items-center">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: siteConfig.brandColor,
              opacity: 0.85,
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-black max-w-3xl">
              Mobile Tyre Services Across London
            </h1>

            <p className="mt-6 text-lg text-black/80 max-w-2xl">
              Professional on-site tyre services delivered wherever you are.
              From emergencies to scheduled fittings, we bring the solution to you.
            </p>
          </div>
        </section>

        {/* ================= SERVICES GRID ================= */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Complete Service Range
              </h2>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Reliable mobile tyre solutions for cars, vans, and light commercial
                vehicles across London.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((item, i) => (
                <div
                  key={i}
                  className="group bg-[#12151b] rounded-2xl overflow-hidden
                  border border-white/5 transition-all duration-300
                  hover:-translate-y-2 hover:border-[#7CFC00]"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <div
                      className="h-64 md:h-72 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Icon */}
                    <div
                      className="absolute bottom-4 left-4 w-12 h-12 rounded-full
                      flex items-center justify-center shadow-xl"
                      style={{ backgroundColor: siteConfig.brandColor }}
                    >
                      <Wrench size={18} className="text-black" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{item.title}</h3>

                    <p className="mt-3 text-sm text-gray-400">
                      {item.text}
                    </p>

                    <div className="mt-5">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold
                        transition-all duration-300 group-hover:gap-3"
                        style={{ color: siteConfig.brandColor }}
                      >
                        Learn more <span className="text-lg">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHAT’S INCLUDED ================= */}
        <section className="py-20 bg-[#0f1217]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">
              What’s Included With Every Service
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
              {[
                { icon: <ShieldCheck />, text: "Professional Installation" },
                { icon: <CheckCircle />, text: "Quality Assured" },
                { icon: <Clock />, text: "Fast Response" },
                { icon: <Wrench />, text: "Safety Inspections" },
              ].map((item, i) => (
                <div key={i}>
                  <div
                    className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: siteConfig.brandColor }}
                  >
                    <div className="text-black">{item.icon}</div>
                  </div>
                  <p className="text-sm text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section
          className="py-20 text-center"
          style={{ backgroundColor: siteConfig.brandColor }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Ready to Book Your Mobile Tyre Service?
          </h2>

          <p className="mt-4 text-black/80">
            Call now for immediate assistance or schedule your service today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={siteConfig.links.telLink}
              className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold"
            >
              <Phone size={18} />
              Call 07412 840023
            </a>

            <a
              href={siteConfig.links.whatsappLink}
              className="flex items-center gap-3 border border-black px-8 py-4 rounded-full font-semibold text-black hover:bg-black hover:text-white transition"
            >
              WhatsApp Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
