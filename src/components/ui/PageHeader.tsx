interface PageHeaderProps {
  label?: string
  title: string
  description?: string
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="section-sm border-b border-paper-border">
      <div className="site-container">
        {label && <p className="label mb-4">{label}</p>}
        <h1 className="mb-4" style={{ maxWidth: '18ch' }}>{title}</h1>
        {description && (
          <p className="text-base text-ink-muted leading-relaxed" style={{ maxWidth: '60ch' }}>
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
