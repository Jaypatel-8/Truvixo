'use client'

import { MapPin, Globe, Award, TrendingUp } from 'lucide-react'

interface SEOLocationSectionProps {
  serviceName?: string
  className?: string
}

export default function SEOLocationSection({ 
  serviceName = 'Software Development & Digital Marketing',
  className = '' 
}: SEOLocationSectionProps) {
  const locations = [
    { name: 'Ahmedabad, India', icon: <MapPin className="w-5 h-5" strokeWidth={2} />, color: '#5e2cb6', description: 'Headquarters' },
    { name: 'Dubai, UAE', icon: <MapPin className="w-5 h-5" strokeWidth={2} />, color: '#c91a6f', description: 'Middle East' },
    { name: 'USA', icon: <MapPin className="w-5 h-5" strokeWidth={2} />, color: '#fecc4d', description: 'North America' },
    { name: 'Australia', icon: <MapPin className="w-5 h-5" strokeWidth={2} />, color: '#10b981', description: 'Asia-Pacific' },
    { name: 'Worldwide', icon: <Globe className="w-5 h-5" strokeWidth={2} />, color: '#5e2cb6', description: 'Global Reach' },
  ]

  return (
    <section className={`py-12 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO-Optimized Heading - More Subtle */}
        <div className="text-center mb-8 scroll-animate">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Serving Clients Worldwide
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Based in Ahmedabad, Gujarat, India. Serving clients across India, Dubai (UAE), USA, Australia, and worldwide. We deliver exceptional {serviceName.toLowerCase()} services with local expertise and global standards.
          </p>
        </div>

        {/* Location Grid - Compact */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-md group"
              style={{ 
                borderColor: location.color + '40'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = location.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = location.color + '40'
              }}
            >
              <div className="mb-3 flex justify-center" style={{ color: location.color }}>
                {location.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#5e2cb6] transition-colors mb-1">
                {location.name}
              </h3>
              {location.description && (
                <p className="text-xs text-gray-500">{location.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* SEO Content Section - Compact */}
        <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-sm mt-8">
          <div className="prose prose-sm md:prose-base max-w-none">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Why Choose TruVixo?
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                Based in Ahmedabad, Gujarat, India, TruVixo serves clients across India, Dubai (UAE), USA, Australia, and worldwide. We combine local market expertise with global best practices to deliver {serviceName.toLowerCase()} services that help businesses succeed regardless of their location. Our understanding of regional business dynamics, regulatory requirements, and market opportunities enables us to provide tailored solutions for each market.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Proven Track Record</h4>
                  <p className="text-sm text-gray-600">
                    Successfully delivered {serviceName.toLowerCase()} projects across multiple countries and industries with measurable results.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Expert Team</h4>
                  <p className="text-sm text-gray-600">
                    Skilled professionals with deep expertise in {serviceName.toLowerCase()} and understanding of global markets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#fecc4d]/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#fecc4d]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Global Reach</h4>
                  <p className="text-sm text-gray-600">
                    Serving clients worldwide with local expertise and international standards for {serviceName.toLowerCase()} services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
