'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { fadeUpVariants, staggerContainer, inViewport } from './motion'

type Job = {
  years: string
  role: string
  company: string
  details: string[]
  active?: boolean
}

const JOBS: Job[] = [
  {
    years: '2026 — Present',
    role: 'AI Developer',
    company: 'MatchingDonors · US',
    details: [
      'Developing an AI-assisted platform for personalized transplant patient microsites and donor outreach',
      'Working with LLMs, RAG, structured outputs, API integration, and human-in-the-loop AI workflows',
    ],
    active: true,
  },
  {
    years: '2019 — 2024',
    role: 'Electrical Engineer',
    company: 'Events Evolution · Harare, Zimbabwe',
    details: [
      'Designed and managed power systems for 25+ live events/year.',
      'Maintained 95%+ uptime via real-time troubleshooting.',
      'Zero major safety incidents.',
    ],
  },
  {
    years: 'Jun–Sep 2017',
    role: 'EE Intern',
    company: 'Tobacco Processors Zimbabwe',
    details: [
      'SCADA systems, HMIs, and electric motor operations',
      'under full safety and environmental compliance.',
    ],
  },
  {
    years: 'Jun–Sep 2016',
    role: 'EE Intern',
    company: 'Unki Mine · Shurugwi, Zimbabwe',
    details: [
      'VSD, electric motor and SCADA system operations.',
      'Strict adherence to safety, health and environmental regulations.',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-16">
        <SectionHeader tag="experience" number="05" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
        >
          {JOBS.map((job, i) => {
            const last = i === JOBS.length - 1
            return (
              <motion.div key={job.role + job.years} variants={fadeUpVariants} className="group flex gap-4">
                {/* Year column */}
                <div className="w-[112px] shrink-0 pt-0.5 text-right font-mono text-[13px] text-[var(--muted2)]">
                  {job.years}
                </div>

                {/* Dot + connecting line */}
                <div className="flex flex-col items-center">
                  <span
                    className={`mt-0.5 h-[9px] w-[9px] shrink-0 rounded-full border-2 bg-transparent transition-colors duration-300 group-hover:bg-[var(--accent)] ${
                      job.active ? 'border-[var(--accent)]' : 'border-[var(--border)]'
                    }`}
                  />
                  {!last && <span className="w-px flex-1 bg-[var(--border)]" />}
                </div>

                {/* Content */}
                <div className={`flex-1 ${last ? 'pb-0' : 'pb-9'}`}>
                  <h3 className="text-[15px] font-bold text-[var(--heading)]">{job.role}</h3>
                  <p className="mb-1.5 font-mono text-[13px] text-[var(--accent)]">{job.company}</p>
                  <div className="space-y-0.5 text-base font-normal leading-7 text-[var(--muted2)]">
                    {job.details.map((d) => (
                      <p key={d}>{d}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
