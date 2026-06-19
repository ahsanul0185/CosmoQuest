import { useRef, useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { StarsBackground } from '../ui/star'
import planetIcon from '../../assets/planet-svgrepo-com.svg'
import astronautIcon from '../../assets/user-astronaut-svgrepo-com.svg'
import rocketIcon from '../../assets/rocket-svgrepo-com.svg'
import galaxyIcon from '../../assets/warp-galaxy-svgrepo-com.svg'
import starIcon from '../../assets/star-svgrepo-com.svg'

const categories = [
  { name: 'Planets', count: '8 Planets', icon: 'planet' },
  { name: 'Astronauts', count: '6+ Astronauts', icon: 'astronaut' },
  { name: 'Missions', count: '6+ Missions', icon: 'rocket' },
  { name: 'Galaxies', count: '4+ Galaxies', icon: 'galaxy' },
  { name: 'Facts', count: '8+ Facts', icon: 'fact' },
]

// Real photos from Unsplash, free license
const HERO_BG =
  '../assets/images/hero.png' // NASA — Clown-faced Nebula (Hubble)
const SATURN_IMG =
  'https://images.unsplash.com/photo-1707056789925-9daccd5eb108?auto=format&fit=crop&w=1200&q=80' // NASA Hubble — Saturn

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export function Hero() {
  const sectionRef = useRef(null)
  const [animPaused, setAnimPaused] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Pause when the hero is fully out of view, resume when it re-enters
        setAnimPaused(!entry.isIntersecting)
      },
      { threshold: 0 }, // fires as soon as even 1px is visible / hidden
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      <StarsBackground className="absolute inset-0 z-0" paused={animPaused} />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 w-full pt-32 pb-16 flex flex-col items-center text-center">
        <motion.div className="max-w-3xl flex flex-col items-center" initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-surface/40 border border-outline/50 backdrop-blur-sm text-[10px] font-medium uppercase tracking-[0.3em] text-primary font-body">
              Exploration Interface v4.0
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-6 flex flex-col items-center"
          >
            <span className="block text-star-white mb-2 text-glow-subtle">WELCOME TO</span>
            <span className="block bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent text-glow pb-2">
              COSMOQUEST
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-xl sm:text-2xl text-secondary font-headline font-medium mb-6 mt-2 max-w-2xl">
            Explore the Universe. Discover the Unknown.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-on-surface-variant font-body font-light leading-relaxed max-w-2xl mb-10"
          >
            Dive into the wonders of space. Explore planets, meet legendary astronauts,
            discover epic missions, and learn amazing facts about the cosmos.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="#categories"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-on-primary font-body text-sm font-bold uppercase tracking-[0.15em] rounded-full hover:bg-primary-dim transition-all duration-300 accent-glow-strong hover:scale-105 active:scale-95"
            >
              Start Exploring
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Explore Categories */}
      <div id="categories" className="relative z-20 mt-auto pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline to-transparent" />
            <h2 className="font-headline text-sm font-bold uppercase tracking-[0.2em] text-star-white">
              Explore Categories
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StarField() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: `${(i * 13.7) % 100}%`,
    top: `${(i * 7.3) % 100}%`,
    size: 1 + (i % 3),
    delay: (i % 5) * 0.6,
  }))

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </>
  )
}

const categoryIcons = {
  planet: planetIcon,
  astronaut: astronautIcon,
  rocket: rocketIcon,
  galaxy: galaxyIcon,
  fact: starIcon,
}

function CategoryIcon({ name }) {
  const src = categoryIcons[name]
  if (!src) return null
  return (
    <img
      src={src}
      alt={name}
      className="w-12 h-12 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
      style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(210deg) brightness(1.1)' }}
    />
  )
}