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
    <footer className="grain relative overflow-hidden bg-ink text-cream">
      <div className="container-x relative pt-20 sm:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-cream/60">
              A team of social workers dedicated to supporting anyone in need — with compassion, honesty and dignity.
            </p>
            <div className="mt-8 flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream/80 transition-all duration-300 hover:-translate-y-1 hover:border-saffron hover:bg-saffron hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-cream/40">Explore</h4>
              <ul className="space-y-3">
                {nav.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="text-cream/80 transition-colors hover:text-saffron">{n.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-cream/40">Legal</h4>
              <ul className="space-y-3">
                <li><Link to="/privacy-policy" className="text-cream/80 transition-colors hover:text-saffron">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-cream/80 transition-colors hover:text-saffron">Terms &amp; Conditions</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-cream/40">Reach us</h4>
              <ul className="space-y-4 text-[14px] text-cream/80">
                <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-saffron" />{site.address}</li>
                <li className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-saffron" /><a href={`tel:${site.phone}`}>{site.phone}</a></li>
                <li className="flex gap-3"><EnvelopeSimple size={18} className="mt-0.5 shrink-0 text-saffron" /><a href={`mailto:${site.email}`}>{site.email}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pointer-events-none mt-20 select-none text-center font-display leading-[0.8] tracking-[-0.04em] text-cream/[0.07] text-[22vw] lg:text-[17rem]">
          Samarpita
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream/10 py-8 text-[13px] text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Samarpita. All rights reserved. Made with ❤ for humanity.</p>
          <button onClick={() => scrollToTop(false)} className="group flex items-center gap-2 transition-colors hover:text-cream">
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-full border border-cream/20 transition-transform group-hover:-translate-y-1">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
