import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

// Splits a heading into words and slides each one up from a mask.
// Pass `lines` as an array; wrap a word in *asterisks* to render it in saffron italic.
export default function SplitHeading({ lines, as: Tag = 'h2', className = '', delay = 0, onScroll = true }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current.querySelectorAll('.word-inner'), {
        yPercent: 110,
        rotate: 4,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.06,
        delay,
        scrollTrigger: onScroll ? { trigger: ref.current, start: 'top 88%', once: true } : undefined,
      })
    }, ref)
    return () => ctx.revert()
  }, [delay, onScroll])

  return (
    <Tag ref={ref} className={`h-display ${className}`}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(' ').map((word, wi) => {
            const m = word.match(/^\*(.+)\*(\W*)$/)
            const accent = Boolean(m)
            const text = m ? m[1] : word
            return (
              <span key={wi} className="inline-block overflow-hidden pb-[0.12em] align-top">
                <span className="word-inner inline-block">
                  {accent ? <span className="italic text-saffron">{text}</span> : text}
                  {m && m[2]}
                  {wi < line.split(' ').length - 1 ? ' ' : ''}
                </span>
              </span>
            )
          })}
        </span>
      ))}
    </Tag>
  )
}
