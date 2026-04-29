import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'F&P Executive Solutions AG — Interim Management & Consulting',
    template: '%s | F&P Executive Solutions AG',
  },
  description:
    'Seit 2009 vermitteln wir qualitätsgesicherte Interim Manager, Berater und Expertenteams. In 48 Stunden zum passenden Experten.',
  metadataBase: new URL('https://www.fup-ag.com'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.fup-ag.com',
    siteName: 'F&P Executive Solutions AG',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
