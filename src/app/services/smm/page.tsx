'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Share2, TrendingUp, Users, MessageSquare, BarChart, Phone, Mail, Calendar, Building2, Heart, ShoppingCart, Truck, Home, GraduationCap, Rocket, Video } from 'lucide-react'
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

export default function SMM() {
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
      title: 'Social Media Strategy',
      description: 'Comprehensive social media strategies aligned with your business goals',
      icon: <Share2 className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Content Creation',
      description: 'Engaging content that resonates with your audience across all platforms',
      icon: <Video className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Community Management',
      description: 'Active engagement and community building on social platforms',
      icon: <Users className="w-8 h-8" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'Influencer Marketing',
      description: 'Strategic partnerships with influencers to expand your reach',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#059669'
    },
    {
      title: 'Social Media Advertising',
      description: 'Paid social campaigns on Facebook, Instagram, LinkedIn, and more',
      icon: <BarChart className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track performance and ROI with detailed social media analytics',
      icon: <MessageSquare className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Share2 className="w-7 h-7" strokeWidth={2} />, 
      title: 'Multi-Platform Expertise', 
      description: 'Expertise across all major social media platforms',
      color: '#5e2cb6'
    },
    { 
      icon: <Users className="w-7 h-7" strokeWidth={2} />, 
      title: 'Engagement Focus', 
      description: 'Build authentic relationships with your audience',
      color: '#c91a6f'
    },
    { 
      icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, 
      title: 'Growth-Driven', 
      description: 'Strategies designed to grow your following and engagement',
      color: '#d97706'
    },
    { 
      icon: <Rocket className="w-7 h-7" strokeWidth={2} />, 
      title: 'Consistent Brand Voice', 
      description: 'Maintain consistent brand messaging across all platforms',
      color: '#059669'
    }
  ]

  const technologies = [
    { name: 'Facebook', logo: 'https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico', color: '#1877F2', category: 'backend' as const },
    { name: 'Instagram', logo: 'https://static.cdninstagram.com/rsrc.php/v3/yt/r/30PrGfR3xhB.png', color: '#E4405F', category: 'backend' as const },
    { name: 'LinkedIn', logo: 'https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca', color: '#0077B5', category: 'backend' as const },
    { name: 'Twitter', logo: 'https://abs.twimg.com/favicons/twitter.ico', color: '#1DA1F2', category: 'backend' as const },
    { name: 'TikTok', logo: 'https://www.tiktok.com/favicon.ico', color: '#000000', category: 'backend' as const },
    { name: 'YouTube', logo: 'https://www.youtube.com/favicon.ico', color: '#FF0000', category: 'backend' as const },
    { name: 'Pinterest', logo: 'https://www.pinterest.com/favicon.ico', color: '#BD081C', category: 'backend' as const },
    { name: 'Hootsuite', logo: 'https://hootsuite.com/favicon.ico', color: '#1DA1F2', category: 'backend' as const },
    { name: 'Buffer', logo: 'https://buffer.com/favicon.ico', color: '#168EEA', category: 'backend' as const },
    { name: 'Sprout Social', logo: 'https://sproutsocial.com/favicon.ico', color: '#25D366', category: 'backend' as const }
  ]

  const processSteps = [
    {
      title: 'Strategy Development',
      description: 'Develop comprehensive social media strategy aligned with your business goals and target audience',
      icon: <Share2 className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Content Planning',
      description: 'Create content calendar with engaging posts, videos, and stories for each platform',
      icon: <Video className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Content Creation',
      description: 'Design and create compelling visual content, copy, and multimedia assets',
      icon: <MessageSquare className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Community Management',
      description: 'Engage with your audience, respond to comments, and build authentic relationships',
      icon: <Users className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Performance Monitoring',
      description: 'Track engagement, reach, and conversions with detailed analytics and reporting',
      icon: <BarChart className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Optimization & Growth',
      description: 'Continuously optimize content and strategy based on performance data and insights',
      icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />
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

  const faqs = getFAQsForPage('smm')

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
                <Share2 className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#5e2cb6]">Social Media Marketing</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Social Media{' '}
                <span className="hollow-text-brand block mt-2">
                  Marketing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Build your brand presence and engage with your audience through strategic social media marketing. Grow your following and drive conversions. Our social media experts create compelling content, manage your online presence, and build authentic relationships with your audience across all major platforms including Facebook, Instagram, LinkedIn, Twitter, and TikTok. We help businesses establish a strong social media presence that drives engagement, builds brand loyalty, and generates measurable results.
              </p>
              <div className="mb-8 p-6 bg-gradient-to-r from-[#5e2cb6]/10 to-[#c91a6f]/10 rounded-xl border border-[#5e2cb6]/20">
                <p className="text-gray-700 font-medium mb-3">Why Social Media Marketing Matters:</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] mt-1">•</span>
                    <span><strong>Brand Awareness:</strong> Reach millions of potential customers on social platforms where they spend hours daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] mt-1">•</span>
                    <span><strong>Customer Engagement:</strong> Build meaningful relationships through direct communication and authentic interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] mt-1">•</span>
                    <span><strong>Lead Generation:</strong> Convert social media followers into customers with strategic content and campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5e2cb6] mt-1">•</span>
                    <span><strong>Cost-Effective Marketing:</strong> Achieve significant reach and engagement at a fraction of traditional advertising costs</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#5e2cb6]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Community Building</p>
                    <p className="text-gray-600 text-sm">Build engaged communities around your brand with authentic interactions and valuable content.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c91a6f]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-[#c91a6f]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Content Strategy</p>
                    <p className="text-gray-600 text-sm">Data-driven content strategies that resonate with your audience and drive engagement.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#d97706]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart className="w-4 h-4 text-[#d97706]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Performance Analytics</p>
                    <p className="text-gray-600 text-sm">Track and measure social media performance with detailed analytics and insights.</p>
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
              Social Media{' '}
              <span className="hollow-text-brand">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive social media marketing solutions
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
                SMM Services
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

      {/* Additional Content - SMM Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Social Media{' '}
              <span className="hollow-text-brand">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how strategic social media marketing can transform your brand presence and drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Increased Brand Awareness</h3>
              <p className="text-gray-600">
                Reach millions of potential customers on social platforms where they spend hours daily. Social media marketing helps you build brand recognition, establish your brand voice, and stay top-of-mind with your target audience. Consistent, engaging content increases visibility and helps your brand stand out in crowded markets.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Customer Engagement</h3>
              <p className="text-gray-600">
                Build meaningful relationships through direct communication and authentic interactions. Social media provides a platform for real-time customer service, feedback collection, and community building. Engage with customers, respond to inquiries, and create a loyal community around your brand.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#d97706]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#d97706]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Generation & Sales</h3>
              <p className="text-gray-600">
                Convert social media followers into customers with strategic content and campaigns. Social media marketing drives qualified traffic to your website, generates leads through targeted campaigns, and directly influences purchase decisions. Track ROI and measure conversion rates from social media efforts.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#059669]/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-[#059669]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost-Effective Marketing</h3>
              <p className="text-gray-600">
                Achieve significant reach and engagement at a fraction of traditional advertising costs. Social media marketing offers excellent ROI, especially for small and medium businesses. Organic content is free, and paid social ads are more affordable than traditional media while offering better targeting and measurability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Viral Potential</h3>
              <p className="text-gray-600">
                Create content that can go viral and reach millions of people organically. Well-crafted social media content has the potential to be shared widely, exponentially increasing your reach without additional advertising costs. Viral content builds brand awareness and drives massive traffic to your business.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Advantage</h3>
              <p className="text-gray-600">
                Stay ahead of competitors with active social media presence. Businesses with strong social media strategies outperform those without. Social media helps you monitor competitors, identify market opportunities, and position your brand as an industry leader through thought leadership and valuable content.
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
              Social Media{' '}
              <span className="hollow-text-brand">
                Use Cases
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how businesses across industries leverage social media marketing to achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#5e2cb6]/5 to-[#c91a6f]/5 rounded-xl p-8 border border-[#5e2cb6]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce Brand Building</h3>
              <p className="text-gray-600 mb-4">
                Build brand awareness and drive sales for e-commerce businesses through visual content, product showcases, and influencer partnerships. Use Instagram Shopping, Facebook Shops, and Pinterest to create seamless shopping experiences.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Product launches and promotional campaigns</li>
                <li>• User-generated content and customer testimonials</li>
                <li>• Influencer collaborations and brand partnerships</li>
                <li>• Social commerce integration for direct sales</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#d97706]/5 to-[#059669]/5 rounded-xl p-8 border border-[#d97706]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Lead Generation</h3>
              <p className="text-gray-600 mb-4">
                Generate high-quality B2B leads through LinkedIn marketing, thought leadership content, and professional networking. Build authority in your industry and connect with decision-makers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• LinkedIn content marketing and networking</li>
                <li>• Industry-specific thought leadership</li>
                <li>• Webinar and event promotion</li>
                <li>• Professional community building</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#059669]/5 to-[#5e2cb6]/5 rounded-xl p-8 border border-[#059669]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Business Promotion</h3>
              <p className="text-gray-600 mb-4">
                Drive foot traffic and local sales with geo-targeted social media campaigns. Use location-based features, local hashtags, and community engagement to attract nearby customers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Location-based advertising and targeting</li>
                <li>• Local event promotion and community engagement</li>
                <li>• Customer reviews and testimonials</li>
                <li>• Special offers and promotions for local customers</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#c91a6f]/5 to-[#d97706]/5 rounded-xl p-8 border border-[#c91a6f]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Marketing & SEO</h3>
              <p className="text-gray-600 mb-4">
                Amplify content marketing efforts and improve SEO through social media distribution. Share blog posts, videos, and resources to drive traffic and improve search rankings.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Content distribution and amplification</li>
                <li>• Social signals for SEO improvement</li>
                <li>• Video content marketing on YouTube and TikTok</li>
                <li>• Blog promotion and thought leadership</li>
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
              Ready to Grow Your{' '}
              <span className="hollow-text-white">
                Social Presence?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              Get in touch and let's discuss how we can help grow your social media presence.
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
      <ProcessDiagram title="Social Media Marketing Process" subtitle="From strategy to optimization, we ensure authentic engagement and sustainable growth at every step" steps={processSteps} />
      <FAQDropdown faqs={faqs} />
      <ContactSection title="Get in Touch" description="Have a project in mind? Let's discuss how we can help grow your social media presence." />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}


