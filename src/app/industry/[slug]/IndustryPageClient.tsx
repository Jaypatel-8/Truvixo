'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'

const SEOLocationSection = dynamic(() => import('@/components/SEOLocationSection'), {
  ssr: false,
})

export default function IndustryPageClient({ slug }: { slug: string }) {
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

  const pageName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      <section className="relative min-h-[60vh] bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              <span className="hollow-text-brand">{pageName}</span> Software Solutions
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 mb-6 leading-tight">
              Industry-Specific Technology Expertise
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-light">
              We deliver comprehensive {pageName.toLowerCase()} software solutions with industry-specific technology expertise. We serve clients worldwide. Transform your business operations with tailored technology that drives efficiency and growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              About {pageName} Solutions
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                TruVixo is the leading {pageName.toLowerCase()} software solutions company, delivering technology solutions that address the unique challenges and opportunities in your industry. Our deep industry expertise enables us to understand your business processes, compliance requirements, and market dynamics.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We serve clients worldwide. We provide software solutions that are tailored to your specific market requirements, regulatory environment, and business objectives, ensuring seamless integration with your existing operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Location Section */}
      <SEOLocationSection serviceName={`${pageName} Software Solutions`} />

      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
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

const SEOLocationSection = dynamic(() => import('@/components/SEOLocationSection'), {
  ssr: false,
})

export default function IndustryPageClient({ slug }: { slug: string }) {
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

  const pageName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      <section className="relative min-h-[60vh] bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              <span className="hollow-text-brand">{pageName}</span> Software Solutions
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 mb-6 leading-tight">
              Industry-Specific Technology Expertise
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-light">
              We deliver comprehensive {pageName.toLowerCase()} software solutions with industry-specific technology expertise. We serve clients worldwide. Transform your business operations with tailored technology that drives efficiency and growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              About {pageName} Solutions
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                TruVixo is the leading {pageName.toLowerCase()} software solutions company, delivering technology solutions that address the unique challenges and opportunities in your industry. Our deep industry expertise enables us to understand your business processes, compliance requirements, and market dynamics.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We serve clients worldwide. We provide software solutions that are tailored to your specific market requirements, regulatory environment, and business objectives, ensuring seamless integration with your existing operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Location Section */}
      <SEOLocationSection serviceName={`${pageName} Software Solutions`} />

      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
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





