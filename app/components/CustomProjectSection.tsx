"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import BookingModal from "./BookingModal";

export default function CustomProjectSection() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <section id="custom" className="py-20 md:py-24 bg-[#f7f7f7] border-b border-[#e6e6e6] scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] block mb-2">
              [ 02 // BESPOKE INQUIRY ]
            </span>
            <h2 className="type-subheading font-medium text-[#000000] text-xl sm:text-2xl">
              Can&apos;t find what you need in the catalog?
            </h2>
            <p className="mt-2 text-[14px] text-[#666666] max-w-xl leading-relaxed">
              We also design and build custom distributed platforms, complex data migrations, hardware/BLE integrations, and multi-service systems.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setBookingModalOpen(true)}
            className="px-6 py-3.5 radius-button bg-[#000000] hover:bg-[#222222] text-[#ffffff] font-mono text-[11px] uppercase tracking-wider font-medium transition-colors shrink-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Discuss a custom project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedServiceId="custom-web-application"
      />
    </section>
  );
}
