import { CheckCircle2 } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      index: "01",
      reality: "The system works. The problem is nobody on your engineering team dares touch the deployment script.",
      symptoms: "Four-hour midnight maintenance windows, manual SSH configuration steps, and quiet panic whenever a critical bug requires a production hotfix.",
      intervention: "Hermetic containerization, codified infrastructure (Terraform), and reproducible CI/CD pipelines with automated health verification and zero-downtime rollbacks.",
    },
    {
      index: "02",
      reality: "Your operations team relies on three disconnected databases and an Excel spreadsheet to track client transactions.",
      symptoms: "Manual data reconciliation every morning, intermittent duplicate orders, and unexplainable data discrepancies that surface during quarterly financial audits.",
      intervention: "Unified event-driven architecture using Kafka / RabbitMQ with idempotent event consumers and an immutable transactional ledger.",
    },
    {
      index: "03",
      reality: "Every traffic surge brings silent connection pool exhaustion and cascading API timeouts.",
      symptoms: "Slow queries blocking transactional threads, runaway CPU spikes on the database server, and third-party partner APIs timing out without circuit breaking.",
      intervention: "Asynchronous task offloading, read-replica query routing, Redis state caching, and resilient circuit-breaker integration policies.",
    },
  ];

  return (
    <section id="problem" className="py-24 md:py-32 bg-white text-[#19191a] border-b border-[#ededed]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header with restrained numbering */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#ededed]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#76757f] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff470a]" />
              <span>01 / THE STRUCTURAL REALITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.2] tracking-[-0.015em] font-display">
              Technical debt is rarely a code problem. <br className="hidden sm:inline" />
              It is an operational bottleneck.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#76757f] max-w-xs font-mono">
            Most organizations do not lack software. They lack software that can evolve without breaking the business.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols) — The Root Dynamic */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-[#f5f5f6] border border-[#e0e0e0] rounded-[16px] p-8">
              <span className="font-mono text-xs font-semibold text-[#ff470a] tracking-wider uppercase block mb-3">
                THE ACCUMULATION CYCLE
              </span>
              <h3 className="text-2xl font-display font-medium text-[#19191a] mb-4 leading-snug">
                When maintenance consumes 75% of your engineering payroll, growth stops.
              </h3>
              <p className="text-[16px] leading-[24px] text-[#464554] mb-6">
                Over years of rapid feature shipping, shortcuts compound. What began as a lean MVP gradually ossifies into a precarious system where simple schema changes require cross-department approval and a rollback plan.
              </p>
              <div className="p-4 bg-white rounded-[8px] border border-[#e0e0e0] font-mono text-xs text-[#323234] space-y-2">
                <div className="flex justify-between pb-2 border-b border-[#ededed]">
                  <span className="text-[#76757f]">Feature Velocity</span>
                  <span className="text-rose-600 font-medium">Degrades 8% per quarter</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#ededed]">
                  <span className="text-[#76757f]">Context Distribution</span>
                  <span className="text-[#19191a] font-medium">Trapped in 1-2 senior heads</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#76757f]">Deployment Risk</span>
                  <span className="text-amber-600 font-medium">Exponential to change size</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 border-l-2 border-[#ff470a] bg-[#fafafa]">
              <p className="text-sm font-medium text-[#19191a] italic leading-relaxed">
                “We do not arrive with buzzwords or suggestions to discard everything and rewrite from scratch. We systematically isolate the failure points, stabilize the critical path, and re-engineer the foundation in place.”
              </p>
              <span className="block font-mono text-[11px] text-[#76757f] mt-3 uppercase tracking-wider">
                — Vectis Architectural Engagement Policy
              </span>
            </div>
          </div>

          {/* Right Column (7 cols) — Concrete Realities vs Interventions */}
          <div className="lg:col-span-7 space-y-8">
            {problems.map((item) => (
              <div
                key={item.index}
                className="p-6 sm:p-7 bg-white border border-[#e0e0e0] rounded-[16px] transition-all hover:border-[#bfbec9] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-[4px] bg-[#ededed] text-[#323234]">
                    PATHOLOGY {item.index}
                  </span>
                  <span className="font-mono text-[11px] text-[#76757f]">
                    PRODUCTION BOTTLENECK
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-display font-medium text-[#19191a] mb-3 leading-snug">
                  {item.reality}
                </h4>

                <div className="mb-4 text-sm text-[#464554] bg-[#f5f5f6] p-3.5 rounded-[8px] border-l-2 border-amber-500">
                  <span className="font-mono text-[11px] font-semibold text-[#76757f] block uppercase mb-1">
                    Observable Symptom:
                  </span>
                  {item.symptoms}
                </div>

                <div className="pt-3 border-t border-[#ededed] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ff470a] mt-0.5 shrink-0" />
                  <div className="text-sm text-[#19191a]">
                    <span className="font-medium text-[#19191a]">Vectis Intervention: </span>
                    <span className="text-[#464554]">{item.intervention}</span>
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
