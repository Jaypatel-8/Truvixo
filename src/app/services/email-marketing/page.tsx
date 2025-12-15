'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Mail, Send, Users, BarChart, Zap, Phone, Calendar, Building2, Heart, ShoppingCart, Truck, Home, GraduationCap, Rocket, Target, DollarSign } from 'lucide-react'
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

export default function EmailMarketing() {
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
      title: 'Email Campaign Design',
      description: 'Beautiful, responsive email templates that convert',
      icon: <Mail className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Automated Email Sequences',
      description: 'Set up automated email workflows for nurturing leads',
      icon: <Send className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'List Segmentation',
      description: 'Target the right audience with smart list segmentation',
      icon: <Users className="w-8 h-8" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'A/B Testing',
      description: 'Test and optimize email campaigns for better performance',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#059669'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track opens, clicks, conversions, and ROI',
      icon: <BarChart className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Email Automation',
      description: 'Automate welcome series, abandoned carts, and more',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Mail className="w-7 h-7" strokeWidth={2} />, 
      title: 'High ROI', 
      description: 'Email marketing delivers one of the highest ROIs of any channel',
      color: '#5e2cb6'
    },
    { 
      icon: <Users className="w-7 h-7" strokeWidth={2} />, 
      title: 'Personalization', 
      description: 'Personalized emails that resonate with your audience',
      color: '#c91a6f'
    },
    { 
      icon: <Send className="w-7 h-7" strokeWidth={2} />, 
      title: 'Automation', 
      description: 'Automate your email marketing to save time and scale',
      color: '#d97706'
    },
    { 
      icon: <Rocket className="w-7 h-7" strokeWidth={2} />, 
      title: 'Proven Results', 
      description: 'Track record of improving email engagement and conversions',
      color: '#059669'
    }
  ]

  const technologies = [
    { name: 'Mailchimp', logo: 'https://mailchimp.com/release/plums/cxp/images/apple-touch-icon-192.png', color: '#FFE01B', category: 'backend' as const },
    { name: 'SendGrid', logo: 'https://sendgrid.com/favicon.ico', color: '#1A82E2', category: 'backend' as const },
    { name: 'Constant Contact', logo: 'https://www.constantcontact.com/favicon.ico', color: '#FF6600', category: 'backend' as const },
    { name: 'Campaign Monitor', logo: 'https://www.campaignmonitor.com/favicon.ico', color: '#1A1A1A', category: 'backend' as const },
    { name: 'AWeber', logo: 'https://www.aweber.com/favicon.ico', color: '#FF6B35', category: 'backend' as const },
    { name: 'GetResponse', logo: 'https://www.getresponse.com/favicon.ico', color: '#FF6B35', category: 'backend' as const },
    { name: 'HubSpot', logo: 'https://www.hubspot.com/favicon.ico', color: '#FF7A59', category: 'backend' as const },
    { name: 'Klaviyo', logo: 'https://www.klaviyo.com/favicon.ico', color: '#ED1C24', category: 'backend' as const },
    { name: 'Omnisend', logo: 'https://www.omnisend.com/favicon.ico', color: '#6754E2', category: 'backend' as const },
    { name: 'ConvertKit', logo: 'https://convertkit.com/favicon.ico', color: '#FB6970', category: 'backend' as const }
  ]

  const processSteps = [
    {
      title: 'Strategy & Planning',
      description: 'Develop email marketing strategy aligned with your business goals and target audience',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'List Building & Segmentation',
      description: 'Build and segment your email list for targeted campaigns',
      icon: <Users className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Content Creation',
      description: 'Create compelling email content, subject lines, and CTAs that drive engagement',
      icon: <Mail className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Campaign Design',
      description: 'Design beautiful, responsive email templates optimized for all devices',
      icon: <Send className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Automation Setup',
      description: 'Set up automated email sequences for welcome, nurture, and re-engagement campaigns',
      icon: <Zap className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Testing & Optimization',
      description: 'A/B test campaigns and continuously optimize for better performance',
      icon: <BarChart className="w-6 h-6" strokeWidth={2} />
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

  const faqs = getFAQsForPage('email-marketing')

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
                <Mail className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#5e2cb6]">Email Marketing</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Email{' '}
                <span className="hollow-text-brand block mt-2">
                  Marketing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Drive engagement and conversions with personalized email marketing campaigns. Build relationships and nurture leads with automated email sequences. Email marketing delivers one of the highest ROIs of any marketing channel, making it essential for businesses looking to grow their customer base and increase revenue. Our email marketing experts create campaigns that resonate with your audience and drive measurable results.
              </p>
              <div className="mb-8 p-6 bg-gradient-to-r from-[#5e2cb6]/10 to-[#c91a6f]/10 rounded-xl border border-[#5e2cb6]/20">
                <p className="text-gray-700 font-medium mb-3">Why Email Marketing Works:</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] mt-1">•</span>
                    <span><strong>High ROI:</strong> Email marketing delivers an average ROI of $42 for every $1 spent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] mt-1">•</span>
                    <span><strong>Direct Communication:</strong> Reach customers directly in their inbox with personalized messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] mt-1">•</span>
                    <span><strong>Automation:</strong> Set up automated campaigns that nurture leads and drive conversions 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] mt-1">•</span>
                    <span><strong>Measurable Results:</strong> Track opens, clicks, conversions, and ROI with detailed analytics</span>
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
              Email Marketing{' '}
              <span className="hollow-text-brand">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive email marketing solutions tailored to your business goals
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
              Why Choose Our{' '}
              <span className="hollow-text-brand">
                Email Marketing
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
              Ready to Boost{' '}
              <span className="hollow-text-white">
                Email Engagement?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              Get in touch and let's discuss how we can help improve your email marketing.
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

      {/* Additional Content - Email Marketing Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Email Marketing{' '}
              <span className="hollow-text-brand">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how email marketing can transform your customer relationships and drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exceptional ROI</h3>
              <p className="text-gray-600">
                Email marketing delivers an average ROI of $42 for every $1 spent, making it one of the most cost-effective marketing channels. Unlike paid advertising, you own your email list and can reach customers repeatedly without additional costs per message.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Customer Communication</h3>
              <p className="text-gray-600">
                Reach customers directly in their inbox with personalized messages. Email marketing allows you to bypass social media algorithms and ad blockers, ensuring your message reaches your audience when they're ready to engage.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#d97706]/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#d97706]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Automation</h3>
              <p className="text-gray-600">
                Set up automated email sequences that nurture leads and drive conversions 24/7. Welcome series, abandoned cart emails, and re-engagement campaigns work automatically, saving time while maintaining consistent communication with your audience.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#059669]/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-[#059669]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Measurable Results</h3>
              <p className="text-gray-600">
                Track opens, clicks, conversions, and ROI with detailed analytics. Email marketing provides comprehensive metrics that help you understand what works, optimize campaigns, and make data-driven decisions to improve performance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalization at Scale</h3>
              <p className="text-gray-600">
                Personalize emails based on customer behavior, preferences, and purchase history. Dynamic content, segmentation, and personalization tokens allow you to send relevant messages to thousands of subscribers while maintaining a personal touch.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build Customer Loyalty</h3>
              <p className="text-gray-600">
                Regular email communication helps build strong relationships with customers. Newsletters, exclusive offers, and valuable content keep your brand top-of-mind and encourage repeat purchases, increasing customer lifetime value.
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
              Email Marketing{' '}
              <span className="hollow-text-brand">
                Use Cases
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how businesses leverage email marketing to achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#5e2cb6]/5 to-[#c91a6f]/5 rounded-xl p-8 border border-[#5e2cb6]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce Sales & Promotions</h3>
              <p className="text-gray-600 mb-4">
                Drive sales with promotional emails, product launches, and seasonal campaigns. Use abandoned cart emails to recover lost sales and personalized product recommendations to increase average order value.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Abandoned cart recovery campaigns</li>
                <li>• Product launch announcements</li>
                <li>• Seasonal sales and promotions</li>
                <li>• Personalized product recommendations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#d97706]/5 to-[#059669]/5 rounded-xl p-8 border border-[#d97706]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lead Nurturing & Education</h3>
              <p className="text-gray-600 mb-4">
                Nurture leads through the sales funnel with educational content, case studies, and thought leadership. Build trust and establish your brand as an industry expert before asking for the sale.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Welcome series for new subscribers</li>
                <li>• Educational content and resources</li>
                <li>• Case studies and success stories</li>
                <li>• Thought leadership newsletters</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#059669]/5 to-[#5e2cb6]/5 rounded-xl p-8 border border-[#059669]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Retention & Loyalty</h3>
              <p className="text-gray-600 mb-4">
                Keep customers engaged and encourage repeat purchases with loyalty programs, exclusive offers, and valuable content. Increase customer lifetime value through strategic email communication.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Loyalty program communications</li>
                <li>• Exclusive member offers</li>
                <li>• Birthday and anniversary emails</li>
                <li>• Re-engagement campaigns</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#c91a6f]/5 to-[#d97706]/5 rounded-xl p-8 border border-[#c91a6f]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Promotion & Webinars</h3>
              <p className="text-gray-600 mb-4">
                Promote events, webinars, and workshops through targeted email campaigns. Send invitations, reminders, and follow-up content to maximize attendance and engagement.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Event invitations and RSVPs</li>
                <li>• Reminder emails before events</li>
                <li>• Post-event follow-up and resources</li>
                <li>• Webinar registration campaigns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Technologies technologies={technologies} />
      <ProcessDiagram title="Email Marketing Process" subtitle="From strategy to optimization, we ensure maximum engagement and conversions at every step" steps={processSteps} />
      <FAQDropdown faqs={faqs} />
      <ContactSection title="Get in Touch" description="Have a project in mind? Let's discuss how we can help improve your email marketing." />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}


