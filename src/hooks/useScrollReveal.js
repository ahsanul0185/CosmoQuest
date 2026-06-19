import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(options = { mode: 'stagger' }) {
  const headingRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fade in
      if (headingRef.current) {
        gsap.set(headingRef.current, { opacity: 0, y: 24 })
        gsap.to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 75%',
          },
        })
      }

      const mode = options?.mode || 'stagger'

      if (gridRef.current && gridRef.current.children.length > 0) {
        if (mode === 'individual') {
          // Children reveal individually as they scroll into view
          const cards = Array.from(gridRef.current.children)
          cards.forEach((card) => {
            gsap.set(card, { opacity: 0, y: 80 })
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
              clearProps: 'willChange',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
              },
            })
          })
        } else {
          // Children stagger in
          const cards = gridRef.current.children
          gsap.set(cards, { opacity: 0, y: 80 })
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.13,
            ease: 'power2.out',
            clearProps: 'willChange',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 65%',
            },
          })
        }
      }
    })

    return () => ctx.revert()
  }, [options?.mode])

  return { headingRef, gridRef }
}
