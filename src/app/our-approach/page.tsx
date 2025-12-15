'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Target, Users, Zap, TrendingUp, Shield, Rocket, CheckCircle, Phone, Mail, Calendar } from 'lucide-react'
import dynamic from 'next/dynamic'
import Clientele from '@/components/Clientele'
import ContactSection from '@/components/ContactSection'
import ProcessDiagram from '@/components/ProcessDiagram'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function OurApproach() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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

  const approachSteps = [
    {
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business, goals, and challenges to create a tailored strategy',
      icon: <Target className="w-7 h-7" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Design & Planning',
      description: 'Create detailed plans and designs that align with your vision and business objectives',
      icon: <Users className="w-7 h-7" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Development & Execution',
      description: 'Agile development with regular updates and transparent communication throughout',
      icon: <Zap className="w-7 h-7" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Testing & Quality',
      description: 'Rigorous testing ensures quality, performance, and security before launch',
      icon: <Shield className="w-7 h-7" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Launch & Optimization',
      description: 'Smooth launch followed by continuous monitoring and optimization',
      icon: <Rocket className="w-7 h-7" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Support & Growth',
      description: 'Ongoing support, updates, and enhancements to ensure long-term success',
      icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const values = [
    {
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships.',
      icon: <Users className="w-6 h-6" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Innovation',
      description: 'We stay ahead with cutting-edge technologies and methodologies.',
      icon: <Zap className="w-6 h-6" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Transparency',
      description: 'Clear communication and honest reporting at every step.',
      icon: <Shield className="w-6 h-6" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Excellence',
      description: 'We deliver quality solutions that exceed expectations.',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />,
      color: '#10b981'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <section className="relative min-h-[85vh] bg-white flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center scroll-animate">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e2cb6]/10 rounded-full mb-6">
              <Target className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
              <span className="text-sm font-semibold text-[#5e2cb6]">Our Approach</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Our{' '}
              <span className="hollow-text-brand">
                Approach
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              A proven methodology that combines strategic thinking, technical excellence, and client collaboration to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {isMounted && <div className="mt-12"><Clientele /></div>}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              How We{' '}
              <span className="hollow-text-brand">
                Work
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approachSteps.map((step, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
                style={{ 
                  borderColor: step.color + '40'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = step.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = step.color + '40'
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ backgroundColor: step.color }}></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center" style={{ color: step.color }}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5e2cb6] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Our Core{' '}
              <span className="hollow-text-brand">
                Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl text-center"
                style={{ 
                  borderColor: value.color + '40'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = value.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = value.color + '40'
                }}
              >
                <div className="mb-6 flex justify-center" style={{ color: value.color }}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5e2cb6] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessDiagram 
        title="Our Process"
        subtitle="From initial discovery to ongoing success, we follow a proven methodology"
      />

      <section className="py-20 bg-[#5e2cb6] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Work{' '}
              <span className="hollow-text-white">
                Together?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              Let's discuss how our approach can help achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-[#5e2cb6] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-5 h-5" strokeWidth={2} />
                <span>Call Us</span>
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-transparent text-white border-2 border-white font-semibold py-4 px-8 rounded-xl hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" strokeWidth={2} />
                <span>Schedule Consultation</span>
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <a href="mailto:sales@truvixoo.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-5 h-5" strokeWidth={2} />
                <span>sales@truvixoo.com</span>
              </a>
              <a href="tel:+916354326412" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-5 h-5" strokeWidth={2} />
                <span>+91 63543 26412</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection 
        title="Get in Touch"
        description="Have questions about our approach? Let's discuss how we can help."
      />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}







