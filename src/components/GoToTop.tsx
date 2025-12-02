'use client'

import { useState, useEffect, useCallback } from 'react'
import { ArrowUp } from 'lucide-react'

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleVisibility = useCallback(() => {
    if (typeof window === 'undefined') return
    
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0
    setIsVisible(scrollY > 300)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Check initial scroll position
    toggleVisibility()

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [isMounted, toggleVisibility])

  const scrollToTop = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (typeof window === 'undefined') return
    
    try {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      
      // Fallback for browsers that don't support smooth scroll
      if (!('scrollBehavior' in document.documentElement.style)) {
        window.scrollTo(0, 0)
      }
    } catch (error) {
      // Fallback to instant scroll
      window.scrollTo(0, 0)
    }
  }, [])

  if (!isMounted) return null

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          type="button"
          className="fixed bottom-8 right-8 z-[9999] w-12 h-12 md:w-14 md:h-14 bg-[#5e2cb6] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center group animate-fade-in cursor-pointer"
          style={{ 
            boxShadow: '0 4px 20px rgba(94, 44, 182, 0.3)',
            pointerEvents: 'auto'
          }}
          aria-label="Go to top"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2} />
        </button>
      )}
    </>
  )
}


