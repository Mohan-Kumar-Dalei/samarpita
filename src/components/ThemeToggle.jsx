import { AnimatePresence, motion } from 'framer-motion'
import { Sun, Moon } from '@phosphor-icons/react'
import { useTheme } from '../lib/theme'

export default function ThemeToggle({ className = '' }) {
  const [dark, toggle] = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-line bg-linen text-ink transition-colors hover:border-brand ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? 'moon' : 'sun'}
          initial={{ y: 20, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -20, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {dark ? <Moon size={20} weight="fill" className="text-brand" /> : <Sun size={20} weight="bold" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
