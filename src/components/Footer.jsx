import { Link } from 'react-router-dom'
import { FacebookLogo, InstagramLogo, YoutubeLogo, XLogo, WhatsappLogo, ArrowUp, EnvelopeSimple, Phone, MapPin } from '@phosphor-icons/react'
import Logo from './Logo'
import { nav, site } from '../data/site'
import { scrollToTop } from '../lib/lenis'

const socials = [
  { icon: FacebookLogo, href: site.socials.facebook, label: 'Facebook' },
  { icon: InstagramLogo, href: site.socials.instagram, label: 'Instagram' },
  { icon: YoutubeLogo, href: site.socials.youtube, label: 'YouTube' },
  { icon: XLogo, href: site.socials.x, label: 'X' },
  { icon: WhatsappLogo, href: site.socials.whatsapp, label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="theme-dark grain relative overflow-hidden border-t border-line bg-cream">
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,var(--c-brand),transparent)] opacity-10" />
      <div className="container-x relative pt-20 sm:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
              A team of social workers from Odisha dedicated to supporting anyone in need — with compassion, honesty and dignity.
            </p>
            <div className="mt-8 flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink/80 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-night"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-muted">Explore</h4>
              <ul className="space-y-3">
                {nav.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="text-ink/80 transition-colors hover:text-brand">{n.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-muted">Legal</h4>
              <ul className="space-y-3">
                <li><Link to="/privacy-policy" className="text-ink/80 transition-colors hover:text-brand">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-ink/80 transition-colors hover:text-brand">Terms &amp; Conditions</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-muted">Reach us</h4>
              <ul className="space-y-4 text-[14px] text-ink/80">
                <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-brand" />{site.address}</li>
                <li className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-brand" /><a href={`tel:${site.phoneRaw}`} className="hover:text-brand">{site.phone}</a></li>
                <li className="flex gap-3"><EnvelopeSimple size={18} className="mt-0.5 shrink-0 text-brand" /><a href={`mailto:${site.email}`} className="break-all hover:text-brand">{site.email}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pointer-events-none mt-16 select-none text-center leading-[1.1] text-brand/[0.08]">
          <span className="odia-callig text-[30vw] lg:text-[19rem]">{site.odia}</span>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-8 text-[13px] text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Team Samarpita. All rights reserved. Made with ❤ in Odisha.</p>
          <button onClick={() => scrollToTop(false)} className="group flex items-center gap-2 transition-colors hover:text-ink">
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-transform group-hover:-translate-y-1">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
