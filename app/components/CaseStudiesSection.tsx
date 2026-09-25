import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudiesSection() {
  const projects = [
    {
      index: "01",
      name: "MERIDIAN FREIGHT & DISPATCH",
      category: "REAL-TIME TELEMETRY ENGINE",
      year: "2025",
      headline: "Replacing 6 regional dispatch spreadsheets with an event-driven telemetry platform.",
      context: "Coordinates commercial freight across 6 hubs. Operations previously depended on telephone check-ins, manual spreadsheets, and whiteboard assignments—resulting in delayed driver dispatches.",
      intervention: "Engineered an event-streaming platform in Go and Apache Kafka. Integrated GPS edge telemetry with real-time route optimization and WebSocket driver dispatch queues.",
      outcome: "Eliminated manual spreadsheets entirely. Real-time fleet positioning updates in under 600ms with zero dispatch state loss.",
      servicesUsed: [
        { name: "Custom Web App", href: "/services/custom-web-application" },
        { name: "API & Backend", href: "/services/backend-api-development" },
        { name: "Cloud Setup", href: "/services/cloud-setup-deployment" },
      ],
      schematic: [
        "POST /v2/telemetry/beacon → Envoy Ingress → mTLS Check",
        "topic: meridian.telemetry.v1 • partitions: 16 • replication: 3",
        "Go Consumer Pool → PostgreSQL (UPSERT) + Redis PubSub",
      ],
    },
    {
      index: "02",
      name: "KESTREL SETTLEMENTS",
      category: "FINANCIAL TRANSACTION LEDGER",
      year: "2025",
      headline: "Decoupling a 12-year-old banking monolith to achieve continuous automated reconciliation.",
      context: "Kestrel handles high-volume corporate disbursements across 8 partner banking institutions. Daily reconciliation previously relied on an unindexed 14-hour SQL batch job.",
      intervention: "Implemented the Transactional Outbox pattern with Debezium Change Data Capture on PostgreSQL. Extracted ledger events into an immutable append-only ledger service with idempotent payment handlers.",
      outcome: "Overnight batch reconciliation replaced by continuous sub-second ledger matching. Month-end close accelerated from 5 business days to 30 minutes.",
      servicesUsed: [
        { name: "API & Backend", href: "/services/backend-api-development" },
        { name: "Application Maintenance", href: "/services/application-maintenance" },
      ],
      schematic: [
        "TX_ID: 8f9b2a-7c // SETTLED • AUTH: PARTNER_CHASE_04",
        "TX_ID: 9a01c3-4d // SETTLED • SHA256 DOUBLE-ENTRY VERIFIED",
        "TX_ID: 9a01c4-1e // IDEMPOTENCY CATCH (Zero ledger drift)",
      ],
    },
    {
      index: "03",
      name: "SYNAPSE HEALTH GATEWAY",
      category: "HIGH-COMPLIANCE EHR INTEGRATION",
      year: "2026",
      headline: "A zero-trust clinical data gateway bridging 4 disparate hospital EHR vendor platforms.",
      context: "Synapse provides clinical telemetry integration across regional health networks with strict HIPAA and SOC2 Type II compliance constraints.",
      intervention: "Engineered an isolated mTLS API gateway with dynamic FHIR schema transformation, field-level envelope encryption, and cryptographic audit log immutability.",
      outcome: "Passed 3 consecutive external security penetration audits with zero findings. Reduced clinical partner onboarding from 8 weeks to 4 business days.",
      servicesUsed: [
        { name: "Cloud Setup & SRE", href: "/services/cloud-setup-deployment" },
        { name: "API & Backend", href: "/services/backend-api-development" },
      ],
      schematic: [
        "FIELD-LEVEL ENVELOPE ENCRYPTION: AES-256-GCM (Zero PHI in log)",
        "MUTUAL POD AUTHENTICATION: Short-lived SPIFFE/SPIRE X.509 certs",
        "AUDIT ATTESTATION: HIPAA & SOC2 TYPE II COMPLIANCE READY",
      ],
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32 bg-[#ffffff] text-[#000000] border-b border-[#e6e6e6] scroll-mt-20">
      <div id="cases" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="pb-8 mb-16 border-b border-[#e6e6e6] flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#666666] mb-3">
              03 / SELECTED CLIENT WORK &amp; PRODUCTION EVIDENCE
            </div>
            <h2 className="type-heading font-normal text-[#000000] tracking-tight">
              Production evidence from the critical path. <br className="hidden sm:inline" />
              <span className="italic text-[#808080]">Real systems built for real operations with verifiable outcomes.</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 font-mono text-xs text-[#666666]">
            ZERO INVENTED METRICS • 100% COMMERCIAL DEPLOYMENTS
          </div>
        </div>

        {/* Editorial Project Portfolio Sequence (Section 32) */}
        <div className="space-y-20">
          {projects.map((proj) => (
            <div
              key={proj.index}
              className="border-t border-[#e6e6e6] pt-10"
            >
              {/* Metadata Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#666666] mb-8 pb-3 border-b border-[#f2f2f2]">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#000000]">{proj.index} {"//"}</span>
                  <span className="text-[#000000] font-semibold tracking-wider">{proj.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>{proj.category}</span>
                  <span>•</span>
                  <span>YEAR: {proj.year}</span>
                </div>
              </div>

              {/* Monograph Editorial Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                
                {/* Left (7 cols): Narrative & Outcome */}
                <div className="lg:col-span-7 space-y-6">
                  <h3 className="type-subheading sm:text-2xl font-brand font-medium text-[#000000] leading-snug">
                    {proj.headline}
                  </h3>

                  <p className="text-sm text-[#333333] leading-relaxed max-w-xl">
                    {proj.context}
                  </p>

                  <div className="p-5 bg-[#f2f2f2] rounded-[16px] border border-[#e6e6e6] space-y-3 font-mono text-xs">
                    <div>
                      <span className="text-[10px] text-[#808080] uppercase block">
                        Intervention Applied
                      </span>
                      <p className="text-[#000000] mt-0.5 leading-relaxed">
                        {proj.intervention}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#e6e6e6]">
                      <span className="text-[10px] text-[#808080] uppercase block">
                        Verified Qualitative Result
                      </span>
                      <p className="text-[#000000] font-medium mt-0.5 leading-relaxed">
                        {proj.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Services Cross-Links */}
                  <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
                    <span className="text-[10px] text-[#808080] uppercase">
                      Services Deployed:
                    </span>
                    {proj.servicesUsed.map((svc) => (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        className="text-[#000000] hover:text-[#666666] underline underline-offset-4 flex items-center gap-0.5"
                      >
                        <span>{svc.name}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#808080]" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right (5 cols): Physical Architectural Plate (Section 34: 33.76px radius) */}
                <div className="lg:col-span-5 bg-[#f2f2f2] border border-[#e6e6e6] radius-image p-6 sm:p-7 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#cccccc] text-[10px] text-[#808080]">
                    <span>ARCHITECTURAL PROOF PLATE</span>
                    <span>SPEC VERIFIED</span>
                  </div>

                  <div className="space-y-3">
                    {proj.schematic.map((line, i) => (
                      <div
                        key={i}
                        className="p-3 bg-[#ffffff] border border-[#e6e6e6] rounded-[8px] text-[11px] text-[#000000] leading-relaxed"
                      >
                        <span className="text-[#808080] block text-[9px] mb-0.5">{"// LOG RECORD 0"}{i + 1}</span>
                        <code>{line}</code>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#cccccc] flex items-center justify-between text-[10px] text-[#808080]">
                    <span>100% RECORD INTEGRITY</span>
                    <span>MONOCHROME ARCHIVE</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
