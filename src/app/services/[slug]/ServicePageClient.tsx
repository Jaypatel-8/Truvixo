'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Calendar } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import GetQuoteSection from '@/components/sections/GetQuoteSection'
import { generateServiceSEO } from '@/lib/seoContent'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'


const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function ServicePageClient({ slug }: { slug: string }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  // Get service name from slug
  const serviceNameMap: Record<string, string> = {
    'custom-software-development': 'Custom Software Development',
    'ai-development-services': 'AI Development Services',
    'mobile-app-development': 'Mobile App Development',
    'web-application-development': 'Web Application Development',
    'saas-product-development': 'SaaS Product Development',
    'enterprise-software-development': 'Enterprise Software Development',
    'api-development-integration': 'API Development & Integration',
    'cms-development': 'CMS Development',
    'ecommerce-development': 'E-commerce Development',
    'legacy-app-modernization': 'Legacy App Modernization',
    'maintenance-support': 'Maintenance & Support',
    'machine-learning-model-development': 'Machine Learning Model Development',
    'seo': 'SEO Services',
    'ppc': 'PPC Services',
    'smm': 'Social Media Marketing',
    'performance-marketing': 'Performance Marketing',
    'email-marketing': 'Email Marketing',
    'cro': 'Conversion Rate Optimization',
  }

  const serviceName = serviceNameMap[slug] || slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  // Use custom hook for IntersectionObserver-based scroll animations
  useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    selectors: ['.scroll-animate'],
    unobserveAfterIntersect: false,
    useIdleCallback: false,
  })


  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Expert <span className="hollow-text-brand">{serviceName}</span> Services
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-gray-700 mb-4 leading-tight">
              Delivering Excellence and Innovation
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-12 max-w-4xl mx-auto font-light">
              We deliver exceptional {serviceName.toLowerCase()} services with proven expertise and innovative solutions tailored to your business needs. We serve clients worldwide. Transform your vision into reality with cutting-edge technology and industry-leading practices.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              About {serviceName}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                TruVixo stands out as the premier {serviceName.toLowerCase()} company, delivering comprehensive solutions that help businesses achieve their goals through innovative technology and expert execution. Our team combines deep technical expertise with strategic thinking to deliver results that drive growth and success.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With a proven track record spanning multiple industries, we've established ourselves as a trusted partner for businesses seeking exceptional {serviceName.toLowerCase()} services. We understand the unique challenges and opportunities in your industry and provide tailored solutions that align with your business objectives.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We serve clients worldwide. Whether you're a local business or a global enterprise, TruVixo provides {serviceName.toLowerCase()} services tailored to your specific needs, market requirements, and regulatory environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Quote Section - Last section before footer */}
      <GetQuoteSection
        title="Ready to Get Started"
        hollowText="with Us?"
        description={`Let's discuss how we can help with your ${serviceName.toLowerCase()} needs.`}
        primaryCTA={{
          text: 'Call Us',
          onClick: () => setIsContactModalOpen(true)
        }}
        secondaryCTA={{
          text: 'Schedule Consultation',
          onClick: () => setIsContactModalOpen(true)
        }}
      />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}
