"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BookingModal from "./BookingModal";

interface CapabilityNode {
  id: string;
  name: string;
  domain: string;
  spec: string;
  guarantee: string;
}

const CAPABILITY_NODES: CapabilityNode[] = [
  {
    id: "web",
    name: "01 / WEB & APP ENGINEERING",
    domain: "Modern Web Applications & Digital Portals",
    spec: "Production Next.js App Router, React 19, TypeScript, and responsive Tailwind CSS.",
    guarantee: "Sub-100ms first paint • Lighthouse 95+ • 100% Repository IP transfer",
  },
  {
    id: "backend",
    name: "02 / BACKEND & API SYSTEMS",
    domain: "High-Throughput Services & Data Schemas",
    spec: "Compiled Go and Node.js microservices with PostgreSQL ACID storage and Redis caching.",
    guarantee: "P99 < 50ms latency • Strict contract validation • Sub-second replay",
  },
  {
    id: "cloud",
    name: "03 / CLOUD INFRASTRUCTURE & SRE",
    domain: "Containerized Cloud Platforms & CI/CD",
    spec: "Hermetic Docker compute on AWS/GCP, automated canary deployment gates, and health probes.",
    guarantee: "Zero-downtime cutover • Codified infrastructure (Terraform) • 99.99% uptime target",
  },
  {
    id: "pod",
    name: "04 / DEDICATED ENGINEERING POD",
    domain: "Embedded Senior Technology Team",
    spec: "Autonomous senior engineering pod working directly inside your GitHub repository on sprint rhythm.",
    guarantee: "Fixed monthly retainer • Direct architect access • No junior subcontractor handoffs",
  },
];

export default function HeroSection() {
  const [activeSpec, setActiveSpec] = useState<CapabilityNode>(CAPABILITY_NODES[0]);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <section className="relative bg-[#ffffff] text-[#000000] pt-32 pb-24 md:pt-40 md:pb-32 border-b border-[#e6e6e6] overflow-hidden">
      
      {/* Editorial side masthead label */}
      <div 
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 masthead-vertical-label text-[10px] font-mono text-[#999999] tracking-[0.25em] uppercase select-none pointer-events-none"
        aria-hidden="true"
      >
        VECTIS // DIGITAL SYSTEMS & TECHNOLOGY STUDIO • 2026
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        
        {/* Section Index Marker */}
        <div className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#666666] mb-8 pb-3 border-b border-[#e6e6e6] flex items-center justify-between">
          <span>01 / COMMERCIAL IT SERVICES &amp; SYSTEMS STUDIO</span>
          <span className="hidden sm:inline text-[#999999]">SAN FRANCISCO • ZURICH</span>
        </div>

        {/* Asymmetric Monograph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): Editorial Typography */}
          <div className="lg:col-span-7">
            
            {/* The Signature Two-Line Headline */}
            <div className="mb-8">
              <h1 className="type-display font-normal text-[#000000] tracking-[-0.035em]">
                We design, build, and scale
              </h1>
              <div className="type-display font-normal italic text-[#808080] tracking-[-0.035em] mt-1">
                digital systems that businesses rely upon.
              </div>
            </div>

            {/* Editorial Body Column */}
            <div className="max-w-[420px] text-[#333333] text-[15px] leading-[1.35] mb-10 font-normal">
              Full-cycle software engineering for growing companies and modern enterprises. 
              From bespoke web applications to high-throughput backend infrastructure—delivered 
              with fixed pricing, clear timelines, and 100% code ownership from day one.
            </div>

            {/* Typographic Actions */}
            <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-[#e6e6e6]">
              <Link
                href="/services"
                className="font-brand text-[12px] font-semibold tracking-[0.08em] uppercase text-[#000000] hover:text-[#666666] transition-colors flex items-center gap-2"
              >
                <span>Explore Services &amp; Pricing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                type="button"
                onClick={() => setBookingModalOpen(true)}
                className="font-brand text-[12px] font-medium tracking-[0.08em] uppercase text-[#666666] hover:text-[#000000] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Discuss a Project</span>
                <span className="text-[#999999]">→</span>
              </button>
            </div>

            {/* Credibility Guarantee Strip */}
            <div className="mt-12 pt-6 border-t border-[#f2f2f2] grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-[11px] text-[#666666]">
              <div>
                <span className="text-[#000000] font-semibold block">100% IP TRANSFER</span>
                <span className="text-[10px] text-[#808080]">Day-one repository access</span>
              </div>
              <div>
                <span className="text-[#000000] font-semibold block">FIXED SCOPE &amp; PRICE</span>
                <span className="text-[10px] text-[#808080]">No speculative billing</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[#000000] font-semibold block">SENIOR TALENT ONLY</span>
                <span className="text-[10px] text-[#808080]">Zero junior subcontractors</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Studio Capability Plate */}
          <div className="lg:col-span-5">
            <div className="bg-[#f2f2f2] border border-[#e6e6e6] radius-container p-7">
              
              <div className="flex items-baseline justify-between pb-4 mb-5 border-b border-[#cccccc]">
                <span className="font-brand text-[11px] font-bold text-[#000000] uppercase tracking-wider">
                  STUDIO CAPABILITY PLATE
                </span>
                <span className="font-mono text-[10px] text-[#808080]">
                  SPEC // 2026.4
                </span>
              </div>

              {/* Node selector tabs */}
              <div className="space-y-2 mb-6">
                {CAPABILITY_NODES.map((node) => {
                  const isSelected = activeSpec.id === node.id;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveSpec(node)}
                      className={`w-full text-left p-3 rounded-[8px] font-mono text-xs transition-colors flex items-center justify-between border cursor-pointer ${
                        isSelected
                          ? "bg-[#ffffff] text-[#000000] border-[#000000] font-semibold"
                          : "bg-transparent text-[#666666] border-transparent hover:text-[#000000]"
                      }`}
                    >
                      <span>{node.name}</span>
                      <span className="text-[10px] text-[#999999]">
                        {isSelected ? "[ ACTIVE ]" : "VIEW"}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Detailed Spec Information */}
              <div className="bg-[#ffffff] p-5 rounded-[12px] border border-[#e6e6e6] space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-[#808080] uppercase block">
                    Core Discipline
                  </span>
                  <span className="text-[#000000] font-medium text-[11px] block mt-0.5">
                    {activeSpec.domain}
                  </span>
                </div>

                <div className="pt-2 border-t border-[#f2f2f2]">
                  <span className="text-[10px] text-[#808080] uppercase block">
                    Technical Deliverable
                  </span>
                  <p className="text-[#333333] text-[11px] leading-relaxed mt-0.5">
                    {activeSpec.spec}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#f2f2f2]">
                  <span className="text-[10px] text-[#808080] uppercase block">
                    Client Guarantee
                  </span>
                  <span className="text-[#000000] text-[11px] font-semibold block mt-0.5">
                    {activeSpec.guarantee}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#e6e6e6] flex items-center justify-between text-[10px] font-mono text-[#808080]">
                <span>CAPACITY: ACCEPTING Q3/Q4</span>
                <span className="text-[#000000] font-medium">FIXED CONTRACTS</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </section>
  );
}
