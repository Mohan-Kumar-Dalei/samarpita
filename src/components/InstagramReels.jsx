import { useEffect, useRef, useState } from 'react'
import { InstagramLogo, ArrowUpRight, ArrowLeft, ArrowRight, Play } from '@phosphor-icons/react'
import SplitHeading from './SplitHeading'
import { LogoMark } from './Logo'
import { reels, site } from '../data/site'

const SCRIPT = 'https://www.instagram.com/embed.js'

// Loads Instagram's embed script only when the section scrolls near the screen
function useInstagramEmbeds(ref) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { rootMargin: '400px' })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [ref])
  useEffect(() => {
    if (!visible) return
    if (window.instgrm) {
      window.instgrm.Embeds.process()
      return
    }
    if (!document.querySelector(`script[src="${SCRIPT}"]`)) {
      const s = document.createElement('script')
      s.src = SCRIPT
      s.async = true
      document.body.appendChild(s)
    }
  }, [visible])
  return visible
}

// One reel inside a phone-style frame. The embed is cropped to the video so every card has the same size.
function ReelCard({ url, index, visible }) {
  return (
    <div className="group relative w-[300px] shrink-0 snap-center sm:w-[320px]">
      <div className="relative rounded-[2.4rem] bg-[linear-gradient(160deg,#1d6b2a,#0b3318_45%,#06100a)] p-[10px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] ring-1 ring-gold/40 transition-transform duration-500 group-hover:-translate-y-2">
        <div className="relative h-[540px] overflow-hidden rounded-[1.9rem] bg-white">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-night/90" />
          {/* Branded placeholder: shown until Instagram replaces the blockquote with the reel */}
          <a href={url} target="_blank" rel="noreferrer" className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(ellipse_at_top,#1d6b2a,#0b3318_55%,#06100a)] text-white">
            <LogoMark size={192} className="h-20 w-20 shadow-[0_0_0_3px_rgba(247,196,8,0.6)]" />
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/15 backdrop-blur">
              <Play size={28} weight="fill" />
            </span>
            <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">Watch reel</span>
          </a>
          {visible && (
            <div className="absolute inset-x-0 -top-[54px]">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                data-instgrm-version="14"
                style={{ background: 'transparent', border: 0, margin: 0, maxWidth: '100%', minWidth: 280, padding: 0, width: '100%', boxShadow: 'none' }}
              />
            </div>
          )}
          {/* bottom bar */}
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 bg-gradient-to-t from-night via-night/85 to-transparent px-4 pb-4 pt-10 text-white"
          >
            <span className="flex items-center gap-2">
              <LogoMark size={96} className="h-8 w-8" />
              <span className="text-left leading-tight">
                <b className="block text-[13px]">samar.pita2005</b>
                <span className="text-[11px] text-white/70">Reel {String(index + 1).padStart(2, '0')}</span>
              </span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[12px] font-semibold backdrop-blur">
              <Play weight="fill" /> Watch
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function InstagramReels() {
  const ref = useRef(null)
  const track = useRef(null)
  const visible = useInstagramEmbeds(ref)
  const scroll = (dir) => track.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">On Instagram</span>
            <SplitHeading lines={['Seva in *action*']} className="mt-5 text-[clamp(2.5rem,5.5vw,5rem)]" />
            <p className="mt-4 max-w-md leading-relaxed text-muted">Camps, drives and everyday seva from our team. Follow @samar.pita2005 for new reels.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => scroll(-1)} aria-label="Previous reels" className="grid h-12 w-12 place-items-center rounded-full border border-line transition-colors hover:bg-ink hover:text-cream">
              <ArrowLeft />
            </button>
            <button onClick={() => scroll(1)} aria-label="Next reels" className="grid h-12 w-12 place-items-center rounded-full border border-line transition-colors hover:bg-ink hover:text-cream">
              <ArrowRight />
            </button>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] px-6 py-3.5 font-semibold text-white shadow-lg"
            >
              <InstagramLogo size={22} weight="bold" /> Follow
              <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
      <div
        ref={track}
        className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-10 pt-6 [scrollbar-width:none] sm:px-8 lg:px-[max(3rem,calc((100vw-1320px)/2+3rem))] [&::-webkit-scrollbar]:hidden"
      >
        {reels.map((url, i) => (
          <ReelCard key={url} url={url} index={i} visible={visible} />
        ))}
      </div>
    </section>
  )
}
