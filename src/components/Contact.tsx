'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { fadeUpVariants, staggerContainer, inViewport } from './motion'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgojalkq'

const inputClass =
  'w-full rounded-md border border-[var(--border)] bg-[var(--bg2)] px-3.5 py-2.5 text-[12px] text-[var(--heading)] outline-none transition-colors duration-200 focus:border-[var(--accent)]'

const labelClass =
  'mb-1.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--accent)]'

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-16">
        <SectionHeader tag="contact" number="06" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="max-w-[520px]"
        >
          <motion.p
            variants={fadeUpVariants}
            className="mb-6 text-base font-normal leading-7 text-[var(--muted2)]"
          >
            Whether you&apos;re looking for an ML engineer, want to discuss a collaboration, or just
            want to talk AI — drop me a message and I&apos;ll get back to you.
          </motion.p>

          <motion.form
            variants={fadeUpVariants}
            action={FORMSPREE_ENDPOINT}
            method="POST"
            className="space-y-4"
          >
            {/* Row 1 — Name + Email */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  {'// name'}
                </label>
                <input id="name" name="name" type="text" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  {'// email'}
                </label>
                <input id="email" name="email" type="email" required className={inputClass} />
              </div>
            </div>

            {/* Row 2 — Message */}
            <div>
              <label htmlFor="message" className={labelClass}>
                {'// message'}
              </label>
              <textarea
                id="message"
                name="message"
                required
                className={`${inputClass} h-[90px] resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-md bg-[var(--btn)] py-[11px] font-mono text-[12px] font-bold text-white transition-colors duration-200 hover:bg-[var(--btnH)]"
            >
              send_message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
