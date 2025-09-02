'use client'

import { useEffect } from 'react'
import { ArrowRight, Play, CheckCircle, Star, Users, Target, Zap, BarChart3, Globe, Building2, Linkedin, Mail, MessageSquare, Palette, Sparkles, Rocket, TrendingUp, Award, MousePointer, Zap as Lightning } from 'lucide-react'

export default function Home() {
  useEffect(() => {
    let currentSlide = 0
    const totalSlides = 5 // Number of services
    const container = document.getElementById('servicesContainer')
    const dots = document.querySelectorAll('[data-dot]')
    
    const slideToService = (index: number) => {
      if (container) {
        const translateX = -index * 50 // 50% for each slide (2 services per view)
        container.style.transform = `translateX(${translateX}%)`
        currentSlide = index
        
        // Update dots
        dots.forEach((dot, i) => {
          if (i === index) {
            dot.classList.add('bg-truvixo-blue', 'scale-125')
            dot.classList.remove('bg-gray-300')
          } else {
            dot.classList.remove('bg-truvixo-blue', 'scale-125')
            dot.classList.add('bg-gray-300')
          }
        })
      }
    }
    
    const nextSlide = () => {
      const next = (currentSlide + 1) % totalSlides
      slideToService(next)
    }
    
    const prevSlide = () => {
      const prev = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1
      slideToService(prev)
    }
    
    // Add event listeners
    const nextBtn = document.getElementById('nextServices')
    const prevBtn = document.getElementById('prevServices')
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide)
    if (prevBtn) prevBtn.addEventListener('click', prevSlide)
    
    // Auto-slide every 5 seconds
    const autoSlide = setInterval(nextSlide, 5000)
    
    return () => {
      if (nextBtn) nextBtn.removeEventListener('click', nextSlide)
      if (prevBtn) prevBtn.removeEventListener('click', prevSlide)
      clearInterval(autoSlide)
    }
  }, [])
  const services = [
    {
      number: '01.',
      title: 'Lead Generation',
      subtitle: 'Boost Your Sales Quota',
      description: 'Get more leads by improving cold outreach conversions. Warm up before outreach. Omnichannel campaigns. GIF & Image hyper-personalization. Campaign priorities.',
      features: [
        'Get more leads by improving cold outreach conversions',
        'Work smarter, not harder, by automating routine tasks',
        'Choose a simple solution for complex tasks'
      ],
      icon: <Target className="w-12 h-12" />,
      color: 'truvixo-blue',
      gradient: 'gradient-bg'
    },
    {
      number: '02.',
      title: 'Brand Strategy',
      subtitle: 'Find Your True North',
      description: 'Find your ideal brand positioning in several simple clicks. Build-in strategy tools. Smart filters of opportunities. Brand data clean-up.',
      features: [
        'Find your ideal brand positioning in several simple clicks',
        'Reach your brand goals faster by increasing engagement rates',
        'Improve your brand results based on truthful analytics'
      ],
      icon: <BarChart3 className="w-12 h-12" />,
      color: 'truvixo-purple',
      gradient: 'gradient-bg-2'
    },
    {
      number: '03.',
      title: 'Creative Design',
      subtitle: 'Visual Excellence',
      description: 'Achieve creative excellence for your business ideas. Extended design capabilities. Data-driven insights. Different campaign types.',
      features: [
        'Find gold-mine creative opportunities with smart algorithms',
        'Enhance your brand engagement rate by up to 35%',
        'Improve your campaign results and manage your pipeline'
      ],
      icon: <Palette className="w-12 h-12" />,
      color: 'truvixo-red',
      gradient: 'gradient-bg-3'
    },
    {
      number: '04.',
      title: 'Digital Innovation',
      subtitle: 'Transform Raw Emotion',
      description: 'Grow your digital presence with fewer efforts. Extended capabilities. Different campaign types. Hyper-personalization. Top-notch service.',
      features: [
        'Increase your digital ROI by generating more qualified leads',
        'Get the most of team management',
        'Keep your digital process organized with integrations'
      ],
      icon: <Globe className="w-12 h-12" />,
      color: 'truvixo-yellow',
      gradient: 'gradient-bg-4'
    },
    {
      number: '05.',
      title: 'White Label',
      subtitle: 'Do Digital Marketing Under Your Own Brand',
      description: 'Build your brand reputation by delivering high-quality digital solutions. Seamless setup. Your own domain to win trust. Dedicated customer success manager.',
      features: [
        'Build your brand reputation by delivering high-quality solutions',
        'Upsell your customers by offering different pricing plans',
        'Increase your agency\'s ROI by generating more qualified leads'
      ],
      icon: <Building2 className="w-12 h-12" />,
      color: 'truvixo-blue',
      gradient: 'gradient-bg'
    }
  ]

  const features = [
    {
      title: 'Digital Marketing',
      description: 'Bypass digital limits. Send up to 300+ campaigns per week in a safe way with TruVixo\'s growth hacking features.',
      icon: <Linkedin className="w-8 h-8" />,
      color: 'truvixo-blue',
      stat: '300+',
      gradient: 'gradient-bg'
    },
    {
      title: 'Email Marketing',
      description: 'Enhance your follow-up strategy. Get triple the open rates with multi-channel prospecting combined.',
      icon: <Mail className="w-8 h-8" />,
      color: 'truvixo-purple',
      stat: '3x',
      gradient: 'gradient-bg-2'
    },
    {
      title: 'Smart Sequences',
      description: 'Increase engagement rates. Engage your cold audience before outreach with actions that make prospects more likely to respond.',
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'truvixo-red',
      stat: '85%',
      gradient: 'gradient-bg-3'
    }
  ]

  const capabilities = [
    { name: 'Detailed metrics and reporting', icon: <BarChart3 className="w-6 h-6" />, color: 'truvixo-blue' },
    { name: 'Role and permission management', icon: <Users className="w-6 h-6" />, color: 'truvixo-purple' },
    { name: 'Multiple accounts management', icon: <Building2 className="w-6 h-6" />, color: 'truvixo-red' },
    { name: 'White labeling', icon: <Award className="w-6 h-6" />, color: 'truvixo-yellow' },
    { name: 'Unlimited number of campaigns', icon: <Target className="w-6 h-6" />, color: 'truvixo-blue' },
    { name: 'Campaign A/B testing', icon: <Zap className="w-6 h-6" />, color: 'truvixo-purple' },
    { name: 'Webhook integrations', icon: <Globe className="w-6 h-6" />, color: 'truvixo-red' },
    { name: 'Customer success team', icon: <MessageSquare className="w-6 h-6" />, color: 'truvixo-yellow' },
    { name: 'Specialized customer support team', icon: <Users className="w-6 h-6" />, color: 'truvixo-blue' },
    { name: 'Export Campaign Data Options', icon: <BarChart3 className="w-6 h-6" />, color: 'truvixo-purple' },
    { name: 'Campaign Priority Management', icon: <Target className="w-6 h-6" />, color: 'truvixo-red' },
    { name: 'Built-in Scraping Features', icon: <Zap className="w-6 h-6" />, color: 'truvixo-yellow' },
    { name: 'Variety of Campaigns', icon: <Globe className="w-6 h-6" />, color: 'truvixo-blue' },
    { name: 'Smart Campaign Builder', icon: <Palette className="w-6 h-6" />, color: 'truvixo-purple' },
    { name: 'Duplication Security', icon: <Award className="w-6 h-6" />, color: 'truvixo-red' }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Award className="w-6 h-6" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '50+', label: 'Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '7+', label: 'Years Experience', icon: <TrendingUp className="w-6 h-6" /> }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Enhanced Hero Section with Advanced Animations */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-red-50 flex items-center justify-center overflow-hidden py-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-truvixo-blue/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-truvixo-purple/20 rounded-full animate-float-delay-1"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-truvixo-red/20 rounded-full animate-float-delay-2"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-truvixo-yellow/20 rounded-full animate-float-delay-3"></div>
          
          {/* Floating Icons */}
          <div className="absolute top-1/4 left-1/4 animate-rotate-slow">
            <MousePointer className="w-8 h-8 text-truvixo-blue/30" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-rotate-slow" style={{ animationDirection: 'reverse' }}>
            <Lightning className="w-6 h-6 text-truvixo-purple/30" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-rotate-slow">
            <Zap className="w-7 h-7 text-truvixo-red/30" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center relative z-10">
          <div className="animate-fade-in">
            {/* Main Heading with Enhanced Typography */}
            <div className="mb-8">
              <h1 className="text-6xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight">
                Experience the{' '}
                <span className="gradient-text animate-pulse-slow">3X</span>{' '}
                meeting multiplier
              </h1>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl lg:text-4xl font-bold text-truvixo-blue">with</span>
                <div className="relative">
                  <span className="text-4xl lg:text-6xl font-black text-truvixo-blue animate-bounce-in">
                    TruVixo
                  </span>
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-truvixo-yellow animate-pulse-slow" />
                </div>
              </div>
            </div>

            {/* Enhanced Subtitle */}
            <p className="text-xl lg:text-3xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
              More outreach channels — more chances to succeed in sales.{' '}
              <span className="text-truvixo-purple font-semibold">Transform your business today.</span>
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group bg-gradient-to-r from-truvixo-blue to-truvixo-purple text-white font-bold py-5 px-10 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 btn-animated">
                <span className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                  Generate Leads
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
              <button className="group bg-white text-truvixo-blue font-bold py-5 px-10 rounded-xl hover:shadow-2xl transition-all duration-500 border-2 border-truvixo-blue hover:bg-truvixo-blue hover:text-white">
                <span className="flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  Try a demo now
                </span>
              </button>
            </div>

            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-truvixo-blue group-hover:animate-pulse">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-truvixo-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-truvixo-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-truvixo-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-red-50 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-truvixo-blue/10 to-truvixo-purple/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          {/* Animated Background Shapes */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-truvixo-blue/20 rounded-full animate-float"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-truvixo-purple/20 rounded-full animate-float-delay-1"></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 bg-truvixo-red/20 rounded-full animate-float-delay-2"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-truvixo-yellow/20 rounded-full animate-float-delay-3"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="mb-8">
              <h2 className="text-6xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight">
                Our <span className="text-truvixo-blue animate-pulse-slow">Services</span>
              </h2>
              <div className="w-24 h-1 bg-truvixo-blue mx-auto mb-8 animate-scale-in"></div>
            </div>
            <p className="text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium">
              Comprehensive solutions designed to transform your business and drive{' '}
              <span className="text-truvixo-purple font-bold">exponential growth</span>
            </p>
          </div>

          {/* Services Slider Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mb-12">
              <button 
                id="prevServices"
                className="group bg-white text-truvixo-blue font-bold py-3 px-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-truvixo-blue"
              >
                <span className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
                  Previous
                </span>
              </button>
              <button 
                id="nextServices"
                className="group bg-truvixo-blue text-white font-bold py-3 px-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Next
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Services Grid with Sliding Effect */}
            <div className="overflow-hidden">
              <div 
                id="servicesContainer"
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: 'translateX(0%)' }}
              >
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="w-full lg:w-1/2 flex-shrink-0 px-4"
                  >
                    <div className="group interactive-card animate-fade-in-up hover:scale-105 transition-all duration-500 hover:animate-pulse-slow">
                      <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500">
                        {/* Service Header */}
                        <div className={`${service.gradient} p-8 text-white relative overflow-hidden`}>
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                          
                          <div className="flex items-start gap-6 relative z-10">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <div className="text-white">
                                {service.icon}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="text-6xl font-black text-white/30 mb-2">{service.number}</div>
                              <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                              <h4 className="text-xl font-semibold text-white/90">{service.subtitle}</h4>
                            </div>
                          </div>
                        </div>

                        {/* Service Content */}
                        <div className="p-8">
                          <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                          
                          <ul className="space-y-4 mb-8">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <button className="w-full bg-truvixo-blue text-white font-bold py-4 px-8 rounded-xl hover:bg-truvixo-purple transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg">
                            <span className="flex items-center justify-center gap-2">
                              Get Started
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-12">
              {services.map((_, index) => (
                <button
                  key={index}
                  data-dot
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === 0 ? 'bg-truvixo-blue scale-125' : 'bg-gray-300 hover:bg-truvixo-blue/50'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="mb-16 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              Struggling with digital marketing automation?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
              TruVixo helps you navigate the world of automated digital marketing and handle all the problems below in the easiest and fastest way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in-up interactive-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-truvixo-yellow text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse">
                    {feature.stat}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-truvixo-blue transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                
                <button className="text-truvixo-blue font-bold hover:text-gray-800 transition-colors duration-300 flex items-center gap-2 mx-auto group-hover:translate-x-2 transition-transform duration-300">
                  Learn more about {feature.title}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Capabilities Section with Infinite Sliding */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              One tool to rule them all!{' '}
              <span className="gradient-text">✨</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
              We combined everything you need for successful digital marketing into one tool to maximize your outreach potential with TruVixo.
            </p>
          </div>

          {/* Infinite Sliding Capabilities */}
          <div className="relative">
            {/* First Row - Left to Right */}
            <div className="marquee mb-8">
              <div className="marquee-content">
                {[...capabilities, ...capabilities].map((capability, index) => (
                  <div 
                    key={`row1-${index}`}
                    className="sliding-item mx-4 flex-shrink-0"
                  >
                    <div className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className={`text-${capability.color} group-hover:animate-bounce`}>
                          {capability.icon}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-tight font-medium w-32">{capability.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Right to Left */}
            <div className="marquee mb-8">
              <div className="marquee-content" style={{ animationDirection: 'reverse' }}>
                {[...capabilities, ...capabilities].map((capability, index) => (
                  <div 
                    key={`row2-${index}`}
                    className="sliding-item mx-4 flex-shrink-0"
                  >
                    <div className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className={`text-${capability.color} group-hover:animate-bounce`}>
                          {capability.icon}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-tight font-medium w-32">{capability.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Third Row - Left to Right (Faster) */}
            <div className="marquee">
              <div className="marquee-content" style={{ animationDuration: '20s' }}>
                {[...capabilities, ...capabilities].map((capability, index) => (
                  <div 
                    key={`row3-${index}`}
                    className="sliding-item mx-4 flex-shrink-0"
                  >
                    <div className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className={`text-${capability.color} group-hover:animate-bounce`}>
                          {capability.icon}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-tight font-medium w-32">{capability.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sliding Testimonials Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="relative">
          <div className="marquee">
            <div className="marquee-content">
              {[
                "🚀 500+ Projects Completed",
                "⭐ 98% Client Satisfaction", 
                "💼 50+ Team Members",
                "🎯 7+ Years Experience",
                "🔥 300% Average ROI",
                "✨ Award-Winning Design",
                "🚀 500+ Projects Completed",
                "⭐ 98% Client Satisfaction", 
                "💼 50+ Team Members",
                "🎯 7+ Years Experience",
                "🔥 300% Average ROI",
                "✨ Award-Winning Design"
              ].map((testimonial, index) => (
                <div key={index} className="sliding-item mx-8 flex-shrink-0">
                  <div className="bg-white rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <p className="text-lg font-semibold text-gray-800 whitespace-nowrap">
                      {testimonial}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-to-br from-truvixo-blue via-truvixo-purple to-truvixo-red text-white relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_50%)]"></div>
          
          {/* Animated Background Shapes */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-float-delay-1"></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 bg-white/10 rounded-full animate-float-delay-2"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-float-delay-3"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center relative z-10">
          <div className="animate-fade-in">
            {/* Enhanced Heading */}
            <div className="mb-12">
              <h2 className="text-6xl lg:text-8xl font-black mb-6 leading-tight">
                Ready to{' '}
                <span className="text-yellow-300 animate-pulse-slow">Transform</span>{' '}
                Your Business?
              </h2>
              <div className="w-24 h-1 bg-yellow-300 mx-auto mb-8 animate-scale-in"></div>
            </div>
            
            {/* Enhanced Subtitle */}
            <p className="text-2xl lg:text-3xl text-white/95 max-w-5xl mx-auto mb-16 leading-relaxed font-medium">
              Join 500+ successful businesses that have already transformed their digital presence with TruVixo.{' '}
              <span className="text-yellow-300 font-bold">Let's make it happen together.</span>
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
              <button className="group bg-white text-truvixo-blue font-black py-6 px-12 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 btn-animated text-lg">
                <span className="flex items-center gap-4">
                  <Rocket className="w-8 h-8 group-hover:animate-bounce" />
                  Book a Free Demo
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
              <button className="group border-3 border-white text-white font-black py-6 px-12 rounded-2xl hover:bg-white hover:text-truvixo-blue transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 text-lg">
                <span className="flex items-center gap-4">
                  <MessageSquare className="w-8 h-8 group-hover:animate-bounce" />
                  Chat with Us
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-yellow-300 mb-2">500+</div>
                <div className="text-white/80 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-yellow-300 mb-2">98%</div>
                <div className="text-white/80 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-yellow-300 mb-2">7+</div>
                <div className="text-white/80 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-yellow-300 mb-2">24/7</div>
                <div className="text-white/80 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}