import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllBranchen } from '@/lib/queries'
import PageHeader from '@/components/ui/PageHeader'
import CtaBand from '@/components/sections/CtaBand'

export const metadata: Metadata = {
  title: 'Branchen',
  description: 'F&P unterstützt Unternehmen in über 10 Branchen mit qualitätsgesicherten Interim Managern und Beratern.',
}

export const revalidate = 3600

const FALLBACK = [
  { _id: '1', title: 'Konsumgüter & FMCG', slug: { current: 'konsumgueter' }, teaser: 'Erfahrung aus über 200 Projekten in Konsumgüterunternehmen und Handelskonzernen.' },
  { _id: '2', title: 'Automotive & Mobility', slug: { current: 'automotive' }, teaser: 'Management-Expertise für OEMs, Zulieferer und Mobilitätsdienstleister.' },
  { _id: '3', title: 'Healthcare', slug: { current: 'healthcare' }, teaser: 'Spezialisierte Manager für Pharma, Medtech und Gesundheitsdienstleister.' },
  { _id: '4', title: 'Maschinen- & Anlagenbau', slug: { current: 'maschinen-anlagenbau' }, teaser: 'Turnaround und Transformation für den deutschen Mittelstand.' },
  { _id: '5', title: 'Private Equity / M&A', slug: { current: 'private-equity' }, teaser: 'Buy-Side, Sell-Side und Post-Merger-Integration aus einer Hand.' },
  { _id: '6', title: 'Energiewirtschaft', slug: { current: 'energie' }, teaser: 'Energietransformation und operative Führung in der Energiewirtschaft.' },
  { _id: '7', title: 'Handel & Retail', slug: { current: 'handel' }, teaser: 'Omnichannel, E-Commerce und stationärer Handel.' },
  { _id: '8', title: 'Papier & Verpackung', slug: { current: 'papier-verpackung' }, teaser: 'Branchenkenntnis in der Papier- und Verpackungsindustrie.' },
  { _id: '9', title: 'Lebensmittelindustrie', slug: { current: 'lebensmittel' }, teaser: 'FMCG und Lebensmittelproduktion — vom Mittelstand bis zum Konzern.' },
  { _id: '10', title: 'Hospitality', slug: { current: 'hospitality' }, teaser: 'Hotelmanagement, Gastronomie und touristische Dienstleistungen.' },
]

export default async function BranchenPage() {
  let branchen: { _id: string; title: string; slug: { current: string }; teaser: string }[] = []
  try {
    const result = await getAllBranchen()
    if (result) branchen = result
  } catch { /* fallback */ }

  const data = branchen.length ? branchen : FALLBACK

  return (
    <>
      <PageHeader
        label="Branchen"
        title="Branchenkenntnis trifft Management-Erfahrung"
        description="Unsere Experten kennen Ihre Branche aus eigener operativer Verantwortung — keine Berater von der Stange."
      />

      <section className="section border-b border-paper-border">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper-border border border-paper-border rounded-sm overflow-hidden">
            {data.map((b: { _id: string; title: string; slug: { current: string }; teaser: string }) => (
              <Link
                key={b._id}
                href={`/branchen/${b.slug.current}`}
                className="group bg-paper p-7 flex flex-col hover:bg-paper-warm transition-colors"
              >
                <h4 className="text-ink mb-3 group-hover:underline underline-offset-2">{b.title}</h4>
                <p className="text-sm text-ink-muted leading-relaxed flex-1">{b.teaser}</p>
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
