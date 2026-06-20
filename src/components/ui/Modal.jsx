import { motion, AnimatePresence } from 'motion/react'

export function Modal({ item, onClose }) {
  // Determine Category safely
  let category = item?.category || 'Database Record'
  if (!item?.category) {
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
          className="fixed inset-0 z-100 bg-background/95 backdrop-blur-2xl flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="system-border max-w-5xl w-full bg-background overflow-hidden relative shadow-2xl max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 z-20 text-on-surface-variant hover:text-primary transition-all text-3xl"
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

            <div className="flex flex-col lg:flex-row h-full">
              {/* Image side */}
              <div className="lg:w-2/5 h-80 flex flex-col justify-center lg:h-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-outline">
                <img
                  src={imageUrl}
                  alt={item.name}
                  className="w-full my-auto object-cover max-h-full"
                />
              </div>

              {/* Content side */}
              <div className="lg:w-3/5 p-12 lg:p-20 overflow-y-auto max-h-[70vh] lg:max-h-none">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">
                    {category}
                  </span>
                  <div className="h-px grow bg-outline" />
                </div>

                <h2 className="font-headline text-5xl font-bold tracking-tighter mb-8">
                  {item.name}
                </h2>

                <p className="text-on-surface-variant text-lg font-light mb-12 leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-12 mb-12 border-y border-outline py-12">
                  {gridDetails.map((detail, index) => (
                    <div key={index}>
                      <p className="text-xs font-mono text-on-surface-variant/70 uppercase mb-2">
                        {detail.label}
                      </p>
                      <p className="font-headline text-xl">{detail.value}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-xs font-mono text-primary/80 uppercase mb-3">
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
