"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react";

interface Capability {
  number: string;
  title: string;
  tagline: string;
  description: string;
  problemSolved: string;
  technicalWork: string[];
  deliverables: string[];
  techStack: string[];
}

const CAPABILITIES: Capability[] = [
  {
    number: "01",
    title: "DISTRIBUTED CORE & PLATFORM ENGINEERING",
    tagline: "High-throughput transactional engines engineered for predictable scale.",
    description:
      "We design and build distributed backend services that handle high request concurrency, preserve transactional integrity, and maintain sub-50ms latency profiles even during peak commercial demand.",
    problemSolved:
      "Eliminates database connection pool exhaustion, synchronous API bottlenecks, and cascading microservice failures.",
    technicalWork: [
      "Protobuf & gRPC schema contracts for strongly typed inter-service messaging",
      "Asynchronous event bus integration via Apache Kafka / RabbitMQ",
      "Database query profiling, partitioning, and read-replica segregation",
      "Distributed lock management and idempotent transaction workers",
      "Circuit breakers, automatic retry budgets, and bulkhead isolation",
    ],
    deliverables: [
      "Production-hardened Go or TypeScript backend micro-engines",
      "Comprehensive automated integration & stress-test suites",
      "OpenAPI / gRPC contract specifications & consumer mocks",
      "Documented disaster recovery & failover runbooks",
    ],
    techStack: ["Go", "TypeScript / Node", "gRPC", "Kafka", "PostgreSQL", "Redis"],
  },
  {
    number: "02",
    title: "LEGACY RE-ARCHITECTURE & DECOUPLING",
    tagline: "Modernize mission-critical monoliths with zero production downtime.",
    description:
      "We surgically decouple legacy architectures using proven migration patterns like the Strangler Fig. Your existing revenue-generating systems remain online while modern services assume traffic incrementally.",
    problemSolved:
      "Stops multi-hour midnight maintenance windows, eliminates fear of production deploys, and unblocks stuck development teams.",
    technicalWork: [
      "Static analysis and dependency graph extraction of the legacy codebase",
      "Implementation of reverse proxy routing facades (Envoy / Traefik)",
      "Database Change Data Capture (CDC) via Debezium for dual-write parity",
      "Shadow traffic replay to verify output identicality before live cutover",
      "Phased strangulation and safe decommissioning of obsolete components",
    ],
    deliverables: [
      "Decoupled, modular services with independent deployment pipelines",
      "Automated dual-write verification scripts and reconciliation logs",
      "Zero-downtime database schema migration strategy",
      "Knowledge-transfer documentation for internal engineering teams",
    ],
    techStack: ["Debezium", "Envoy", "Docker", "PostgreSQL", "Temporal.io", "GitOps"],
  },
  {
    number: "03",
    title: "OPERATIONAL INTERFACES & CONTROL PLANES",
    tagline: "Replace spreadsheets and manual ops with high-speed internal systems.",
    description:
      "We engineer custom enterprise internal applications that give operations, risk, and finance teams precise visibility and control—eliminating human error and dangerous direct database edits.",
    problemSolved:
      "Ends cross-department spreadsheet confusion, eliminates data synchronization delays, and satisfies compliance audit requirements.",
    technicalWork: [
      "High-density data tables with sub-100ms client-side filtering and sorting",
      "Role-Based Access Control (RBAC) and attribute-based permissions (ABAC)",
      "Immutable audit log streams tracking every record modification and author",
      "Real-time state synchronization using WebSockets and server-sent events",
      "Direct integration with enterprise identity providers (SAML, Okta, Azure AD)",
    ],
    deliverables: [
      "Responsive, keyboard-navigable Next.js / React management portal",
      "Comprehensive audit trail & administrative privilege hierarchy",
      "Automated daily reconciliation and discrepancy alerting engine",
      "Interactive technical user documentation and onboarding guide",
    ],
    techStack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "WebSockets", "Auth0 / Okta"],
  },
  {
    number: "04",
    title: "CLOUD INFRASTRUCTURE, SRE & RELIABILITY",
    tagline: "Hermetic infrastructure codified to recover automatically from failures.",
    description:
      "We replace ad-hoc cloud configurations with hardened, reproducible Infrastructure as Code. We design self-healing container topologies, canary deployment pipelines, and end-to-end telemetry.",
    problemSolved:
      "Prevents infrastructure drift between staging and production, eliminates unexplained outages, and removes manual deployment friction.",
    technicalWork: [
      "Declarative infrastructure management using modular Terraform",
      "Production-grade Kubernetes cluster provisioning, security hardening, and autoscaling",
      "Canary and blue/green automated deployment pipelines via ArgoCD / GitHub Actions",
      "Distributed tracing and structured metrics via OpenTelemetry and Prometheus",
      "Automated cross-region snapshotting, backup integrity verification, and restore drills",
    ],
    deliverables: [
      "Complete version-controlled Terraform repository with zero drift",
      "Automated CI/CD pipelines with integrated security scanning",
      "Pre-configured Grafana dashboards with actionable SLO/SLI alerts",
      "Disaster recovery runbook with verified RPO < 5min and RTO < 15min",
    ],
    techStack: ["Terraform", "Kubernetes", "AWS / GCP", "Docker", "Prometheus", "OpenTelemetry"],
  },
];

