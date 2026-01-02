'use client'

import { useEffect, useState, useMemo } from 'react'
import { ArrowRight, Calendar, Phone, Mail } from 'lucide-react'
import dynamic from 'next/dynamic'
import GetQuoteSection from '@/components/sections/GetQuoteSection'
import type { BasePageData } from '@/lib/types/staticData'
import { getIconComponent } from '@/lib/utils/iconMapper'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

const Clientele = dynamic(() => import('@/components/Clientele'), {
  ssr: false,
  loading: () => <div className="min-h-[100px] bg-[#5e2cb6]"></div>,
})

const Technologies = dynamic(() => import('@/components/Technologies'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-white"></div>,
})

const FAQDropdown = dynamic(() => import('@/components/FAQDropdown'), {
  ssr: false,
  loading: () => <div className="min-h-[200px] bg-white"></div>,
})

const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  ssr: false,
  loading: () => <div className="min-h-[300px] bg-white"></div>,
})

const ProcessDiagram = dynamic(() => import('@/components/ProcessDiagram'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-white"></div>,
})

function getIcon(iconName: string) {
  return getIconComponent(iconName) || getIconComponent('Code')
}

interface WebApplicationClientProps {
  faqs: Array<{ question: string; answer: string }>
  webAppData: BasePageData
}

