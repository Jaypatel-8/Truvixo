'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'

const SEOLocationSection = dynamic(() => import('@/components/SEOLocationSection'), {
  ssr: false,
})

export default function HirePageClient({ slug }: { slug: string }) {
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
              Hire Expert <span className="hollow-text-brand">{pageName}</span>
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 mb-6 leading-tight">
              Connect with Top-Tier Talent
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-light">
              Connect with top-tier {pageName.toLowerCase()} talent for your development needs. We serve clients worldwide. Our expert team brings years of experience and proven track record in delivering exceptional results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              About {pageName}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                TruVixo is your trusted partner for hiring {pageName.toLowerCase()}. Our comprehensive talent network connects you with skilled professionals who understand your business needs and deliver exceptional results. We carefully vet all candidates to ensure they meet the highest standards of technical expertise and professional excellence.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We serve clients worldwide. Whether you're a local business or a global enterprise, we connect you with top-tier {pageName.toLowerCase()} who understand your market dynamics and can contribute to your success from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Location Section */}
      <SEOLocationSection serviceName={`Hire ${pageName}`} />

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





