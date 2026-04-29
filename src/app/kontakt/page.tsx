import type { Metadata } from 'next'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Sprechen Sie direkt mit uns. Heute anfragen — Profile innerhalb von 48 Stunden.',
}

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        label="Kontakt"
        title="Sprechen wir."
        description="Heute anfragen, Profile in 48 h, Start in 3–10 Tagen. Wir sprechen Ihre Sprache."
      />

      <section className="section border-b border-paper-border">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-14">
            {/* Form */}
            <ContactForm />

            {/* Contact info */}
            <aside className="space-y-8">
              <div className="card space-y-5">
                <p className="label">Direkt erreichen</p>
                <a
                  href="tel:+494080008459"
                  className="flex items-center gap-3 text-sm text-ink-muted hover:text-ink transition-colors group"
                >
                  <span className="w-8 h-8 border border-paper-border rounded-sm flex items-center justify-center group-hover:border-ink-muted transition-colors shrink-0">
                    <Phone size={13} />
                  </span>
                  +49 40 800084592
                </a>
                <a
                  href="mailto:kontakt@fup-ag.com"
                  className="flex items-center gap-3 text-sm text-ink-muted hover:text-ink transition-colors group"
                >
                  <span className="w-8 h-8 border border-paper-border rounded-sm flex items-center justify-center group-hover:border-ink-muted transition-colors shrink-0">
                    <Mail size={13} />
                  </span>
                  kontakt@fup-ag.com
                </a>
                <a
                  href="https://wa.me/491712177320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-ink-muted hover:text-ink transition-colors group"
                >
                  <span className="w-8 h-8 border border-paper-border rounded-sm flex items-center justify-center group-hover:border-ink-muted transition-colors shrink-0">
                    <MessageCircle size={13} />
                  </span>
                  WhatsApp
                </a>
              </div>

              <div className="card">
                <p className="label mb-4">Hauptsitz</p>
                <address className="not-italic text-sm text-ink-muted leading-relaxed">
                  <span className="flex items-start gap-2.5">
                    <MapPin size={13} className="shrink-0 mt-0.5" />
                    <span>
                      F&P Executive Solutions AG<br />
                      Am Kaiserkai 69<br />
                      20457 Hamburg
                    </span>
                  </span>
                </address>
              </div>

              <div className="card">
                <p className="label mb-3">Unser Versprechen</p>
                <ul className="space-y-2.5">
                  {[
                    'Rückmeldung innerhalb von 4 Stunden',
                    'Erste Profile in 48 Stunden',
                    'Einsatzstart in 3–10 Tagen',
                    'Diskrete und vertrauliche Behandlung',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                      <span className="w-1 h-1 rounded-full bg-ink-faint mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
