import { Check, X } from "lucide-react";

export default function PrinciplesSection() {
  const commitments = [
    {
      title: "100% Day-One IP Ownership",
      desc: "Every commit, architecture diagram, Terraform manifest, and test suite lives in your private repository from day one. We never hold code hostage or build proprietary lock-in.",
    },
    {
      title: "Pragmatic Architecture over Resume-Driven Design",
      desc: "We do not deploy 14 microservices and Kubernetes when a single hardened Go/Node binary and a managed PostgreSQL instance will handle your load for the next four years with zero operational panic.",
    },
    {
      title: "Hermetic Automated Verification",
      desc: "If it is not covered by automated regression tests and integration suites, it does not exist. We do not ask your users to be quality assurance testers.",
    },
    {
      title: "Continuous Knowledge Transfer",
      desc: "We pair with your internal engineering leads throughout the engagement. When we cut over to production, your team fully understands every architectural boundary and operational runbook.",
    },
  ];

  const antiPatterns = [
    "No 10,000-line pull requests that cannot be reasoned about.",
    "No Friday afternoon production deployments without automated canary safety latches.",
    "No black-box third-party dependencies with unverified maintenance status.",
    "No resume-driven technology choices that burden your team with maintenance debt.",
  ];

  return (
    <section className="py-24 md:py-32 bg-[#19191a] text-white border-b border-[#323234] relative">
      <div className="absolute inset-0 pointer-events-none technical-grid opacity-30" aria-hidden="true" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#323234]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#bfbec9] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff470a]" />
              <span>06 / ARCHITECTURAL CODE OF CONDUCT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.2] tracking-[-0.015em] font-display text-white">
              Engineering commitments & <br className="hidden sm:inline" />
              anti-patterns we reject.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#bfbec9] max-w-sm font-mono">
            How we make architectural decisions when nobody is looking.
          </p>
        </div>

        {/* 2-Column Split: Positive Commitments vs Anti-Patterns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Positive Commitments (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs font-semibold text-[#ff470a] uppercase tracking-wider block mb-2">
              OUR OPERATING COMMITMENTS
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commitments.map((c) => (
                <div
                  key={c.title}
                  className="p-6 bg-[#222224] border border-[#323234] rounded-[16px] flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-display font-medium text-white mb-2 leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-xs text-[#bfbec9] leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#323234] flex items-center gap-1.5 text-[10px] font-mono text-[#76757f]">
                    <Check className="w-3.5 h-3.5 text-[#ff470a]" />
                    <span>CONTRACTUAL STANDARD</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Anti-Patterns Rejected (5 cols) */}
          <div className="lg:col-span-5 bg-[#222224] border border-[#323234] p-6 sm:p-7 rounded-[16px]">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#323234]">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                ANTI-PATTERNS WE REJECT
              </span>
            </div>

            <p className="text-xs text-[#bfbec9] mb-6 leading-relaxed">
              We frequently inherit codebases crippled by unneeded complexity introduced by prior vendors. Here is what we refuse to do:
            </p>

            <ul className="space-y-3.5">
              {antiPatterns.map((ap, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-[#bfbec9] p-3 rounded-[8px] bg-[#19191a] border border-[#323234]">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{ap}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-[#323234] font-mono text-[11px] text-[#76757f]">
              PHILOSOPHY: Complexity must be earned through verified scale requirements, never assumed.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
