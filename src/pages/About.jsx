import { useLayoutEffect, useRef } from 'react'
import { Target, Eye, LinkedinLogo, InstagramLogo } from '@phosphor-icons/react'
import { gsap } from '../lib/gsap'
import PageHero from '../components/PageHero'
import SplitHeading from '../components/SplitHeading'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
import CTABand from '../components/CTABand'
import { images, values, team, journey } from '../data/site'

function Story() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.story-img', { yPercent: 8 }, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={ref} className="container-x pb-24 sm:pb-36">
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="story-img">
            <Img src={images.story} alt="Samarpita volunteers" className="aspect-[5/6] rounded-[2rem] sm:rounded-[2.5rem]" />
          </div>
        </div>
        <Reveal className="lg:col-span-5 lg:col-start-8">
          <span data-reveal className="eyebrow">Our story</span>
          <h2 data-reveal className="h-display mt-5 text-[clamp(2.5rem,4.5vw,4rem)]">It began with five friends and a <i className="text-saffron">banyan tree.</i></h2>
          <p data-reveal className="mt-6 leading-relaxed text-muted">
            In 2018, a small group of young social workers started teaching children from nearby slums under a banyan tree every evening. Soon, parents began sharing their own problems — medical bills, lost documents, unpaid wages.
          </p>
          <p data-reveal className="mt-4 leading-relaxed text-muted">
            We realised people didn’t just need charity; they needed someone to listen and walk with them. That is how Samarpita — “one who is dedicated” — was born.
          </p>
          <div data-reveal className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8">
            <div><p className="font-display text-5xl">5,000+</p><p className="mt-1 text-[14px] text-muted">lives touched</p></div>
            <div><p className="font-display text-5xl">150+</p><p className="mt-1 text-[14px] text-muted">volunteers</p></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function MissionVision() {
  const cards = [
    { icon: Target, title: 'Our Mission', text: 'To reach every person in need with timely, dignified and practical help — in education, health, livelihood and justice.', dark: true },
    { icon: Eye, title: 'Our Vision', text: 'A society where no one is left alone with their problems, and every community has the strength to care for its own.', dark: false },
  ]
  return (
    <section className="container-x pb-24 sm:pb-36">
      <Reveal className="grid gap-4 md:grid-cols-2" stagger={0.12}>
        {cards.map(({ icon: Icon, title, text, dark }) => (
          <div
            data-reveal
            key={title}
            className={`grain relative overflow-hidden rounded-[2rem] p-10 sm:p-14 ${dark ? 'bg-forest text-cream' : 'bg-saffron-soft text-ink'}`}
          >
            <Icon size={44} weight="duotone" className={dark ? 'text-saffron' : 'text-forest'} />
            <h3 className="mt-16 font-display text-5xl">{title}</h3>
            <p className={`mt-5 max-w-md text-lg leading-relaxed ${dark ? 'text-cream/70' : 'text-ink/70'}`}>{text}</p>
          </div>
        ))}
      </Reveal>
    </section>
  )
}

function Values() {
  return (
    <section className="bg-linen py-24 sm:py-32">
      <div className="container-x">
        <span className="eyebrow">Core values</span>
        <SplitHeading lines={['What we *stand* for']} className="mt-5 text-[clamp(2.75rem,5.5vw,5rem)]" />
        <Reveal className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-line sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div data-reveal key={title} className="group bg-linen p-8 transition-colors duration-500 hover:bg-cream sm:p-10">
              <Icon size={36} weight="duotone" className="text-saffron transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
              <h3 className="mt-10 font-display text-3xl">{title}</h3>
              <p className="mt-2 text-[15px] text-muted">{text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

const avatarTones = ['bg-forest text-cream', 'bg-saffron text-white', 'bg-sand text-ink', 'bg-ink text-cream']

function Team() {
  return (
    <section className="container-x py-24 sm:py-36">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <span className="eyebrow">Meet the team</span>
          <SplitHeading lines={['The hearts behind', '*Samarpita*']} className="mt-5 text-[clamp(2.75rem,5.5vw,5rem)]" />
        </div>
        <p className="max-w-sm leading-relaxed text-muted">A dedicated group of social workers, doctors, teachers and volunteers working together for one cause.</p>
      </div>
      <Reveal className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4" stagger={0.06}>
        {team.map((m, i) => (
          <div data-reveal key={m.name} className="group">
            <div className={`relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[1.5rem] ${avatarTones[i % avatarTones.length]}`}>
              <span className="font-display text-7xl transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-110">{m.initials}</span>
              <div className="absolute inset-x-3 bottom-3 flex translate-y-16 justify-center gap-2 transition-transform duration-500 ease-[var(--ease-premium)] group-hover:translate-y-0">
                {[LinkedinLogo, InstagramLogo].map((Icon, k) => (
                  <a key={k} href="#" aria-label="Social profile" className="grid h-10 w-10 place-items-center rounded-full bg-cream text-ink hover:bg-saffron hover:text-white">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            <h3 className="mt-4 font-display text-2xl">{m.name}</h3>
            <p className="text-[14px] text-muted">{m.role}</p>
          </div>
        ))}
      </Reveal>
    </section>
  )
}

function Journey() {
  const ref = useRef(null)
  const track = useRef(null)
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 1024px)', () => {
      const distance = () => track.current.scrollWidth - window.innerWidth + 96
      gsap.to(track.current, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: () => '+=' + distance(),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    })
    return () => mm.revert()
  }, [])
  return (
    <section ref={ref} className="overflow-hidden bg-ink py-24 text-cream lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0">
      <div className="container-x">
        <span className="eyebrow !text-cream/60">Our journey</span>
        <SplitHeading lines={['Eight years of *seva*']} className="mt-5 text-[clamp(2.75rem,5.5vw,5rem)]" />
      </div>
      <div ref={track} className="mt-14 flex flex-col gap-6 px-5 sm:px-8 lg:w-max lg:flex-row lg:px-12">
        {journey.map((j) => (
          <div key={j.year} className="relative w-full shrink-0 rounded-[1.75rem] border border-cream/10 bg-cream/[0.03] p-8 lg:w-[420px] lg:p-10">
            <p className="font-display text-7xl text-saffron lg:text-8xl">{j.year}</p>
            <h3 className="mt-10 font-display text-3xl">{j.title}</h3>
            <p className="mt-3 text-cream/60">{j.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Samarpita"
        crumb="About Us"
        lines={['Dedicated to', '*humanity*, always.']}
        text="We are a registered non-profit team of social workers who believe every person deserves to be heard, supported and treated with dignity."
      />
      <Story />
      <MissionVision />
      <Values />
      <Team />
      <Journey />
      <CTABand
        lines={['Want to be part', 'of our *journey*?']}
        text="Join 150+ volunteers who give their time and skills to make a difference in people’s lives."
        primary={{ label: 'Become a volunteer', to: '/support' }}
        secondary={{ label: 'Contact us', to: '/contact' }}
      />
    </>
  )
}
