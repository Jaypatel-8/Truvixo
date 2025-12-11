'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle, CreditCard, Globe, Phone, Shield, Database, Search, AlertCircle, BarChart, Wrench } from 'lucide-react'
import dynamic from 'next/dynamic'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function ToolsIntegrations() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

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

    const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale')
    scrollElements.forEach((el) => observer.observe(el))

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const tools = [
    { name: 'Stripe', icon: <CreditCard className="w-5 h-5" />, category: 'Payment' },
    { name: 'Razorpay', icon: <CreditCard className="w-5 h-5" />, category: 'Payment' },
    { name: 'PayPal', icon: <CreditCard className="w-5 h-5" />, category: 'Payment' },
    { name: 'Google APIs', icon: <Globe className="w-5 h-5" />, category: 'Integration' },
    { name: 'Twilio', icon: <Phone className="w-5 h-5" />, category: 'Communication' },
    { name: 'Firebase Auth', icon: <Shield className="w-5 h-5" />, category: 'Authentication' },
    { name: 'Supabase', icon: <Database className="w-5 h-5" />, category: 'Backend' },
    { name: 'ElasticSearch', icon: <Search className="w-5 h-5" />, category: 'Search' },
    { name: 'Sentry', icon: <AlertCircle className="w-5 h-5" />, category: 'Monitoring' },
    { name: 'Mixpanel', icon: <BarChart className="w-5 h-5" />, category: 'Analytics' }
  ]

  const categories = [
    { name: 'Payment', tools: tools.filter(t => t.category === 'Payment') },
    { name: 'Integration', tools: tools.filter(t => t.category === 'Integration') },
    { name: 'Communication', tools: tools.filter(t => t.category === 'Communication') },
    { name: 'Authentication', tools: tools.filter(t => t.category === 'Authentication') },
    { name: 'Backend', tools: tools.filter(t => t.category === 'Backend') },
    { name: 'Search', tools: tools.filter(t => t.category === 'Search') },
    { name: 'Monitoring', tools: tools.filter(t => t.category === 'Monitoring') },
    { name: 'Analytics', tools: tools.filter(t => t.category === 'Analytics') }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      <section className="relative min-h-[70vh] bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Tools &{' '}
              <span className="hollow-text-teal">
                Third-Party Integrations
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              We integrate with leading third-party tools and services to extend functionality and enhance your applications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tools &{' '}
              <span className="hollow-text-teal">
                Integrations
              </span>
            </h2>
          </div>

          <div className="space-y-12">
            {categories.map((category, catIndex) => (
              <div key={catIndex} className="scroll-animate">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 scroll-animate-scale border border-gray-100"
                    >
                      <div className="text-purple-600 mb-3 flex justify-center">{tool.icon}</div>
                      <h4 className="font-semibold text-gray-800 text-sm">{tool.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Integrate Powerful Tools into Your Application
            </h2>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-purple-600 font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}









