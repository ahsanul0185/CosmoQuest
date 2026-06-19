import { SectionHeader } from '../ui/SectionHeader'

const galaxies = [
  {
    id: 'g1',
    name: 'Milky Way',
    classification: 'Spiral',
    detail: 'Home Region // 400B Stars',
    description: 'Our home galaxy, a barred spiral galaxy containing our Solar System.',
    distance: '0 LY',
    funFact: 'The Milky Way is about 100,000 light-years in diameter.',
    image: '/deep-space/milky-way.jpg',
  },
  {
    id: 'g2',
    name: 'Andromeda',
    classification: 'Binary',
    detail: 'Merging Neighbor // 2.5M LY',
    description: 'The nearest major galaxy to the Milky Way, on a collision course with us.',
    distance: '2.5M LY',
    funFact: 'Andromeda is approaching the Milky Way at 110 km/s.',
    image: '/deep-space/andromeda-galaxy.jpg',
  },
  {
    id: 'g3',
    name: 'Sombrero',
    classification: 'Lenticular',
    detail: 'M104 System // Dust Ring',
    description: 'A lenticular galaxy with a prominent dust lane and bright nucleus.',
    distance: '29.3M LY',
    funFact: 'The Sombrero Galaxy has 2,000 globular clusters.',
    image: '/deep-space/sombrero.jpg',
  },
  {
    id: 'g4',
    name: 'Whirlpool',
    classification: 'Spiral',
    detail: 'M51 System // Interacting',
    description: 'A grand-design spiral galaxy interacting with a smaller companion.',
    distance: '23M LY',
    funFact: 'The Whirlpool Galaxy was the first galaxy classified as spiral.',
    image: '/deep-space/whirlpool-galaxy.webp',
  },
]

export function Galaxies({ onSelect }) {
  return (
    <section id="galaxies" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <SectionHeader title="Deep" highlight="Space" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galaxies.map((galaxy) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 w-full border-t border-white/5 bg-background/20 backdrop-blur-sm">
                <p className="text-xs font-mono text-primary/80 uppercase tracking-[0.3em] mb-3">
                  Classification: {galaxy.classification}
                </p>
                <h3 className="font-headline text-2xl font-bold mb-1">{galaxy.name}</h3>
                <p className="text-sm text-on-surface-variant font-light">
                  {galaxy.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}