const DEFAULT_STEPS = [
  {
    step: '01',
    title: 'Anfrage stellen',
    description: 'Teilen Sie uns Ihren Bedarf mit — telefonisch, per E-Mail oder über unser Formular.',
  },
  {
    step: '02',
    title: 'Profile in 48 h',
    description: 'Wir senden Ihnen vorselektierte Experten-Profile, passend zu Ihren Anforderungen.',
  },
  {
    step: '03',
    title: 'Kandidaten wählen',
    description: 'Im Video-Call lernen Sie Ihren Kandidaten kennen. Nicht überzeugt? Wir suchen weiter.',
  },
  {
    step: '04',
    title: 'Start in 3–10 Tagen',
    description: 'Der Experte übernimmt — operativ, ergebnisorientiert, auf Augenhöhe.',
  },
]

interface ProcessProps {
  steps?: typeof DEFAULT_STEPS
}

export default function Process({ steps = DEFAULT_STEPS }: ProcessProps) {
  return (
    <section className="section border-b border-paper-border">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="label mb-3">So funktioniert es</p>
            <h2>Schnell. Klar. Einsatzbereit.</h2>
          </div>
          <p className="text-sm text-ink-muted md:max-w-[36ch] md:text-right">
            Von der Anfrage bis zum Einsatz in weniger als einer Woche.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-paper-border rounded-sm overflow-hidden">
          {steps.map((item, i) => (
            <div
              key={item.step}
              className={`p-7 ${i < steps.length - 1 ? 'border-b sm:border-b-0 sm:border-r lg:border-r border-paper-border' : ''}`}
            >
              <span className="font-display text-4xl text-paper-mid block mb-5 leading-none select-none">
                {item.step}
              </span>
              <h4 className="mb-2 text-ink">{item.title}</h4>
              <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
