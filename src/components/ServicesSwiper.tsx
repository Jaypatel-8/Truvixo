'use client'

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

export default function ServicesSwiper({ servicesList, onServiceClick }: ServicesSwiperProps) {
  // Service name to URL mapping
  const getServiceUrl = (serviceName: string): string => {
    const serviceMap: { [key: string]: string } = {
      'Custom Software Development': '/services/custom-software-development',
      'AI & Machine Learning': '/services/ai-development-services',
      'Web & Mobile Development': '/services/mobile-app-development',
      'Cloud & DevOps': '/services/maintenance-support',
      'Digital Marketing': '/services/seo',
      'UI/UX Design': '/services/custom-software-development',
      'Data Engineering': '/services/ai-development-services',
      'Enterprise Solutions': '/services/enterprise-software-development',
      'Consulting & Strategy': '/services/custom-software-development',
      'Maintenance & Support': '/services/maintenance-support',
      'Legacy Modernization': '/services/legacy-app-modernization'
    }
    return serviceMap[serviceName] || '/services'
  }

  const handleCardClick = (service: Service) => {
    if (onServiceClick) {
      onServiceClick(service.name)
    }
  }

  return (
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
      pagination={{
        clickable: true,
        el: '.swiper-pagination-services',
      }}
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
        return (
        <SwiperSlide key={index} className="h-auto">
          <Link 
            href={serviceUrl}
            prefetch={true}
            className="h-full bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-6 border-2 group relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl flex flex-col cursor-pointer no-underline"
            style={{ 
              borderColor: service.color + '40',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget
              target.style.borderColor = service.color
              target.style.boxShadow = `0 20px 40px -10px ${service.color}30`
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget
              target.style.borderColor = service.color + '40'
              target.style.boxShadow = 'none'
            }}
            onClick={() => handleCardClick(service)}
          >
            {/* Decorative background element */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-full blur-3xl pointer-events-none"
              style={{ backgroundColor: service.color }}
            />
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Icon Container */}
              <div className="mb-4 flex-shrink-0">
                <div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg border-2" 
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
              <div className="flex-grow flex flex-col">
                <h3 
                  className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2 md:mb-3 transition-colors duration-300 line-clamp-2"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = service.color
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = ''
                  }}
                >
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3 md:mb-4 line-clamp-3">
                  {service.description}
                </p>
              </div>
              
              {/* Arrow indicator */}
              <div className="mt-auto pt-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div 
                  className="w-9 h-9 rounded-full flex items-center justify-center border-2"
                  style={{ 
                    borderColor: service.color,
                    backgroundColor: service.color + '10'
                  }}
                >
                  <ArrowRight className="w-4 h-4" style={{ color: service.color }} strokeWidth={2} />
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
