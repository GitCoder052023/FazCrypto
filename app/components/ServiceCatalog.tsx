"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import { DEMO_SERVICES, formatINR, Service } from "@/lib/services-data";
import BookingModal from "./BookingModal";

export default function ServiceCatalog() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("business-website");
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [modalServiceId, setModalServiceId] = useState<string>("business-website");

  const activeService: Service =
    DEMO_SERVICES.find((s) => s.id === selectedServiceId) || DEMO_SERVICES[0];

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setSelectedAddonIds([]); // Reset addons when switching service
    const detailEl = document.getElementById("selected-service-detail");
    if (detailEl) {
      detailEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleOpenBooking = (serviceId: string, addonIds: string[] = []) => {
    setModalServiceId(serviceId);
    setSelectedAddonIds(addonIds);
    setBookingModalOpen(true);
  };

  const toggleAddon = (addonId: string) => {
    if (selectedAddonIds.includes(addonId)) {
      setSelectedAddonIds(selectedAddonIds.filter((id) => id !== addonId));
    } else {
      setSelectedAddonIds([...selectedAddonIds, addonId]);
    }
  };

  // Calculate live total including active add-ons
  const basePrice = activeService.price || 0;
  const addonsTotal = (activeService.optionalAddons || [])
    .filter((a) => selectedAddonIds.includes(a.id))
    .reduce((sum, a) => sum + a.price, 0);
  const currentTotal = basePrice + addonsTotal;

  return (
    <section id="services" className="py-20 md:py-32 bg-[#ffffff] text-[#000000] border-b border-[#e6e6e6] scroll-mt-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="pb-8 mb-12 border-b border-[#e6e6e6] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-3">
              [ 01 // SERVICE CATALOG ]
            </div>
            <h2 className="type-heading font-medium tracking-tight text-[#000000]">
              Available services.
              <span className="block italic text-[#808080] font-normal">
                Click any service to inspect scope, deliverables and pricing.
              </span>
            </h2>
          </div>
          <div className="font-mono text-[11px] text-[#808080]">
            7 PACKAGES • DIRECT BOOKING
          </div>
        </div>

        {/* ========================================================
            THE MAIN EVENT: SERVICE MENU INDEX
           ======================================================== */}
        <div className="divide-y divide-[#e6e6e6] border-t border-b border-[#e6e6e6] mb-20">
          {DEMO_SERVICES.map((service, idx) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <div
                key={service.id}
                onClick={() => handleSelectService(service.id)}
                className={`py-7 px-4 sm:px-6 transition-all duration-150 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 ${
                  isSelected
                    ? "bg-[#f7f7f7] border-l-2 border-l-[#000000]"
                    : "hover:bg-[#fafafa]"
                }`}
              >
                {/* Left: Index & Name & Short Description */}
                <div className="flex items-start sm:items-baseline gap-4 sm:gap-6 lg:w-7/12">
                  <span className="font-mono text-[11px] text-[#808080] font-medium shrink-0 pt-0.5 sm:pt-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-brand text-base sm:text-lg font-medium text-[#000000]">
                        {service.name}
                      </h3>
                      {isSelected && (
                        <span className="px-2 py-0.5 bg-[#000000] text-[#ffffff] font-mono text-[9px] uppercase tracking-wider rounded">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-[#666666] mt-1 line-clamp-1 max-w-xl">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Right: Price, Duration & Action Buttons */}
                <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-8 font-mono text-xs pl-8 sm:pl-0">
                  <div className="text-left lg:text-right">
                    <div className="text-[14px] font-medium text-[#000000]">
                      {service.price ? formatINR(service.price) : service.pricing.label}
                      {service.pricing.period && (
                        <span className="text-[10px] text-[#808080]"> {service.pricing.period}</span>
                      )}
                    </div>
                    <div className="text-[10px] text-[#808080]">
                      {service.duration}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectService(service.id);
                      }}
                      className="px-3 py-1.5 radius-button border border-[#cccccc] hover:border-[#000000] text-[#000000] text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      {isSelected ? "Inspecting" : "Inspect"}
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenBooking(service.id);
                      }}
                      className="px-3.5 py-1.5 radius-button bg-[#000000] hover:bg-[#222222] text-[#ffffff] text-[10px] font-mono uppercase tracking-wider font-medium transition-colors cursor-pointer"
                    >
                      Book →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            SELECTED SERVICE DETAIL PLATE
           ======================================================== */}
        <div
          id="selected-service-detail"
          className="bg-[#f7f7f7] border border-[#e6e6e6] radius-container p-8 sm:p-12 scroll-mt-24"
        >
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-8 border-b border-[#e6e6e6] gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#808080] mb-2">
                [ SERVICE SPECIFICATION // {activeService.categoryLabel} ]
              </div>
              <h3 className="type-subheading font-medium text-[#000000] text-2xl sm:text-3xl">
                {activeService.name}
              </h3>
            </div>
            
            <div className="flex flex-col sm:items-end font-mono">
              <span className="text-[10px] text-[#808080] uppercase tracking-wider">
                {activeService.pricing.model === "recurring" ? "MONTHLY INVESTMENT" : "BASE INVESTMENT"}
              </span>
              <span className="text-xl sm:text-2xl font-medium text-[#000000]">
                {activeService.price ? formatINR(activeService.price) : activeService.pricing.label}
                {activeService.pricing.period && (
                  <span className="text-xs text-[#808080]"> {activeService.pricing.period}</span>
                )}
              </span>
              <span className="text-[11px] text-[#666666]">
                Typical delivery: {activeService.duration}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-[14px] sm:text-[15px] text-[#333333] leading-relaxed max-w-3xl mb-10">
            {activeService.description}
          </p>

          {/* 2-Column Core Commercial Breakdown: Included vs Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            
            {/* Column 1: What's Included */}
            <div className="bg-[#ffffff] p-6 sm:p-7 border border-[#e6e6e6] radius-container">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#000000] font-semibold block mb-4 pb-2 border-b border-[#f0f0f0]">
                WHAT&apos;S INCLUDED
              </span>
              <ul className="space-y-3">
                {activeService.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#333333] leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-[#000000] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: What You'll Need to Provide */}
            <div className="bg-[#ffffff] p-6 sm:p-7 border border-[#e6e6e6] radius-container">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#000000] font-semibold block mb-4 pb-2 border-b border-[#f0f0f0]">
                YOU&apos;LL NEED TO PROVIDE
              </span>
              <ul className="space-y-3">
                {activeService.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#666666] leading-relaxed">
                    <span className="font-mono text-[11px] text-[#808080] shrink-0 mt-0.5">—</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Optional Add-ons (Section 14) */}
          {activeService.optionalAddons && activeService.optionalAddons.length > 0 && (
            <div className="bg-[#ffffff] p-6 sm:p-7 border border-[#e6e6e6] radius-container mb-10">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#f0f0f0]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#000000] font-semibold">
                  OPTIONAL ADD-ONS (CLICK TO CONFIGURE)
                </span>
                <span className="font-mono text-[10px] text-[#808080]">
                  CALCULATES LIVE
                </span>
              </div>

              <div className="space-y-3">
                {activeService.optionalAddons.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-[8px] border transition-colors cursor-pointer flex items-center justify-between gap-4 ${
                        isChecked
                          ? "bg-[#fafafa] border-[#000000]"
                          : "bg-transparent border-[#e6e6e6] hover:border-[#cccccc]"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleAddon(addon.id)}
                          className="mt-1 accent-black cursor-pointer"
                        />
                        <div>
                          <div className="font-mono text-xs text-[#000000] font-medium">
                            {addon.name}
                          </div>
                          <div className="text-[11px] text-[#666666] mt-0.5">
                            {addon.description}
                          </div>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#000000] shrink-0">
                        +{formatINR(addon.price)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Stack Note */}
          <div className="mb-10 text-xs font-mono text-[#808080] flex flex-wrap items-center gap-2">
            <span>TYPICAL STACK:</span>
            {activeService.technologies.map((t) => (
              <span key={t} className="px-2 py-0.5 bg-[#ffffff] border border-[#e6e6e6] rounded text-[#000000]">
                {t}
              </span>
            ))}
          </div>

          {/* Action Bar (Section 15: Obvious booking CTA) */}
          <div className="pt-6 border-t border-[#e6e6e6] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="font-mono text-xs text-center sm:text-left">
              <span className="text-[#808080] block text-[10px] uppercase">
                {selectedAddonIds.length > 0 ? "TOTAL WITH CONFIGURED ADD-ONS" : "BASE ESTIMATE"}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-[#000000]">
                {formatINR(currentTotal)}
                {activeService.pricing.period && (
                  <span className="text-xs font-normal text-[#808080]"> {activeService.pricing.period}</span>
                )}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href={`/services/${activeService.slug}`}
                className="font-mono text-[11px] uppercase tracking-wider text-[#666666] hover:text-[#000000] underline flex items-center gap-1"
              >
                <span>Standalone Spec Page</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>

              <button
                type="button"
                onClick={() => handleOpenBooking(activeService.id, selectedAddonIds)}
                className="w-full sm:w-auto px-8 py-3.5 radius-button bg-[#000000] hover:bg-[#222222] text-[#ffffff] font-mono text-[12px] uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>BOOK THIS SERVICE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedServiceId={modalServiceId}
        initialAddonIds={selectedAddonIds}
      />
    </section>
  );
}
