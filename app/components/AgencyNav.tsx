"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import BookingModal from "./BookingModal";

export default function AgencyNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff] border-b border-[#e6e6e6]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          {/* Brand */}
          <Link
            href="/"
            className="flex items-baseline gap-2.5 text-[#000000] focus:outline-none"
          >
            <span className="font-bold tracking-[-0.03em] text-xl font-brand">
              VECTIS
            </span>
            <span className="text-[#808080] text-[10px] font-mono tracking-widest hidden sm:inline-block">
              [ SERVICES STOREFRONT ]
            </span>
          </Link>

          {/* Desktop Navigation Links (Section 24) */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary Navigation">
            <a
              href="#services"
              className="font-mono text-[11px] tracking-wider uppercase text-[#666666] hover:text-[#000000] transition-colors"
            >
              Services
            </a>
            <a
              href="#custom"
              className="font-mono text-[11px] tracking-wider uppercase text-[#666666] hover:text-[#000000] transition-colors"
            >
              Custom
            </a>
            <Link
              href="/demo/bookings"
              className="font-mono text-[11px] tracking-wider uppercase text-[#808080] hover:text-[#000000] transition-colors"
            >
              Ledger
            </Link>
          </nav>

          {/* Primary CTA (Section 25) */}
          <div className="hidden md:flex items-center gap-6">
            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              className="px-4 py-2 radius-button bg-[#000000] hover:bg-[#222222] text-[#ffffff] font-mono text-[11px] uppercase tracking-wider font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Book a service</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              className="px-3 py-1.5 radius-button bg-[#000000] text-[#ffffff] font-mono text-[10px] uppercase font-medium"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#000000] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#ffffff] border-b border-[#e6e6e6] px-6 py-8 flex flex-col gap-5 animate-in fade-in duration-150">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-base uppercase text-[#000000] flex items-center justify-between"
            >
              <span>Services</span>
              <span className="text-[#808080] text-xs">→</span>
            </a>
            <a
              href="#custom"
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-base uppercase text-[#000000] flex items-center justify-between"
            >
              <span>Custom Project</span>
              <span className="text-[#808080] text-xs">→</span>
            </a>
            <Link
              href="/demo/bookings"
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-base uppercase text-[#000000] flex items-center justify-between"
            >
              <span>Booking Ledger</span>
              <span className="text-[#808080] text-xs">→</span>
            </Link>
            <div className="pt-4 border-t border-[#e6e6e6]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingModalOpen(true);
                }}
                className="w-full h-12 radius-button bg-[#000000] text-[#ffffff] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
}
