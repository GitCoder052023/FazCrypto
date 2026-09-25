"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface TopologyNode {
  id: string;
  name: string;
  role: string;
  protocol: string;
  sla: string;
  failover: string;
  throughput: string;
}

const TOPOLOGY_NODES: TopologyNode[] = [
  {
    id: "edge",
    name: "01 / Ingress & Edge Gateway",
    role: "Envoy / Cloudflare edge routing, mTLS termination, rate limiting & token verification",
    protocol: "HTTP/3 • gRPC-Web • TLS 1.3",
    sla: "P99 < 3.2ms overhead",
    failover: "Anycast BGP automatic rerouting",
    throughput: "120,000 req/sec peak rated",
  },
  {
    id: "core",
    name: "02 / Distributed Service Mesh",
    role: "Domain-decoupled Go & TypeScript micro-engines with strict interface boundaries",
    protocol: "Internal gRPC / Protobuf v3",
    sla: "P99 < 18ms execution",
    failover: "Active-active multi-zone pods",
    throughput: "Horizontal autoscale (1-100 pods)",
  },
  {
    id: "events",
    name: "03 / Event Bus & Outbox",
    role: "Partitioned Kafka event stream ensuring idempotent async processing & zero message loss",
    protocol: "Kafka Protocol / Avro Schema Registry",
    sla: "Zero data loss (acks=all)",
    failover: "3-node ZK/KRaft quorum replication",
    throughput: "45,000 msgs/sec guaranteed",
  },
  {
    id: "data",
    name: "04 / Partitioned Data Tier",
    role: "PostgreSQL relational core with connection pooling, read replicas & Redis state cache",
    protocol: "Native TCP / PgBouncer pooler",
    sla: "Query budget < 12ms",
    failover: "Automated Patroni leader election",
    throughput: "14,000 IOPS provisioned",
  },
  {
    id: "telemetry",
    name: "05 / Observability & Integrity",
    role: "Continuous OpenTelemetry traces, automated error budgets & canary health gates",
    protocol: "OTLP gRPC push / Prometheus scrape",
    sla: "Anomaly detection < 450ms",
    failover: "Out-of-band telemetry buffer",
    throughput: "Real-time trace sampling",
  },
];

