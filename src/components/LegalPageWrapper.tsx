'use client'

import { ReactNode } from 'react'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'

interface LegalPageWrapperProps {
  children: ReactNode
}

/** Wraps legal page content and runs scroll observer so scroll-animate elements reveal in viewport. */
export default function LegalPageWrapper({ children }: LegalPageWrapperProps) {
  useIntersectionObserver({
    threshold: 0.06,
    rootMargin: '0px 0px -40px 0px',
    selectors: ['.scroll-animate', '.scroll-animate-left', '.scroll-animate-right', '.scroll-animate-scale', '.scroll-stagger', '.section-reveal', '.heading-reveal', '.section-desc-reveal'],
    unobserveAfterIntersect: true,
    useIdleCallback: true,
  })
  return <>{children}</>
}
