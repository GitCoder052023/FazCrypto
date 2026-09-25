import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-[#ffffff] border-t border-[#333333] pt-20 pb-16 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#333333]">
          
          {/* Brand & Purpose (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <span className="font-medium tracking-tight text-xl font-display text-[#ffffff]">
                VECTIS
              </span>
              <span className="text-[#808080]">/</span>
              <span className="text-[#808080] text-[10px] font-mono uppercase tracking-widest">
                SYSTEMS ARCHITECTURE MONOGRAPH
              </span>
            </div>

            <p className="text-[14px] text-[#808080] max-w-sm leading-relaxed">
              We architect, decouple, and scale mission-critical backend systems and enterprise digital infrastructure. Code is a long-term operational asset that must outlive the contract.
            </p>

            <div className="pt-2 font-mono text-[11px] text-[#808080] space-y-1.5">
              <div>PRINCIPAL LABS: San Francisco, CA &amp; Zurich, Switzerland</div>
              <div>DIRECT CONTACT: <a href="mailto:engineering@vectis-systems.io" className="text-[#ffffff] hover:underline">engineering@vectis-systems.io</a></div>
              <div>COMMERCIAL PIPELINE: <Link href="/demo/bookings" className="text-[#ffffff] hover:underline">View Inbound Lead Ledger →</Link></div>
            </div>
          </div>

          {/* Architecture Links (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-mono text-[10px] text-[#ffffff] uppercase tracking-wider block">
              Commercial
            </span>
            <ul className="space-y-2 text-[12px] text-[#808080] font-mono">
              <li><Link href="/services" className="hover:text-[#ffffff] transition-colors text-[#ffffff]">Service Catalog</Link></li>
              <li><Link href="/services/business-website" className="hover:text-[#ffffff] transition-colors">Business Website</Link></li>
              <li><Link href="/services/custom-web-application" className="hover:text-[#ffffff] transition-colors">Custom Web App</Link></li>
              <li><Link href="/services/mobile-app-development" className="hover:text-[#ffffff] transition-colors">Mobile App</Link></li>
              <li><Link href="/services/backend-api-development" className="hover:text-[#ffffff] transition-colors">Backend / API</Link></li>
              <li><Link href="/services/cloud-setup-deployment" className="hover:text-[#ffffff] transition-colors">Cloud &amp; SRE</Link></li>
            </ul>
          </div>

          {/* Operational Links (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-mono text-[10px] text-[#ffffff] uppercase tracking-wider block">
              Studio &amp; Approach
            </span>
            <ul className="space-y-2 text-[12px] text-[#808080] font-mono">
              <li><Link href="/#work" className="hover:text-[#ffffff] transition-colors">Selected Work</Link></li>
              <li><Link href="/#approach" className="hover:text-[#ffffff] transition-colors">Our Standards</Link></li>
              <li><Link href="/#technology" className="hover:text-[#ffffff] transition-colors">Technology Stack</Link></li>
              <li><Link href="/#engagement" className="hover:text-[#ffffff] transition-colors">Engagement Pods</Link></li>
              <li><Link href="/#contact" className="hover:text-[#ffffff] transition-colors">Project Scoping</Link></li>
              <li><Link href="/demo/bookings" className="hover:text-[#ffffff] transition-colors">Inbound Ledger</Link></li>
            </ul>
          </div>

          {/* Real-time Status / Verification (3 cols) */}
          <div className="md:col-span-3 space-y-3 bg-[#141414] p-6 radius-container border border-[#333333] font-mono text-[11px]">
            <div className="flex items-center justify-between pb-3 border-b border-[#333333]">
              <span className="text-[#808080] uppercase tracking-wider text-[9px]">SYSTEM STATE</span>
              <span className="text-[#ffffff] text-[10px] uppercase tracking-widest">
                [ NOMINAL // 99.99% ]
              </span>
            </div>
            <div className="text-[11px] text-[#808080] space-y-1">
              <div>UPTIME VERIFIED: 99.99%</div>
              <div>PRODUCTION AUDIT: PASS</div>
              <div>CAPACITY: ACCEPTING Q3/Q4</div>
            </div>
            <div className="pt-3 border-t border-[#333333] text-[9px] text-[#808080] uppercase tracking-wider">
              MONOGRAPH SPECIFICATION // 2026.4
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#808080]">
          <div>
            &copy; {new Date().getFullYear()} VECTIS SYSTEMS ENGINEERING CORP. MONOCHROME ARCHITECTURAL SYSTEM.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#ffffff] transition-colors">SECURITY POLICY</a>
            <a href="#" className="hover:text-[#ffffff] transition-colors">PRIVACY &amp; DATA</a>
            <a href="#" className="hover:text-[#ffffff] transition-colors">SLA COVENANT</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

