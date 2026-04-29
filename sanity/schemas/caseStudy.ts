import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'industry', title: 'Branche', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'result', title: 'Ergebnis (kurz)', type: 'string', description: 'z.B. "EBIT +12% in 8 Monaten"', validation: (r) => r.required() }),
    defineField({ name: 'teaser', title: 'Teaser', type: 'text', rows: 3, validation: (r) => r.required().max(220) }),
    defineField({ name: 'publishedAt', title: 'Datum', type: 'date' }),
    defineField({ name: 'body', title: 'Inhalt', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'relatedSolutions', title: 'Zugehörige Leistungen', type: 'array', of: [{ type: 'reference', to: [{ type: 'solution' }] }] }),
  ],
  orderings: [{ title: 'Neueste zuerst', name: 'dateDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
})
