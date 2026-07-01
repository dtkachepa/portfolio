import type { Variants } from 'framer-motion'

// Shared Framer Motion variants (section 6.2).
// Section wrappers use `whileInView` with viewport={{ once: true, amount: 0.2 }}.
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// Standard viewport config reused by every section.
export const inViewport = { once: true, amount: 0.2 } as const
