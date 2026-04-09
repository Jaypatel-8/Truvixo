'use client'

import { useEffect, useRef, useState, useMemo, memo } from 'react'
import Image from 'next/image'

interface ClientLogo {
  name: string
  logo: string
  url?: string
}

// Client logos - Using all available client logos and project clients (excluding TruVixo logo)
// Project logos can be added to /public folder when available (e.g., /nova-logistics-logo.png)
const clientLogos: ClientLogo[] = [
  // Existing clients with actual logos
  { name: 'Physiofi', logo: '/images/Partners/Physiofi-logo.png' },
  { name: 'SP Bags', logo: '/images/Partners/sp-bags-logo.png' },
  { name: 'Aqua Pro', logo: '/images/Partners/aqua-pro-logo.svg' },
  // Project clients - using available logos until project-specific logos are added
  { name: 'Nova Logistics', logo: '/images/Partners/Physiofi-logo.png' },
  { name: 'BrightEdge', logo: '/images/Partners/sp-bags-logo.png' },
  { name: 'UrbanMint', logo: '/images/Partners/aqua-pro-logo.svg' },
  { name: 'Padmavat Construction', logo: '/images/Partners/Physiofi-logo.png' },
  // Additional clients
  { name: 'FinTech Solutions', logo: '/images/Partners/sp-bags-logo.png' },
  { name: 'Healthcare Plus', logo: '/images/Partners/aqua-pro-logo.svg' },
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
    <section className={`py-12 bg-gray-100/40 dark:bg-[var(--dark-bg)] relative overflow-hidden section-reveal border-y border-gray-200/60 dark:border-[var(--dark-border)] ${className}`}>
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#5e2cb6]/3 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#10b981]/3 blur-[120px]" />
      </div>

      <div className="w-full relative z-10">
        {/* Section Header - Only show if title provided */}
        {title && (
          <div className="text-center mb-10 scroll-animate px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-600 dark:text-[var(--dark-text-muted)] max-w-2xl mx-auto font-light">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Infinite Scrolling Logo Carousel */}
        <div
          className="relative overflow-hidden w-full py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={containerRef}
            className="flex items-center gap-8 will-change-transform"
            style={{ width: 'fit-content' }}
          >
            {/* First set of logos */}
            <div className="logo-set flex items-center gap-8 px-4">
              {clientLogos.map((client, index) => (
                <div
                  key={`${client.name}-first-${index}`}
                  className="flex-shrink-0"
                >
                  <div
                    className="w-40 h-24 md:w-56 md:h-28 bg-white dark:bg-[var(--dark-surface)] rounded-2xl border border-gray-200/80 dark:border-[var(--dark-border)] shadow-md hover:border-[#5e2cb6]/30 carousel-card-highlight group flex items-center justify-center p-6 md:p-8 animate-gentle-float glass-shimmer-container"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Glass Shimmer Overlay */}
                    <div className="glass-shimmer-effect" />

                    {client.url ? (
                      <a
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center relative z-20"
                      >
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={140}
                          height={56}
                          className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100 transition-all duration-500"
                          unoptimized
                        />
                      </a>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center relative z-20">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={140}
                          height={70}
                          className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100 transition-all duration-500"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="logo-set flex items-center gap-8 px-4">
              {clientLogos.map((client, index) => (
                <div
                  key={`${client.name}-second-${index}`}
                  className="flex-shrink-0"
                >
                  <div
                    className="w-40 h-24 md:w-56 md:h-28 bg-white dark:bg-[var(--dark-surface)] rounded-2xl border border-gray-200/80 dark:border-[var(--dark-border)] shadow-md hover:border-[#5e2cb6]/30 carousel-card-highlight group flex items-center justify-center p-6 md:p-8 animate-gentle-float glass-shimmer-container"
                    style={{ animationDelay: `${index * 0.2 + 1}s` }}
                  >
                    {/* Glass Shimmer Overlay */}
                    <div className="glass-shimmer-effect" />

                    {client.url ? (
                      <a
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center relative z-20"
                      >
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={140}
                          height={56}
                          className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100 transition-all duration-500"
                          unoptimized
                        />
                      </a>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center relative z-20">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={140}
                          height={70}
                          className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100 transition-all duration-500"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Clientele)
