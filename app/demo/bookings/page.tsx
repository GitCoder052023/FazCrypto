"use client";

import { useSyncExternalStore, useMemo } from "react";
import Link from "next/link";
import AgencyNav from "../../components/AgencyNav";
import Footer from "../../components/Footer";
import { BookingRequest, getStoredDemoBookings } from "@/lib/services-data";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("vectis_booking_updated", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("vectis_booking_updated", callback);
  };
}

function getSnapshot(): string {
  try {
    const raw = localStorage.getItem("vectis_demo_booking_requests");
    if (!raw) {
      const seeded = getStoredDemoBookings();
      return JSON.stringify(seeded);
    }
    return raw;
  } catch {
    return "[]";
  }
}

function getServerSnapshot(): string {
  return "[]";
}

export default function DemoBookingsPage() {
  const rawBookings = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const bookings: BookingRequest[] = useMemo(() => {
    try {
      return JSON.parse(rawBookings);
    } catch {
      return [];
    }
  }, [rawBookings]);

  const handleRefresh = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("vectis_booking_updated"));
    }
  };

  const handleClear = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("vectis_demo_booking_requests");
      window.dispatchEvent(new Event("vectis_booking_updated"));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#000000]">
      <AgencyNav />

      <main className="flex-1 pt-28 md:pt-36">
        
        {/* Top Header */}
        <section className="bg-[#ffffff] text-[#000000] border-b border-[#e6e6e6] py-16 md:py-24 relative">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-6 flex items-center gap-2">
              <Link href="/services" className="hover:text-[#000000] transition-colors">
                [ SERVICES ]
              </Link>
              <span>/</span>
              <span>[ INTERNAL COMMERCIAL WORKFLOW ]</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[#e6e6e6]">
              <div>
                <h1 className="type-display font-medium tracking-tighter text-[#000000]">
                  Lead pipeline ledger.
                  <span className="block italic text-[#808080] font-normal">Client intake &amp; specification dispatch.</span>
                </h1>
                <p className="mt-6 text-[16px] text-[#666666] max-w-xl leading-relaxed">
                  Demonstration of the agency&apos;s commercial intake ledger. Shows how client 1-click booking requests are structured, stored, and routed to architectural discovery.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={handleRefresh}
                  className="px-5 h-11 radius-button bg-[#ffffff] hover:bg-[#f2f2f2] text-[#000000] font-mono text-[11px] uppercase tracking-wider border border-[#e6e6e6] transition-colors cursor-pointer"
                >
                  Refresh Pipeline
                </button>

                <button
                  type="button"
                  onClick={handleClear}
                  className="px-5 h-11 radius-button bg-[#f2f2f2] hover:bg-[#e6e6e6] text-[#666666] hover:text-[#000000] font-mono text-[11px] uppercase tracking-wider border border-[#e6e6e6] transition-colors cursor-pointer"
                >
                  Clear Demo Ledger
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Commercial Pipeline Flow Sequence */}
        <section className="py-6 bg-[#f2f2f2] border-b border-[#e6e6e6] font-mono text-[11px]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap items-center justify-between gap-4 text-[#808080]">
              <span className="text-[#000000] font-medium tracking-wider uppercase">[ PROTOCOL SEQUENCE ]</span>
              <div className="flex flex-wrap items-center gap-2 text-[#333333]">
                <span className="px-2.5 py-1 bg-[#ffffff] border border-[#e6e6e6] radius-button">01. Service Catalog</span>
                <span>→</span>
                <span className="px-2.5 py-1 bg-[#ffffff] border border-[#e6e6e6] radius-button">02. Indicative Baseline</span>
                <span>→</span>
                <span className="px-2.5 py-1 bg-[#000000] text-[#ffffff] radius-button">03. 1-Click Intake</span>
                <span>→</span>
                <span className="px-2.5 py-1 bg-[#ffffff] border border-[#e6e6e6] radius-button">04. Architect Review</span>
                <span>→</span>
                <span className="px-2.5 py-1 bg-[#ffffff] border border-[#e6e6e6] radius-button">05. Technical Covenant</span>
              </div>
            </div>
          </div>
        </section>

        {/* Leads Table / List */}
        <section className="py-16 md:py-24 bg-[#ffffff]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            
            <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#e6e6e6]">
              <div className="font-mono text-[11px] text-[#000000] font-medium uppercase tracking-widest">
                CAPTURED INBOUND REQUESTS ({bookings.length})
              </div>
              <span className="font-mono text-[10px] text-[#808080] tracking-wider uppercase">
                SOURCE: LOCAL REPOSITORY // ACTIVE SIMULATION
              </span>
            </div>

            {bookings.length === 0 ? (
              <div className="py-20 text-center bg-[#f2f2f2] radius-container border border-[#e6e6e6] p-10">
                <div className="font-mono text-[11px] uppercase tracking-widest text-[#808080] mb-2">
                  [ LEDGER EMPTY ]
                </div>
                <h3 className="type-subheading font-medium text-[#000000] mb-2">
                  No Booking Requests Logged Yet
                </h3>
                <p className="text-[13px] text-[#666666] max-w-md mx-auto mb-8 leading-relaxed">
                  Visit the service catalog and initiate any service intake to observe the record captured in this pipeline in real-time.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 h-12 radius-button bg-[#000000] hover:bg-[#1f1f1f] text-[#ffffff] text-[11px] font-mono uppercase tracking-widest font-medium transition-colors"
                >
                  <span>Explore Services Catalog</span>
                  <span>→</span>
                </Link>
              </div>
            ) : (
              <div className="border border-[#e6e6e6] radius-container overflow-hidden divide-y divide-[#e6e6e6]">
                {bookings.map((req) => (
                  <div key={req.id} className="p-8 hover:bg-[#fafafa] transition-colors">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Ref & Client Details (4 cols) */}
                      <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 mb-3 font-mono text-[11px]">
                          <span className="text-[#000000] font-medium">#{req.id}</span>
                          <span className="text-[#808080]">•</span>
                          <span className="text-[#808080] px-2 py-0.5 border border-[#e6e6e6] radius-button text-[9px] uppercase tracking-wider">
                            INTAKE LOGGED
                          </span>
                        </div>
                        <h4 className="type-subheading font-medium text-[#000000]">
                          {req.name}
                        </h4>
                        <div className="font-mono text-[12px] text-[#666666] mt-1">
                          {req.company}
                        </div>
                        <div className="text-[12px] text-[#808080] mt-2 font-mono">
                          <a href={`mailto:${req.email}`} className="text-[#000000] hover:underline">
                            {req.email}
                          </a>
                          {req.phone && <span> • {req.phone}</span>}
                        </div>
                      </div>

                      {/* Selected Service & Parameters (5 cols) */}
                      <div className="lg:col-span-5 bg-[#f2f2f2] p-5 radius-container border border-[#e6e6e6] font-mono text-[12px] space-y-2">
                        <div className="flex justify-between pb-2 border-b border-[#e6e6e6]">
                          <span className="text-[#808080]">Target Service:</span>
                          <span className="text-[#000000] font-medium">{req.serviceName}</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-[#e6e6e6]">
                          <span className="text-[#808080]">Indicative Budget:</span>
                          <span className="text-[#000000] font-medium">{req.budget || "Unspecified"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#808080]">Target Horizon:</span>
                          <span className="text-[#333333]">{req.timeline || "Flexible"}</span>
                        </div>
                        {req.projectDescription && (
                          <div className="pt-3 border-t border-[#e6e6e6] text-[#666666] text-[11px] leading-relaxed">
                            <span className="text-[#808080] block uppercase tracking-wider text-[9px] mb-1">Scope Brief:</span>
                            &ldquo;{req.projectDescription}&rdquo;
                          </div>
                        )}
                      </div>

                      {/* Timestamp & Actions (3 cols) */}
                      <div className="lg:col-span-3 flex flex-col justify-between h-full text-right font-mono text-[11px]">
                        <div className="text-[#808080]">
                          Logged: {new Date(req.createdAt).toLocaleDateString()} at {new Date(req.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>

                        <div className="pt-6 flex justify-end">
                          <Link
                            href={`/services/${req.serviceId}`}
                            className="inline-flex items-center gap-1.5 px-4 py-2 radius-button bg-[#ffffff] border border-[#e6e6e6] text-[11px] text-[#000000] hover:bg-[#f2f2f2] transition-colors"
                          >
                            <span>Inspect Specification</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

