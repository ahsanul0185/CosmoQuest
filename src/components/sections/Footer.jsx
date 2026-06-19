const navLinks = [
  { label: 'Planets', href: '/#planets' },
  { label: 'Astronauts', href: '/#astronauts' },
  { label: 'Missions', href: '/#missions' },
  { label: 'Galaxies', href: '/#galaxies' },
  { label: 'Facts', href: '/#facts' },
]

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-outline">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* Main footer row */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <p className="font-headline font-bold text-xl tracking-tighter uppercase text-on-surface mb-3">
              Cosmo<span className="text-primary">Quest</span>
            </p>
            <p className="text-xs text-on-surface-variant font-light leading-relaxed max-w-[220px]">
              Exploring the cosmos, one discovery at a time. From planets to deep space — the universe awaits.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] font-mono text-primary uppercase tracking-[0.25em] mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission status */}
          <div>
            <p className="text-[9px] font-mono text-primary uppercase tracking-[0.25em] mb-5">
              System Status
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Data Feed', status: 'Online' },
                { label: 'Telemetry', status: 'Active' },
                { label: 'Deep Space Link', status: 'Nominal' },
              ].map((item) => (
                <li key={item.label} className="flex items-center justify-between max-w-[200px]">
                  <span className="text-xs text-on-surface-variant">{item.label}</span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-outline py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-on-surface-variant opacity-50">
            © {currentYear} CosmoQuest. All rights reserved.
          </p>
          <p className="text-[10px] font-mono text-on-surface-variant opacity-30 uppercase tracking-widest">
            Coordinates: 00°00′00″N 00°00′00″E // Deep Space
          </p>
        </div>

      </div>
    </footer>
  )
}
