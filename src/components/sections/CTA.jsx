

export function CTA() {
  return (
    <section className="py-24 border-t border-outline">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 text-center">
        <div
        >
          <h2 className="font-headline text-3xl font-light mb-6">
            Ready to <span className="font-bold">Explore?</span>
          </h2>
          <p className="text-on-surface-variant font-body font-light max-w-lg mx-auto mb-10 leading-relaxed">
            The cosmos is vast and full of wonders. Start your journey through the stars and discover the unknown.
          </p>
          <a
            href="#categories"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-on-primary font-body text-sm font-bold uppercase tracking-[0.15em] rounded-lg hover:bg-primary-dim transition-colors duration-300 accent-glow-strong"
          >
            Start Exploring
          </a>
        </div>
      </div>
    </section>
  )
}
