import { SectionHeader } from '../ui/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const planets = [
  {
    id: '001',
    name: 'Mercury',
    type: 'Terrestrial',
    moons: '0',
    description: 'The smallest and innermost planet in the Solar System.',
    distance: '57.9M km',
    funFact: 'A day on Mercury is longer than its year.',
    image: '/planets/mercury.jpg',
  },
  {
    id: '002',
    name: 'Venus',
    type: 'Terrestrial',
    moons: '0',
    description: 'The hottest planet with a thick toxic atmosphere.',
    distance: '108.2M km',
    funFact: 'Venus spins backwards compared to most planets.',
    image: '/planets/venus.jpg',
  },
  {
    id: '003',
    name: 'Earth',
    type: 'Terrestrial',
    moons: '1',
    description: 'Our home planet, the only known world with life.',
    distance: '149.6M km',
    funFact: 'Earth is the only planet not named after a god.',
    image: '/planets/earth.jpg',
  },
  {
    id: '004',
    name: 'Mars',
    type: 'Red Planet',
    moons: '2',
    description: 'The Red Planet, home to Olympus Mons.',
    distance: '227.9M km',
    funFact: 'Mars has two moons, Phobos and Deimos.',
    image: '/planets/mars.jpg',
  },
  {
    id: '005',
    name: 'Jupiter',
    type: 'Gas Giant',
    moons: '95',
    description: 'The largest planet, famous for its Great Red Spot.',
    distance: '778.5M km',
    funFact: 'Jupiter has at least 95 moons.',
    image: '/planets/jupiter.jpg',
  },
  {
    id: '006',
    name: 'Saturn',
    type: 'Ringed World',
    moons: '146',
    description: 'Adorned with a spectacular ring system.',
    distance: '1.4B km',
    funFact: 'Its rings are mostly made of ice and rock.',
    image: '/planets/saturn.jpg',
  },
  {
    id: '007',
    name: 'Uranus',
    type: 'Ice Giant',
    moons: '27',
    description: 'An ice giant that rotates on its side.',
    distance: '2.9B km',
    funFact: 'Uranus rotates on its side at 98 degrees.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg',
  },
  {
    id: '008',
    name: 'Neptune',
    type: 'Ice Giant',
    moons: '14',
    description: 'The most distant planet with supersonic winds.',
    distance: '4.5B km',
    funFact: 'Neptune has the strongest winds in the Solar System.',
    image: '/planets/neptune.jpg',
  },
]

export function Planets({ onSelect }) {
  const { headingRef, gridRef } = useScrollReveal()
  return (
    <section id="planets" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <SectionHeader ref={headingRef} title="Planetary" highlight="Catalog">
          Total: 08 Terrestrial &amp; Gaseous
        </SectionHeader>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline">
          {planets.map((planet) => (
            <div
              key={planet.id}
              onClick={() => onSelect(planet)}
              className="bg-background group cursor-pointer overflow-hidden p-6 hover:bg-surface transition-colors"
            >
              <div className="aspect-square mb-6 overflow-hidden">
                <img
                  src={planet.image}
                  alt={planet.name}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 grayscale group-hover:grayscale-0 transition-all duration-700 will-change-transform"
                  loading="lazy"
                />
              </div>
              <p className="text-xs font-mono text-primary/80 uppercase tracking-[0.2em] mb-2">
                Node: {planet.id}
              </p>
              <h3 className="font-headline text-xl mb-1 group-hover:text-primary transition-colors">
                {planet.name}
              </h3>
              <p className="text-sm text-on-surface-variant font-light">
                {planet.type} // {planet.moons} Moons
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
