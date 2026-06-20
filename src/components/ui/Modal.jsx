import { motion, AnimatePresence } from 'motion/react'

export function Modal({ item, onClose }) {
  // Determine Category safely
  let category = item?.category || 'Database Record'
  if (!item?.category || item.category === 'facts') {
    if (item?.moons !== undefined) category = 'Planetary Node'
    if (item?.country !== undefined) category = 'Personnel Record'
    if (item?.progress !== undefined) category = 'Mission Protocol'
    if (item?.classification !== undefined) category = 'Deep Space Object'
  }

  // Determine Grid Details intelligently
  let gridDetails = item?.details || []
  
  if (!item?.details) {
    // Backward compatibility fallback logic
    let keyLabel = 'Primary Telemetry'
    let keyValue = item?.distance || item?.role || item?.status || item?.detail || 'Analyzing...'
    
    if (item?.moons !== undefined) {
      keyLabel = 'Distance from Sun'
      keyValue = item?.distance
    } else if (item?.country !== undefined) {
      keyLabel = 'Role / Country'
      keyValue = `${item?.role} // ${item?.country}`
    } else if (item?.progress !== undefined) {
      keyLabel = 'Mission Status'
      keyValue = `${item?.status} // ${item?.year}`
    } else if (item?.classification !== undefined) {
      keyLabel = 'Distance from Earth'
      keyValue = item?.distance
    }

    gridDetails = [
      { label: keyLabel, value: keyValue },
      { label: 'Connection Status', value: <span className="text-green-500">Stable</span> }
    ]
  }

  // Determine if it needs image special handling (fallback to standard if missing image)
  const imageUrl = item?.image || 'https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg'

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="system-border max-w-5xl w-full bg-background overflow-hidden relative shadow-2xl my-4 sm:my-0"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 z-20 text-on-surface-variant hover:text-primary transition-all text-2xl sm:text-3xl bg-background/60 backdrop-blur-sm rounded-full p-1 sm:p-0"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Image side */}
              <div className="lg:w-2/5 h-64 sm:h-80 lg:h-auto lg:min-h-[500px] flex flex-col justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-outline">
                <img
                  src={imageUrl}
                  alt={item.name}
                  className={category === 'Planetary Node' ? "w-full my-auto object-cover max-h-full" : "w-full h-full object-cover"}
                />
              </div>

              {/* Content side */}
              <div className="lg:w-3/5 p-6 sm:p-10 lg:p-16">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-8">
                  <span className="text-[10px] sm:text-xs font-mono text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                    {category}
                  </span>
                  <div className="h-px grow bg-outline" />
                </div>

                <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 sm:mb-8">
                  {item.name}
                </h2>

                <p className="text-on-surface-variant text-base sm:text-lg font-light mb-8 sm:mb-12 leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-6 sm:gap-12 mb-8 sm:mb-12 border-y border-outline py-6 sm:py-12">
                  {gridDetails.map((detail, index) => (
                    <div key={index}>
                      <p className="text-[10px] sm:text-xs font-mono text-on-surface-variant/70 uppercase mb-1 sm:mb-2">
                        {detail.label}
                      </p>
                      <p className="font-headline text-base sm:text-xl">{detail.value}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-[10px] sm:text-xs font-mono text-primary/80 uppercase mb-2 sm:mb-3">
                    Auxiliary Data (Fun Fact)
                  </p>
                  <p className="text-sm font-light italic leading-relaxed text-on-surface-variant">
                    {item.funFact || 'Fact sequence initialized.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
