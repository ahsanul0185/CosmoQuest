

import { useScrollReveal } from '../../hooks/useScrollReveal'

export function CTA() {
  const { headingRef } = useScrollReveal()
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto relative rounded-[2.5rem] overflow-hidden bg-primary px-6 py-20 lg:py-28 text-center shadow-2xl">
        {/* Background Glass and Glow Effects */}
        <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-black/40 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.15),transparent_50%)]"></div>
        
        {/* Content */}
        <div ref={headingRef} className="relative z-10 flex flex-col items-center">
          <p className="text-on-primary/80 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            Initialize Sequence
          </p>
          <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-light text-on-primary tracking-tight mb-6">
            Ready to <span className="font-bold">Explore?</span>
          </h2>
          <p className="text-on-primary/90 font-light text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            The cosmos is vast and full of wonders. Start your journey through the stars and discover the unknown.
          </p>
          
          <a
            href="#categories"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-background text-primary font-body text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:bg-surface-bright transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 text-glow-subtle">Start Exploring</span>
          </a>
        </div>
      </div>
    </section>
  )
}
