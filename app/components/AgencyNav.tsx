"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function AgencyNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Reality", href: "#problem" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Workflow", href: "#workflow" },
    { label: "Taxonomy", href: "#taxonomy" },
    { label: "Case Systems", href: "#cases" },
    { label: "Engagement", href: "#engagement" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? "bg-[#19191a]/95 border-b border-[#323234] shadow-[0_1px_2px_rgba(0,0,0,0.2)] backdrop-blur-sm"
          : "bg-[#19191a] border-b border-[#323234]/60"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          className="flex items-center gap-3 text-white group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff470a]"
        >
          <div className="flex items-center gap-1.5 font-mono text-xs tracking-wider">
            <span className="w-2.5 h-2.5 bg-[#ff470a] rounded-[2px]" />
            <span className="font-bold tracking-tight text-lg font-display text-white">
              VECTIS
            </span>
            <span className="text-[#76757f] hidden sm:inline-block">/</span>
            <span className="text-[#bfbec9] text-[11px] font-medium hidden sm:inline-block">
              SYSTEMS ENGINEERING
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-[#bfbec9] hover:text-white transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Status */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#bfbec9] mr-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Q3/Q4 SLOTS OPEN</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#ff470a] hover:bg-[#ff561d] text-white text-[14px] font-medium transition-colors duration-200 shadow-[0_4px_8px_rgba(0,0,0,0.08)] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff470a]"
          >
            <span>Discuss a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-[#ff470a] text-white text-xs font-medium"
          >
            Scope Project
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#bfbec9] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#19191a] border-b border-[#323234] px-6 py-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 font-mono text-[12px] text-[#bfbec9] pb-3 border-b border-[#323234]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>ENGINEERING PODS ACTIVE</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:text-[#ff470a] py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 h-12 w-full rounded-full bg-[#ff470a] text-white font-medium text-sm"
          >
            <span>Initiate Technical Scope</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
