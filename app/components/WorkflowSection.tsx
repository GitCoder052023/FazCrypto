import { ShieldCheck } from "lucide-react";

export default function WorkflowSection() {
  const steps = [
    {
      step: "01",
      name: "AUDIT & REVERSE-ENGINEERING",
      objective: "Understand what exists, what is broken, and where production risk lives.",
      actions: [
        "Repository static analysis & circular dependency mapping",
        "Slow query logging & database index profile extraction",
        "Infrastructure vulnerability & deployment bottleneck discovery",
        "Interviews with core engineers to uncover tribal workarounds",
      ],
      deliverable: "System Reality Report + Critical Risk Vector Matrix",
    },
    {
      step: "02",
      name: "CONSTRAINT & INVARIANT MODELING",
      objective: "Establish mathematically defensible boundaries before writing code.",
      actions: [
        "Define hard operational SLAs: maximum acceptable P99 latency & RPO/RTO",
        "Protobuf & OpenAPI schema contracts across all domain boundaries",
        "Data consistency boundary modeling (ACID vs. Eventual Consistency)",
        "Zero-downtime cutover strategy and automated rollback criteria",
      ],
      deliverable: "Formal Architecture Blueprint + Service Contract Specifications",
    },
    {
      step: "03",
      name: "PARALLEL ENGINE IMPLEMENTATION",
      objective: "Construct the new architecture without disturbing existing revenue flow.",
      actions: [
        "Strangler Fig reverse proxy installation at the ingress edge",
        "Clean domain-driven service implementation in Go / TypeScript",
        "Change Data Capture (Debezium) for real-time dual-write data mirroring",
        "Hermetic unit, property-based, and integration test suite development",
      ],
      deliverable: "Fully Tested Service Modules + Continuous Delivery Pipelines",
    },
    {
      step: "04",
      name: "STRESS INJECTION & VERIFICATION",
      objective: "Prove system durability under malicious and peak traffic conditions.",
      actions: [
        "Synthetic load generation at 3x expected peak concurrency",
        "Chaos testing: simulated database failover and packet loss",
        "Shadow traffic replay from live production to verify response parity",
        "Static application security testing (SAST) and dependency auditing",
      ],
      deliverable: "Verification Benchmark Reports + Chaos Recovery Runbooks",
    },
    {
      step: "05",
      name: "ZERO-DOWNTIME CANARY CUTOVER",
      objective: "Execute phased production traffic shift with automated safety latches.",
      actions: [
        "Gradual canary traffic routing: 1% → 5% → 25% → 100%",
        "Automated health gates monitoring error rates and P99 latency",
        "Instant rollback trigger if error budget exceeds 0.01% during cutover",
        "Decommissioning of legacy monolith routes and database schema cleanup",
      ],
      deliverable: "Live Production Operation + 100% Repository IP Transfer",
    },
  ];

  return (
    <section id="workflow" className="py-24 md:py-32 bg-[#19191a] text-white border-b border-[#323234] relative">
      <div className="absolute inset-0 pointer-events-none technical-grid opacity-40" aria-hidden="true" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#323234]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#bfbec9] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff470a]" />
              <span>03 / THE EXECUTION PIPELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.2] tracking-[-0.015em] font-display text-white">
              Engineering with proof, <br className="hidden sm:inline" />
              not hope.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#bfbec9] max-w-sm font-mono">
            Every step produces measurable verification artifacts. We never cut over to new architecture based on assumptions.
          </p>
        </div>

        {/* Directed Editorial Sequence */}
        <div className="space-y-6">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="bg-[#222224] border border-[#323234] rounded-[16px] p-6 sm:p-8 transition-colors hover:border-[#464554]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Step number and title (4 cols) */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm font-bold px-2 py-0.5 rounded bg-[#ff470a]/15 text-[#ff470a] border border-[#ff470a]/30">
                      PHASE {item.step}
                    </span>
                    <span className="font-mono text-xs text-[#76757f]">GATE {idx + 1}/5</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#bfbec9] leading-relaxed">
                    {item.objective}
                  </p>
                </div>

                {/* Specific actions (5 cols) */}
                <div className="lg:col-span-5 bg-[#19191a] p-4 sm:p-5 rounded-[12px] border border-[#323234]">
                  <span className="font-mono text-[11px] font-semibold text-[#76757f] uppercase tracking-wider block mb-3">
                    Verification Milestones
                  </span>
                  <ul className="space-y-2">
                    {item.actions.map((act, i) => (
                      <li key={i} className="text-xs text-[#bfbec9] flex items-start gap-2">
                        <span className="text-[#ff470a] font-mono text-[10px] mt-0.5">›</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Formal deliverable (3 cols) */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full bg-[#19191a]/40 p-4 sm:p-5 rounded-[12px] border border-[#323234]">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-[#ff470a] tracking-wider block mb-1">
                      Hard Deliverable
                    </span>
                    <div className="text-xs text-white font-medium">
                      {item.deliverable}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#323234] flex items-center gap-2 text-[11px] font-mono text-[#76757f]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Automated Verification Gate</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Operating policy quote */}
        <div className="mt-12 p-6 rounded-[16px] bg-[#222224] border border-[#323234] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="font-mono text-xs text-[#bfbec9]">
            <span className="text-white font-semibold">OUR DEPLOYMENT INVARIANT:</span>{" "}
            No code touches production without automated shadow-traffic parity validation and sub-second rollback triggers.
          </div>
          <span className="font-mono text-[11px] text-[#ff470a] shrink-0 border border-[#ff470a]/30 px-3 py-1 rounded-full bg-[#ff470a]/10">
            SLA: ZERO UNPLANNED OUTAGE
          </span>
        </div>

      </div>
    </section>
  );
}
