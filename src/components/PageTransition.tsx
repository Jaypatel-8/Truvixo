'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  const previousPathnameRef = useRef<string | null>(null)

  useEffect(() => {
    const currentPath = pathname
    const previousPath = previousPathnameRef.current

    // Only show animation on route change (not initial load)
    if (previousPath !== null && previousPath !== currentPath) {
      setIsLoading(true)
      setProgress(0)

      // Animate progress bar
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => {
              setIsLoading(false)
              setProgress(0)
            }, 200)
            return 100
          }
          return prev + 10
        })
      }, 30)

      return () => clearInterval(interval)
    }

    previousPathnameRef.current = currentPath
  }, [pathname])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-gray-100">
      <div
        className="h-full bg-gradient-to-r from-[#5e2cb6] via-[#c91a6f] to-[#5e2cb6] transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s ease infinite',
        }}
      />
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  )
}



