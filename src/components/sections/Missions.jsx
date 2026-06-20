import { SectionHeader } from '../ui/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { missionData } from '../../data/missionData'

export function Missions({ onSelect }) {
  const { headingRef, gridRef } = useScrollReveal()
  return (
    <section id="missions" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <SectionHeader ref={headingRef} title="Mission" highlight="Protocol">
          Status: Active
        </SectionHeader>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {missionData.map((mission) => (
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
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="px-2 py-1 bg-surface-bright text-primary text-[9px] font-bold uppercase tracking-widest border border-primary/20 flex gap-2">
                    <span className="text-on-surface-variant font-mono">{mission.agency}</span>
                    <span>{mission.name}</span>
                  </div>
                  <span className="text-xs font-mono text-on-surface-variant/60 uppercase tracking-widest pt-1">
                    Est. {mission.year}
                  </span>
                </div>
                <h4 className="font-headline text-xl mb-4">{mission.title}</h4>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed mb-6 grow">
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