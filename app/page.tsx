import AgencyNav from "./components/AgencyNav";
import HeroSection from "./components/HeroSection";
import ServicesIndex from "./components/ServicesIndex";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ApproachSection from "./components/ApproachSection";
import TechnologySummary from "./components/TechnologySummary";
import EngagementModel from "./components/EngagementModel";
import ProjectScopeEstimator from "./components/ProjectScopeEstimator";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <AgencyNav />

      {/* Main Commercial Narrative Flow */}
      <main className="flex-1">
        {/* 01: Hero - Commercial Proposition & Studio Capabilities */}
        <HeroSection />

        {/* 02: Central Commercial Service Catalog & Indicative Pricing */}
        <ServicesIndex />

        {/* 03: Selected Production Work & Verifiable Case Studies */}
        <CaseStudiesSection />

        {/* 04: How We Work, Guarantees & Agency Comparison */}
        <ApproachSection />

        {/* 05: Core Technology Capabilities & Architectural Rationale */}
        <TechnologySummary />

        {/* 06: Transparent Engagement Models & Retainer Pods */}
        <EngagementModel />

        {/* 07: Structured Project Scoping & Direct Inbound Intake */}
        <ProjectScopeEstimator />
      </main>

      {/* 08: Global Footer */}
      <Footer />
    </div>
  );
}
