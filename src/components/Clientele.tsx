'use client'

import { useEffect, useRef, useState, useMemo, memo } from 'react'
import Image from 'next/image'

interface ClientLogo {
  name: string
  logo?: string
  url?: string
  alternateText?: string
}

// Client logos
const clientLogos: ClientLogo[] = [
  { name: 'Physiofi', logo: '/Physiofi Logo(1).png' },
  { name: 'SP BAGS', logo: '/sp bags logo.png' },
  { name: 'Padmavati Construction', alternateText: 'Padmavati' },
  { name: 'Nova Logistics', alternateText: 'Nova' },
  { name: 'BrightEdge Healthcare', alternateText: 'BrightEdge' },
  { name: 'UrbanMint Properties', alternateText: 'UrbanMint' },
  { name: 'TechFlow Solutions', alternateText: 'TechFlow' },
  { name: 'DataSync Analytics', alternateText: 'DataSync' },
  { name: 'CloudVault Systems', alternateText: 'CloudVault' },
  { name: 'SecurePay Fintech', alternateText: 'SecurePay' },
  { name: 'EduTech Innovations', alternateText: 'EduTech' },
  { name: 'RetailMax Commerce', alternateText: 'RetailMax' },
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
    <section className={`py-8 bg-[#5e2cb6] relative overflow-hidden ${className}`}>
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
            <div className="logo-set flex items-center gap-12">
              {clientLogos.map((client, index) => (
                <div
                  key={`${client.name}-first-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center px-4 md:px-6">
                    {client.logo ? (
                      client.url ? (
                        <a 
                          href={client.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full h-full flex items-center justify-center"
                        >
                          <Image
                            src={client.logo}
                            alt={client.name}
                            width={120}
                            height={60}
                            className="max-w-full max-h-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </a>
                      ) : (
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={120}
                          height={60}
                          className="max-w-full max-h-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      )
                    ) : (
                      <div className="text-white font-semibold text-sm md:text-base text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {client.alternateText || client.name}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="logo-set flex items-center gap-12">
              {clientLogos.map((client, index) => (
                <div
                  key={`${client.name}-second-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center px-4 md:px-6">
                    {client.logo ? (
                      client.url ? (
                        <a 
                          href={client.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full h-full flex items-center justify-center"
                        >
                          <Image
                            src={client.logo}
                            alt={client.name}
                            width={120}
                            height={60}
                            className="max-w-full max-h-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </a>
                      ) : (
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={120}
                          height={60}
                          className="max-w-full max-h-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      )
                    ) : (
                      <div className="text-white font-semibold text-sm md:text-base text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {client.alternateText || client.name}
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
