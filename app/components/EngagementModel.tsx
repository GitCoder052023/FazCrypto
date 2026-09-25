"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BookingModal from "./BookingModal";

export default function EngagementModel() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("custom-web-application");

  const handleOpenBooking = (serviceSlug: string) => {
    setPreselectedService(serviceSlug);
    setBookingModalOpen(true);
  };

  const models = [
    {
      archetype: "[ 01 // FIXED-PRICE PROJECT ]",
      name: "Defined Scope Deliverable",
      timeline: "2 to 8 Weeks",
      serviceSlug: "custom-web-application",
      focus: "Standalone web applications, mobile apps, API platforms, or cloud setups with locked scope, fixed milestones, and guaranteed delivery.",
      podComposition: "1 Principal Architect + 1-2 Senior Engineers",
      scope: [
        "Formal requirements specification & data architecture blueprint",
        "Continuous staging environments with weekly client review demos",
        "Automated regression testing, CI/CD pipeline, and documentation",
        "30-day post-launch bug-fix warranty & 100% IP repository transfer",
      ],
      idealFor: "Businesses launching new products, redesigning portals, or migrating infrastructure.",
    },
    {
      archetype: "[ 02 // DEDICATED POD ]",
      name: "Embedded Systems Retainer",
      timeline: "Monthly Retainer (3–12 Months)",
      serviceSlug: "application-maintenance",
      focus: "Dedicated senior engineering team working directly in your GitHub repository, issue tracker, and sprint cadence.",
      podComposition: "1 Technical Lead + 1 to 3 Senior Engineers",
      scope: [
        "Continuous product feature velocity and technical debt elimination",
        "Real-time architecture guidance and code reviews with your team",
        "Continuous CI/CD management, database tuning, and dependency updates",
        "Guaranteed response SLA with direct Slack/Teams engineer communication",
      ],
      idealFor: "Companies needing senior engineering bandwidth without a 6-month recruitment cycle.",
    },
    {
      archetype: "[ 03 // SURGICAL MODERNIZATION ]",
      name: "Architecture & Bottleneck Sprint",
      timeline: "3 to 6 Weeks",
      serviceSlug: "legacy-system-refactoring",
      focus: "Targeted, high-velocity intervention to resolve critical production bottlenecks, database deadlocks, or legacy monolith decoupling.",
      podComposition: "1 Principal Architect + 1 Systems/Infra Specialist",
      scope: [
        "Deep query profiling, connection starvation diagnosis, and schema optimization",
        "Zero-downtime cutover strategy and shadow traffic verification",
        "Synthetic load testing under 3x expected peak concurrency",
        "Operational runbooks and post-remediation architecture signoff",
      ],
      idealFor: "Enterprises facing scaling ceilings, slow queries, or deployment risks before peak traffic.",
    },
  ];

  return (
    <section id="engagement" className="py-24 md:py-32 bg-[#ffffff] text-[#000000] border-b border-[#e6e6e6] scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#e6e6e6]">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-4">
              [ 06 // ENGAGEMENT STRUCTURE ]
            </div>
            <h2 className="type-heading font-medium tracking-tight text-[#000000]">
              Transparent engagement models.
              <span className="block italic text-[#808080] font-normal">Zero ambiguous billing.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-[14px] text-[#666666] max-w-[340px] leading-relaxed">
            Contracts structured strictly around verified technical milestones and engineering velocity—never open-ended speculative hours.
          </p>
        </div>

        {/* 3 Structured Engagement Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-b border-[#e6e6e6]">
          {models.map((m, idx) => (
            <div
              key={m.name}
              className={`p-8 lg:p-10 flex flex-col justify-between ${
                idx !== 0 ? "border-t lg:border-t-0 lg:border-l border-[#e6e6e6]" : ""
              }`}
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#e6e6e6] font-mono text-[10px] uppercase tracking-wider text-[#808080]">
                  <span className="text-[#000000] font-medium">{m.archetype}</span>
                  <span>{m.timeline}</span>
                </div>

                <h3 className="type-subheading font-medium text-[#000000] mb-3 leading-snug">
                  {m.name}
                </h3>
                
                <p className="text-[13px] text-[#666666] mb-8 leading-relaxed">
                  {m.focus}
                </p>

                {/* Team composition box */}
                <div className="mb-8 p-4 bg-[#f2f2f2] border border-[#e6e6e6] radius-container font-mono text-[11px]">
                  <span className="text-[#808080] block uppercase text-[9px] tracking-wider mb-1">
                    POD ALLOCATION
                  </span>
                  <span className="text-[#000000] font-medium leading-relaxed block">
                    {m.podComposition}
                  </span>
                </div>

                {/* Scope items */}
                <div className="space-y-3 mb-8">
                  <span className="font-mono text-[10px] text-[#808080] uppercase tracking-wider block">
                    KEY DELIVERABLES
                  </span>
                  <ul className="space-y-2.5">
                    {m.scope.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13px] text-[#333333] leading-snug">
                        <span className="text-[#808080] font-mono text-[11px] shrink-0 mt-0.5">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom context & Action */}
              <div className="pt-6 border-t border-[#e6e6e6]">
                <div className="font-mono text-[9px] uppercase tracking-wider text-[#808080] mb-1">
                  RECOMMENDED FOR
                </div>
                <div className="text-[12px] text-[#666666] leading-relaxed mb-6">
                  {m.idealFor}
                </div>
                
                <button
                  type="button"
                  onClick={() => handleOpenBooking(m.serviceSlug)}
                  className="w-full py-2.5 px-4 radius-button bg-[#000000] hover:bg-[#1f1f1f] text-[#ffffff] font-mono text-[11px] uppercase tracking-wider font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire / Book Model</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* IP and Contract Invariant */}
        <div className="mt-12 p-8 radius-container bg-[#f2f2f2] border border-[#e6e6e6] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-[11px]">
          <div className="text-[#333333] leading-relaxed max-w-[700px]">
            <strong className="text-[#000000] tracking-wider uppercase">[ CONTRACT INVARIANT ]</strong> Fixed milestone pricing with zero hidden charges. 100% repository IP transferred to your private Git repo with every automated push. Zero vendor lock-in.
          </div>
          <Link
            href="/services"
            className="type-action inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-[#000000] hover:underline shrink-0"
          >
            <span>View All Service Pricing</span>
            <span>→</span>
          </Link>
        </div>

      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedServiceId={preselectedService}
      />
    </section>
  );
}
