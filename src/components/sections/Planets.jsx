import { useState } from 'react'

const planets = [
  {
    id: '001',
    name: 'Mercury',
    type: 'Terrestrial',
    moons: '0',
    description: 'The smallest and innermost planet in the Solar System.',
    distance: '57.9M km',
    funFact: 'A day on Mercury is longer than its year.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg',
  },
  {
    id: '002',
    name: 'Venus',
    type: 'Terrestrial',
    moons: '0',
    description: 'The hottest planet with a thick toxic atmosphere.',
    distance: '108.2M km',
    funFact: 'Venus spins backwards compared to most planets.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg',
  },
  {
    id: '003',
    name: 'Earth',
    type: 'Terrestrial',
    moons: '1',
    description: 'Our home planet, the only known world with life.',
    distance: '149.6M km',
    funFact: 'Earth is the only planet not named after a god.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg',
  },
  {
    id: '004',
    name: 'Mars',
    type: 'Red Planet',
    moons: '2',
    description: 'The Red Planet, home to Olympus Mons.',
    distance: '227.9M km',
    funFact: 'Mars has two moons, Phobos and Deimos.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
  },
  {
    id: '005',
    name: 'Jupiter',
    type: 'Gas Giant',
    moons: '95',
    description: 'The largest planet, famous for its Great Red Spot.',
    distance: '778.5M km',
    funFact: 'Jupiter has at least 95 moons.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg',
  },
  {
    id: '006',
    name: 'Saturn',
    type: 'Ringed World',
    moons: '146',
    description: 'Adorned with a spectacular ring system.',
    distance: '1.4B km',
    funFact: 'Its rings are mostly made of ice and rock.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten.jpg',
  },
]

export function Planets({ onSelect }) {
  return (
    <section id="planets" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex items-baseline justify-between mb-12 border-b border-outline pb-6">
          <h2 className="font-headline text-4xl font-light tracking-tighter">
            Planetary <span className="font-bold">Catalog</span>
          </h2>
          <p className="text-[10px] font-mono opacity-40 uppercase">
            Total: 08 Terrestrial &amp; Gaseous
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline">
          {planets.map((planet) => (
            <div
              key={planet.id}
              onClick={() => onSelect(planet)}
              className="bg-background group cursor-pointer overflow-hidden p-6 hover:bg-surface transition-colors"
            >
              <div className="aspect-square mb-6 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img
                  src={planet.image}
                  alt={planet.name}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <p className="text-[9px] font-mono text-primary uppercase tracking-[0.2em] mb-2">
                Node: {planet.id}
              </p>
              <h3 className="font-headline text-xl mb-1 group-hover:text-primary transition-colors">
                {planet.name}
              </h3>
              <p className="text-xs text-on-surface-variant font-light">
                {planet.type} // {planet.moons} Moons
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary flex items-center gap-2 group transition-colors">
            Expand Directory
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
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
