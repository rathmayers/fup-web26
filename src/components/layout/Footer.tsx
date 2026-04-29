import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const FOOTER_COLS = [
  {
    heading: 'Leistungen',
    links: [
      { label: 'Interim Management', href: '/leistungen/interim-management' },
      { label: 'Consulting', href: '/leistungen/consulting' },
      { label: 'Business Transformation', href: '/leistungen/business-transformation' },
      { label: 'Restrukturierung & Sanierung', href: '/leistungen/restrukturierung-sanierung' },
      { label: 'Digitale Transformation', href: '/leistungen/digitale-transformation' },
      { label: 'Quick Scan', href: '/leistungen/quick-scan' },
    ],
  },
  {
    heading: 'Branchen',
    links: [
      { label: 'Konsumgüter & FMCG', href: '/branchen/konsumgueter' },
      { label: 'Automotive & Mobility', href: '/branchen/automotive' },
      { label: 'Private Equity / M&A', href: '/branchen/private-equity' },
      { label: 'Healthcare', href: '/branchen/healthcare' },
      { label: 'Maschinen- & Anlagenbau', href: '/branchen/maschinen-anlagenbau' },
      { label: 'Alle Branchen', href: '/branchen' },
    ],
  },
  {
    heading: 'Unternehmen',
    links: [
      { label: 'Über uns', href: '/ueber-uns' },
      { label: 'Team & Experten', href: '/ueber-uns/team' },
      { label: 'Case Studies', href: '/ueber-uns/case-studies' },
      { label: 'Standorte', href: '/ueber-uns/standorte' },
      { label: 'Insights', href: '/insights' },
      { label: 'Interim Manager werden', href: '/interim-manager-werden' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-paper-border bg-paper-warm mt-auto">
      <div className="site-container section-sm">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="font-display text-2xl text-ink tracking-tight block mb-4"
              style={{ letterSpacing: '-0.03em' }}
            >
              F&P
            </Link>
            <p className="text-sm text-ink-muted leading-relaxed mb-5" style={{ maxWidth: '24ch' }}>
              F&P Executive Solutions AG — Consulting, Interim Management & Projektmanagement seit 2009.
            </p>
            <div className="space-y-2.5">
              <a
                href="tel:+494080008459"
                className="flex items-center gap-2.5 text-sm text-ink-muted hover:text-ink transition-colors"
              >
                <Phone size={13} className="shrink-0" />
                +49 40 800084592
              </a>
              <a
                href="mailto:kontakt@fup-ag.com"
                className="flex items-center gap-2.5 text-sm text-ink-muted hover:text-ink transition-colors"
              >
                <Mail size={13} className="shrink-0" />
                kontakt@fup-ag.com
              </a>
              <span className="flex items-center gap-2.5 text-sm text-ink-muted">
                <MapPin size={13} className="shrink-0" />
                Am Kaiserkai 69, 20457 Hamburg
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <p className="label mb-4">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted hover:text-ink transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-paper-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} F&P Executive Solutions AG. Alle Rechte vorbehalten.
          </p>
          <nav className="flex items-center gap-5">
            <Link href="/datenschutz" className="text-xs text-ink-faint hover:text-ink transition-colors">
              Datenschutz
            </Link>
            <Link href="/impressum" className="text-xs text-ink-faint hover:text-ink transition-colors">
              Impressum
            </Link>
            <Link href="/kontakt" className="text-xs text-ink-faint hover:text-ink transition-colors">
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
