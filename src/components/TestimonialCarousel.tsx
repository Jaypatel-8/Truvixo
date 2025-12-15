'use client'

import dynamic from 'next/dynamic'
import { Quote } from 'lucide-react'

const InfiniteCarousel = dynamic(() => import('./InfiniteCarousel'), {
  ssr: false,
  loading: () => <div className="min-h-[300px] bg-white" />,
})

interface Testimonial {
  quote: string
  author: string
  role?: string
  company?: string
  rating?: number
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
  const items = testimonials.map((testimonial, index) => {
    const colors = ['#5e2cb6', '#c91a6f', '#d97706', '#059669', '#d42628', '#f59e0b']
    const color = colors[index % colors.length]
    
    return (
      <div
        key={index}
        className="bg-white rounded-xl p-8 border border-gray-200 h-full flex flex-col min-w-[360px] max-w-[360px] mx-4 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
      >
        {/* Minimal Quote Icon */}
        <div 
          className="mb-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
          style={{ color }}
        >
          <Quote className="w-8 h-8" strokeWidth={1.5} />
        </div>

        {/* Quote Text - Minimal */}
        <p className="text-gray-700 mb-8 text-base leading-relaxed flex-grow font-normal">
          {testimonial.quote}
        </p>

        {/* Author Info - Minimal */}
        <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border"
            style={{ 
              backgroundColor: color + '10',
              borderColor: color + '30'
            }}
          >
            <span 
              className="font-semibold text-xs"
              style={{ color }}
            >
              {testimonial.author
                .split(' ')
                .map(n => n[0])
                .join('')
                .slice(0, 2)
                .toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-900 font-semibold text-sm mb-0.5 truncate">{testimonial.author}</p>
            {testimonial.role && testimonial.company && (
              <p className="text-gray-500 text-xs truncate">{testimonial.role} • {testimonial.company}</p>
            )}
            {testimonial.role && !testimonial.company && (
              <p className="text-gray-500 text-xs truncate">{testimonial.role}</p>
            )}
            {!testimonial.role && testimonial.company && (
              <p className="text-gray-500 text-xs truncate">{testimonial.company}</p>
            )}
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className={className}>
      <InfiniteCarousel items={items} speed={speed} direction="left" pauseOnHover={true} />
    </div>
  )
}
