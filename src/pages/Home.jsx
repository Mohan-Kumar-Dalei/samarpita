import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ArrowLeft, ArrowRight, Clock, LockSimple, Quotes } from '@phosphor-icons/react'
import { gsap } from '../lib/gsap'
import Button from '../components/Button'
import SplitHeading from '../components/SplitHeading'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import Marquee from '../components/Marquee'
import Img from '../components/Img'
import CTABand from '../components/CTABand'
import { images, services, stats, steps, stories, testimonials, site } from '../data/site'

function Hero() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-img', { clipPath: 'inset(100% 0 0 0)', duration: 1.6, ease: 'expo.inOut', delay: 0.4, stagger: 0.15 })
      gsap.from('.hero-img img', { scale: 1.3, duration: 2, ease: 'expo.out', delay: 0.6 })
      gsap.from('.hero-chip', { y: 30, opacity: 0, duration: 1, ease: 'expo.out', delay: 1.4, stagger: 0.12 })
      gsap.to('.hero-parallax', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('.hero-deva', {
        xPercent: -15,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28">
      <div className="hero-deva pointer-events-none absolute -bottom-10 left-0 select-none whitespace-nowrap font-deva text-[28vw] leading-none text-sand/70 lg:text-[20rem]">
        {site.hindi}
      </div>
      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 lg:pt-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="eyebrow">
            A social service team · Est. 2018
          </motion.span>
          <SplitHeading
            as="h1"
            onScroll={false}
            delay={0.35}
            lines={['Every problem', 'deserves a', '*helping* hand.']}
            className="mt-6 text-[clamp(3.4rem,8.4vw,8.25rem)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-muted"
          >
            Samarpita is a team of social workers dedicated to supporting anyone in need. Tell us your problem — we are here to listen, and to help.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button to="/contact" variant="accent">Share your problem</Button>
            <Button to="/support" variant="outline" icon={false}>Support our cause</Button>
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="hero-parallax relative">
            <Img src={images.hero} alt="Volunteers helping the community" className="hero-img aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem]" />
            <Img
              src={images.heroSide}
              alt="Volunteers at work"
              className="hero-img absolute -bottom-10 -left-6 hidden aspect-square w-44 rounded-3xl ring-8 ring-cream sm:block lg:-left-16 lg:w-52"
            />
          </div>
          <div className="hero-chip absolute -right-2 top-8 flex items-center gap-3 rounded-2xl bg-linen/90 p-3 pr-5 shadow-xl shadow-ink/10 backdrop-blur sm:-right-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-saffron text-white"><Clock size={20} weight="bold" /></span>
            <span className="text-[13px] leading-tight"><b className="block text-[15px]">24–48 hrs</b><span className="text-muted">response time</span></span>
          </div>
          <div className="hero-chip absolute bottom-24 right-4 flex items-center gap-3 rounded-2xl bg-ink p-3 pr-5 text-cream shadow-xl shadow-ink/20 sm:-right-4">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-cream/10"><LockSimple size={20} weight="bold" /></span>
            <span className="text-[13px] leading-tight"><b className="block text-[15px]">100% free</b><span className="text-cream/60">&amp; confidential</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Statement() {
  const ref = useRef(null)
  const text =
    'We believe no one should face hardship alone. From a child who can’t afford school to an elder waiting for a pension — Samarpita listens, acts and stays until the problem is solved.'
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
          <p className="max-w-sm text-muted leading-relaxed">
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
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-saffron-soft text-saffron transition-colors duration-500 group-hover:bg-saffron group-hover:text-white">
                  <Icon size={28} weight="duotone" />
                </span>
                <span className="font-display text-xl text-muted group-hover:text-cream/40">0{i + 1}</span>
              </div>
              <h3 className="mt-auto pt-12 font-display text-3xl">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted transition-colors duration-500 group-hover:text-cream/65">{text}</p>
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
          <div className="proc-line absolute bottom-0 left-[27px] top-0 w-px origin-top bg-saffron" />
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

function ParallaxBand() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.band-img', { yPercent: -15 }, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })
      gsap.from(ref.current, {
        clipPath: 'inset(8% 6% 8% 6% round 48px)',
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'top 30%', scrub: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={ref} className="relative h-[80vh] min-h-[520px] overflow-hidden bg-ink" style={{ clipPath: 'inset(0% 0% 0% 0% round 0px)' }}>
      <div className="band-img absolute inset-[-15%_0]">
        <Img src={images.community} alt="Community gathering" className="h-full w-full" imgClassName="opacity-60" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      <div className="container-x relative flex h-full flex-col justify-end pb-16 text-cream sm:pb-24">
        <Quotes size={48} weight="fill" className="text-saffron" />
        <SplitHeading lines={['Service to humanity', 'is service to *God*.']} className="mt-6 text-[clamp(2.75rem,6.5vw,6rem)]" />
        <p className="mt-6 text-cream/60">— The spirit of Samarpita</p>
      </div>
    </section>
  )
}

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
      <Reveal className="mt-16 grid gap-8 md:grid-cols-3" stagger={0.12}>
        {stories.map((s, i) => (
          <article data-reveal key={s.title} className="group cursor-pointer">
            <div className="overflow-hidden rounded-[1.75rem]">
              <Img src={images.stories[i]} alt={s.title} className="aspect-[4/5]" imgClassName="transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-110" />
            </div>
            <span className="mt-6 inline-block rounded-full bg-saffron-soft px-3 py-1 text-[12px] font-semibold text-saffron">{s.tag}</span>
            <h3 className="mt-4 font-display text-[28px] leading-tight">{s.title}</h3>
            <p className="mt-2 text-[15px] text-muted">{s.text}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold">
              Read more <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
          </article>
        ))}
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
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-forest font-semibold text-cream">
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
                <span key={k} className={`h-1.5 rounded-full transition-all duration-500 ${k === i ? 'w-8 bg-saffron' : 'w-1.5 bg-ink/20'}`} />
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
      <div className="border-y border-line bg-ink py-6 text-cream">
        <Marquee items={['Education', 'Healthcare', 'Women Empowerment', 'Elderly Care', 'Food & Relief', 'Legal Guidance']} />
      </div>
      <Statement />
      <Services />
      <Process />
      <ParallaxBand />
      <Stories />
      <Testimonials />
      <CTABand />
    </>
  )
}
