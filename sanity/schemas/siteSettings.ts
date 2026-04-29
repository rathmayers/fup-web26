import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Website-Einstellungen',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'Seitenname', type: 'string' }),
    defineField({ name: 'siteDescription', title: 'Meta-Beschreibung', type: 'text', rows: 2 }),
    defineField({ name: 'phone', title: 'Telefon', type: 'string' }),
    defineField({ name: 'email', title: 'E-Mail', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp-Nummer', type: 'string' }),
    defineField({ name: 'address', title: 'Adresse', type: 'text', rows: 3 }),
  ],
})
