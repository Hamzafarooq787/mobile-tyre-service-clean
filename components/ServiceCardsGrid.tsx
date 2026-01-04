"use client";

import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

type ServiceCardItem = {
  title: string;
  description: string; // placeholder for now (Step 2 me rewrite karenge)
  image: string;
  href: string;
  Icon?: React.ElementType;
};

type Props = {
  heading?: string;
  subheading?: string;
  items: ServiceCardItem[];
  brandColor?: string; // optional, fallback below
};

function ServiceCard({
  title,
  description,
  image,
  href,
  Icon = Wrench,
  brandColor = "#facc15", // fallback yellow
}: ServiceCardItem & { brandColor?: string }) {
  return (
    <div
      className="
        group overflow-hidden rounded-2xl
        border border-white/10 bg-[#0f1217]
        shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        transition-all duration-300
        hover:-translate-y-2 hover:border-white/20
      "
    >
      {/* Image */}
      <div className="relative">
        <div
          className="
            h-[220px] sm:h-[240px] lg:h-[230px]
            w-full bg-cover bg-center
            transition-transform duration-500
            group-hover:scale-[1.05]
          "
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Dark overlay so text/icons always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

        {/* Icon badge */}
        <div
          className="
            absolute left-6 -bottom-6
            h-12 w-12 rounded-xl
            flex items-center justify-center
            ring-1 ring-black/40 shadow-lg
          "
          style={{ backgroundColor: brandColor }}
        >
          <Icon className="text-black" size={18} />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-10 pb-6">
        <h3 className="text-lg font-semibold text-white leading-snug">
          {title}
        </h3>

        <p className="mt-3 text-sm text-gray-400 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="mt-5">
          <Link
            href={href}
            className="
              inline-flex items-center gap-2
              text-sm font-medium
              text-white/90 hover:text-white
              transition
            "
          >
            <span className="underline underline-offset-4 decoration-white/25 group-hover:decoration-white/60">
              Learn more
            </span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServiceCardsGrid({
  heading = "Our Complete Service Range",
  subheading = "Mobile tyre solutions built around speed, safety, and convenience across London.",
  items,
  brandColor,
}: Props) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {heading}
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <ServiceCard
              key={i}
              {...item}
              brandColor={brandColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
