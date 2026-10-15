import { useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HandCoins, UsersThree, Handshake, QrCode, Bank, Copy, Check, Certificate, ShieldCheck, Seal, CheckCircle } from '@phosphor-icons/react'
import { gsap } from '../lib/gsap'
import PageHero from '../components/PageHero'
import SplitHeading from '../components/SplitHeading'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import Img from '../components/Img'
import { images } from '../data/site'
import { getLenis } from '../lib/lenis'

const ways = [
  { icon: HandCoins, title: 'Donate', text: 'Your contribution funds education kits, medicines and relief for families in need.', href: '#donate', cta: 'Donate now' },
  { icon: UsersThree, title: 'Volunteer', text: 'Give a few hours a week — teach, organise camps or help people with paperwork.', href: '#volunteer', cta: 'Join as volunteer' },
  { icon: Handshake, title: 'Partner with us', text: 'Companies and institutions can partner through CSR to create lasting impact.', href: '#volunteer', cta: 'Become a partner' },
]

const allocation = [
  { label: 'Education', pct: 40 },
  { label: 'Healthcare', pct: 30 },
  { label: 'Relief & food', pct: 20 },
  { label: 'Operations', pct: 10 },
]

const amounts = [500, 1000, 2500, 5000]

function Ways() {
  return (
    <section className="container-x pb-24 sm:pb-32">
      <Reveal className="grid gap-4 md:grid-cols-3" stagger={0.1}>
        {ways.map(({ icon: Icon, title, text, href, cta }, i) => (
          <a
            data-reveal
            key={title}
            href={href}
            onClick={(e) => {
              e.preventDefault()
              getLenis()?.scrollTo(href, { offset: -100 })
            }}
            className={`group flex min-h-[340px] flex-col rounded-[2rem] p-9 transition-transform duration-500 hover:-translate-y-2 ${
              i === 0 ? 'bg-saffron text-white' : i === 1 ? 'bg-forest text-cream' : 'border border-line bg-linen'
            }`}
          >
            <Icon size={44} weight="duotone" />
            <h3 className="mt-auto font-display text-4xl">{title}</h3>
            <p className={`mt-3 leading-relaxed ${i === 2 ? 'text-muted' : 'opacity-75'}`}>{text}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold">
              {cta}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </a>
        ))}
      </Reveal>
    </section>
  )
}

function CopyRow({ label, value }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="flex items-center justify-between gap-4 border-b border-cream/10 py-3 last:border-0">
      <span className="text-[13px] text-cream/50">{label}</span>
      <button
        onClick={() => {
          navigator.clipboard?.writeText(value)
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        }}
        className="flex items-center gap-2 text-right font-medium"
      >
        {value}
        {copied ? <Check size={14} className="text-saffron" /> : <Copy size={14} className="text-cream/40" />}
      </button>
    </div>
  )
}

