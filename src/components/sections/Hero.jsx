import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { StarsBackground } from '../ui/star'
import planetIcon from '../../assets/planet-svgrepo-com.svg'
import astronautIcon from '../../assets/user-astronaut-svgrepo-com.svg'
import rocketIcon from '../../assets/rocket-svgrepo-com.svg'
import galaxyIcon from '../../assets/warp-galaxy-svgrepo-com.svg'
import starIcon from '../../assets/star-svgrepo-com.svg'

const categories = [
  { name: 'Planets', count: '8 Planets', icon: 'planet', categoryId: 'planets' },
  { name: 'Astronauts', count: '6+ Astronauts', icon: 'astronaut', categoryId: 'astronauts' },
  { name: 'Missions', count: '6+ Missions', icon: 'rocket', categoryId: 'missions' },
  { name: 'Galaxies', count: '4+ Galaxies', icon: 'galaxy', categoryId: 'galaxies' },
  { name: 'Facts', count: '8+ Facts', icon: 'fact', categoryId: 'facts' },
]

export function Hero() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  const starsRef = useRef(null)
  const [animPaused, setAnimPaused] = useState(false)
  const navigate = useNavigate()

  // Individual text element refs
  const badgeRef = useRef(null)
  const headlineTopRef = useRef(null)
  const headlineBottomRef = useRef(null)
  const taglineRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const categoryTitleRef = useRef(null)

  // Pause star animation when hero is off-screen
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setAnimPaused(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // GSAP entrance animations
  useEffect(() => {
    const els = [
      // badgeRef.current,
      headlineTopRef.current,
      headlineBottomRef.current,
      taglineRef.current,
      descRef.current,
      ctaRef.current,
    ]

    const ctx = gsap.context(() => {
      // Hide all text parts and cards before first paint
      gsap.set(starsRef.current, { opacity: 0 })
      gsap.set(els, { opacity: 0, y: 30, willChange: 'transform, opacity' })
      gsap.set(categoryTitleRef.current, { opacity: 0, y: 20, willChange: 'transform, opacity' })
      gsap.set(cardsRef.current.children, { opacity: 0, y: 35, willChange: 'transform, opacity' })

      const tl = gsap.timeline({ delay: 0.1, defaults: { ease: 'power3.out' } })

      // Stars fade in independently — very slow, still going after text finishes
      gsap.to(starsRef.current, { opacity: 1, duration: 4, ease: 'power1.inOut', delay: 0.1 })

      // Each text element slides in one after another
      tl.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.12,
        clearProps: 'willChange',
      })

      // Cards stagger in after text finishes
      tl.to(
        categoryTitleRef.current,
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', clearProps: 'willChange' },
        '-=0.1',
      )
      tl.to(
        cardsRef.current.children,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'willChange',
        },
        '-=0.3',
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCategoryClick = (categoryId) => {
    navigate(`/explore?category=${categoryId}`)
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      <div ref={starsRef} className="absolute inset-0 z-0">
        <StarsBackground className="absolute inset-0 z-0" paused={animPaused} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 w-full pt-32 pb-16 flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col items-center">

          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-6 flex flex-col items-center">
            <span ref={headlineTopRef} className="block text-star-white mb-2 text-glow-subtle opacity-0">WELCOME TO</span>
            <span
              ref={headlineBottomRef}
              className="block font-headline font-bold tracking-tighter uppercase pb-2 opacity-0"
            >
              Cosmo<span className="text-primary">Quest</span>
            </span>
          </h1>

          <p ref={taglineRef} className="text-xl sm:text-2xl text-secondary font-headline font-medium mb-6 mt-2 max-w-2xl opacity-0">
            Explore the Universe. Discover the Unknown.
          </p>

          <p ref={descRef} className="text-base sm:text-lg text-on-surface-variant font-body font-light leading-relaxed max-w-2xl mb-10 opacity-0">
            Dive into the wonders of space. Explore planets, meet legendary astronauts,
            discover epic missions, and learn amazing facts about the cosmos.
          </p>

          <div ref={ctaRef} className="opacity-0">
            <button
              onClick={() => navigate('/explore')}
              className="relative inline-flex items-center justify-center px-10 py-4 bg-primary text-on-primary font-body text-sm font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 hover:bg-primary-dim hover:shadow-[0_0_32px_8px_rgba(99,102,241,0.45)] active:brightness-90"
            >
              Start Exploring
            </button>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Explore Categories */}
      <div id="categories" className="relative z-20 mt-auto pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div ref={categoryTitleRef} className="flex items-center gap-4 mb-8 opacity-0">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline to-transparent" />
            <h2 className="font-headline text-sm font-bold uppercase tracking-[0.2em] text-star-white">
              Explore Categories
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline to-transparent" />
          </div>

          <div ref={cardsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                onClick={() => handleCategoryClick(category.categoryId)}
                className="group cursor-pointer rounded-xl border border-outline bg-surface/60 backdrop-blur-sm p-5 hover:border-primary hover:bg-surface-bright/80 transition-[border-color,background-color] duration-300 opacity-0"
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
