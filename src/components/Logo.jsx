import { Link } from 'react-router-dom'

export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="18" fill="currentColor" />
      <path d="M32 13c4.5 6 6.5 12.5 6.5 19S36.5 45 32 51c-4.5-6-6.5-12.5-6.5-19S27.5 19 32 13Z" fill="#E2702A" />
      <path d="M32 51c-8.5-2-14.5-8.5-16.5-18.5 8.5 0 14.5 4.5 16.5 10.5 2-6 8-10.5 16.5-10.5C46.5 42.5 40.5 49 32 51Z" fill="#F7F1E8" />
    </svg>
  )
}

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`group flex items-center gap-3 ${light ? 'text-cream' : 'text-ink'}`} aria-label="Samarpita home">
      <LogoMark className={`h-10 w-10 transition-transform duration-700 ease-[var(--ease-premium)] group-hover:rotate-[360deg] ${light ? 'text-forest' : 'text-ink'}`} />
      <span className="leading-none">
        <span className="block font-display text-[26px] tracking-tight">Samarpita</span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.28em] ${light ? 'text-cream/60' : 'text-muted'}`}>Seva hi Samarpan</span>
      </span>
    </Link>
  )
}
