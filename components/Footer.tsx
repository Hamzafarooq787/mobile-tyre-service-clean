"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Footer() {
  return (
    <footer className="bg-[#0b0d10] text-gray-400 pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-bold">
              Meli’s{" "}
              <span style={{ color: siteConfig.brandColor }}>
                Mobile Tyre Fitting
              </span>
            </h3>

            <p className="mt-4 text-sm leading-relaxed">
              Professional mobile tyre fitting service providing fast,
              on-site assistance across London and nearby areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#7CFC00]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#7CFC00]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#7CFC00]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#7CFC00]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services (ALL linked to Services page) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-[#7CFC00]">
                  Mobile Tyre Fitting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#7CFC00]">
                  Emergency Tyre Call-Out
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#7CFC00]">
                  24/7 Roadside Assistance
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#7CFC00]">
                  Same-Day Tyre Replacement
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info (ALL linked to Contact page) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Information</h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} />
                <Link
                  href="/contact"
                  className="hover:text-[#7CFC00]"
                >
                  07412 840023
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={16} />
                <Link
                  href="/contact"
                  className="hover:text-[#7CFC00]"
                >
                  Leq.1993@icloud.com
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} />
                <Link
                  href="/contact"
                  className="hover:text-[#7CFC00]"
                >
                  Mobile service covering London and surrounding areas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Bottom bar */}
        <div className="py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Meli’s Mobile Tyre Fitting.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
