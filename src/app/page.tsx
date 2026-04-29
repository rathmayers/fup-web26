import { getHomepage } from '@/lib/queries'
import Hero from '@/components/sections/Hero'
import Process from '@/components/sections/Process'
import Solutions from '@/components/sections/Solutions'
import Branchen from '@/components/sections/Branchen'
import CtaBand from '@/components/sections/CtaBand'

export const revalidate = 3600 // ISR: revalidate every hour

export default async function HomePage() {
  // Fetch CMS data; gracefully fall back to component defaults on error
  let data = null
  try {
    data = await getHomepage()
  } catch {
    // Sanity not yet configured — components use built-in defaults
  }

  return (
    <>
      <Hero
        headline={data?.heroHeadline}
        subline={data?.heroSubline}
        trustSignals={data?.trustSignals}
      />
      <Process steps={data?.processSteps} />
      <Solutions solutions={data?.featuredSolutions} />
      <Branchen branchen={data?.featuredBranchen} />
      <CtaBand />
    </>
  )
}
