import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getSolutionBySlug, getAllSolutions } from '@/lib/queries'
import PageHeader from '@/components/ui/PageHeader'
import PortableText from '@/components/ui/PortableText'
import CtaBand from '@/components/sections/CtaBand'

export const revalidate = 3600

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const solutions = await getAllSolutions()
    return solutions.map((s: { slug: { current: string } }) => ({ slug: s.slug.current }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const solution = await getSolutionBySlug(slug)
    if (!solution) return {}
    return { title: solution.title, description: solution.teaser }
  } catch {
    return {}
  }
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params
  let solution = null

  try {
    solution = await getSolutionBySlug(slug)
  } catch { /* CMS not configured */ }

  if (!solution && process.env.NODE_ENV === 'production') notFound()

  // Use placeholder in dev if CMS not set up
  const title = solution?.title ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())
  const teaser = solution?.teaser ?? 'Diese Seite wird in Kürze mit Inhalten aus dem CMS befüllt.'

  return (
    <>
      <PageHeader label="Leistungen" title={title} description={teaser} />

      <section className="section border-b border-paper-border">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14">
            {/* Main content */}
            <div className="prose max-w-none">
              {solution?.body ? (
                <PortableText value={solution.body} />
              ) : (
                <p className="text-ink-muted">
                  Inhalte werden über das Sanity CMS gepflegt. Bitte Inhalte im Studio anlegen.
                </p>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Contact CTA */}
              <div className="card">
                <p className="label mb-3">Jetzt anfragen</p>
                <p className="text-sm text-ink-muted mb-4">
                  Sprechen Sie direkt mit einem Experten. Heute anfragen, Profile in 48 h.
                </p>
                <Link href="/kontakt" className="btn btn-primary w-full justify-center">
                  Anfrage stellen <ArrowRight size={14} />
                </Link>
              </div>

              {/* Related case studies */}
              {solution?.relatedCaseStudies?.length > 0 && (
                <div>
                  <p className="label mb-4">Referenzen</p>
                  <ul className="space-y-3">
                    {solution.relatedCaseStudies.map((cs: { slug: { current: string }; title: string; industry: string; result: string }) => (
                      <li key={cs.slug.current}>
                        <Link
                          href={`/ueber-uns/case-studies/${cs.slug.current}`}
                          className="group block card py-4 px-5"
                        >
                          <p className="label mb-1.5">{cs.industry}</p>
                          <p className="text-sm font-medium text-ink group-hover:underline underline-offset-2 mb-1">
                            {cs.title}
                          </p>
                          <p className="text-xs text-ink-faint">{cs.result}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
