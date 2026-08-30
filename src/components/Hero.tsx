'use client'

import { motion } from 'framer-motion'
import { Typewriter } from './Typewriter'
import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="home"
      className="hero-bg relative flex min-h-screen items-center overflow-hidden py-20"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-10 px-6 sm:px-16 md:flex-row">
        {/* LEFT COLUMN — content */}
        <div className="flex-1">
          {/* 1. Availability badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
            className="mb-8 inline-flex items-center gap-2 rounded-[20px] border px-3 py-1.5"
            style={{
              background: 'rgba(96,168,232,0.08)',
              borderColor: 'rgba(96,168,232,0.2)',
            }}
          > */}
            {/* Ping dot */}
            {/* <span className="relative flex h-[7px] w-[7px]">
              <span className="absolute inline-flex h-[7px] w-[7px] rounded-full bg-[var(--accent)] animate-[ping_1.4s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[var(--accent)]" />
            </span>
            <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-[var(--accent)]">
              open to work
            </span>
          </motion.div> */}

          {/* 2. Integral expression — [AI] [∫] [EE]  +  name as integrand */}
          <div className="mb-6 flex items-center gap-5">
            {/* Bounds column */}
            <div className="flex flex-col items-center leading-none">
              <span className="font-mono text-[10px] font-bold text-[var(--accent)] xs:text-[12px] sm:text-[13px] lg:text-[14px]">
                AI
              </span>
              <span
                className="font-light leading-none text-[var(--accent)] text-[65px] xs:text-[78px] sm:text-[90px] lg:text-[115px]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                ∫
              </span>
              <span className="mt-[6px] font-mono text-[10px] font-bold text-[var(--accent)] xs:text-[12px] sm:text-[13px] lg:text-[14px]">
                EE
              </span>
            </div>

            {/* Name (integrand) — two stacked lines */}
            <div className="flex flex-col leading-[1.02]">
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16, ease: 'easeOut' }}
                className="text-[40px] font-black leading-none tracking-tighter whitespace-nowrap text-[var(--heading)] xs:text-[50px] sm:text-[60px] lg:text-[80px]"
              >
                Dickson Tinashe
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                data-text="Kachepa"
                className="shimmer-name text-[40px] font-black leading-none tracking-tighter xs:text-[50px] sm:text-[60px] lg:text-[80px]"
              >
                Kachepa
              </motion.span>
            </div>
          </div>

          {/* 3. Typewriter roles */}
          <Typewriter />

          {/* 4. Buttons */}
          <div className="flex gap-3">
            <a
              href="#contact"
              className="rounded border border-[var(--border)] px-4 py-2.5 font-mono text-[13px] font-bold tracking-[0.06em] text-[var(--muted2)] transition-colors duration-200 hover:border-[var(--border2)] hover:text-[var(--accent)]"
            >
              get_in_touch
            </a>
            <a
              href="/cv.pdf"
              download
              className="rounded border border-[var(--border)] px-4 py-2.5 font-mono text-[13px] font-bold tracking-[0.06em] text-[var(--muted2)] transition-colors duration-200 hover:border-[var(--border2)] hover:text-[var(--accent)]"
            >
              download_resume
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN — photo + availability badge */}
        <div className="flex shrink-0 flex-col items-center gap-5">
          <div className="relative">
            {/* Outer glow ring */}
            <span className="pointer-events-none absolute -inset-2 rounded-full border border-[rgba(96,168,232,0.12)]" />
            {/* Photo / placeholder */}
            <div className="flex h-[280px] w-[280px] flex-col items-center justify-center overflow-hidden rounded-full border-4 border-[var(--accent)] bg-[var(--bg3)] md:h-[400px] md:w-[400px]">
              <Image
                src="/pic.jpg"
                alt="Dickson Tinashe Kachepa"
                width={400}
                height={400}
                priority
                className="h-full w-full object-cover object-[50%_10%]"
              />
            </div>
          </div>

          {/* Availability badge — same style as the top-left badge, 16px text */}
          <div
            className="inline-flex items-center gap-2 rounded-[20px] border px-4 py-1.5"
            style={{
              background: 'rgba(96,168,232,0.08)',
              borderColor: 'rgba(96,168,232,0.2)',
            }}
          >
            {/* Ping dot */}
            <span className="relative flex h-[7px] w-[7px]">
              <span className="absolute inline-flex h-[7px] w-[7px] rounded-full bg-[var(--accent)] animate-[ping_1.4s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[var(--accent)]" />
            </span>
            <span className="font-mono text-base uppercase tracking-[0.12em] text-[var(--accent)]">
              open to work
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
