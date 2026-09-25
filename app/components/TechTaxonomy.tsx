"use client";

import { useState } from "react";

interface TechGroup {
  category: string;
  domain: string;
  rationale: string;
  stack: {
    name: string;
    role: string;
    tradeoff: string;
  }[];
}

const TECH_GROUPS: TechGroup[] = [
  {
    category: "FRONTEND & INTERFACES",
    domain: "Operational Control Planes & High-Density Applications",
    rationale: "We prioritize sub-100ms first paint, client-side dataset filtering, and strict TypeScript types across the network boundary.",
    stack: [
      { name: "Next.js (App Router)", role: "Server Components & Architecture", tradeoff: "Zero client bundle bloat for data-dense operational pages." },
      { name: "TypeScript", role: "End-to-End Type Safety", tradeoff: "Prevents runtime null reference errors across service APIs." },
      { name: "Tailwind CSS", role: "Utility Design Tokens", tradeoff: "Hermetic styling with zero runtime stylesheet injection overhead." },
      { name: "React 19", role: "Reactive UI Engine", tradeoff: "Concurrent rendering and action hooks for seamless form interactions." },
    ],
  },
  {
    category: "BACKEND & APPLICATION CORE",
    domain: "Compiled Microservices & Domain Facades",
    rationale: "We engineer compiled backend services with deterministic CPU/memory consumption and low cold-start latency.",
    stack: [
      { name: "Go (Golang)", role: "High-Throughput Engines", tradeoff: "Predictable memory usage and native goroutine concurrency under peak load." },
      { name: "Node.js", role: "BFF & Integration Layers", tradeoff: "Unified TypeScript schemas between client interfaces and domain services." },
      { name: "gRPC & Protocol Buffers", role: "Internal Service Wire Contracts", tradeoff: "10x faster serialization than JSON with strict schema validation." },
      { name: "Envoy Reverse Proxy", role: "Edge Routing & mTLS Gateway", tradeoff: "Dynamic zero-downtime routing and automated telemetry collection." },
    ],
  },
  {
    category: "DATA & PERSISTENCE",
    domain: "Relational Storage & Real-Time Event Brokers",
    rationale: "Data durability is a non-negotiable invariant. We favor proven ACID guarantees over NoSQL trends.",
    stack: [
      { name: "PostgreSQL", role: "Single Source of Truth", tradeoff: "Rock-solid relational transactions, PgBouncer pooling, and replica scaling." },
      { name: "Apache Kafka", role: "Distributed Event Log", tradeoff: "Guaranteed event ordering, replayability, and decoupled asynchronous consumers." },
      { name: "Redis Cluster", role: "In-Memory State & Distributed Locks", tradeoff: "Sub-millisecond read caching and atomic mutex acquisition across pods." },
      { name: "Debezium (CDC)", role: "Change Data Capture", tradeoff: "Replicates database write-ahead logs to Kafka with zero application-level latency." },
    ],
  },
  {
    category: "INFRASTRUCTURE & RELIABILITY",
    domain: "Declarative Cloud Platforms & Observability",
    rationale: "If infrastructure cannot be destroyed and reproduced in 20 minutes from code, it is operational liability.",
    stack: [
      { name: "Terraform", role: "Declarative Cloud State", tradeoff: "Hermetic infrastructure definitions across AWS and GCP with zero drift." },
      { name: "Docker & Kubernetes", role: "Self-Healing Container Compute", tradeoff: "Automated container restarts, health probes, and canary rollout scheduling." },
      { name: "OpenTelemetry", role: "Distributed Tracing", tradeoff: "Vendor-agnostic distributed trace collection identifying sub-millisecond bottlenecks." },
      { name: "Prometheus & Grafana", role: "Metrics & SLA Alerting", tradeoff: "Real-time error budget tracking tied directly to business transaction health." },
    ],
  },
];

export default function TechTaxonomy() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeGroup = TECH_GROUPS[activeIdx];

  return (
    <section id="taxonomy" className="py-24 md:py-32 bg-[#ffffff] text-[#000000] border-b border-[#e6e6e6]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="pb-8 mb-16 border-b border-[#e6e6e6] flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#666666] mb-3">
              04 / ENGINEERING TAXONOMY
            </div>
            <h2 className="type-heading font-normal text-[#000000] tracking-tight">
              A deliberate technological stack, <br className="hidden sm:inline" />
              <span className="italic text-[#808080]">organized around architectural tradeoffs.</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 font-mono text-xs text-[#666666]">
            NO LOGO WALLS • NO RESUME-DRIVEN SELECTIONS
          </div>
        </div>

        {/* Structured Editorial Taxonomy Layout (Section 38) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Domain Selection Column (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-mono text-[#808080] uppercase tracking-wider block mb-3">
              SELECT LAYER //
            </span>
            {TECH_GROUPS.map((group, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={group.category}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-4 rounded-[12px] font-brand text-xs sm:text-sm transition-all border ${
                    isSelected
                      ? "bg-[#000000] text-[#ffffff] border-[#000000] font-medium"
                      : "bg-[#f2f2f2] text-[#333333] border-[#e6e6e6] hover:bg-[#e6e6e6]"
                  }`}
                >
                  <div className="font-mono text-[10px] text-[#808080] mb-0.5">
                    0{idx + 1} {"//"}
                  </div>
                  <div>{group.category}</div>
                </button>
              );
            })}
          </div>

          {/* Detailed Tradeoff Table (8 cols) */}
          <div className="lg:col-span-8 bg-[#f2f2f2] border border-[#e6e6e6] radius-container p-6 sm:p-8">
            <div className="pb-4 mb-6 border-b border-[#cccccc]">
              <span className="font-mono text-[10px] text-[#808080] uppercase block">
                DOMAIN PURPOSE
              </span>
              <h3 className="type-subheading font-medium text-[#000000] mt-1">
                {activeGroup.domain}
              </h3>
              <p className="text-xs text-[#666666] mt-2 max-w-xl leading-relaxed">
                {activeGroup.rationale}
              </p>
            </div>

            <div className="divide-y divide-[#e6e6e6] bg-[#ffffff] rounded-[16px] border border-[#e6e6e6] overflow-hidden">
              {activeGroup.stack.map((item) => (
                <div key={item.name} className="p-5 font-mono text-xs hover:bg-[#f2f2f2]/40 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <span className="font-brand font-semibold text-sm text-[#000000]">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-[#808080]">
                      {item.role}
                    </span>
                  </div>
                  <p className="text-[#666666] text-[11px] leading-relaxed mt-1">
                    <strong className="text-[#000000] font-medium">Tradeoff: </strong>
                    {item.tradeoff}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
