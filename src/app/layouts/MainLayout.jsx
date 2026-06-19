import { NavLink, Outlet } from 'react-router-dom'
import { motion } from 'motion/react'

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b"
        style={{ borderColor: 'var(--border)' }}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <NavLink to="/" className="text-xl font-semibold" style={{ color: 'var(--text-h)' }}>
            CosmoQuest
          </NavLink>
          <ul className="flex gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-colors ${isActive ? 'font-medium' : ''}`
                }
                style={({ isActive }) => ({
                  color: isActive ? 'var(--accent)' : 'var(--text)',
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors ${isActive ? 'font-medium' : ''}`
                }
                style={({ isActive }) => ({
                  color: isActive ? 'var(--accent)' : 'var(--text)',
                })}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </motion.header>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
