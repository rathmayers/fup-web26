import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client, isSanityConfigured } from './sanity.client'

const builder = isSanityConfigured && client ? imageUrlBuilder(client) : null

export function urlFor(source: SanityImageSource) {
  if (!builder) return { url: () => '' }
  return builder.image(source)
}
