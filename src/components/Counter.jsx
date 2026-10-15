import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

export default function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const obj = { n: 0 }
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        n: value,
        duration: 2.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
        onUpdate: () => {
          if (ref.current) ref.current.textContent = Math.round(obj.n).toLocaleString('en-IN') + suffix
        },
      })
    })
    return () => ctx.revert()
  }, [value, suffix])
  return <span ref={ref}>0{suffix}</span>
}
