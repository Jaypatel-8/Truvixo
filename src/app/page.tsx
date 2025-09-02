'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Play, CheckCircle, Star, Users, Target, Zap, BarChart3, Globe, Building2, Linkedin, Mail, MessageSquare, Palette, Sparkles, Rocket, TrendingUp, Award, MousePointer, Zap as Lightning, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow, EffectCards, EffectCreative } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-cards'
import 'swiper/css/effect-creative'

export default function Home() {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "TruVixo transformed our digital presence completely. Our lead generation increased by 300% in just 3 months!",
      rating: 5,
      avatar: "SJ",
      color: "truvixo-blue"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      content: "The creative design team at TruVixo is phenomenal. They understood our vision and brought it to life perfectly.",
      rating: 5,
      avatar: "MC",
      color: "truvixo-purple"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, InnovateLab",
      content: "Working with TruVixo was a game-changer. Their white-label solutions helped us scale our business rapidly.",
      rating: 5,
      avatar: "ER",
      color: "truvixo-red"
    },
    {
      name: "David Thompson",
      role: "VP Sales, Enterprise Solutions",
      content: "The brand strategy work TruVixo did for us was exceptional. Our market positioning improved dramatically.",
      rating: 5,
      avatar: "DT",
      color: "truvixo-yellow"
    },
    {
      name: "Lisa Wang",
      role: "CMO, Digital Dynamics",
      content: "TruVixo's digital innovation approach is cutting-edge. They delivered results beyond our expectations.",
      rating: 5,
      avatar: "LW",
      color: "truvixo-blue"
    },
    {
      name: "James Wilson",
      role: "CEO, FutureTech",
      content: "The team's expertise in lead generation is unmatched. We saw immediate ROI from their campaigns.",
      rating: 5,
      avatar: "JW",
      color: "truvixo-purple"
    },
    {
      name: "Anna Martinez",
      role: "Head of Marketing, ScaleUp",
      content: "TruVixo's creative design capabilities are outstanding. They made our brand stand out in a crowded market.",
      rating: 5,
      avatar: "AM",
      color: "truvixo-red"
    },
    {
      name: "Robert Kim",
      role: "Founder, NextGen Solutions",
      content: "The white-label services allowed us to offer premium solutions under our own brand. Highly recommended!",
      rating: 5,
      avatar: "RK",
      color: "truvixo-yellow"
    }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Enhanced Hero Section with Advanced Animations */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 flex items-center justify-center overflow-hidden py-20">
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
                          <h1 className="text-display-2xl font-display text-gray-900 mb-6 leading-tight">
              Experience the{' '}
              <span className="animate-text-shimmer bg-gradient-to-r from-truvixo-blue via-truvixo-purple to-truvixo-red bg-clip-text text-transparent">3X</span>{' '}
              meeting multiplier
            </h1>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-display-lg font-display text-truvixo-blue">with</span>
                <div className="relative">
                  <span className="text-display-xl font-display text-truvixo-blue animate-bounce-in">
                    TruVixo
                  </span>
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-truvixo-yellow animate-pulse" />
                </div>
              </div>
            </div>

            {/* Enhanced Subtitle */}
            <p className="text-body-lg font-primary text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
              More outreach channels — more chances to succeed in sales.{' '}
              <span className="text-truvixo-purple font-semibold">Transform your business today.</span>
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group btn-modern bg-gradient-to-r from-truvixo-blue to-truvixo-purple text-white font-display font-bold py-5 px-10 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                  Generate Leads
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
              <button className="group btn-modern glass text-truvixo-blue font-display font-bold py-5 px-10 rounded-2xl hover:shadow-2xl transition-all duration-500 border-2 border-truvixo-blue hover:bg-truvixo-blue hover:text-white">
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

      {/* Modern Grid Services Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-8 shadow-lg">
              <Sparkles className="w-5 h-5 text-truvixo-blue animate-pulse" />
              <span className="text-sm font-primary font-semibold text-gray-700">Our Premium Services</span>
            </div>
            <h2 className="text-display-xl font-display text-gray-900 mb-6 leading-tight">
              Transform Your Business with{' '}
              <span className="animate-text-shimmer bg-gradient-to-r from-truvixo-blue via-truvixo-purple to-truvixo-red bg-clip-text text-transparent">
                Expert Solutions
              </span>
            </h2>
            <p className="text-body-lg font-primary text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We deliver cutting-edge digital solutions that drive growth, enhance brand presence, and maximize your ROI
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Container */}
                <div className="relative card-modern p-8 h-full overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-truvixo-blue/5 via-transparent to-truvixo-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Service Number Badge */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-truvixo-blue to-truvixo-purple rounded-2xl flex items-center justify-center text-white font-black text-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {service.number.replace('.', '')}
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-truvixo-blue/10 to-truvixo-purple/10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <div className="text-truvixo-blue group-hover:text-truvixo-purple transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-display-md font-display text-gray-900 mb-3 group-hover:text-truvixo-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    <h4 className="text-body-lg text-truvixo-purple font-primary font-semibold mb-4">
                      {service.subtitle}
                    </h4>
                    <p className="text-body-sm font-primary text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-truvixo-blue to-truvixo-purple rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full btn-modern bg-gradient-to-r from-truvixo-blue to-truvixo-purple text-white font-display font-bold py-3 px-6 rounded-2xl hover:shadow-xl hover:from-truvixo-purple hover:to-truvixo-red transition-all duration-300 transform hover:scale-105 group-hover:-translate-y-1 relative overflow-hidden">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-truvixo-purple to-truvixo-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-truvixo-blue group-hover:to-truvixo-purple transition-all duration-500"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-truvixo-yellow rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-truvixo-red rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" style={{ animationDelay: '0.5s' }}></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-truvixo-blue to-truvixo-purple text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Rocket className="w-6 h-6" />
              <span className="font-bold text-lg">Explore All Services</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50/40 via-pink-50/30 to-red-50/40 relative overflow-hidden">
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
      <section className="py-24 bg-gradient-to-br from-yellow-50/30 via-blue-50/20 to-purple-50/30 overflow-hidden">
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
                    className="sliding-item mx-6 flex-shrink-0"
                  >
                    <div className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className={`text-${capability.color} group-hover:animate-bounce`}>
                          {capability.icon}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed font-medium w-40 text-center whitespace-nowrap overflow-hidden text-ellipsis">{capability.name}</p>
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
                    className="sliding-item mx-6 flex-shrink-0"
                  >
                    <div className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className={`text-${capability.color} group-hover:animate-bounce`}>
                          {capability.icon}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed font-medium w-40 text-center whitespace-nowrap overflow-hidden text-ellipsis">{capability.name}</p>
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
                    className="sliding-item mx-6 flex-shrink-0"
                  >
                    <div className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className={`text-${capability.color} group-hover:animate-bounce`}>
                          {capability.icon}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed font-medium w-40 text-center whitespace-nowrap overflow-hidden text-ellipsis">{capability.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section with Infinite Loops */}
      <section className="py-24 bg-gradient-to-br from-pink-50/40 via-purple-50/30 to-blue-50/40 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-truvixo-blue/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-truvixo-purple/10 rounded-full animate-float-delay-1"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <h2 className="text-6xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight">
                What Our <span className="text-truvixo-blue animate-pulse-slow">Clients</span> Say
              </h2>
              <div className="w-24 h-1 bg-truvixo-blue mx-auto mb-8 animate-scale-in"></div>
            </div>
            <p className="text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Don't just take our word for it. Here's what our satisfied clients have to say about{' '}
              <span className="text-truvixo-purple font-bold">TruVixo's impact</span>
            </p>
          </div>

          {/* Single Infinite Loop Testimonials */}
          <div className="relative">
            <div className="marquee">
              <div className="marquee-content">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div key={index} className="sliding-item mx-8 flex-shrink-0">
                    <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 w-[420px] hover:scale-105 border border-white/50">
                      {/* Avatar and Rating */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-${testimonial.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-truvixo-yellow text-truvixo-yellow" />
                            ))}
                          </div>
                          <h4 className="font-bold text-gray-900 text-lg truncate">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500 truncate">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      {/* Testimonial Content */}
                      <p className="text-gray-700 leading-relaxed text-base italic line-clamp-4">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High Contrast CTA Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-truvixo-blue/30 via-transparent to-truvixo-purple/30"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-4 h-4 bg-truvixo-blue rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-truvixo-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-40 w-5 h-5 bg-truvixo-yellow rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-truvixo-red rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            {/* High Contrast Heading */}
            <div className="mb-8">
              <h2 className="text-display-2xl font-display mb-6 leading-tight">
                Ready to{' '}
                <span className="animate-text-shimmer bg-gradient-to-r from-truvixo-blue via-truvixo-purple to-truvixo-yellow bg-clip-text text-transparent">
                  Transform?
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-truvixo-blue to-truvixo-purple mx-auto mb-8"></div>
            </div>
            
            {/* Contrasting Subtitle */}
            <p className="text-display-lg font-primary text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">
              Join <span className="text-truvixo-yellow font-display font-bold">500+ businesses</span> already growing with{' '}
              <span className="text-truvixo-blue font-display font-bold">TruVixo</span>
            </p>
            
            {/* High Contrast CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
              <button className="group btn-modern bg-gradient-to-r from-truvixo-blue to-truvixo-purple text-white font-display font-bold py-6 px-12 rounded-2xl hover:shadow-2xl hover:shadow-truvixo-blue/50 transition-all duration-300 transform hover:scale-105 text-xl relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-4">
                  <Rocket className="w-7 h-7 group-hover:animate-bounce" />
                  Start Free Trial
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-truvixo-purple to-truvixo-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group btn-modern border-2 border-white text-white font-display font-bold py-6 px-12 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-xl hover:shadow-2xl">
                <span className="flex items-center gap-4">
                  <MessageSquare className="w-7 h-7 group-hover:animate-pulse" />
                  Schedule Demo
                </span>
              </button>
            </div>
            
            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-truvixo-blue to-truvixo-purple rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-black text-white mb-2 group-hover:text-truvixo-yellow transition-colors duration-300">500+</div>
                <div className="text-gray-400 text-lg font-medium">Projects Completed</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-truvixo-purple to-truvixo-red rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-black text-white mb-2 group-hover:text-truvixo-yellow transition-colors duration-300">98%</div>
                <div className="text-gray-400 text-lg font-medium">Client Satisfaction</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-truvixo-red to-truvixo-yellow rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-black text-white mb-2 group-hover:text-truvixo-yellow transition-colors duration-300">7+</div>
                <div className="text-gray-400 text-lg font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}