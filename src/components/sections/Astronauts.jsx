import { SectionHeader } from '../ui/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { astronautData } from '../../data/astronautData'

export function Astronauts({ onSelect }) {
  const { headingRef, gridRef } = useScrollReveal()
  return (
    <section id="astronauts" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <SectionHeader ref={headingRef} title="Personnel" highlight="Log">
          Total: {String(astronautData.length).padStart(2, '0')} Crew Members
        </SectionHeader>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {astronautData.map((astronaut, i) => (
            <div
              key={astronaut.id}
              onClick={() => onSelect(astronaut)}
              className="bg-background group cursor-pointer overflow-hidden hover:bg-surface transition-colors"
            >
              {/* Portrait image */}
              <div className="aspect-3/4 overflow-hidden relative">
                <img
                  src={astronaut.image}
                  alt={astronaut.name}
                  className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 transition-all duration-700 will-change-transform"
                  loading="lazy"
                />
                {/* Country badge */}
                <span className="absolute top-2 sm:top-3 right-2 sm:right-3 text-[9px] sm:text-xs font-mono uppercase tracking-widest bg-background/80 backdrop-blur-sm text-on-surface-variant px-1.5 py-0.5 sm:px-2 sm:py-1 border border-outline">
                  {astronaut.country}
                </span>
                {/* Index */}
                <span className="absolute top-2 sm:top-3 left-2 sm:left-3 text-[10px] sm:text-xs font-mono text-primary/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Info */}
              <div className="p-3 sm:p-5 border-t border-outline flex flex-col grow">
                <p className="text-[9px] sm:text-xs font-mono text-primary/80 uppercase tracking-wider sm:tracking-[0.2em] mb-1 sm:mb-2 line-clamp-1">
                  {astronaut.role}
                </p>
                <h3 className="font-headline text-base sm:text-xl mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                  {astronaut.name}
                </h3>
                <p className="text-[10px] sm:text-sm text-on-surface-variant font-light leading-snug sm:leading-relaxed grow">
                  {astronaut.description}
                </p>

                {/* View detail row */}
                <div className="mt-2 sm:mt-4 flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-mono text-on-surface-variant/60 group-hover:text-primary transition-colors">
                  <span>View Profile</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-3 sm:h-3"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
