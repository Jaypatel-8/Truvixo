'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, MousePointerClick, TrendingUp, Target, BarChart, DollarSign, Phone, Mail, Calendar, Building2, Heart, ShoppingCart, Truck, Home, GraduationCap, Rocket, Zap } from 'lucide-react'
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

export default function PPC() {
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
      title: 'Google Ads Management',
      description: 'Strategic Google Ads campaigns to drive qualified traffic and conversions',
      icon: <MousePointerClick className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Facebook & Instagram Ads',
      description: 'Social media advertising campaigns that reach your target audience',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'LinkedIn Advertising',
      description: 'B2B focused LinkedIn campaigns for lead generation and brand awareness',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Display Advertising',
      description: 'Visual display ads across the web to increase brand visibility',
      icon: <BarChart className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Shopping Ads',
      description: 'Product listing ads for e-commerce businesses',
      icon: <ShoppingCart className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Remarketing Campaigns',
      description: 'Re-engage visitors who didn\'t convert with targeted ads',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Target className="w-7 h-7" strokeWidth={2} />, 
      title: 'ROI-Focused Campaigns', 
      description: 'Data-driven PPC strategies that maximize return on ad spend',
      color: '#5e2cb6'
    },
    { 
      icon: <DollarSign className="w-7 h-7" strokeWidth={2} />, 
      title: 'Cost-Effective Management', 
      description: 'Optimize ad spend to reduce costs while increasing conversions',
      color: '#c91a6f'
    },
    { 
      icon: <BarChart className="w-7 h-7" strokeWidth={2} />, 
      title: 'Real-Time Optimization', 
      description: 'Continuous monitoring and optimization of campaigns',
      color: '#fecc4d'
    },
    { 
      icon: <Rocket className="w-7 h-7" strokeWidth={2} />, 
      title: 'Quick Results', 
      description: 'See results within days, not months',
      color: '#10b981'
    }
  ]

  const technologies = [
    { name: 'Google Ads', logo: 'https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png', color: '#4285F4', category: 'backend' as const },
    { name: 'Facebook Ads', logo: 'https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico', color: '#1877F2', category: 'backend' as const },
    { name: 'LinkedIn Ads', logo: 'https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca', color: '#0077B5', category: 'backend' as const },
    { name: 'Microsoft Ads', logo: 'https://www.microsoft.com/favicon.ico', color: '#0078D4', category: 'backend' as const },
    { name: 'Twitter Ads', logo: 'https://abs.twimg.com/favicons/twitter.ico', color: '#1DA1F2', category: 'backend' as const },
    { name: 'Google Analytics', logo: 'https://www.google.com/analytics/images/home/ga-logo.svg', color: '#FF6F00', category: 'backend' as const },
    { name: 'Google Tag Manager', logo: 'https://tagmanager.google.com/favicon.ico', color: '#4285F4', category: 'backend' as const },
    { name: 'Facebook Pixel', logo: 'https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico', color: '#1877F2', category: 'backend' as const },
    { name: 'Hotjar', logo: 'https://www.hotjar.com/favicon.ico', color: '#FD3A69', category: 'backend' as const }
  ]

  const processSteps = [
    {
      title: 'Campaign Strategy',
      description: 'Develop data-driven PPC strategy based on your business goals and target audience',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Keyword Research',
      description: 'Identify high-value keywords and search terms for your campaigns',
      icon: <MousePointerClick className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Ad Creation & Optimization',
      description: 'Create compelling ad copy and visuals that drive clicks and conversions',
      icon: <Zap className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Campaign Setup',
      description: 'Set up and launch campaigns across Google, Facebook, and other platforms',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Bid Management',
      description: 'Optimize bids and budgets to maximize ROI and reduce cost per acquisition',
      icon: <DollarSign className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Performance Monitoring',
      description: 'Continuous monitoring, A/B testing, and optimization for better results',
      icon: <BarChart className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const industries = [
    { name: 'E-commerce', icon: <ShoppingCart className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Healthcare', icon: <Heart className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'Fintech', icon: <Building2 className="w-7 h-7" strokeWidth={2} />, color: '#fecc4d' },
    { name: 'Real Estate', icon: <Home className="w-7 h-7" strokeWidth={2} />, color: '#10b981' },
    { name: 'Education', icon: <GraduationCap className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Logistics', icon: <Truck className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' }
  ]

  const faqs = getFAQsForPage('ppc')

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <section className="relative min-h-[85vh] bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e2cb6]/10 rounded-full mb-6">
                <MousePointerClick className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#5e2cb6]">PPC Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                PPC{' '}
                <span className="hollow-text-brand block mt-2">
                  Advertising
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Drive immediate traffic and conversions with our pay-per-click advertising services. Maximize ROI with data-driven PPC campaigns. Our PPC experts manage campaigns across Google, Facebook, LinkedIn, and more to deliver measurable results. We specialize in creating high-converting ad campaigns that target the right audience at the right time, ensuring every dollar spent drives maximum value for your business.
              </p>
              <div className="mb-8 p-6 bg-gradient-to-r from-[#5e2cb6]/10 to-[#c91a6f]/10 dark:from-[#5e2cb6]/20 dark:to-[#c91a6f]/20 rounded-xl border border-[#5e2cb6]/20 dark:border-[#5e2cb6]/30">
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">Why PPC Advertising Works:</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] dark:text-[#8b5cf6] mt-1">•</span>
                    <span><strong>Immediate Results:</strong> Unlike SEO, PPC campaigns start driving traffic within hours of launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] dark:text-[#8b5cf6] mt-1">•</span>
                    <span><strong>Precise Targeting:</strong> Reach specific demographics, locations, and interests with advanced targeting options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] dark:text-[#8b5cf6] mt-1">•</span>
                    <span><strong>Measurable ROI:</strong> Track every click, conversion, and dollar spent with detailed analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] dark:text-[#8b5cf6] mt-1">•</span>
                    <span><strong>Budget Control:</strong> Set daily budgets and bid limits to maintain complete control over ad spend</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#5e2cb6]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Targeted Audience Reach</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Precisely target your ideal customers with advanced audience segmentation and targeting options.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c91a6f]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart className="w-4 h-4 text-[#c91a6f]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Real-Time Performance Tracking</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Monitor campaign performance in real-time with comprehensive analytics and reporting dashboards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fecc4d]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="w-4 h-4 text-[#fecc4d]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Cost-Effective Campaigns</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Optimize ad spend to reduce cost per acquisition while maximizing conversion rates and ROI.</p>
                  </div>
                </div>
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
                  className="bg-white dark:bg-gray-800 text-[#5e2cb6] dark:text-[#8b5cf6] border-2 border-[#5e2cb6] dark:border-[#8b5cf6] font-semibold py-4 px-8 rounded-xl hover:bg-[#5e2cb6]/5 dark:hover:bg-[#8b5cf6]/10 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
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
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{ borderColor: service.color + '40' }}
                >
                  <div className="mb-4" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{service.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isMounted && <div className="mt-12"><Clientele /></div>}

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
              PPC{' '}
              <span className="hollow-text-brand">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive pay-per-click advertising solutions designed to drive qualified traffic and maximize your return on investment. From search ads to display campaigns, we create and manage PPC strategies that deliver measurable results and help you achieve your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-100 dark:border-gray-700 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#5e2cb6] dark:group-hover:text-[#8b5cf6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
              Why Choose Our{' '}
              <span className="hollow-text-brand">
                PPC Services
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-100 dark:border-gray-700 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#5e2cb6] dark:group-hover:text-[#8b5cf6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
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
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border-2 border-gray-100 dark:border-gray-700 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
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
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{industry.name}</h3>
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
                More Traffic?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              Get in touch and let's discuss how we can improve your PPC campaigns.
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

      {/* Additional Content Section - PPC Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
              PPC{' '}
              <span className="hollow-text-brand">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover how PPC advertising can transform your business growth and drive measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 dark:bg-[#8b5cf6]/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#5e2cb6] dark:text-[#8b5cf6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Immediate Visibility</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get your ads in front of potential customers immediately. Unlike organic SEO that takes months, PPC campaigns can start driving qualified traffic within hours of launch, helping you capture leads and sales right away.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 dark:bg-[#c91a6f]/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Data-Driven Decisions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Make informed marketing decisions with comprehensive analytics. Track clicks, impressions, conversions, and ROI in real-time. Our detailed reporting helps you understand what works and optimize campaigns for better performance.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#fecc4d]/10 dark:bg-[#fecc4d]/20 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-[#fecc4d]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cost-Effective Scaling</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Scale your advertising budget up or down based on performance. With PPC, you only pay when someone clicks on your ad, making it a cost-effective way to test new markets, products, or messaging before committing larger budgets.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#10b981]/10 dark:bg-[#10b981]/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#10b981]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Advanced Targeting</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Reach your ideal customers with precision. Target by demographics, interests, behaviors, location, device, and more. Our advanced targeting strategies ensure your ads are seen by people most likely to convert.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 dark:bg-[#8b5cf6]/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#5e2cb6] dark:text-[#8b5cf6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Competitive Advantage</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Outrank competitors in search results even if they have better organic rankings. PPC ads appear at the top of search results, giving you prime real estate and the opportunity to capture customers before they see your competitors.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 dark:bg-[#c91a6f]/20 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Flexible & Adaptable</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quickly adapt to market changes, seasonal trends, or business needs. PPC campaigns can be paused, modified, or scaled instantly, giving you the flexibility to respond to opportunities or challenges in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
              PPC{' '}
              <span className="hollow-text-brand">
                Use Cases
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore how businesses across industries leverage PPC advertising to achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#5e2cb6]/5 to-[#c91a6f]/5 dark:from-[#5e2cb6]/10 dark:to-[#c91a6f]/10 rounded-xl p-8 border border-[#5e2cb6]/20 dark:border-[#5e2cb6]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">E-commerce Product Launches</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Launch new products with targeted PPC campaigns that drive immediate sales. Use Shopping Ads to showcase products directly in search results, increasing visibility and click-through rates.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Product listing ads (PLAs) for visual product discovery</li>
                <li>• Dynamic remarketing to re-engage previous visitors</li>
                <li>• Seasonal campaign optimization for peak shopping periods</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#fecc4d]/5 to-[#10b981]/5 dark:from-[#fecc4d]/10 dark:to-[#10b981]/10 rounded-xl p-8 border border-[#fecc4d]/20 dark:border-[#fecc4d]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Lead Generation for B2B</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Generate high-quality leads for B2B businesses with LinkedIn and Google Ads campaigns. Target decision-makers with job titles, company sizes, and industry-specific keywords.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• LinkedIn Sponsored Content for professional targeting</li>
                <li>• Google Search Ads for high-intent B2B keywords</li>
                <li>• Lead form campaigns to capture contact information</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#10b981]/5 to-[#5e2cb6]/5 dark:from-[#10b981]/10 dark:to-[#5e2cb6]/10 rounded-xl p-8 border border-[#10b981]/20 dark:border-[#10b981]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Local Business Promotion</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Drive foot traffic and local sales with geo-targeted PPC campaigns. Reach customers in your service area with location-specific ads and local extensions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Google Local Services Ads for service businesses</li>
                <li>• Location extensions to show business address and hours</li>
                <li>• Call-only campaigns for immediate phone inquiries</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#c91a6f]/5 to-[#fecc4d]/5 dark:from-[#c91a6f]/10 dark:to-[#fecc4d]/10 rounded-xl p-8 border border-[#c91a6f]/20 dark:border-[#c91a6f]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Brand Awareness Campaigns</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Build brand recognition and reach new audiences with display and video advertising. Expand your market presence and stay top-of-mind with potential customers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• YouTube video ads for engaging brand storytelling</li>
                <li>• Display network campaigns for broad reach</li>
                <li>• Social media advertising for brand engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Technologies technologies={technologies} />
      <ProcessDiagram title="PPC Process" subtitle="From strategy to optimization, we ensure maximum ROI and campaign performance at every step" steps={processSteps} />
      <FAQDropdown faqs={faqs} />
      <ContactSection title="Get in Touch" description="Have a project in mind? Let's discuss how we can help improve your PPC campaigns." />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}

