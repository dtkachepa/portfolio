'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { fadeUpVariants, staggerContainer, inViewport } from './motion'

const PILLS = [
  'Machine Learning',
  'Deep learning',
  'NLP',
  'Computer vision',
  'Cloud computing',
  'Drone pilot',
  'NYRR runner',
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-16">
        <SectionHeader tag="about" number="01" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="grid grid-cols-1 gap-9 md:grid-cols-2"
        >
          {/* Left — narrative */}
          <motion.div
            variants={fadeUpVariants}
            className="space-y-4 text-base font-normal leading-7 text-[var(--muted2)]"
          >
            <p>
              I&apos;m an <strong className="text-[var(--accent2)] font-semibold">electrical engineer</strong> who
              spent years designing and running power systems for live events,
              work that taught me to think in systems, reason about failure modes, and
              ship reliable results under real-world pressure. That same instinct now drives my
              transition into <strong className="text-[var(--accent2)] font-semibold">machine learning and artificial intelligence</strong>.
            </p>
            <p>
              I recently completed a <strong className="text-[var(--accent2)] font-semibold">MSc in Artificial
              Intelligence </strong> at Yeshiva University&apos;s Katz School
              (<strong className="text-[var(--accent2)] font-semibold">GPA 3.83</strong>). I also hold a BSc in Electrical and
              Electronics Engineering which I graduated from Cyprus International University as the {' '}
              <strong className="text-[var(--accent2)] font-semibold">class valedictorian</strong> .
            </p>
            <p>
              Outside of engineering I&apos;m a <strong className="text-[var(--accent2)] font-semibold">New York Road
              Runners</strong> member chasing race-day PRs, and a {' '}
              <strong className="text-[var(--accent2)] font-semibold">RPAS drone pilot</strong>  because the best way
              to understand a system is to fly it yourself.
            </p>
          </motion.div>

          {/* Right — tag cloud */}
          <motion.div variants={fadeUpVariants} className="flex flex-wrap content-start gap-2.5">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="rounded-[20px] border px-3 py-1.5 font-mono text-[15px] text-[var(--accent)]"
                style={{
                  background: 'rgba(96,168,232,0.07)',
                  borderColor: 'rgba(96,168,232,0.15)',
                }}
              >
                {pill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
