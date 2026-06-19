import { motion } from 'motion/react'

const categories = [
  { name: 'Planets', count: '8 Planets', icon: 'planet' },
  { name: 'Astronauts', count: '6+ Astronauts', icon: 'astronaut' },
  { name: 'Missions', count: '6+ Missions', icon: 'rocket' },
  { name: 'Galaxies', count: '4+ Galaxies', icon: 'galaxy' },
  { name: 'Facts', count: '8+ Facts', icon: 'fact' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Starfield Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <StarField />
      </div>

      {/* Planet Visual */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] pointer-events-none opacity-90">
        <PlanetVisual />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 w-full pt-24 pb-12">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="inline-block text-[10px] font-medium uppercase tracking-[0.3em] text-primary font-body">
              Exploration Interface v4.0
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-6"
          >
            <span className="block text-star-white">WELCOME TO</span>
            <span className="block bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent text-glow">
              COSMOQUEST
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-secondary font-headline font-medium mb-4"
          >
            Explore the Universe. Discover the Unknown.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-on-surface-variant font-body font-light leading-relaxed max-w-lg mb-10"
          >
            Dive into the wonders of space. Explore planets, meet legendary astronauts,
            discover epic missions, and learn amazing facts about the cosmos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#categories"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-on-primary font-body text-sm font-bold uppercase tracking-[0.15em] rounded-lg hover:bg-primary-dim transition-colors duration-300 accent-glow-strong"
            >
              Start Exploring
            </a>
          </motion.div>
        </div>
      </div>

      {/* Explore Categories */}
      <div id="categories" className="relative z-10 mt-auto pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline to-transparent" />
              <h2 className="font-headline text-sm font-bold uppercase tracking-[0.2em] text-star-white">
                Explore Categories
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline to-transparent" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group cursor-pointer rounded-xl border border-outline bg-surface/60 backdrop-blur-sm p-5 hover:border-primary hover:bg-surface-bright/80 transition-all duration-300"
                >
                  <div className="mb-4 flex items-center justify-center">
                    <CategoryIcon name={category.icon} />
                  </div>
                  <h3 className="font-headline text-base font-semibold text-star-white text-center mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-on-surface-variant text-center font-body">
                    {category.count}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StarField() {
  // Generate deterministic stars
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: `${(i * 13.7) % 100}%`,
    top: `${(i * 7.3) % 100}%`,
    size: 1 + (i % 3),
    delay: (i * 0.05) % 3,
    duration: 2 + (i % 4),
  }))

  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  )
}

function PlanetVisual() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="planetGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8781ff" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#6c63ff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#05070a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="planetSurface" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#a5a0ff" />
          <stop offset="40%" stopColor="#6c63ff" />
          <stop offset="100%" stopColor="#1a144f" />
        </radialGradient>
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8781ff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#c4c0ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8781ff" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Outer glow */}
      <circle cx="200" cy="200" r="180" fill="url(#planetGlow)" />

      {/* Ring back */}
      <ellipse
        cx="200"
        cy="200"
        rx="240"
        ry="60"
        fill="none"
        stroke="url(#ringGradient)"
        strokeWidth="2"
        opacity="0.4"
        transform="rotate(-25 200 200)"
      />

      {/* Planet */}
      <circle cx="200" cy="200" r="110" fill="url(#planetSurface)" />

      {/* Planet shadow overlay for 3D effect */}
      <circle cx="200" cy="200" r="110" fill="url(#planetShadow)" opacity="0.4" />
      <defs>
        <radialGradient id="planetShadow" cx="65%" cy="65%" r="55%">
          <stop offset="0%" stopColor="#05070a" stopOpacity="0" />
          <stop offset="100%" stopColor="#05070a" stopOpacity="0.8" />
        </radialGradient>
      </defs>

      {/* Ring front */}
      <ellipse
        cx="200"
        cy="200"
        rx="240"
        ry="60"
        fill="none"
        stroke="url(#ringGradient)"
        strokeWidth="3"
        opacity="0.7"
        transform="rotate(-25 200 200)"
      />
      <ellipse
        cx="200"
        cy="200"
        rx="220"
        ry="55"
        fill="none"
        stroke="#c4c0ff"
        strokeWidth="1"
        opacity="0.2"
        transform="rotate(-25 200 200)"
      />

      {/* Small moon */}
      <circle cx="320" cy="110" r="12" fill="#38bdf8" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="320" cy="110" r="18" fill="none" stroke="#38bdf8" strokeWidth="0.5" opacity="0.3" />
    </svg>
  )
}

function CategoryIcon({ name }) {
  const icons = {
    planet: (
      <svg viewBox="0 0 48 48" className="w-12 h-12 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="12" />
        <ellipse cx="24" cy="24" rx="20" ry="7" />
      </svg>
    ),
    astronaut: (
      <svg viewBox="0 0 48 48" className="w-12 h-12 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="18" r="8" />
        <path d="M14 40c0-8 4-12 10-12s10 4 10 12" />
        <circle cx="21" cy="17" r="1.5" fill="currentColor" />
        <circle cx="27" cy="17" r="1.5" fill="currentColor" />
      </svg>
    ),
    rocket: (
      <svg viewBox="0 0 48 48" className="w-12 h-12 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4c-8 8-10 20-8 32l8-4 8 4c2-12 0-24-8-32z" />
        <circle cx="24" cy="22" r="4" />
        <path d="M16 36c-4 0-8 4-8 8M32 36c4 0 8 4 8 8" />
      </svg>
    ),
    galaxy: (
      <svg viewBox="0 0 48 48" className="w-12 h-12 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="4" />
        <ellipse cx="24" cy="24" rx="18" ry="8" />
        <ellipse cx="24" cy="24" rx="18" ry="8" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="18" ry="8" transform="rotate(120 24 24)" />
      </svg>
    ),
    fact: (
      <svg viewBox="0 0 48 48" className="w-12 h-12 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4l4 10h10l-8 7 3 10-9-6-9 6 3-10-8-7h10z" />
        <circle cx="24" cy="34" r="4" />
      </svg>
    ),
  }

  return icons[name] || null
}
