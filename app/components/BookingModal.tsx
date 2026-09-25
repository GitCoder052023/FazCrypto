"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { X, Loader2 } from "lucide-react";
import {
  DEMO_SERVICES,
  formatINR,
  formatPriceDisplay,
  saveDemoBookingRequest,
  BookingRequest,
  Service,
} from "@/lib/services-data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  initialAddonIds?: string[];
}

type Step = 1 | 2 | 3;

export default function BookingModal({
  isOpen,
  onClose,
  preselectedServiceId,
  initialAddonIds = [],
}: BookingModalProps) {
  // Derived state to avoid calling setState inside useEffect
  const [userSelectedServiceId, setUserSelectedServiceId] = useState<string | null>(null);
  const selectedServiceId = userSelectedServiceId ?? (preselectedServiceId || "custom-web-application");

  const [userSelectedAddonIds, setUserSelectedAddonIds] = useState<string[] | null>(null);
  const selectedAddonIds = userSelectedAddonIds ?? initialAddonIds;

  const [currentStep, setCurrentStep] = useState<Step>(1);

  // Form Fields
  const [description, setDescription] = useState("");
  const [projectSize, setProjectSize] = useState<"small" | "medium" | "large" | "not_sure">("medium");
  const [timeline, setTimeline] = useState("1–3 months");

  // Contact Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");

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

  // Prevent background scroll
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

  const currentService: Service | undefined = useMemo(() => {
    return DEMO_SERVICES.find((s) => s.id === selectedServiceId);
  }, [selectedServiceId]);

  // Live estimated total calculation
  const estimatedTotal = useMemo(() => {
    if (!currentService || !currentService.price) return 0;
    const base = currentService.price;
    const addonsTotal = (currentService.optionalAddons || [])
      .filter((a) => selectedAddonIds.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);
    return base + addonsTotal;
  }, [currentService, selectedAddonIds]);

  const toggleAddon = (addonId: string) => {
    if (selectedAddonIds.includes(addonId)) {
      setUserSelectedAddonIds(selectedAddonIds.filter((id) => id !== addonId));
    } else {
      setUserSelectedAddonIds([...selectedAddonIds, addonId]);
    }
  };

  const validateStep = (stepToValidate: Step): boolean => {
    const errs: { [key: string]: string } = {};

    if (stepToValidate === 2) {
      if (!description.trim()) {
        errs.description = "Provide a brief description of what you need built or solved.";
      }
    }

    if (stepToValidate === 3) {
      if (!name.trim()) errs.name = "Enter your full name.";
      if (!email.trim()) {
        errs.email = "Enter your corporate email.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        errs.email = "Enter a valid email address.";
      }
      if (!company.trim()) errs.company = "Enter your company or organization name.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (validateStep(2)) {
        setCurrentStep(3);
      }
    } else if (currentStep === 3) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    const selectedAddonNames = (currentService?.optionalAddons || [])
      .filter((a) => selectedAddonIds.includes(a.id))
      .map((a) => a.name);

    const calculatedBudgetString = estimatedTotal > 0 ? formatINR(estimatedTotal) : "Custom Scope Quote";

    setTimeout(() => {
      const created = saveDemoBookingRequest({
        serviceId: selectedServiceId,
        serviceName: currentService?.name || "Custom Architectural Project",
        pricingType: currentService?.priceType || "starting_at",
        basePrice: currentService?.price,
        selectedAddonIds,
        selectedAddonNames,
        estimatedTotal: estimatedTotal > 0 ? estimatedTotal : undefined,
        client: {
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          phone: phone.trim() || undefined,
        },
        project: {
          description: description.trim(),
          timeline,
          budget: calculatedBudgetString,
          size: projectSize,
        },
      });

      setIsSubmitting(false);
      setSubmittedBooking(created);
    }, 400);
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setCurrentStep(1);
    setUserSelectedServiceId(null);
    setUserSelectedAddonIds(null);
    setDescription("");
    setName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-2xl bg-[#ffffff] text-[#000000] border border-[#e6e6e6] radius-container overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header */}
        <div className="px-8 py-5 border-b border-[#e6e6e6] flex items-center justify-between bg-[#ffffff]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-[#808080] font-medium tracking-[0.2em] uppercase">
              {submittedBooking ? "[ INTAKE RECORDED ]" : `[ INTAKE // STEP 0${currentStep} OF 03 ]`}
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
            /* Confirmation Experience (Section 13) */
            <div className="space-y-8 animate-in fade-in duration-200">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#808080] mb-2">
                  CONFIRMATION &amp; NEXT STEPS
                </div>
                <h3 className="type-heading font-medium text-[#000000]">
                  Project Request Recorded.
                  <span className="block italic text-[#808080] font-normal">Architectural review in progress.</span>
                </h3>
                <p className="text-[12px] font-mono text-[#808080] mt-2">
                  REQUEST ID: <span className="text-[#000000] font-medium">#{submittedBooking.id}</span> • RECORDED IN CLIENT PIPELINE
                </p>
              </div>

              {/* Structured Request Summary */}
              <div className="p-6 bg-[#f2f2f2] border border-[#e6e6e6] radius-container space-y-3 font-mono text-[12px]">
                <div className="flex justify-between pb-2 border-b border-[#e6e6e6]">
                  <span className="text-[#808080]">Target Service:</span>
                  <span className="text-[#000000] font-medium">{submittedBooking.serviceName}</span>
                </div>
                {submittedBooking.selectedAddonNames && submittedBooking.selectedAddonNames.length > 0 && (
                  <div className="flex justify-between pb-2 border-b border-[#e6e6e6]">
                    <span className="text-[#808080]">Selected Add-ons:</span>
                    <span className="text-[#000000] text-right">
                      {submittedBooking.selectedAddonNames.join(", ")}
                    </span>
                  </div>
                )}
                <div className="flex justify-between pb-2 border-b border-[#e6e6e6]">
                  <span className="text-[#808080]">Estimated Investment:</span>
                  <span className="text-[#000000] font-medium">
                    {submittedBooking.estimatedTotal ? formatINR(submittedBooking.estimatedTotal) : submittedBooking.project.budget}
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#e6e6e6]">
                  <span className="text-[#808080]">Target Horizon:</span>
                  <span className="text-[#333333]">{submittedBooking.project.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#808080]">Client Contact:</span>
                  <span className="text-[#000000]">{submittedBooking.client.name} ({submittedBooking.client.company})</span>
                </div>
              </div>

              {/* What Happens Next (Section 13) */}
              <div className="p-6 bg-[#ffffff] border border-[#e6e6e6] radius-container space-y-3 text-[13px] text-[#666666] leading-relaxed">
                <div className="text-[#000000] font-mono text-[10px] uppercase tracking-wider">
                  [ WHAT HAPPENS NEXT ]
                </div>
                <p>
                  1. A Principal Systems Architect reviews your technical brief, constraint parameters, and system scale within <strong>24 business hours</strong>.
                </p>
                <p>
                  2. We will dispatch a formal Technical Scope Document and invitation for an engineering discovery review directly to <strong>{submittedBooking.client.email}</strong>.
                </p>
                <p className="text-[11px] font-mono text-[#808080] pt-2 border-t border-[#e6e6e6]">
                  * Production standard: Mutual NDAs are executed prior to inspecting private codebases or system access credentials.
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
                  <span>Inspect Pipeline Ledger</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ) : (
            /* Progressive Booking Flow (Section 10) */
            <form onSubmit={handleNextStep} className="space-y-8">
              
              {/* Progress Breadcrumbs */}
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#808080] pb-2 border-b border-[#e6e6e6]">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className={`hover:text-[#000000] cursor-pointer ${currentStep === 1 ? "text-[#000000] font-medium" : ""}`}
                >
                  01. Service &amp; Scope
                </button>
                <span>/</span>
                <button
                  type="button"
                  onClick={() => currentStep > 2 && setCurrentStep(2)}
                  className={`hover:text-[#000000] ${currentStep === 2 ? "text-[#000000] font-medium" : ""} ${currentStep < 2 ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                >
                  02. Requirements
                </button>
                <span>/</span>
                <span className={`${currentStep === 3 ? "text-[#000000] font-medium" : "opacity-50"}`}>
                  03. Contact &amp; Review
                </span>
              </div>

              {/* STEP 1: SERVICE & ADD-ONS */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  <div>
                    <h3 className="type-subheading font-medium text-[#000000] mb-1">
                      Select Target Service &amp; Add-ons
                    </h3>
                    <p className="text-[13px] text-[#666666]">
                      Review the baseline scope and select any optional technical modules you need included.
                    </p>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-[#808080] mb-2">
                      Service Package
                    </label>
                    <select
                      value={selectedServiceId}
                      onChange={(e) => {
                        setUserSelectedServiceId(e.target.value);
                        setUserSelectedAddonIds([]); // Reset addons on service change
                      }}
                      className="w-full h-12 px-4 bg-[#ffffff] border border-[#e6e6e6] radius-container text-[#000000] font-mono text-[12px] focus:outline-none focus:border-[#000000]"
                    >
                      {DEMO_SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.pricing.label})
                        </option>
                      ))}
                      <option value="custom">Outside Standard Packages / Custom Architecture</option>
                    </select>
                  </div>

                  {/* Selected Service Inclusions Pill */}
                  {currentService && (
                    <div className="p-5 bg-[#f2f2f2] border border-[#e6e6e6] radius-container space-y-3">
                      <div className="flex items-center justify-between font-mono text-[11px]">
                        <span className="text-[#808080] uppercase tracking-wider text-[9px]">
                          BASE INCLUSIONS
                        </span>
                        <span className="text-[#000000] font-medium">
                          {formatPriceDisplay(currentService.pricing)}
                        </span>
                      </div>
                      <p className="text-[12px] text-[#666666] leading-relaxed">
                        {currentService.shortDescription}
                      </p>
                      <div className="pt-2 border-t border-[#e6e6e6] flex flex-wrap gap-2 text-[10px] font-mono text-[#808080]">
                        <span>Delivery Horizon: {currentService.duration}</span>
                        <span>•</span>
                        <span>100% Repository Ownership</span>
                      </div>
                    </div>
                  )}

                  {/* Optional Add-ons Section (Section 17 & 18) */}
                  {currentService && currentService.optionalAddons && currentService.optionalAddons.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[#808080]">
                        <span>OPTIONAL TECHNICAL ADD-ONS</span>
                        <span>BASE + ADD-ONS</span>
                      </div>

                      <div className="space-y-2">
                        {currentService.optionalAddons.map((addon) => {
                          const isSelected = selectedAddonIds.includes(addon.id);
                          return (
                            <button
                              key={addon.id}
                              type="button"
                              onClick={() => toggleAddon(addon.id)}
                              className={`w-full text-left p-4 radius-container border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                                isSelected
                                  ? "bg-[#000000] text-[#ffffff] border-[#000000]"
                                  : "bg-[#ffffff] text-[#000000] border-[#e6e6e6] hover:border-[#cccccc]"
                              }`}
                            >
                              <div className="space-y-1">
                                <div className="font-mono text-[12px] font-medium flex items-center gap-2">
                                  <span>{isSelected ? "[✓]" : "[+]"}</span>
                                  <span>{addon.name}</span>
                                </div>
                                <div className={`text-[11px] leading-relaxed ${isSelected ? "text-[#cccccc]" : "text-[#666666]"}`}>
                                  {addon.description}
                                </div>
                              </div>
                              <div className="font-mono text-[12px] font-medium shrink-0">
                                +{formatINR(addon.price)}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Live Transparent Price Tally (Section 18) */}
                  {currentService && currentService.price && (
                    <div className="p-4 bg-[#ffffff] border border-[#e6e6e6] radius-container font-mono text-[11px] space-y-1.5">
                      <div className="flex justify-between text-[#808080]">
                        <span>Base Package:</span>
                        <span>{formatINR(currentService.price)}</span>
                      </div>
                      {selectedAddonIds.length > 0 && (
                        <div className="flex justify-between text-[#808080]">
                          <span>Selected Add-ons ({selectedAddonIds.length}):</span>
                          <span>+{formatINR(estimatedTotal - currentService.price)}</span>
                        </div>
                      )}
                      <div className="pt-2 border-t border-[#e6e6e6] flex justify-between text-[#000000] font-medium text-[12px]">
                        <span>Estimated Total:</span>
                        <span>{formatINR(estimatedTotal)}</span>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full h-12 radius-button bg-[#000000] hover:bg-[#1f1f1f] text-[#ffffff] font-mono text-[11px] uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Project Requirements</span>
                    <span>→</span>
                  </button>
                </div>
              )}

              {/* STEP 2: PROJECT REQUIREMENTS & SCOPE (Section 10) */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  <div>
                    <h3 className="type-subheading font-medium text-[#000000] mb-1">
                      Project Intent &amp; Scale
                    </h3>
                    <p className="text-[13px] text-[#666666]">
                      Help us understand what you need built so our architects can assess technical constraints.
                    </p>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-[#808080] mb-2">
                      What do you need built or solved? *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Outline current system context, primary bottlenecks, or core user workflows..."
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                        if (errors.description) setErrors({ ...errors, description: "" });
                      }}
                      className={`w-full p-4 bg-[#ffffff] border radius-container text-[#000000] font-mono text-[12px] focus:outline-none resize-none ${
                        errors.description ? "border-[#000000]" : "border-[#e6e6e6] focus:border-[#000000]"
                      }`}
                    />
                    {errors.description && (
                      <span className="font-mono text-[10px] text-[#000000] mt-1 block">
                        {errors.description}
                      </span>
                    )}
                  </div>

                  {/* Approximate Project Size (Section 10) */}
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-[#808080] mb-2">
                      Approximate Project Scale
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: "small" as const, label: "Small (MVP / Feature)" },
                        { id: "medium" as const, label: "Medium (Core System)" },
                        { id: "large" as const, label: "Large (Multi-Service)" },
                        { id: "not_sure" as const, label: "Not Sure Yet" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setProjectSize(item.id)}
                          className={`p-3 radius-container border text-left font-mono text-[11px] transition-all cursor-pointer ${
                            projectSize === item.id
                              ? "bg-[#000000] text-[#ffffff] border-[#000000]"
                              : "bg-[#ffffff] text-[#666666] border-[#e6e6e6] hover:border-[#000000]"
                          }`}
                        >
                          <span className="block text-[9px] text-[#808080] mb-1">
                            {projectSize === item.id ? "[●]" : "[○]"}
                          </span>
                          <span className="font-medium">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Target Timeline */}
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-[#808080] mb-2">
                      Target Start / Delivery Horizon
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["Immediate (ASAP)", "This month", "1–3 months", "Flexible"].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTimeline(t)}
                          className={`p-3 radius-button border text-center font-mono text-[11px] transition-all cursor-pointer ${
                            timeline === t
                              ? "bg-[#000000] text-[#ffffff] border-[#000000]"
                              : "bg-[#ffffff] text-[#666666] border-[#e6e6e6] hover:border-[#000000]"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="w-1/3 h-12 radius-button border border-[#e6e6e6] bg-[#ffffff] hover:bg-[#f2f2f2] text-[#000000] font-mono text-[11px] uppercase tracking-widest transition-colors cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 h-12 radius-button bg-[#000000] hover:bg-[#1f1f1f] text-[#ffffff] font-mono text-[11px] uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Proceed to Contact &amp; Review</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT & REVIEW (Section 10 & 14) */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  <div>
                    <h3 className="type-subheading font-medium text-[#000000] mb-1">
                      Client Contact &amp; Dispatch
                    </h3>
                    <p className="text-[13px] text-[#666666]">
                      We route this directly to an engineering lead. No unsolicited sales calls.
                    </p>
                  </div>

                  {/* Client Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[9px] uppercase tracking-wider text-[#808080] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Sharma"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        className={`w-full h-11 px-4 bg-[#ffffff] border radius-container text-[#000000] font-mono text-[12px] focus:outline-none ${
                          errors.name ? "border-[#000000]" : "border-[#e6e6e6] focus:border-[#000000]"
                        }`}
                      />
                      {errors.name && (
                        <span className="font-mono text-[10px] text-[#000000] mt-1 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block font-mono text-[9px] uppercase tracking-wider text-[#808080] mb-2">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="anand@company.in"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className={`w-full h-11 px-4 bg-[#ffffff] border radius-container text-[#000000] font-mono text-[12px] focus:outline-none ${
                          errors.email ? "border-[#000000]" : "border-[#e6e6e6] focus:border-[#000000]"
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
                      <label className="block font-mono text-[9px] uppercase tracking-wider text-[#808080] mb-2">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kestrel Systems"
                        value={company}
                        onChange={(e) => {
                          setCompany(e.target.value);
                          if (errors.company) setErrors({ ...errors, company: "" });
                        }}
                        className={`w-full h-11 px-4 bg-[#ffffff] border radius-container text-[#000000] font-mono text-[12px] focus:outline-none ${
                          errors.company ? "border-[#000000]" : "border-[#e6e6e6] focus:border-[#000000]"
                        }`}
                      />
                      {errors.company && (
                        <span className="font-mono text-[10px] text-[#000000] mt-1 block">
                          {errors.company}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block font-mono text-[9px] uppercase tracking-wider text-[#808080] mb-2">
                        Phone / WhatsApp (Optional)
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

                  {/* Summary Review Plate */}
                  <div className="p-5 bg-[#f2f2f2] border border-[#e6e6e6] radius-container font-mono text-[11px] space-y-2">
                    <div className="flex justify-between pb-1.5 border-b border-[#e6e6e6]">
                      <span className="text-[#808080]">Selected Service:</span>
                      <span className="text-[#000000] font-medium">{currentService?.name || "Custom Scope"}</span>
                    </div>
                    <div className="flex justify-between pb-1.5 border-b border-[#e6e6e6]">
                      <span className="text-[#808080]">Estimated Investment:</span>
                      <span className="text-[#000000] font-medium">
                        {estimatedTotal > 0 ? formatINR(estimatedTotal) : "Custom Quote"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#808080]">Target Horizon &amp; Scale:</span>
                      <span className="text-[#333333]">{timeline} • {projectSize.toUpperCase()}</span>
                    </div>
                  </div>

                  {/* Submission Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="w-1/3 h-12 radius-button border border-[#e6e6e6] bg-[#ffffff] hover:bg-[#f2f2f2] text-[#000000] font-mono text-[11px] uppercase tracking-widest transition-colors cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-2/3 h-12 radius-button bg-[#000000] hover:bg-[#1f1f1f] text-[#ffffff] font-mono text-[11px] uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Request</span>
                          <span>→</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
