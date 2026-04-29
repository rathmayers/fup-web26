import { isSanityConfigured } from '@/lib/sanity.client'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const dynamic = 'force-dynamic'

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div style={{ padding: '4rem 2rem', fontFamily: 'monospace' }}>
        <h2>Sanity Studio nicht konfiguriert</h2>
        <p style={{ marginTop: '1rem', color: '#666' }}>
          Bitte <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> in{' '}
          <code>.env.local</code> eintragen und den Dev-Server neu starten.
        </p>
        <p style={{ marginTop: '0.5rem', color: '#666' }}>
          Siehe <code>README.md</code> → Schnellstart Schritt 2 &amp; 3.
        </p>
      </div>
    )
  }
  return <NextStudio config={config} />
}
