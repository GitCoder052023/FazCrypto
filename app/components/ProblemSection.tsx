export default function ProblemSection() {
  const observations = [
    {
      index: "01",
      reality: "The software functions. The operational risk is that nobody dares modify the deployment pipeline.",
      symptoms: "Multi-hour maintenance windows, undocumented manual configuration steps, and quiet anxiety whenever an urgent bug fix is required in production.",
      intervention: "Hermetic containerization, codified infrastructure (Terraform), and reproducible CI/CD pipelines with automated health verification and instantaneous rollback latches.",
    },
    {
      index: "02",
      reality: "Operational teams depend on disconnected databases and shared spreadsheets to reconcile transactions.",
      symptoms: "Manual daily data reconciliation, intermittent duplicate orders, and unexplainable data discrepancies that surface during quarterly audits.",
      intervention: "Unified event-driven architecture using Kafka with idempotent event consumers and an immutable, append-only transactional ledger.",
    },
    {
      index: "03",
      reality: "Peak commercial traffic produces silent database connection exhaustion and cascading timeouts.",
      symptoms: "Unindexed queries locking transactional threads, runaway database CPU spikes, and third-party partner APIs failing without circuit breakers.",
      intervention: "Asynchronous task offloading, read-replica query routing, Redis state caching, and resilient circuit-breaker integration policies.",
    },
  ];

  return (
    <section id="problem" className="py-24 md:py-32 bg-[#ffffff] text-[#000000] border-b border-[#e6e6e6]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="pb-8 mb-16 border-b border-[#e6e6e6]">
          <div className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#666666] mb-3">
            01 / THE STRUCTURAL REALITY
          </div>
          <h2 className="type-heading font-normal text-[#000000] tracking-tight">
            Technical debt is an operational bottleneck, <br className="hidden sm:inline" />
            <span className="italic text-[#808080]">rarely just a code style issue.</span>
          </h2>
        </div>

        {/* Editorial 2-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (4 cols): Studio Diagnosis */}
          <div className="lg:col-span-4 space-y-6">
            <div className="text-[10px] font-mono uppercase text-[#808080] tracking-wider">
              [ DIAGNOSTIC DISSECTION ]
            </div>

            <h3 className="type-subheading font-medium text-[#000000] leading-snug">
              When maintenance consumes 75% of engineering capacity, innovation ceases.
            </h3>

            <div className="max-w-[340px] text-[#333333] text-sm leading-relaxed space-y-3">
              <p>
                Over years of rapid shipping, shortcuts compound. What began as a lean MVP gradually ossifies into a precarious system where simple schema changes require cross-department approval and a rollback plan.
              </p>
              <p className="text-[#666666] text-xs">
                We systematically isolate failure points, stabilize the critical path, and re-engineer the foundation in place with zero unplanned downtime.
              </p>
            </div>

            <div className="pt-6 border-t border-[#e6e6e6] font-mono text-xs text-[#666666] space-y-2">
              <div className="flex justify-between py-1 border-b border-[#f2f2f2]">
                <span>FEATURE VELOCITY</span>
                <span className="text-[#000000] font-semibold">-8% per quarter</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#f2f2f2]">
                <span>CONTEXT SPREAD</span>
                <span className="text-[#000000] font-semibold">Trapped in 1-2 heads</span>
              </div>
              <div className="flex justify-between py-1">
                <span>DEPLOYMENT RISK</span>
                <span className="text-[#000000] font-semibold">High without canary</span>
              </div>
            </div>
          </div>

          {/* Right Column (8 cols): Structured Editorial Table */}
          <div className="lg:col-span-8 divide-y divide-[#e6e6e6] border-t border-b border-[#e6e6e6]">
            {observations.map((item) => (
              <div key={item.index} className="py-8 space-y-4">
                <div className="flex items-center justify-between font-mono text-[11px] text-[#808080]">
                  <span>PATHOLOGY {item.index}</span>
                  <span>SYSTEM BOUNDARY</span>
                </div>

                <h4 className="text-xl font-brand font-medium text-[#000000] leading-snug">
                  {item.reality}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 font-mono text-xs">
                  <div className="p-4 bg-[#f2f2f2] rounded-[8px] text-[#333333]">
                    <span className="text-[10px] text-[#808080] uppercase block mb-1">
                      Observable Symptom
                    </span>
                    <p className="leading-relaxed">{item.symptoms}</p>
                  </div>

                  <div className="p-4 bg-[#ffffff] border border-[#e6e6e6] rounded-[8px] text-[#000000]">
                    <span className="text-[10px] text-[#808080] uppercase block mb-1">
                      Architectural Intervention
                    </span>
                    <p className="leading-relaxed">{item.intervention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
