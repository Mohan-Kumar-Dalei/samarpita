import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { List, X, ArrowUpRight } from '@phosphor-icons/react'
import Logo from './Logo'
import Button from './Button'
import { nav, site } from '../data/site'
import { getLenis } from '../lib/lenis'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const { pathname } = useLocation()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(y > prev && y > 200 && !open)
    setScrolled(y > 20)
  })

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const lenis = getLenis()
    if (open) lenis?.stop()
    else lenis?.start()
  }, [open])

  return (
    <>
      <motion.header
        animate={{ y: hidden ? '-110%' : '0%' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4"
      >
        <div className="container-x">
          <div
            className={`flex items-center justify-between rounded-full py-2 pl-4 pr-2 transition-all duration-500 sm:pl-5 ${
              scrolled || open ? 'bg-linen/80 shadow-[0_8px_40px_-12px_rgba(16,35,31,0.18)] ring-1 ring-ink/5 backdrop-blur-xl' : ''
            }`}
          >
            <Logo />
            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map((n) => (
                <NavLink key={n.to} to={n.to} end className="relative px-4 py-2 text-[15px] font-medium">
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-ink/[0.06]"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className={`relative ${isActive ? 'text-ink' : 'text-ink/60 hover:text-ink'} transition-colors`}>{n.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <Button to="/contact" variant="accent">Need Help?</Button>
              </div>
              <button
                onClick={() => setOpen((v) => !v)}
                className="grid h-12 w-12 place-items-center rounded-full bg-ink text-cream lg:hidden"
                aria-label={open ? 'Close menu' : 'Open menu'}
              >
                {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ink px-6 pb-10 pt-32 text-cream lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {nav.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={n.to} className="flex items-center justify-between border-b border-cream/10 py-4 font-display text-5xl">
                    <span className={pathname === n.to ? 'italic text-saffron' : ''}>{n.label}</span>
                    <ArrowUpRight size={28} />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-auto space-y-1 text-cream/60"
            >
              <p>{site.email}</p>
              <p>{site.phone}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
