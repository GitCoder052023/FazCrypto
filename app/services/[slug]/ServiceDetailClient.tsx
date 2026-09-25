"use client";

import { useState } from "react";
import Link from "next/link";
import AgencyNav from "../../components/AgencyNav";
import Footer from "../../components/Footer";
import BookingModal from "../../components/BookingModal";
import { Service, DEMO_SERVICES, formatPriceDisplay } from "@/lib/services-data";

interface ServiceDetailClientProps {
  service: Service;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  // Find other services in the catalog for cross-linking
  const relatedServices = DEMO_SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#000000]">
      <AgencyNav />

      <main className="flex-1 pt-28 md:pt-36">
        
        {/* ========================================================
            HERO: Service Context, Indicative Pricing & Primary CTA
           ======================================================== */}
        <section className="bg-[#ffffff] text-[#000000] border-b border-[#e6e6e6] py-16 md:py-24 relative">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            
            {/* Breadcrumb Navigation */}
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-6 flex items-center gap-2">
              <Link href="/services" className="hover:text-[#000000] transition-colors">
                [ SERVICES ]
              </Link>
              <span>/</span>
              <span>[ {service.categoryLabel.toUpperCase()} ]</span>
            </div>

            {/* Asymmetric 7 / 5 Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column (7 cols): Title & Description */}
              <div className="lg:col-span-7">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#808080] mb-3">
                  SPECIFICATION ARCHETYPE // 0{service.slug.length % 9 + 1}
                </div>

                <h1 className="type-display font-medium tracking-tighter text-[#000000] mb-6">
                  {service.name}.
                  <span className="block italic text-[#808080] font-normal">Architectural scope &amp; baseline.</span>
                </h1>

                <p className="text-[16px] text-[#666666] leading-relaxed mb-8 max-w-xl">
                  {service.description}
                </p>

