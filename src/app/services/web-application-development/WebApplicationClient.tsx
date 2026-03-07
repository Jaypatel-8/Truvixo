'use client'

import { useEffect, useState, useMemo } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'
import dynamic from 'next/dynamic'
import GetQuoteSection from '@/components/sections/GetQuoteSection'
import RelatedLinks from '@/components/RelatedLinks'
import type { BasePageData } from '@/lib/types/staticData'
import { getIconComponent } from '@/lib/utils/iconMapper'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'
import { getServiceRelatedLinks } from '@/lib/utils/relatedLinks'

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
    selectors: ['.scroll-animate', '.scroll-animate-left', '.scroll-animate-right', '.scroll-animate-scale', '.scroll-stagger', '.section-reveal', '.section-desc-reveal', '.heading-reveal'],
    unobserveAfterIntersect: false,
    useIdleCallback: false,
  })

  const services = useMemo(() => 
    (webAppData.services || []).map(service => {
      const IconComponent = getIcon(service.iconName)
      return {
        ...service,
        icon: IconComponent ? <IconComponent className="w-8 h-8" strokeWidth={2} /> : null
      }
    }), [webAppData.services]
  )

  const whyChooseUs = useMemo(() => 
    (webAppData.whyChooseUs || []).map(item => {
      const IconComponent = getIcon(item.iconName)
      return {
        ...item,
        icon: IconComponent ? <IconComponent className="w-7 h-7" strokeWidth={2} /> : null
      }
    }), [webAppData.whyChooseUs]
  )

  const processSteps = useMemo(() => 
    (webAppData.processSteps || []).map(step => {
      const IconComponent = getIcon(step.iconName)
      return {
        ...step,
        icon: IconComponent ? <IconComponent className="w-6 h-6" strokeWidth={2} /> : null
      }
    }), [webAppData.processSteps]
  )

  const industries = useMemo(() => 
    (webAppData.industries || []).map(industry => {
      const IconComponent = getIcon(industry.iconName)
      return {
        ...industry,
        icon: IconComponent ? <IconComponent className="w-7 h-7" strokeWidth={2} /> : null
      }
    }), [webAppData.industries]
  )

  const benefits = useMemo(() => 
    (webAppData.benefits || []).map(benefit => {
      const IconComponent = getIcon(benefit.iconName)
      return {
        ...benefit,
        icon: IconComponent ? <IconComponent className="w-6 h-6" strokeWidth={2} /> : null
      }
    }), [webAppData.benefits]
  )

  const previewServices = useMemo(() => 
    (webAppData.services || []).slice(0, 4).map(service => {
      const IconComponent = getIcon(service.iconName)
      return {
        ...service,
        icon: IconComponent ? <IconComponent className="w-8 h-8" strokeWidth={2} /> : null
      }
    }), [webAppData.services]
  )

  const BadgeIcon = useMemo(() => {
    if (webAppData.hero.badge?.iconName) {
      return getIcon(webAppData.hero.badge.iconName)
    }
    return null
  }, [webAppData.hero.badge])

  return (
    <>
      <section className="relative min-h-[85vh] bg-white flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              {webAppData.hero.badge && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e2cb6]/10 rounded-full mb-6">
                  {BadgeIcon && <BadgeIcon className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />}
                  <span className="text-sm font-semibold text-[#5e2cb6]">{webAppData.hero.badge.text}</span>
                </div>
              )}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                {webAppData.hero.title}{' '}
                <span className="hollow-text-brand block mt-2">
                  {webAppData.hero.hollowText}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                {webAppData.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="/contact?service=web-application-development"
                  className="bg-[#5e2cb6] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-[#5e2cb6]/30"
                >
                  <Calendar className="w-5 h-5" strokeWidth={2} />
                  <span>Get a Quote</span>
                </a>
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

      <div className="mt-12 min-h-[100px]" style={{ visibility: isMounted ? 'visible' : 'hidden' }}><Clientele /></div>

      <section className="py-20 bg-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              {webAppData.servicesTitle}{' '}
              <span className="hollow-text-brand">
                {webAppData.servicesHollowText}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto section-desc-reveal">
              Comprehensive web application development services tailored to your business needs. From responsive web apps to progressive web applications, we deliver solutions that drive engagement and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 card-grid-direction">
            {services.map((service, index) => (
              <div
                key={index}
                className="scroll-animate-scale card-hover group bg-white rounded-2xl p-8 border-2 border-gray-100 relative overflow-hidden"
                style={{ 
                  ['--card-accent' as string]: service.color,
                  borderColor: service.color + '40'
                }}
              >
                <div className="relative z-10 card-inner-reveal">
                  <div className="card-icon mb-6 flex justify-center" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <h3 className="card-title text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5e2cb6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="card-desc text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              {webAppData.whyChooseTitle}{' '}
              <span className="hollow-text-brand">
                {webAppData.whyChooseHollowText}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto section-desc-reveal">
              We combine technical expertise with business acumen to deliver web applications that not only look great but also drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 card-grid-direction">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="scroll-animate-scale card-hover group bg-white rounded-2xl p-8 border-2 border-gray-100 relative overflow-hidden"
                style={{ 
                  ['--card-accent' as string]: item.color,
                  borderColor: item.color + '40'
                }}
              >
                <div className="relative z-10 card-inner-reveal">
                  <div className="card-icon mb-6 flex justify-center" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <h3 className="card-title text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5e2cb6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="card-desc text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Industries We{' '}
              <span className="hollow-text-brand">
                Specialize
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto section-desc-reveal">
              We have extensive experience building web applications for various industries, understanding unique requirements and delivering tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 card-grid-direction">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="scroll-animate-scale card-hover bg-white rounded-xl p-6 text-center border-2 border-gray-100 relative overflow-hidden"
                style={{ 
                  ['--card-accent' as string]: industry.color,
                  borderColor: industry.color + '40'
                }}
              >
                <div className="card-inner-reveal">
                  <div className="card-icon mb-3 flex justify-center" style={{ color: industry.color }}>
                    {industry.icon}
                  </div>
                  <h3 className="card-title font-semibold text-gray-900 text-sm">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              {webAppData.benefitsTitle}{' '}
              <span className="hollow-text-brand">
                {webAppData.benefitsHollowText}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto section-desc-reveal">
              Discover how modern web applications can transform your business operations and customer engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="scroll-animate-scale card-hover bg-white rounded-xl p-8 border border-gray-200 relative overflow-hidden" style={{ ['--card-accent' as string]: benefit.color }}>
                <div className="card-inner-reveal">
                  <div className="card-icon w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: benefit.color + '10' }}>
                    <div style={{ color: benefit.color }}>
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="card-title text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="card-desc text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              {webAppData.useCasesTitle}{' '}
              <span className="hollow-text-brand">
                {webAppData.useCasesHollowText}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto section-desc-reveal">
              Explore how businesses leverage web applications to streamline operations and enhance customer experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 card-grid-direction">
            {(webAppData.useCases || []).map((useCase, index) => (
              <div
                key={index}
                className={`scroll-animate-scale card-hover card-hover-dark bg-gradient-to-br ${useCase.gradient} rounded-xl p-8 border relative overflow-hidden`}
                style={{ ['--card-accent' as string]: useCase.borderColor, borderColor: useCase.borderColor + '30' }}
              >
                <div className="card-inner-reveal">
                  <h3 className="card-title text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                  <p className="card-desc text-gray-600 mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {useCase.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Technologies technologies={webAppData.technologies ? [...webAppData.technologies] : []} />

      {/* Process Diagram */}
      <ProcessDiagram
        title={webAppData.processTitle}
        subtitle={webAppData.processSubtitle}
        steps={processSteps}
      />

      {/* FAQs */}
      <FAQDropdown faqs={faqs} />

      {webAppData.contact && (
        <ContactSection 
          title={webAppData.contact.title}
          description={webAppData.contact.description}
        />
      )}

      {webAppData.getQuote && (
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
      )}
      <RelatedLinks 
        title="Related Services" 
        links={getServiceRelatedLinks('web-application-development')} 
        columns={3}
      />
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  )
}

