"use client";

import { Phone, MessageCircle, Mail, Clock, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <>
    <Header/>
      {/* HERO */}
      <section className="bg-[#7CFC00] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black max-w-3xl">
            Get in Touch With Meli’s Mobile Tyre Fitting
          </h1>
          <p className="mt-6 text-black/80 max-w-2xl text-lg">
            Need urgent tyre assistance or want to schedule a visit?  
            Our mobile technicians are available across London, day and night.
          </p>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Choose How You’d Like to Contact Us
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Fast responses, clear communication, and professional support from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* CALL */}
            <div className="bg-[#12151b] rounded-2xl p-8 border border-white/5 hover:border-[#7CFC00] transition">
              <Phone className="text-[#7CFC00]" size={28} />
              <h3 className="mt-6 text-xl font-semibold text-white">Call Us</h3>
              <p className="mt-3 text-gray-400 text-sm">
                Speak directly with our team for immediate tyre assistance or pricing.
              </p>

              <a
                href="tel:07412840023"
                className="inline-flex items-center gap-2 mt-6 text-black bg-[#7CFC00] px-5 py-3 rounded-full text-sm font-semibold"
              >
                07412 840023 <ArrowRight size={16} />
              </a>
            </div>

            {/* WHATSAPP */}
            <div className="bg-[#12151b] rounded-2xl p-8 border border-white/5 hover:border-[#7CFC00] transition">
              <MessageCircle className="text-[#7CFC00]" size={28} />
              <h3 className="mt-6 text-xl font-semibold text-white">WhatsApp</h3>
              <p className="mt-3 text-gray-400 text-sm">
                Message us for quick replies, tyre availability, and location confirmation.
              </p>

              <a
                href="https://wa.me/447365350710"
                target="_blank"
                className="inline-flex items-center gap-2 mt-6 text-black bg-[#7CFC00] px-5 py-3 rounded-full text-sm font-semibold"
              >
                Start Chat <ArrowRight size={16} />
              </a>
            </div>

            {/* EMAIL */}
            <div className="bg-[#12151b] rounded-2xl p-8 border border-white/5 hover:border-[#7CFC00] transition">
              <Mail className="text-[#7CFC00]" size={28} />
              <h3 className="mt-6 text-xl font-semibold text-white">Email Us</h3>
              <p className="mt-3 text-gray-400 text-sm">
                Ideal for general enquiries, bookings, or non-urgent requests.
              </p>

              <a
                href="mailto:Leq.1993@icloud.com"
                className="inline-flex items-center gap-2 mt-6 text-[#7CFC00] text-sm font-medium"
              >
                Leq.1993@icloud.com <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* HOURS & AREA */}
      <section className="py-24 bg-black/95">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* HOURS */}
          <div className="bg-[#12151b] rounded-2xl p-8 border border-white/5">
            <Clock className="text-[#7CFC00]" size={28} />
            <h3 className="mt-6 text-2xl font-semibold text-white">Service Availability</h3>

            <ul className="mt-6 space-y-3 text-sm text-gray-400">
              <li>Emergency tyre services: <span className="text-white">24/7</span></li>
              <li>Scheduled bookings: <span className="text-white">Flexible times</span></li>
              <li>Phone & WhatsApp support: <span className="text-white">Always available</span></li>
            </ul>
          </div>

          {/* LOCATION */}
          <div className="bg-[#12151b] rounded-2xl p-8 border border-white/5">
            <MapPin className="text-[#7CFC00]" size={28} />
            <h3 className="mt-6 text-2xl font-semibold text-white">
              Service Coverage
            </h3>

            <p className="mt-4 text-sm text-gray-400">
              We operate as a fully mobile tyre fitting service, covering London and nearby
              surrounding areas. Wherever you are, we come directly to you.
            </p>

            <p className="mt-4 text-sm text-white">
              Mobile service • No garage visits • All London postcodes
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#7CFC00] py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Need Immediate Tyre Assistance?
          </h2>
          <p className="mt-4 text-black/80 max-w-2xl mx-auto">
            Don’t wait roadside. Call now and we’ll dispatch a mobile technician to your location.
          </p>

          <a
            href="tel:07412840023"
            className="inline-flex items-center gap-2 mt-8 bg-black text-[#7CFC00] px-8 py-4 rounded-full font-semibold"
          >
            Call Now <ArrowRight size={18} />
          </a>
        </div>
      </section>
      <Footer/>
    </>
  );
}
