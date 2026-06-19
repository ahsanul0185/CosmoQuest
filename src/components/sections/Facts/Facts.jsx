import { motion } from 'motion/react'

const facts = [
  {
    id: 'f1',
    label: 'Signal Received',
    text: 'Space is completely silent. There is no atmosphere to carry sound waves, creating an absolute vacuum of noise.',
    active: true,
  },
  {
    id: 'f2',
    label: 'Temporal Data',
    text: 'A day on Venus is longer than a year on Venus. It rotates so slowly that its orbital period is shorter than its spin.',
    active: false,
  },
  {
    id: 'f3',
    label: 'Population Metrics',
    text: 'There are more stars in the universe than grains of sand on all Earth\'s beaches combined. A count exceeding septillions.',
    active: false,
  },
  {
    id: 'f4',
    label: 'Atmospheric Pressure',
    text: 'It may rain diamonds on Saturn and Jupiter due to extreme atmospheric pressure condensing carbon particles into solid gems.',
    active: false,
  },
  {
    id: 'f5',
    label: 'Gravitational Lens',
    text: 'Jupiter is so massive that it acts as a cosmic vacuum cleaner, protecting Earth by absorbing or deflecting many asteroids.',
    active: false,
  },
  {
    id: 'f6',
    label: 'Stellar Scale',
    text: 'The Sun accounts for 99.86% of all the mass in the entire Solar System. Everything else is just a tiny fraction.',
    active: false,
  },
  {
    id: 'f7',
    label: 'Neutron Density',
    text: 'A sugar-cube-sized amount of neutron star material would weigh about 1 billion tons on Earth.',
    active: false,
  },
  {
    id: 'f8',
    label: 'Cosmic Speed',
    text: 'Light travels at 299,792 km/s. A light-year is about 9.5 trillion kilometers. The observable universe is 93 billion light-years across.',
    active: false,
  },
]

export function Facts() {
  return (
    <section id="facts" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline text-4xl font-light text-center mb-24 uppercase tracking-widest"
        >
          Cosmic <span className="font-bold">Telemetry</span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto border-l border-outline pl-12 space-y-16">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              <div
                className={`absolute -left-[53px] top-1 w-2.5 h-2.5 rounded-full ring-4 ring-background ${
                  fact.active
                    ? 'bg-primary'
                    : 'border border-outline bg-background'
                }`}
              />
              <p
                className={`text-[10px] font-mono uppercase mb-2 ${
                  fact.active ? 'text-primary' : 'opacity-40'
                }`}
              >
                {fact.label}
              </p>
              <p className="font-headline text-2xl font-light leading-snug">
                {fact.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
