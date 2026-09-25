export default function WorkflowSection() {
  const sequence = [
    {
      step: "01",
      name: "UNDERSTAND",
      summary: "We define the problem, evaluate legacy codebases, and map architectural constraints.",
      actions: [
        "Static code analysis & dependency circularity extraction",
        "Slow query profiling & connection starvation identification",
        "Interviews with core engineering staff to uncover tribal workarounds",
      ],
      output: "System Reality Report + Critical Risk Matrix",
    },
    {
      step: "02",
      name: "ARCHITECT",
      summary: "We model invariants, data consistency boundaries, and formal API schemas.",
      actions: [
        "P99 latency ceilings, max acceptable RPO/RTO thresholds defined",
        "Protobuf & OpenAPI schema contracts across all domain boundaries",
        "Zero-downtime cutover strategy and automated rollback criteria",
      ],
      output: "Formal Architecture Blueprint + Service Contract Specifications",
    },
    {
      step: "03",
      name: "BUILD",
      summary: "Design and engineering move together in parallel with existing revenue traffic.",
      actions: [
        "Strangler Fig reverse proxy facade installation at edge ingress",
        "Clean domain-driven service implementation in compiled Go or Node",
        "Change Data Capture (Debezium) for real-time dual-write mirroring",
      ],
      output: "Hermetic Service Modules + Continuous Delivery Pipelines",
    },
    {
      step: "04",
      name: "VERIFY",
      summary: "Synthetic load generation and shadow traffic validate output parity.",
      actions: [
        "Stress testing at 3x expected peak concurrency",
        "Chaos drills: simulated database failover and packet drops",
        "Shadow traffic replay from live production with zero client impact",
      ],
      output: "Benchmark Verification Report + Chaos Recovery Runbooks",
    },
    {
      step: "05",
      name: "SHIP",
      summary: "Canary traffic shift with automated health gates and instantaneous rollback.",
      actions: [
        "Phased canary traffic routing (1% → 5% → 25% → 100%)",
        "Automated health gates monitoring error budgets and latency",
        "Instant rollback trigger if error budget exceeds 0.01%",
      ],
      output: "Live Production Operation + 100% Repository IP Transfer",
    },
  ];

  return (
    <section id="workflow" className="py-24 md:py-32 bg-[#1f1f1f] text-[#ffffff] border-b border-[#333333]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="pb-8 mb-16 border-b border-[#333333] flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#999999] mb-3">
              03 / ENGINEERING METHODOLOGY
            </div>
            <h2 className="type-heading font-normal text-[#ffffff] tracking-tight">
              An architectural sequence <br className="hidden sm:inline" />
              <span className="italic text-[#999999]">grounded in verification, not assumptions.</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 font-mono text-xs text-[#999999] max-w-xs text-left md:text-right">
            <span>DISASTER RECOVERY STANDARD: RPO ZERO LOSS</span>
          </div>
        </div>

        {/* Directed Editorial Monograph Sequence (Section 37) */}
        <div className="divide-y divide-[#333333] border-t border-b border-[#333333]">
          {sequence.map((item) => (
            <div key={item.step} className="py-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Step Marker & Title (4 cols) */}
                <div className="lg:col-span-4">
                  <div className="font-mono text-xs text-[#808080] mb-1">
                    PHASE {item.step} {"//"} SEQUENCE
                  </div>
                  <h3 className="type-heading-sm font-medium text-[#ffffff] tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#cccccc] max-w-sm mt-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Specific actions (5 cols) */}
                <div className="lg:col-span-5 space-y-2 font-mono text-xs">
                  <span className="text-[10px] text-[#808080] uppercase tracking-wider block mb-2">
                    Verification Milestones
                  </span>
                  <ul className="space-y-2">
                    {item.actions.map((act, i) => (
                      <li key={i} className="text-[#cccccc] text-[12px] flex items-start gap-2">
                        <span className="text-[#808080]">›</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Formal Deliverable (3 cols) */}
                <div className="lg:col-span-3 bg-[#000000] p-5 rounded-[12px] border border-[#333333] font-mono text-xs">
                  <span className="text-[10px] text-[#808080] uppercase block mb-1">
                    Definitive Artifact
                  </span>
                  <div className="text-[#ffffff] font-medium text-[11px] leading-snug">
                    {item.output}
                  </div>
                  <div className="mt-4 pt-2 border-t border-[#1f1f1f] text-[10px] text-[#808080]">
                    GATE STATUS: VERIFIED
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
