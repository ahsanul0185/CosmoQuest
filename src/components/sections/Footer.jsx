import { useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'Planets', href: '/#planets' },
  { label: 'Astronauts', href: '/#astronauts' },
  { label: 'Missions', href: '/#missions' },
  { label: 'Galaxies', href: '/#galaxies' },
  { label: 'Facts', href: '/#facts' },
]

const exploreLinks = [
  { id: 'all', label: 'All Objects' },
  { id: 'planets', label: 'Planets' },
  { id: 'astronauts', label: 'Astronauts' },
  { id: 'missions', label: 'Missions' },
  { id: 'galaxies', label: 'Galaxies' },
  { id: 'facts', label: 'Facts' },
]

const currentYear = new Date().getFullYear()

export function Footer() {
  const navigate = useNavigate()

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
            <p className="text-[10px] font-mono text-primary uppercase tracking-[0.25em] mb-5">
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

          {/* Explore */}
          <div>
            <p className="text-[10px] font-mono text-primary uppercase tracking-[0.25em] mb-5">
              Explore
            </p>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() =>
                      navigate(link.id === 'all' ? '/explore' : `/explore?category=${link.id}`)
                    }
                    className="text-sm text-on-surface-variant hover:text-on-surface transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-outline py-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-base font-headline text-on-surface-variant/60">
            © {currentYear} CosmoQuest. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
