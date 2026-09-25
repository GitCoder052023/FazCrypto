import { ArrowRight, Clock, ShieldCheck } from "lucide-react";

export default function EngagementModel() {
  const models = [
    {
      archetype: "01 // SURGICAL INTERVENTION",
      name: "Architecture & Bottleneck Sprint",
      timeline: "4 to 8 Weeks",
      focus: "Rapid, targeted intervention to resolve a critical production blocker, database deadlock, or scaling crisis.",
      podComposition: "1 Principal Architect + 1 Senior Systems Engineer",
      scope: [
        "In-depth query profiling & execution plan optimization",
        "Isolation & eradication of memory leaks and connection starvation",
        "Load testing and failure domain boundary remediation",
        "Detailed post-mortem & ongoing preventive runbook",
      ],
      idealFor: "Teams facing an immediate scaling wall or critical deployment deadlock.",
    },
    {
      archetype: "02 // DEDICATED POD",
      name: "Embedded Systems Engineering Pod",
      timeline: "Quarterly Retainer (3–12 Months)",
      focus: "Autonomous senior engineering pod integrated directly with your repository, issue tracker, and sprint rhythm.",
      podComposition: "1 Technical Lead + 2 to 4 Senior Backend/Infra Engineers",
      scope: [
        "Continuous platform engineering & high-throughput feature shipping",
        "Direct participation in architecture reviews and sprint planning",
        "Full test automation, CI/CD pipeline management, and monitoring",
        "Seamless knowledge transfer to internal engineering staff",
      ],
      idealFor: "Companies needing senior engineering horsepower without a 9-month hiring cycle.",
    },
    {
      archetype: "03 // FULL MODERNIZATION",
      name: "Legacy Monolith Decoupling & Cutover",
      timeline: "Milestone-Governed (6–18 Months)",
      focus: "Comprehensive replatforming of aging enterprise core software with contractual zero-downtime SLAs.",
      podComposition: "Dedicated Cross-Functional Architecture & Infrastructure Pod",
      scope: [
        "End-to-end Strangler Fig implementation and facade routing",
        "Change Data Capture (Debezium) real-time dual-write pipelines",
        "Shadow traffic validation to guarantee 100% output parity",
        "Automated canary cutover and formal decommissioning of legacy code",
      ],
      idealFor: "Enterprises where legacy monolith risk has become an existential business liability.",
    },
  ];

  return (
    <section id="engagement" className="py-24 md:py-32 bg-white text-[#19191a] border-b border-[#ededed]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#ededed]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#76757f] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff470a]" />
              <span>07 / ENGAGEMENT STRUCTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.2] tracking-[-0.015em] font-display">
              Transparent engagement models. <br className="hidden sm:inline" />
              Zero vague billing.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#76757f] max-w-sm font-mono">
            We structure contracts around verified technical milestones and engineering pod velocity, not open-ended advisory hours.
          </p>
        </div>

        {/* 3 Structured Engagement Models (Editorial Columns with Distinct Content) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((m) => (
            <div
              key={m.name}
              className="p-7 rounded-[16px] border border-[#e0e0e0] bg-[#fafafa] flex flex-col justify-between hover:border-[#bfbec9] transition-all"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e0e0e0] font-mono text-xs">
                  <span className="text-[#ff470a] font-semibold">{m.archetype}</span>
                  <span className="text-[#76757f] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {m.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-display font-medium text-[#19191a] mb-2 leading-snug">
                  {m.name}
                </h3>
                
                <p className="text-xs text-[#464554] mb-6 leading-relaxed">
                  {m.focus}
                </p>

                {/* Team composition badge */}
                <div className="mb-6 p-3 rounded-[8px] bg-white border border-[#e0e0e0] font-mono text-[11px] text-[#323234]">
                  <span className="text-[#76757f] block uppercase text-[10px] mb-0.5">Pod Allocation</span>
                  <span className="font-semibold text-[#19191a]">{m.podComposition}</span>
                </div>

                {/* Scope items */}
                <div className="space-y-2.5 mb-6">
                  <span className="font-mono text-[11px] font-semibold text-[#76757f] uppercase tracking-wider block">
                    Key Deliverables
                  </span>
                  {m.scope.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#464554]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff470a] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom context */}
              <div className="pt-4 border-t border-[#e0e0e0] font-mono text-[11px]">
                <span className="text-[#76757f] block uppercase text-[10px] mb-0.5">Recommended Context</span>
                <span className="text-[#323234]">{m.idealFor}</span>
              </div>
            </div>
          ))}
        </div>

        {/* IP and Contract Invariant */}
        <div className="mt-12 p-6 rounded-[16px] bg-[#f5f5f6] border border-[#e0e0e0] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3 text-[#323234]">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>CONTRACT INVARIANT:</strong> Fixed bi-weekly or monthly rates with zero hidden markups. 100% code IP transferred with every Git push.
            </span>
          </div>
          <a
            href="#contact"
            className="text-[#ff470a] font-semibold hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Request Pod Availability</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
