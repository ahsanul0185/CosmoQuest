import { NavLink, Outlet } from 'react-router-dom'
import { motion } from 'motion/react'
import { useLenis } from '../../hooks/useLenis'
import { Footer } from '../../components/sections/Footer'
import { HeaderSearch } from '../../components/ui/HeaderSearch'

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
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <HeaderSearch />
        </nav>
      </motion.header>

      <main className="pt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
