"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function ProjectScopeEstimator() {
  const [selectedArchetype, setSelectedArchetype] = useState<string>("core");
  const [selectedConstraints, setSelectedConstraints] = useState<string[]>([
    "zero-downtime",
    "throughput",
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("quarter");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submissionRef, setSubmissionRef] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    company: "",
    details: "",
  });

  const archetypes = [
    { id: "core", label: "Distributed Platform Core" },
    { id: "legacy", label: "Legacy Monolith Decoupling" },
    { id: "ops", label: "Internal Control Plane & Tooling" },
    { id: "infra", label: "Cloud Infrastructure & SRE" },
  ];

  const constraintsList = [
    { id: "zero-downtime", label: "Zero Downtime Cutover Required" },
    { id: "throughput", label: "Peak Concurrency > 10k req/s" },
    { id: "compliance", label: "HIPAA / SOC2 / Financial Audit" },
    { id: "latency", label: "P99 Latency Budget < 50ms" },
    { id: "database", label: "Complex Database Schema Migration" },
  ];

  const timelines = [
    { id: "urgent", label: "Urgent Sprint (4–8 Weeks)" },
    { id: "quarter", label: "Quarterly Dedicated Pod" },
    { id: "multi-phase", label: "Multi-Phase Modernization" },
  ];

  const toggleConstraint = (id: string) => {
    if (selectedConstraints.includes(id)) {
      setSelectedConstraints(selectedConstraints.filter((c) => c !== id));
    } else {
      setSelectedConstraints([...selectedConstraints, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionRef(`VECTIS-SCOPE-#${Math.floor(100000 + Math.random() * 900000)}`);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#19191a] text-white relative">
      <div className="absolute inset-0 pointer-events-none technical-grid opacity-30" aria-hidden="true" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#323234]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#bfbec9] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff470a]" />
              <span>08 / INITIATE ENGAGEMENT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.2] tracking-[-0.015em] font-display text-white">
              Start with an architectural scope, <br className="hidden sm:inline" />
              not a sales pitch.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#bfbec9] max-w-sm font-mono">
            Every inquiry is routed directly to a Principal Systems Architect. We evaluate repository constraints and technical feasibility before any contract discussion.
          </p>
        </div>

        {/* Scoping Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Scope Parameter Configurator (7 cols) */}
          <div className="lg:col-span-7 bg-[#222224] border border-[#323234] rounded-[16px] p-6 sm:p-8 space-y-8">
            
            {/* Step 1: Archetype */}
            <div>
              <span className="font-mono text-xs font-semibold text-[#ff470a] uppercase tracking-wider block mb-3">
                01 // SELECT SYSTEM ARCHETYPE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {archetypes.map((arch) => (
                  <button
                    key={arch.id}
                    type="button"
                    onClick={() => setSelectedArchetype(arch.id)}
                    className={`text-left p-3.5 rounded-[8px] font-mono text-xs transition-all border ${
                      selectedArchetype === arch.id
                        ? "bg-[#ff470a]/15 border-[#ff470a] text-white"
                        : "bg-[#19191a] border-[#323234] text-[#bfbec9] hover:border-[#464554]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{arch.label}</span>
                      {selectedArchetype === arch.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff470a]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Constraints */}
            <div>
              <span className="font-mono text-xs font-semibold text-[#ff470a] uppercase tracking-wider block mb-3">
                02 // CRITICAL SYSTEM CONSTRAINTS
              </span>
              <div className="flex flex-wrap gap-2">
                {constraintsList.map((con) => {
                  const isChecked = selectedConstraints.includes(con.id);
                  return (
                    <button
                      key={con.id}
                      type="button"
                      onClick={() => toggleConstraint(con.id)}
                      className={`px-3 py-2 rounded-[6px] font-mono text-xs transition-all border ${
                        isChecked
                          ? "bg-[#ff470a]/20 border-[#ff470a] text-white"
                          : "bg-[#19191a] border-[#323234] text-[#bfbec9] hover:border-[#464554]"
                      }`}
                    >
                      <span className="mr-1.5">{isChecked ? "✓" : "+"}</span>
                      {con.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div>
              <span className="font-mono text-xs font-semibold text-[#ff470a] uppercase tracking-wider block mb-3">
                03 // ESTIMATED HORIZON
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {timelines.map((time) => (
                  <button
                    key={time.id}
                    type="button"
                    onClick={() => setSelectedTimeline(time.id)}
                    className={`text-center p-3 rounded-[8px] font-mono text-xs transition-all border ${
                      selectedTimeline === time.id
                        ? "bg-[#ff470a]/15 border-[#ff470a] text-white"
                        : "bg-[#19191a] border-[#323234] text-[#bfbec9] hover:border-[#464554]"
                    }`}
                  >
                    {time.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Scope Summary Box */}
            <div className="p-4 rounded-[8px] bg-[#19191a] border border-[#323234] font-mono text-xs text-[#bfbec9]">
              <div className="text-[10px] uppercase text-[#76757f] mb-1.5 flex items-center justify-between">
                <span>ENGINEERING PARAMETER SUMMARY</span>
                <span className="text-emerald-400">STATUS: READY FOR DISCOVERY</span>
              </div>
              <div className="text-white">
                &gt; Scope: <span className="text-[#ff470a]">{archetypes.find((a) => a.id === selectedArchetype)?.label}</span>
              </div>
              <div className="text-[11px] text-[#bfbec9] mt-1">
                &gt; Constraints: {selectedConstraints.length} active parameters ({selectedConstraints.join(", ")})
              </div>
              <div className="text-[11px] text-[#bfbec9] mt-0.5">
                &gt; Target: {timelines.find((t) => t.id === selectedTimeline)?.label}
              </div>
            </div>

          </div>

          {/* Right Column: Submission Form (5 cols) */}
          <div className="lg:col-span-5 bg-[#222224] border border-[#323234] rounded-[16px] p-6 sm:p-8">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium text-white">
                  Technical Discovery Initiated
                </h3>
                <p className="text-xs text-[#bfbec9] max-w-xs mx-auto leading-relaxed">
                  Your architectural parameters have been submitted directly to our lead engineering review queue. A principal systems architect will respond within 24 business hours.
                </p>
                <div className="pt-4 font-mono text-[11px] text-[#76757f]">
                  DISPATCH REF: {submissionRef}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider block mb-1">
                    Direct Inquiry Form
                  </span>
                  <p className="text-xs text-[#bfbec9] mb-4">
                    Send us your project context. We execute standard NDAs prior to reviewing private repositories or system architecture docs.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-mono text-[10px] text-[#bfbec9] uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-3.5 bg-[#19191a] border border-[#464554] rounded-[6px] text-white text-xs focus:outline-none focus:border-[#ff470a] focus:ring-1 focus:ring-[#ff470a]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-[#bfbec9] uppercase mb-1">
                      Role / Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. CTO / VP Eng"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full h-11 px-3.5 bg-[#19191a] border border-[#464554] rounded-[6px] text-white text-xs focus:outline-none focus:border-[#ff470a] focus:ring-1 focus:ring-[#ff470a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-[#bfbec9] uppercase mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-3.5 bg-[#19191a] border border-[#464554] rounded-[6px] text-white text-xs focus:outline-none focus:border-[#ff470a] focus:ring-1 focus:ring-[#ff470a]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-[#bfbec9] uppercase mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Meridian Freight Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-11 px-3.5 bg-[#19191a] border border-[#464554] rounded-[6px] text-white text-xs focus:outline-none focus:border-[#ff470a] focus:ring-1 focus:ring-[#ff470a]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-[#bfbec9] uppercase mb-1">
                    System Context / Core Challenge
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the current codebase, database scale, or operational bottleneck..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full p-3 bg-[#19191a] border border-[#464554] rounded-[6px] text-white text-xs focus:outline-none focus:border-[#ff470a] focus:ring-1 focus:ring-[#ff470a] resize-none"
                  />
                </div>

                {/* Primary CTA button strictly adhering to DESIGN.md */}
                <button
                  type="submit"
                  className="w-full h-12 px-6 rounded-full bg-[#ff470a] hover:bg-[#ff561d] text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-[0_4px_8px_rgba(0,0,0,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff470a]"
                >
                  <span>Submit Technical Discovery Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-2 text-[10px] font-mono text-[#76757f] text-center">
                  Direct contact: <a href="mailto:architecture@vectis-systems.io" className="text-[#bfbec9] hover:underline">architecture@vectis-systems.io</a> • PGP Encrypted upon request
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
