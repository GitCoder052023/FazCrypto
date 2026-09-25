"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { saveDemoBookingRequest } from "@/lib/services-data";

export default function ProjectScopeEstimator() {
  const [selectedArchetype, setSelectedArchetype] = useState<string>("custom-web-application");
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
    { id: "custom-web-application", label: "Web Application & Portals" },
    { id: "backend-api-development", label: "Backend Core & High-Throughput APIs" },
    { id: "cloud-setup-deployment", label: "Cloud Infrastructure & SRE" },
    { id: "legacy-system-refactoring", label: "Legacy Monolith Modernization" },
  ];

  const constraintsList = [
    { id: "zero-downtime", label: "Zero Downtime Cutover Required" },
    { id: "throughput", label: "Peak Concurrency > 10k req/s" },
    { id: "compliance", label: "SOC2 / HIPAA / Financial Audit" },
    { id: "latency", label: "P99 Latency Budget < 50ms" },
    { id: "database", label: "Complex Database Schema Migration" },
  ];

  const timelines = [
    { id: "urgent", label: "Urgent Sprint (2–6 Weeks)" },
    { id: "quarter", label: "Quarterly Dedicated Pod" },
    { id: "multi-phase", label: "Multi-Phase Platform Build" },
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
    const ref = `VECTIS-SPEC-#${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionRef(ref);

    const archLabel = archetypes.find((a) => a.id === selectedArchetype)?.label || selectedArchetype;
    const timelineLabel = timelines.find((t) => t.id === selectedTimeline)?.label || selectedTimeline;
    const constraintLabels = selectedConstraints.join(", ");

    saveDemoBookingRequest({
      serviceId: selectedArchetype,
      serviceName: `Project Scope: ${archLabel}`,
      pricingType: "custom_quote",
      client: {
        name: formData.name,
        email: formData.email,
        company: formData.company,
      },
      project: {
        description: `[Role: ${formData.role}] [Constraints: ${constraintLabels}] [Timeline: ${timelineLabel}]\n\n${formData.details}`,
        timeline: timelineLabel,
        budget: "Scoped by Architect",
      },
    });

    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#1f1f1f] text-[#ffffff] border-b border-[#333333] relative scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#333333]">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-4">
              [ 07 // INITIATE TECHNICAL SCOPE &amp; DISCOVERY ]
            </div>
            <h2 className="type-heading font-medium tracking-tight text-[#ffffff]">
              Start with a structured scope,
              <span className="block italic text-[#808080] font-normal">not an ambiguous sales pitch.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-[14px] text-[#808080] max-w-[340px] leading-relaxed">
            Every submission is routed directly to a Principal Systems Architect. We evaluate repository boundaries and technical constraints prior to any commercial discussion.
          </p>
        </div>

        {/* Scoping Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Scope Parameter Configurator (7 cols) */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#333333] radius-container p-8 md:p-10 space-y-10">
            
            {/* Step 1: Archetype */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#808080] mb-4">
                01 // SELECT SYSTEM ARCHETYPE
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {archetypes.map((arch) => {
                  const isSelected = selectedArchetype === arch.id;
                  return (
                    <button
                      key={arch.id}
                      type="button"
                      onClick={() => setSelectedArchetype(arch.id)}
                      className={`text-left p-4 font-mono text-[12px] transition-all border radius-container cursor-pointer ${
                        isSelected
                          ? "bg-[#ffffff] text-[#000000] border-[#ffffff]"
                          : "bg-[#1f1f1f] border-[#333333] text-[#cccccc] hover:border-[#666666]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{arch.label}</span>
                        <span className="text-[10px]">{isSelected ? "●" : "○"}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Constraints */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#808080] mb-4">
                02 // CRITICAL SYSTEM CONSTRAINTS
              </div>
              <div className="flex flex-wrap gap-2.5">
                {constraintsList.map((con) => {
                  const isChecked = selectedConstraints.includes(con.id);
                  return (
                    <button
                      key={con.id}
                      type="button"
                      onClick={() => toggleConstraint(con.id)}
                      className={`px-3.5 py-2 radius-button font-mono text-[11px] uppercase tracking-wider transition-all border cursor-pointer ${
                        isChecked
                          ? "bg-[#ffffff] text-[#000000] border-[#ffffff]"
                          : "bg-[#1f1f1f] border-[#333333] text-[#808080] hover:text-[#cccccc] hover:border-[#666666]"
                      }`}
                    >
                      <span className="mr-2">{isChecked ? "[x]" : "[+]"}</span>
                      {con.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#808080] mb-4">
                03 // ESTIMATED HORIZON
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timelines.map((time) => {
                  const isSelected = selectedTimeline === time.id;
                  return (
                    <button
                      key={time.id}
                      type="button"
                      onClick={() => setSelectedTimeline(time.id)}
                      className={`text-center p-3 font-mono text-[11px] uppercase tracking-wider transition-all border radius-button cursor-pointer ${
                        isSelected
                          ? "bg-[#ffffff] text-[#000000] border-[#ffffff]"
                          : "bg-[#1f1f1f] border-[#333333] text-[#808080] hover:text-[#cccccc] hover:border-[#666666]"
                      }`}
                    >
                      {time.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Scope Summary Box */}
            <div className="p-5 bg-[#1f1f1f] border border-[#333333] radius-container font-mono text-[11px] text-[#808080]">
              <div className="text-[9px] uppercase tracking-widest text-[#808080] mb-2 flex items-center justify-between pb-2 border-b border-[#333333]">
                <span>ARCHITECTURAL PARAMETER SUMMARY</span>
                <span className="text-[#ffffff]">[ STATUS: READY FOR INTAKE ]</span>
              </div>
              <div className="text-[#ffffff]">
                &gt; Scope: {archetypes.find((a) => a.id === selectedArchetype)?.label}
              </div>
              <div className="text-[#cccccc] mt-1">
                &gt; Constraints: {selectedConstraints.length} active constraints ({selectedConstraints.join(", ")})
              </div>
              <div className="text-[#808080] mt-1">
                &gt; Target Horizon: {timelines.find((t) => t.id === selectedTimeline)?.label}
              </div>
            </div>

          </div>

          {/* Right Column: Submission Form (5 cols) */}
          <div className="lg:col-span-5 bg-[#141414] border border-[#333333] radius-container p-8 md:p-10">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-12 h-12 rounded-full border border-[#ffffff] flex items-center justify-center mx-auto text-[#ffffff]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-[#808080]">
                  [ INTAKE DISPATCH LOGGED ]
                </div>
                <h3 className="type-subheading font-medium text-[#ffffff]">
                  Technical Discovery Initiated
                </h3>
                <p className="text-[13px] text-[#808080] max-w-xs mx-auto leading-relaxed">
                  Your architectural parameters have been submitted directly to our lead engineering review queue. A Principal Systems Architect will respond within 24 business hours.
                </p>
                <div className="p-3 bg-[#1f1f1f] rounded-[8px] border border-[#333333] font-mono text-[10px] text-[#ffffff] tracking-widest uppercase">
                  DISPATCH REF: {submissionRef}
                </div>
                <div className="pt-2">
                  <Link
                    href="/demo/bookings"
                    className="font-mono text-[11px] text-[#808080] hover:text-[#ffffff] underline uppercase"
                  >
                    View in Demo Lead Ledger →
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#ffffff] mb-1">
                    DIRECT INTAKE FORM
                  </div>
                  <p className="text-[13px] text-[#808080] mb-6 leading-relaxed">
                    Provide system context. We execute mutual non-disclosure agreements prior to inspecting private repositories or internal topology.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-[#808080] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-4 bg-[#1f1f1f] border border-[#333333] radius-container text-[#ffffff] font-mono text-[12px] focus:outline-none focus:border-[#ffffff]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-[#808080] mb-2">
                      Role / Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. CTO / VP Eng"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full h-11 px-4 bg-[#1f1f1f] border border-[#333333] radius-container text-[#ffffff] font-mono text-[12px] focus:outline-none focus:border-[#ffffff]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-[#808080] mb-2">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-4 bg-[#1f1f1f] border border-[#333333] radius-container text-[#ffffff] font-mono text-[12px] focus:outline-none focus:border-[#ffffff]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-[#808080] mb-2">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Meridian Freight Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-11 px-4 bg-[#1f1f1f] border border-[#333333] radius-container text-[#ffffff] font-mono text-[12px] focus:outline-none focus:border-[#ffffff]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-[#808080] mb-2">
                    System Context / Core Challenge
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the product, current database scale, or critical operational goals..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full p-4 bg-[#1f1f1f] border border-[#333333] radius-container text-[#ffffff] font-mono text-[12px] focus:outline-none focus:border-[#ffffff] resize-none"
                  />
                </div>

                {/* Primary Action Button */}
                <button
                  type="submit"
                  className="w-full h-12 radius-button bg-[#ffffff] hover:bg-[#e6e6e6] text-[#000000] font-mono text-[12px] uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Technical Discovery Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="pt-2 text-[10px] font-mono text-[#808080] text-center uppercase tracking-wider">
                  Direct inquiry: <a href="mailto:architecture@vectis-systems.io" className="text-[#ffffff] hover:underline">architecture@vectis-systems.io</a> • NDA upon request
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
