import { useEffect, useRef, useState } from 'react'
import { InstagramLogo, ArrowUpRight } from '@phosphor-icons/react'
import SplitHeading from './SplitHeading'
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

export default function InstagramReels() {
  const ref = useRef(null)
  const visible = useInstagramEmbeds(ref)
  return (
    <section ref={ref} className="container-x py-24 sm:py-32">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span className="eyebrow">On Instagram</span>
          <SplitHeading lines={['Seva in', '*action*']} className="mt-5 text-[clamp(2.75rem,5.5vw,5rem)]" />
          <p className="mt-4 max-w-md leading-relaxed text-muted">Watch our camps, drives and everyday seva. Follow @samar.pita2005 for new reels.</p>
        </div>
        <a
          href={site.socials.instagram}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] px-6 py-3.5 font-semibold text-white shadow-lg"
        >
          <InstagramLogo size={22} weight="bold" /> Follow on Instagram
          <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
      <div className="mt-14 grid justify-items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
        {reels.map((url) => (
          <div key={url} className="w-full max-w-[400px] overflow-hidden rounded-[1.25rem] border border-line bg-white">
            {visible ? (
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                data-instgrm-version="14"
                style={{ background: '#FFF', border: 0, margin: 0, maxWidth: '100%', minWidth: 280, padding: 0, width: '100%' }}
              >
                <a href={url} target="_blank" rel="noreferrer" className="block p-6 text-center text-[14px] text-[#3897f0]">
                  View this reel on Instagram
                </a>
              </blockquote>
            ) : (
              <div className="grid aspect-[9/14] place-items-center text-muted">
                <InstagramLogo size={40} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
