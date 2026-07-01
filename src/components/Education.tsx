'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { fadeUpVariants, staggerContainer, inViewport } from './motion'

type Edu = {
  icon: string
  degree: string
  school: string
  meta: string[]
  badge: string
  primary?: boolean
}

const ENTRIES: Edu[] = [
  {
    icon: 'YU',
    degree: 'MSc in Artificial Intelligence',
    school: 'Yeshiva University · Katz School of Science and Health · New York, NY',
    meta: [
      'GPA 3.83',
      'Machine Learning · Deep Learning · Reinforcement Learning',
      'NLP · Cloud Computing · Computational Statistics',
    ],
    badge: 'graduated',
    primary: true,
  },
  {
    icon: 'CIU',
    degree: 'BSc in Electrical and Electronics Engineering',
    school: 'Cyprus International University · Nicosia, Cyprus',
    meta: ['Graduated with distinction'],
    badge: 'class valedictorian',
  },
]

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-16">
        <SectionHeader tag="education" number="02" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="flex flex-col gap-4"
        >
          {ENTRIES.map((e) => (
            <motion.div
              key={e.icon}
              variants={fadeUpVariants}
              className="group flex gap-4 rounded-[10px] border bg-[var(--card)] px-6 py-5 transition-colors duration-300 hover:border-[var(--border2)]"
              style={{
                borderColor: e.primary ? 'rgba(96,168,232,0.3)' : 'var(--border)',
              }}
            >
              {/* Icon block */}
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border font-mono text-[11px] font-bold text-[var(--accent)]"
                style={{
                  background: 'rgba(96,168,232,0.1)',
                  borderColor: 'rgba(96,168,232,0.3)',
                }}
              >
                {e.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-1 flex items-start justify-between gap-3">
                  <h3 className="text-[15px] font-bold text-[var(--heading)]">{e.degree}</h3>
                  <span
                    className="shrink-0 rounded-[20px] px-2.5 py-1 font-mono text-[13px] text-[var(--accent)]"
                    style={{ background: 'rgba(96,168,232,0.1)' }}
                  >
                    {e.badge}
                  </span>
                </div>
                <p className="mb-2 font-mono text-[13px] text-[var(--accent)]">{e.school}</p>
                <div className="space-y-0.5 text-base font-normal leading-7 text-[var(--muted2)]">
                  {e.meta.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
