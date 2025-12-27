'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'
import dynamic from 'next/dynamic'
import Clientele from '@/components/Clientele'
import Technologies from '@/components/Technologies'
import FAQDropdown from '@/components/FAQDropdown'
import ContactSection from '@/components/ContactSection'
import GetQuoteSection from '@/components/sections/GetQuoteSection'
import ProcessDiagram from '@/components/ProcessDiagram'
import { getIconComponent } from '@/lib/utils/iconMapper'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

function getIcon(iconName: string) {
  return getIconComponent(iconName) || getIconComponent('Code')
}

interface SEOClientProps {
  faqs: Array<{ question: string; answer: string }>
  seoData: typeof import('@/lib/staticData/services/seo').seoData
}

export default function SEOClient({ faqs, seoData }: SEOClientProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Use custom hook for IntersectionObserver-based scroll animations
  useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    selectors: ['.scroll-animate', '.scroll-animate-left', '.scroll-animate-right', '.scroll-animate-scale'],
    unobserveAfterIntersect: false,
    useIdleCallback: false,
  })

  const services = seoData.services.map(service => {
    const IconComponent = getIcon(service.iconName)
    return {
      ...service,
      icon: IconComponent ? <IconComponent className="w-8 h-8" strokeWidth={2} /> : null
    }
  })

  const whyChooseUs = seoData.whyChooseUs.map(item => {
    const IconComponent = getIcon(item.iconName)
    return {
      ...item,
      icon: IconComponent ? <IconComponent className="w-7 h-7" strokeWidth={2} /> : null
    }
  })

  const processSteps = seoData.processSteps.map(step => {
    const IconComponent = getIcon(step.iconName)
    return {
      ...step,
      icon: IconComponent ? <IconComponent className="w-6 h-6" strokeWidth={2} /> : null
    }
  })

  const industries = seoData.industries.map(industry => {
    const IconComponent = getIcon(industry.iconName)
    return {
      ...industry,
      icon: IconComponent ? <IconComponent className="w-7 h-7" strokeWidth={2} /> : null
    }
  })

  const benefits = seoData.benefits.map(benefit => {
    const IconComponent = getIcon(benefit.iconName)
    return {
      ...benefit,
      icon: IconComponent ? <IconComponent className="w-6 h-6" strokeWidth={2} /> : null
    }
  })

  const previewServices = services.slice(0, 4)
  const BadgeIcon = getIcon(seoData.hero.badge.iconName)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-white flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e2cb6]/10 rounded-full mb-6">
                {BadgeIcon && <BadgeIcon className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />}
                <span className="text-sm font-semibold text-[#5e2cb6]">{seoData.hero.badge.text}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                {seoData.hero.title}{' '}
                <span className="hollow-text-brand block mt-2">
                  {seoData.hero.hollowText}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                {seoData.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-[#5e2cb6] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-[#5e2cb6]/30"
                >
                  <Calendar className="w-5 h-5" strokeWidth={2} />
                  <span>Get a Quote</span>
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-white text-[#5e2cb6] border-2 border-[#5e2cb6] font-semibold py-4 px-8 rounded-xl hover:bg-[#5e2cb6]/5 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4 scroll-animate-scale">
              {previewServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{ borderColor: service.color + '40' }}
                >
                  <div className="mb-4" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{service.title}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isMounted && <div className="mt-12"><Clientele /></div>}

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              {seoData.servicesTitle}{' '}
              <span className="hollow-text-brand">
                {seoData.servicesHollowText}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive SEO solutions to improve your search rankings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
                style={{ 
                  borderColor: service.color + '40'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = service.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = service.color + '40'
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: service.color }}></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5e2cb6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              {seoData.whyChooseTitle}{' '}
              <span className="hollow-text-brand">
                {seoData.whyChooseHollowText}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
                style={{ 
                  borderColor: item.color + '40'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = item.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = item.color + '40'
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ backgroundColor: item.color }}></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5e2cb6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Industries We{' '}
              <span className="hollow-text-brand">
                Serve
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                style={{ 
                  borderColor: industry.color + '40'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = industry.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = industry.color + '40'
                }}
              >
                <div className="mb-3 flex justify-center" style={{ color: industry.color }}>
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              {seoData.benefitsTitle}{' '}
              <span className="hollow-text-brand">
                {seoData.benefitsHollowText}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how search engine optimization can transform your online presence and drive sustainable business growth
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              {seoData.useCasesTitle}{' '}
              <span className="hollow-text-brand">
                {seoData.useCasesHollowText}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how businesses leverage SEO to achieve their marketing and growth goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoData.useCases.map((useCase, index) => (
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

      <Technologies technologies={[...seoData.technologies]} />

      {/* Process Diagram */}
      <ProcessDiagram
        title={seoData.processTitle}
        subtitle={seoData.processSubtitle}
        steps={processSteps}
      />

      {/* FAQs */}
      <FAQDropdown faqs={faqs} />

      {/* Contact Section */}
      <ContactSection 
        title={seoData.contact.title}
        description={seoData.contact.description}
      />

      {/* Get Quote Section */}
      <GetQuoteSection
        title={seoData.getQuote.title}
        hollowText={seoData.getQuote.hollowText}
        description={seoData.getQuote.description}
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
    </>
  )
}
