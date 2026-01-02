'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Calendar } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import GetQuoteSection from '@/components/sections/GetQuoteSection'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'


const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function IndustryPageClient({ slug }: { slug: string }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  // Use custom hook for IntersectionObserver-based scroll animations
  useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    selectors: ['.scroll-animate'],
    unobserveAfterIntersect: false,
    useIdleCallback: false,
  })

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
            <h2 className="text-xl md:text-2xl font-light text-gray-700 mb-4 leading-tight">
              Industry-Specific Technology Expertise
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-12 max-w-4xl mx-auto font-light">
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
      {/* Get Quote Section - Last section before footer */}
      <GetQuoteSection
        title="Ready to Transform"
        hollowText={`${pageName}?`}
        description="Get in touch and let's discuss how we can help transform your business with industry-specific software solutions."
        primaryCTA={{
          text: 'Call Us',
          type: 'tel',
          href: '+916354326412'
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
