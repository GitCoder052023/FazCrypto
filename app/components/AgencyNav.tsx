"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import BookingModal from "./BookingModal";

export default function AgencyNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "SERVICES", href: "/services" },
    { label: "WORK", href: "/#cases" },
    { label: "APPROACH", href: "/#workflow" },
    { label: "TAXONOMY", href: "/#taxonomy" },
    { label: "ENGAGEMENT", href: "/#engagement" },
    { label: "PIPELINE", href: "/demo/bookings" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff] border-b border-[#e6e6e6]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          
          {/* Studio Brandmark */}
          <Link
            href="/"
            className="flex items-baseline gap-3 text-[#000000] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#000000]"
          >
            <span className="font-bold tracking-[-0.03em] text-xl font-brand">
              VECTIS
            </span>
            <span className="text-[#999999] text-[11px] font-mono tracking-wider hidden sm:inline-block">
              [ SYSTEMS STUDIO ]
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/services" && link.href !== "/demo/bookings" && pathname === "/" && false);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-brand text-[11px] tracking-[0.08em] font-medium text-[#666666] hover:text-[#000000] transition-colors py-1 flex items-center gap-1"
                >
                  {isActive && <span className="text-[#000000] mr-0.5">▸</span>}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action: Typographic Link CTA (No filled button per design system) */}
          <div className="hidden md:flex items-center gap-6">
            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              className="font-brand text-[11px] font-semibold tracking-[0.08em] uppercase text-[#000000] hover:text-[#666666] transition-colors flex items-center gap-1.5 focus:outline-none"
            >
              <span>Book a Service</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              className="font-brand text-[11px] font-semibold tracking-wider uppercase text-[#000000] underline underline-offset-4"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#000000] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#000000]" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Editorial Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#ffffff] border-b border-[#e6e6e6] px-6 py-8 flex flex-col gap-5 animate-in fade-in duration-150">
            <div className="text-[10px] font-mono text-[#999999] tracking-wider uppercase pb-2 border-b border-[#e6e6e6]">
              DIRECTORY // INDEX
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-brand text-lg font-medium tracking-tight text-[#000000] hover:text-[#666666] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#999999] text-xs font-mono">→</span>
              </Link>
            ))}
            <div className="pt-4 border-t border-[#e6e6e6]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingModalOpen(true);
                }}
                className="w-full h-12 rounded-[42.96px] bg-[#000000] text-[#ffffff] font-brand text-xs font-medium uppercase tracking-[0.08em] flex items-center justify-center gap-2"
              >
                <span>Initiate Project Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Booking Modal Instance */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedServiceId="custom-web-application"
      />
    </>
  );
}
