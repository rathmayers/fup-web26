export interface Slug {
  current: string
}

export interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  alt?: string
}

export interface Solution {
  _id: string
  title: string
  slug: Slug
  icon: string
  teaser: string
  category: 'schwerpunkt' | 'funktion'
  body?: PortableTextBlock[]
  relatedCaseStudies?: CaseStudy[]
}

export interface Branche {
  _id: string
  title: string
  slug: Slug
  icon: string
  teaser: string
  order?: number
  body?: PortableTextBlock[]
  relatedSolutions?: Solution[]
  relatedCaseStudies?: CaseStudy[]
}

export interface CaseStudy {
  _id: string
  title: string
  slug: Slug
  industry: string
  result: string
  teaser: string
  publishedAt: string
  body?: PortableTextBlock[]
  relatedSolutions?: Solution[]
}

export interface Insight {
  _id: string
  title: string
  slug: Slug
  category: 'blog' | 'news' | 'event' | 'webinar' | 'publication'
  teaser: string
  publishedAt: string
  body?: PortableTextBlock[]
  author?: TeamMember
}

export interface TeamMember {
  _id: string
  name: string
  role: string
  bio?: string
  image?: SanityImage
  linkedin?: string
  isPartner: boolean
  order?: number
}

export interface SiteSettings {
  siteName: string
  siteDescription: string
  phone: string
  email: string
  whatsapp?: string
  address: string
  socialLinks?: { platform: string; url: string }[]
}

export interface Homepage {
  heroHeadline: string
  heroSubline: string
  heroCta: string
  heroCtaSecondary: string
  trustSignals: string[]
  processSteps: { step: string; description: string }[]
  featuredSolutions: Solution[]
  featuredCaseStudies: CaseStudy[]
  featuredBranchen: Branche[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PortableTextBlock = any
