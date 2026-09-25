"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { DEMO_SERVICES, formatINR } from "@/lib/services-data";

export default function HeroSection() {
  // Grab the first 4 services for the clean preview plate
  const previewServices = DEMO_SERVICES.slice(0, 4);

  return (
    <section className="relative bg-[#ffffff] text-[#000000] pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#e6e6e6]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Section Marker */}
        <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#808080] mb-8 pb-3 border-b border-[#e6e6e6] flex items-center justify-between">
          <span>VECTIS // DIGITAL SERVICES STOREFRONT</span>
          <span className="hidden sm:inline text-[#999999]">2026 CATALOG</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (7 cols): Proposition & Actions */}
          <div className="lg:col-span-full">
            <h1 className="type-display font-normal text-[#000000] tracking-[-0.035em]">
              We design, build and scale
              <span className="block italic text-[#808080] font-normal mt-1">
                digital systems.
              </span>
            </h1>

            <p className="mt-6 text-[17px] text-[#4d4d4d] max-w-md leading-relaxed">
              Choose a service, see exactly what&apos;s included and book it directly. Fixed scopes, clear timelines, and upfront pricing.
            </p>

            {/* Direct Actions */}
            <div className="flex flex-wrap items-center gap-5 mt-10 pt-6 border-t border-[#e6e6e6]">
              <a
                href="#services"
                className="px-6 py-3 radius-button bg-[#000000] hover:bg-[#222222] text-[#ffffff] font-mono text-[11px] uppercase tracking-wider font-medium transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Browse services</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#custom"
                className="px-5 py-3 radius-button border border-[#e6e6e6] hover:border-[#000000] text-[#000000] font-mono text-[11px] uppercase tracking-wider font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Custom project</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#808080]" />
              </a>
            </div>

            {/* Direct Value Reassurance */}
            <div className="mt-12 flex flex-wrap items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-[#808080]">
              <span>✓ TRANSPARENT PRICING</span>
              <span>✓ 100% CODE OWNERSHIP</span>
              <span>✓ NO SALES INTERROGATIONS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
