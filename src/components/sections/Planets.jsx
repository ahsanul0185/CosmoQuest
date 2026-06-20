import { SectionHeader } from '../ui/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { planetData } from '../../data/planetData'

export function Planets({ onSelect }) {
  const { headingRef, gridRef } = useScrollReveal()
  return (
    <section id="planets" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <SectionHeader ref={headingRef} title="Planetary" highlight="Catalog">
          Total: {planetData.length < 10 ? `0${planetData.length}` : planetData.length} Terrestrial &amp; Gaseous
        </SectionHeader>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline">
          {planetData.map((planet) => (
            <div
              key={planet.id}
              onClick={() => onSelect(planet)}
              className="bg-background group cursor-pointer overflow-hidden p-6 hover:bg-surface transition-colors flex flex-col h-full grow"
            >
              <div className="aspect-square mb-6 overflow-hidden relative">
                <img
                  src={planet.image}
                  alt={planet.name}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 grayscale group-hover:grayscale-0 transition-all duration-700 will-change-transform"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col grow">
                <h3 className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors font-bold">
                  {planet.name}
                </h3>
                <p className="text-sm text-on-surface-variant font-light mb-4 grow">
                  {planet.description}
                </p>
                <div className="mt-auto space-y-2">
                  <div className="flex justify-between items-center text-xs border-b border-outline/50 pb-1">
                    <span className="font-mono text-primary/80 uppercase tracking-wider">Distance</span>
                    <span className="font-headline">{planet.distance}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-outline/50 pb-1">
                    <span className="font-mono text-primary/80 uppercase tracking-wider">Moons</span>
                    <span className="font-headline">{planet.moons}</span>
                  </div>
                  <div className="pt-2">
                    <span className="block text-[10px] font-mono text-primary/60 uppercase mb-1">Fun Fact</span>
                    <span className="text-xs text-on-surface-variant italic leading-tight block">"{planet.funFact}"</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
