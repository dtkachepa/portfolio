// Shared section header: [section-tag] ———————————— [number]  (section 7.3)
export function SectionHeader({ tag, number }: { tag: string; number: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--accent)]">
        {tag}
      </span>
      <span className="h-px flex-1 bg-[var(--border)]" />
      <span className="font-mono-bold text-[20px] text-[var(--muted2)]">{number}</span>
    </div>
  )
}
