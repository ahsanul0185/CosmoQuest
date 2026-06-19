import { motion } from 'motion/react'

const astronauts = [
  {
    id: 'a1',
    name: 'Neil Armstrong',
    role: 'Apollo 11 Commander',
    country: 'USA',
    description: 'First person to walk on the Moon.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Neil_Armstrong_pose.jpg',
  },
  {
    id: 'a2',
    name: 'Kalpana Chawla',
    role: 'Mission Specialist',
    country: 'India',
    description: 'First woman of Indian origin in space.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Kalpana_Chawla%2C_NASA_photo_portrait_in_orange_suit.jpg',
  },
  {
    id: 'a3',
    name: 'Sunita Williams',
    role: 'Station Commander',
    country: 'USA',
    description: 'Record holder for spacewalks by a woman.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Sunita_Williams.jpg',
  },
  {
    id: 'a4',
    name: 'Yuri Gagarin',
    role: 'Vostok 1 Pilot',
    country: 'USSR',
    description: 'First human to journey into outer space.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Yuri_Gagarin_%281961%29.jpg',
  },
  {
    id: 'a5',
    name: 'Sally Ride',
    role: 'Mission Specialist',
    country: 'USA',
    description: 'First American woman in space.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Sally_Ride_%281984%29.jpg',
  },
  {
    id: 'a6',
    name: 'Rakesh Sharma',
    role: 'Soyuz T-11 Cosmonaut',
    country: 'India',
    description: 'First Indian citizen to travel in space.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Rakesh_Sharma.jpg',
  },
]

export function Astronauts({ onSelect }) {
  return (
    <section id="astronauts" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between mb-12 border-b border-outline pb-4"
        >
          <h2 className="font-headline text-3xl font-light">
            Personnel <span className="font-bold">Log</span>
          </h2>
          <span className="text-[10px] font-mono opacity-40">Records: {String(astronauts.length).padStart(2, '0')}</span>
        </motion.div>

        <div className="space-y-px bg-outline">
          {astronauts.map((astronaut, index) => (
            <motion.div
              key={astronaut.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => onSelect(astronaut)}
              className="bg-background p-6 flex items-center justify-between group hover:bg-surface-bright transition-all cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-surface border border-outline grayscale group-hover:grayscale-0 group-hover:border-primary transition-all p-0.5 overflow-hidden flex-shrink-0">
                  <img
                    src={astronaut.image}
                    alt={astronaut.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-headline text-lg group-hover:text-primary transition-colors">
                    {astronaut.name}
                  </h4>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                    {astronaut.role}
                  </p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-outline group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all flex-shrink-0"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
