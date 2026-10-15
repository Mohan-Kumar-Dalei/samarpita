import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, Phone, EnvelopeSimple, WhatsappLogo, Clock, Siren, Paperclip, CheckCircle, CircleNotch, WarningCircle } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import Accordion from '../components/Accordion'
import SplitHeading from '../components/SplitHeading'
import { site } from '../data/site'

// Messages are delivered to site.email through FormSubmit (https://formsubmit.co).
// The first submission sends a one-time activation mail to that inbox — confirm it once.
const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`

const categories = ['Education', 'Health', 'Financial', 'Family / Women issue', 'Elderly care', 'Legal help', 'Other']

const faqs = [
  { q: 'How soon will you reply?', a: 'Our team reads every message. You will usually hear from a coordinator within 24–48 hours. Urgent cases are prioritised the same day.' },
  { q: 'Is my information safe?', a: 'Yes. Your details are only seen by our case team and are never shared with anyone without your permission.' },
  { q: 'Do you charge any fee?', a: 'No. All help from Samarpita is completely free of cost. Please beware of anyone asking for money in our name.' },
  { q: 'Can I contact you on behalf of someone else?', a: 'Of course. Just mention their name and how we can reach them in your message.' },
]

function InfoCard({ icon: Icon, title, children, href }) {
  const Tag = href ? 'a' : 'div'
  return (
    <Tag href={href} data-reveal className="group flex gap-4 rounded-2xl border border-line bg-linen p-5 transition-colors hover:border-ink">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-saffron-soft text-saffron transition-colors group-hover:bg-saffron group-hover:text-white">
        <Icon size={20} weight="duotone" />
      </span>
      <span>
        <span className="block text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">{title}</span>
        <span className="mt-1 block font-medium">{children}</span>
      </span>
    </Tag>
  )
}

function ProblemForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [urgency, setUrgency] = useState('Normal')
  const [fileName, setFileName] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    data.append('urgency', urgency)
    data.append('_subject', `[${urgency}] New problem: ${data.get('subject')}`)
    data.append('_template', 'table')
    data.append('_captcha', 'false')
    // Attachments are kept local; mention them in the mail so the team can follow up
    const file = data.get('attachment')
    data.delete('attachment')
    if (file && file.name) data.append('attachment_note', `User has a file to share: ${file.name}`)

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
      setFileName('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="relative rounded-[2rem] border border-line bg-cream p-6 shadow-[0_30px_80px_-40px_rgba(16,35,31,0.35)] sm:p-10">
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[560px] flex-col items-center justify-center text-center"
          >
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}>
              <CheckCircle size={88} weight="duotone" className="text-saffron" />
            </motion.span>
            <h3 className="mt-8 font-display text-5xl">Thank you!</h3>
            <p className="mt-4 max-w-sm leading-relaxed text-muted">Your message has been sent. Our team will contact you within 24–48 hours.</p>
            <button onClick={() => setStatus('idle')} className="mt-8 text-[14px] font-semibold underline underline-offset-4">Send another message</button>
          </motion.div>
        ) : (
          <motion.form key="form" exit={{ opacity: 0 }} onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <h2 className="font-display text-4xl">Share your problem</h2>
              <p className="mt-2 text-[15px] text-muted">Fields marked * are required.</p>
            </div>
            <div>
              <label className="label" htmlFor="name">Full name *</label>
              <input id="name" name="name" required className="field" placeholder="Your name" />
            </div>
            <div>
              <label className="label" htmlFor="email">Email *</label>
              <input id="email" name="email" type="email" required className="field" placeholder="you@example.com" />
            </div>
            <div>
              <label className="label" htmlFor="phone">Phone number *</label>
              <input id="phone" name="phone" type="tel" required pattern="[0-9+\s-]{10,15}" className="field" placeholder="+91 98765 43210" />
            </div>
            <div>
              <label className="label" htmlFor="city">City / Village</label>
              <input id="city" name="city" className="field" placeholder="Where do you live?" />
            </div>
            <div>
              <label className="label" htmlFor="category">Problem category *</label>
              <select id="category" name="category" required defaultValue="" className="field">
                <option value="" disabled>Select a category</option>
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <span className="label">Urgency</span>
              <div className="relative grid grid-cols-2 rounded-2xl border border-line bg-linen p-1">
                {['Normal', 'Urgent'].map((u) => (
                  <button key={u} type="button" onClick={() => setUrgency(u)} className="relative z-10 rounded-xl py-3 text-[15px] font-semibold">
                    {urgency === u && (
                      <motion.span
                        layoutId="urgency"
                        className={`absolute inset-0 -z-10 rounded-xl ${u === 'Urgent' ? 'bg-red-600' : 'bg-ink'}`}
                        transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                      />
                    )}
                    <span className={urgency === u ? 'text-white' : 'text-ink/60'}>{u}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="label" htmlFor="subject">Subject *</label>
              <input id="subject" name="subject" required className="field" placeholder="In a few words, what is the problem?" />
            </div>
            <div className="sm:col-span-2">
              <label className="label" htmlFor="message">Describe your problem *</label>
              <textarea id="message" name="message" required rows={6} className="field resize-none" placeholder="Tell us what happened and how we can help…" data-lenis-prevent />
            </div>
            <div className="sm:col-span-2">
              <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-dashed border-line bg-linen px-5 py-4 transition-colors hover:border-ink">
                <Paperclip size={22} className="text-saffron" />
                <span className="text-[14px]">
                  <b>{fileName || 'Attach documents or photos'}</b>
                  <span className="block text-muted">Optional · PDF, JPG or PNG</span>
                </span>
                <input type="file" name="attachment" accept=".pdf,image/*" className="sr-only" onChange={(e) => setFileName(e.target.files?.[0]?.name || '')} />
              </label>
            </div>
            <label className="flex items-start gap-3 text-[14px] text-muted sm:col-span-2">
              <input type="checkbox" required className="mt-1 h-4 w-4 accent-saffron" />
              <span>
                I agree to the <Link to="/privacy-policy" className="font-semibold text-ink underline underline-offset-2">Privacy Policy</Link> and{' '}
                <Link to="/terms" className="font-semibold text-ink underline underline-offset-2">Terms &amp; Conditions</Link>.
              </span>
            </label>
            {status === 'error' && (
              <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-[14px] text-red-700 sm:col-span-2">
                <WarningCircle size={18} /> Something went wrong. Please try again or email us at {site.email}.
              </p>
            )}
            <div className="sm:col-span-2">
              <Button type="submit" variant="accent" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <span className="flex items-center gap-2"><CircleNotch className="animate-spin" /> Sending…</span>
                ) : (
                  'Send message'
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        crumb="Contact Us"
        lines={['Tell us your', 'problem. We’re *here*.']}
        text="Your information is kept 100% confidential. Every message is read by our team — no problem is too big or too small."
      />

      <section className="container-x pb-24 sm:pb-32">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ProblemForm />
          </div>
          <Reveal className="space-y-3 lg:col-span-4" stagger={0.06}>
            <a
              data-reveal
              href={`tel:${site.helpline.replace(/\s/g, '')}`}
              className="block overflow-hidden rounded-2xl bg-red-600 p-6 text-white"
            >
              <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/80">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                Emergency helpline · 24×7
              </span>
              <span className="mt-4 flex items-center gap-3 font-display text-4xl">
                <Siren size={32} weight="duotone" /> {site.helpline}
              </span>
            </a>
            <InfoCard icon={MapPin} title="Office">{site.address}</InfoCard>
            <InfoCard icon={Phone} title="Phone" href={`tel:${site.phone}`}>{site.phone}</InfoCard>
            <InfoCard icon={EnvelopeSimple} title="Email" href={`mailto:${site.email}`}>{site.email}</InfoCard>
            <InfoCard icon={WhatsappLogo} title="WhatsApp" href={site.socials.whatsapp}>{site.whatsapp}</InfoCard>
            <InfoCard icon={Clock} title="Working hours">{site.hours}</InfoCard>
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-24 sm:pb-32">
        <div className="overflow-hidden rounded-[2rem] border border-line">
          <iframe
            title="Samarpita office location"
            src="https://www.google.com/maps?q=Bhubaneswar,Odisha&output=embed"
            className="h-[420px] w-full grayscale-[0.6] contrast-[1.05]"
            loading="lazy"
          />
        </div>
      </section>

      <section className="container-x pb-24 sm:pb-36">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">FAQ</span>
            <SplitHeading lines={['Questions,', '*answered*']} className="mt-5 text-[clamp(2.5rem,4.5vw,4rem)]" />
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  )
}
