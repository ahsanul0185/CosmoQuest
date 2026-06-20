import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { useLenis } from '../../hooks/useLenis'
import { Footer } from '../../components/sections/Footer'

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

          <button
            type="button"
            aria-label="Search"
            onClick={() => navigate('/search')}
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </nav>
      </motion.header>

      <main className="pt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
