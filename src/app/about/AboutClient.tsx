'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle, Star, Users, Target, Zap, BarChart3, Globe, Building2, Linkedin, Mail, MessageSquare, Palette, Sparkles, Rocket, TrendingUp, Award, MousePointer, ChevronLeft, ChevronRight, Brain, Cloud, Code, DollarSign, Calendar, Phone, Shield } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'
import { getIconComponent } from '@/lib/utils/iconMapper'

interface AboutClientProps {
  faqs: Array<{ question: string; answer: string }>
  whyChooseUs: Array<{ title: string; description: string; iconName: string; color: string }>
  teamMembers: Array<{ name: string; role: string; description: string; avatar: string; color: string; textColor: string }>
  focusAreas: Array<{ name: string; iconName: string; color: string }>
  industries: Array<{ name: string; iconName: string; color: string }>
}

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

const ProcessDiagram = dynamic(() => import('@/components/ProcessDiagram'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-white"></div>,
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

export default function AboutClient({ faqs, whyChooseUs: whyChooseUsData, teamMembers: teamMembersData, focusAreas: focusAreasData, industries: industriesData }: AboutClientProps) {
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

  // Transform data with icons
  const whyChooseUs = whyChooseUsData.map(item => {
    const IconComponent = getIconComponent(item.iconName)
    return {
      ...item,
      icon: IconComponent ? <IconComponent className="w-7 h-7" strokeWidth={2} /> : null
    }
  })

  const teamMembers = teamMembersData

  const focusAreas = focusAreasData.map(area => {
    const IconComponent = getIconComponent(area.iconName)
    return {
      ...area,
      icon: IconComponent ? <IconComponent className="w-7 h-7" strokeWidth={2} /> : null
    }
  })

  const industries = industriesData.map(industry => {
    const IconComponent = getIconComponent(industry.iconName)
    return {
      ...industry,
      icon: IconComponent ? <IconComponent className="w-7 h-7" strokeWidth={2} /> : null
    }
  })

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
                <Users className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#5e2cb6]">About TruVixo</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                About{' '}
                <span className="hollow-text-brand block mt-2">
                  TruVixo
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Driven by innovation, powered by technology, and committed to excellence. We serve clients worldwide. We deliver comprehensive solutions across multiple domains — not just digital marketing. We're your end-to-end growth partner, leveraging AI and cutting-edge technology to transform businesses from concept to market leader.
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
              {whyChooseUs.slice(0, 4).map((item, index) => (
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

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              What We{' '}
              <span className="hollow-text-brand">
                Do
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
                style={{ 
                  borderColor: area.color + '40'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = area.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = area.color + '40'
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: area.color }}></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center" style={{ color: area.color }}>
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5e2cb6] transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Comprehensive {area.name.toLowerCase()} solutions tailored to your business needs
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Why Choose{' '}
              <span className="hollow-text-brand">
                TruVixo
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine human creativity with AI intelligence to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Meet Our{' '}
              <span className="hollow-text-brand">
                Founders
              </span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-animate">
              <div className="group bg-white rounded-2xl p-8 md:p-12 border-2 border-[#5e2cb6]/40 hover:border-[#5e2cb6] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ backgroundColor: '#5e2cb6' }}></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-r from-[#5e2cb6] to-[#c91a6f] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
                      JP
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Jay Patel</h3>
                    <p className="text-xl text-[#5e2cb6] font-semibold mb-4">Co-Founder</p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    "I co-founded TruVixo with a vision to democratize AI-powered growth for businesses of all sizes. Having spent over a decade in the tech industry, I've seen too many companies struggle with outdated approaches to growth and innovation."
                  </p>
                </div>
              </div>
              <div className="group bg-white rounded-2xl p-8 md:p-12 border-2 border-[#c91a6f]/40 hover:border-[#c91a6f] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ backgroundColor: '#c91a6f' }}></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-r from-[#c91a6f] to-[#fecc4d] rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
                      PP
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Preet Patel</h3>
                    <p className="text-xl text-[#c91a6f] font-semibold mb-4">Co-Founder</p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    "Our mission is to bridge the gap between human creativity and AI intelligence, creating solutions that not only work but evolve with your business. We're not just service providers – we're your partners in transformation."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Industries We{' '}
              <span className="hollow-text-brand">
                Specialize
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Serving diverse industries with tailored solutions
            </p>
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

      {/* CTA Section */}
      <section className="py-20 bg-[#5e2cb6] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Transform Your{' '}
              <span className="hollow-text-white">
                Business?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              Get in touch and let's discuss how we can help transform your business with our comprehensive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="tel:+916354326412"
                className="bg-white text-[#5e2cb6] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-5 h-5" strokeWidth={2} />
                <span>Call Us</span>
              </a>
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Why Partner with{' '}
              <span className="hollow-text-brand">
                TruVixo
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our comprehensive solutions can transform your business and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Driven Innovation</h3>
              <p className="text-gray-600">
                Leverage cutting-edge AI and machine learning to automate processes, gain insights, and stay ahead of the competition. Our AI solutions adapt and evolve with your business needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Partnership</h3>
              <p className="text-gray-600">
                From branding and marketing to software development and funding, we're your complete growth partner. One team, multiple services, seamless execution.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#fecc4d]/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#fecc4d]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                500+ successful projects with 98% client satisfaction rate. We've helped businesses across industries achieve remarkable growth and transformation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#10b981]/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-[#10b981]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Future-Ready Solutions</h3>
              <p className="text-gray-600">
                We build for tomorrow, ensuring your business stays ahead of the curve. Scalable, adaptable solutions that grow with your business and evolve with technology.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach, Local Expertise</h3>
              <p className="text-gray-600">
                Serving clients worldwide. Global expertise with international standards.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Skilled professionals with deep expertise in AI, software development, digital marketing, and business strategy. Your success is our mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              How We Help{' '}
              <span className="hollow-text-brand">
                Businesses
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how businesses leverage our solutions to achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#5e2cb6]/5 to-[#c91a6f]/5 rounded-xl p-8 border border-[#5e2cb6]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">
                Transform legacy systems into modern, scalable solutions. We help businesses modernize their technology stack, improve efficiency, and enable digital-first operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Legacy system modernization</li>
                <li>• Cloud migration and infrastructure</li>
                <li>• Process automation and optimization</li>
                <li>• Digital strategy and implementation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#fecc4d]/5 to-[#10b981]/5 rounded-xl p-8 border border-[#fecc4d]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Leverage AI to automate processes, gain insights, and make data-driven decisions. From chatbots to predictive analytics, we build AI solutions that drive results.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• AI-powered automation</li>
                <li>• Machine learning models</li>
                <li>• Predictive analytics</li>
                <li>• Natural language processing</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#10b981]/5 to-[#5e2cb6]/5 rounded-xl p-8 border border-[#10b981]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Branding & Marketing</h3>
              <p className="text-gray-600 mb-4">
                Build strong brand identity and execute data-driven marketing campaigns. From brand strategy to digital marketing, we help businesses connect with their audience.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Brand identity and design</li>
                <li>• SEO and content marketing</li>
                <li>• Social media marketing</li>
                <li>• Performance marketing</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#c91a6f]/5 to-[#fecc4d]/5 rounded-xl p-8 border border-[#c91a6f]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Software Development</h3>
              <p className="text-gray-600 mb-4">
                Build custom software solutions tailored to your business needs. From web and mobile apps to enterprise systems, we deliver scalable, secure solutions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Custom web applications</li>
                <li>• Mobile app development</li>
                <li>• Enterprise software</li>
                <li>• API development and integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Technologies technologies={[
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000', category: 'frontend' as const },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
        { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00', category: 'backend' as const },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'database' as const },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'frontend' as const }
      ]} />

      {/* Process Diagram */}
      <ProcessDiagram 
        title="Our Process"
        subtitle="How we deliver exceptional results"
        steps={[
          {
            title: 'Discovery & Strategy',
            description: 'Understand your business goals, challenges, and opportunities to create a comprehensive strategy',
            icon: <Target className="w-6 h-6" strokeWidth={2} />
          },
          {
            title: 'Planning & Design',
            description: 'Design solutions tailored to your needs with detailed planning and architecture',
            icon: <Code className="w-6 h-6" strokeWidth={2} />
          },
          {
            title: 'Development & Execution',
            description: 'Build and implement solutions using agile methodology and best practices',
            icon: <Rocket className="w-6 h-6" strokeWidth={2} />
          },
          {
            title: 'Testing & Quality Assurance',
            description: 'Comprehensive testing to ensure quality, performance, and reliability',
            icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
          },
          {
            title: 'Deployment & Launch',
            description: 'Deploy solutions with zero downtime and comprehensive monitoring',
            icon: <Zap className="w-6 h-6" strokeWidth={2} />
          },
          {
            title: 'Support & Optimization',
            description: 'Ongoing support, monitoring, and optimization to ensure continued success',
            icon: <Shield className="w-6 h-6" strokeWidth={2} />
          }
        ]}
      />

      <FAQDropdown faqs={faqs} />

      {/* SEO Location Section */}
      <ContactSection 
        title="Get in Touch"
        description="Have a project in mind? Let's discuss how we can help transform your business with our comprehensive solutions."
      />
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}
