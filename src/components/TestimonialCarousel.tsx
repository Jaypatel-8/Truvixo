'use client'

import InfiniteCarousel from './InfiniteCarousel'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  rating?: number // Optional, not displayed
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  speed?: number
  className?: string
}

// Minimal color palette
const testimonialColors = [
  { primary: '#5e2cb6', light: '#ede9fe' }, // Purple
  { primary: '#c91a6f', light: '#fce7f3' }, // Pink
  { primary: '#f59e0b', light: '#fffbeb' }, // Yellow
  { primary: '#10b981', light: '#d1fae5' }, // Green
  { primary: '#3b82f6', light: '#dbeafe' }, // Blue
  { primary: '#ef4444', light: '#fee2e2' }, // Red
]

export default function TestimonialCarousel({
  testimonials,
  speed = 40,
  className = ''
}: TestimonialCarouselProps) {
  const testimonialItems = testimonials.map((testimonial, index) => {
    const colors = testimonialColors[index % testimonialColors.length]
    
    return (
      <div
        key={index}
        className="bg-white rounded-xl p-6 border h-full flex flex-col transition-all duration-300 hover:shadow-md"
        style={{ 
          borderColor: `${colors.primary}20`
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = colors.primary
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = `${colors.primary}20`
        }}
      >
        {/* Quote Icon - Minimal */}
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
          style={{ backgroundColor: colors.light }}
        >
          <svg 
            className="w-5 h-5" 
            style={{ color: colors.primary }}
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>

        {/* Quote - Minimal */}
        <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
          "{testimonial.quote}"
        </p>

        {/* Author Info - Minimal */}
        <div 
          className="border-t pt-4"
          style={{ borderColor: `${colors.primary}15` }}
        >
          <div className="flex items-center gap-3">
            {/* Avatar Circle - Minimal */}
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: colors.primary }}
            >
              {testimonial.author.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p 
                className="font-bold text-base mb-1 truncate"
                style={{ color: colors.primary }}
              >
                {testimonial.author}
              </p>
              {testimonial.role && (
                <p className="text-gray-600 text-sm">
                  {testimonial.role}
                </p>
              )}
              {testimonial.company && (
                <p className="text-gray-500 text-sm">
                  {testimonial.company}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className={`py-8 ${className}`}>
      <InfiniteCarousel
        items={testimonialItems}
        speed={speed}
        direction="left"
        pauseOnHover={true}
      />
    </div>
  )
}
