import Button from './Button'
import SplitHeading from './SplitHeading'
import Reveal from './Reveal'

export default function CTABand({
  lines = ['Facing a problem?', 'You are *not* alone.'],
  text = 'Share what you are going through. Our team reads every message and will reach out to you — free of cost, in complete confidence.',
  primary = { label: 'Share your problem', to: '/contact' },
  secondary = { label: 'Support our cause', to: '/support' },
}) {
  return (
    <section className="container-x py-20 sm:py-28">
      <div className="grain relative overflow-hidden rounded-[2rem] bg-forest px-6 py-16 text-cream sm:rounded-[3rem] sm:px-16 sm:py-24">
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-saffron/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-moss/60 blur-3xl" />
        <div className="relative grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SplitHeading lines={lines} className="text-[clamp(2.75rem,6vw,5.5rem)]" />
          </div>
          <Reveal className="lg:col-span-4">
            <p data-reveal className="text-cream/70 leading-relaxed">{text}</p>
            <div data-reveal className="mt-8 flex flex-wrap gap-3">
              <Button to={primary.to} variant="accent">{primary.label}</Button>
              {secondary && <Button to={secondary.to} variant="ghostLight" icon={false}>{secondary.label}</Button>}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
