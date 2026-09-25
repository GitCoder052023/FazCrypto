"use client";

import { useState } from "react";
import Link from "next/link";
import AgencyNav from "../components/AgencyNav";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import { DEMO_SERVICES, ServiceCategory, formatPriceDisplay } from "@/lib/services-data";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>("business-website");

  const categories = [
    { id: "all" as ServiceCategory, label: "All Capabilities" },
    { id: "web" as ServiceCategory, label: "Web Systems" },
    { id: "mobile" as ServiceCategory, label: "Mobile Systems" },
    { id: "backend" as ServiceCategory, label: "Backend & API" },
    { id: "cloud" as ServiceCategory, label: "Cloud & Infrastructure" },
    { id: "maintenance" as ServiceCategory, label: "Maintenance & SRE" },
    { id: "design" as ServiceCategory, label: "Product Design" },
  ];

  const filteredServices =
    activeCategory === "all"
      ? DEMO_SERVICES
      : DEMO_SERVICES.filter((s) => s.category === activeCategory);

  const handleOpenBooking = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#000000]">
      <AgencyNav />

      <main className="flex-1 pt-28 md:pt-36">
        
        {/* ========================================================
            HEADER: Catalog Thesis & Indicative Pricing Monograph
           ======================================================== */}
        <section className="bg-[#ffffff] text-[#000000] border-b border-[#e6e6e6] py-16 md:py-24 relative">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-4">
              [ VECTIS // COMMERCIAL SERVICE CATALOG ]
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="type-display font-medium tracking-tighter text-[#000000]">
                  Transparent capabilities.
                  <span className="block italic text-[#808080] font-normal">Defensible indicative pricing.</span>
                </h1>
                <p className="mt-6 text-[16px] text-[#666666] max-w-xl leading-relaxed">
                  Evaluate our commercial engineering offerings, review concrete technical deliverables, 
                  and initiate project intake in one interaction. Every estimate is grounded in explicit architectural complexity.
                </p>
              </div>

              {/* Indicative Demo Notice */}
              <div className="lg:col-span-4 bg-[#f2f2f2] p-6 radius-container border border-[#e6e6e6] font-mono text-[11px] text-[#333333]">
                <div className="text-[9px] uppercase tracking-widest text-[#808080] mb-2">
                  [ SPECIFICATION DISCLOSURE ]
                </div>
                <p className="leading-relaxed text-[#666666]">
                  All prices shown are indicative baseline demonstration estimates in INR (₹). Formal fixed contracts are established following an architectural discovery review.
                </p>
                <div className="mt-4 pt-3 border-t border-[#e6e6e6] flex items-center justify-between text-[9px] text-[#808080] tracking-wider uppercase">
                  <span>ZERO HIDDEN BILLING</span>
                  <span>100% IP TRANSFER</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            CATALOG SECTION & FILTERING
           ======================================================== */}
        <section className="py-16 md:py-24 bg-[#ffffff] border-b border-[#e6e6e6]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 pb-8 mb-12 border-b border-[#e6e6e6]">
              <span className="font-mono text-[10px] text-[#808080] mr-3 uppercase tracking-wider hidden sm:inline-block">
                DOMAIN FILTER:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 radius-button font-mono text-[11px] uppercase tracking-wider transition-all border cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[#000000] text-[#ffffff] border-[#000000]"
                      : "bg-[#ffffff] text-[#666666] border-[#e6e6e6] hover:border-[#000000] hover:text-[#000000]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Structured Service Index */}
            <div className="border-t border-b border-[#e6e6e6]">
              {filteredServices.map((service, idx) => (
                <div
                  key={service.id}
                  className="py-12 border-b border-[#e6e6e6] last:border-b-0 transition-colors group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Number, Name, Category & Description (6 cols) */}
                    <div className="lg:col-span-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[12px] text-[#808080]">
                          [0{idx + 1}]
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#808080] px-2 py-0.5 border border-[#e6e6e6] radius-button">
                          {service.categoryLabel}
                        </span>
                      </div>

                      <h2 className="type-heading font-medium text-[#000000]">
                        <Link
                          href={`/services/${service.slug}`}
                          className="hover:underline"
                        >
                          {service.name}
                        </Link>
                      </h2>

                      <p className="text-[14px] leading-relaxed text-[#666666] max-w-xl">
                        {service.shortDescription}
                      </p>

                      {/* Deliverables snippet */}
                      <div className="pt-3">
                        <span className="font-mono text-[10px] text-[#808080] uppercase tracking-wider block mb-2">
                          STANDARD DELIVERABLES:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.deliverables.slice(0, 4).map((d, i) => (
                            <li key={i} className="text-[12px] text-[#333333] flex items-start gap-2">
                              <span className="font-mono text-[#808080] shrink-0">—</span>
                              <span className="truncate">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Middle: Pricing & Duration Column (3 cols) */}
                    <div className="lg:col-span-3 bg-[#f2f2f2] p-6 radius-container border border-[#e6e6e6] font-mono">
                      <span className="text-[9px] text-[#808080] uppercase tracking-widest block mb-1">
                        INDICATIVE PRICE
                      </span>
                      <div className="type-subheading font-medium text-[#000000]">
                        {formatPriceDisplay(service.pricing)}
                      </div>
                      
                      <div className="mt-4 pt-3 border-t border-[#e6e6e6] text-[11px] text-[#666666] space-y-1.5">
                        <div className="flex justify-between">
                          <span className="text-[#808080]">Typical Horizon:</span>
                          <span className="text-[#000000]">{service.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#808080]">IP Transfer:</span>
                          <span className="text-[#000000]">100% Day One</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Actions Column (3 cols) */}
                    <div className="lg:col-span-3 flex flex-col gap-3 justify-center h-full pt-2">
                      <button
                        type="button"
                        onClick={() => handleOpenBooking(service.id)}
                        className="w-full h-12 radius-button bg-[#000000] hover:bg-[#1f1f1f] text-[#ffffff] text-[11px] font-mono uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>{service.booking.ctaLabel}</span>
                        <span>→</span>
                      </button>

                      <Link
                        href={`/services/${service.slug}`}
                        className="type-action text-center block text-[11px] font-mono uppercase tracking-widest text-[#000000] hover:underline pt-1"
                      >
                        View Full Specification →
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================
            DECISION SUPPORT: ARCHITECTURAL COMPARISON (Section 26)
           ======================================================== */}
        <section className="py-20 md:py-28 bg-[#ffffff] border-b border-[#e6e6e6]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            
            <div className="max-w-2xl mb-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-3">
                [ SERVICE DIFFERENTIATION // DECISION SUPPORT ]
              </div>
              <h2 className="type-heading font-medium text-[#000000] mb-3">
                Which architecture matches your requirements?
                <span className="block italic text-[#808080] font-normal">A direct comparison of core capability scopes.</span>
              </h2>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                Review key technical boundaries across our primary services to determine the appropriate starting scope.
              </p>
            </div>

            {/* Comparison Matrix */}
            <div className="border border-[#e6e6e6] radius-container overflow-x-auto font-mono text-[12px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#e6e6e6] bg-[#f2f2f2] text-[#808080] text-[10px] uppercase tracking-wider">
                    <th className="p-4 sm:p-5 font-medium">Architectural Capability</th>
                    <th className="p-4 sm:p-5 font-medium text-[#000000]">Business Website</th>
                    <th className="p-4 sm:p-5 font-medium text-[#000000]">Web Application</th>
                    <th className="p-4 sm:p-5 font-medium text-[#000000]">API &amp; Backend</th>
                    <th className="p-4 sm:p-5 font-medium text-[#000000]">Cloud / SRE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e6e6e6]">
                  {[
                    { feature: "Headless CMS / Editorial Front", s1: "Included", s2: "Optional", s3: "—", s4: "—" },
                    { feature: "User Authentication & RBAC", s1: "—", s2: "Included", s3: "Included", s4: "IAM Policy" },
                    { feature: "Relational DB (PostgreSQL)", s1: "—", s2: "Included", s3: "Included", s4: "Automated RDS" },
                    { feature: "Custom Operational Workflows", s1: "—", s2: "Included", s3: "Included", s4: "—" },
                    { feature: "High-Concurrency (>10k req/s)", s1: "CDN Cache", s2: "Optional", s3: "Engineered", s4: "Auto-scaled" },
                    { feature: "Infrastructure as Code (Terraform)", s1: "Managed", s2: "Docker", s3: "Docker", s4: "Included" },
                    { feature: "24/7 Production Alerting / SRE", s1: "Add-on", s2: "Add-on", s3: "Add-on", s4: "Included" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-[#fafafa] transition-colors">
                      <td className="p-4 sm:p-5 text-[#000000] font-sans font-medium text-[13px]">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-[#666666]">{row.s1}</td>
                      <td className="p-4 sm:p-5 text-[#666666]">{row.s2}</td>
                      <td className="p-4 sm:p-5 text-[#666666]">{row.s3}</td>
                      <td className="p-4 sm:p-5 text-[#666666]">{row.s4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* ========================================================
            BUSINESS WORKFLOW: WHAT HAPPENS AFTER YOU CLICK BOOK?
           ======================================================== */}
        <section className="py-20 md:py-28 bg-[#1f1f1f] text-[#ffffff] border-b border-[#333333]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#333333]">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-4">
                  [ ENGAGEMENT PROTOCOL ]
                </div>
                <h2 className="type-heading font-medium text-[#ffffff]">
                  What happens when you book a service?
                  <span className="block italic text-[#808080] font-normal">A transparent four-stage technical path.</span>
                </h2>
              </div>
              <p className="mt-6 md:mt-0 text-[14px] text-[#808080] max-w-[340px] leading-relaxed">
                Zero ambiguous sales calls. You interface directly with a Principal Systems Architect from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Select Service & Intake",
                  desc: "Choose target capability and submit initial technical constraints via our direct intake interface.",
                },
                {
                  step: "02",
                  title: "Architectural Review",
                  desc: "A Principal Systems Architect inspects requirements, repository dependencies, and scale constraints within 24 hours.",
                },
                {
                  step: "03",
                  title: "Scope & Fixed Covenant",
                  desc: "We deliver an architectural scope document with explicit milestones, deliverables, and guaranteed timeline.",
                },
                {
                  step: "04",
                  title: "Engineering Pod Kickoff",
                  desc: "Contracts executed, private repository initialized, and senior engineers begin sprint delivery immediately.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-[#141414] border border-[#333333] radius-container p-8 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[11px] text-[#808080] block mb-4">
                      [{item.step}]
                    </span>
                    <h3 className="type-subheading font-medium text-[#ffffff] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#808080] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#333333] text-[9px] font-mono text-[#808080] uppercase tracking-wider">
                    STAGE {item.step} {"//"} PROTOCOL
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================
            PRICE TRANSPARENCY: WHY DOES FINAL PRICE VARY?
           ======================================================== */}
        <section className="py-20 md:py-28 bg-[#ffffff] text-[#000000] border-b border-[#e6e6e6]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            
            <div className="max-w-2xl mb-16">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-4">
                [ HONEST COMMERCIAL ARCHITECTURE ]
              </div>
              <h2 className="type-heading font-medium text-[#000000] mb-4">
                Why does final project pricing vary?
                <span className="block italic text-[#808080] font-normal">Costs scale with architectural complexity.</span>
              </h2>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                The indicative base price covers a complete, production-grade standard implementation. In software engineering, costs scale strictly with system constraints, concurrency budgets, and legacy dependencies—never arbitrary agency markups.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-[#ffffff] p-8 md:p-10 radius-container border border-[#e6e6e6]">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#808080] mb-4">
                  [ COVERED IN BASE PRICING ]
                </div>
                <h3 className="type-subheading font-medium text-[#000000] mb-6">
                  Standard Baseline Deliverables
                </h3>
                <ul className="space-y-4 text-[13px] text-[#464554]">
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-[#808080] text-[11px]">—</span>
                    <span>Clean modern frontend or mobile systems with responsive, accessible layout engineering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-[#808080] text-[11px]">—</span>
                    <span>Normalized database schemas and relational models with automated migrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-[#808080] text-[11px]">—</span>
                    <span>Secure token authentication and role-based access control (RBAC)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-[#808080] text-[11px]">—</span>
                    <span>Automated CI/CD deployment pipelines to modern containerized or serverless cloud hosting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f2f2f2] p-8 md:p-10 radius-container border border-[#e6e6e6]">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#808080] mb-4">
                  [ COMPLEXITY MULTIPLIERS ]
                </div>
                <h3 className="type-subheading font-medium text-[#000000] mb-6">
                  Architectural Cost Drivers
                </h3>
                <ul className="space-y-4 text-[13px] text-[#464554]">
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-[#808080] text-[11px]">—</span>
                    <span><strong>High-throughput concurrency:</strong> Distributed Kafka clusters and Redis partitioning for &gt; 10,000 req/s.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-[#808080] text-[11px]">—</span>
                    <span><strong>Legacy data cutover:</strong> Zero-downtime dual-write pipelines (Debezium CDC) from legacy databases.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-[#808080] text-[11px]">—</span>
                    <span><strong>Regulatory compliance:</strong> Field-level encryption, mTLS proxies, and formal SOC2 / HIPAA audit logging.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-[#808080] text-[11px]">—</span>
                    <span><strong>Complex third-party APIs:</strong> Legacy banking protocols, custom ERP connectors, or asynchronous webhook sinks.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================
            GENERAL INQUIRY SECONDARY PATHWAY
           ======================================================== */}
        <section className="py-16 md:py-24 bg-[#ffffff] border-b border-[#e6e6e6]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="p-8 sm:p-12 radius-container bg-[#1f1f1f] text-[#ffffff] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#808080] mb-2">
                  [ CUSTOM ENGAGEMENT ]
                </div>
                <h3 className="type-heading font-medium text-[#ffffff] mb-3">
                  Not sure which service matches your system?
                </h3>
                <p className="text-[14px] text-[#808080] max-w-xl leading-relaxed">
                  Outline what you are building. A Principal Systems Architect will review your specifications and propose a pragmatic plan with zero sales pressure.
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleOpenBooking("custom")}
                className="h-12 px-8 radius-button bg-[#ffffff] hover:bg-[#e6e6e6] text-[#000000] text-[11px] font-mono uppercase tracking-widest font-medium transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
              >
                <span>Describe Your Project</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* 1-Click Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedServiceId={selectedServiceId}
      />
    </div>
  );
}