export default function HeroSection() {
  const [selectedNode, setSelectedNode] = useState<TopologyNode>(TOPOLOGY_NODES[1]);

  return (
    <section className="relative bg-[#19191a] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-[#323234]">
      {/* Background structural alignment grid */}
      <div 
        className="absolute inset-0 pointer-events-none technical-grid opacity-60" 
        aria-hidden="true" 
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Top technical taxonomy marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#323234] border border-[#464554] text-[#bfbec9] font-mono text-[11px] tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff470a]" />
            SPEC // ENTERPRISE IT & PLATFORM ARCHITECTURE
          </span>
          <span className="h-[1px] w-12 bg-[#323234] hidden sm:inline-block" />
          <span className="text-[#76757f] font-mono text-[11px] hidden sm:inline-block">
            REV 2026.4 // PROD-HARDENED
          </span>
        </div>

        {/* Asymmetric 7 / 5 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column (7 cols): The Agency Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.12] tracking-[-0.02em] font-display text-white mb-6">
              We architect, rebuild, and operate the core systems your business{" "}
              <span className="text-white underline decoration-[#ff470a] decoration-4 underline-offset-8">
                cannot afford to fail.
              </span>
            </h1>

            <p className="text-lg sm:text-[18px] leading-[28px] text-[#bfbec9] max-w-xl mb-9">
              High-throughput backend architectures, zero-downtime legacy migrations, 
              and mission-critical operational tools. Engineered by senior technical architects 
              who treat production software as a durable asset, not disposable code.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-full bg-[#ff470a] hover:bg-[#ff561d] text-white text-[14px] font-medium transition-colors duration-200 shadow-[0_4px_8px_rgba(0,0,0,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff470a]"
              >
                <span>Initiate Technical Scope</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#323234] hover:bg-[#464554] text-white text-[14px] font-medium border border-[#464554] transition-colors duration-200 focus:outline-none"
              >
                <span>Review Core Capabilities</span>
              </a>
            </div>

            {/* Measured Technical Parameters (Real metrics of our architectural bar) */}
            <div className="pt-8 border-t border-[#323234] grid grid-cols-3 gap-6 font-mono">
              <div>
                <div className="text-[11px] text-[#76757f] uppercase tracking-wider mb-1">
                  Availability Bar
                </div>
                <div className="text-lg font-semibold text-white">99.99%</div>
                <div className="text-[11px] text-[#bfbec9]">zero-panic cutovers</div>
              </div>

              <div>
                <div className="text-[11px] text-[#76757f] uppercase tracking-wider mb-1">
                  Latency Budget
                </div>
                <div className="text-lg font-semibold text-white">&lt; 45ms</div>
                <div className="text-[11px] text-[#bfbec9]">P99 service threshold</div>
              </div>

              <div>
                <div className="text-[11px] text-[#76757f] uppercase tracking-wider mb-1">
                  Code Governance
                </div>
                <div className="text-lg font-semibold text-white">100% IP</div>
                <div className="text-[11px] text-[#bfbec9]">day-one client transfer</div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Authentic Engineering Visual — System Topology Inspector */}
          <div className="lg:col-span-5">
            <div className="bg-[#222224] border border-[#323234] rounded-[16px] overflow-hidden shadow-[0_8px_9px_rgba(0,0,0,0.24)]">
              {/* Terminal-style header */}
              <div className="px-5 py-3.5 bg-[#19191a] border-b border-[#323234] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff470a]/80" />
                  <span className="font-mono text-xs text-[#bfbec9] font-medium">
                    ARCHITECTURAL TOPOLOGY MAP
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#76757f] uppercase tracking-wider">
                  ACTIVE SPEC // CLUSTER-V4
                </span>
              </div>

              {/* Topology Node Selector */}
              <div className="p-3 bg-[#19191a]/60 border-b border-[#323234] flex flex-col gap-1.5">
                {TOPOLOGY_NODES.map((node) => {
                  const isSelected = selectedNode.id === node.id;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setSelectedNode(node)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-[8px] font-mono text-xs transition-all duration-150 flex items-center justify-between ${
                        isSelected
                          ? "bg-[#ff470a]/10 border border-[#ff470a]/40 text-white"
                          : "bg-transparent hover:bg-[#323234]/40 border border-transparent text-[#bfbec9]"
                      }`}
                    >
                      <span className="font-medium">{node.name}</span>
                      <span className={`text-[10px] uppercase ${isSelected ? "text-[#ff470a] font-bold" : "text-[#76757f]"}`}>
                        {isSelected ? "INSPECTING" : "VIEW"}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Detailed Specification for Active Node */}
              <div className="p-5 bg-[#222224]">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-[#ff470a] uppercase tracking-wider font-semibold">
                    COMPONENT SPECIFICATION
                  </span>
                  <span className="font-mono text-[10px] text-[#76757f]">
                    TOPOLOGY NODE {selectedNode.name.slice(0, 2)}
                  </span>
                </div>

                <p className="text-sm text-white font-medium mb-4 leading-relaxed">
                  {selectedNode.role}
                </p>

                {/* Technical properties */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#323234] font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-[#76757f] block uppercase mb-0.5">
                      Protocol & Wire Spec
                    </span>
                    <span className="text-white text-[11px]">
                      {selectedNode.protocol}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#76757f] block uppercase mb-0.5">
                      Latency / Loss SLA
                    </span>
                    <span className="text-[#f78da7] text-[11px]">
                      {selectedNode.sla}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#76757f] block uppercase mb-0.5">
                      Failover Strategy
                    </span>
                    <span className="text-white text-[11px]">
                      {selectedNode.failover}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#76757f] block uppercase mb-0.5">
                      Throughput Budget
                    </span>
                    <span className="text-white text-[11px]">
                      {selectedNode.throughput}
                    </span>
                  </div>
                </div>

                {/* Verification footer */}
                <div className="mt-4 pt-3 border-t border-[#323234]/80 flex items-center justify-between text-[11px] font-mono text-[#76757f]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Hermetic Sandbox Tested
                  </span>
                  <span>ZERO UNKNOWN DRIFT</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
