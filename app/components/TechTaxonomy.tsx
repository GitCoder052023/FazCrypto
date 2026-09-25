"use client";

import { useState } from "react";

interface TaxonomyDomain {
  id: string;
  name: string;
  archetype: string;
  rationale: string;
  technologies: {
    name: string;
    role: string;
    tradeoff: string;
  }[];
}

const TAXONOMY_DOMAINS: TaxonomyDomain[] = [
  {
    id: "build",
    name: "01 // BUILD & EXECUTE",
    archetype: "Core Distributed Runtimes & Client Control Planes",
    rationale:
      "We choose compiled, strongly typed runtimes for high-concurrency background services and modern React architectures for dense operational tooling. We avoid bloated frameworks that obfuscate network boundaries.",
    technologies: [
      {
        name: "Go (Golang)",
        role: "High-throughput micro-engines & proxy gateways",
        tradeoff: "Chosen for deterministic memory overhead, fast cold-starts, and native concurrency primitives (goroutines).",
      },
      {
        name: "TypeScript / Node.js",
        role: "BFF (Backend for Frontend) layers & domain APIs",
        tradeoff: "End-to-end type sharing between database schemas and client interfaces.",
      },
      {
        name: "Next.js (App Router)",
        role: "Internal operational control planes & portals",
        tradeoff: "Server Components provide sub-100ms first paint and eliminate client bundle bloat for complex workflows.",
      },
      {
        name: "gRPC & Protocol Buffers",
        role: "Strict inter-service wire contracts",
        tradeoff: "10x faster serialization than JSON with guaranteed schema backward-compatibility.",
      },
    ],
  },
  {
    id: "persist",
    name: "02 // PERSIST & STREAM",
    archetype: "Relational Persistence, Caching & Event Streaming",
    rationale:
      "Data loss is unacceptable. We favor battle-tested relational databases with explicit ACID guarantees over NoSQL trends, complemented by distributed event streaming for async workflows.",
    technologies: [
      {
        name: "PostgreSQL",
        role: "Single source of transactional truth",
        tradeoff: "Rock-solid ACID guarantees, rich JSONB indexing, and reliable read-replica scaling via PgBouncer.",
      },
      {
        name: "Apache Kafka",
        role: "Partitioned event log & cross-service bus",
        tradeoff: "Guaranteed event ordering, replayability, and horizontal consumption across decoupled services.",
      },
      {
        name: "Redis Cluster",
        role: "Sub-millisecond state caching & distributed locks",
        tradeoff: "Eliminates hot database queries and enables atomic lock acquisition across distributed pods.",
      },
      {
        name: "Debezium (CDC)",
        role: "Change Data Capture for zero-downtime cutover",
        tradeoff: "Streams raw WAL logs directly from PostgreSQL to Kafka without modifying legacy application code.",
      },
    ],
  },
  {
    id: "operate",
    name: "03 // OPERATE & SCALE",
    archetype: "Declarative Infrastructure, CI/CD & Observability",
    rationale:
      "If infrastructure cannot be destroyed and recreated from code in under 20 minutes, it is technical debt. We codify everything from DNS routing to container quotas.",
    technologies: [
      {
        name: "Terraform",
        role: "Declarative cloud state management",
        tradeoff: "Hermetic infrastructure definitions across AWS/GCP with immutable version control.",
      },
      {
        name: "Kubernetes & Docker",
        role: "Container scheduling & self-healing compute",
        tradeoff: "Automated pod health checks, horizontal autoscaling, and zero-downtime rolling updates.",
      },
      {
        name: "OpenTelemetry",
        role: "Distributed tracing across microservices",
        tradeoff: "Vendor-agnostic trace collection pinpointing exact sub-millisecond network bottlenecks.",
      },
      {
        name: "Prometheus & Grafana",
        role: "Metric ingestion & alerting engines",
        tradeoff: "Actionable SLO/SLI tracking tied directly to business-critical transaction success rates.",
      },
    ],
  },
  {
    id: "protect",
    name: "04 // PROTECT & GOVERN",
    archetype: "Zero-Trust Identity, Cryptographic Auditing & Secrets",
    rationale:
      "Security is an architectural invariant, not an afterthought. We isolate credentials, enforce mTLS between internal services, and maintain tamper-evident audit trails.",
    technologies: [
      {
        name: "mTLS & Envoy Mesh",
        role: "Mutual cryptographic verification between pods",
        tradeoff: "Prevents lateral movement in the event of a compromised internal container.",
      },
      {
        name: "OIDC & SAML SSO",
        role: "Enterprise authentication & RBAC governance",
        tradeoff: "Seamless integration with enterprise identity providers (Okta, Azure AD) with strict permission matrices.",
      },
      {
        name: "HashiCorp Vault",
        role: "Dynamic secret generation & cryptographic key storage",
        tradeoff: "Zero static credentials in repositories; short-lived database access tokens.",
      },
      {
        name: "Immutable Audit Engine",
        role: "Tamper-evident operational logging",
        tradeoff: "Append-only cryptographic record of every administrative action, data export, and permission grant.",
      },
    ],
  },
];

