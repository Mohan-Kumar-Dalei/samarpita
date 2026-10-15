import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from '@phosphor-icons/react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((it, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between gap-6 py-6 text-left"
            aria-expanded={open === i}
          >
            <span className="font-display text-2xl sm:text-3xl">{it.q}</span>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors ${open === i ? 'border-saffron bg-saffron text-white' : 'border-line'}`}
            >
              <Plus weight="bold" />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="max-w-2xl pb-6 text-[16px] leading-relaxed text-muted">{it.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
