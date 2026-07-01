'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { fadeUpVariants, staggerContainer, inViewport } from './motion'

type Bubble = {
  name: string
  icon: string
  anim: 'float' | 'floatB' | 'floatC'
  duration: string
  delay: string
}

// Animation timings per section 6.6
const BUBBLES: Bubble[] = [
  { name: 'Python', icon: 'devicon-python-plain colored', anim: 'float', duration: '3.2s', delay: '0s' },
  { name: 'PyTorch', icon: 'devicon-pytorch-plain colored', anim: 'floatB', duration: '4.1s', delay: '0s' },
  { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored', anim: 'float', duration: '3.7s', delay: '0.4s' },
  { name: 'Scikit-Learn', icon: 'devicon-scikitlearn-plain colored', anim: 'floatC', duration: '4.8s', delay: '0.2s' },
  { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored', anim: 'float', duration: '3.4s', delay: '0.6s' },
  { name: 'Pandas', icon: 'devicon-pandas-plain colored', anim: 'floatB', duration: '3.9s', delay: '0.1s' },
  { name: 'SQL', icon: 'devicon-mysql-plain colored', anim: 'floatC', duration: '4.3s', delay: '0.8s' },
  { name: 'Git', icon: 'devicon-git-plain colored', anim: 'float', duration: '3.6s', delay: '0.3s' },
  { name: 'R', icon: 'devicon-r-plain colored', anim: 'floatB', duration: '4.5s', delay: '0.5s' },
  { name: 'Matplotlib', icon: 'devicon-matplotlib-plain colored', anim: 'float', duration: '3.3s', delay: '0.7s' },
]

export function Technologies() {
  return (
    <section id="technologies" className="py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-16">
        <SectionHeader tag="technologies" number="04" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="mx-auto grid max-w-[820px] grid-cols-5 place-items-center gap-35"
        >
          {BUBBLES.map((b) => (
            <motion.div
              key={b.name}
              variants={fadeUpVariants}
              title={b.name}
              className="group flex h-30 w-30 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:scale-110 hover:border-[var(--accent)]"
              style={{ animation: `${b.anim} ${b.duration} ease-in-out ${b.delay} infinite` }}
            >
              <i className={b.icon} style={{ fontSize: '50px' }} aria-label={b.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
