

import { SectionHeader } from '../ui/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { factData } from '../../data/factData'

export function Facts() {
  const { headingRef, gridRef } = useScrollReveal({ mode: 'individual' })
  return (
    <section id="facts" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <SectionHeader ref={headingRef} title="Cosmic" highlight="Telemetry" />

        <div ref={gridRef} className="relative max-w-4xl mx-auto border-l border-outline pl-8 sm:pl-12 space-y-10 sm:space-y-16">
          {factData.map((fact, index) => (
            <div
              key={fact.id}
              className="relative"
            >
              <div
                className={`absolute left-[-37px] sm:left-[-53px] top-1 w-2.5 h-2.5 rounded-full ring-4 ring-background ${
                  fact.active
                    ? 'bg-primary'
                    : 'border border-outline bg-background'
                }`}
              />
              <p
                className={`text-[10px] sm:text-xs font-mono uppercase mb-1 sm:mb-2 ${
                  fact.active ? 'text-primary' : 'text-on-surface-variant/60'
                }`}
              >
                {fact.label}
              </p>
              <p className="font-headline text-lg sm:text-2xl font-light leading-snug">
                {fact.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
