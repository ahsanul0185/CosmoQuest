import { useEffect } from 'react'
import Lenis from 'lenis'

// Tell the browser not to touch scroll position on refresh/navigation.
// We manage it ourselves below using sessionStorage.
if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    // Restore saved scroll position (saved in beforeunload below).
    // We use sessionStorage so it only persists within one browser tab session.
    const saved = parseInt(sessionStorage.getItem('cosmoScrollPos') || '0', 10)
    sessionStorage.removeItem('cosmoScrollPos')
    if (saved > 0) {
      lenis.scrollTo(saved, { immediate: true })
    }

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Save position just before the page unloads so we can restore it above.
    const handleBeforeUnload = () => {
      sessionStorage.setItem('cosmoScrollPos', String(Math.round(window.scrollY)))
    }
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      lenis.destroy()
    }
  }, [])
}

