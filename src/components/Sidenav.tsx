'use client'

import { useState } from 'react'
import { useScrollSpy } from '@/hooks/useScrollSpy'

// Defined once (module scope) so the array reference is stable across renders
// and the IntersectionObserver effect doesn't re-subscribe on every render.
const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const

const SECTION_IDS = SECTIONS.map((s) => s.id) as unknown as string[]

// Placeholder social links — candidate to fill (section 14)
const GITHUB_URL = 'https://github.com/dtkachepa'
const LINKEDIN_URL = 'https://www.linkedin.com/in/dtkachepa'
const EMAIL = 'mailto:dtinashe96@gmail.com'

export function Sidenav() {
  const activeId = useScrollSpy(SECTION_IDS)
  // Site loads in dark mode by default (section 2); no persistence required.
  const [light, setLight] = useState(false)

  const toggleTheme = () => {
    const next = !light
    setLight(next)
    document.documentElement.classList.toggle('light', next)
  }

  return (
    <nav
      className="fixed left-0 top-0 z-50 flex h-screen w-[56px] flex-col items-center
                 border-r border-[var(--border)] bg-[var(--bg)] py-5
                 transition-colors duration-300"
    >
      {/* 1. Logo mark */}
      <a
        href="#home"
        aria-label="Home"
        className="font-mono text-[13px] font-bold text-[var(--accent)]
                   [writing-mode:vertical-rl] tracking-[0.18em]"
      >
        DTK
      </a>

      {/* 2. Navigation dots — centered, separated by 1px lines */}
      <div className="flex flex-1 flex-col items-center justify-center gap-0">
        {SECTIONS.map((section, i) => {
          const isActive = activeId === section.id
          return (
            <div key={section.id} className="flex flex-col items-center">
              <a
                href={`#${section.id}`}
                aria-label={section.label}
                aria-current={isActive ? 'true' : undefined}
                className="group relative flex items-center justify-center py-2.5"
              >
                {/* Dot */}
                <span
                  className={`block h-[11px] w-[11px] rounded-full border transition-colors duration-300 ${
                    isActive
                      ? 'border-[var(--accent)] bg-[var(--accent)] animate-[bounceDot_0.4s_ease]'
                      : 'border-[var(--border2)] bg-transparent group-hover:border-[var(--accent)]'
                  }`}
                />
                {/* Slide-in tooltip label */}
                <span
                  className="pointer-events-none absolute left-full ml-3 -translate-x-1 whitespace-nowrap
                             rounded border border-[var(--border)] bg-[var(--bg2)] px-2 py-1
                             font-mono text-[13px] uppercase tracking-[0.12em] text-[var(--accent)]
                             opacity-0 transition-all duration-200
                             group-hover:translate-x-0 group-hover:opacity-100"
                >
                  {section.label}
                </span>
              </a>
              {/* 1px connector line between dots (not after the last) */}
              {i < SECTIONS.length - 1 && (
                <span className="h-3 w-px bg-[var(--border)]" />
              )}
            </div>
          )
        })}
      </div>

      {/* 3. Social icons */}
      <div className="flex flex-col items-center gap-4 pb-3">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-[var(--muted2)] transition-colors duration-300 hover:text-[var(--accent)]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5Z" />
          </svg>
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-[var(--muted2)] transition-colors duration-300 hover:text-[var(--accent)]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
          </svg>
        </a>
        <a
          href={EMAIL}
          aria-label="Email"
          className="text-[var(--muted2)] transition-colors duration-300 hover:text-[var(--accent)]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m2 6 10 7 10-7" />
          </svg>
        </a>
      </div>

      {/* 4. Theme toggle */}
      <button
        onClick={toggleTheme}
        aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
        className="flex h-[30px] w-[30px] items-center justify-center rounded-md
                   border border-[var(--border)] text-[var(--muted2)]
                   transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        {light ? (
          // Sun icon (shown in light mode)
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        ) : (
          // Moon icon (shown in dark mode)
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
          </svg>
        )}
      </button>
    </nav>
  )
}
