'use client'

import { useEffect, useRef } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  selectors?: string[]
  unobserveAfterIntersect?: boolean
  useIdleCallback?: boolean
}

/**
 * Custom hook for IntersectionObserver-based scroll animations
 * Optimized with debouncing and cached DOM queries for better performance
 */
export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  selectors = ['.scroll-animate', '.scroll-animate-left', '.scroll-animate-right', '.scroll-animate-scale'],
  unobserveAfterIntersect = false,
  useIdleCallback = true, // Default to true for better navigation performance
}: UseIntersectionObserverOptions = {}) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const elementsRef = useRef<NodeListOf<Element> | null>(null)
  const selectorsKey = selectors.join(',')

  useEffect(() => {
    // Skip if not in browser
    if (typeof window === 'undefined') return

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
        // Use requestAnimationFrame for DOM queries to avoid blocking
        rafId = requestAnimationFrame(() => {
          elementsRef.current = document.querySelectorAll(selectorString)
          
          // Minimal debounce for faster initialization
          timeoutId = setTimeout(() => {
            if (elementsRef.current) {
              elementsRef.current.forEach((el) => {
                // Only observe if not already animated (unless unobserveAfterIntersect is false)
                if (!unobserveAfterIntersect || !el.classList.contains('animate')) {
                  observer.observe(el)
                }
              })
            }
          }, 10) // Reduced to 10ms for faster initialization
        })
      } else {
        // Elements already cached, attach observer immediately
        timeoutId = setTimeout(() => {
          if (elementsRef.current) {
            elementsRef.current.forEach((el) => {
              if (!unobserveAfterIntersect || !el.classList.contains('animate')) {
                observer.observe(el)
              }
            })
          }
        }, 10) // Reduced to 10ms for faster initialization
      }
    }

    // Initialize immediately for faster page load - no delays
    // Use requestAnimationFrame for smooth initialization without blocking
    if (useIdleCallback === true && 'requestIdleCallback' in window) {
      requestIdleCallback(initObserver, { timeout: 100 })
    } else {
      // Initialize immediately using requestAnimationFrame for non-blocking execution
      requestAnimationFrame(() => {
        initObserver()
      })
    }

    return () => {
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
  }, [threshold, rootMargin, selectorsKey, unobserveAfterIntersect, useIdleCallback])
}

