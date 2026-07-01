import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * A section becomes "active" once `threshold` (default 30%) of it is visible.
 */
export function useScrollSpy(ids: string[], threshold = 0.3) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, threshold])

  return activeId
}
