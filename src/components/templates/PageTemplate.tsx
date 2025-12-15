'use client'

import { useEffect, useState, ReactNode } from 'react'
import { ArrowRight, Calendar, Phone, Mail } from 'lucide-react'
import dynamic from 'next/dynamic'
import Technologies from '@/components/Technologies'
import FAQDropdown from '@/components/FAQDropdown'
import Clientele from '@/components/Clientele'
import ContactSection from '@/components/ContactSection'
import ProcessDiagram from '@/components/ProcessDiagram'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import GetQuoteSection from '@/components/sections/GetQuoteSection'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

interface Service {
  title: string
  description: string
  icon: ReactNode
  color: string
}

interface WhyChooseItem {
  icon: ReactNode
  title: string
  description: string
  color: string
}

interface Industry {
  name: string
  icon: ReactNode
  color: string
}

interface Technology {
  name: string
  logo: string
  color: string
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'devops' | 'mobile' | 'ai'
}

interface PageTemplateProps {
  // Hero Section
  badge?: {
    icon: ReactNode
    text: string
  }
  title: string
  hollowText: string
  description: string
  
  // Services
  services?: Service[]
  servicesTitle?: string
  servicesHollowText?: string
  servicesSubtitle?: string
  
  // Why Choose
  whyChoose?: WhyChooseItem[]
  whyChooseTitle?: string
  whyChooseHollowText?: string
  whyChooseSubtitle?: string
  
  // Industries
  industries?: Industry[]
  industriesTitle?: string
  industriesHollowText?: string
  
  // Technologies
  technologies?: Technology[]
  
  // Get Quote
  getQuoteTitle?: string
  getQuoteHollowText?: string
  getQuoteDescription?: string
  
  // FAQs
  faqs?: Array<{ question: string; answer: string }>
  
  // Contact
  contactTitle?: string
  contactDescription?: string
  
  // Process
  processTitle?: string
  processSubtitle?: string
  processSteps?: Array<{
    title: string
    description: string
    icon: ReactNode
  }>
}

export default function PageTemplate({
  badge,
  title,
  hollowText,
  description,
  services = [],
  servicesTitle = 'Services',
  servicesHollowText = 'Services',
  servicesSubtitle,
  whyChoose = [],
  whyChooseTitle = 'Why Choose',
  whyChooseHollowText = 'Us',
  whyChooseSubtitle,
  industries = [],
  industriesTitle = 'Industries We',
  industriesHollowText = 'Serve',
  technologies = [],
  getQuoteTitle = 'Ready to Get Started?',
  getQuoteHollowText = 'Get Started',
  getQuoteDescription = 'Get in touch and let\'s discuss how we can help.',
  faqs = [],
  contactTitle = 'Get in Touch',
  contactDescription = 'Have a project in mind? Let\'s discuss how we can help.',
  processTitle = 'Our Process',
  processSubtitle = 'A proven methodology that delivers results',
  processSteps
}: PageTemplateProps) {
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

  const previewCards = services.slice(0, 4).map(service => ({
    icon: service.icon,
    title: service.title,
    description: service.description,
    color: service.color
  }))

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <HeroSection
        badge={badge}
        title={title}
        hollowText={hollowText}
        description={description}
        primaryCTA={{
          text: 'Get a Quote',
          onClick: () => setIsContactModalOpen(true)
        }}
        secondaryCTA={{
          text: 'Contact Us',
          onClick: () => setIsContactModalOpen(true)
        }}
        previewCards={previewCards}
      />

      {isMounted && <div className="mt-12"><Clientele /></div>}

      {services.length > 0 && (
        <ServicesGrid
          title={servicesTitle}
          hollowText={servicesHollowText}
          subtitle={servicesSubtitle}
          services={services}
          columns={services.length > 6 ? 4 : 3}
        />
      )}

      {whyChoose.length > 0 && (
        <WhyChooseSection
          title={whyChooseTitle}
          hollowText={whyChooseHollowText}
          subtitle={whyChooseSubtitle}
          items={whyChoose}
          columns={whyChoose.length > 4 ? 3 : 4}
        />
      )}

      {industries.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
                {industriesTitle}{' '}
                <span className="hollow-text-brand">
                  {industriesHollowText}
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
      )}

      {technologies.length > 0 && <Technologies technologies={technologies} />}
      <ProcessDiagram title={processTitle} subtitle={processSubtitle} steps={processSteps} />
      {faqs.length > 0 && <FAQDropdown faqs={faqs} />}
      <ContactSection title={contactTitle} description={contactDescription} />

      <GetQuoteSection
        title={getQuoteTitle}
        hollowText={getQuoteHollowText}
        description={getQuoteDescription}
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