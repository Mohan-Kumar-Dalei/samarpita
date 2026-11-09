import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

// Fades and lifts every [data-reveal] child into view as it scrolls in
export default function Reveal({ as: Tag = 'div', children, className = '', stagger = 0.08, y = 40 }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = ref.current.querySelectorAll('[data-reveal]')
      const targets = items.length ? items : [ref.current]
      // fromTo (not from) so the end state is always fully visible, even if CSS transitions are mid-way
      gsap.fromTo(targets, { y, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: 'expo.out',
        stagger,
        scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' },
      })
    }, ref)
    return () => ctx.revert()
  }, [stagger, y])
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
