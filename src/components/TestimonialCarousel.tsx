'use client'

import { useEffect, useRef } from 'react'
import { Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  rating: number
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  speed?: number
  className?: string
}

// Website brand colors matching services cards
const testimonialColors = [
  '#5e2cb6', // Purple
  '#c91a6f', // Pink
  '#fecc4d', // Yellow
  '#10b981', // Green
]

export default function TestimonialCarousel({ 
  testimonials, 
  speed = 40,
  className = '' 
}: TestimonialCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return

    const container = containerRef.current
    const content = contentRef.current
    let animationFrameId: number
    let position = 0

    const animate = () => {
      position -= speed * 0.01
      
      // Reset position when content has scrolled completely (single carousel, no duplication)
      if (Math.abs(position) >= content.offsetWidth) {
        position = 0
      }
      
      content.style.transform = `translateX(${position}px)`
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [speed])

  return (
    <div className={`overflow-hidden ${className}`} ref={containerRef}>
      <div 
        className="flex gap-8"
        ref={contentRef}
        style={{ width: 'max-content' }}
      >
        {testimonials.map((testimonial, index) => {
          const cardColor = testimonialColors[index % testimonialColors.length]
          const borderColor = cardColor + '40' // 40% opacity
          
          return (
            <div
              key={index}
              className="group flex-shrink-0 w-full md:w-[500px] bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden"
              style={{ 
                borderColor: borderColor,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cardColor
                e.currentTarget.style.boxShadow = `0 20px 60px ${cardColor}25`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = borderColor
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)'
              }}
            >
              {/* Colored Square in Right Upper Corner - Modern Gradient Effect */}
              <div 
                className="absolute top-0 right-0 w-40 h-40 opacity-5 group-hover:opacity-15 transition-all duration-500 rounded-bl-full"
                style={{ 
                  background: `linear-gradient(135deg, ${cardColor} 0%, ${cardColor}dd 100%)`
                }}
              />
              
              {/* Subtle Accent Line */}
              <div 
                className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: cardColor }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Modern Quote Icon */}
                <div className="mb-6">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ 
                      backgroundColor: cardColor + '15',
                      color: cardColor
                    }}
                  >
                    <Quote className="w-7 h-7" strokeWidth={2} />
                  </div>
                </div>

                {/* Quote Text - Enhanced Typography */}
                <p className="text-gray-800 mb-8 leading-relaxed text-lg font-medium relative pl-2">
                  <span 
                    className="absolute -left-2 top-0 text-5xl font-serif leading-none opacity-10"
                    style={{ color: cardColor }}
                  >
                    "
                  </span>
                  <span className="relative z-10">{testimonial.quote}</span>
                </p>

                {/* Author Info - Modern Layout */}
                <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-lg transition-all duration-500 group-hover:scale-110"
                    style={{ 
                      background: `linear-gradient(135deg, ${cardColor} 0%, ${cardColor}dd 100%)`
                    }}
                  >
                    {testimonial.author.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <p 
                      className="font-bold text-gray-900 text-base group-hover:translate-x-1 transition-transform duration-300"
                      style={{ color: 'inherit' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = cardColor
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#111827'
                      }}
                    >
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500 mt-0.5 font-medium">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
