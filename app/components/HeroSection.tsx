"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SpecNode {
  id: string;
  name: string;
  domain: string;
  spec: string;
  guarantee: string;
}

const SPEC_NODES: SpecNode[] = [
  {
    id: "ingress",
    name: "01 / INGRESS MESH",
    domain: "Edge Routing & Envoy TLS 1.3 Termination",
    spec: "Anycast BGP routing with automated rate-limiting & token validation.",
    guarantee: "P99 < 3.2ms overhead • Zero unmonitored routes",
  },
  {
    id: "services",
    name: "02 / DISTRIBUTED CORE",
    domain: "Compiled Go & Node Service Pods",
    spec: "Strict domain boundaries with Protobuf v3 inter-service contracts.",
    guarantee: "Deterministic memory profile • Horizontal autoscale",
  },
  {
    id: "outbox",
    name: "03 / EVENT TRANSACTION BUS",
    domain: "Partitioned Kafka & Transactional Outbox",
    spec: "Append-only event journal ensuring idempotent processing across boundaries.",
    guarantee: "Zero message loss (acks=all) • Sub-second replay",
  },
  {
    id: "persistence",
    name: "04 / PERSISTENT STORAGE",
    domain: "PostgreSQL Primary + Read Replicas & Redis",
    spec: "Connection poolers (PgBouncer) with Patroni automated failover.",
    guarantee: "ACID compliance • Multi-zone snapshot durability",
  },
];

export default function HeroSection() {
  const [activeSpec, setActiveSpec] = useState<SpecNode>(SPEC_NODES[0]);

  return (
    <section className="relative bg-[#ffffff] text-[#000000] pt-32 pb-24 md:pt-40 md:pb-32 border-b border-[#e6e6e6] overflow-hidden">
      
      {/* Editorial side masthead label (Section 45) */}
      <div 
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 masthead-vertical-label text-[10px] font-mono text-[#999999] tracking-[0.25em] uppercase select-none pointer-events-none"
        aria-hidden="true"
      >
        VECTIS // DIGITAL SYSTEMS MONOGRAPH • VOL. 26
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        
        {/* Section Index Marker */}
        <div className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#666666] mb-8 pb-3 border-b border-[#e6e6e6] flex items-center justify-between">
          <span>00 / STUDIO THESIS & PLATFORM ARCHITECTURE</span>
          <span className="hidden sm:inline text-[#999999]">SAN FRANCISCO • ZURICH</span>
        </div>

        {/* Asymmetric Monograph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): Editorial Typography */}
          <div className="lg:col-span-7">
            
            {/* The Signature Two-Line Headline (Section 14) */}
            <div className="mb-8">
              <h1 className="type-display font-normal text-[#000000] tracking-[-0.035em]">
                We architect digital systems
              </h1>
              <div className="type-display font-normal italic text-[#808080] tracking-[-0.035em] mt-1">
                that businesses rely upon.
              </div>
            </div>

            {/* Narrow Editorial Body Column (Section 22: 250-400px width) */}
            <div className="max-w-[380px] text-[#333333] text-[15px] leading-[1.3] mb-10 font-normal">
              High-throughput backend engineering, zero-downtime legacy decoupling, 
              and mission-critical operational tooling. Built by senior systems architects 
              who treat production code as a durable corporate asset.
            </div>

            {/* Typographic Actions (Section 16: No filled colored buttons) */}
            <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-[#e6e6e6]">
              <Link
                href="/services"
                className="font-brand text-[12px] font-semibold tracking-[0.08em] uppercase text-[#000000] hover:text-[#666666] transition-colors flex items-center gap-2"
              >
                <span>Explore Service Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/#cases"
                className="font-brand text-[12px] font-medium tracking-[0.08em] uppercase text-[#666666] hover:text-[#000000] transition-colors flex items-center gap-1.5"
              >
                <span>Selected Portfolios</span>
                <span className="text-[#999999]">→</span>
              </Link>
            </div>

            {/* Typographic Scroll Cue (Section 46) */}
            <div className="mt-14 font-mono text-[10px] text-[#999999] tracking-[0.2em] uppercase">
              [ SCROLL DOWN FOR MONOGRAPH INDEX ]
            </div>

          </div>

          {/* Right Column (5 cols): Physical Architectural Plate (Section 34: 33.76px radius) */}
          <div className="lg:col-span-5">
            <div className="bg-[#f2f2f2] border border-[#e6e6e6] radius-container p-7">
              
              <div className="flex items-baseline justify-between pb-4 mb-5 border-b border-[#cccccc]">
                <span className="font-brand text-[11px] font-bold text-[#000000] uppercase tracking-wider">
                  SYSTEM TOPOLOGY PLATE
                </span>
                <span className="font-mono text-[10px] text-[#808080]">
                  SPEC // 2026.4
                </span>
              </div>

              {/* Node selector tabs */}
              <div className="space-y-2 mb-6">
                {SPEC_NODES.map((node) => {
                  const isSelected = activeSpec.id === node.id;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveSpec(node)}
                      className={`w-full text-left p-3 rounded-[8px] font-mono text-xs transition-colors flex items-center justify-between border ${
                        isSelected
                          ? "bg-[#ffffff] text-[#000000] border-[#000000] font-semibold"
                          : "bg-transparent text-[#666666] border-transparent hover:text-[#000000]"
                      }`}
                    >
                      <span>{node.name}</span>
                      <span className="text-[10px] text-[#999999]">
                        {isSelected ? "[ ACTIVE ]" : "SELECT"}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Detailed Spec Information */}
              <div className="bg-[#ffffff] p-5 rounded-[12px] border border-[#e6e6e6] space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-[#808080] uppercase block">
                    Domain Implementation
                  </span>
                  <span className="text-[#000000] font-medium text-[11px] block mt-0.5">
                    {activeSpec.domain}
                  </span>
                </div>

                <div className="pt-2 border-t border-[#f2f2f2]">
                  <span className="text-[10px] text-[#808080] uppercase block">
                    Architectural Spec
                  </span>
                  <p className="text-[#333333] text-[11px] leading-relaxed mt-0.5">
                    {activeSpec.spec}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#f2f2f2]">
                  <span className="text-[10px] text-[#808080] uppercase block">
                    Invariant Guarantee
                  </span>
                  <span className="text-[#000000] text-[11px] font-semibold block mt-0.5">
                    {activeSpec.guarantee}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#e6e6e6] flex items-center justify-between text-[10px] font-mono text-[#808080]">
                <span>100% HERMETICALLY VERIFIED</span>
                <span>ZERO DRIFT</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