                {/* Tech Pills */}
                <div>
                  <span className="font-mono text-[10px] text-[#808080] uppercase tracking-wider block mb-3">
                    PRIMARY ARCHITECTURAL TECHNOLOGIES:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 radius-button bg-[#f2f2f2] border border-[#e6e6e6] font-mono text-[11px] text-[#333333]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): Indicative Pricing Box */}
              <div className="lg:col-span-5 bg-[#f2f2f2] border border-[#e6e6e6] radius-container p-8 md:p-10">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#e6e6e6]">
                  <span className="font-mono text-[10px] text-[#000000] font-medium uppercase tracking-widest">
                    INDICATIVE COMMERCIAL SCOPE
                  </span>
                  <span className="font-mono text-[9px] text-[#808080] uppercase tracking-widest">
                    [ DEMO PRICING ]
                  </span>
                </div>

                <div className="mb-6">
                  <span className="font-mono text-[10px] text-[#808080] block uppercase tracking-wider mb-1">
                    STARTING ESTIMATE
                  </span>
                  <div className="type-heading font-medium font-mono text-[#000000] tracking-tight">
                    {formatPriceDisplay(service.pricing)}
                  </div>
                  <p className="font-mono text-[11px] text-[#808080] mt-2 leading-relaxed">
                    {service.pricing.disclaimer}
                  </p>
                </div>

                <div className="p-4 bg-[#ffffff] radius-container border border-[#e6e6e6] font-mono text-[11px] text-[#333333] space-y-2.5 mb-8">
                  <div className="flex justify-between pb-2 border-b border-[#e6e6e6]">
                    <span className="text-[#808080]">Typical Horizon:</span>
                    <span className="text-[#000000] font-medium">{service.duration}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-[#e6e6e6]">
                    <span className="text-[#808080]">Repository Transfer:</span>
                    <span className="text-[#000000] font-medium">100% Day One</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#808080]">Assigned Pod:</span>
                    <span className="text-[#000000] font-medium">Senior Systems Specialists</span>
                  </div>
                </div>

                {/* Primary Booking CTA */}
                <button
                  type="button"
                  onClick={() => setBookingModalOpen(true)}
                  className="w-full h-12 radius-button bg-[#000000] hover:bg-[#1f1f1f] text-[#ffffff] font-mono text-[11px] uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>{service.booking.ctaLabel}</span>
                  <span>→</span>
                </button>

                <div className="mt-4 text-center font-mono text-[10px] uppercase tracking-wider text-[#808080]">
                  Zero obligation • Direct intake with engineering architect
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================
            DELIVERABLES & TARGET AUDIENCE SECTION
           ======================================================== */}
        <section className="py-20 md:py-28 bg-[#ffffff] border-b border-[#e6e6e6]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column (7 cols): Concrete Technical Inclusions */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-3">
                    [ CONCRETE DELIVERABLES ]
                  </div>
                  <h2 className="type-heading font-medium text-[#000000]">
                    Architectural inclusions.
                    <span className="block italic text-[#808080] font-normal">Production-verified artifacts.</span>
                  </h2>
                  <p className="text-[14px] text-[#666666] mt-3">
                    Every deliverable is automated, version-controlled, and fully transferred to your private repository.
                  </p>
                </div>

                <div className="border-t border-b border-[#e6e6e6] divide-y divide-[#e6e6e6]">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="py-4 flex items-start gap-4 text-[13px] text-[#000000]">
                      <span className="font-mono text-[#808080] text-[11px] shrink-0 mt-0.5">—</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (5 cols): Who this is for */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-3">
                    [ TARGET CONTEXT ]
                  </div>
                  <h2 className="type-heading font-medium text-[#000000]">
                    Who this is for.
                    <span className="block italic text-[#808080] font-normal">Operational inflection points.</span>
                  </h2>
                  <p className="text-[14px] text-[#666666] mt-3">
                    Engineered for organizations navigating these specific technical inflection states:
                  </p>
                </div>

                <div className="p-8 radius-container bg-[#f2f2f2] border border-[#e6e6e6] space-y-4">
                  {service.idealFor.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-[13px] text-[#333333] pb-3 border-b border-[#e6e6e6] last:border-b-0 last:pb-0">
                      <span className="font-mono text-[11px] text-[#808080] shrink-0 mt-0.5">[{i + 1}]</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================
            WHAT AFFECTS THE FINAL PRICE? (PRICE TRANSPARENCY)
           ======================================================== */}
        <section className="py-20 md:py-28 bg-[#ffffff] border-b border-[#e6e6e6]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            
            <div className="max-w-2xl mb-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-3">
                [ COST INTEGRITY ]
              </div>
              <h2 className="type-heading font-medium text-[#000000] mb-3">
                What drives cost variations for this service?
                <span className="block italic text-[#808080] font-normal">Objective complexity factors.</span>
              </h2>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                The baseline starting price covers standard production architecture. In commercial deployment, the following parameters determine final milestone budgets:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-[#e6e6e6] py-8">
              {service.priceDrivers.map((driver, i) => (
                <div key={i} className="p-6 radius-container bg-[#f2f2f2] border border-[#e6e6e6] flex items-start gap-4">
                  <span className="font-mono text-[11px] text-[#808080] mt-0.5">
                    [0{i + 1}]
                  </span>
                  <span className="text-[13px] text-[#333333] leading-relaxed">
                    {driver}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 radius-container bg-[#ffffff] border border-[#e6e6e6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-[#808080]">
              <div>
                <span>Unsure if your project has complex cost drivers? We provide a complimentary architectural breakdown.</span>
              </div>
              <button
                type="button"
                onClick={() => setBookingModalOpen(true)}
                className="type-action text-[#000000] hover:underline uppercase tracking-wider shrink-0 cursor-pointer"
              >
                Request Discovery Review →
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================
            CROSS-LINKING: EXPLORE COMPLEMENTARY SERVICES
           ======================================================== */}
        <section className="py-20 bg-[#ffffff] border-b border-[#e6e6e6]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#e6e6e6]">
              <div>
                <div className="font-mono text-[10px] text-[#808080] uppercase tracking-wider mb-2">
                  [ COMPLEMENTARY CAPABILITIES ]
                </div>
                <h3 className="type-subheading font-medium text-[#000000]">
                  Frequently paired services
                </h3>
              </div>
              <Link
                href="/services"
                className="type-action text-[11px] font-mono uppercase tracking-widest text-[#000000] hover:underline mt-2 sm:mt-0"
              >
                View Complete Catalog →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-[#e6e6e6]">
              {relatedServices.map((rel, idx) => (
                <div
                  key={rel.id}
                  className={`p-8 flex flex-col justify-between ${
                    idx !== 0 ? "border-t md:border-t-0 md:border-l border-[#e6e6e6]" : ""
                  }`}
                >
                  <div>
                    <span className="font-mono text-[9px] text-[#808080] uppercase tracking-widest block mb-2">
                      {rel.categoryLabel}
                    </span>
                    <h4 className="type-subheading font-medium text-[#000000] mb-2">
                      <Link href={`/services/${rel.slug}`} className="hover:underline">
                        {rel.name}
                      </Link>
                    </h4>
                    <p className="text-[13px] text-[#666666] line-clamp-2 mb-6 leading-relaxed">
                      {rel.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#e6e6e6] flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#000000] font-medium">{formatPriceDisplay(rel.pricing)}</span>
                    <Link
                      href={`/services/${rel.slug}`}
                      className="text-[#000000] hover:underline uppercase tracking-wider"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />

      {/* 1-Click Booking Modal preselected with this service */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedServiceId={service.id}
      />
    </div>
  );
}

