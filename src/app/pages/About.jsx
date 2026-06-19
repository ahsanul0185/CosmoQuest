import { motion } from 'motion/react'

export function About() {
  return (
    <motion.section
      id="center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <h1>About</h1>
        <p>This page demonstrates the app router setup.</p>
      </div>
    </motion.section>
  )
}
