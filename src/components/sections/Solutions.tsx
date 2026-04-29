import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Solution } from '@/types'

const FALLBACK: Solution[] = [
  { _id: '1', title: 'Interim Management', slug: { current: 'interim-management' }, icon: '—', teaser: 'Erfahrene Manager auf Zeit für Führungslücken und Transformationen.', category: 'schwerpunkt' },
  { _id: '2', title: 'Consulting', slug: { current: 'consulting' }, icon: '—', teaser: 'Strategische Beratung kombiniert mit operativer Umsetzungsstärke.', category: 'schwerpunkt' },
  { _id: '3', title: 'Restrukturierung', slug: { current: 'restrukturierung-sanierung' }, icon: '—', teaser: 'Unternehmen in der Krise stabilisieren und neu ausrichten.', category: 'schwerpunkt' },
  { _id: '4', title: 'Digitale Transformation', slug: { current: 'digitale-transformation' }, icon: '—', teaser: 'Digitalisierungsprojekte end-to-end begleiten und umsetzen.', category: 'schwerpunkt' },
  { _id: '5', title: 'Private Equity / M&A', slug: { current: 'private-equity' }, icon: '—', teaser: 'Spezialisierte Unterstützung für Transaktionen und Post-Merger-Integration.', category: 'schwerpunkt' },
  { _id: '6', title: 'Quick Scan', slug: { current: 'quick-scan' }, icon: '—', teaser: 'Schnelle Unternehmensanalyse mit klaren Handlungsempfehlungen.', category: 'schwerpunkt' },
]

interface SolutionsProps {
  solutions?: Solution[]
}

export default function Solutions({ solutions = FALLBACK }: SolutionsProps) {
  return (
    <section className="section border-b border-paper-border">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="label mb-3">Leistungen</p>
            <h2>Was wir tun</h2>
          </div>
          <Link href="/leistungen" className="btn btn-ghost text-sm group">
            Alle Leistungen
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper-border border border-paper-border rounded-sm overflow-hidden">
          {solutions.map((sol) => (
            <Link
              key={sol._id}
              href={`/leistungen/${sol.slug.current}`}
              className="group bg-paper p-7 flex flex-col hover:bg-paper-warm transition-colors"
            >
              <h4 className="text-ink mb-3 group-hover:underline underline-offset-2">{sol.title}</h4>
              <p className="text-sm text-ink-muted leading-relaxed flex-1">{sol.teaser}</p>
              <span className="mt-5 text-xs text-ink-faint group-hover:text-ink transition-colors flex items-center gap-1">
                Mehr erfahren <ArrowRight size={11} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
