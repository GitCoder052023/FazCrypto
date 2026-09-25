"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BookingModal from "./BookingModal";
import { DEMO_SERVICES, formatINR } from "@/lib/services-data";

export default function ServicesIndex() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>("custom-web-application");

  const handleOpenBooking = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  return (
    <section id="capabilities" className="py-24 md:py-32 bg-[#ffffff] text-[#000000] border-b border-[#e6e6e6]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-[#e6e6e6]">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-4">
              [ 02 // COMMERCIAL SERVICE CATALOG ]
            </div>
            <h2 className="type-heading font-medium tracking-tight text-[#000000]">
              Commercial capabilities.
              <span className="block italic text-[#808080] font-normal">Predictable scope, defensible baseline pricing.</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 font-mono text-[11px] text-[#808080] max-w-xs text-left md:text-right space-y-1">
            <span className="block text-[#000000]">100% REPOSITORY IP TRANSFERRED</span>
            <span>DAY-ONE CODE ACCESS &amp; FIXED CONTRACTS</span>
          </div>
        </div>

        {/* Minimalist Service Index (Section 05 & 24) */}
        <div className="divide-y divide-[#e6e6e6] border-t border-b border-[#e6e6e6]">
          {DEMO_SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="py-10 transition-colors duration-150 hover:bg-[#fafafa] group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Number & Service Title (5 cols) */}
                <div className="lg:col-span-5 flex items-baseline gap-6">
                  <span className="font-mono text-[11px] text-[#808080] font-medium shrink-0">
                    [0{idx + 1}]
                  </span>
                  <div>
                    <h3 className="type-subheading font-medium text-[#000000] group-hover:text-[#333333] transition-colors">
                      <Link href={`/services/${service.slug}`} className="hover:underline">
                        {service.name}
                      </Link>
                    </h3>
                    <span className="font-mono text-[10px] text-[#808080] uppercase tracking-wider block mt-1">
                      {service.categoryLabel} • {service.duration}
                    </span>
                  </div>
                </div>

                {/* Short Description (4 cols) */}
                <div className="lg:col-span-4 max-w-[360px] text-[13px] text-[#666666] leading-relaxed">
                  {service.shortDescription}
                </div>

                {/* Indicative Pricing & Direct Booking Action (3 cols) */}
                <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-6 font-mono text-xs">
                  <div className="text-left lg:text-right">
                    <div className="text-[9px] text-[#808080] uppercase tracking-widest">
                      STARTING AT
                    </div>
                    <div className="text-[14px] font-medium text-[#000000]">
                      {service.price ? formatINR(service.price) : service.pricing.label}
                      {service.pricing.period && <span className="text-[10px] font-normal text-[#666666]"> {service.pricing.period}</span>}
                    </div>
                  </div>

                  {/* Dual Action: One-Click Booking + View Spec */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenBooking(service.id)}
                      className="px-3.5 py-1.5 radius-button bg-[#000000] hover:bg-[#1f1f1f] text-[#ffffff] text-[10px] font-mono uppercase tracking-widest font-medium transition-colors cursor-pointer shrink-0"
                    >
                      Book →
                    </button>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-[10px] font-mono uppercase tracking-widest text-[#808080] hover:text-[#000000] hover:underline shrink-0"
                    >
                      Spec
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Custom Project Controlled Pathway (Section 15) */}
        <div className="mt-12 p-8 radius-container bg-[#f2f2f2] border border-[#e6e6e6] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-[11px]">
          <div>
            <span className="text-[#000000] uppercase tracking-wider font-medium block mb-1">
              [ NEED SOMETHING OUTSIDE PREDEFINED PACKAGES? ]
            </span>
            <span className="text-[#666666] block leading-relaxed max-w-xl">
              We frequently architect bespoke distributed systems, custom hardware integrations, and private infrastructure networks that span multiple service disciplines.
            </span>
          </div>
          <button
            type="button"
            onClick={() => handleOpenBooking("custom")}
            className="type-action inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#000000] hover:underline shrink-0 cursor-pointer"
          >
            <span>Discuss Custom Project</span>
            <span>→</span>
          </button>
        </div>

        {/* Full Catalog Navigation Link */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-baseline justify-between gap-4 font-mono text-[11px] text-[#808080]">
          <span>PRICING INDICATIVE // FORMAL COVENANT DEFINED POST-ARCHITECTURAL REVIEW</span>
          <Link
            href="/services"
            className="text-[#000000] hover:underline flex items-center gap-1.5 uppercase tracking-wider"
          >
            <span>View Complete Service Specifications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

      {/* 1-Click Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedServiceId={selectedServiceId}
      />
    </section>
  );
}
