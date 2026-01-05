"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "../config/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black/90 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-50 border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 py-5 md:py-6">
    
    {/* Desktop Layout */}
    <div className="hidden md:grid grid-cols-3 items-center">
      
      {/* Left: Logo */}
      <div className="text-xl font-bold tracking-tight">
        Meli’s{" "}
        <span style={{ color: siteConfig.brandColor }}>
          Mobile Tyre
        </span>
      </div>

      {/* Center: Navigation */}
      <nav className="flex justify-center gap-10 text-base font-medium">
        <Link href="/" className="text-[#7CFC00] hover:text-[#7CFC00]/80 transition-colors">Home</Link>
        <Link href="/services" className="hover:text-[#7CFC00] transition-colors">Services</Link>
        <Link href="/about" className="hover:text-[#7CFC00] transition-colors">About Us</Link>
        <Link href="/contact" className="hover:text-[#7CFC00] transition-colors">Contact</Link>
      </nav>

     
    </div>

    {/* Mobile Layout */}
    <div className="flex md:hidden items-center justify-between">

      {/* Logo */}
      <div className="text-xl font-bold tracking-tight">
        Meli’s{" "}
        <span style={{ color: siteConfig.brandColor }}>
          Mobile Tyre
        </span>
      </div>

      {/* Mobile buttons */}
      <div className="flex items-center gap-4">
        

        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 flex items-center justify-center border border-white/30 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu with glass effect */}
  {open && (
    <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/20 shadow-2xl">
      <nav className="flex flex-col px-4 py-6 gap-5">
        <Link 
          href="/" 
          onClick={() => setOpen(false)} 
          className="py-3 px-4 text-lg font-medium hover:text-[#7CFC00] hover:bg-white/5 rounded-lg transition-colors"
        >
          Home
        </Link>
        <Link 
          href="/services" 
          onClick={() => setOpen(false)} 
          className="py-3 px-4 text-lg font-medium hover:text-[#7CFC00] hover:bg-white/5 rounded-lg transition-colors"
        >
          Services
        </Link>
        <Link 
          href="/about" 
          onClick={() => setOpen(false)} 
          className="py-3 px-4 text-lg font-medium hover:text-[#7CFC00] hover:bg-white/5 rounded-lg transition-colors"
        >
          About Us
        </Link>
        <Link 
          href="/contact" 
          onClick={() => setOpen(false)} 
          className="py-3 px-4 text-lg font-medium hover:text-[#7CFC00] hover:bg-white/5 rounded-lg transition-colors"
        >
          Contact
        </Link>
        
        {/* Mobile CTA in menu */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <a
            href={siteConfig.links.whatsappLink}
            className="block py-3 px-4 text-center rounded-full font-bold border transition-colors hover:bg-white/10 mb-3"
            style={{
              borderColor: siteConfig.brandColor,
              color: siteConfig.brandColor,
            }}
            onClick={() => setOpen(false)}
          >
            WhatsApp Us
          </a>
        </div>
      </nav>
    </div>
  )}
</header>


  );
}
