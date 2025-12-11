'use client'

import { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Service {
  name: string
  description: string
  icon: React.ReactNode
  color: string // Hex color code
  href?: string // Optional href for navigation
}

interface ServicesSwiperProps {
  servicesList: Service[]
  onServiceClick?: (serviceName: string) => void // Optional click handler
}

// Service name to URL mapping - memoized outside component for performance
const SERVICE_URL_MAP: { [key: string]: string } = {
  'Custom Software Development': '/services/custom-software-development',
  'AI & Machine Learning': '/services/ai-development-services',
  'Web & Mobile Development': '/services/mobile-app-development',
  'Cloud & DevOps': '/services/enterprise-software-development',
  'Digital Marketing': '/services/seo',
  'UI/UX Design': '/services/web-application-development',
  'Data Engineering': '/services/ai-development-services',
  'Enterprise Solutions': '/services/enterprise-software-development',
  'Consulting & Strategy': '/services/custom-software-development',
  'Maintenance & Support': '/services/maintenance-support',
  'Legacy Modernization': '/services/legacy-app-modernization'
}

function ServicesSwiper({ servicesList, onServiceClick }: ServicesSwiperProps) {
  // Service name to URL mapping - optimized function
  const getServiceUrl = (serviceName: string): string => {
    return SERVICE_URL_MAP[serviceName] || '/services'
  }

  // Removed handleCardClick - Link component handles navigation directly for faster redirects

  return (
    <div className="services-swiper-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next-services',
          prevEl: '.swiper-button-prev-services',
        }}
        pagination={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={false}
        className="services-swiper"
      >
        {servicesList.map((service, index) => {
          const serviceUrl = service.href || getServiceUrl(service.name)
          const borderColor = service.color + '40'
          const hoverBorderColor = service.color
          const hoverShadow = `0 20px 40px -10px ${service.color}30`
          return (
          <SwiperSlide key={index}>
            <Link 
              href={serviceUrl}
              prefetch={true}
              className="service-card-link block bg-white rounded-2xl p-6 md:p-7 border-2 group relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl flex flex-col cursor-pointer no-underline"
              style={{ 
                borderColor: borderColor,
                '--hover-border-color': hoverBorderColor,
                '--hover-shadow': hoverShadow,
              } as React.CSSProperties & { '--hover-border-color': string; '--hover-shadow': string }}
              onMouseEnter={(e) => {
                const target = e.currentTarget
                target.style.borderColor = hoverBorderColor
                target.style.boxShadow = hoverShadow
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget
                target.style.borderColor = borderColor
                target.style.boxShadow = 'none'
              }}
            >
              {/* Decorative background element */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-full blur-3xl pointer-events-none"
                style={{ backgroundColor: service.color }}
              />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div className="mb-5 flex-shrink-0">
                  <div 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg border-2" 
                    style={{ 
                      borderColor: service.color,
                      backgroundColor: service.color + '10',
                      color: service.color
                    }}
                  >
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow flex flex-col min-h-0 mb-4 overflow-hidden">
                  <h3 
                    className="text-lg md:text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 line-clamp-2"
                    style={{ minHeight: '3.5rem', maxHeight: '3.5rem' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = service.color
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = ''
                    }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3 flex-grow overflow-hidden">
                    {service.description}
                  </p>
                </div>
                
                {/* CTA Button - Bottom Right */}
                <div className="mt-auto pt-2 flex-shrink-0 flex justify-end">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ 
                      borderColor: service.color,
                      backgroundColor: service.color + '10',
                      color: service.color
                    }}
                  >
                    <ArrowRight className="w-5 h-5" style={{ color: service.color }} strokeWidth={2} />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default memo(ServicesSwiper)
