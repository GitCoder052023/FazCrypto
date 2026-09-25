import Link from "next/link";

export default function EngagementModel() {
  const models = [
    {
      archetype: "[ 01 // SURGICAL INTERVENTION ]",
      name: "Architecture & Bottleneck Sprint",
      timeline: "4 to 8 Weeks",
      focus: "Targeted, high-velocity intervention to resolve critical production bottlenecks, database deadlocks, or scaling failure domains.",
      podComposition: "1 Principal Architect + 1 Senior Systems Engineer",
      scope: [
        "In-depth query profiling & execution plan optimization",
        "Isolation and eradication of connection pool starvation & memory leaks",
        "Deterministic load benchmarking & failure boundary remediation",
        "Operational post-mortem & automated verification runbooks",
      ],
      idealFor: "Teams facing immediate scaling limits or deployment deadlocks before launch.",
    },
    {
      archetype: "[ 02 // DEDICATED POD ]",
      name: "Embedded Systems Engineering Pod",
      timeline: "Quarterly Retainer (3–12 Months)",
      focus: "Autonomous senior engineering pod integrated directly with your repository, issue tracker, and sprint rhythm.",
      podComposition: "1 Technical Lead + 2 to 4 Senior Backend/Infra Engineers",
      scope: [
        "Continuous platform engineering & high-throughput feature shipping",
        "Direct participation in architectural reviews & design documents",
        "Comprehensive automated verification, CI/CD pipelines, and observability",
        "Direct knowledge transfer to internal engineering staff",
      ],
      idealFor: "Companies needing senior engineering velocity without a 9-month hiring cycle.",
    },
    {
      archetype: "[ 03 // FULL MODERNIZATION ]",
      name: "Legacy Monolith Decoupling & Cutover",
      timeline: "Milestone-Governed (6–18 Months)",
      focus: "Comprehensive replatforming of aging enterprise core software with contractual zero-downtime SLAs.",
      podComposition: "Dedicated Cross-Functional Architecture & Infrastructure Pod",
      scope: [
        "End-to-end Strangler Fig facade and dynamic traffic routing",
        "Change Data Capture (Debezium) real-time dual-write pipelines",
        "Shadow traffic validation to guarantee 100% output parity",
        "Automated canary cutover and formal decommissioning of legacy code",
      ],
      idealFor: "Enterprises where legacy monolith risk has become an operational liability.",
    },
  ];

  return (
    <section id="engagement" className="py-24 md:py-32 bg-[#ffffff] text-[#000000] border-b border-[#e6e6e6]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#e6e6e6]">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-4">
              [ 07 // ENGAGEMENT STRUCTURE ]
            </div>
            <h2 className="type-heading font-medium tracking-tight text-[#000000]">
              Transparent engagement models.
              <span className="block italic text-[#808080] font-normal">Zero ambiguous billing.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-[14px] text-[#666666] max-w-[340px] leading-relaxed">
            Contracts structured strictly around verified technical milestones and engineering pod velocity, not open-ended advisory hours.
          </p>
        </div>

        {/* 3 Structured Engagement Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-b border-[#e6e6e6]">
          {models.map((m, idx) => (
            <div
              key={m.name}
              className={`p-8 lg:p-10 flex flex-col justify-between ${
                idx !== 0 ? "border-t lg:border-t-0 lg:border-l border-[#e6e6e6]" : ""
              }`}
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#e6e6e6] font-mono text-[10px] uppercase tracking-wider text-[#808080]">
                  <span className="text-[#000000] font-medium">{m.archetype}</span>
                  <span>{m.timeline}</span>
                </div>

                <h3 className="type-subheading font-medium text-[#000000] mb-3 leading-snug">
                  {m.name}
                </h3>
                
                <p className="text-[13px] text-[#666666] mb-8 leading-relaxed">
                  {m.focus}
                </p>

                {/* Team composition box */}
                <div className="mb-8 p-4 bg-[#f2f2f2] border border-[#e6e6e6] radius-container font-mono text-[11px]">
                  <span className="text-[#808080] block uppercase text-[9px] tracking-wider mb-1">
                    POD ALLOCATION
                  </span>
                  <span className="text-[#000000] font-medium leading-relaxed block">
                    {m.podComposition}
                  </span>
                </div>

                {/* Scope items */}
                <div className="space-y-3 mb-8">
                  <span className="font-mono text-[10px] text-[#808080] uppercase tracking-wider block">
                    KEY DELIVERABLES
                  </span>
                  <ul className="space-y-2.5">
                    {m.scope.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13px] text-[#333333] leading-snug">
                        <span className="text-[#808080] font-mono text-[11px] shrink-0 mt-0.5">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom context */}
              <div className="pt-6 border-t border-[#e6e6e6]">
                <div className="font-mono text-[9px] uppercase tracking-wider text-[#808080] mb-1">
                  RECOMMENDED CONTEXT
                </div>
                <div className="text-[12px] text-[#666666] leading-relaxed mb-6">
                  {m.idealFor}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-wider text-[#000000] hover:underline"
                >
                  <span>Select Relevant Service</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* IP and Contract Invariant */}
        <div className="mt-12 p-8 radius-container bg-[#f2f2f2] border border-[#e6e6e6] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-[11px]">
          <div className="text-[#333333] leading-relaxed max-w-[700px]">
            <strong className="text-[#000000] tracking-wider uppercase">[ CONTRACT INVARIANT ]</strong> Fixed bi-weekly or monthly rates with zero hidden markups. 100% repository IP transferred with every automated Git push. Zero proprietary lock-in.
          </div>
          <a
            href="#contact"
            className="type-action inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-[#000000] hover:underline shrink-0"
          >
            <span>Request Pod Availability</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

