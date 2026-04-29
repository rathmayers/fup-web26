'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const INDUSTRIES = [
  'Konsumgüter & FMCG', 'Automotive & Mobility', 'Healthcare',
  'Maschinen- & Anlagenbau', 'Private Equity / M&A', 'Energiewirtschaft',
  'Handel & Retail', 'Papier & Verpackung', 'Lebensmittelindustrie',
  'Hospitality', 'Sonstige',
]

const FUNCTIONS = [
  'General Management / CEO', 'Finance / CFO', 'Operations / COO',
  'Vertrieb / CSO', 'IT / CIO / CTO', 'Human Resources / CHRO',
  'Supply Chain', 'Marketing / CMO', 'Restrukturierung / Sanierung',
  'Digitale Transformation', 'Sonstige',
]

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // TODO: connect to HubSpot / email API
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start justify-center py-16">
        <p className="label mb-4 text-ink">Vielen Dank</p>
        <h2 className="mb-4">Ihre Anfrage ist eingegangen.</h2>
        <p className="text-ink-muted">
          Wir melden uns in der Regel innerhalb von 4 Stunden bei Ihnen. Erste Profile erhalten Sie innerhalb von 48 Stunden.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label block mb-1.5" htmlFor="vorname">Vorname</label>
          <input
            id="vorname"
            name="vorname"
            type="text"
            required
            placeholder="Max"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-paper-border rounded-sm focus:outline-none focus:border-ink-muted transition-colors"
          />
        </div>
        <div>
          <label className="label block mb-1.5" htmlFor="nachname">Nachname</label>
          <input
            id="nachname"
            name="nachname"
            type="text"
            required
            placeholder="Mustermann"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-paper-border rounded-sm focus:outline-none focus:border-ink-muted transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label block mb-1.5" htmlFor="email">E-Mail</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="max@unternehmen.de"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-paper-border rounded-sm focus:outline-none focus:border-ink-muted transition-colors"
          />
        </div>
        <div>
          <label className="label block mb-1.5" htmlFor="telefon">Telefon</label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            placeholder="+49 40 …"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-paper-border rounded-sm focus:outline-none focus:border-ink-muted transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="label block mb-1.5" htmlFor="unternehmen">Unternehmen</label>
        <input
          id="unternehmen"
          name="unternehmen"
          type="text"
          placeholder="Ihr Unternehmen GmbH"
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-paper-border rounded-sm focus:outline-none focus:border-ink-muted transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label block mb-1.5" htmlFor="branche">Branche</label>
          <select
            id="branche"
            name="branche"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-paper-border rounded-sm focus:outline-none focus:border-ink-muted transition-colors text-ink-muted"
          >
            <option value="">Bitte wählen</option>
            {INDUSTRIES.map((i) => <option key={i}>{i}</option>)}
          </select>
        </div>
        <div>
          <label className="label block mb-1.5" htmlFor="funktion">Gesuchte Funktion</label>
          <select
            id="funktion"
            name="funktion"
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-paper-border rounded-sm focus:outline-none focus:border-ink-muted transition-colors text-ink-muted"
          >
            <option value="">Bitte wählen</option>
            {FUNCTIONS.map((f) => <option key={f}>{f}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="label block mb-1.5" htmlFor="nachricht">Ihr Anliegen</label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={4}
          placeholder="Beschreiben Sie kurz Ihr Projekt, die Vakanz oder die Herausforderung …"
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-paper-border rounded-sm focus:outline-none focus:border-ink-muted transition-colors resize-none"
        />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="datenschutz"
            required
            className="mt-0.5 shrink-0 accent-ink"
          />
          <span className="text-xs text-ink-faint leading-relaxed">
            Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden.
            Weitere Informationen in unserer{' '}
            <a href="/datenschutz" className="underline underline-offset-2 hover:text-ink transition-colors">
              Datenschutzerklärung
            </a>.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary w-full sm:w-auto justify-center"
      >
        {loading ? 'Wird gesendet …' : 'Anfrage abschicken'}
        {!loading && <ArrowRight size={14} />}
      </button>
    </form>
  )
}
