export default function PrinciplesSection() {
  const commitments = [
    {
      num: "01",
      title: "100% Day-One Repository & IP Ownership",
      desc: "Every commit, architectural blueprint, Terraform manifest, and automated verification suite lives in your private repository from day one. Zero proprietary lock-in, zero hostage code.",
    },
    {
      num: "02",
      title: "Pragmatic Architecture over Resume-Driven Design",
      desc: "We do not deploy 14 microservices and Kubernetes when a hardened Go/Node binary and a managed PostgreSQL instance will handle your load for the next four years with zero operational panic.",
    },
    {
      num: "03",
      title: "Hermetic Automated Verification",
      desc: "If it is not covered by automated regression suites and integration tests, it does not exist. We never ask client end-users to serve as unpaid quality assurance testers.",
    },
    {
      num: "04",
      title: "Continuous Structural Knowledge Transfer",
      desc: "We pair with your internal engineering leads throughout delivery. When we cut over to production, your team fully commands every architectural boundary and operational runbook.",
    },
  ];

  const antiPatterns = [
    "No 10,000-line pull requests that cannot be reasoned about or reviewed.",
    "No Friday afternoon production deployments without automated canary safety latches.",
    "No black-box third-party dependencies with unverified maintenance history.",
    "No resume-driven technology choices that burden client balance sheets with maintenance debt.",
  ];

  return (
    <section className="py-24 md:py-32 bg-[#1f1f1f] text-[#ffffff] border-b border-[#333333] relative">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#333333]">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-4">
              [ 06 // ARCHITECTURAL CODE OF CONDUCT ]
            </div>
            <h2 className="type-heading font-medium tracking-tight text-[#ffffff]">
              Engineering commitments &amp;
              <span className="block italic text-[#808080] font-normal">anti-patterns we contractually reject.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-[14px] text-[#808080] max-w-[340px] leading-relaxed">
            How we make architectural decisions when nobody is looking. We hold our engineers to published standards of craft and operational restraint.
          </p>
        </div>

        {/* 2-Column Split: Positive Commitments vs Anti-Patterns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Positive Commitments (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#808080] pb-3 border-b border-[#333333]">
              OPERATING COVENANTS [04 POINTS]
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {commitments.map((c) => (
                <div
                  key={c.title}
                  className="flex flex-col justify-between pt-4 border-t border-[#333333]"
                >
                  <div>
                    <div className="font-mono text-[11px] text-[#808080] mb-2">
                      [{c.num}]
                    </div>
                    <h3 className="type-subheading font-medium text-[#ffffff] mb-2 leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-[13px] text-[#999999] leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#333333] font-mono text-[9px] uppercase tracking-wider text-[#808080]">
                    CONTRACTUAL STANDARD — STRICT AUDIT
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Anti-Patterns Rejected (5 cols) */}
          <div className="lg:col-span-5 bg-[#141414] border border-[#333333] p-8 md:p-10 radius-container">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#333333]">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#ffffff]">
                ANTI-PATTERNS WE REJECT
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#808080]">
                [ PROHIBITED ]
              </span>
            </div>

            <p className="text-[13px] text-[#808080] mb-8 leading-relaxed">
              We frequently inherit production systems crippled by artificial complexity introduced by prior vendors. Here is what we refuse to do:
            </p>

            <ul className="space-y-4">
              {antiPatterns.map((ap, i) => (
                <li key={i} className="flex items-start gap-4 text-[13px] text-[#cccccc] pb-4 border-b border-[#262626] last:border-b-0">
                  <span className="font-mono text-[11px] text-[#808080] shrink-0 mt-0.5">
                    [x]
                  </span>
                  <span className="leading-snug">{ap}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-[#333333] font-mono text-[10px] text-[#808080] leading-relaxed uppercase tracking-wider">
              PHILOSOPHY: Complexity must be earned through verified operational requirements, never assumed.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

