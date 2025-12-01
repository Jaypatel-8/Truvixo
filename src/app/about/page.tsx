'use client'

import { useEffect } from 'react'
import { ArrowRight, CheckCircle, Star, Users, Target, Zap, BarChart3, Globe, Building2, Linkedin, Mail, MessageSquare, Palette, Sparkles, Rocket, TrendingUp, Award, MousePointer, ChevronLeft, ChevronRight, Brain, Cloud, Code, DollarSign } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ProcessDiagram = dynamic(() => import('@/components/ProcessDiagram'), {
  ssr: false,
  loading: () => null,
})

export default function About() {
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

  const whyChooseUs = [
    {
      title: 'AI-Driven Innovation',
      description: 'We leverage cutting-edge AI to deliver solutions that adapt and evolve with your business',
      icon: <Brain className="w-8 h-8" />,
      color: 'bg-purple-100',
      textColor: 'text-purple-600'
    },
    {
      title: 'End-to-End Partnership',
      description: 'From branding to funding, we\'re your complete growth partner',
      icon: <Target className="w-8 h-8" />,
      color: 'bg-pink-100',
      textColor: 'text-pink-600'
    },
    {
      title: 'Proven Results',
      description: '500+ successful projects with 98% client satisfaction rate',
      icon: <Award className="w-8 h-8" />,
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600'
    },
    {
      title: 'Future-Ready Solutions',
      description: 'We build for tomorrow, ensuring your business stays ahead of the curve',
      icon: <Rocket className="w-8 h-8" />,
      color: 'bg-red-100',
      textColor: 'text-red-600'
    }
  ]

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      description: 'Visionary leader with 10+ years in AI and business transformation',
      avatar: 'AJ',
      color: 'bg-purple-100',
      textColor: 'text-purple-600'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      description: 'Tech innovator specializing in scalable AI solutions and cloud architecture',
      avatar: 'SC',
      color: 'bg-pink-100',
      textColor: 'text-pink-600'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Design',
      description: 'Creative director with expertise in brand identity and user experience',
      avatar: 'MR',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600'
    },
    {
      name: 'Emily Watson',
      role: 'Growth Strategist',
      description: 'Marketing expert focused on data-driven growth and customer acquisition',
      avatar: 'EW',
      color: 'bg-red-100',
      textColor: 'text-red-600'
    }
  ]

  const focusAreas = [
    { name: 'Branding', icon: <Palette className="w-6 h-6" />, color: 'bg-purple-100' },
    { name: 'Marketing', icon: <TrendingUp className="w-6 h-6" />, color: 'bg-pink-100' },
    { name: 'Tech', icon: <Code className="w-6 h-6" />, color: 'bg-yellow-100' },
    { name: 'Cloud', icon: <Cloud className="w-6 h-6" />, color: 'bg-red-100' },
    { name: 'AI', icon: <Brain className="w-6 h-6" />, color: 'bg-purple-100' },
    { name: 'Funding', icon: <DollarSign className="w-6 h-6" />, color: 'bg-pink-100' }
  ]

  const industries = [
    { name: 'FinTech', icon: '💳', color: 'bg-purple-100' },
    { name: 'Healthcare', icon: '🏥', color: 'bg-pink-100' },
    { name: 'Retail', icon: '🛒', color: 'bg-yellow-100' },
    { name: 'EdTech', icon: '🎓', color: 'bg-red-100' },
    { name: 'Manufacturing', icon: '🏭', color: 'bg-purple-100' },
    { name: 'Real Estate', icon: '🏢', color: 'bg-pink-100' },
    { name: 'Logistics', icon: '🚚', color: 'bg-yellow-100' },
    { name: 'Construction', icon: '🏗️', color: 'bg-red-100' }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden">

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Who We Are — The Innovators{' '}
              <span className="hollow-text-pink">
                Behind
              </span>
              {' '}TruVixo
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-light">
              Driven by innovation, powered by technology, and committed to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Partner in Intelligent Digital{' '}
                <span className="hollow-text-pink">
                  Transformation
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At TruVixo, we deliver comprehensive solutions across multiple domains — not just digital marketing. We're your end-to-end growth partner, leveraging AI and cutting-edge technology to transform businesses from concept to market leader.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From AI and blockchain to software engineering, cloud infrastructure, and digital marketing — we combine innovation, technology, and creativity to help businesses evolve and scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-purple-100 px-4 py-2 rounded-full">
                  <span className="text-purple-800 font-semibold">100+ Projects</span>
                </div>
                <div className="bg-pink-100 px-4 py-2 rounded-full">
                  <span className="text-pink-800 font-semibold">20+ Team Members</span>
                </div>
                <div className="bg-yellow-100 px-4 py-2 rounded-full">
                  <span className="text-yellow-800 font-semibold">3+ Years</span>
                </div>
              </div>
            </div>
            <div className="scroll-animate-right">
              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">👥</div>
                  <p className="text-gray-700 font-semibold">Team Collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose{' '}
              <span className="hollow-text-pink">
                Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine human creativity with AI intelligence to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <div className={item.textColor}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {item.title}
                  </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our{' '}
              <span className="hollow-text-pink">
                Founders
              </span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-animate">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
                    JP
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Jay Patel</h3>
                  <p className="text-xl text-purple-600 font-semibold mb-4">Co-Founder</p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "I co-founded TruVixo with a vision to democratize AI-powered growth for businesses of all sizes. Having spent over a decade in the tech industry, I've seen too many companies struggle with outdated approaches to growth and innovation."
                </p>
              </div>
              <div className="bg-gradient-to-r from-pink-100 to-yellow-100 rounded-3xl p-8 md:p-12">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
                    PP
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Preet Patel</h3>
                  <p className="text-xl text-pink-600 font-semibold mb-4">Co-Founder</p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Our mission is to bridge the gap between human creativity and AI intelligence, creating solutions that not only work but evolve with your business. We're not just service providers – we're your partners in transformation."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Focus Areas Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="hollow-text-pink">
                Focus
              </span>
              {' '}Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across all aspects of business growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {focusAreas.map((area, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 scroll-animate-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 ${area.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <div className="text-gray-700">
                    {area.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  {area.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section with Infinite Carousel (Desktop Only) */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We{' '}
              <span className="hollow-text-pink">
                Serve
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to enterprises, we help businesses across all sectors
            </p>
          </div>

          {/* Desktop: Infinite Carousel */}
          <div className="hidden lg:block">
            <div className="marquee">
              <div className="marquee-content">
                {[...industries, ...industries].map((industry, index) => (
                  <div 
                    key={`desktop-${index}`}
                    className="sliding-item mx-4 flex-shrink-0"
                  >
                    <div className="group bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-48">
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {industry.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 text-lg">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Grid */}
          <div className="lg:hidden grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 scroll-animate-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Diagram */}
      <ProcessDiagram 
        title="Our Process"
        subtitle="How we deliver exceptional results"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to{' '}
              <span className="hollow-text-pink">
                Transform
              </span>
              {' '}Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join 500+ businesses already growing with TruVixo's AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-purple-600 font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-block text-center">
                Get Started Today
              </Link>
              <Link href="/contact" className="bg-white text-purple-600 font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-block text-center">
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}