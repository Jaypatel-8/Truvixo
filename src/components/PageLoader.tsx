'use client'

import { useEffect, useState, useRef } from 'react'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(0)
  const isCompleteRef = useRef(false)

  useEffect(() => {
    // Prevent body scroll during loading
    document.body.style.overflow = 'hidden'
    // Remove any blur effects from body/html
    document.body.style.filter = 'none'
    document.body.style.webkitFilter = 'none'
    if (document.documentElement) {
      document.documentElement.style.filter = 'none'
      document.documentElement.style.webkitFilter = 'none'
    }
    
    // Function to check if we can hide the loader
    const checkAndHide = () => {
      if (progressRef.current >= 100 && document.readyState === 'complete' && !isCompleteRef.current) {
        isCompleteRef.current = true
        // Small delay for smooth transition
        setTimeout(() => {
          setIsLoading(false)
          document.body.style.overflow = ''
          // Ensure no blur remains
          document.body.style.filter = 'none'
          document.body.style.webkitFilter = 'none'
          if (document.documentElement) {
            document.documentElement.style.filter = 'none'
            document.documentElement.style.webkitFilter = 'none'
          }
        }, 400)
      }
    }

    // Simulate loading progress - must reach 100%
    const progressInterval = setInterval(() => {
      progressRef.current += Math.random() * 12 + 8 // Random increment between 8-20
      if (progressRef.current >= 100) {
        progressRef.current = 100
        clearInterval(progressInterval)
      }
      setProgress(Math.min(progressRef.current, 100))
      checkAndHide()
    }, 120)

    // Listen for page load event
    const handleLoad = () => {
      checkAndHide()
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      // Still need to wait for progress to reach 100%
      const checkInterval = setInterval(() => {
        checkAndHide()
        if (isCompleteRef.current) {
          clearInterval(checkInterval)
        }
      }, 100)
      
      // Fallback: ensure it completes after max 3.5 seconds
      setTimeout(() => {
        clearInterval(checkInterval)
        if (!isCompleteRef.current) {
          progressRef.current = 100
          setProgress(100)
          checkAndHide()
        }
      }, 3500)
      
      return () => {
        clearInterval(progressInterval)
        clearInterval(checkInterval)
      }
    } else {
      window.addEventListener('load', handleLoad)
      
      // Fallback: ensure it completes after max 3.5 seconds
      const timeout = setTimeout(() => {
        if (!isCompleteRef.current) {
          progressRef.current = 100
          setProgress(100)
          checkAndHide()
        }
      }, 3500)

      return () => {
        clearInterval(progressInterval)
        clearTimeout(timeout)
        window.removeEventListener('load', handleLoad)
        document.body.style.overflow = ''
      }
    }
  }, [])

  if (!isLoading) return null

  return (
    <div 
      className="fixed inset-0 z-[10000] bg-white flex items-center justify-center"
      style={{ 
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        filter: 'none',
        WebkitFilter: 'none'
      }}
    >
      <div className="text-center">
        {/* Sleek Monochromatic Spinner with Subtle Logo Color Accents */}
        <div className="relative w-14 h-14 mx-auto mb-10">
          {/* Outer ring - Monochromatic with subtle dark accent */}
          <div 
            className="absolute inset-0 border-[2.5px] rounded-full"
            style={{ 
              borderColor: '#e5e7eb',
              borderTopColor: '#111827',
              animation: 'spin 1s linear infinite'
            }}
          />
          {/* Middle ring - Subtle logo color hint (very subtle) */}
          <div 
            className="absolute inset-2.5 border-[2px] rounded-full"
            style={{ 
              borderColor: '#f3f4f6',
              borderRightColor: '#5e2cb6',
              borderBottomColor: '#c91a6f',
              animation: 'spinReverse 0.75s linear infinite',
              opacity: 0.4
            }}
          />
          {/* Inner minimal dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-1.5 h-1.5 rounded-full bg-gray-900"
              style={{ 
                animation: 'pulse 1.5s ease-in-out infinite'
              }}
            />
          </div>
        </div>

        {/* Sleek Thin Progress Bar - Monochromatic with subtle accent */}
        <div className="w-64 h-[1px] bg-gray-100 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full rounded-full transition-all duration-200 ease-out relative"
            style={{ 
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #111827 0%, #5e2cb6 30%, #c91a6f 50%, #5e2cb6 70%, #111827 100%)',
              backgroundSize: '200% 100%',
              animation: 'gradient 2.5s ease infinite',
              boxShadow: '0 0 2px rgba(94, 44, 182, 0.15)'
            }}
          >
            {/* Subtle shine effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
              style={{
                animation: 'shine 2s ease-in-out infinite'
              }}
            />
          </div>
        </div>

        {/* Minimal Progress Text */}
        <div className="mt-8">
          <p className="text-xs font-medium text-gray-400 tracking-[0.2em] uppercase">
            {Math.round(progress)}%
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
        }
        
        @keyframes gradient {
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
        
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          50%, 100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}
