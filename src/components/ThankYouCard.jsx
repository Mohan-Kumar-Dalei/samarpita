import { forwardRef, useId } from 'react'
import { CornerFlourish, Lotus, GoldDivider } from './Floral'
import { LogoMark } from './Logo'
import OdiaWord from './OdiaWord'

const fmt = (iso) =>
  iso ? new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : ''

const goldText = 'bg-[linear-gradient(180deg,#fff3c4_0%,#f7c408_40%,#b8860b_62%,#f9dc6e_85%)] bg-clip-text text-transparent'

// Luxury thank-you card for a blood donor. `compact` is the small version used on the heroes wall.
const ThankYouCard = forwardRef(function ThankYouCard({ name, group, district, donatedAt, compact = false }, ref) {
  const id = useId().replace(/:/g, '')
  return (
    <div
      ref={ref}
      className={`relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_top,#14502a_0%,#0b3318_45%,#051a0c_100%)] text-[#f6efd9] ${
        compact ? 'aspect-[4/5] rounded-[1.5rem] p-5' : 'aspect-[4/5] w-full max-w-[520px] rounded-[2rem] p-8'
      }`}
    >
      {/* double gold frame */}
      <div className={`pointer-events-none absolute rounded-[inherit] border border-[#f7c408]/60 ${compact ? 'inset-2.5' : 'inset-4'}`} />
      <div className={`pointer-events-none absolute rounded-[inherit] border border-[#f7c408]/25 ${compact ? 'inset-4' : 'inset-6'}`} />
      {['tl', 'tr', 'bl', 'br'].map((c) => (
        <CornerFlourish
          key={c}
          id={`${id}${c}`}
          flip={c}
          className={`pointer-events-none absolute ${compact ? 'h-20 w-20' : 'h-36 w-36'} ${
            { tl: 'left-1 top-1', tr: 'right-1 top-1', bl: 'bottom-1 left-1', br: 'bottom-1 right-1' }[c]
          }`}
        />
      ))}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(247,196,8,0.14),transparent)]" />

      <div className="relative flex h-full flex-col items-center justify-between text-center">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className={`absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(247,196,8,0.45),transparent)] ${compact ? 'scale-[1.7]' : 'scale-[1.8]'}`} />
            <LogoMark
              size={compact ? 96 : 192}
              className={`relative shadow-[0_0_0_2px_#f7c408,0_0_0_5px_rgba(247,196,8,0.25)] ${compact ? 'h-12 w-12' : 'h-20 w-20'}`}
            />
          </div>
          <Lotus id={`${id}l`} className={compact ? '-mt-1 w-10' : '-mt-1 w-16'} />
          <p className={`mt-1 font-semibold uppercase tracking-[0.32em] text-[#f7c408]/90 ${compact ? 'text-[8px]' : 'text-[11px]'}`}>
            With heartfelt gratitude
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className={`font-display italic leading-none ${goldText} ${compact ? 'text-5xl' : 'text-7xl sm:text-8xl'}`}>Thank you</p>
          <GoldDivider id={`${id}d`} className={compact ? 'my-2 w-28' : 'my-4 w-48'} />
          <p className={`font-display leading-tight ${compact ? 'text-2xl' : 'text-4xl sm:text-5xl'}`}>{name}</p>
          {!compact && (
            <p className="mt-4 max-w-[340px] text-[14px] leading-relaxed text-[#f6efd9]/75">
              for donating blood and giving the precious gift of life to someone in need. Your kindness keeps a heart beating.
            </p>
          )}
          <div className={`flex items-center gap-3 ${compact ? 'mt-3' : 'mt-6'}`}>
            <span
              className={`grid place-items-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#ff6b6e,#b3141a)] font-display text-white shadow-[0_0_0_2px_rgba(247,196,8,0.6)] ${
                compact ? 'h-10 w-10 text-lg' : 'h-14 w-14 text-2xl'
              }`}
            >
              {group}
            </span>
            <span className={`text-left leading-tight text-[#f6efd9]/70 ${compact ? 'text-[11px]' : 'text-[13px]'}`}>
              {district && <b className="block font-semibold text-[#f6efd9]">{district}, Odisha</b>}
              {fmt(donatedAt)}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <OdiaWord className={`${compact ? 'text-2xl' : 'text-4xl'} text-[#f7c408]`} />
          <p className={`uppercase tracking-[0.24em] text-[#f6efd9]/60 ${compact ? 'text-[7px]' : 'text-[10px]'}`}>Samarpita Social Foundation Trust</p>
        </div>
      </div>
    </div>
  )
})

export default ThankYouCard