export default function ServicesIndex() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <section id="capabilities" className="py-24 md:py-32 bg-[#fafafa] text-[#19191a] border-b border-[#ededed]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#ededed]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#76757f] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff470a]" />
              <span>02 / CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.2] tracking-[-0.015em] font-display">
              Capabilities built around systems, <br className="hidden sm:inline" />
              not buzzwords.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#76757f] max-w-sm font-mono">
            Every engagement delivers production-verified software, complete infrastructure manifests, and automated test harnesses.
          </p>
        </div>

        {/* Numbered Editorial Service Rows */}
        <div className="divide-y divide-[#e0e0e0] border-t border-b border-[#e0e0e0]">
          {CAPABILITIES.map((cap, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={cap.number}
                className="py-8 transition-colors duration-150"
              >
                {/* Clickable Header Row */}
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  className="w-full text-left flex flex-col md:flex-row md:items-center justify-between gap-6 group focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-baseline gap-6 sm:gap-8">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-[#ff470a]">
                      {cap.number}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-medium text-[#19191a] group-hover:text-[#ff470a] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-[#76757f] mt-1 font-mono">
                        {cap.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-center">
                    <span className="hidden sm:inline-block font-mono text-xs text-[#76757f] uppercase">
                      {isExpanded ? "Collapse Detail" : "Inspect Scope"}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
                        isExpanded
                          ? "bg-[#ff470a] text-white border-[#ff470a] rotate-180"
                          : "bg-white text-[#323234] border-[#bfbec9] group-hover:border-[#ff470a]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Editorial Content */}
                {isExpanded && (
                  <div className="mt-8 pt-8 border-t border-dashed border-[#e0e0e0] grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-200">
                    
                    {/* Left: Description & Problem Solved (5 cols) */}
                    <div className="lg:col-span-5 space-y-6">
                      <div>
                        <span className="font-mono text-[11px] font-semibold text-[#76757f] uppercase tracking-wider block mb-2">
                          Capability Overview
                        </span>
                        <p className="text-[16px] leading-[26px] text-[#323234]">
                          {cap.description}
                        </p>
                      </div>

                      <div className="p-4 bg-white border border-[#e0e0e0] rounded-[12px]">
                        <span className="font-mono text-[11px] font-semibold text-[#ff470a] uppercase tracking-wider block mb-1">
                          Primary Business Bottleneck Solved
                        </span>
                        <p className="text-sm text-[#464554]">
                          {cap.problemSolved}
                        </p>
                      </div>

                      {/* Tech Stack Pills */}
                      <div>
                        <span className="font-mono text-[11px] font-semibold text-[#76757f] uppercase tracking-wider block mb-2">
                          Core Technology Ecosystem
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {cap.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-[4px] bg-[#ededed] text-[#323234] font-mono text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Technical Work & Deliverables (7 cols) */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 sm:p-7 rounded-[16px] border border-[#e0e0e0]">
                      <div>
                        <span className="font-mono text-xs font-semibold text-[#19191a] uppercase tracking-wider block mb-3 pb-2 border-b border-[#ededed]">
                          Engineering Scope
                        </span>
                        <ul className="space-y-2.5">
                          {cap.technicalWork.map((item, i) => (
                            <li key={i} className="text-xs sm:text-sm text-[#464554] flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ff470a] mt-2 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="font-mono text-xs font-semibold text-[#19191a] uppercase tracking-wider block mb-3 pb-2 border-b border-[#ededed]">
                          Tangible Deliverables
                        </span>
                        <ul className="space-y-2.5">
                          {cap.deliverables.map((item, i) => (
                            <li key={i} className="text-xs sm:text-sm text-[#323234] flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Scope CTA Banner */}
        <div className="mt-12 p-6 bg-white border border-[#e0e0e0] rounded-[16px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold text-[#ff470a] uppercase tracking-wider">
              Need a tailored engineering scope?
            </span>
            <p className="text-sm text-[#323234] mt-0.5">
              We review architectural constraints, repository health, and current performance metrics before proposing any contract.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 h-11 rounded-full bg-[#19191a] hover:bg-[#323234] text-white text-xs font-medium font-mono uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Request Technical Audit</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#ff470a]" />
          </a>
        </div>

      </div>
    </section>
  );
}
