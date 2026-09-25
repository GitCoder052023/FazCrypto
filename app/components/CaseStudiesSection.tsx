import { CheckCircle2 } from "lucide-react";

export default function CaseStudiesSection() {
  return (
    <section id="cases" className="py-24 md:py-32 bg-white text-[#19191a] border-b border-[#ededed]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#ededed]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#76757f] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff470a]" />
              <span>05 / SELECTED SYSTEMS ARCHITECTURES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.2] tracking-[-0.015em] font-display">
              Production evidence from <br className="hidden sm:inline" />
              the critical path.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#76757f] max-w-sm font-mono">
            Every case represents a system in active commercial operation. Real architectural interventions with verifiable qualitative outcomes.
          </p>
        </div>

        {/* Editorial Sequence of Varied Compositions */}
        <div className="space-y-16">
          
          {/* ========================================================
              CASE 01: Large Project Visual + Technical Breakdown
             ======================================================== */}
          <div className="border border-[#e0e0e0] rounded-[16px] overflow-hidden bg-[#fafafa]">
            
            {/* Top metadata strip */}
            <div className="px-6 py-4 bg-white border-b border-[#e0e0e0] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#323234]">
                <span className="font-bold text-[#ff470a]">CASE 01 //</span>
                <span className="font-semibold text-[#19191a]">MERIDIAN FLEET & DISPATCH</span>
              </div>
              <div className="flex items-center gap-4 text-[#76757f]">
                <span>ARCHETYPE: REAL-TIME TELEMETRY ENGINE</span>
                <span className="hidden sm:inline">•</span>
                <span className="text-emerald-700 font-medium">PRODUCTION ACTIVE</span>
              </div>
            </div>

            {/* Content body */}
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#19191a] mb-3">
                    Replacing 6 regional dispatch spreadsheets with an event-driven telemetry platform.
                  </h3>
                  <p className="text-[16px] leading-[26px] text-[#464554]">
                    Meridian coordinates commercial freight across 6 distribution hubs. Operations previously relied on telephone status check-ins, fragmented shared Excel sheets, and manual whiteboard assignments—resulting in delayed driver dispatches and lost billable transit hours.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#e0e0e0]">
                  <div>
                    <span className="font-mono text-[11px] font-semibold text-[#ff470a] uppercase tracking-wider block mb-1">
                      Architectural Intervention
                    </span>
                    <p className="text-sm text-[#323234]">
                      Built a distributed event-streaming platform in Go and Apache Kafka. Integrated IoT vehicle GPS beacons directly with WebSocket real-time driver queues, backed by PostgreSQL read replicas for sub-second route dispatching.
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                      Qualitative Outcome
                    </span>
                    <p className="text-sm text-[#19191a] font-medium">
                      Eliminated manual spreadsheets entirely across all hubs. Real-time fleet positioning updates in under 600ms, with zero dispatch state loss during cell-tower dead zones.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Go", "Apache Kafka", "PostgreSQL", "Redis", "Envoy", "WebSockets"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-[4px] bg-[#ededed] text-[#323234] font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Technical Schema Fragment */}
              <div className="lg:col-span-6 bg-[#19191a] text-white p-6 sm:p-7 rounded-[12px] border border-[#323234] font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#323234]">
                  <span className="text-[#bfbec9] text-[11px]">TELEMETRY PIPELINE SCHEMA // KAFKA PARTITIONING</span>
                  <span className="text-[#ff470a] text-[10px]">VERIFIED 100% INGEST</span>
                </div>

                <div className="space-y-3 text-[11px]">
                  <div className="p-3 bg-[#222224] rounded-[6px] border border-[#323234]">
                    <span className="text-[#76757f] block mb-1">{"// INGESTION LAYER"}</span>
                    <code className="text-emerald-400 block">POST /v2/telemetry/beacon {"->"} Envoy Ingress {"->"} mTLS Token Check</code>
                    <span className="text-[#bfbec9] text-[10px] mt-1 block">Throughput: ~18,000 beacon pings/minute with &lt; 8ms edge latency</span>
                  </div>

                  <div className="p-3 bg-[#222224] rounded-[6px] border border-[#323234]">
                    <span className="text-[#76757f] block mb-1">{"// KAFKA EVENT TOPIC"}</span>
                    <code className="text-[#f78da7] block">topic: &quot;meridian.telemetry.v1&quot; | partitions: 16 | replication: 3</code>
                    <span className="text-[#bfbec9] text-[10px] mt-1 block">Keys partitioned by driver_hub_id ensuring strict FIFO per vehicle</span>
                  </div>

                  <div className="p-3 bg-[#222224] rounded-[6px] border border-[#323234]">
                    <span className="text-[#76757f] block mb-1">{"// PERSISTENCE & BROADCAST"}</span>
                    <code className="text-amber-300 block">Go Consumer Pool {"->"} PostgreSQL (UPSERT) + Redis PubSub {"->"} Next.js UI</code>
                    <span className="text-[#bfbec9] text-[10px] mt-1 block">Sub-second browser dispatch updates without polling overhead</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#323234] flex items-center justify-between text-[#76757f] text-[10px]">
                  <span>RECOVERY POINT OBJECTIVE (RPO): ZERO LOSS</span>
                  <span>CANARY VERIFIED</span>
                </div>
              </div>

            </div>
          </div>


          {/* ========================================================
              CASE 02: Text-Heavy Asymmetric Split + Audit Log Fragment
             ======================================================== */}
          <div className="border border-[#e0e0e0] rounded-[16px] overflow-hidden bg-white">
            
            <div className="px-6 py-4 bg-[#fafafa] border-b border-[#e0e0e0] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#323234]">
                <span className="font-bold text-[#ff470a]">CASE 02 //</span>
                <span className="font-semibold text-[#19191a]">KESTREL SETTLEMENTS</span>
              </div>
              <div className="flex items-center gap-4 text-[#76757f]">
                <span>ARCHETYPE: FINANCIAL TRANSACTION LEDGER</span>
                <span className="hidden sm:inline">•</span>
                <span className="text-emerald-700 font-medium">ZERO OUTAGES RECORDED</span>
              </div>
            </div>

            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Context & Outcome (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#19191a] leading-tight">
                  Decoupling a 12-year-old banking monolith to achieve continuous automated reconciliation.
                </h3>
                
                <p className="text-[16px] leading-[26px] text-[#464554]">
                  Kestrel processes high-volume corporate disbursements across 8 partner banking institutions. Daily reconciliation originally depended on a fragile 14-hour SQL batch job that frequently timed out, leaving accounting staff manually reconciling transactions on spreadsheets over weekends.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                  <div className="p-4 bg-[#fafafa] rounded-[10px] border border-[#e0e0e0]">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#ff470a] block mb-1">
                      The Intervention
                    </span>
                    <p className="text-xs text-[#323234] leading-relaxed">
                      Implemented the Transactional Outbox pattern with Debezium Change Data Capture on PostgreSQL. Extracted ledger events into an immutable append-only ledger service with idempotent payment handlers.
                    </p>
                  </div>

                  <div className="p-4 bg-[#fafafa] rounded-[10px] border border-[#e0e0e0]">
                    <span className="font-mono text-[10px] uppercase font-bold text-emerald-700 block mb-1">
                      Qualitative Outcome
                    </span>
                    <p className="text-xs text-[#323234] leading-relaxed">
                      Overnight batch reconciliation replaced by continuous sub-second ledger matching. Month-end financial close accelerated from 5 business days to 30 minutes with zero balance discrepancies.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["TypeScript / Node.js", "PostgreSQL", "Debezium CDC", "RabbitMQ", "Terraform", "AWS"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-[4px] bg-[#ededed] text-[#323234] font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Immutable Audit Stream Fragment (5 cols) */}
              <div className="lg:col-span-5 bg-[#19191a] text-[#bfbec9] p-5 rounded-[12px] border border-[#323234] font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#323234] text-[11px]">
                  <span className="text-white font-medium">IMMUTABLE LEDGER JOURNAL</span>
                  <span className="text-emerald-400">IDEMPOTENT LOCK [OK]</span>
                </div>

                <div className="space-y-2 text-[10px] leading-tight">
                  <div className="p-2.5 bg-[#222224] rounded border border-[#323234]">
                    <div className="text-white font-medium">TX_ID: 8f9b2a-7c // SETTLED</div>
                    <div className="text-[#76757f] mt-0.5">AUTH: PARTNER_CHASE_04 • DEBIT: $450,000.00 USD</div>
                    <div className="text-emerald-400 mt-0.5">CHECKSUM: sha256:d84e...91b (Double-entry balance verified)</div>
                  </div>

                  <div className="p-2.5 bg-[#222224] rounded border border-[#323234]">
                    <div className="text-white font-medium">TX_ID: 9a01c3-4d // SETTLED</div>
                    <div className="text-[#76757f] mt-0.5">AUTH: PARTNER_HSBC_01 • CREDIT: €120,450.00 EUR</div>
                    <div className="text-emerald-400 mt-0.5">CHECKSUM: sha256:4a12...88c (Double-entry balance verified)</div>
                  </div>

                  <div className="p-2.5 bg-[#222224] rounded border border-[#323234]">
                    <div className="text-white font-medium">TX_ID: 9a01c4-1e // IDEMPOTENCY CATCH</div>
                    <div className="text-amber-400 mt-0.5">DUPLICATE RETRY SUPPRESSED (Zero ledger drift)</div>
                    <div className="text-[#76757f] mt-0.5">ORIGINAL_HASH MATCHED // NO DUPLICATE DEBIT</div>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-[#323234] text-[10px] text-[#76757f] flex justify-between">
                  <span>OUTBOX WORKER: 0 LAG</span>
                  <span>ACID VERIFIED</span>
                </div>
              </div>

            </div>
          </div>


          {/* ========================================================
              CASE 03: Compliance Architecture + Security Boundary
             ======================================================== */}
          <div className="border border-[#e0e0e0] rounded-[16px] overflow-hidden bg-[#fafafa]">
            
            <div className="px-6 py-4 bg-white border-b border-[#e0e0e0] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#323234]">
                <span className="font-bold text-[#ff470a]">CASE 03 //</span>
                <span className="font-semibold text-[#19191a]">SYNAPSE HEALTHCARE DATA GATEWAY</span>
              </div>
              <div className="flex items-center gap-4 text-[#76757f]">
                <span>ARCHETYPE: HIGH-COMPLIANCE API INTEGRATION</span>
                <span className="hidden sm:inline">•</span>
                <span className="text-emerald-700 font-medium">SOC2 & HIPAA PASS</span>
              </div>
            </div>

            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#19191a] leading-tight">
                  A zero-trust clinical data gateway bridging 4 disparate hospital EHR vendor platforms.
                </h3>
                
                <p className="text-[16px] leading-[26px] text-[#464554]">
                  Synapse provides real-time clinical telemetry integration across regional health networks. Each hospital partner operated on different electronic health record systems (Epic, Cerner, custom HL7 implementations) with stringent regulatory constraints and zero tolerance for PHI data exposure.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-4 bg-white rounded-[10px] border border-[#e0e0e0]">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#ff470a] block mb-1">
                      Vectis Architectural Intervention
                    </span>
                    <p className="text-xs text-[#323234] leading-relaxed">
                      Engineered an isolated mTLS proxy layer with dynamic FHIR schema transformation, field-level envelope encryption, and cryptographic audit log immutability. Integrated fine-grained role authorization (OpenFGA) to restrict clinical data access strictly to authenticated care teams.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-[10px] border border-[#e0e0e0]">
                    <span className="font-mono text-[10px] uppercase font-bold text-emerald-700 block mb-1">
                      Qualitative Outcome
                    </span>
                    <p className="text-xs text-[#19191a] font-medium leading-relaxed">
                      Passed 3 independent external SOC2 Type II and HIPAA security audits with zero architectural findings. Reduced new clinical provider integration onboarding time from 8 weeks to 4 business days.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Go", "Envoy Proxy", "mTLS", "HL7 / FHIR", "OpenFGA", "OpenTelemetry", "Docker"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-[4px] bg-[#ededed] text-[#323234] font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Security & Compliance Policy Matrix */}
              <div className="lg:col-span-5 bg-white p-6 rounded-[12px] border border-[#e0e0e0] font-mono text-xs space-y-4">
                <span className="text-[#76757f] text-[11px] font-bold uppercase tracking-wider block pb-2 border-b border-[#ededed]">
                  COMPLIANCE BOUNDARY VERIFICATION
                </span>

                <div className="space-y-3 text-[11px]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-[#19191a]">Field-Level Envelope Encryption</div>
                      <div className="text-[#76757f] text-[10px]">AES-256-GCM with per-patient cryptographic keys</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-[#19191a]">Zero PHI Storage in Log Pipeline</div>
                      <div className="text-[#76757f] text-[10px]">Automated regex scrubbers at Envoy ingress boundaries</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-[#19191a]">mTLS Mutual Pod Authentication</div>
                      <div className="text-[#76757f] text-[10px]">Short-lived SPIFFE/SPIRE X.509 cryptographic identities</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-medium text-[#19191a]">Continuous Audit Readiness</div>
                      <div className="text-[#76757f] text-[10px]">Immutable cryptographic proof of every data access event</div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#ededed] text-[10px] text-[#76757f]">
                  REGULATORY ATTESTATION: HIPAA & SOC2 TYPE II READY
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
