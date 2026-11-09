import Button from './Button'
import SplitHeading from './SplitHeading'
import Reveal from './Reveal'

export default function CTABand({
  lines = ['Facing a problem?', 'You are *not* alone.'],
  text = 'Share what you are going through. Our team reads every message and will reach out to you, free of cost, in complete confidence.',
  primary = { label: 'Share your problem', to: '/contact' },
  secondary = { label: 'Register as blood donor', to: '/blood-donation' },
}) {
  return (
    <section className="container-x py-20 sm:py-28">
      <div className="theme-dark grain relative overflow-hidden rounded-[2rem] bg-forest px-6 py-16 ring-1 ring-line sm:rounded-[3rem] sm:px-16 sm:py-24">
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,var(--c-brand),transparent)] opacity-30" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,var(--c-moss),transparent)] opacity-60" />
        <div className="relative grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SplitHeading lines={lines} className="text-[clamp(2.75rem,6vw,5.5rem)]" />
          </div>
          <Reveal className="lg:col-span-4">
            <p data-reveal className="leading-relaxed text-ink/70">{text}</p>
            <div data-reveal className="mt-8 flex flex-wrap gap-3">
              <Button to={primary.to} variant="accent">{primary.label}</Button>
              {secondary && <Button to={secondary.to} variant="outline" icon={false}>{secondary.label}</Button>}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
