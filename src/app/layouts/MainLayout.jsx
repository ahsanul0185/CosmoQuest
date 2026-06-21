import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { useLenis } from '../../hooks/useLenis'
import { Footer } from '../../components/sections/Footer'
import { HeaderSearch } from '../../components/ui/HeaderSearch'
import { MobileMenu } from '../../components/ui/MobileMenu'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Planets', to: '/#planets' },
  { label: 'Astronauts', to: '/#astronauts' },
  { label: 'Missions', to: '/#missions' },
  { label: 'Galaxies', to: '/#galaxies' },
  { label: 'Facts', to: '/#facts' },
]

export function MainLayout() {
  useLenis()
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (hash) => {
    const element = document.querySelector(hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavClick = (to) => {
    const [path, hash] = to.split('#')
    if (hash) {
      if (location.pathname === '/' || location.pathname === path) {
        scrollToSection(`#${hash}`)
      } else {
        navigate(path || '/')
        setTimeout(() => scrollToSection(`#${hash}`), 300)
      }
    } else {
      navigate(to)
    }
  }

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-outline/50"
      >
        <nav className="max-w-[1200px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <NavLink
            to="/"
            className="font-headline font-bold text-lg tracking-tighter uppercase text-star-white"
          >
            Cosmo<span className="text-primary">Quest</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.to)}
                className="text-sm font-medium transition-colors duration-300 text-on-surface-variant hover:text-on-surface"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <HeaderSearch />
            </div>
            <MobileMenu />
          </div>
        </nav>
      </motion.header>

      <main className="pt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
