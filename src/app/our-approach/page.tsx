'use client'

import { useEffect, useState } from 'react'
import { Target, Code, Rocket, Shield, Zap, CheckCircle, Users, TrendingUp, Award, Lightbulb, MessageSquare, Clock, BarChart3, ArrowRight, Calendar } from 'lucide-react'
import dynamic from 'next/dynamic'
import ProcessDiagram from '@/components/ProcessDiagram'
import FAQDropdown from '@/components/FAQDropdown'
import ContactSection from '@/components/ContactSection'
import SEOLocationSection from '@/components/SEOLocationSection'
import Clientele from '@/components/Clientele'
import GetQuoteSection from '@/components/sections/GetQuoteSection'
import { getFAQsForPage } from '@/lib/pageData'

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

  const approachPrinciples = [
    {
      title: 'Client-Centric Focus',
      description: 'We start every project by understanding your business goals, challenges, and vision. Your success is our success, and we tailor our approach to deliver maximum value.',
      icon: <Users className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Agile & Iterative',
      description: 'We follow agile methodologies with iterative development cycles, ensuring continuous feedback, rapid adaptation, and faster time-to-market.',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Every decision is backed by data and analytics. We measure, analyze, and optimize to ensure your solutions deliver measurable business outcomes.',
      icon: <BarChart3 className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Quality First',
      description: 'We maintain the highest standards in code quality, design, and delivery. Rigorous testing and quality assurance ensure reliable, scalable solutions.',
      icon: <Award className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Innovation & Technology',
      description: 'We leverage cutting-edge technologies and innovative approaches to solve complex problems and create competitive advantages for your business.',
      icon: <Lightbulb className="w-8 h-8" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'Transparent Communication',
      description: 'Clear, honest communication throughout the project lifecycle. Regular updates, transparent processes, and collaborative decision-making.',
      icon: <MessageSquare className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    }
  ]

  const methodologySteps = [
    {
      title: 'Discovery & Strategy',
      description: 'Deep dive into your business, goals, and challenges. We analyze requirements, market conditions, and opportunities to create a comprehensive strategy.',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Planning & Design',
      description: 'Create detailed project plans, architecture designs, and user experience blueprints. We ensure every detail is considered before development begins.',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Agile Development',
      description: 'Build solutions using agile sprints with continuous integration, regular demos, and iterative improvements based on feedback.',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive testing including unit tests, integration tests, performance testing, and security audits to ensure reliability.',
      icon: <Shield className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Deployment & Launch',
      description: 'Seamless deployment with zero downtime, comprehensive monitoring, and immediate support to ensure smooth launch.',
      icon: <Zap className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Optimization & Growth',
      description: 'Continuous monitoring, performance optimization, feature enhancements, and scaling to support your business growth.',
      icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to client relationships.',
      icon: <Award className="w-6 h-6" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and innovative approaches to solve complex challenges.',
      icon: <Lightbulb className="w-6 h-6" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Transparency',
      description: 'Honest communication, clear processes, and transparent pricing build trust.',
      icon: <MessageSquare className="w-6 h-6" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Partnership',
      description: 'We view every client relationship as a long-term partnership for mutual success.',
      icon: <Users className="w-6 h-6" strokeWidth={2} />,
      color: '#10b981'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-[#5e2cb6]/5 via-white to-[#c91a6f]/5 flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-16">
          <div className="scroll-animate">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Our{' '}
              <span className="hollow-text-brand">Approach</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-8">
              A proven methodology that combines technical expertise, strategic thinking, and client collaboration to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-[#5e2cb6] text-white font-semibold py-4 px-10 rounded-lg hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-base md:text-lg shadow-lg shadow-[#5e2cb6]/20"
              >
                <Calendar className="w-5 h-5" strokeWidth={2} />
                <span>Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele Section */}
      <Clientele />

      {/* Our Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Our{' '}
              <span className="hollow-text-brand">Principles</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The core principles that guide our approach and ensure successful project delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachPrinciples.map((principle, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center border-2" style={{ borderColor: principle.color, backgroundColor: principle.color + '10' }}>
                    <div style={{ color: principle.color }}>
                      {principle.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 flex-1">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Diagram */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Our{' '}
              <span className="hollow-text-brand">Methodology</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach from discovery to deployment, ensuring quality and success at every step
            </p>
          </div>
        </div>
        <ProcessDiagram 
          title=""
          subtitle=""
          steps={methodologySteps}
        />
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Our{' '}
              <span className="hollow-text-brand">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The values that define who we are and how we work with our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="mb-6 flex justify-center" style={{ color: value.color }}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
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

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQDropdown faqs={getFAQsForPage('our-approach')} />
        </div>
      </section>

      {/* SEO Location Section */}
      <SEOLocationSection serviceName="Software Development Approach & Methodology" />

      {/* Get Quote Section */}
      <GetQuoteSection
        title="Start Your"
        hollowText="Project"
        description="Ready to experience our proven approach? Let's discuss how our methodology can help transform your business. Get in touch for a free consultation."
        primaryCTA={{
          text: 'Get a Quote',
          onClick: () => setIsContactModalOpen(true)
        }}
        secondaryCTA={{
          text: 'Schedule a Call',
          onClick: () => setIsContactModalOpen(true)
        }}
      />

      {/* Contact Section */}
      <ContactSection 
        title="Ready to Get Started?"
        description="Let's discuss how our approach can help transform your business. Get in touch for a free consultation."
      />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  )
}