function Donate() {
  const [amount, setAmount] = useState(1000)
  const [custom, setCustom] = useState('')
  const [monthly, setMonthly] = useState(false)
  const value = custom ? Number(custom) : amount

  return (
    <section id="donate" className="bg-linen py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">Make a donation</span>
          <SplitHeading lines={['Every rupee', 'reaches a *life*']} className="mt-5 text-[clamp(2.75rem,5.5vw,5rem)]" />
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            We publish a yearly report of every donation and how it was used. Donations are eligible for tax benefits under Section 80G.
          </p>
          <Img src={images.donate} alt="Donation drive" className="mt-10 hidden aspect-[4/3] rounded-[1.75rem] lg:block" />
        </div>

        <Reveal className="lg:col-span-7">
          <div data-reveal className="rounded-[2rem] border border-line bg-cream p-6 shadow-[0_30px_80px_-40px_rgba(16,35,31,0.35)] sm:p-10">
            <div className="relative grid grid-cols-2 rounded-full bg-sand p-1.5">
              {['One-time', 'Monthly'].map((l, i) => {
                const active = monthly === (i === 1)
                return (
                  <button key={l} onClick={() => setMonthly(i === 1)} className="relative z-10 rounded-full py-3 text-[15px] font-semibold">
                    {active && (
                      <motion.span layoutId="freq" className="absolute inset-0 -z-10 rounded-full bg-ink" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />
                    )}
                    <span className={active ? 'text-cream' : 'text-ink/60'}>{l}</span>
                  </button>
                )
              })}
            </div>

            <p className="label mt-8">Choose an amount</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {amounts.map((a) => (
                <button
                  key={a}
                  onClick={() => {
                    setAmount(a)
                    setCustom('')
                  }}
                  className={`rounded-2xl border py-4 text-lg font-semibold transition-all duration-300 ${
                    !custom && amount === a ? 'border-saffron bg-saffron text-white shadow-lg shadow-saffron/30' : 'border-line hover:border-ink'
                  }`}
                >
                  ₹{a.toLocaleString('en-IN')}
                </button>
              ))}
            </div>
            <div className="relative mt-3">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 font-semibold text-muted">₹</span>
              <input
                type="number"
                min="1"
                placeholder="Enter custom amount"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                className="field pl-10"
              />
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl bg-sand/60 p-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-[13px] text-muted">You are giving</p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${value}-${monthly}`}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-display text-4xl"
                  >
                    ₹{(value || 0).toLocaleString('en-IN')}
                    <span className="text-lg text-muted">{monthly ? ' / month' : ''}</span>
                  </motion.p>
                </AnimatePresence>
              </div>
              <Button variant="accent">Donate now</Button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-2xl border border-line p-4">
                <div className="grid h-24 w-24 shrink-0 place-items-center rounded-xl bg-ink text-cream">
                  <QrCode size={64} weight="thin" />
                </div>
                <div>
                  <p className="font-semibold">Scan &amp; pay with UPI</p>
                  <p className="mt-1 text-[13px] text-muted">samarpita@upi</p>
                </div>
              </div>
              <div className="rounded-2xl bg-ink p-4 text-[13px] text-cream">
                <p className="mb-1 flex items-center gap-2 font-semibold"><Bank size={16} className="text-saffron" /> Bank transfer</p>
                <CopyRow label="A/c name" value="Samarpita Trust" />
                <CopyRow label="A/c no." value="1234 5678 9012" />
                <CopyRow label="IFSC" value="SBIN0001234" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Allocation() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.alloc-bar', {
        scaleX: 0,
        duration: 1.6,
        ease: 'expo.out',
        stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={ref} className="container-x py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">Transparency</span>
          <SplitHeading lines={['Where your', 'money *goes*']} className="mt-5 text-[clamp(2.5rem,4.5vw,4rem)]" />
        </div>
        <div className="space-y-8 lg:col-span-8">
          {allocation.map((a, i) => (
            <div key={a.label}>
              <div className="mb-3 flex items-baseline justify-between">
                <span className="text-lg font-semibold">{a.label}</span>
                <span className="font-display text-4xl">{a.pct}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-sand">
                <div
                  className={`alloc-bar h-full origin-left rounded-full ${['bg-saffron', 'bg-forest', 'bg-moss', 'bg-ink'][i]}`}
                  style={{ width: `${a.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function VolunteerForm() {
  const [done, setDone] = useState(false)
  return (
    <section id="volunteer" className="container-x pb-24 sm:pb-32">
      <div className="grain relative overflow-hidden rounded-[2rem] bg-forest p-6 text-cream sm:rounded-[3rem] sm:p-14">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-saffron/30 blur-3xl" />
        <div className="relative grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow !text-cream/60">Volunteer with us</span>
            <SplitHeading lines={['Lend a hand,', 'change a *life*']} className="mt-5 text-[clamp(2.5rem,5vw,4.5rem)]" />
            <p className="mt-6 max-w-sm leading-relaxed text-cream/65">Fill in your details and our volunteer lead will contact you about upcoming programs near you.</p>
          </div>
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center rounded-3xl bg-cream/5 p-10 text-center"
                >
                  <CheckCircle size={64} weight="duotone" className="text-saffron" />
                  <h3 className="mt-6 font-display text-4xl">Welcome to the family!</h3>
                  <p className="mt-3 text-cream/65">We’ll get in touch with you very soon.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => {
                    e.preventDefault()
                    setDone(true)
                  }}
                  className="grid gap-4 sm:grid-cols-2 [&_.field]:border-cream/15 [&_.field]:bg-cream/5 [&_.field]:text-cream [&_.field]:placeholder:text-cream/40 [&_.field:focus]:bg-cream/10 [&_.field:focus]:border-saffron"
                >
                  <input required className="field" placeholder="Full name" />
                  <input required type="email" className="field" placeholder="Email" />
                  <input required type="tel" className="field" placeholder="Phone" />
                  <input className="field" placeholder="City" />
                  <select className="field" defaultValue="">
                    <option value="" disabled>Area of interest</option>
                    <option>Teaching</option>
                    <option>Health camps</option>
                    <option>Relief work</option>
                    <option>Women’s support</option>
                    <option>CSR partnership</option>
                  </select>
                  <select className="field" defaultValue="">
                    <option value="" disabled>Availability</option>
                    <option>Weekdays</option>
                    <option>Weekends</option>
                    <option>Flexible</option>
                  </select>
                  <div className="sm:col-span-2">
                    <Button type="submit" variant="accent">Join now</Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function Trust() {
  const badges = [
    { icon: Certificate, label: '80G tax exemption' },
    { icon: ShieldCheck, label: '12A registered' },
    { icon: Seal, label: 'Audited accounts' },
  ]
  const partners = ['Seva Trust', 'Odisha Cares', 'HopeWorks', 'GreenRoots', 'Asha Foundation', 'Udaan']
  return (
    <section className="border-t border-line py-20">
      <div className="container-x">
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-[14px] font-semibold">
              <Icon size={18} className="text-saffron" weight="duotone" /> {label}
            </span>
          ))}
        </div>
        <p className="mt-14 text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-muted">Supported by</p>
        <div className="mt-8 grid grid-cols-2 gap-8 text-center sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <span key={p} className="font-display text-2xl text-ink/40 transition-colors hover:text-ink">{p}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Support() {
  return (
    <>
      <PageHero
        eyebrow="Support us"
        crumb="Support Us"
        lines={['Together we can', '*change* lives.']}
        text="Your time, skills or contribution can be the reason someone gets a second chance. Choose how you’d like to help."
      />
      <Ways />
      <Donate />
      <Allocation />
      <VolunteerForm />
      <Trust />
    </>
  )
}
