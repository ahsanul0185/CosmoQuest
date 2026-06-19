import { SectionHeader } from '../ui/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const missions = [
  {
    id: 'm1',
    name: 'Voyager 1',
    status: 'Interstellar',
    title: 'Interstellar Messenger',
    description: 'First man-made object to reach interstellar space, currently 14.1 billion miles from Earth station.',
    progress: 100,
    progressLabel: 'Max Dist',
    year: '1977',
    agency: 'NASA',
    image: '/missions/voyeger-1.jpg',
  },
  {
    id: 'm2',
    name: 'Chandrayaan-3',
    status: 'Deployment',
    title: "Moon's South Pole",
    description: 'Historical landing near the Lunar South Pole exploring water ice resources for future colonization.',
    progress: 85,
    progressLabel: '85% Compl.',
    year: '2023',
    agency: 'ISRO',
    image: '/missions/chandrayaan-3.jpg',
  },
  {
    id: 'm3',
    name: 'Apollo 11',
    status: 'Completed',
    title: 'First Lunar Landing',
    description: 'The first crewed mission to land on the Moon, marking a giant leap for mankind.',
    progress: 100,
    progressLabel: 'Completed',
    year: '1969',
    agency: 'NASA',
    image: '/missions/apollo-11.webp',
  },
  {
    id: 'm4',
    name: 'Hubble Telescope',
    status: 'Active',
    title: 'Cosmic Eye',
    description: 'Revolutionary space telescope that has transformed our understanding of the universe.',
    progress: 95,
    progressLabel: '95% Operational',
    year: '1990',
    agency: 'NASA/ESA',
    image: '/missions/hubble-space-telescope.jpg',
  },
  {
    id: 'm5',
    name: 'Mars Rover',
    status: 'Active',
    title: 'Red Planet Explorer',
    description: 'Advanced robotic rover searching for signs of ancient microbial life on Mars.',
    progress: 70,
    progressLabel: '70% Mission',
    year: '2021',
    agency: 'NASA',
    image: '/missions/mars-rover.jpg',
  },
  {
    id: 'm6',
    name: 'Artemis',
    status: 'In Progress',
    title: 'Return to the Moon',
    description: 'NASA program to return humans to the Moon and establish a sustainable presence.',
    progress: 45,
    progressLabel: '45% Phase',
    year: '2025',
    agency: 'NASA',
    image: '/missions/artemis-2.webp',
  },
]

export function Missions({ onSelect }) {
  const { headingRef, gridRef } = useScrollReveal()
  return (
    <section id="missions" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <SectionHeader ref={headingRef} title="Mission" highlight="Protocol">
          Status: Active
        </SectionHeader>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {missions.map((mission) => (
            <div
              key={mission.id}
              onClick={() => onSelect(mission)}
              className="border border-outline group hover:border-primary transition-colors cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 transition-all duration-700 will-change-transform"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="px-2 py-1 bg-surface-bright text-primary text-[9px] font-bold uppercase tracking-widest border border-primary/20">
                    {mission.name}
                  </div>
                  <span className="text-xs font-mono text-on-surface-variant/60">
                    Status: {mission.status}
                  </span>
                </div>
                <h4 className="font-headline text-xl mb-4">{mission.title}</h4>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed mb-6">
                  {mission.description}
                </p>
                <div className="flex items-center gap-4">
                  <div className="grow bg-outline h-[2px]">
                    <div
                      className="bg-primary h-full transition-all duration-1000"
                      style={{
                        width: `${mission.progress}%`,
                        boxShadow:
                          mission.progress === 100
                            ? '0 0 10px rgba(135,129,255,0.5)'
                            : 'none',
                      }}
                    />
                  </div>
                  <span className="text-xs font-mono text-on-surface-variant/70 uppercase">
                    {mission.progressLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}