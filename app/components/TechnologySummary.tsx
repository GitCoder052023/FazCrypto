import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TechnologySummary() {
  const domains = [
    {
      index: "01",
      layer: "FRONTEND & INTERFACES",
      technologies: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "React Native"],
      rationale: "Instant initial page loads, server components, strict network type safety, and zero styling runtime bloat.",
      deliverable: "Commercial web applications, customer portals, SaaS dashboards, and cross-platform mobile apps.",
    },
    {
      index: "02",
      layer: "BACKEND & CORE SYSTEMS",
      technologies: ["Go (Golang)", "Node.js", "Python", "PostgreSQL", "Redis", "REST & gRPC"],
      rationale: "Deterministic CPU/memory consumption, ACID relational durability, sub-millisecond caching, and strict API schemas.",
      deliverable: "High-throughput business logic, payment ledgers, real-time sync engines, and integration microservices.",
    },
    {
      index: "03",
      layer: "CLOUD & INFRASTRUCTURE",
      technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
      rationale: "Codified infrastructure with zero manual drift, automated canary rollouts, and reproducible deployment environments.",
      deliverable: "Production cloud setups, CI/CD pipelines, container orchestration, and multi-region disaster recovery.",
    },
    {
      index: "04",
      layer: "RELIABILITY & MONITORING",
      technologies: ["Playwright", "Jest", "OpenTelemetry", "Prometheus", "Sentry", "Datadog"],
      rationale: "Automated regression verification, end-to-end user simulation, and real-time distributed error telemetry.",
      deliverable: "Automated test gates preventing production bugs, error budget alerting, and 99.99% uptime monitoring.",
    },
  ];

  return (
    <section id="technology" className="py-24 md:py-32 bg-[#ffffff] text-[#000000] border-b border-[#e6e6e6] scroll-mt-20">
      <div id="taxonomy" />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-[#e6e6e6]">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-4">
              [ 05 // CORE TECHNOLOGY CAPABILITIES ]
            </div>
            <h2 className="type-heading font-medium tracking-tight text-[#000000]">
              Proven technologies.
              <span className="block italic text-[#808080] font-normal">Sensible, battle-tested architecture.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-[14px] text-[#666666] max-w-[340px] leading-relaxed">
            No resume-driven experiments. We choose widely adopted, production-proven tools that scale reliably and make future in-house hiring straightforward.
          </p>
        </div>

        {/* Clean 4-Row Editorial Technology Grid */}
        <div className="divide-y divide-[#e6e6e6] border-t border-b border-[#e6e6e6]">
          {domains.map((d) => (
            <div key={d.index} className="py-8 transition-colors hover:bg-[#fafafa]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Layer Index & Label (4 cols) */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-[#808080] font-medium">
                      [{d.index}]
                    </span>
                    <h3 className="font-mono text-xs uppercase tracking-wider font-semibold text-[#000000]">
                      {d.layer}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs text-[#666666] leading-relaxed max-w-sm">
                    {d.deliverable}
                  </p>
                </div>

                {/* Technologies List (4 cols) */}
                <div className="lg:col-span-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#808080] block mb-2">
                    DEPLOYED STACK
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {d.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[#f2f2f2] text-[#000000] border border-[#e6e6e6] rounded-[6px] font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architectural Rationale (4 cols) */}
                <div className="lg:col-span-4 font-mono text-xs text-[#4d4d4d] leading-relaxed">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#808080] block mb-2">
                    ARCHITECTURAL RATIONALE
                  </span>
                  <p>{d.rationale}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Credibility Footer */}
        <div className="mt-10 flex flex-col sm:flex-row items-baseline justify-between gap-4 font-mono text-[11px] text-[#808080]">
          <div>100% SECURITY-AUDITED DEPENDENCIES • ZERO BLACK-BOX VENDOR LOCK-IN</div>
          <Link
            href="/services"
            className="text-[#000000] hover:underline flex items-center gap-1.5 uppercase font-medium tracking-wider"
          >
            <span>Match Technologies to Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
