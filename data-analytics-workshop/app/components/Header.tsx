"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const casaLogo = "/CASA_logo.png";

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#eligibility", label: "Eligibility" },
    { href: "#committee", label: "Committee" },
    { href: "#registration", label: "Registration" },
    { href: "#schedule", label: "Schedule" }
  ];

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-4 sm:px-6 lg:px-8 xl:px-28 sticky top-0 z-50 transition-all duration-300">
      <nav className="flex items-center justify-between max-w-7xl mx-auto relative">
        
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src={casaLogo} alt="Casa Logo" width={40} height={40} className="w-10 h-10 object-contain group-hover:rotate-6 transition-transform duration-300" unoptimized />
            <span className="font-bold text-lg text-slate-900 whitespace-nowrap">Dept. of CS</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 text-sm font-medium hover:text-[#6257ff] transition-colors"
                >
                  {link.label}
                </Link>
          ))}
        </div>

        {/* Register Button (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="#registration"
            className="bg-[#6257ff] text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:bg-[#5046e5] hover:shadow-lg transition-all duration-300 text-sm whitespace-nowrap transform hover:-translate-y-0.5"
          >
            Register Now
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden ml-2 p-2 rounded-lg text-slate-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6257ff]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Drawer */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col px-6 py-6 z-40 md:hidden rounded-b-2xl">
            {navLinks.map((link) => (
              link.href !== "#registration" && (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 text-slate-600 text-base font-medium border-b border-gray-50 hover:text-[#6257ff] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}

            <Link
              href="#registration"
              className="mt-6 bg-[#6257ff] text-white font-semibold px-5 py-3 rounded-xl shadow-md active:scale-95 transition-all text-center"
              onClick={() => setMobileOpen(false)}
            >
              Register Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}