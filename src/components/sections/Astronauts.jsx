import { SectionHeader } from '../ui/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const astronauts = [
  {
    id: 'a1',
    name: 'Neil Armstrong',
    role: 'Apollo 11 Commander',
    country: 'USA',
    description: 'First person to walk on the Moon.',
    image: '/astronauts/Neil_Armstrong.jpg',
  },
  {
    id: 'a2',
    name: 'Kalpana Chawla',
    role: 'Mission Specialist',
    country: 'India',
    description: 'First woman of Indian origin in space.',
    image: '/astronauts/Kalpana_Chawla.jpg',
  },
  {
    id: 'a3',
    name: 'Sunita Williams',
    role: 'Station Commander',
    country: 'USA',
    description: 'Record holder for spacewalks by a woman.',
    image: '/astronauts/Sunita_Williams.jpg',
  },
  {
    id: 'a4',
    name: 'Yuri Gagarin',
    role: 'Vostok 1 Pilot',
    country: 'USSR',
    description: 'First human to journey into outer space.',
    image: '/astronauts/Yuri_Gagarin.jpg',
  },
  {
    id: 'a5',
    name: 'Sally Ride',
    role: 'Mission Specialist',
    country: 'USA',
    description: 'First American woman in space.',
    image: '/astronauts/Sally_Ride.jpg',
  },
  {
    id: 'a6',
    name: 'Rakesh Sharma',
    role: 'Soyuz T-11 Cosmonaut',
    country: 'India',
    description: 'First Indian citizen to travel in space.',
    image: '/astronauts/Rakesh_Sharma.jpg',
  },
]

export function Astronauts({ onSelect }) {
  const { headingRef, gridRef } = useScrollReveal()
  return (
    <section id="astronauts" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <SectionHeader ref={headingRef} title="Personnel" highlight="Log">
          Total: {String(astronauts.length).padStart(2, '0')} Crew Members
        </SectionHeader>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {astronauts.map((astronaut, i) => (
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
                <span className="absolute top-3 right-3 text-xs font-mono uppercase tracking-widest bg-background/80 backdrop-blur-sm text-on-surface-variant px-2 py-1 border border-outline">
                  {astronaut.country}
                </span>
                {/* Index */}
                <span className="absolute top-3 left-3 text-xs font-mono text-primary/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Info */}
              <div className="p-5 border-t border-outline">
                <p className="text-xs font-mono text-primary/80 uppercase tracking-[0.2em] mb-2">
                  {astronaut.role}
                </p>
                <h3 className="font-headline text-xl mb-2 group-hover:text-primary transition-colors">
                  {astronaut.name}
                </h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                  {astronaut.description}
                </p>

                {/* View detail row */}
                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-on-surface-variant/60 group-hover:text-primary transition-colors">
                  <span>View Profile</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