export default function TechTaxonomy() {
  const [activeTab, setActiveTab] = useState<string>("build");
  const activeDomain = TAXONOMY_DOMAINS.find((d) => d.id === activeTab) || TAXONOMY_DOMAINS[0];

  return (
    <section id="taxonomy" className="py-24 md:py-32 bg-white text-[#19191a] border-b border-[#ededed]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#ededed]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#76757f] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff470a]" />
              <span>04 / ENGINEERING TAXONOMY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.2] tracking-[-0.015em] font-display">
              A deliberate stack, <br className="hidden sm:inline" />
              not a logo collection.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#76757f] max-w-sm font-mono">
            Every library, database, and protocol in our toolbox has a specific operational rationale and known failure mode.
          </p>
        </div>

        {/* Domain Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-10 pb-6 border-b border-[#ededed]">
          {TAXONOMY_DOMAINS.map((domain) => {
            const isActive = domain.id === activeTab;
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setActiveTab(domain.id)}
                className={`text-left p-3.5 sm:p-4 rounded-[12px] transition-all border ${
                  isActive
                    ? "bg-[#19191a] text-white border-[#19191a] shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
                    : "bg-[#f5f5f6] text-[#323234] border-[#e0e0e0] hover:bg-[#ededed]"
                }`}
              >
                <div className={`font-mono text-[11px] mb-1 ${isActive ? "text-[#ff470a]" : "text-[#76757f]"}`}>
                  {domain.name.split("//")[0]}
                </div>
                <div className="font-display font-medium text-sm sm:text-base leading-tight">
                  {domain.name.split("//")[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Domain Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Domain Rationale (4 cols) */}
          <div className="lg:col-span-4 bg-[#f5f5f6] border border-[#e0e0e0] p-6 sm:p-7 rounded-[16px]">
            <span className="font-mono text-xs font-semibold text-[#ff470a] uppercase tracking-wider block mb-2">
              DOMAIN PHILOSOPHY
            </span>
            <h3 className="text-xl font-display font-medium text-[#19191a] mb-3">
              {activeDomain.archetype}
            </h3>
            <p className="text-sm leading-relaxed text-[#464554] mb-6">
              {activeDomain.rationale}
            </p>

            <div className="p-4 bg-white rounded-[8px] border border-[#e0e0e0] font-mono text-xs text-[#323234]">
              <span className="text-[#76757f] block uppercase text-[10px] mb-1">
                SELECTION GOAL
              </span>
              <span>Predictable behavior under extreme concurrency with zero unmonitored states.</span>
            </div>
          </div>

          {/* Technology Tradeoff Table (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-[#e0e0e0] rounded-[16px] divide-y divide-[#ededed] overflow-hidden">
            {activeDomain.technologies.map((tech) => (
              <div key={tech.name} className="p-5 sm:p-6 hover:bg-[#fafafa] transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h4 className="font-display font-semibold text-lg text-[#19191a]">
                    {tech.name}
                  </h4>
                  <span className="font-mono text-xs text-[#76757f]">
                    {tech.role}
                  </span>
                </div>
                <p className="text-sm text-[#464554] leading-relaxed">
                  <strong className="text-[#19191a] font-medium">Tradeoff Rationale: </strong>
                  {tech.tradeoff}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
