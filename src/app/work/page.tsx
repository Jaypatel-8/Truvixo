'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle, Star, Users, Target, Zap, BarChart3, Globe, Building2, Linkedin, Mail, MessageSquare, Palette, Sparkles, Rocket, TrendingUp, Award, MousePointer, ChevronLeft, ChevronRight, Menu, X, ExternalLink, Eye } from 'lucide-react'
import Logo from '../../components/Logo'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Work() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('work')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Scroll animation hook
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          const sectionId = entry.target.getAttribute('data-section')
          if (sectionId) {
            setActiveSection(sectionId)
          }
        }
      })
    }, observerOptions)

    // Observe all scroll animation elements
    const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-rotate')
    scrollElements.forEach((el) => observer.observe(el))

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const categories = [
    { id: 'all', name: 'All Work', color: 'bg-gray-100' },
    { id: 'branding', name: 'Branding', color: 'bg-purple-100' },
    { id: 'marketing', name: 'Marketing', color: 'bg-pink-100' },
    { id: 'tech', name: 'Tech', color: 'bg-yellow-100' },
    { id: 'ai', name: 'AI', color: 'bg-red-100' },
    { id: 'cloud', name: 'Cloud', color: 'bg-purple-100' }
  ]

  const caseStudies = [
    {
      id: 1,
      title: 'TechStart Inc.',
      subtitle: 'Complete Digital Transformation',
      category: 'tech',
      description: 'A comprehensive digital transformation for a growing tech startup, including branding, web development, and AI integration.',
      image: '💻',
      results: [
        '300% increase in lead generation',
        '50% reduction in operational costs',
        '98% customer satisfaction rate'
      ],
      tags: ['Branding', 'Web Development', 'AI Integration'],
      color: 'bg-purple-100',
      textColor: 'text-purple-600'
    },
    {
      id: 2,
      title: 'RetailMax',
      subtitle: 'E-commerce Platform & Marketing',
      category: 'marketing',
      description: 'Built a complete e-commerce solution with integrated marketing automation and AI-powered personalization.',
      image: '🛍️',
      results: [
        '250% increase in online sales',
        '40% improvement in conversion rate',
        '60% reduction in cart abandonment'
      ],
      tags: ['E-commerce', 'Marketing Automation', 'AI Personalization'],
      color: 'bg-pink-100',
      textColor: 'text-pink-600'
    },
    {
      id: 3,
      title: 'HealthCare Plus',
      subtitle: 'AI-Powered Patient Management',
      category: 'ai',
      description: 'Developed an AI-powered patient management system that streamlines operations and improves patient care.',
      image: '🏥',
      results: [
        '70% reduction in administrative tasks',
        '45% improvement in patient satisfaction',
        '30% increase in operational efficiency'
      ],
      tags: ['AI Development', 'Healthcare Tech', 'Process Automation'],
      color: 'bg-red-100',
      textColor: 'text-red-600'
    },
    {
      id: 4,
      title: 'FinanceFlow',
      subtitle: 'Cloud-Native Financial Platform',
      category: 'cloud',
      description: 'Created a scalable cloud-native financial platform with advanced security and real-time analytics.',
      image: '💰',
      results: [
        '99.9% uptime achieved',
        '80% faster transaction processing',
        '50% reduction in infrastructure costs'
      ],
      tags: ['Cloud Migration', 'FinTech', 'Security'],
      color: 'bg-purple-100',
      textColor: 'text-purple-600'
    },
    {
      id: 5,
      title: 'EduTech Solutions',
      subtitle: 'Learning Management System',
      category: 'tech',
      description: 'Built a comprehensive learning management system with AI-powered content recommendations and analytics.',
      image: '🎓',
      results: [
        '200% increase in student engagement',
        '60% improvement in learning outcomes',
        '85% reduction in administrative overhead'
      ],
      tags: ['EdTech', 'AI Recommendations', 'Analytics'],
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600'
    },
    {
      id: 6,
      title: 'ManufacturingPro',
      subtitle: 'IoT & AI Manufacturing Solution',
      category: 'ai',
      description: 'Implemented IoT sensors and AI analytics to optimize manufacturing processes and predict maintenance needs.',
      image: '🏭',
      results: [
        '35% reduction in downtime',
        '25% increase in production efficiency',
        '90% accuracy in maintenance predictions'
      ],
      tags: ['IoT', 'AI Analytics', 'Manufacturing'],
      color: 'bg-red-100',
      textColor: 'text-red-600'
    }
  ]

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory)

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Animated Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200">Home</a>
                <a href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200">About</a>
                <a href="/services" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200">Services</a>
                <a href="/work" className="px-3 py-2 rounded-md text-sm font-medium text-purple-600 bg-purple-50">Our Work</a>
                <a href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200">Contact</a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50">Home</a>
              <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50">About</a>
              <a href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50">Services</a>
              <a href="/work" className="block px-3 py-2 rounded-md text-base font-medium text-purple-600 bg-purple-50">Our Work</a>
              <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50">Contact</a>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200/30 rounded-full animate-float-delay-1"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-yellow-200/30 rounded-full animate-float-delay-2"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-red-200/30 rounded-full animate-float-delay-3"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight">
              Our{' '}
              <span className="hollow-text-yellow">
                Work
              </span>
          </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light">
              See how we've helped businesses transform and scale with AI-powered solutions
          </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 scroll-animate">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? `${category.color} text-gray-800 shadow-lg`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <div
                key={study.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate-scale overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${study.color} h-48 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}>
                  {study.image}
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {study.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-600 mb-4">
                    {study.subtitle}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                  <button className={`w-full ${study.color} ${study.textColor} font-bold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2`}>
                    <Eye className="w-4 h-4" />
                    View Case Study
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured{' '}
              <span className="hollow-text-yellow">
                Case Study
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A deep dive into one of our most successful transformations
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden scroll-animate">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-12 flex items-center justify-center">
                <div className="text-8xl">🚀</div>
              </div>
              <div className="p-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Complete Transformation</span>
                  <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">AI Integration</span>
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Cloud Migration</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  TechStart Inc. - Complete Digital Transformation
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  A comprehensive digital transformation that took a traditional tech startup and turned it into an AI-powered market leader. This project involved complete rebranding, web development, AI integration, and cloud migration.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
                    <div className="text-sm text-gray-600">Lead Generation Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">50%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">98%</div>
                    <div className="text-sm text-gray-600">Customer Satisfaction</div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  Read Full Case Study
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our{' '}
              <span className="hollow-text-yellow">
                Clients
              </span>
              {' '}Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                content: "TruVixo transformed our entire digital presence. The results speak for themselves - 300% increase in leads!",
                avatar: "SJ",
                color: "bg-purple-100"
              },
              {
                name: "Michael Chen",
                role: "CTO, RetailMax",
                content: "Their AI integration was flawless. We saw immediate improvements in our operational efficiency.",
                avatar: "MC",
                color: "bg-pink-100"
              },
              {
                name: "Emily Rodriguez",
                role: "Founder, HealthCare Plus",
                content: "Working with TruVixo was a game-changer. They understood our vision and brought it to life perfectly.",
                avatar: "ER",
                color: "bg-yellow-100"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 scroll-animate-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 ${testimonial.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}