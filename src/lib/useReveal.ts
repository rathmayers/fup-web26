'use client'

import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a container element and
 * adds the 'visible' class to all .reveal children when they enter
 * the viewport. This triggers the CSS transition defined in globals.css.
 *
 * Usage:
 *   const ref = useReveal()
 *   <section ref={ref}>
 *     <div className="reveal">…</div>
 *   </section>
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll<HTMLElement>('.reveal')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
