import { Sparkle } from '@phosphor-icons/react'

export default function Marquee({ items, className = '' }) {
  const row = [...items, ...items]
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="marquee-track inline-flex">
        {row.map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8 font-display text-4xl sm:text-6xl">
            {t}
            <Sparkle weight="fill" className="h-6 w-6 text-saffron" />
          </span>
        ))}
      </div>
    </div>
  )
}
