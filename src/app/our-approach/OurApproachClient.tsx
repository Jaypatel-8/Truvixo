'use client'

import { useEffect, useState, useMemo } from 'react'
import { ArrowRight, Calendar, Lightbulb } from 'lucide-react'
import dynamic from 'next/dynamic'
import GetQuoteSection from '@/components/sections/GetQuoteSection'
import type { BasePageData } from '@/lib/types/staticData'
import { getIconComponent } from '@/lib/utils/iconMapper'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  ssr: false,
  loading: () => <div className="min-h-[300px] bg-white"></div>,
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

const ProcessDiagram = dynamic(() => import('@/components/ProcessDiagram'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-white"></div>,
})

function getIcon(iconName: string) {
  return getIconComponent(iconName) || getIconComponent('Code')
}

interface OurApproachClientProps {
  faqs: Array<{ question: string; answer: string }>
  ourApproachData: BasePageData
}

export default function OurApproachClient({ faqs, ourApproachData }: OurApproachClientProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

    useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    selectors: ['.scroll-animate', '.scroll-animate-left', '.scroll-animate-right', '.scroll-animate-scale', '.scroll-animate-rotate'],
    unobserveAfterIntersect: false,
    useIdleCallback: false,
  })

  const BadgeIcon = getIcon(ourApproachData.hero.badge.iconName) || Lightbulb
  const badgeIcon = <BadgeIcon className="w-4 h-4" strokeWidth={2} />

  const methodology = useMemo(() => 
    ourApproachData.methodology.map(item => {
      const IconComponent = getIcon(item.iconName)
      return {
        ...item,
        icon: IconComponent ? <IconComponent className="w-7 h-7" strokeWidth={2} /> : null
      }
    }), [ourApproachData.methodology]
  )

  const insights = useMemo(() => 
    ourApproachData.insights.map(item => {
      const IconComponent = getIcon(item.iconName)
      return {
        ...item,
        icon: IconComponent ? <IconComponent className="w-6 h-6" strokeWidth={2} /> : null
      }
    }), [ourApproachData.insights]
  )

  const principles = useMemo(() => 
    ourApproachData.principles.map(item => {
      const IconComponent = getIcon(item.iconName)
      return {
        ...item,
        icon: IconComponent ? <IconComponent className="w-6 h-6" strokeWidth={2} /> : null
      }
    }), [ourApproachData.principles]
  )

  const processSteps = useMemo(() => 
    ourApproachData.processSteps.map(step => {
      const IconComponent = getIcon(step.iconName)
      return {
        ...step,
        icon: IconComponent ? <IconComponent className="w-6 h-6" strokeWidth={2} /> : null
      }
    }), [ourApproachData.processSteps]
  )

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <section className="relative min-h-[85vh] bg-white flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e2cb6]/10 rounded-full mb-6">
                {badgeIcon}
                <span className="text-sm font-semibold text-[#5e2cb6]">{ourApproachData.hero.badge.text}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                {ourApproachData.hero.title}{' '}
                <span className="hollow-text-brand block mt-2">
                  {ourApproachData.hero.hollowText}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                {ourApproachData.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-[#5e2cb6] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-[#5e2cb6]/30"
                >
                  <Calendar className="w-5 h-5" strokeWidth={2} />
                  <span>Get Started</span>
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-white text-[#5e2cb6] border-2 border-[#5e2cb6] font-semibold py-4 px-8 rounded-xl hover:bg-[#5e2cb6]/5 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4 scroll-animate-scale">
              {methodology.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{ borderColor: item.color + '40' }}
                >
                  <div className="mb-4" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Client Section */}
      {isMounted && <div className="mt-12"><Clientele /></div>}

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Our{' '}
              <span className="hollow-text-brand">
                Methodology
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven approach that combines innovation, agility, and client focus to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((item, index) => (
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

      {/* Insights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Strategic{' '}
              <span className="hollow-text-brand">
                Insights
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep research and analysis form the foundation of every successful project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: item.color + '10', color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Core{' '}
              <span className="hollow-text-brand">
                Principles
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The fundamental values that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {principles.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ color: '#5e2cb6' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Diagram */}
      <ProcessDiagram 
        title={ourApproachData.processTitle}
        subtitle={ourApproachData.processSubtitle}
        steps={processSteps}
      />

      <Technologies technologies={[...ourApproachData.technologies]} />

      <FAQDropdown faqs={faqs} />

      {/* SEO Location Section */}
      <ContactSection 
        title={ourApproachData.contact.title}
        description={ourApproachData.contact.description}
      />

      {/* Get Quote Section - Last section before footer */}
      <GetQuoteSection
        title={ourApproachData.getQuote.title}
        hollowText={ourApproachData.getQuote.hollowText}
        description={ourApproachData.getQuote.description}
        primaryCTA={{
          text: 'Call Us',
          type: 'tel',
          href: '+916354326412'
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
