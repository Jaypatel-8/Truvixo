'use client'

import { useEffect, useRef, useState, useMemo, memo } from 'react'
import Image from 'next/image'

interface ClientLogo {
  name: string
  logo: string
  url?: string
}

// Client logos
const clientLogos: ClientLogo[] = [
  { name: 'TruVixo', logo: '/TruVixo.png' },
  { name: 'Physiofi', logo: '/Physiofi Logo(1).png' },
  { name: 'SP Bags', logo: '/sp bags logo.png' },
  { name: 'Padmavat Construction', logo: '' }, // Will show text fallback
  { name: 'Nova Logistics', logo: '' }, // Will show text fallback
  { name: 'BrightEdge', logo: '' }, // Will show text fallback
  { name: 'UrbanMint', logo: '' }, // Will show text fallback
]

interface ClienteleProps {
  title?: string
  subtitle?: string
  className?: string
}

function Clientele({ 
  title,
  subtitle,
  className = '' 
}: ClienteleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({})

  // Preload images on mount for faster display
  useEffect(() => {
    clientLogos.forEach((client) => {
      if (client.logo) {
        const img = new window.Image()
        img.onload = () => {
          // Image loaded successfully
        }
        img.onerror = () => {
          // Silently handle preload errors - component will handle display errors
        }
        img.src = client.logo
      }
    })
  }, [])

  const handleImageError = (logoPath: string) => {
    setImageErrors((prev) => ({ ...prev, [logoPath]: true }))
  }

  const handleImageLoad = (logoPath: string) => {
    setImagesLoaded((prev) => ({ ...prev, [logoPath]: true }))
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      if (!isPaused && container) {
        // Batch DOM reads and writes to avoid forced reflow
        requestAnimationFrame(() => {
          const firstSet = container.querySelector('.logo-set') as HTMLElement
          if (firstSet) {
            // Read layout properties
            const setWidth = firstSet.offsetWidth
            
            // Calculate new position
            scrollPosition += scrollSpeed
            if (scrollPosition >= setWidth) {
              scrollPosition = 0
            }
            
            // Write changes in the same frame
            container.style.transform = `translateX(-${scrollPosition}px)`
          }
        })
      }
      
      animationId = requestAnimationFrame(animate)
    }

    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(animate)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isPaused])

  // Memoize duplicated logos array to prevent recreation on every render
  const duplicatedLogos = useMemo(() => [...clientLogos, ...clientLogos], [])

  return (
    <section className={`py-4 bg-[#5e2cb6] relative overflow-hidden ${className}`}>
      <div className="w-full">
        {/* Section Header - Only show if title provided */}
        {title && (
          <div className="text-center mb-6 scroll-animate px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Infinite Scrolling Logo Carousel */}
        <div 
          className="relative overflow-hidden w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={containerRef}
            className="flex items-center gap-12 will-change-transform"
            style={{ width: 'fit-content' }}
          >
            {/* First set of logos */}
            <div className="logo-set flex items-center gap-8">
              {clientLogos.map((client, index) => {
                const hasError = client.logo ? imageErrors[client.logo] : false
                return (
                  <div
                    key={`${client.name}-first-${index}`}
                    className="flex-shrink-0 group cursor-pointer"
                  >
                    <div className="w-28 h-12 md:w-36 md:h-16 flex items-center justify-center px-3 md:px-5 relative">
                      {!client.logo || client.logo.trim() === '' ? (
                        <div className="text-white text-xs md:text-sm font-semibold opacity-90 text-center leading-tight px-2">
                          {client.name}
                        </div>
                      ) : (
                        <>
                          {!imagesLoaded[client.logo] && !hasError && (
                            <div className="absolute inset-0 bg-white/10 animate-pulse rounded" />
                          )}
                          {hasError ? (
                            <div className="text-white text-xs md:text-sm font-semibold opacity-90 text-center leading-tight px-2">
                              {client.name}
                            </div>
                          ) : client.url ? (
                            <a 
                              href={client.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-full h-full flex items-center justify-center relative z-10"
                            >
                              <Image
                                src={client.logo}
                                alt={client.name}
                                width={160}
                                height={80}
                                className={`max-w-full max-h-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${imagesLoaded[client.logo] ? 'opacity-80' : 'opacity-0'}`}
                                priority={index === 0}
                                loading={index === 0 ? 'eager' : 'lazy'}
                                onError={() => handleImageError(client.logo)}
                                onLoad={() => handleImageLoad(client.logo)}
                                quality={90}
                                unoptimized
                              />
                            </a>
                          ) : (
                            <Image
                              src={client.logo}
                              alt={client.name}
                              width={160}
                              height={80}
                              className={`max-w-full max-h-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${imagesLoaded[client.logo] ? 'opacity-80' : 'opacity-0'}`}
                              priority={index === 0}
                              loading={index === 0 ? 'eager' : 'lazy'}
                              onError={() => handleImageError(client.logo)}
                              onLoad={() => handleImageLoad(client.logo)}
                              quality={90}
                              unoptimized
                            />
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="logo-set flex items-center gap-8">
              {clientLogos.map((client, index) => {
                const hasError = client.logo ? imageErrors[client.logo] : false
                return (
                  <div
                    key={`${client.name}-second-${index}`}
                    className="flex-shrink-0 group cursor-pointer"
                  >
                    <div className="w-28 h-12 md:w-36 md:h-16 flex items-center justify-center px-3 md:px-5 relative">
                      {!client.logo || client.logo.trim() === '' ? (
                        <div className="text-white text-xs md:text-sm font-semibold opacity-90 text-center leading-tight px-2">
                          {client.name}
                        </div>
                      ) : (
                        <>
                          {!imagesLoaded[client.logo] && !hasError && (
                            <div className="absolute inset-0 bg-white/10 animate-pulse rounded" />
                          )}
                          {hasError ? (
                            <div className="text-white text-xs md:text-sm font-semibold opacity-90 text-center leading-tight px-2">
                              {client.name}
                            </div>
                          ) : client.url ? (
                            <a 
                              href={client.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-full h-full flex items-center justify-center relative z-10"
                            >
                              <Image
                                src={client.logo}
                                alt={client.name}
                                width={160}
                                height={80}
                                className={`max-w-full max-h-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${imagesLoaded[client.logo] ? 'opacity-80' : 'opacity-0'}`}
                                loading="lazy"
                                onError={() => handleImageError(client.logo)}
                                onLoad={() => handleImageLoad(client.logo)}
                                quality={90}
                                unoptimized
                              />
                            </a>
                          ) : (
                            <Image
                              src={client.logo}
                              alt={client.name}
                              width={160}
                              height={80}
                              className={`max-w-full max-h-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${imagesLoaded[client.logo] ? 'opacity-80' : 'opacity-0'}`}
                              loading="lazy"
                              onError={() => handleImageError(client.logo)}
                              onLoad={() => handleImageLoad(client.logo)}
                              quality={90}
                              unoptimized
                            />
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Clientele)
