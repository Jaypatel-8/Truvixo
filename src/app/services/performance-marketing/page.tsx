'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, TrendingUp, Target, BarChart, Zap, DollarSign, Phone, Mail, Calendar, Building2, Heart, ShoppingCart, Truck, Home, GraduationCap, Rocket, Gauge } from 'lucide-react'
import dynamic from 'next/dynamic'
import Technologies from '@/components/Technologies'
import FAQDropdown from '@/components/FAQDropdown'
import Clientele from '@/components/Clientele'
import ContactSection from '@/components/ContactSection'
import ProcessDiagram from '@/components/ProcessDiagram'
import { getFAQsForPage } from '@/lib/pageData'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function PerformanceMarketing() {
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

  const services = [
    {
      title: 'Performance-Based Campaigns',
      description: 'Pay only for results - leads, sales, or conversions',
      icon: <Gauge className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Affiliate Marketing',
      description: 'Build and manage affiliate networks to scale your reach',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Lead Generation',
      description: 'Generate qualified leads through performance-driven campaigns',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'Conversion Optimization',
      description: 'Optimize campaigns for maximum ROI and conversions',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#059669'
    },
    {
      title: 'Attribution Modeling',
      description: 'Track and attribute conversions across multiple touchpoints',
      icon: <BarChart className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'ROI Tracking',
      description: 'Comprehensive ROI tracking and performance analytics',
      icon: <DollarSign className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <DollarSign className="w-7 h-7" strokeWidth={2} />, 
      title: 'Pay for Performance', 
      description: 'Only pay when you get results - leads, sales, or conversions',
      color: '#5e2cb6'
    },
    { 
      icon: <Target className="w-7 h-7" strokeWidth={2} />, 
      title: 'Data-Driven', 
      description: 'Every decision backed by data and analytics',
      color: '#c91a6f'
    },
    { 
      icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, 
      title: 'Scalable Results', 
      description: 'Scale your campaigns while maintaining performance',
      color: '#d97706'
    },
    { 
      icon: <Rocket className="w-7 h-7" strokeWidth={2} />, 
      title: 'Quick Results', 
      description: 'See measurable results within days',
      color: '#059669'
    }
  ]

  const technologies = [
    { name: 'Google Analytics', logo: 'https://www.google.com/analytics/images/home/ga-logo.svg', color: '#FF6F00', category: 'backend' as const },
    { name: 'Google Tag Manager', logo: 'https://tagmanager.google.com/favicon.ico', color: '#4285F4', category: 'backend' as const },
    { name: 'Facebook Pixel', logo: 'https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico', color: '#1877F2', category: 'backend' as const },
    { name: 'Hotjar', logo: 'https://www.hotjar.com/favicon.ico', color: '#FD3A69', category: 'backend' as const },
    { name: 'Mixpanel', logo: 'https://mixpanel.com/favicon.ico', color: '#7856FF', category: 'backend' as const },
    { name: 'Segment', logo: 'https://segment.com/favicon.ico', color: '#43AF79', category: 'backend' as const },
    { name: 'Amplitude', logo: 'https://amplitude.com/favicon.ico', color: '#9966FF', category: 'backend' as const },
    { name: 'Kissmetrics', logo: 'https://kissmetrics.com/favicon.ico', color: '#E91E63', category: 'backend' as const },
    { name: 'Optimizely', logo: 'https://www.optimizely.com/favicon.ico', color: '#0045FF', category: 'backend' as const },
    { name: 'VWO', logo: 'https://vwo.com/favicon.ico', color: '#FF6B6B', category: 'backend' as const }
  ]

  const processSteps = [
    {
      title: 'Goal Setting & KPIs',
      description: 'Define clear performance goals, KPIs, and success metrics aligned with your business objectives',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Channel Selection',
      description: 'Identify and select the most effective marketing channels for your target audience and goals',
      icon: <Gauge className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Campaign Setup & Tracking',
      description: 'Set up performance-based campaigns with comprehensive tracking and attribution models',
      icon: <BarChart className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Optimization & Testing',
      description: 'Continuously test, optimize, and refine campaigns based on performance data and insights',
      icon: <Zap className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Attribution & Analysis',
      description: 'Track multi-touchpoint customer journeys and attribute conversions accurately',
      icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Scaling & Growth',
      description: 'Scale successful campaigns while maintaining performance and ROI targets',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const industries = [
    { name: 'E-commerce', icon: <ShoppingCart className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Healthcare', icon: <Heart className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'Fintech', icon: <Building2 className="w-7 h-7" strokeWidth={2} />, color: '#d97706' },
    { name: 'Real Estate', icon: <Home className="w-7 h-7" strokeWidth={2} />, color: '#059669' },
    { name: 'Education', icon: <GraduationCap className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Logistics', icon: <Truck className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' }
  ]

  const faqs = getFAQsForPage('performance-marketing')

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
                <Gauge className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#5e2cb6]">Performance Marketing</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Performance{' '}
                <span className="hollow-text-brand block mt-2">
                  Marketing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Pay only for results with our performance-based marketing services. Drive leads, sales, and conversions with measurable ROI. Our performance marketing approach ensures you only pay when you achieve your business objectives, making it a risk-free investment that scales with your success. We track every touchpoint, optimize continuously, and deliver measurable results that directly impact your bottom line.
              </p>
              <div className="mb-8 p-6 bg-gradient-to-r from-[#5e2cb6]/10 to-[#c91a6f]/10 rounded-xl border border-[#5e2cb6]/20">
                <p className="text-gray-700 font-medium mb-3">Why Performance Marketing Works:</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] mt-1">•</span>
                    <span><strong>Risk-Free Investment:</strong> Pay only for actual results - leads, sales, or conversions - not just impressions or clicks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] mt-1">•</span>
                    <span><strong>Measurable ROI:</strong> Track every dollar spent and attribute revenue directly to marketing efforts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] mt-1">•</span>
                    <span><strong>Scalable Growth:</strong> Scale successful campaigns while maintaining performance and profitability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] mt-1">•</span>
                    <span><strong>Data-Driven Optimization:</strong> Continuous testing and optimization based on real performance data</span>
                  </li>
                </ul>
              </div>
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
              {services.slice(0, 4).map((service, index) => (
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Performance{' '}
              <span className="hollow-text-brand">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Results-driven marketing solutions tailored to your business goals
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Why Choose{' '}
              <span className="hollow-text-brand">
                Performance Marketing
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

      {/* Additional Content - Performance Marketing Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Performance Marketing{' '}
              <span className="hollow-text-brand">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how performance-based marketing can transform your ROI and drive measurable business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risk-Free Investment</h3>
              <p className="text-gray-600">
                Pay only for actual results - leads, sales, or conversions - not just impressions or clicks. Performance marketing eliminates wasted ad spend by ensuring every dollar is tied to measurable outcomes. This risk-free model allows you to test new markets and strategies without financial uncertainty.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Measurable ROI</h3>
              <p className="text-gray-600">
                Track every dollar spent and attribute revenue directly to marketing efforts. Performance marketing provides complete transparency with detailed analytics showing exactly how your marketing budget converts into revenue. Make data-driven decisions with clear ROI metrics.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#d97706]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#d97706]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Growth</h3>
              <p className="text-gray-600">
                Scale successful campaigns while maintaining performance and profitability. Once you identify what works, performance marketing allows you to increase budgets and expand reach without sacrificing ROI. Scale up or down based on performance data and business needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#059669]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#059669]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Precise Targeting</h3>
              <p className="text-gray-600">
                Reach the right audience at the right time with advanced targeting and attribution models. Performance marketing uses data to identify high-value customers and optimize campaigns for maximum conversion rates. Every campaign is optimized for your specific business goals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Optimization</h3>
              <p className="text-gray-600">
                Continuous testing and optimization based on real performance data. Performance marketing is an iterative process that constantly improves results. A/B testing, multivariate testing, and data analysis ensure your campaigns get better over time.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Results</h3>
              <p className="text-gray-600">
                See measurable results within days, not months. Performance marketing campaigns can start driving leads and sales immediately. Unlike long-term brand building, performance marketing delivers quick wins while building sustainable growth.
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
              Performance Marketing{' '}
              <span className="hollow-text-brand">
                Use Cases
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how businesses leverage performance marketing to achieve measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#5e2cb6]/5 to-[#c91a6f]/5 rounded-xl p-8 border border-[#5e2cb6]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce Lead Generation</h3>
              <p className="text-gray-600 mb-4">
                Generate qualified leads and drive sales for e-commerce businesses with performance-based campaigns. Pay only for actual purchases or qualified leads that convert.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cost-per-acquisition (CPA) campaigns</li>
                <li>• Affiliate marketing programs</li>
                <li>• Shopping cart abandonment recovery</li>
                <li>• Product launch campaigns</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#d97706]/5 to-[#059669]/5 rounded-xl p-8 border border-[#d97706]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Lead Generation</h3>
              <p className="text-gray-600 mb-4">
                Generate high-quality B2B leads with performance-based pricing. Pay only for qualified leads that meet your specific criteria and convert into customers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cost-per-lead (CPL) campaigns</li>
                <li>• Account-based marketing (ABM)</li>
                <li>• LinkedIn performance campaigns</li>
                <li>• Webinar and event registrations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#059669]/5 to-[#5e2cb6]/5 rounded-xl p-8 border border-[#059669]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">App Install Campaigns</h3>
              <p className="text-gray-600 mb-4">
                Drive mobile app installs with performance-based pricing. Pay only for actual app installations or active users, ensuring quality over quantity.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cost-per-install (CPI) campaigns</li>
                <li>• Cost-per-action (CPA) for in-app events</li>
                <li>• User acquisition optimization</li>
                <li>• Retention-focused campaigns</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#c91a6f]/5 to-[#d97706]/5 rounded-xl p-8 border border-[#c91a6f]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SaaS Subscription Growth</h3>
              <p className="text-gray-600 mb-4">
                Scale SaaS businesses with performance-based marketing that focuses on customer lifetime value. Pay based on trial sign-ups, conversions, or recurring revenue.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Trial-to-paid conversion campaigns</li>
                <li>• Cost-per-trial (CPT) optimization</li>
                <li>• Customer lifetime value (LTV) focus</li>
                <li>• Retention and upsell campaigns</li>
              </ul>
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

      <section className="py-20 bg-[#5e2cb6] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Drive{' '}
              <span className="hollow-text-white">
                Results?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              Get in touch and let's discuss how we can help drive performance-based results.
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

      <Technologies technologies={technologies} />
      <ProcessDiagram title="Performance Marketing Process" subtitle="From goal setting to scaling, we ensure measurable ROI and sustainable growth at every step" steps={processSteps} />
      <FAQDropdown faqs={faqs} />
      <ContactSection title="Get in Touch" description="Have a project in mind? Let's discuss how we can help drive performance-based results." />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}


