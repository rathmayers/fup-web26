import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  headline?: string
  subline?: string
  trustSignals?: string[]
}

export default function Hero({
  headline = 'In 48 Stunden zum richtigen Experten für Ihr Unternehmen.',
  subline = 'Seit 2009 vermitteln wir qualitätsgesicherte Interim Manager, Berater und Expertenteams für Transformation, Restrukturierung und Führungslücken.',
  trustSignals = ['Heute sprechen', 'Profile in 48 h', 'Start in 3–10 Tagen', 'Seit 2009'],
}: HeroProps) {
  return (
    <section className="section border-b border-paper-border">
      <div className="site-container">
        <div className="max-w-[720px]">
          {/* Overline */}
          <p className="label mb-6">F&P Executive Solutions AG</p>

          {/* Headline — display font, large */}
          <h1 className="mb-6" style={{ maxWidth: '15ch' }}>
            {headline}
          </h1>

          {/* Subline */}
          <p className="text-base md:text-lg text-ink-muted leading-relaxed mb-8" style={{ maxWidth: '56ch' }}>
            {subline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Link href="/kontakt" className="btn btn-primary">
              Experten anfragen
              <ArrowRight size={15} />
            </Link>
            <Link href="/interim-manager-werden" className="btn btn-outline">
              Interim Manager werden
            </Link>
          </div>

          {/* Trust signals */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {trustSignals.map((signal) => (
              <li key={signal} className="flex items-center gap-2 text-sm text-ink-faint">
                <span
                  className="inline-block w-1 h-1 rounded-full bg-ink-faint shrink-0"
                  aria-hidden
                />
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
