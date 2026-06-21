import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IoArrowUpSharp } from "react-icons/io5";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-surface border border-outline text-on-surface-variant hover:bg-primary hover:text-white transition-all duration-300 active:brightness-90"
        >
          <IoArrowUpSharp size={18}/>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
