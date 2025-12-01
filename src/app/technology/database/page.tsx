'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle, Database, Cloud, TrendingUp, Users, Target, Zap } from 'lucide-react'
import dynamic from 'next/dynamic'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function DatabaseStorageTechnologies() {
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
      name: 'PostgreSQL', 
      icon: <Database className="w-6 h-6" />, 
      description: 'Powerful relational DB for complex apps.',
      number: '1'
    },
    { 
      name: 'MySQL', 
      icon: <Database className="w-6 h-6" />, 
      description: 'Fast and efficient relational DB.',
      number: '2'
    },
    { 
      name: 'MongoDB', 
      icon: <Database className="w-6 h-6" />, 
      description: 'Flexible NoSQL database for scale.',
      number: '3'
    },
    { 
      name: 'Redis', 
      icon: <Database className="w-6 h-6" />, 
      description: 'In-memory caching for high performance.',
      number: '4'
    },
    { 
      name: 'Firebase', 
      icon: <Cloud className="w-6 h-6" />, 
      description: 'Real-time DB and authentication.',
      number: '5'
    },
    { 
      name: 'DynamoDB', 
      icon: <Database className="w-6 h-6" />, 
      description: 'Fully managed NoSQL on AWS.',
      number: '6'
    }
  ]

  const useCases = [
    { icon: <Target className="w-6 h-6" />, title: 'SaaS Applications', description: 'Multi-tenant data management' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Analytics Systems', description: 'Data warehousing and analytics' },
    { icon: <Zap className="w-6 h-6" />, title: 'Real-Time Apps', description: 'Live data synchronization' },
    { icon: <Users className="w-6 h-6" />, title: 'Enterprise Dashboards', description: 'Business intelligence platforms' }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      <section className="relative min-h-[70vh] bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Database Technologies We Use to Build{' '}
              <span className="hollow-text-teal">
                Reliable, High-Availability Systems
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              We implement robust database solutions that ensure data reliability, performance, and scalability.
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
              Use{' '}
              <span className="hollow-text-teal">
                Cases
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate-scale border border-gray-100"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <div className="text-purple-600">{useCase.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build Secure and Scalable Data Systems
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






