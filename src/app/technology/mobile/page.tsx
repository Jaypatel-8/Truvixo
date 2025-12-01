'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle, Smartphone, Code, Zap, Users, Heart, Package, ShoppingCart, GraduationCap, Zap as Lightning, CreditCard } from 'lucide-react'
import dynamic from 'next/dynamic'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function MobileAppTechnologies() {
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
      name: 'Flutter', 
      icon: <Smartphone className="w-6 h-6" />, 
      description: 'Single codebase for beautiful, fast iOS & Android apps.',
      number: '1'
    },
    { 
      name: 'React Native', 
      icon: <Code className="w-6 h-6" />, 
      description: 'Cross-platform framework for efficient mobile app development.',
      number: '2'
    },
    { 
      name: 'Swift (iOS)', 
      icon: <Zap className="w-6 h-6" />, 
      description: 'Native iOS apps with best-in-class performance.',
      number: '3'
    },
    { 
      name: 'Kotlin (Android)', 
      icon: <Code className="w-6 h-6" />, 
      description: 'Modern Android development language.',
      number: '4'
    }
  ]

  const mobileApps = [
    { icon: <Users className="w-6 h-6" />, title: 'Social Platforms' },
    { icon: <CreditCard className="w-6 h-6" />, title: 'Fintech Apps' },
    { icon: <Heart className="w-6 h-6" />, title: 'Health Apps' },
    { icon: <Package className="w-6 h-6" />, title: 'Delivery Apps' },
    { icon: <ShoppingCart className="w-6 h-6" />, title: 'eCommerce Apps' },
    { icon: <GraduationCap className="w-6 h-6" />, title: 'Education Apps' },
    { icon: <Zap className="w-6 h-6" />, title: 'On-Demand Service Apps' }
  ]

  const benefits = [
    { icon: <Zap className="w-6 h-6" />, title: 'Smooth Animations', description: 'Fluid user experience' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Offline Support', description: 'Works without internet' },
    { icon: <Lightning className="w-6 h-6" />, title: 'Highly Optimized Performance', description: 'Fast and efficient' }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      <section className="relative min-h-[70vh] bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Mobile Technologies We Use to Build{' '}
              <span className="hollow-text-teal">
                High-Performance iOS & Android Apps
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              We build mobile applications using robust cross-platform and native frameworks for smooth 
              user experience and fast performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologies
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
              Mobile Apps We{' '}
              <span className="hollow-text-teal">
                Build
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileApps.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 scroll-animate-scale border border-gray-100"
              >
                <div className="text-purple-600 mb-3 flex justify-center">{app.icon}</div>
                <h3 className="font-semibold text-gray-800">{app.title}</h3>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build Your Mobile App with Expert Developers
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


