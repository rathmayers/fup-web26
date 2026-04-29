'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown, X, Menu, Phone, Mail } from 'lucide-react'
import clsx from 'clsx'

// ── Nav data ────────────────────────────────────────────
const NAV = [
  {
    label: 'Leistungen',
    href: '/leistungen',
    columns: [
      {
        heading: 'Einstieg',
        links: [
          { label: 'Quick Scan', href: '/leistungen/quick-scan', featured: true },
          { label: 'Wie es funktioniert', href: '/leistungen/wie-es-funktioniert' },
        ],
      },
      {
        heading: 'Schwerpunkte',
        links: [
          { label: 'Interim Management', href: '/leistungen/interim-management' },
          { label: 'Consulting', href: '/leistungen/consulting' },
          { label: 'Business Transformation', href: '/leistungen/business-transformation' },
          { label: 'Restrukturierung & Sanierung', href: '/leistungen/restrukturierung-sanierung' },
          { label: 'Digitale Transformation', href: '/leistungen/digitale-transformation' },
          { label: 'Private Equity / M&A', href: '/leistungen/private-equity' },
        ],
      },
      {
        heading: 'Funktionen',
        links: [
          { label: 'Finance & CFO', href: '/leistungen/finance' },
          { label: 'Vertrieb', href: '/leistungen/vertrieb' },
          { label: 'Supply Chain', href: '/leistungen/supply-chain' },
          { label: 'Human Resources', href: '/leistungen/human-resources' },
          { label: 'IT & Digitalisierung', href: '/leistungen/it' },
          { label: 'Marketing', href: '/leistungen/marketing' },
          { label: 'ESG', href: '/leistungen/esg' },
        ],
      },
    ],
  },
  {
    label: 'Branchen',
    href: '/branchen',
    columns: [
      {
        heading: 'Industrie',
        links: [
          { label: 'Konsumgüter & FMCG', href: '/branchen/konsumgueter' },
          { label: 'Automotive & Mobility', href: '/branchen/automotive' },
          { label: 'Maschinen- & Anlagenbau', href: '/branchen/maschinen-anlagenbau' },
          { label: 'Papier & Verpackung', href: '/branchen/papier-verpackung' },
          { label: 'Lebensmittelindustrie', href: '/branchen/lebensmittel' },
        ],
      },
      {
        heading: 'Weitere Branchen',
        links: [
          { label: 'Healthcare', href: '/branchen/healthcare' },
          { label: 'Energiewirtschaft', href: '/branchen/energie' },
          { label: 'Handel & Retail', href: '/branchen/handel' },
          { label: 'Hospitality', href: '/branchen/hospitality' },
          { label: 'Private Equity', href: '/branchen/private-equity' },
        ],
      },
    ],
  },
  {
    label: 'Über uns',
    href: '/ueber-uns',
    columns: [
      {
        heading: 'Unternehmen',
        links: [
          { label: 'Unser Ansatz', href: '/ueber-uns' },
          { label: 'Vorstand & Management', href: '/ueber-uns/management' },
          { label: 'Partner-Netzwerk', href: '/ueber-uns/partner-netzwerk' },
          { label: 'Standorte', href: '/ueber-uns/standorte' },
          { label: 'Kooperationspartner', href: '/ueber-uns/kooperationspartner' },
        ],
      },
      {
        heading: 'Nachweise',
        links: [
          { label: 'Case Studies', href: '/ueber-uns/case-studies' },
          { label: 'Team & Experten', href: '/ueber-uns/team' },
          { label: 'F&P Academy', href: '/ueber-uns/academy' },
        ],
      },
    ],
  },
  {
    label: 'Insights',
    href: '/insights',
    columns: [
      {
        heading: 'Content',
        links: [
          { label: 'Blog & Artikel', href: '/insights/blog' },
          { label: 'Webinare', href: '/insights/webinare' },
          { label: 'Videos', href: '/insights/videos' },
          { label: 'Veröffentlichungen', href: '/insights/veroeffentlichungen' },
        ],
      },
      {
        heading: 'Aktuell',
        links: [
          { label: 'News', href: '/insights/news' },
          { label: 'Events', href: '/insights/events' },
          { label: 'Newsletter', href: '/kontakt#newsletter' },
        ],
      },
    ],
  },
]

