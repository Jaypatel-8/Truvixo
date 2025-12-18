'use client'

import { useEffect, useRef } from 'react'
import { Star } from 'lucide-react'

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
      
      // Reset position when content has scrolled completely
      if (Math.abs(position) >= content.offsetWidth / 2) {
        position = 0
      }
      
      content.style.transform = `translateX(${position}px)`
      animationFrameId = requestAnimationFrame(animate)
    }

    // Duplicate content for seamless loop
    const clone = content.cloneNode(true) as HTMLElement
    container.appendChild(clone)

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      if (clone.parentNode) {
        clone.parentNode.removeChild(clone)
      }
    }
  }, [speed])

  return (
    <div className={`overflow-hidden ${className}`} ref={containerRef}>
      <div 
        className="flex gap-6"
        ref={contentRef}
        style={{ width: 'max-content' }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-[500px] bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  strokeWidth={0}
                />
              ))}
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
              "{testimonial.quote}"
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
              <p className="text-sm text-gray-600">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
