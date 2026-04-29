import { client, isSanityConfigured } from './sanity.client'

// Helper: returns null immediately when Sanity is not configured
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function query<T = any>(groq: string, params?: Record<string, string | number | boolean>): Promise<T | null> {
  if (!isSanityConfigured || !client) return null
  return params ? client.fetch<T>(groq, params) : client.fetch<T>(groq)
}

// ── Homepage ───────────────────────────────────────────
export async function getHomepage() {
  return query(`*[_type == "homepage"][0]{
    heroHeadline,
    heroSubline,
    heroCta,
    heroCtaSecondary,
    trustSignals,
    processSteps,
    featuredSolutions[]->{title, slug, icon, teaser},
    featuredCaseStudies[]->{title, slug, industry, result, teaser},
    featuredBranchen[]->{title, slug, icon},
  }`)
}

// ── Solutions ──────────────────────────────────────────
export async function getAllSolutions() {
  return query(`*[_type == "solution"] | order(order asc) {
    _id, title, slug, icon, teaser, category
  }`)
}

export async function getSolutionBySlug(slug: string) {
  return query(`*[_type == "solution" && slug.current == $slug][0]{
    title, slug, icon, teaser, body, category,
    relatedCaseStudies[]->{title, slug, industry, result},
  }`, { slug })
}

// ── Branchen ───────────────────────────────────────────
export async function getAllBranchen() {
  return query(`*[_type == "branche"] | order(order asc) {
    _id, title, slug, icon, teaser
  }`)
}

export async function getBrancheBySlug(slug: string) {
  return query(`*[_type == "branche" && slug.current == $slug][0]{
    title, slug, icon, teaser, body,
    relatedSolutions[]->{title, slug, icon},
    relatedCaseStudies[]->{title, slug, industry, result},
  }`, { slug })
}

// ── Case Studies ───────────────────────────────────────
export async function getAllCaseStudies() {
  return query(`*[_type == "caseStudy"] | order(publishedAt desc) {
    _id, title, slug, industry, result, teaser, publishedAt
  }`)
}

export async function getCaseStudyBySlug(slug: string) {
  return query(`*[_type == "caseStudy" && slug.current == $slug][0]{
    title, slug, industry, result, teaser, body, publishedAt,
    relatedSolutions[]->{title, slug},
  }`, { slug })
}

// ── Insights (Blog + News + Events) ───────────────────
export async function getAllInsights(limit = 12) {
  return query(`*[_type == "insight"] | order(publishedAt desc) [0...$limit] {
    _id, title, slug, category, teaser, publishedAt
  }`, { limit })
}

export async function getInsightBySlug(slug: string) {
  return query(`*[_type == "insight" && slug.current == $slug][0]{
    title, slug, category, teaser, body, publishedAt,
    author->{name, role},
  }`, { slug })
}

// ── Team ───────────────────────────────────────────────
export async function getTeam() {
  return query(`*[_type == "teamMember"] | order(order asc) {
    _id, name, role, bio, image, linkedin, isPartner
  }`)
}

// ── Settings (global) ─────────────────────────────────
export async function getSettings() {
  return query(`*[_type == "siteSettings"][0]{
    siteName, siteDescription,
    phone, email, whatsapp, address,
    socialLinks,
  }`)
}
