"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall, MessageCircle } from "lucide-react";

type Bullet = { title: string; text: string };

type Props = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  heroImage: string;

  highlights: string[];
  bullets: Bullet[];

  ctaTitle: string;
  ctaText: string;

  brandColor: string;
  phoneHref: string;     // e.g. "tel:+447412840023"
  whatsappHref: string;  // e.g. "https://wa.me/447412840023"
};

export default function ServiceDetailPage({
  eyebrow = "Service in London",
  title,
  subtitle,
  heroImage,
  highlights,
  bullets,
  ctaTitle,
  ctaText,
  brandColor,
  phoneHref,
  whatsappHref,
}: Props) {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm tracking-wide text-white/70">{eyebrow}</p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              {title}
            </h1>

            <p className="mt-5 text-base md:text-lg text-gray-300 leading-relaxed">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-black"
                style={{ backgroundColor: brandColor }}
              >
                <PhoneCall size={18} />
                Call Now
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold border border-white/15 hover:border-white/30 transition"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-white/90 hover:text-white transition border border-white/10 hover:border-white/20"
              >
                Back to Services
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Quick highlights */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 size={18} style={{ color: brandColor }} />
                  <span className="text-sm text-gray-200">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left content */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-bold">
                What’s Included
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Clear steps, proper equipment, and a finish you can trust. We keep it simple:
                arrive prepared, fit correctly, and confirm everything is safe before you drive away.
              </p>

              <div className="mt-10 space-y-5">
                {bullets.map((b, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-[#0f1217] p-6"
                  >
                    <h3 className="text-lg font-semibold">{b.title}</h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right sticky card */}
            <aside className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="rounded-2xl border border-white/10 bg-[#0f1217] p-8">
                <h3 className="text-xl font-bold">{ctaTitle}</h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {ctaText}
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={phoneHref}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-black"
                    style={{ backgroundColor: brandColor }}
                  >
                    <PhoneCall size={18} />
                    Call Now
                  </a>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold border border-white/15 hover:border-white/30 transition"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Us
                  </a>
                </div>

                <div className="mt-6 text-xs text-gray-500">
                  Mobile service covering London and surrounding areas.
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
