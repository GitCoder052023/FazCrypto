"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Loader2 } from "lucide-react";
import { DEMO_SERVICES, formatPriceDisplay, saveDemoBookingRequest, BookingRequest } from "@/lib/services-data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedServiceId,
}: BookingModalProps) {
  const [userSelectedServiceId, setUserSelectedServiceId] = useState<string | null>(null);
  const selectedServiceId = userSelectedServiceId ?? (preselectedServiceId || "custom-web-application");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("₹50k – ₹1L");
  const [timeline, setTimeline] = useState("1–3 months");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<BookingRequest | null>(null);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentService = DEMO_SERVICES.find((s) => s.id === selectedServiceId);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = "Enter your full name.";
    if (!email.trim()) {
      errs.email = "Enter your corporate email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "Enter a valid email address.";
    }
    if (!company.trim()) errs.company = "Enter your company or organization.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Realistic simulated latency
    setTimeout(() => {
      const created = saveDemoBookingRequest({
        serviceId: selectedServiceId,
        serviceName: currentService?.name || "General Technical Scope",
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        phone: phone.trim() || undefined,
        projectDescription: description.trim() || undefined,
        budget,
        timeline,
      });

      setIsSubmitting(false);
      setSubmittedBooking(created);
    }, 450);
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setUserSelectedServiceId(null);
    setName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setDescription("");
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-2xl bg-[#ffffff] text-[#000000] border border-[#e6e6e6] radius-container overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="px-8 py-5 border-b border-[#e6e6e6] flex items-center justify-between bg-[#ffffff]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-[#808080] font-medium tracking-[0.2em] uppercase">
              {submittedBooking ? "[ INTAKE RECORDED ]" : "[ 09 // INITIATE SERVICE ENGAGEMENT ]"}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#808080] hover:text-[#000000] transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-8 sm:p-10 overflow-y-auto flex-1">
          {submittedBooking ? (
            /* Confirmation Experience */
            <div className="space-y-8 animate-in fade-in duration-200">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#808080] mb-2">
                  DISPATCH CONFIRMATION
                </div>
                <h3 className="type-heading font-medium text-[#000000]">
                  Project Request Recorded.
                  <span className="block italic text-[#808080] font-normal">Technical review in queue.</span>
                </h3>
                <p className="text-[12px] font-mono text-[#808080] mt-2">
                  DISPATCH REF: {submittedBooking.id} • SIMULATION INTAKE VERIFIED
                </p>
              </div>

              <div className="p-6 bg-[#f2f2f2] border border-[#e6e6e6] radius-container space-y-3 font-mono text-[12px]">
                <div className="flex justify-between pb-3 border-b border-[#e6e6e6]">
                  <span className="text-[#808080]">Selected Service:</span>
                  <span className="text-[#000000] font-medium">{submittedBooking.serviceName}</span>
                </div>
                {currentService && (
                  <div className="flex justify-between pb-3 border-b border-[#e6e6e6]">
                    <span className="text-[#808080]">Indicative Pricing:</span>
                    <span className="text-[#000000] font-medium">{currentService.pricing.label}</span>
                  </div>
                )}
                <div className="flex justify-between pb-3 border-b border-[#e6e6e6]">
                  <span className="text-[#808080]">Target Horizon:</span>
                  <span className="text-[#666666]">{submittedBooking.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#808080]">Client Representative:</span>
                  <span className="text-[#000000]">{submittedBooking.name} ({submittedBooking.company})</span>
                </div>
              </div>

              <div className="p-6 bg-[#ffffff] border border-[#e6e6e6] radius-container space-y-2 text-[13px] text-[#666666] leading-relaxed">
                <div className="text-[#000000] font-mono text-[11px] uppercase tracking-wider">
                  [ NEXT COMMERCIAL PROTOCOL ]
                </div>
                <p>
                  In a production setting, this intake enters the engineering review ledger and alerts a Principal Systems Architect. A technical scope review and calendar invitation is dispatched to <strong>{submittedBooking.email}</strong> within 24 business hours.
                </p>
                <p className="text-[11px] font-mono text-[#808080] pt-2">
                  * Live demo environment: The intake record has been committed directly to the browser demo pipeline storage.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-1/2 h-12 radius-button border border-[#e6e6e6] bg-[#ffffff] hover:bg-[#f2f2f2] text-[#000000] text-[11px] font-mono uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Return to Catalog
                </button>
                <Link
                  href="/demo/bookings"
                  className="w-full sm:w-1/2 h-12 radius-button bg-[#000000] hover:bg-[#1f1f1f] text-[#ffffff] text-[11px] font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>View Demo Pipeline</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Service Context Header Banner */}
              <div className="p-6 bg-[#f2f2f2] border border-[#e6e6e6] radius-container flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[9px] text-[#808080] uppercase tracking-widest block mb-1">
                    TARGET SERVICE SELECTED
                  </span>
                  <div className="type-subheading font-medium text-[#000000]">
                    {currentService?.name || "General Engineering Inquiry"}
                  </div>
                  <div className="text-[12px] text-[#666666] font-mono mt-1">
                    {currentService ? formatPriceDisplay(currentService.pricing) : "Custom Scope"} • Typical Horizon: {currentService?.duration || "Flexible"}
                  </div>
                </div>

                <div className="shrink-0 font-mono text-[9px] uppercase tracking-widest text-[#808080]">
                  [ DEMO CATALOG ]
                </div>
              </div>

              {/* Service Picker */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#808080] mb-2">
                  Confirm / Switch Service
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setUserSelectedServiceId(e.target.value)}
                  className="w-full h-11 px-4 bg-[#ffffff] border border-[#e6e6e6] radius-container text-[#000000] font-mono text-[12px] focus:outline-none focus:border-[#000000]"
                >
                  {DEMO_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.pricing.label})
                    </option>
                  ))}
                  <option value="custom">Not sure yet / General Architecture Consultation</option>
                </select>
              </div>

              {/* Client Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#808080] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anand Sharma"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className={`w-full h-11 px-4 bg-[#ffffff] border radius-container text-[#000000] font-mono text-[12px] focus:outline-none ${
                      errors.name
                        ? "border-[#000000]"
                        : "border-[#e6e6e6] focus:border-[#000000]"
                    }`}
                  />
                  {errors.name && (
                    <span className="font-mono text-[10px] text-[#000000] mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#808080] mb-2">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    placeholder="anand@company.in"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={`w-full h-11 px-4 bg-[#ffffff] border radius-container text-[#000000] font-mono text-[12px] focus:outline-none ${
                      errors.email
                        ? "border-[#000000]"
                        : "border-[#e6e6e6] focus:border-[#000000]"
                    }`}
                  />
                  {errors.email && (
                    <span className="font-mono text-[10px] text-[#000000] mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#808080] mb-2">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kestrel Systems"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value);
                      if (errors.company) setErrors({ ...errors, company: "" });
                    }}
                    className={`w-full h-11 px-4 bg-[#ffffff] border radius-container text-[#000000] font-mono text-[12px] focus:outline-none ${
                      errors.company
                        ? "border-[#000000]"
                        : "border-[#e6e6e6] focus:border-[#000000]"
                    }`}
                  />
                  {errors.company && (
                    <span className="font-mono text-[10px] text-[#000000] mt-1 block">
                      {errors.company}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#808080] mb-2">
                    Phone Contact (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-11 px-4 bg-[#ffffff] border border-[#e6e6e6] radius-container text-[#000000] font-mono text-[12px] focus:outline-none focus:border-[#000000]"
                  />
                </div>
              </div>

              {/* Budget & Timeline Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#808080] mb-2">
                    Indicative Budget Range
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full h-11 px-4 bg-[#ffffff] border border-[#e6e6e6] radius-container text-[#000000] font-mono text-[12px] focus:outline-none focus:border-[#000000]"
                  >
                    <option value="₹25k – ₹50k">₹25,000 – ₹50,000</option>
                    <option value="₹50k – ₹1L">₹50,000 – ₹1,00,000</option>
                    <option value="₹1L – ₹2.5L">₹1,00,000 – ₹2,50,000</option>
                    <option value="₹2.5L+">₹2,50,000+</option>
                    <option value="Not sure yet">Not sure yet / Scope dependent</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#808080] mb-2">
                    Target Horizon
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full h-11 px-4 bg-[#ffffff] border border-[#e6e6e6] radius-container text-[#000000] font-mono text-[12px] focus:outline-none focus:border-[#000000]"
                  >
                    <option value="As soon as possible">Immediate Sprint</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1–3 months">1–3 months</option>
                    <option value="3–6 months">3–6 months</option>
                    <option value="Just exploring">Indicative discovery</option>
                  </select>
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#808080] mb-2">
                  System Context / Operational Challenge
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline the existing tech stack, database scale, or primary operational challenge..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-4 bg-[#ffffff] border border-[#e6e6e6] radius-container text-[#000000] font-mono text-[12px] focus:outline-none focus:border-[#000000] resize-none"
                />
              </div>

              {/* Disclaimer */}
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#808080] leading-relaxed">
                * Indicative pricing demonstration. Formal engagement covenants are established via architecture review and SLA commitments.
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 radius-button bg-[#000000] hover:bg-[#1f1f1f] text-[#ffffff] font-mono text-[12px] uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Intake...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Service Engagement Intake</span>
                    <span>→</span>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}

