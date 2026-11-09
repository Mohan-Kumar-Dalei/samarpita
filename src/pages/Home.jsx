import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Clock,
  LockSimple,
  Quotes,
  Drop,
  PhoneCall,
  UserPlus,
  Heartbeat,
  BookOpenText,
  BowlFood,
  HandHeart,
} from '@phosphor-icons/react'
import { gsap } from '../lib/gsap'
import Button from '../components/Button'
import SplitHeading from '../components/SplitHeading'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import Marquee from '../components/Marquee'
import Img from '../components/Img'
import CTABand from '../components/CTABand'
import { images, services, stats, steps, stories, testimonials, site } from '../data/site'
import OdiaWord from '../components/OdiaWord'

function Hero() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-photo', { clipPath: 'inset(30% 12% 0% 12% round 48px)', duration: 1.8, ease: 'expo.inOut', delay: 0.5 })
      gsap.from('.hero-photo img', { scale: 1.35, duration: 2.2, ease: 'expo.out', delay: 0.6 })
      gsap.from('.hero-odia', { yPercent: 40, opacity: 0, duration: 1.6, ease: 'expo.out', delay: 0.7 })
      gsap.from('.hero-chip', { y: 30, opacity: 0, duration: 1, ease: 'expo.out', delay: 1.6, stagger: 0.12 })
      gsap.to('.hero-photo img', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: '.hero-photo', start: 'top 80%', end: 'bottom top', scrub: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,var(--c-brand),transparent)] opacity-10" />
      <div className="container-x relative">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="eyebrow">
              Team Samarpita · Odisha
            </motion.span>
            <SplitHeading
              as="h1"
              onScroll={false}
              delay={0.35}
              lines={['Every problem', 'deserves a *helping*', 'hand.']}
              className="mt-6 text-[clamp(3.2rem,8vw,8rem)]"
            />
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <div className="hero-odia -mt-[0.3em] leading-none">
              <OdiaWord className="text-[clamp(4.5rem,11vw,8.5rem)] text-ink" />
              <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.3em] text-muted">Seva hi Samarpan</p>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-md text-[17px] leading-relaxed text-muted"
            >
              We are a team of young social workers from Odisha. Tell us your problem — we are here to listen, and to help.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button to="/contact" variant="accent">Share your problem</Button>
              <Button to="/blood-donation" variant="outline" icon={false}>
                <span className="flex items-center gap-2"><Drop weight="fill" className="text-blood" /> Donate blood</span>
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="relative mt-14">
          <Img
            src={images.team}
            alt="Team Samarpita members holding the Team Samarpita banner"
            className="hero-photo aspect-[4/3] rounded-[2rem] sm:aspect-[16/9] sm:rounded-[2.5rem] lg:aspect-[21/9]"
            imgClassName="object-[50%_62%]"
            loading="eager"
          />
          <div className="hero-chip absolute left-4 top-4 flex items-center gap-3 rounded-2xl bg-linen/90 p-3 pr-5 shadow-xl shadow-black/10 backdrop-blur sm:left-6 sm:top-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint text-night"><Clock size={20} weight="bold" /></span>
            <span className="text-[13px] leading-tight"><b className="block text-[15px]">24–48 hrs</b><span className="text-muted">response time</span></span>
          </div>
          <div className="hero-chip theme-dark absolute bottom-4 right-4 hidden items-center gap-3 rounded-2xl bg-cream/90 p-3 pr-5 shadow-xl backdrop-blur sm:flex sm:bottom-6 sm:right-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink/10"><LockSimple size={20} weight="bold" className="text-brand" /></span>
            <span className="text-[13px] leading-tight"><b className="block text-[15px]">100% free</b><span className="text-muted">&amp; confidential</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Statement() {
  const ref = useRef(null)
  const text =
    'We believe no one should face hardship alone. From a child who can’t afford school to a patient searching for blood at midnight — Samarpita listens, acts and stays until the problem is solved.'
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.st-word',
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top 75%', end: 'bottom 55%', scrub: true },
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section className="container-x py-24 sm:py-36">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <span className="eyebrow">Our promise</span>
        </div>
        <p ref={ref} className="font-display text-[clamp(2rem,4.2vw,3.75rem)] leading-[1.08] tracking-[-0.01em] lg:col-span-9">
          {text.split(' ').map((w, i) => (
            <span key={i} className="st-word">{w} </span>
          ))}
        </p>
      </div>
      <Reveal className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-line lg:grid-cols-4">
        {stats.map((s) => (
          <div data-reveal key={s.label} className="bg-cream p-6 sm:p-10">
            <div className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-none">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-3 text-[14px] font-medium text-muted">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  )
}

function Services() {
  return (
    <section className="bg-linen py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="eyebrow">What we do</span>
            <SplitHeading lines={['Help for every', 'kind of *struggle*']} className="mt-5 text-[clamp(2.75rem,5.5vw,5rem)]" />
          </div>
          <p className="max-w-sm leading-relaxed text-muted">
            Whatever the problem, our volunteers and partner experts work on the ground to find a real solution.
          </p>
        </div>
        <Reveal className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {services.map(({ icon: Icon, title, text }, i) => (
            <Link
              to="/contact"
              data-reveal
              key={title}
              className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[1.75rem] border border-line bg-cream p-8 transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-cream"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand transition-colors duration-500 group-hover:bg-mint group-hover:text-night">
                  <Icon size={28} weight="duotone" />
                </span>
                <span className="font-display text-xl text-muted group-hover:text-cream/50">0{i + 1}</span>
              </div>
              <h3 className="mt-auto pt-12 font-display text-3xl">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted transition-colors duration-500 group-hover:text-cream/70">{text}</p>
              <ArrowUpRight
                size={22}
                className="absolute bottom-8 right-8 -translate-x-2 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
              />
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function Process() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.proc-line', { scaleY: 0 }, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: '.proc-list', start: 'top 70%', end: 'bottom 70%', scrub: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={ref} className="container-x py-24 sm:py-36">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <span className="eyebrow">How we help</span>
            <SplitHeading lines={['Three simple', 'steps to *relief*']} className="mt-5 text-[clamp(2.75rem,5.5vw,5rem)]" />
            <p className="mt-6 max-w-sm leading-relaxed text-muted">No forms to print, no offices to visit. Reaching out to us takes less than two minutes.</p>
            <div className="mt-8"><Button to="/contact">Start now</Button></div>
          </div>
        </div>
        <div className="proc-list relative lg:col-span-7">
          <div className="absolute bottom-0 left-[27px] top-0 w-px bg-line" />
          <div className="proc-line absolute bottom-0 left-[27px] top-0 w-px origin-top bg-brand" />
          <Reveal className="space-y-16" stagger={0.15}>
            {steps.map((s) => (
              <div data-reveal key={s.n} className="relative flex gap-8">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line bg-cream font-display text-xl">{s.n}</span>
                <div className="pt-2">
                  <h3 className="font-display text-4xl">{s.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-muted">{s.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function BloodBand() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.drop-fill', { scaleY: 0 }, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top 75%', end: 'center 40%', scrub: true },
      })
      gsap.fromTo('.pulse-line', { strokeDashoffset: 600 }, { strokeDashoffset: 0, duration: 2.4, ease: 'power2.inOut', repeat: -1 })
    }, ref)
    return () => ctx.revert()
  }, [])
  const points = [
    { icon: UserPlus, title: 'Register once', text: 'Share your blood group and phone number — it takes one minute.' },
    { icon: PhoneCall, title: 'We call when needed', text: 'When a patient near you needs your group, our team calls you.' },
    { icon: Heartbeat, title: 'Donate, save a life', text: 'We guide you to the hospital or blood bank. You become a hero.' },
  ]
  return (
    <section ref={ref} className="container-x pb-24 sm:pb-36">
      <div className="theme-dark grain relative overflow-hidden rounded-[2rem] bg-cream ring-1 ring-line sm:rounded-[3rem]">
        <div className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,var(--color-blood),transparent)] opacity-25" />
        <div className="relative grid gap-12 p-6 py-14 sm:p-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow text-blood! before:bg-blood!">Blood donor registry</span>
            <SplitHeading lines={['Your blood can', '*save* a life.']} className="mt-5 text-[clamp(2.75rem,6vw,5.5rem)]" />
            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              Join Samarpita’s blood donor family. When someone in Odisha urgently needs blood, our team calls registered donors of the matching group.
            </p>
            <Reveal className="mt-10 grid gap-4 sm:grid-cols-3" stagger={0.1}>
              {points.map(({ icon: Icon, title, text }) => (
                <div data-reveal key={title} className="rounded-2xl border border-line bg-linen p-5">
                  <Icon size={26} weight="duotone" className="text-blood" />
                  <h3 className="mt-6 font-display text-2xl">{title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{text}</p>
                </div>
              ))}
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="/blood-donation" variant="blood">Register as donor</Button>
              <Button href={`tel:${site.phoneRaw}`} variant="outline" icon={false}>Need blood? Call us</Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[340px] lg:col-span-5">
            <svg viewBox="0 0 200 260" className="w-full drop-shadow-[0_30px_60px_rgba(229,56,59,0.35)]" aria-hidden="true">
              <defs>
                <clipPath id="drop-clip">
                  <path d="M100 8C100 8 22 104 22 160a78 78 0 0 0 156 0C178 104 100 8 100 8Z" />
                </clipPath>
                <linearGradient id="drop-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#ff5a5f" />
                  <stop offset="1" stopColor="#b3141a" />
                </linearGradient>
              </defs>
              <path d="M100 8C100 8 22 104 22 160a78 78 0 0 0 156 0C178 104 100 8 100 8Z" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
              <g clipPath="url(#drop-clip)">
                <rect className="drop-fill" x="0" y="0" width="200" height="260" fill="url(#drop-grad)" style={{ transformOrigin: '50% 100%', transformBox: 'fill-box' }} />
              </g>
              <polyline
                className="pulse-line"
                points="34,170 70,170 82,148 96,196 110,130 122,170 166,170"
                fill="none"
                stroke="#fff"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="600"
              />
            </svg>
            <p className="mt-6 text-center font-display text-3xl">
              1 donation can save <span className="italic text-blood">up to 3 lives</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Founder() {
  return (
    <section className="bg-linen py-24 sm:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div data-reveal className="relative">
            <Img src={images.founder} alt="Founder of Team Samarpita" className="aspect-[4/5] rounded-[2rem]" imgClassName="object-top" />
            <span className="absolute -bottom-5 left-6 rounded-full bg-mint px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.18em] text-night shadow-lg">Founder</span>
          </div>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          <span className="eyebrow">The heart of Samarpita</span>
          <SplitHeading lines={['Led with *seva*,', 'driven by people.']} className="mt-5 text-[clamp(2.75rem,5.5vw,5rem)]" />
          <Reveal>
            <p data-reveal className="mt-6 text-lg leading-relaxed text-muted">
              Team Samarpita was founded with one simple belief: anyone who reaches out for help should never be turned away. Under our founder’s guidance, a group of young volunteers from across Odisha now works together on education, health, blood donation and relief.
            </p>
            <div data-reveal className="mt-10 flex flex-wrap gap-3">
              <Button to="/about">Meet the team</Button>
              <Button to="/contact" variant="outline" icon={false}>Talk to us</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function OdiaBand() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.band-odia', { xPercent: 10 }, {
        xPercent: -25,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={ref} className="theme-dark relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,217,138,0.18),transparent_60%)]" />
      <div className="band-odia pointer-events-none whitespace-nowrap leading-[1.15] text-brand opacity-20">
        <OdiaWord repeat={2} className="text-[34vw] lg:text-[26rem]" />
      </div>
      <div className="container-x relative -mt-[12vw] lg:-mt-40">
        <Quotes size={48} weight="fill" className="text-brand" />
        <SplitHeading lines={['Service to humanity', 'is service to *God*.']} className="mt-6 text-[clamp(2.75rem,6.5vw,6rem)]" />
        <p className="mt-6 text-muted">— The spirit of Team Samarpita</p>
      </div>
    </section>
  )
}

const storyIcons = [BookOpenText, BowlFood, HandHeart]

function Stories() {
  return (
    <section className="container-x py-24 sm:py-36">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span className="eyebrow">Stories of change</span>
          <SplitHeading lines={['Real people,', '*real* impact']} className="mt-5 text-[clamp(2.75rem,5.5vw,5rem)]" />
        </div>
        <Button to="/about" variant="outline">Our journey</Button>
      </div>
      <Reveal className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.12}>
        {stories.map((s, i) => {
          const Icon = storyIcons[i]
          return (
            <article data-reveal key={s.title} className="group flex flex-col rounded-[1.75rem] border border-line bg-linen p-3 transition-colors hover:border-brand">
              <div className="relative grid aspect-[5/4] place-items-center overflow-hidden rounded-[1.4rem] bg-brand-soft">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(43,217,138,0.35),transparent_60%)]" />
                <Icon size={88} weight="duotone" className="relative text-brand transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-110 group-hover:-rotate-6" />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <span className="w-fit rounded-full bg-brand-soft px-3 py-1 text-[12px] font-semibold text-brand">{s.tag}</span>
                <h3 className="mt-4 font-display text-[28px] leading-tight">{s.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{s.text}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[14px] font-semibold">
                  Read more <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          )
        })}
      </Reveal>
    </section>
  )
}

function Testimonials() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const go = (d) => {
    setDir(d)
    setI((v) => (v + d + testimonials.length) % testimonials.length)
  }
  useEffect(() => {
    const t = setInterval(() => go(1), 7000)
    return () => clearInterval(t)
  }, [i])
  const t = testimonials[i]
  return (
    <section className="bg-sand/60 py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">Voices we serve</span>
          <div className="relative mt-10 min-h-[300px] sm:min-h-[260px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={i}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: dir * -60, filter: 'blur(8px)' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="font-display text-[clamp(1.9rem,3.8vw,3.25rem)] leading-[1.12]">“{t.quote}”</blockquote>
                <figcaption className="mt-8 flex items-center justify-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-mint font-semibold text-night">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                  <span className="text-left text-[14px]"><b className="block">{t.name}</b><span className="text-muted">{t.place}</span></span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button onClick={() => go(-1)} aria-label="Previous" className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 transition-colors hover:bg-ink hover:text-cream"><ArrowLeft /></button>
            <div className="flex gap-2">
              {testimonials.map((_, k) => (
                <span key={k} className={`h-1.5 rounded-full transition-all duration-500 ${k === i ? 'w-8 bg-brand' : 'w-1.5 bg-ink/20'}`} />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next" className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 transition-colors hover:bg-ink hover:text-cream"><ArrowRight /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <div className="theme-dark border-y border-line bg-cream py-6">
        <Marquee items={['Education', 'Healthcare', 'Blood Donation', 'Women Empowerment', 'Elderly Care', 'Food & Relief']} />
      </div>
      <Statement />
      <Services />
      <Process />
      <BloodBand />
      <Founder />
      <OdiaBand />
      <Stories />
      <Testimonials />
      <CTABand />
    </>
  )
}
