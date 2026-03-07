'use client'

import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'

/**
 * Runs the scroll observer on every page so layout elements (e.g. Footer)
 * and any scroll-animate elements reveal when in viewport.
 */
export default function LayoutScrollObserver() {
  useIntersectionObserver({
    threshold: 0.05,
    rootMargin: '0px 0px -30px 0px',
    selectors: ['.scroll-animate', '.scroll-animate-left', '.scroll-animate-right', '.scroll-animate-scale', '.scroll-stagger', '.section-reveal', '.heading-reveal', '.section-desc-reveal', '.p-reveal', '.btn-entrance', '.underline-reveal'],
    unobserveAfterIntersect: true,
    useIdleCallback: true,
  })
  return null
}
