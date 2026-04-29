# F&P Executive Solutions AG — Next.js Website

Moderne, performante Website für F&P gebaut mit **Next.js 15** (App Router) + **Sanity.io** als Headless CMS.

---

## Architektur-Überblick

```
fup-nextjs/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root-Layout (Nav + Footer)
│   │   ├── page.tsx            # Startseite
│   │   ├── leistungen/
│   │   │   ├── page.tsx        # Leistungen-Übersicht
│   │   │   └── [slug]/page.tsx # Dynamische Leistungs-Detail-Seite
│   │   ├── branchen/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── ueber-uns/
│   │   ├── insights/
│   │   ├── kontakt/
│   │   ├── interim-manager-werden/
│   │   └── studio/[[...tool]]/ # Sanity Studio (eingebettet)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx  # Sticky Nav mit Mega-Dropdowns
│   │   │   └── Footer.tsx
│   │   ├── sections/           # Seiten-Sektionen (wiederverwendbar)
│   │   │   ├── Hero.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Solutions.tsx
│   │   │   ├── Branchen.tsx
│   │   │   ├── CtaBand.tsx
│   │   │   └── ContactForm.tsx
│   │   └── ui/                 # Basis-UI-Komponenten
│   │       ├── PageHeader.tsx
│   │       └── PortableText.tsx
│   ├── lib/
│   │   ├── sanity.client.ts    # Sanity-Client-Konfiguration
│   │   ├── sanity.image.ts     # Bild-URL-Helper
│   │   ├── queries.ts          # Alle GROQ-Queries
│   │   └── useReveal.ts        # Scroll-Animations-Hook
│   ├── types/index.ts          # TypeScript-Typen
│   └── styles/globals.css      # Design-System / CSS-Variablen
├── sanity/
│   └── schemas/                # Content-Modelle
│       ├── homepage.ts
│       ├── solution.ts         # Leistungen
│       ├── branche.ts
│       ├── caseStudy.ts
│       ├── insight.ts          # Blog, News, Events, Webinare
│       ├── teamMember.ts
│       └── siteSettings.ts
├── sanity.config.ts            # Sanity Studio Config
├── next.config.ts
├── tailwind.config.ts
└── .env.example
```

---

## Schnellstart

### 1. Abhängigkeiten installieren

```bash
cd fup-nextjs
npm install
```

### 2. Sanity-Projekt erstellen

```bash
# Sanity CLI installieren (falls nicht vorhanden)
npm install -g @sanity/cli

# Neues Projekt anlegen (oder vorhandenes verknüpfen)
sanity init --env
```

Alternativ: [sanity.io/manage](https://sanity.io/manage) → neues Projekt erstellen → Project ID kopieren.

### 3. Umgebungsvariablen konfigurieren

```bash
cp .env.example .env.local
# .env.local öffnen und NEXT_PUBLIC_SANITY_PROJECT_ID eintragen
```

### 4. Entwicklungsserver starten

```bash
npm run dev
# → http://localhost:3000       (Website)
# → http://localhost:3000/studio (Sanity Studio)
```

---

## Sanity CMS — Inhalte pflegen

Das Sanity Studio ist **direkt in die Website eingebettet** unter `/studio`.

### Content-Typen

| Typ | Zweck | URL-Pfad |
|-----|-------|----------|
| **Startseite** | Hero, Prozessschritte, Featured Content | `/` |
| **Leistung** | Schwerpunkte + Funktionen | `/leistungen/[slug]` |
| **Branche** | Branchenspezifische Seiten | `/branchen/[slug]` |
| **Case Study** | Referenzprojekte | `/ueber-uns/case-studies/[slug]` |
| **Insight** | Blog, News, Events, Webinare | `/insights/[slug]` |
| **Team-Mitglied** | Vorstand, Partner, Team | `/ueber-uns/team` |
| **Website-Einstellungen** | Kontaktdaten, Meta | global |

---

## Design-System

### Typografie
- **Display-Schrift**: DM Serif Display (Überschriften)
- **Body-Schrift**: DM Sans (Fließtext, UI)

### Farben
```css
--ink: #0f0f0f          /* Primärtext */
--ink-soft: #1c1c1c     /* Sekundärtext */
--ink-muted: #3a3a3a    /* Body-Text */
--ink-faint: #6b6b6b    /* Hilfstexte, Labels */
--paper: #fafaf8        /* Hintergrund */
--paper-warm: #f5f4f0   /* Hover-Zustände */
--paper-mid: #ebebea    /* Dezente Flächen */
--paper-border: #dddcda /* Trennlinien */
```

### Layout
- **Max-Breite**: 1100px (`--site-max`)
- **Horizontales Padding**: `clamp(1.25rem, 4vw, 2.5rem)` (responsiv)
- **Kein CLS**: `overflow-y: scroll` auf `<html>` reserviert Scrollbar-Platz

---

## Deployment auf Vercel

```bash
# Vercel CLI
npm install -g vercel
vercel

# Umgebungsvariablen in Vercel Dashboard eintragen:
# NEXT_PUBLIC_SANITY_PROJECT_ID
# NEXT_PUBLIC_SANITY_DATASET
# SANITY_API_TOKEN
```

### Sanity CORS konfigurieren
In [sanity.io/manage](https://sanity.io/manage) → API → CORS Origins:
- `http://localhost:3000` (Entwicklung)
- `https://www.fup-ag.com` (Produktion)

---

## ISR (Incremental Static Regeneration)

Alle Seiten nutzen `export const revalidate = 3600` — Inhalte werden stündlich neu generiert. Nach CMS-Änderungen sofort aktualisieren:

```bash
# Revalidation-Webhook in Sanity einrichten:
# Ziel-URL: https://www.fup-ag.com/api/revalidate
# (API-Route noch zu implementieren)
```

---

## Nächste Schritte

- [ ] Sanity Webhook für On-Demand ISR einrichten
- [ ] Interims-Manager-Werden-Seite ausbauen
- [ ] Über-uns / Team-Seite implementieren
- [ ] Case Studies Hub mit Filter
- [ ] Insights-Seite mit Kategorie-Filter
- [ ] Standorte-Seite mit interaktiver Karte
- [ ] HubSpot-Integration im Kontaktformular
- [ ] Sitemap und robots.txt
- [ ] DSGVO-konformes Cookie-Banner (ohne Consent-Blocker für Videos)
- [ ] Open Graph Images per `next/og`
# fup-web26
