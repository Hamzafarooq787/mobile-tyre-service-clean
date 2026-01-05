"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "../config/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 items-center">
          
          {/* Left: Logo */}
          <div className="text-lg font-bold">
            Meli’s{" "}
            <span style={{ color: siteConfig.brandColor }}>
              Mobile Tyre
            </span>
          </div>

          {/* Center: Navigation */}
          <nav className="flex justify-center gap-8 text-sm">
            <Link href="/" className="text-[#7CFC00]">Home</Link>
            <Link href="/services" className="hover:text-[#7CFC00]">Services</Link>
            <Link href="/about" className="hover:text-[#7CFC00]">About Us</Link>
            <Link href="/contact" className="hover:text-[#7CFC00]">Contact</Link>
          </nav>

         
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between">

          {/* Logo */}
          <div className="text-lg font-bold">
            Meli’s{" "}
            <span style={{ color: siteConfig.brandColor }}>
              Mobile Tyre
            </span>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.links.telLink}
              className="bg-[#7CFC00] text-black px-4 py-2 rounded-full text-sm font-semibold"
            >
              Call
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-md"
            >
              <span className="text-xl">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <nav className="flex flex-col px-4 py-6 gap-4 text-sm">
            <Link href="/" onClick={() => setOpen(false)} className="hover:text-[#7CFC00]">
              Home
            </Link>
            <Link href="/services" onClick={() => setOpen(false)} className="hover:text-[#7CFC00]">
              Services
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="hover:text-[#7CFC00]">
              About Us
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[#7CFC00]">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
