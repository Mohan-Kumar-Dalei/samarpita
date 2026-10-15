import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'

const styles = {
  primary: 'bg-ink text-cream hover:bg-forest',
  accent: 'bg-saffron text-white hover:bg-[#cf6220]',
  outline: 'border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-cream',
  light: 'bg-cream text-ink hover:bg-white',
  ghostLight: 'border border-cream/30 text-cream hover:bg-cream hover:text-ink',
}

// Magnetic pill button: drifts slightly toward the cursor on hover
export default function Button({ to, href, children, variant = 'primary', icon = true, className = '', type, onClick, disabled }) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="relative grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-current/10">
          <ArrowUpRight weight="bold" className="h-3.5 w-3.5 transition-transform duration-500 ease-[var(--ease-premium)] group-hover:-translate-y-6 group-hover:translate-x-6" />
          <ArrowUpRight weight="bold" className="absolute h-3.5 w-3.5 -translate-x-6 translate-y-6 transition-transform duration-500 ease-[var(--ease-premium)] group-hover:translate-x-0 group-hover:translate-y-0" />
        </span>
      )}
    </>
  )
  const cls = `group inline-flex items-center gap-3 rounded-full py-2.5 ${icon ? 'pl-6 pr-2.5' : 'px-6'} text-[15px] font-semibold transition-colors duration-300 disabled:opacity-60 ${styles[variant]} ${className}`

  return (
    <motion.span ref={ref} style={{ x, y }} onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block">
      {to ? (
        <Link to={to} className={cls}>{inner}</Link>
      ) : href ? (
        <a href={href} className={cls}>{inner}</a>
      ) : (
        <button type={type || 'button'} onClick={onClick} disabled={disabled} className={cls}>{inner}</button>
      )}
    </motion.span>
  )
}
