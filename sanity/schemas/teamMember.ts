import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team-Mitglied',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Rolle / Titel', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'isPartner', title: 'Partner?', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Reihenfolge', type: 'number' }),
    defineField({ name: 'bio', title: 'Kurzbiografie', type: 'text', rows: 4 }),
    defineField({ name: 'image', title: 'Foto', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
  ],
})
