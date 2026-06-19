import { forwardRef } from 'react'

export const SectionHeader = forwardRef(({ title, highlight, children }, ref) => {
  return (
    <div ref={ref} className="flex items-center gap-6 mb-12">
      <h2 className="font-headline text-4xl font-light whitespace-nowrap">
        {title} <span className="font-bold">{highlight}</span>
      </h2>
      <div className="h-px grow bg-linear-to-r from-outline to-transparent" />
    </div>
  )
})

SectionHeader.displayName = 'SectionHeader'
