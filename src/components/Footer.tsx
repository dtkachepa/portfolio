// Footer — plain copyright line + social text links.

const GITHUB_URL = 'https://github.com/dtkachepa'
const LINKEDIN_URL = 'https://www.linkedin.com/in/dtkachepa'
const EMAIL = 'mailto:dtinashe96@gmail.com'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--foot)] py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-16">
        {/* Left — copyright */}
        <div className="text-sm text-[var(--muted)]">
          © 2026 Dickson Kachepa. All rights reserved.
        </div>

        {/* Right — text links */}
        <div className="flex gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]"
          >
            github
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]"
          >
            linkedin
          </a>
          <a
            href={EMAIL}
            className="font-mono text-[10px] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]"
          >
            email
          </a>
        </div>
      </div>
    </footer>
  )
}
