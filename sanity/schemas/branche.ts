import { defineType, defineField } from 'sanity'

// ── Branche ───────────────────────────────────────────
const branche = defineType({
  name: 'branche',
  title: 'Branche',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'icon', title: 'Icon (optional)', type: 'string' }),
    defineField({ name: 'order', title: 'Reihenfolge', type: 'number' }),
    defineField({ name: 'teaser', title: 'Teaser', type: 'text', rows: 3, validation: (r) => r.required().max(180) }),
    defineField({ name: 'body', title: 'Inhalt', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'relatedSolutions', title: 'Zugehörige Leistungen', type: 'array', of: [{ type: 'reference', to: [{ type: 'solution' }] }] }),
    defineField({ name: 'relatedCaseStudies', title: 'Zugehörige Case Studies', type: 'array', of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }] }),
  ],
})

export default branche
