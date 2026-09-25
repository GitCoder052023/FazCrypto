import AgencyNav from "./components/AgencyNav";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import ServicesIndex from "./components/ServicesIndex";
import WorkflowSection from "./components/WorkflowSection";
import TechTaxonomy from "./components/TechTaxonomy";
import CaseStudiesSection from "./components/CaseStudiesSection";
import PrinciplesSection from "./components/PrinciplesSection";
import EngagementModel from "./components/EngagementModel";
import ProjectScopeEstimator from "./components/ProjectScopeEstimator";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <AgencyNav />

      {/* Main Narrative Flow */}
      <main className="flex-1">
        {/* 01: Dark Hero Surface with Architectural Proposition & Interactive Topology */}
        <HeroSection />

        {/* 02: Editorial Split on Client Reality vs Architectural Intervention */}
        <ProblemSection />

        {/* 03: Numbered Editorial Service Architecture (Not 6 identical cards!) */}
        <ServicesIndex />

        {/* 04: Directed Engineering Workflow & Automated Verification Gates */}
        <WorkflowSection />

        {/* 05: Engineering Taxonomy & Concrete Tradeoff Rationale */}
        <TechTaxonomy />

        {/* 06: Selected Systems Case Studies with Varied Compositions */}
        <CaseStudiesSection />

        {/* 07: Engineering Commitments & Anti-Patterns We Reject */}
        <PrinciplesSection />

        {/* 08: Transparent Engagement Pods & Milestone Structures */}
        <EngagementModel />

        {/* 09: Interactive Scoping Terminal & Direct Consultation Action */}
        <ProjectScopeEstimator />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
