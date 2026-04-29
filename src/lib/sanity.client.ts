import { createClient } from 'next-sanity'

export const projectId  = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ''
export const dataset    = process.env.NEXT_PUBLIC_SANITY_DATASET    ?? 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2025-01-01'

/**
 * isSanityConfigured — true only when a real project ID is present.
 * All query helpers check this before calling the client so the site
 * renders with built-in fallback data when Sanity is not yet set up.
 */
export const isSanityConfigured = projectId.length > 0

export const client = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: process.env.NODE_ENV === 'production' })
  : null
