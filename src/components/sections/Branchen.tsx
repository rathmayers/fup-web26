import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Branche } from '@/types'

const FALLBACK: Branche[] = [
  { _id: '1', title: 'Konsumgüter & FMCG', slug: { current: 'konsumgueter' }, icon: '', teaser: '' },
  { _id: '2', title: 'Automotive & Mobility', slug: { current: 'automotive' }, icon: '', teaser: '' },
  { _id: '3', title: 'Healthcare', slug: { current: 'healthcare' }, icon: '', teaser: '' },
  { _id: '4', title: 'Maschinen- & Anlagenbau', slug: { current: 'maschinen-anlagenbau' }, icon: '', teaser: '' },
  { _id: '5', title: 'Private Equity / M&A', slug: { current: 'private-equity' }, icon: '', teaser: '' },
  { _id: '6', title: 'Energiewirtschaft', slug: { current: 'energie' }, icon: '', teaser: '' },
  { _id: '7', title: 'Handel & Retail', slug: { current: 'handel' }, icon: '', teaser: '' },
  { _id: '8', title: 'Papier & Verpackung', slug: { current: 'papier-verpackung' }, icon: '', teaser: '' },
  { _id: '9', title: 'Lebensmittelindustrie', slug: { current: 'lebensmittel' }, icon: '', teaser: '' },
]

interface BranchenProps {
  branchen?: Branche[]
}

export default function Branchen({ branchen = FALLBACK }: BranchenProps) {
  return (
    <section className="section border-b border-paper-border">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="label mb-3">Branchen</p>
            <h2>Unsere Industrien</h2>
          </div>
          <Link href="/branchen" className="btn btn-ghost text-sm group">
            Alle Branchen
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-0 border border-paper-border rounded-sm overflow-hidden">
          {branchen.map((b) => (
            <li key={b._id}>
              <Link
                href={`/branchen/${b.slug.current}`}
                className="group flex items-center justify-between px-5 py-4 border-b border-r border-paper-border hover:bg-paper-warm transition-colors"
              >
                <span className="text-sm font-medium text-ink group-hover:underline underline-offset-2">
                  {b.title}
                </span>
                <ArrowRight
                  size={13}
                  className="text-ink-faint opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
