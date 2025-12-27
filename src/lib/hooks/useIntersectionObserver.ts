'use client'

import { useEffect } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  selectors?: string[]
  unobserveAfterIntersect?: boolean
  useIdleCallback?: boolean
}

/**
 * Custom hook for IntersectionObserver-based scroll animations
 * Replaces duplicated IntersectionObserver logic across components
 */
export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  selectors = ['.scroll-animate', '.scroll-animate-left', '.scroll-animate-right', '.scroll-animate-scale'],
  unobserveAfterIntersect = false,
  useIdleCallback = false,
}: UseIntersectionObserverOptions = {}) {
  useEffect(() => {
    const observerOptions = {
      threshold,
      rootMargin,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          // Unobserve after animation to improve performance (if enabled)
          if (unobserveAfterIntersect) {
            observer.unobserve(entry.target)
          }
        }
      })
    }, observerOptions)

    // Initialize observer
    const initObserver = () => {
      const selectorString = selectors.join(', ')
      const scrollElements = document.querySelectorAll(selectorString)
      scrollElements.forEach((el) => observer.observe(el))
    }

    // Use requestIdleCallback for non-critical animations (if enabled)
    if (useIdleCallback && 'requestIdleCallback' in window) {
      requestIdleCallback(initObserver, { timeout: 100 })
    } else {
      // Use setTimeout for immediate initialization or fallback
      setTimeout(initObserver, 0)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, selectors.join(','), unobserveAfterIntersect, useIdleCallback])
}

