'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { fadeUpVariants, staggerContainer, inViewport } from './motion'

const DOSE_PREDICTION_REPO =
  'https://github.com/dtkachepa/AI-and-Geometry-based-Dose-Prediction-for-Radiotherapy/tree/main'

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-16">
        <SectionHeader tag="projects" number="03" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="grid grid-cols-1 gap-3 md:grid-cols-2"
        >
          {/* Card 1 — FEATURED (whole card links to the repo) */}
          <motion.a
            variants={fadeUpVariants}
            href={DOSE_PREDICTION_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-[10px] border bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]"
            style={{ borderColor: 'rgba(96,168,232,0.3)' }}
          >
            {/* top gradient bar */}
            <span
              className="absolute inset-x-0 top-0 h-[3px]"
              style={{
                background:
                  'linear-gradient(90deg, var(--btn), var(--accent), var(--accent2))',
              }}
            />
            <div className="mb-2 flex items-center gap-2">
              <span className="relative flex h-[6px] w-[6px]">
                <span className="absolute inline-flex h-[6px] w-[6px] rounded-full bg-[var(--accent)] animate-[ping_1.4s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-[var(--accent)]" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
                medical imaging
              </span>
            </div>
            <h3 className="mb-2 text-[15px] font-bold text-[var(--heading)]">
              AI and Geometry based dose prediction for Radiotherapy
            </h3>
            <p className="mb-3 text-base font-normal leading-7 text-[var(--muted2)]">
              Enhanced a 3D medical imaging dose prediction framework in PyTorch by developing
              region-sensitive and DVH-aware loss functions, reducing dose prediction MAE by 1.26%
              on the OpenKBP head-and-neck radiotherapy dataset.
            </p>
            <TagRow
              tags={['PyTorch', 'Medical Imaging', 'Deep Learning', 'OpenKBP', 'Weights & Biases']}
              color="var(--accent2)"
            />
          </motion.a>

          {/* Card 2 — Computer Vision */}
          <motion.article
            variants={fadeUpVariants}
            className="group rounded-[10px] border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]"
          >
            <div className="mb-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
                computer vision
              </span>
            </div>
            <h3 className="mb-2 text-[15px] font-bold text-[var(--heading)]">
              Automatic image captioning
            </h3>
            <p className="mb-3 text-base font-normal leading-7 text-[var(--muted2)]">
              CNN encoder + LSTM decoder with Bahdanau attention for automatic image-to-text
              generation.
            </p>
            <TagRow tags={['CNN', 'LSTM', 'Attention']} color="var(--accent2)" />
          </motion.article>

          {/* Card 3 — AI Agents (sits in the left column, ~49% width) */}
          <motion.article
            variants={fadeUpVariants}
            className="group rounded-[10px] border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]"
          >
            <div className="mb-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
                AI agents
              </span>
            </div>
            <h3 className="mb-2 text-[15px] font-bold text-[var(--heading)]">
              Agentic task chatbot
            </h3>
            <p className="mb-3 text-base font-normal leading-7 text-[var(--muted2)]">
              Tool-using chatbot with dynamic tool selection and multi-step autonomous task
              execution.
            </p>
            <TagRow tags={['LLM', 'Tool use', 'Agents']} color="var(--accent2)"/>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}

function TagRow({ tags, color }: { tags: string[]; color: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px]" style={{ color }}>
      {tags.map((t, i) => (
        <span key={t} className="flex items-center gap-2">
          {i > 0 && <span className="opacity-40">·</span>}
          {t}
        </span>
      ))}
    </div>
  )
}
