import { motion, AnimatePresence } from 'motion/react'

export function Modal({ item, onClose }) {
  const isPlanet = item?.moons !== undefined
  const isAstronaut = item?.country !== undefined
  const isMission = item?.progress !== undefined
  const isGalaxy = item?.classification !== undefined

  let category = 'Node Explorer'
  if (isPlanet) category = 'Planetary Node'
  if (isAstronaut) category = 'Personnel Record'
  if (isMission) category = 'Mission Protocol'
  if (isGalaxy) category = 'Deep Space Object'

  let keyLabel = 'Primary Telemetry'
  let keyValue = item?.distance || item?.role || item?.status || item?.detail || 'Analyzing...'

  if (isPlanet) {
    keyLabel = 'Distance from Sun'
    keyValue = item.distance
  } else if (isAstronaut) {
    keyLabel = 'Role / Country'
    keyValue = `${item.role} // ${item.country}`
  } else if (isMission) {
    keyLabel = 'Mission Status'
    keyValue = `${item.status} // ${item.year}`
  } else if (isGalaxy) {
    keyLabel = 'Distance from Earth'
    keyValue = item.distance
  }

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex items-center justify-center p-6"
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
              <div className="lg:w-2/5 h-80 lg:h-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-outline">
                <img
                  src={item.image || 'https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg'}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content side */}
              <div className="lg:w-3/5 p-12 lg:p-20 overflow-y-auto max-h-[70vh] lg:max-h-none">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">
                    {category}
                  </span>
                  <div className="h-[1px] flex-grow bg-outline" />
                </div>

                <h2 className="font-headline text-5xl font-bold tracking-tighter mb-8">
                  {item.name}
                </h2>

                <p className="text-on-surface-variant text-lg font-light mb-12 leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-12 mb-12 border-y border-outline py-12">
                  <div>
                    <p className="text-[9px] font-mono text-outline uppercase mb-2">
                      {keyLabel}
                    </p>
                    <p className="font-headline text-xl">{keyValue}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-outline uppercase mb-2">
                      Connection Status
                    </p>
                    <p className="font-headline text-xl text-green-500">Stable</p>
                  </div>
                </div>

                <div>
                  <p className="text-[9px] font-mono text-primary uppercase mb-3">
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
