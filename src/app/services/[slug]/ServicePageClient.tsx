'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import { generateServiceSEO } from '@/lib/seoContent'

const SEOLocationSection = dynamic(() => import('@/components/SEOLocationSection'), {
  ssr: false,
})

export default function ServicePageClient({ slug }: { slug: string }) {
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

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll('.scroll-animate')
    scrollElements.forEach((el) => observer.observe(el))

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Expert <span className="hollow-text-brand">{serviceName}</span> Services
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 mb-6 leading-tight">
              Delivering Excellence and Innovation
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-light">
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

      {/* SEO Location Section */}
      <SEOLocationSection serviceName={serviceName} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help with your {serviceName.toLowerCase()} needs
            </p>
            <Link
              href="/contact"
              className="bg-white text-purple-600 font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}



import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import { generateServiceSEO } from '@/lib/seoContent'

const SEOLocationSection = dynamic(() => import('@/components/SEOLocationSection'), {
  ssr: false,
})

export default function ServicePageClient({ slug }: { slug: string }) {
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

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll('.scroll-animate')
    scrollElements.forEach((el) => observer.observe(el))

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Expert <span className="hollow-text-brand">{serviceName}</span> Services
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 mb-6 leading-tight">
              Delivering Excellence and Innovation
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-light">
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

      {/* SEO Location Section */}
      <SEOLocationSection serviceName={serviceName} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help with your {serviceName.toLowerCase()} needs
            </p>
            <Link
              href="/contact"
              className="bg-white text-purple-600 font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
