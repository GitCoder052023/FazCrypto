"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BookingModal from "./BookingModal";
import { DEMO_SERVICES } from "@/lib/services-data";

export default function ServicesIndex() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>("custom-web-application");

  const handleOpenBooking = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  return (
    <section id="capabilities" className="py-24 md:py-32 bg-[#ffffff] text-[#000000] border-b border-[#e6e6e6]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-[#e6e6e6]">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#666666] mb-3">
              02 / COMMERCIAL SERVICE CATALOG
            </div>
            <h2 className="type-heading font-normal text-[#000000] tracking-tight">
              Technology work with a clear outcome. <br className="hidden sm:inline" />
              <span className="italic text-[#808080]">Predictable scope and defensible pricing.</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 font-mono text-xs text-[#666666] max-w-xs text-left md:text-right">
            <span>ALL QUOTES 100% FIXED-SCOPE</span>
            <span className="block text-[11px] text-[#999999] mt-0.5">DAY-ONE IP OWNERSHIP</span>
          </div>
        </div>

        {/* Editorial Service Index with Hairline Dividers (Section 23 & 24) */}
        <div className="divide-y divide-[#e6e6e6] border-t border-b border-[#e6e6e6]">
          {DEMO_SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="py-10 transition-colors duration-150 hover:bg-[#f2f2f2]/60 group px-2 sm:px-4"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Number & Service Title (5 cols) */}
                <div className="lg:col-span-5 flex items-baseline gap-6">
                  <span className="font-mono text-xs text-[#999999] font-medium shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-brand font-medium text-[#000000] tracking-tight group-hover:text-[#333333] transition-colors">
                      <Link href={`/services/${service.slug}`}>
                        {service.name.toUpperCase()}
                      </Link>
                    </h3>
                    <span className="font-mono text-[10px] text-[#808080] uppercase tracking-wider block mt-1">
                      {service.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Short Description (4 cols) */}
                <div className="lg:col-span-4 max-w-[380px] text-xs sm:text-[13px] text-[#666666] leading-relaxed">
                  {service.shortDescription}
                </div>

                {/* Indicative Pricing & Action (3 cols) */}
                <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-6 font-mono text-xs">
                  <div className="text-left lg:text-right">
                    <div className="text-[10px] text-[#999999] uppercase">
                      FROM
                    </div>
                    <div className="text-sm font-semibold text-[#000000]">
                      {service.pricing.amount ? `₹${service.pricing.amount.toLocaleString("en-IN")}` : service.pricing.label}
                      {service.pricing.period && <span className="text-[10px] font-normal text-[#666666]">{service.pricing.period}</span>}
                    </div>
                    <div className="text-[10px] text-[#808080] mt-0.5">
                      {service.duration}
                    </div>
                  </div>

                  {/* Directional Action */}
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleOpenBooking(service.id)}
                      className="text-[11px] font-brand font-semibold uppercase tracking-wider text-[#000000] hover:text-[#666666] underline underline-offset-4 shrink-0"
                    >
                      Book
                    </button>
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-8 h-8 rounded-full border border-[#cccccc] flex items-center justify-center text-[#000000] group-hover:border-[#000000] group-hover:translate-x-1 transition-all"
                      aria-label={`View ${service.name}`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Editorial Index Signoff Link */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-baseline justify-between gap-4 font-mono text-xs text-[#666666]">
          <span>PRICING INDICATIVE // FULL SCOPE DEFINED AFTER ARCHITECTURAL DISCOVERY</span>
          <Link
            href="/services"
            className="text-[#000000] font-semibold hover:text-[#666666] flex items-center gap-1.5 uppercase tracking-wider"
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
