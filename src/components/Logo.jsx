import { Link } from 'react-router-dom'

// Files in /public need the site's base path (the site is served from /samarpita/)
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export function LogoMark({ className = 'h-11 w-11', size = 96 }) {
  return (
    <img
      src={asset(`brand/logo-${size}.webp`)}
      alt="Samarpita logo"
      width={size}
      height={size}
      className={`rounded-full bg-white object-contain shadow-sm ring-1 ring-black/5 ${className}`}
    />
  )
}

export default function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3 text-ink" aria-label="Samarpita home">
      <LogoMark className="h-11 w-11 transition-transform duration-700 ease-[var(--ease-premium)] group-hover:rotate-[360deg]" />
      <span className="leading-none">
        <span className="block font-display text-[26px] tracking-tight">Samarpita</span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-muted">Social Foundation Trust</span>
      </span>
    </Link>
  )
}
