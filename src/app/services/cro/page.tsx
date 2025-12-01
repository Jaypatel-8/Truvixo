'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, TrendingUp, Target, BarChart, Zap, MousePointerClick, Phone, Mail, Calendar, Building2, Heart, ShoppingCart, Truck, Home, GraduationCap, Rocket, Gauge } from 'lucide-react'
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

export default function CRO() {
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
      title: 'Conversion Rate Analysis',
      description: 'Deep analysis of your website to identify conversion barriers',
      icon: <BarChart className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'A/B Testing',
      description: 'Test different variations to find what converts best',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Landing Page Optimization',
      description: 'Optimize landing pages for maximum conversions',
      icon: <MousePointerClick className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'User Experience Optimization',
      description: 'Improve UX to reduce friction and increase conversions',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Funnel Optimization',
      description: 'Optimize your sales funnel to maximize conversions',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Heatmap & Session Recording',
      description: 'Understand user behavior with heatmaps and recordings',
      icon: <Gauge className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, 
      title: 'Proven Results', 
      description: 'Track record of improving conversion rates by 20-50%',
      color: '#5e2cb6'
    },
    { 
      icon: <Target className="w-7 h-7" strokeWidth={2} />, 
      title: 'Data-Driven', 
      description: 'Every optimization backed by data and testing',
      color: '#c91a6f'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'Quick Wins', 
      description: 'Identify and implement quick wins for immediate impact',
      color: '#fecc4d'
    },
    { 
      icon: <Rocket className="w-7 h-7" strokeWidth={2} />, 
      title: 'Long-Term Growth', 
      description: 'Sustainable conversion improvements that last',
      color: '#10b981'
    }
  ]

  const technologies = [
    { name: 'Google Optimize', logo: 'https://www.google.com/analytics/images/home/ga-logo.svg', color: '#FF6F00', category: 'backend' as const },
    { name: 'Hotjar', logo: 'https://www.hotjar.com/favicon.ico', color: '#FD3A69', category: 'backend' as const },
    { name: 'VWO', logo: 'https://vwo.com/favicon.ico', color: '#FF6B6B', category: 'backend' as const },
    { name: 'Optimizely', logo: 'https://www.optimizely.com/favicon.ico', color: '#0045FF', category: 'backend' as const },
    { name: 'Google Analytics', logo: 'https://www.google.com/analytics/images/home/ga-logo.svg', color: '#FF6F00', category: 'backend' as const },
    { name: 'Mixpanel', logo: 'https://mixpanel.com/favicon.ico', color: '#7856FF', category: 'backend' as const },
    { name: 'Crazy Egg', logo: 'https://www.crazyegg.com/favicon.ico', color: '#FF6B6B', category: 'backend' as const },
    { name: 'FullStory', logo: 'https://www.fullstory.com/favicon.ico', color: '#673AB7', category: 'backend' as const },
    { name: 'Mouseflow', logo: 'https://mouseflow.com/favicon.ico', color: '#FF6B6B', category: 'backend' as const },
    { name: 'Unbounce', logo: 'https://unbounce.com/favicon.ico', color: '#FF6B6B', category: 'backend' as const }
  ]

  const processSteps = [
    {
      title: 'Conversion Analysis',
      description: 'Analyze your website to identify conversion barriers and optimization opportunities',
      icon: <BarChart className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'User Research & Testing',
      description: 'Conduct user research, heatmaps, and session recordings to understand user behavior',
      icon: <MousePointerClick className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Hypothesis Development',
      description: 'Develop data-driven hypotheses for improving conversion rates based on research findings',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'A/B Testing Setup',
      description: 'Design and implement A/B tests to validate optimization hypotheses',
      icon: <Gauge className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Implementation & Monitoring',
      description: 'Implement winning variations and continuously monitor performance metrics',
      icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Continuous Optimization',
      description: 'Iterate and optimize based on test results and user feedback for sustained growth',
      icon: <Zap className="w-6 h-6" strokeWidth={2} />
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

  const faqs = getFAQsForPage('cro')

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
                <TrendingUp className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#5e2cb6]">CRO Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                Conversion Rate{' '}
                <span className="hollow-text-brand block mt-2">
                  Optimization
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Turn more visitors into customers with our conversion rate optimization services. Data-driven testing and optimization to maximize your ROI. Conversion rate optimization helps you get more value from existing traffic without increasing ad spend. Our CRO experts use advanced analytics, user research, and A/B testing to identify and fix conversion barriers, resulting in measurable improvements to your bottom line.
              </p>
              <div className="mb-8 p-6 bg-gradient-to-r from-[#5e2cb6]/10 to-[#c91a6f]/10 dark:from-[#5e2cb6]/20 dark:to-[#c91a6f]/20 rounded-xl border border-[#5e2cb6]/20 dark:border-[#5e2cb6]/30">
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">Why Conversion Rate Optimization Matters:</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] dark:text-[#8b5cf6] mt-1">•</span>
                    <span><strong>Maximize Existing Traffic:</strong> Get more conversions from your current visitors without increasing ad spend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] dark:text-[#8b5cf6] mt-1">•</span>
                    <span><strong>Data-Driven Decisions:</strong> Make optimization decisions based on real user behavior and test results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] dark:text-[#8b5cf6] mt-1">•</span>
                    <span><strong>Higher ROI:</strong> Small conversion rate improvements can significantly increase revenue and profitability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] dark:text-[#8b5cf6] mt-1">•</span>
                    <span><strong>Better User Experience:</strong> Optimized websites provide better experiences that keep customers coming back</span>
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
              CRO{' '}
              <span className="hollow-text-brand">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive conversion rate optimization solutions tailored to your business goals
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
                CRO Services
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
              Ready to Improve Your{' '}
              <span className="hollow-text-white">
                Conversions?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              Get in touch and let's discuss how we can help improve your conversion rates.
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

      {/* Additional Content - CRO Benefits */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
              CRO{' '}
              <span className="hollow-text-brand">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover how conversion rate optimization can transform your website performance and drive measurable business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 dark:bg-[#8b5cf6]/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#5e2cb6] dark:text-[#8b5cf6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Maximize Existing Traffic</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get more conversions from your current visitors without increasing ad spend. CRO helps you extract maximum value from existing traffic, improving ROI on your marketing investments. A 20% conversion rate increase can double your revenue without any additional traffic.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 dark:bg-[#c91a6f]/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Data-Driven Decisions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Make optimization decisions based on real user behavior, not assumptions. CRO uses heatmaps, session recordings, and A/B testing to understand exactly how users interact with your site and what prevents them from converting.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#fecc4d]/10 dark:bg-[#fecc4d]/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#fecc4d]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Higher ROI</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Small conversion rate improvements can significantly increase revenue and profitability. Improving conversion rates by just 1-2% can result in substantial revenue gains, making CRO one of the most cost-effective marketing strategies available.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#10b981]/10 dark:bg-[#10b981]/20 rounded-lg flex items-center justify-center mb-4">
                <MousePointerClick className="w-6 h-6 text-[#10b981]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Better User Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Optimized websites provide better experiences that keep customers coming back. CRO improvements often result in faster load times, clearer navigation, and more intuitive interfaces that benefit all users, not just those who convert.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 dark:bg-[#8b5cf6]/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#5e2cb6] dark:text-[#8b5cf6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Quick Wins</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Identify and implement quick wins for immediate impact. Many CRO improvements can be implemented quickly with minimal development effort, providing fast results while longer-term optimizations are being tested and refined.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 dark:bg-[#c91a6f]/20 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Long-Term Growth</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sustainable conversion improvements that last. Unlike one-time traffic boosts, CRO improvements compound over time, providing ongoing benefits as your traffic grows. Each optimization builds on previous improvements for cumulative gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
              CRO{' '}
              <span className="hollow-text-brand">
                Use Cases
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore how businesses leverage conversion rate optimization to achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#5e2cb6]/5 to-[#c91a6f]/5 dark:from-[#5e2cb6]/10 dark:to-[#c91a6f]/10 rounded-xl p-8 border border-[#5e2cb6]/20 dark:border-[#5e2cb6]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">E-Commerce Checkout Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Reduce cart abandonment and increase checkout completion rates. Optimize checkout flows, payment options, and trust signals to convert more visitors into customers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Streamlined checkout process</li>
                <li>• Trust badges and security indicators</li>
                <li>• Guest checkout options</li>
                <li>• Mobile checkout optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#fecc4d]/5 to-[#10b981]/5 dark:from-[#fecc4d]/10 dark:to-[#10b981]/10 rounded-xl p-8 border border-[#fecc4d]/20 dark:border-[#fecc4d]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Landing Page Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Improve landing page performance for PPC and marketing campaigns. Test headlines, CTAs, forms, and layouts to maximize conversion rates from paid traffic.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Headline and copy testing</li>
                <li>• CTA button optimization</li>
                <li>• Form length and field testing</li>
                <li>• Social proof and testimonials</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#10b981]/5 to-[#5e2cb6]/5 dark:from-[#10b981]/10 dark:to-[#5e2cb6]/10 rounded-xl p-8 border border-[#10b981]/20 dark:border-[#10b981]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Lead Generation Forms</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Optimize lead generation forms to capture more qualified leads. Test form length, field types, and placement to balance lead quality with quantity.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Form field reduction</li>
                <li>• Progressive profiling</li>
                <li>• Multi-step form optimization</li>
                <li>• Value proposition testing</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#c91a6f]/5 to-[#fecc4d]/5 dark:from-[#c91a6f]/10 dark:to-[#fecc4d]/10 rounded-xl p-8 border border-[#c91a6f]/20 dark:border-[#c91a6f]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Page Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Increase product page conversions with optimized layouts, images, descriptions, and purchase flows. Test different product presentation strategies to maximize sales.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Product image and video testing</li>
                <li>• Description length and format</li>
                <li>• Add to cart button optimization</li>
                <li>• Related product recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Technologies technologies={technologies} />
      <ProcessDiagram title="CRO Process" subtitle="From analysis to optimization, we ensure maximum conversion rates and sustainable growth at every step" steps={processSteps} />
      <FAQDropdown faqs={faqs} />
      <ContactSection title="Get in Touch" description="Have a project in mind? Let's discuss how we can help improve your conversion rates." />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}

