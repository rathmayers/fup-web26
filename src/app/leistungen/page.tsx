import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllSolutions } from '@/lib/queries'
import PageHeader from '@/components/ui/PageHeader'
import CtaBand from '@/components/sections/CtaBand'

export const metadata: Metadata = {
  title: 'Leistungen',
  description: 'Interim Management, Consulting und spezialisierte Funktionen — unser vollständiges Leistungsportfolio.',
}

export const revalidate = 3600

export default async function LeistungenPage() {
  let solutions: { category: string; _id: string; title: string; slug: { current: string }; teaser: string }[] = []
  try {
    const result = await getAllSolutions()
    if (result) solutions = result
  } catch { /* fallback to empty */ }

  const schwerpunkte = solutions.filter((s) => s.category === 'schwerpunkt')
  const funktionen   = solutions.filter((s) => s.category === 'funktion')

  return (
    <>
      <PageHeader
        label="Leistungen"
        title="Was wir für Sie tun"
        description="Wir kombinieren strategische Beratung mit operativer Umsetzungsstärke — von der Konzeption bis zur Ergebnisverantwortung."
      />

      <section className="section border-b border-paper-border">
        <div className="site-container">
          {/* Schwerpunkte */}
          <p className="label mb-6">Schwerpunkte</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper-border border border-paper-border rounded-sm overflow-hidden mb-14">
            {(schwerpunkte.length ? schwerpunkte : FALLBACK_SCHWERPUNKTE).map((sol: { _id: string; title: string; slug: { current: string }; teaser: string }) => (
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

          {/* Funktionen */}
          <p className="label mb-6">Funktionen</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper-border border border-paper-border rounded-sm overflow-hidden">
            {(funktionen.length ? funktionen : FALLBACK_FUNKTIONEN).map((sol: { _id: string; title: string; slug: { current: string }; teaser: string }) => (
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

      <CtaBand />
    </>
  )
}

const FALLBACK_SCHWERPUNKTE = [
  { _id: '1', title: 'Interim Management', slug: { current: 'interim-management' }, teaser: 'Erfahrene Manager auf Zeit für Führungslücken und Transformationen.' },
  { _id: '2', title: 'Consulting', slug: { current: 'consulting' }, teaser: 'Strategische Beratung kombiniert mit operativer Umsetzungsstärke.' },
  { _id: '3', title: 'Business Transformation', slug: { current: 'business-transformation' }, teaser: 'Ganzheitliche Transformation — von der Strategie bis zur Umsetzung.' },
  { _id: '4', title: 'Restrukturierung & Sanierung', slug: { current: 'restrukturierung-sanierung' }, teaser: 'Unternehmen in der Krise stabilisieren und nachhaltig neu ausrichten.' },
  { _id: '5', title: 'Digitale Transformation', slug: { current: 'digitale-transformation' }, teaser: 'Digitalisierungsprojekte end-to-end begleiten und umsetzen.' },
  { _id: '6', title: 'Quick Scan', slug: { current: 'quick-scan' }, teaser: 'Schnelle Unternehmensanalyse mit klaren Handlungsempfehlungen in wenigen Tagen.' },
]

const FALLBACK_FUNKTIONEN = [
  { _id: 'f1', title: 'Finance & CFO', slug: { current: 'finance' }, teaser: 'Interims-CFOs und Finance-Experten für Reporting, Controlling und Restrukturierung.' },
  { _id: 'f2', title: 'Vertrieb', slug: { current: 'vertrieb' }, teaser: 'Vertriebsführung und -steuerung für nachhaltiges Umsatzwachstum.' },
  { _id: 'f3', title: 'Supply Chain', slug: { current: 'supply-chain' }, teaser: 'Optimierung von Lieferketten und Beschaffungsorganisationen.' },
  { _id: 'f4', title: 'Human Resources', slug: { current: 'human-resources' }, teaser: 'Interims-HR-Manager für Transformation, Restrukturierung und Change.' },
  { _id: 'f5', title: 'IT & Digitalisierung', slug: { current: 'it' }, teaser: 'CIO/CTO auf Zeit und IT-Projektleitung für komplexe Digitalisierungsvorhaben.' },
  { _id: 'f6', title: 'Marketing', slug: { current: 'marketing' }, teaser: 'Marketingführung und Markenstrategie mit messbaren Ergebnissen.' },
]