// ── Component ───────────────────────────────────────────
export default function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Close on route change
  useEffect(() => {
    setOpen(null)
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      {/* ── Fixed nav bar ── */}
      <header
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-paper border-b border-paper-border"
        style={{ height: 64 }}
      >
        <div className="site-container h-full flex items-center gap-1">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl tracking-tight text-ink mr-4 shrink-0"
            style={{ letterSpacing: '-0.03em' }}
          >
            F&P
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1">
            {NAV.map((item) => (
              <div key={item.label} className="relative">
                <button
                  className={clsx(
                    'flex items-center gap-1 px-3 py-2 text-sm rounded-sm transition-colors',
                    open === item.label
                      ? 'text-ink bg-paper-warm'
                      : 'text-ink-muted hover:text-ink hover:bg-paper-warm'
                  )}
                  onClick={() => setOpen(open === item.label ? null : item.label)}
                  aria-expanded={open === item.label}
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    className={clsx(
                      'transition-transform duration-200',
                      open === item.label ? 'rotate-180' : ''
                    )}
                  />
                </button>

                {/* Mega dropdown */}
                {open === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-paper border border-paper-border rounded-sm shadow-sm z-50"
                    style={{ minWidth: 480 }}
                  >
                    <div className="flex gap-8 p-6">
                      {item.columns.map((col) => (
                        <div key={col.heading} className="flex-1 min-w-[140px]">
                          <p className="label mb-3">{col.heading}</p>
                          <ul className="space-y-0.5">
                            {col.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className={clsx(
                                    'block px-2 py-1.5 text-sm rounded-sm transition-colors',
                                    (link as { featured?: boolean }).featured
                                      ? 'text-ink font-medium bg-paper-mid hover:bg-paper-border'
                                      : 'text-ink-muted hover:text-ink hover:bg-paper-warm'
                                  )}
                                >
                                  {link.label}
                                  {(link as { featured?: boolean }).featured && (
                                    <span className="ml-1.5 text-2xs">→</span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            <span className="label mr-2">DE</span>
            <Link
              href="/interim-manager-werden"
              className="btn btn-outline text-xs py-1.5 px-3"
            >
              Interim Manager werden
            </Link>
            <Link
              href="/kontakt"
              className="btn btn-primary text-xs py-1.5 px-3"
            >
              Experten anfragen
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto p-2 text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ── Spacer: prevents content jump under fixed nav ── */}
      <div style={{ height: 64 }} aria-hidden="true" />

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-paper overflow-y-auto">
          <div className="site-container py-6 space-y-6">
            {NAV.map((item) => (
              <div key={item.label}>
                <button
                  className="flex items-center gap-2 w-full text-left text-base font-medium text-ink py-2"
                  onClick={() => setOpen(open === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={clsx(
                      'ml-auto transition-transform duration-200',
                      open === item.label ? 'rotate-180' : ''
                    )}
                  />
                </button>
                {open === item.label && (
                  <div className="mt-2 pl-3 border-l border-paper-border space-y-4">
                    {item.columns.map((col) => (
                      <div key={col.heading}>
                        <p className="label mb-2">{col.heading}</p>
                        <ul className="space-y-1">
                          {col.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                className="text-sm text-ink-muted hover:text-ink block py-1"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                <hr className="divider mt-3" />
              </div>
            ))}

            {/* Mobile contact links */}
            <div className="space-y-3 pt-2">
              <a href="tel:+494080008459" className="flex items-center gap-3 text-sm text-ink-muted">
                <Phone size={15} /> +49 40 800084592
              </a>
              <a href="mailto:kontakt@fup-ag.com" className="flex items-center gap-3 text-sm text-ink-muted">
                <Mail size={15} /> kontakt@fup-ag.com
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link href="/interim-manager-werden" className="btn btn-outline text-sm text-center justify-center">
                Interim Manager werden
              </Link>
              <Link href="/kontakt" className="btn btn-primary text-sm text-center justify-center">
                Experten anfragen
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