export default function WebApplicationClient({ faqs, webAppData }: WebApplicationClientProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

    useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    selectors: ['.scroll-animate', '.scroll-animate-left', '.scroll-animate-right', '.scroll-animate-scale'],
    unobserveAfterIntersect: false,
    useIdleCallback: true,
  })

  const services = useMemo(() => 
    webAppData.services.map(service => {
      const IconComponent = getIcon(service.iconName)
      return {
        ...service,
        icon: IconComponent ? <IconComponent className="w-6 h-6" strokeWidth={2} /> : null
      }
    }), [webAppData.services]
  )

  const whyChooseUs = useMemo(() => 
    webAppData.whyChooseUs.map(item => {
      const IconComponent = getIcon(item.iconName)
      return {
        ...item,
        icon: IconComponent ? <IconComponent className="w-6 h-6" strokeWidth={2} /> : null
      }
    }), [webAppData.whyChooseUs]
  )

  const processSteps = useMemo(() => 
    webAppData.processSteps.map(step => {
      const IconComponent = getIcon(step.iconName)
      return {
        ...step,
        icon: IconComponent ? <IconComponent className="w-6 h-6" strokeWidth={2} /> : null
      }
    }), [webAppData.processSteps]
  )

  const industries = useMemo(() => 
    webAppData.industries.map(industry => {
      const IconComponent = getIcon(industry.iconName)
      return {
        ...industry,
        icon: IconComponent ? <IconComponent className="w-6 h-6" strokeWidth={2} /> : null
      }
    }), [webAppData.industries]
  )

  const benefits = useMemo(() => 
    webAppData.benefits.map(benefit => {
      const IconComponent = getIcon(benefit.iconName)
      return {
        ...benefit,
        icon: IconComponent ? <IconComponent className="w-6 h-6" strokeWidth={2} /> : null
      }
    }), [webAppData.benefits]
  )

  const highlights = useMemo(() => 
    webAppData.hero.highlights.map(highlight => {
      const iconName = (highlight as any).icon || (highlight as any).iconName || 'Zap'
      const IconComponent = getIcon(iconName)
      return {
        ...highlight,
        icon: IconComponent ? <IconComponent className="w-5 h-5" strokeWidth={2} /> : null,
        iconName: iconName
      }
    }), [webAppData.hero.highlights]
  )

  return (
    <>
      <section className="relative min-h-[70vh] bg-white flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-web" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-black"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-web)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-16">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 leading-tight">
              {webAppData.hero.title}{' '}
              <span className="hollow-text-brand">
                {webAppData.hero.hollowText}
              </span>
              <span className="text-xl md:text-2xl font-semibold text-gray-600 block mt-4">
                {webAppData.hero.subtitle}
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              {webAppData.hero.description}
            </p>
            <div className="mb-8 p-6 bg-gradient-to-r from-[#5e2cb6]/10 to-[#c91a6f]/10 rounded-xl border border-[#5e2cb6]/20 max-w-4xl mx-auto">
              <p className="text-gray-700 font-medium mb-3">Why Choose Our Web Application Development:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {webAppData.hero.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] mt-1">✓</span>
                    <span className="text-gray-600"><strong>{feature.text.split(':')[0]}:</strong> {feature.text.split(':')[1]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {highlights.map((highlight, index) => {
                const originalHighlight = webAppData.hero.highlights[index]
                const iconName = (originalHighlight as any).icon || (originalHighlight as any).iconName || 'Zap'
                return (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
                    <div className="flex-shrink-0 mt-1" style={{ color: iconName === 'Zap' ? '#5e2cb6' : iconName === 'Shield' ? '#c91a6f' : '#fecc4d' }}>
                      {highlight.icon}
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold mb-1">{highlight.title}</p>
                      <p className="text-gray-600 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="/contact?service=web-application-development"
                className="bg-[#5e2cb6] text-white font-semibold py-4 px-10 rounded-lg hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-[#5e2cb6]/20"
              >
                <Calendar className="w-5 h-5" strokeWidth={2} />
                <span>Get a Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {isMounted && <Clientele />}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              {webAppData.servicesTitle}{' '}
              <span className="hollow-text-brand">
                {webAppData.servicesHollowText}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive web application development services tailored to your business needs. From responsive web apps to progressive web applications, we deliver solutions that drive engagement and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <div className="text-gray-900 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              {webAppData.whyChooseTitle}{' '}
              <span className="hollow-text-brand">
                {webAppData.whyChooseHollowText}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver web applications that not only look great but also drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <div className="text-gray-900 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Industries We{' '}
              <span className="hollow-text-brand">
                Specialize
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have extensive experience building web applications for various industries, understanding unique requirements and delivering tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg"
              >
                <div className="text-gray-900 mb-3 flex justify-center">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Quote Section (in middle) */}
      <section className="py-16 bg-[#5e2cb6] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              {webAppData.getQuote.title}{' '}
              <span className="hollow-text-white">
                {webAppData.getQuote.hollowText}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              {webAppData.getQuote.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-[#5e2cb6] font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-5 h-5" strokeWidth={2} />
                <span>Call Us</span>
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-transparent text-white border-2 border-white font-semibold py-4 px-8 rounded-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" strokeWidth={2} />
                <span>Schedule Consultation</span>
              </button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              {webAppData.benefitsTitle}{' '}
              <span className="hollow-text-brand">
                {webAppData.benefitsHollowText}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how modern web applications can transform your business operations and customer engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: benefit.color + '10' }}>
                  <div style={{ color: benefit.color }}>
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              {webAppData.useCasesTitle}{' '}
              <span className="hollow-text-brand">
                {webAppData.useCasesHollowText}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how businesses leverage web applications to streamline operations and enhance customer experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webAppData.useCases.map((useCase, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${useCase.gradient} rounded-xl p-8 border`}
                style={{ borderColor: useCase.borderColor + '20' }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {useCase.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Technologies technologies={[...webAppData.technologies]} />

      {/* Process Diagram */}
      <ProcessDiagram
        title={webAppData.processTitle}
        subtitle={webAppData.processSubtitle}
        steps={processSteps}
      />

      {/* FAQs */}
      <FAQDropdown faqs={faqs} />

      <ContactSection 
        title={webAppData.contact.title}
        description={webAppData.contact.description}
      />

      {/* Client Section */}
      {isMounted && (
        <Clientele 
          title="Trusted by Leading Companies"
          subtitle="Join our growing list of satisfied clients"
        />
      )}

      {/* Get Quote Section - Last section before footer */}
      <GetQuoteSection
        title={webAppData.getQuote.title}
        hollowText={webAppData.getQuote.hollowText}
        description={webAppData.getQuote.description}
        primaryCTA={{
          text: 'Call Us',
          type: 'tel',
          href: '+916354326412'
        }}
        secondaryCTA={{
          text: 'Get a Quote',
          type: 'link',
          href: '/contact?service=web-application-development'
        }}
      />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  )
}

