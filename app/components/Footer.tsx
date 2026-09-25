

export default function Footer() {
  return (
    <footer className="bg-[#19191a] text-white border-t border-[#323234] pt-16 pb-12 font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#323234]">
          
          {/* Brand & Purpose (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#ff470a] rounded-[2px]" />
              <span className="font-bold tracking-tight text-xl font-display text-white">
                VECTIS
              </span>
              <span className="text-[#76757f]">/</span>
              <span className="text-[#bfbec9] text-xs font-mono">
                SYSTEMS & PLATFORM ENGINEERING
              </span>
            </div>

            <p className="text-sm text-[#bfbec9] max-w-sm leading-relaxed">
              We architect, decouple, and scale mission-critical backend systems and enterprise operational platforms. Code is an operational asset that must outlive the demo.
            </p>

            <div className="pt-2 font-mono text-xs text-[#76757f] space-y-1">
              <div>PRINCIPAL LABS: San Francisco, CA & Zurich, Switzerland</div>
              <div>DIRECT CONTACT: <a href="mailto:engineering@vectis-systems.io" className="text-[#bfbec9] hover:text-white transition-colors">engineering@vectis-systems.io</a></div>
              <div>PGP FINGERPRINT: 4F2A 9C81 02D5 B491 887E</div>
            </div>
          </div>

          {/* Architecture Links (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider block">
              Capabilities
            </span>
            <ul className="space-y-2 text-xs text-[#bfbec9]">
              <li><a href="#capabilities" className="hover:text-white transition-colors">Distributed Core</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Legacy Modernization</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Internal Control Planes</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#taxonomy" className="hover:text-white transition-colors">Tech Taxonomy</a></li>
            </ul>
          </div>

          {/* Operational Links (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider block">
              Methodology
            </span>
            <ul className="space-y-2 text-xs text-[#bfbec9]">
              <li><a href="#problem" className="hover:text-white transition-colors">Problem Space</a></li>
              <li><a href="#workflow" className="hover:text-white transition-colors">Execution Pipeline</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">Selected Systems</a></li>
              <li><a href="#engagement" className="hover:text-white transition-colors">Engagement Pods</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Initiate Scope</a></li>
            </ul>
          </div>

          {/* Real-time Status / Verification (3 cols) */}
          <div className="md:col-span-3 space-y-3 bg-[#222224] p-5 rounded-[12px] border border-[#323234] font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#323234]">
              <span className="text-[#bfbec9]">SYSTEM STATUS</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                OPERATIONAL
              </span>
            </div>
            <div className="text-[11px] text-[#76757f] space-y-1">
              <div>UPTIME BAR: 99.99%</div>
              <div>PRODUCTION AUDITS: PASS</div>
              <div>CAPACITY: ACCEPTING Q3/Q4</div>
            </div>
            <div className="pt-2 border-t border-[#323234] text-[10px] text-[#76757f]">
              BUILD VERSION // 2026.4-STATIC
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#76757f]">
          <div>
            &copy; {new Date().getFullYear()} VECTIS SYSTEMS ENGINEERING CORP. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#bfbec9] transition-colors">SECURITY POLICY</a>
            <a href="#" className="hover:text-[#bfbec9] transition-colors">PRIVACY & DATA</a>
            <a href="#" className="hover:text-[#bfbec9] transition-colors">SLA COMMITMENT</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
