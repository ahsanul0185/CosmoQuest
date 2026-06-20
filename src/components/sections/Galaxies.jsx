import { SectionHeader } from '../ui/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { galaxyData } from '../../data/galaxyData'

export function Galaxies({ onSelect }) {
  const { headingRef, gridRef } = useScrollReveal()
  return (
    <section id="galaxies" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <SectionHeader ref={headingRef} title="Deep" highlight="Space" />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galaxyData.map((galaxy) => (
            <div
              key={galaxy.id}
              onClick={() => onSelect(galaxy)}
              className="relative group cursor-pointer overflow-hidden aspect-[16/9] md:aspect-[2/1] bg-surface"
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
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-10 lg:group-hover:-translate-y-12 relative z-10">
                  <p className="text-xs font-mono text-primary/80 uppercase tracking-widest mb-2 border-b border-white/10 pb-2 inline-block self-start">
                    {galaxy.classification} Galaxy
                  </p>
                  <h3 className="font-headline text-3xl font-bold">{galaxy.name}</h3>
                </div>
                <div className="absolute left-8 right-8 bottom-8 pointer-events-none">
                  <p className="text-sm text-on-surface-variant font-light italic opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:pr-4 line-clamp-2">
                    {galaxy.funFact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}