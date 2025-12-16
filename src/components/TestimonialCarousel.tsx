'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
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
  return (
    <div className={className}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: speed * 100,
          disableOnInteraction: false,
        }}
        loop={true}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg h-full">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#fecc4d] text-[#fecc4d]"
                    strokeWidth={2}
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
