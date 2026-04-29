import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'insight',
  title: 'Insight',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: { list: [
        { title: 'Blog', value: 'blog' },
        { title: 'News', value: 'news' },
        { title: 'Event', value: 'event' },
        { title: 'Webinar', value: 'webinar' },
        { title: 'Veröffentlichung', value: 'publication' },
      ]},
      validation: (r) => r.required(),
    }),
    defineField({ name: 'teaser', title: 'Teaser', type: 'text', rows: 3 }),
    defineField({ name: 'publishedAt', title: 'Datum', type: 'date' }),
    defineField({ name: 'body', title: 'Inhalt', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'author', title: 'Autor', type: 'reference', to: [{ type: 'teamMember' }] }),
  ],
})
