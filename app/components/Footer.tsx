import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] text-[#000000] border-t border-[#e6e6e6] py-16 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#e6e6e6]">
          
          {/* Brand & Purpose (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-xl font-brand text-[#000000]">
                VECTIS
              </span>
              <span className="text-[#808080] font-mono text-[10px] uppercase tracking-widest">
                / DIGITAL SYSTEMS
              </span>
            </div>

            <p className="text-[14px] text-[#666666] max-w-sm leading-relaxed">
              Digital products and systems for businesses. Transparent pricing, clear deliverables, and direct booking.
            </p>
          </div>

          {/* Catalog Links (3 cols) */}
          <div className="md:col-span-3 space-y-2.5 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-wider text-[#808080] block">
              CATALOG
            </span>
            <ul className="space-y-2 text-[#4d4d4d]">
              <li>
                <a href="#services" className="hover:text-[#000000] transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="#custom" className="hover:text-[#000000] transition-colors">
                  Custom Projects
                </a>
              </li>
              <li>
                <Link href="/demo/bookings" className="hover:text-[#000000] transition-colors">
                  Booking Ledger (Demo)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact (3 cols) */}
          <div className="md:col-span-3 space-y-2.5 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-wider text-[#808080] block">
              DIRECT CONTACT
            </span>
            <ul className="space-y-2 text-[#4d4d4d]">
              <li>
                <a href="mailto:engineering@vectis-systems.io" className="hover:text-[#000000] transition-colors">
                  engineering@vectis-systems.io
                </a>
              </li>
              <li>
                <span className="text-[#808080]">Response time: &lt; 24h</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#808080]">
          <div>
            &copy; {new Date().getFullYear()} VECTIS DIGITAL SYSTEMS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>FIXED PRICING</span>
            <span>100% REPOSITORY IP TRANSFER</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
