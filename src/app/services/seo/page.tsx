'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Search, TrendingUp, Target, BarChart, Zap, Phone, Mail, Calendar, Building2, Heart, ShoppingCart, Truck, Home, GraduationCap, Rocket, Globe, Eye, Shield } from 'lucide-react'
import dynamic from 'next/dynamic'
import Technologies from '@/components/Technologies'
import FAQDropdown from '@/components/FAQDropdown'
import Clientele from '@/components/Clientele'
import ContactSection from '@/components/ContactSection'
import GetQuoteSection from '@/components/sections/GetQuoteSection'
import ProcessDiagram from '@/components/ProcessDiagram'
import { getFAQsForPage } from '@/lib/pageData'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function SEO() {
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
      title: 'On-Page SEO',
      description: 'Optimize your website content, meta tags, and structure for better search rankings',
      icon: <Search className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Off-Page SEO',
      description: 'Build quality backlinks and improve domain authority through strategic link building',
      icon: <Globe className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Technical SEO',
      description: 'Optimize site speed, mobile responsiveness, and technical infrastructure',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'Local SEO',
      description: 'Improve local search visibility and Google My Business optimization',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#059669'
    },
    {
      title: 'Content SEO',
      description: 'Create SEO-optimized content that ranks and converts',
      icon: <Eye className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'SEO Analytics',
      description: 'Track rankings, traffic, and conversions with comprehensive reporting',
      icon: <BarChart className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Search className="w-7 h-7" strokeWidth={2} />, 
      title: 'Proven Results', 
      description: 'Track record of improving search rankings and organic traffic',
      color: '#5e2cb6'
    },
    { 
      icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, 
      title: 'Data-Driven Strategy', 
      description: 'SEO strategies backed by analytics and keyword research',
      color: '#c91a6f'
    },
    { 
      icon: <Target className="w-7 h-7" strokeWidth={2} />, 
      title: 'White-Hat Techniques', 
      description: 'Ethical SEO practices that deliver sustainable results',
      color: '#d97706'
    },
    { 
      icon: <Rocket className="w-7 h-7" strokeWidth={2} />, 
      title: 'Fast Results', 
      description: 'Quick wins while building long-term organic growth',
      color: '#059669'
    }
  ]

  const technologies = [
    { name: 'Google Analytics', logo: 'https://www.google.com/analytics/images/home/ga-logo.svg', color: '#FF6F00', category: 'backend' as const },
    { name: 'Google Search Console', logo: 'https://www.google.com/webmasters/tools/images/search-console-icon.svg', color: '#4285F4', category: 'backend' as const },
    { name: 'SEMrush', logo: 'https://www.semrush.com/favicon.ico', color: '#FF6C37', category: 'backend' as const },
    { name: 'Ahrefs', logo: 'https://ahrefs.com/favicon.ico', color: '#FF6C37', category: 'backend' as const },
    { name: 'Moz', logo: 'https://moz.com/favicon.ico', color: '#00A4BD', category: 'backend' as const },
    { name: 'Screaming Frog', logo: 'https://www.screamingfrog.co.uk/favicon.ico', color: '#5A5A5A', category: 'backend' as const },
    { name: 'Google Tag Manager', logo: 'https://tagmanager.google.com/favicon.ico', color: '#4285F4', category: 'backend' as const },
    { name: 'Schema.org', logo: 'https://schema.org/favicon.ico', color: '#5A5A5A', category: 'backend' as const },
    { name: 'PageSpeed Insights', logo: 'https://pagespeed.web.dev/favicon.ico', color: '#4285F4', category: 'backend' as const }
  ]

  const processSteps = [
    {
      title: 'SEO Audit & Analysis',
      description: 'Comprehensive website audit to identify SEO issues and opportunities',
      icon: <Search className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Keyword Research',
      description: 'In-depth keyword research to target high-value search terms',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'On-Page Optimization',
      description: 'Optimize content, meta tags, headings, and internal linking structure',
      icon: <Zap className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Technical SEO',
      description: 'Fix technical issues, improve site speed, and ensure mobile-friendliness',
      icon: <Globe className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Content Strategy',
      description: 'Create and optimize content that ranks and drives organic traffic',
      icon: <Eye className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Monitoring & Reporting',
      description: 'Track rankings, traffic, and performance with regular reporting',
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

  const faqs = getFAQsForPage('seo')

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
                <Search className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#5e2cb6]">SEO Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                SEO{' '}
                <span className="hollow-text-brand block mt-2">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Improve your search engine rankings and drive organic traffic with our comprehensive SEO services. Get found by your target audience. Our proven SEO strategies help businesses increase visibility, attract qualified leads, and grow revenue through search engine optimization.
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
              SEO{' '}
              <span className="hollow-text-brand">
                Services
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Why Choose Our{' '}
              <span className="hollow-text-brand">
                SEO Services
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

      {/* Additional Content - SEO Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              SEO{' '}
              <span className="hollow-text-brand">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how search engine optimization can transform your online presence and drive sustainable business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Increased Organic Traffic</h3>
              <p className="text-gray-600">
                Drive qualified visitors to your website through improved search engine rankings. SEO helps you attract users who are actively searching for your products or services, resulting in higher-quality traffic that's more likely to convert.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost-Effective Marketing</h3>
              <p className="text-gray-600">
                Unlike paid advertising, SEO provides long-term results without ongoing ad spend. Once you rank well, you continue to receive organic traffic without paying per click, making it one of the most cost-effective marketing channels.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#d97706]/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-[#d97706]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Higher Conversion Rates</h3>
              <p className="text-gray-600">
                Organic search traffic typically converts better than paid traffic because users are actively searching for solutions. SEO helps you reach customers at the right moment in their buying journey, resulting in higher conversion rates.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#059669]/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#059669]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Credibility</h3>
              <p className="text-gray-600">
                High search rankings build trust and credibility with potential customers. Users trust websites that appear at the top of search results, viewing them as authoritative and reliable sources in their industry.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Visibility</h3>
              <p className="text-gray-600">
                SEO provides round-the-clock visibility for your business. Unlike business hours, search engines work 24/7, allowing potential customers to find you at any time, from anywhere in the world.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Long-Term Results</h3>
              <p className="text-gray-600">
                SEO provides sustainable, long-term results that compound over time. Unlike one-time campaigns, SEO improvements continue to drive traffic and conversions for months and years after implementation.
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
              SEO{' '}
              <span className="hollow-text-brand">
                Use Cases
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how businesses leverage SEO to achieve their marketing and growth goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#5e2cb6]/5 to-[#c91a6f]/5 rounded-xl p-8 border border-[#5e2cb6]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce Product Visibility</h3>
              <p className="text-gray-600 mb-4">
                Increase product visibility and sales through optimized product pages, category pages, and content. Rank for product-related keywords to capture high-intent shoppers ready to purchase.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Product page optimization</li>
                <li>• Category page SEO</li>
                <li>• Product review optimization</li>
                <li>• Shopping feed optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#d97706]/5 to-[#059669]/5 rounded-xl p-8 border border-[#d97706]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Business Discovery</h3>
              <p className="text-gray-600 mb-4">
                Help local businesses get found by customers in their area. Local SEO ensures your business appears in "near me" searches and Google Maps, driving foot traffic and local sales.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Google My Business optimization</li>
                <li>• Local citation building</li>
                <li>• Location-based content</li>
                <li>• Review management</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#059669]/5 to-[#5e2cb6]/5 rounded-xl p-8 border border-[#059669]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Marketing Amplification</h3>
              <p className="text-gray-600 mb-4">
                Amplify content marketing efforts through SEO-optimized blog posts, guides, and resources. Rank for informational keywords to attract and educate potential customers throughout their buying journey.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Blog post optimization</li>
                <li>• Content topic research</li>
                <li>• Internal linking strategies</li>
                <li>• Content freshness optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#c91a6f]/5 to-[#d97706]/5 rounded-xl p-8 border border-[#c91a6f]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Lead Generation</h3>
              <p className="text-gray-600 mb-4">
                Generate high-quality B2B leads through targeted SEO strategies. Rank for industry-specific keywords and long-tail search terms that indicate strong purchase intent from decision-makers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Industry keyword targeting</li>
                <li>• Thought leadership content</li>
                <li>• Case study optimization</li>
                <li>• Technical content for B2B</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Technologies technologies={technologies} />
      <ProcessDiagram title="SEO Process" subtitle="From audit to reporting, we ensure sustainable growth and improved rankings at every step" steps={processSteps} />
      <FAQDropdown faqs={faqs} />
      <ContactSection title="Get in Touch" description="Have a project in mind? Let's discuss how we can help improve your SEO." />

      {/* Get Quote Section - Last section before footer */}
      <GetQuoteSection
        title="Ready to Improve Your"
        hollowText="Search Rankings?"
        description="Get in touch and let's discuss how we can improve your SEO."
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




