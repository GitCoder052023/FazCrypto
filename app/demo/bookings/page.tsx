"use client";

import { useSyncExternalStore, useMemo, useState } from "react";
import Link from "next/link";
import AgencyNav from "../../components/AgencyNav";
import Footer from "../../components/Footer";
import { BookingRequest, getStoredDemoBookings, updateBookingStatus, formatINR } from "@/lib/services-data";

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

type StatusFilter = "all" | BookingRequest["status"];

export default function DemoBookingsPage() {
  const rawBookings = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [activeFilter, setActiveFilter] = useState<StatusFilter>("all");

  const bookings: BookingRequest[] = useMemo(() => {
    try {
      return JSON.parse(rawBookings);
    } catch {
      return [];
    }
  }, [rawBookings]);

  const filteredBookings = useMemo(() => {
    if (activeFilter === "all") return bookings;
    return bookings.filter((b) => b.status === activeFilter);
  }, [bookings, activeFilter]);

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

  const handleStatusChange = (id: string, newStatus: BookingRequest["status"]) => {
    updateBookingStatus(id, newStatus);
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
            
            {/* Filter Bar & Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#e6e6e6]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#808080] mr-2">
                  STATUS FILTER:
                </span>
                {(["all", "new", "reviewing", "contacted", "qualified", "closed"] as StatusFilter[]).map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setActiveFilter(f)}
                    className={`px-3 py-1 radius-button font-mono text-[10px] uppercase tracking-wider transition-all border cursor-pointer ${
                      activeFilter === f
                        ? "bg-[#000000] text-[#ffffff] border-[#000000]"
                        : "bg-[#ffffff] text-[#666666] border-[#e6e6e6] hover:border-[#000000]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <span className="font-mono text-[10px] text-[#808080] tracking-wider uppercase">
                SHOWING {filteredBookings.length} OF {bookings.length} REQUESTS
              </span>
            </div>

            {filteredBookings.length === 0 ? (
              <div className="py-20 text-center bg-[#f2f2f2] radius-container border border-[#e6e6e6] p-10">
                <div className="font-mono text-[11px] uppercase tracking-widest text-[#808080] mb-2">
                  [ NO MATCHING REQUESTS ]
                </div>
                <h3 className="type-subheading font-medium text-[#000000] mb-2">
                  No Inbound Requests Under This Filter
                </h3>
                <p className="text-[13px] text-[#666666] max-w-md mx-auto mb-8 leading-relaxed">
                  Visit the services catalog and book any service to observe the submission captured here in real-time.
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
                {filteredBookings.map((req) => (
                  <div key={req.id} className="p-8 hover:bg-[#fafafa] transition-colors">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Ref & Client Details (4 cols) */}
                      <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 mb-3 font-mono text-[11px]">
                          <span className="text-[#000000] font-medium">#{req.id}</span>
                          <span className="text-[#808080]">•</span>
                          <span className="text-[#000000] px-2 py-0.5 border border-[#000000] radius-button text-[9px] uppercase tracking-wider font-medium">
                            {req.status.toUpperCase()}
                          </span>
                        </div>
                        <h4 className="type-subheading font-medium text-[#000000]">
                          {req.client?.name || req.name}
                        </h4>
                        <div className="font-mono text-[12px] text-[#666666] mt-1">
                          {req.client?.company || req.company}
                        </div>
                        <div className="text-[12px] text-[#808080] mt-2 font-mono">
                          <a href={`mailto:${req.client?.email || req.email}`} className="text-[#000000] hover:underline">
                            {req.client?.email || req.email}
                          </a>
                          {(req.client?.phone || req.phone) && <span> • {req.client?.phone || req.phone}</span>}
                        </div>
                      </div>

                      {/* Selected Service & Parameters (5 cols) */}
                      <div className="lg:col-span-5 bg-[#f2f2f2] p-5 radius-container border border-[#e6e6e6] font-mono text-[12px] space-y-2">
                        <div className="flex justify-between pb-2 border-b border-[#e6e6e6]">
                          <span className="text-[#808080]">Target Service:</span>
                          <span className="text-[#000000] font-medium">{req.serviceName}</span>
                        </div>
                        {req.selectedAddonNames && req.selectedAddonNames.length > 0 && (
                          <div className="flex justify-between pb-2 border-b border-[#e6e6e6]">
                            <span className="text-[#808080]">Included Add-ons:</span>
                            <span className="text-[#000000] text-right">
                              {req.selectedAddonNames.join(", ")}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between pb-2 border-b border-[#e6e6e6]">
                          <span className="text-[#808080]">Investment Budget:</span>
                          <span className="text-[#000000] font-medium">
                            {req.estimatedTotal ? formatINR(req.estimatedTotal) : req.project?.budget || req.budget || "Unspecified"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#808080]">Horizon &amp; Scale:</span>
                          <span className="text-[#333333]">
                            {req.project?.timeline || req.timeline || "Flexible"} • {(req.project?.size || "medium").toUpperCase()}
                          </span>
                        </div>
                        {(req.project?.description || req.projectDescription) && (
                          <div className="pt-3 border-t border-[#e6e6e6] text-[#666666] text-[11px] leading-relaxed">
                            <span className="text-[#808080] block uppercase tracking-wider text-[9px] mb-1">Scope Brief:</span>
                            &ldquo;{req.project?.description || req.projectDescription}&rdquo;
                          </div>
                        )}
                      </div>

                      {/* Status Management & Actions (3 cols) */}
                      <div className="lg:col-span-3 flex flex-col justify-between h-full text-right font-mono text-[11px] space-y-4">
                        <div className="text-[#808080]">
                          Logged: {new Date(req.createdAt).toLocaleDateString()} at {new Date(req.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>

                        {/* Agency Operator Status Controls */}
                        <div className="space-y-2">
                          <span className="text-[9px] text-[#808080] uppercase tracking-wider block">
                            DISPATCH STATUS:
                          </span>
                          <div className="flex flex-wrap justify-end gap-1.5">
                            {(["new", "reviewing", "contacted", "qualified", "closed"] as BookingRequest["status"][]).map((st) => (
                              <button
                                key={st}
                                type="button"
                                onClick={() => handleStatusChange(req.id, st)}
                                className={`px-2 py-0.5 rounded-[4px] border text-[9px] uppercase tracking-wider cursor-pointer ${
                                  req.status === st
                                    ? "bg-[#000000] text-[#ffffff] border-[#000000]"
                                    : "bg-[#ffffff] text-[#808080] border-[#e6e6e6] hover:text-[#000000]"
                                }`}
                              >
                                {st}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2 flex justify-end">
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
