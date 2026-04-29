import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'solution',
  title: 'Leistung',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: { list: [{ title: 'Schwerpunkt', value: 'schwerpunkt' }, { title: 'Funktion', value: 'funktion' }] },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'icon', title: 'Icon (optional)', type: 'string', description: 'Lucide icon name, z.B. "briefcase"' }),
    defineField({ name: 'order', title: 'Reihenfolge', type: 'number' }),
    defineField({ name: 'teaser', title: 'Teaser', type: 'text', rows: 3, validation: (r) => r.required().max(180) }),
    defineField({ name: 'body', title: 'Inhalt', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'relatedCaseStudies',
      title: 'Zugehörige Case Studies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }],
    }),
  ],
  orderings: [{ title: 'Reihenfolge', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
