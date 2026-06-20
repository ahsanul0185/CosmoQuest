import { motion } from 'motion/react'

const categoryColors = {
  planets: 'text-primary',
  astronauts: 'text-secondary',
  missions: 'text-primary',
  galaxies: 'text-secondary',
  facts: 'text-primary',
}

const categoryLabels = {
  planets: 'Planetary Node',
  astronauts: 'Personnel Record',
  missions: 'Mission Protocol',
  galaxies: 'Deep Space Object',
  facts: 'Cosmic Fact',
}

export function Card({ item, onClick, index = 0 }) {
  const categoryLabel = categoryLabels[item.category] || 'Database Record'
  const accentColor = categoryColors[item.category] || 'text-primary'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onClick(item)}
      className="group cursor-pointer bg-background border border-outline rounded-xl overflow-hidden hover:border-primary/60 hover:bg-surface/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={item.image}
          alt={item.searchName || item.name}
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 will-change-transform"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <span className={`absolute top-3 left-3 px-2.5 py-1 bg-background/80 backdrop-blur-sm border border-outline/50 rounded-md text-[10px] font-mono uppercase tracking-wider ${accentColor}`}>
          {categoryLabel}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="font-headline text-lg sm:text-xl font-bold text-star-white group-hover:text-primary transition-colors mb-2">
          {item.searchName || item.name}
        </h3>
        
        <p className="text-sm text-on-surface-variant font-light leading-relaxed line-clamp-2 mb-4">
          {item.description}
        </p>

        {/* Meta info based on category */}
        <div className="flex items-center justify-between text-xs border-t border-outline/50 pt-3">
          {item.category === 'planets' && (
            <>
              <span className="font-mono text-primary/80 uppercase tracking-wider">{item.distance}</span>
              <span className="text-on-surface-variant/70">{item.moons} moons</span>
            </>
          )}
          {item.category === 'astronauts' && (
            <>
              <span className="font-mono text-primary/80 uppercase tracking-wider">{item.country}</span>
              <span className="text-on-surface-variant/70">{item.role}</span>
            </>
          )}
          {item.category === 'missions' && (
            <>
              <span className="font-mono text-primary/80 uppercase tracking-wider">{item.agency}</span>
              <span className="text-on-surface-variant/70">{item.year}</span>
            </>
          )}
          {item.category === 'galaxies' && (
            <>
              <span className="font-mono text-primary/80 uppercase tracking-wider">{item.classification}</span>
              <span className="text-on-surface-variant/70">{item.distance}</span>
            </>
          )}
          {item.category === 'facts' && (
            <>
              <span className="font-mono text-primary/80 uppercase tracking-wider">Fact</span>
              <span className="text-on-surface-variant/70">Cosmic Data</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}
