'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle, Code, FileCode, Layers, Zap, Eye, Target, Globe, ShoppingCart, Users, Palette, TrendingUp, Zap as Lightning, Phone, Calendar } from 'lucide-react'
import dynamic from 'next/dynamic'
import GetQuoteSection from '@/components/sections/GetQuoteSection'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function FrontendTechnologies() {
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

  const technologies = [
    { 
      name: 'React.js', 
      icon: <Code className="w-6 h-6" />, 
      description: 'A powerful JS library for building high-performance web apps with reusable components.',
      number: '1'
    },
    { 
      name: 'Next.js', 
      icon: <FileCode className="w-6 h-6" />, 
      description: 'A React framework with server-side rendering (SSR), SEO optimization, and API routing.',
      number: '2'
    },
    { 
      name: 'Vue.js', 
      icon: <Layers className="w-6 h-6" />, 
      description: 'Lightweight, progressive framework ideal for flexible dashboards and web apps.',
      number: '3'
    },
    { 
      name: 'Angular', 
      icon: <Zap className="w-6 h-6" />, 
      description: 'Enterprise-level framework for large-scale, structured apps that require stability.',
      number: '4'
    },
    { 
      name: 'Tailwind CSS', 
      icon: <Palette className="w-6 h-6" />, 
      description: 'Utility-first CSS framework for visually consistent, responsive UI.',
      number: '5'
    },
    { 
      name: 'HTML5, CSS3, JavaScript (ES6+)', 
      icon: <Code className="w-6 h-6" />, 
      description: 'Foundational technologies for web development.',
      number: '6'
    }
  ]

  const whatWeBuild = [
    { icon: <Globe className="w-6 h-6" />, title: 'Web Applications' },
    { icon: <Target className="w-6 h-6" />, title: 'SaaS Dashboards' },
    { icon: <Users className="w-6 h-6" />, title: 'Admin Panels' },
    { icon: <ShoppingCart className="w-6 h-6" />, title: 'E-commerce Frontends' },
    { icon: <Globe className="w-6 h-6" />, title: 'Landing Pages' },
    { icon: <Users className="w-6 h-6" />, title: 'Customer Portals' },
    { icon: <Palette className="w-6 h-6" />, title: 'Interactive UI Components' }
  ]

  const benefits = [
    { icon: <Lightning className="w-6 h-6" />, title: 'Faster Load Times', description: 'Optimized performance' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Higher Conversions', description: 'Better user experience' },
    { icon: <Target className="w-6 h-6" />, title: 'Better SEO', description: 'Search engine optimized' },
    { icon: <Code className="w-6 h-6" />, title: 'Maintainable Frontend Code', description: 'Clean, organized codebase' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Scalable Architecture', description: 'Grows with your business' }
  ]

  const whyChooseUs = [
    { icon: <Palette className="w-6 h-6" />, title: 'UI/UX + Engineering Expertise', description: 'Design and development combined' },
    { icon: <Target className="w-6 h-6" />, title: 'SEO-Friendly Development', description: 'Built for search engines' },
    { icon: <Eye className="w-6 h-6" />, title: 'Pixel-Perfect Implementation', description: 'Precise design execution' },
    { icon: <Code className="w-6 h-6" />, title: 'Seamless Backend Integration', description: 'Smooth API connectivity' }
  ]

  const faqs = [
    {
      question: 'Which frontend framework is best?',
      answer: 'It depends on your project requirements. We choose the best framework based on your goals, team expertise, and scalability needs.'
    },
    {
      question: 'Do you support SSR?',
      answer: 'Yes — we use Next.js for server-side rendering, which improves SEO and initial load times.'
    },
    {
      question: 'Can you convert old websites into modern apps?',
      answer: 'Yes, we specialize in modernizing legacy websites and converting them into modern, responsive applications.'
    },
    {
      question: 'Do you offer UI/UX design?',
      answer: 'Yes — we provide end-to-end services including UI/UX design, frontend development, and integration.'
    }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      <section className="relative min-h-[70vh] bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Frontend Development Technologies We Use to Build{' '}
              <span className="hollow-text-teal">
                Modern, Lightning-Fast Applications
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              We use the latest, battle-tested frontend technologies to deliver experiences that are fast, accessible, 
              responsive, and conversion-focused. Our frontend engineering ensures UI/UX excellence, maintainable code, 
              and seamless integration with backend systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Core Frontend{' '}
              <span className="hollow-text-teal">
                Technologies
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300 scroll-animate-left border border-gray-100"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {tech.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-purple-600">{tech.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{tech.name}</h3>
                  </div>
                  <p className="text-gray-600 text-lg">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We{' '}
              <span className="hollow-text-teal">
                Build
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeBuild.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 scroll-animate-scale border border-gray-100"
              >
                <div className="text-purple-600 mb-3 flex justify-center">{item.icon}</div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate-scale border border-gray-100"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <div className="text-purple-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose{' '}
              <span className="hollow-text-teal">
                Us
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate-scale border border-gray-100"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <div className="text-purple-600">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked{' '}
              <span className="hollow-text-teal">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 scroll-animate-scale border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-purple-600">Q{index + 1}:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Quote Section - Last section before footer */}
      <GetQuoteSection
        title="Ready to Build a Modern"
        hollowText="Frontend?"
        description="Get in touch and let's discuss how we can help transform your business with modern frontend technologies."
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












