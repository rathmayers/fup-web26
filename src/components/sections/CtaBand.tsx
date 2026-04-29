import Link from 'next/link'
import { Phone, Mail, ArrowRight } from 'lucide-react'

export default function CtaBand() {
  return (
    <section className="section-sm border-b border-paper-border bg-ink text-paper">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Left */}
          <div>
            <p className="label mb-3" style={{ color: 'rgba(250,250,248,0.45)' }}>Jetzt starten</p>
            <h2 style={{ color: 'var(--paper)' }} className="text-3xl">
              Sprechen Sie noch heute mit uns.
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <a
              href="tel:+494080008459"
              className="flex items-center gap-2.5 text-sm text-paper opacity-70 hover:opacity-100 transition-opacity"
            >
              <Phone size={14} />
              +49 40 800084592
            </a>
            <a
              href="mailto:kontakt@fup-ag.com"
              className="flex items-center gap-2.5 text-sm text-paper opacity-70 hover:opacity-100 transition-opacity"
            >
              <Mail size={14} />
              kontakt@fup-ag.com
            </a>
            <Link
              href="/kontakt"
              className="btn text-sm px-5 py-2.5"
              style={{
                background: 'var(--paper)',
                color: 'var(--ink)',
                border: 'none',
              }}
            >
              Experten anfragen
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
