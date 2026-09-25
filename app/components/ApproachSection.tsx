import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

export default function ApproachSection() {
  const pillars = [
    {
      num: "01",
      title: "Scope Before Code",
      subtitle: "Requirements & Architecture First",
      desc: "We dissect data models, third-party integrations, and performance constraints before writing code. You receive fixed milestone deliverables, not speculative hourly invoices.",
    },
    {
      num: "02",
      title: "Built for Production Durability",
      subtitle: "Pragmatic Architecture",
      desc: "We build with proven, maintainable technologies (TypeScript, Next.js, Go, PostgreSQL, Docker) that scale cleanly and make hiring easy—avoiding resume-driven hype.",
    },
    {
      num: "03",
      title: "Hermetic Automated Verification",
      subtitle: "Zero Untested Releases",
      desc: "Comprehensive integration tests, strict TypeScript types, and automated CI/CD pipelines ensure reliability. We never treat your end-users as unpaid QA testers.",
    },
    {
      num: "04",
      title: "100% Day-One IP Ownership",
      subtitle: "Zero Proprietary Lock-In",
      desc: "Every commit, architectural document, and deployment manifest lives in your private repository from day one. Full transfer of all assets with zero hostage code.",
    },
  ];

  const comparisonRows = [
    {
      factor: "Engineering Team",
      vectis: "Senior & Principal engineers directly building your project",
      traditional: "Junior developers with senior pitching partners",
      freelancers: "Solo contributors with variable reliability & bandwidth",
    },
    {
      factor: "Pricing & Scope",
      vectis: "Transparent fixed milestone quotes & guaranteed deliverables",
      traditional: "Open-ended Time & Materials with frequent budget creep",
      freelancers: "Informal estimates often requiring renegotiation",
    },
    {
      factor: "Code & IP Ownership",
      vectis: "100% repository transfer & full IP in your git from Day 1",
      traditional: "Code held hostage until final signoff or proprietary licensing",
      freelancers: "Fragmented repositories and scattered documentation",
    },
    {
      factor: "Quality & Testing",
      vectis: "Automated regression suites, CI/CD gates, and strict type safety",
      traditional: "Manual QA passes; bugs discovered by live end-users",
      freelancers: "Minimal testing beyond basic local smoke tests",
    },
    {
      factor: "Post-Launch Support",
      vectis: "30-day warranty included + predictable ongoing SLA retainer pods",
      traditional: "Steep hourly maintenance fees and slow response SLAs",
      freelancers: "Frequently unavailable after initial handover",
    },
  ];

  return (
    <section id="approach" className="py-24 md:py-32 bg-[#ffffff] text-[#000000] border-b border-[#e6e6e6] scroll-mt-20">
      <div id="workflow" />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-[#e6e6e6]">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-4">
              [ 04 // HOW WE WORK &amp; OUR STANDARDS ]
            </div>
            <h2 className="type-heading font-medium tracking-tight text-[#000000]">
              Senior engineering discipline.
              <span className="block italic text-[#808080] font-normal">Zero agency fluff.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-[14px] text-[#666666] max-w-[340px] leading-relaxed">
            How we engineer reliable software without bloat, delays, or broken promises. Senior talent, fixed milestone scope, and total transparency.
          </p>
        </div>

        {/* 4 Crisp Operating Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="p-8 bg-[#f2f2f2] border border-[#e6e6e6] radius-container flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-[11px] text-[#808080] mb-3">
                  [{p.num}] // STANDARD
                </div>
                <h3 className="type-subheading font-medium text-[#000000] mb-1">
                  {p.title}
                </h3>
                <div className="font-mono text-[10px] text-[#808080] uppercase tracking-wider mb-4">
                  {p.subtitle}
                </div>
                <p className="text-[13px] text-[#4d4d4d] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#d9d9d9] font-mono text-[9px] uppercase tracking-widest text-[#000000] font-medium">
                GUARANTEED IN CONTRACT
              </div>
            </div>
          ))}
        </div>

        {/* Agency Comparison Plate */}
        <div className="border border-[#e6e6e6] radius-container p-8 lg:p-10 bg-[#ffffff]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#e6e6e6] gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#808080] block mb-1">
                COMPARATIVE ASSESSMENT
              </span>
              <h3 className="type-subheading font-medium text-[#000000]">
                What sets our studio apart.
              </h3>
            </div>
            <div className="font-mono text-[11px] text-[#808080]">
              VERIFIED WORKING MODEL
            </div>
          </div>

          {/* Desktop Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#e6e6e6] font-mono text-[10px] uppercase tracking-wider text-[#808080]">
                  <th className="py-4 pr-6 font-medium w-1/4">Evaluation Dimension</th>
                  <th className="py-4 px-6 font-semibold text-[#000000] bg-[#f7f7f7] w-1/3">
                    VECTIS STUDIO
                  </th>
                  <th className="py-4 px-6 font-normal w-1/4 text-[#666666]">
                    Traditional Agencies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f0]">
                {comparisonRows.map((row) => (
                  <tr key={row.factor} className="hover:bg-[#fafafa] transition-colors">
                    <td className="py-4 pr-6 font-mono text-[11px] text-[#000000] font-medium">
                      {row.factor}
                    </td>
                    <td className="py-4 px-6 bg-[#f7f7f7] text-[#000000] font-normal leading-relaxed">
                      <div className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#000000] mt-0.5 shrink-0" />
                        <span>{row.vectis}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[#666666] leading-relaxed">
                      <div className="flex items-start gap-2">
                        <X className="w-3.5 h-3.5 text-[#999999] mt-0.5 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-[#e6e6e6] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <span className="text-[#666666]">
              Ready to work with senior engineers who treat your project as a durable asset?
            </span>
            <Link
              href="#contact"
              className="text-[#000000] hover:underline flex items-center gap-1.5 uppercase font-medium tracking-wider"
            >
              <span>Initiate Project Discussion</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
