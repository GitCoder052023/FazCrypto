import AgencyNav from "./components/AgencyNav";
import HeroSection from "./components/HeroSection";
import ServiceCatalog from "./components/ServiceCatalog";
import CustomProjectSection from "./components/CustomProjectSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff]">
      {/* Navigation */}
      <AgencyNav />

      {/* Core Storefront Areas */}
      <main className="flex-1">
        {/* Hero / Service Positioning */}
        <HeroSection />

        {/* Services Catalog & Selected Service Inspector */}
        <ServiceCatalog />

        {/* Custom Project Inquiry */}
        <CustomProjectSection />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
