import { SectionHeader } from '../ui/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { galaxyData } from '../../data/galaxyData'

export function Galaxies({ onSelect }) {
  const { headingRef, gridRef } = useScrollReveal()
  return (
    <section id="galaxies" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <SectionHeader ref={headingRef} title="Deep" highlight="Space" />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galaxyData.map((galaxy) => (
            <div
              key={galaxy.id}
              onClick={() => onSelect(galaxy)}
              className="relative group cursor-pointer overflow-hidden aspect-[4/5] bg-surface"
            >
              <img
                src={galaxy.image}
                alt={galaxy.name}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 will-change-transform"
                loading="lazy"
              />
              <div className="absolute top-0 left-0 p-8 w-full">
                <span className="inline-block px-3 py-1 bg-background/60 backdrop-blur-md text-[10px] font-mono text-primary border border-outline uppercase tracking-widest">
                  Distance: {galaxy.distance}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-95 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                <p className="text-xs font-mono text-primary/80 uppercase tracking-widest mb-2 border-b border-white/10 pb-2 inline-block self-start">
                  {galaxy.classification} Galaxy
                </p>
                <h3 className="font-headline text-3xl font-bold mb-3">{galaxy.name}</h3>
                <p className="text-sm text-on-surface-variant font-light italic opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {galaxy.funFact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}