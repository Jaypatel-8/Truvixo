'use client'

import { useEffect, useRef } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  selectors?: string[]
  unobserveAfterIntersect?: boolean
  useIdleCallback?: boolean
  refreshKey?: any // Added to trigger re-scan of elements
}

/**
 * Custom hook for IntersectionObserver-based scroll animations
 * Optimized with debouncing and cached DOM queries for better performance
 */
export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  selectors = ['.scroll-animate', '.scroll-animate-left', '.scroll-animate-right', '.scroll-animate-scale', '.scroll-stagger', '.section-reveal', '.heading-reveal', '.section-desc-reveal', '.p-reveal', '.btn-entrance', '.underline-reveal'],
  unobserveAfterIntersect = false,
  useIdleCallback = true, // Default to true for better navigation performance
  refreshKey,
}: UseIntersectionObserverOptions = {}) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const elementsRef = useRef<NodeListOf<Element> | null>(null)
  const selectorsKey = selectors.join(',')

  useEffect(() => {
    // Skip if not in browser
    if (typeof window === 'undefined') return

    // Clear cached elements on refreshKey change to force re-query of the DOM
    elementsRef.current = null

    // Debounce function to avoid multiple rapid queries
    let timeoutId: NodeJS.Timeout | null = null
    let rafId: number | null = null
    
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

    observerRef.current = observer

    // Initialize observer with debouncing and caching
    const initObserver = () => {
      // Clear any pending timeout/RAF
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
        rafId = null
      }

      // Use cached elements if available and selectors haven't changed
      if (!elementsRef.current) {
        const selectorString = selectors.join(', ')
        rafId = requestAnimationFrame(() => {
          elementsRef.current = document.querySelectorAll(selectorString)
          if (elementsRef.current) {
            elementsRef.current.forEach((el) => {
              if (!unobserveAfterIntersect || !el.classList.contains('animate')) {
                observer.observe(el)
              }
            })
          }
        })
      } else {
        if (elementsRef.current) {
          elementsRef.current.forEach((el) => {
            if (!unobserveAfterIntersect || !el.classList.contains('animate')) {
              observer.observe(el)
            }
          })
        }
      }
    }

    // Run after first paint to avoid blocking; short timeout so animations start soon
    if (useIdleCallback === true && 'requestIdleCallback' in window) {
      requestIdleCallback(initObserver, { timeout: 50 })
    } else {
      requestAnimationFrame(() => initObserver())
    }
    // Re-query after dynamic/lazy content mounts (e.g. below-fold sections)
    const lateId = setTimeout(() => {
      elementsRef.current = null
      initObserver()
    }, 600)

    return () => {
      clearTimeout(lateId)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      elementsRef.current = null
    }
  }, [threshold, rootMargin, selectorsKey, unobserveAfterIntersect, useIdleCallback, refreshKey])
}

