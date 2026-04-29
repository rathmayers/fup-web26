import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Startseite',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeadline', title: 'Hero-Überschrift', type: 'string' }),
    defineField({ name: 'heroSubline', title: 'Hero-Unterzeile', type: 'text', rows: 3 }),
    defineField({ name: 'heroCta', title: 'CTA-Button Text', type: 'string' }),
    defineField({ name: 'heroCtaSecondary', title: 'CTA-Button Text (sekundär)', type: 'string' }),
    defineField({
      name: 'trustSignals',
      title: 'Trust-Signale',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'z.B. "Heute sprechen", "Profile in 48h"',
    }),
    defineField({
      name: 'processSteps',
      title: 'Prozess-Schritte',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'step', title: 'Nummer', type: 'string' },
          { name: 'title', title: 'Titel', type: 'string' },
          { name: 'description', title: 'Beschreibung', type: 'text', rows: 2 },
        ],
      }],
    }),
    defineField({ name: 'featuredSolutions', title: 'Ausgewählte Leistungen', type: 'array', of: [{ type: 'reference', to: [{ type: 'solution' }] }] }),
    defineField({ name: 'featuredCaseStudies', title: 'Ausgewählte Case Studies', type: 'array', of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }] }),
    defineField({ name: 'featuredBranchen', title: 'Ausgewählte Branchen', type: 'array', of: [{ type: 'reference', to: [{ type: 'branche' }] }] }),
  ],
})
