'use client'
import { useEffect, useState } from 'react'

const roles = [
  'Electrical Engineer',
  'AI Engineer',
  'ML Engineer',
  'Data Scientist',
  'Drone Pilot',
]

const TYPE_SPEED = 70
const DELETE_SPEED = 38
const PAUSE_TICKS = 36
const GAP_AFTER = 300

export function Typewriter() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [pause, setPause] = useState(0)

  const word = roles[roleIdx]
  // `displayed` is fully derived from the word + char count — compute it in
  // render rather than storing redundant state in the effect.
  const displayed = word.slice(0, charIdx)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && pause === 0) {
      if (charIdx < word.length) {
        timeout = setTimeout(() => setCharIdx((c) => c + 1), TYPE_SPEED)
      } else {
        timeout = setTimeout(() => setPause(PAUSE_TICKS), 100)
      }
    } else if (!deleting && pause > 0) {
      timeout = setTimeout(() => {
        setPause((p) => p - 1)
        if (pause === 1) setDeleting(true)
      }, 100)
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx((c) => c - 1), DELETE_SPEED)
      } else {
        timeout = setTimeout(() => {
          setDeleting(false)
          setRoleIdx((i) => (i + 1) % roles.length)
        }, GAP_AFTER)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, pause, roleIdx, word])

  return (
    <div className="flex items-center h-5 mb-7">
      <span className="text-[var(--border2)] font-mono text-xs mr-0.5">&gt;&nbsp;</span>
      <span className="text-[var(--accent)] font-mono text-xs font-semibold tracking-[0.04em]">
        {displayed}
      </span>
      <span className="inline-block w-0.5 h-3.5 bg-[var(--accent)] ml-0.5 animate-[blink_0.8s_step-end_infinite]" />
    </div>
  )
}
