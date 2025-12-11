'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Brain, Zap, Shield, TrendingUp, Cloud, Code, Database, Target, Building2, Heart, ShoppingCart, Truck, Home, GraduationCap, Users, Rocket, Settings, Phone, Mail, Calendar, Sparkles, Bot, Cpu, CheckCircle } from 'lucide-react'
import dynamic from 'next/dynamic'
import Technologies from '@/components/Technologies'
import FAQDropdown from '@/components/FAQDropdown'
import Clientele from '@/components/Clientele'
import ContactSection from '@/components/ContactSection'
import ProcessDiagram from '@/components/ProcessDiagram'
import SEOLocationSection from '@/components/SEOLocationSection'
import { getFAQsForPage } from '@/lib/pageData'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function AIDevelopmentServices() {
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

  // AI Development Services with colored icons
  const services = [
    {
      title: 'Machine Learning Models',
      description: 'Custom ML models tailored to your specific business needs and data',
      icon: <Brain className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'LLM Integration',
      description: 'Integrate GPT, Claude, Gemini, and other large language models into your applications',
      icon: <Code className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'AI-Powered Automation',
      description: 'Automate workflows and processes with intelligent AI systems',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Predictive Analytics',
      description: 'Build predictive models for forecasting and data-driven decision making',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual analysis solutions',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Natural Language Processing',
      description: 'NLP solutions for text analysis, sentiment analysis, and language understanding',
      icon: <Database className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI assistants for customer support and engagement',
      icon: <Users className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'RAG Systems',
      description: 'Retrieval-Augmented Generation systems for enhanced AI capabilities',
      icon: <Rocket className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Brain className="w-7 h-7" strokeWidth={2} />, 
      title: 'Custom AI Models', 
      description: 'Tailored AI solutions built specifically for your business needs, not generic solutions',
      color: '#5e2cb6'
    },
    { 
      icon: <Target className="w-7 h-7" strokeWidth={2} />, 
      title: 'End-to-End Development', 
      description: 'Complete AI development lifecycle from data collection to deployment',
      color: '#c91a6f'
    },
    { 
      icon: <Cloud className="w-7 h-7" strokeWidth={2} />, 
      title: 'Scalable Infrastructure', 
      description: 'Cloud-based AI systems built to scale with your business growth',
      color: '#fecc4d'
    },
    { 
      icon: <Code className="w-7 h-7" strokeWidth={2} />, 
      title: 'LLM Expertise', 
      description: 'Expertise in GPT, Claude, Gemini, and other advanced language models',
      color: '#10b981'
    },
    { 
      icon: <Shield className="w-7 h-7" strokeWidth={2} />, 
      title: 'Enterprise Security', 
      description: 'Enterprise-grade security and compliance for AI systems',
      color: '#5e2cb6'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'Rapid Deployment', 
      description: 'Agile methodology for faster AI solution deployment',
      color: '#c91a6f'
    }
  ]

  const technologies = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00', category: 'backend' as const },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: '#EE4C2C', category: 'backend' as const },
    { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', color: '#009688', category: 'backend' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'database' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D', category: 'database' as const },
    { name: 'OpenAI API', logo: 'https://openai.com/favicon.ico', color: '#10A37F', category: 'backend' as const }
  ]

  const processSteps = [
    {
      title: 'AI Strategy & Planning',
      description: 'Define AI objectives, identify use cases, and create a roadmap for AI implementation',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Data Collection & Preparation',
      description: 'Gather, clean, and prepare data for training AI models with proper data governance',
      icon: <Database className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Model Development',
      description: 'Develop and train custom AI models using machine learning and deep learning techniques',
      icon: <Brain className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Integration & Deployment',
      description: 'Integrate AI models into your applications and deploy to production with monitoring',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Testing & Validation',
      description: 'Validate model performance, accuracy, and reliability through comprehensive testing',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Optimization & Maintenance',
      description: 'Continuously monitor, optimize, and retrain models to maintain performance',
      icon: <Settings className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const industries = [
    { name: 'Fintech', icon: <Building2 className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Healthcare', icon: <Heart className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'Retail', icon: <ShoppingCart className="w-7 h-7" strokeWidth={2} />, color: '#fecc4d' },
    { name: 'Logistics', icon: <Truck className="w-7 h-7" strokeWidth={2} />, color: '#10b981' },
    { name: 'Real Estate', icon: <Home className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Education', icon: <GraduationCap className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' }
  ]

  const faqs = getFAQsForPage('ai-development-services')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      {/* 1. Hero Section - Modern & Sleek */}
      <section className="relative min-h-[85vh] bg-white flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#fecc4d]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e2cb6]/10 rounded-full mb-6">
                <Brain className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#5e2cb6]">AI Development</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Best AI Development{' '}
                <span className="hollow-text-brand block mt-2">
                  Services Company
                </span>
                <span className="text-2xl md:text-3xl font-semibold text-gray-600 block mt-4">
                  Global Services • Worldwide
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                We build custom AI-powered applications that automate workflows, improve decision-making, and reduce operational costs. Transform your business with intelligent AI solutions.
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

            {/* Right Visual - Service Cards Preview */}
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

      {/* 2. Our Client Section */}
      {isMounted && <div className="mt-12"><Clientele /></div>}

      {/* 3. Services Section - Modern Grid with Colored Icons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              AI Development{' '}
              <span className="hollow-text-brand">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
                style={{ 
                  borderColor: service.color + '40',
                  '--hover-border': service.color
                } as React.CSSProperties}
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

      {/* 4. Why Choose Section - Modern Grid Design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Why Choose AI{' '}
              <span className="hollow-text-brand">
                Development Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver enterprise-grade AI solutions that are built specifically for your business, ensuring optimal performance, scalability, and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* 5. Industries Section - Compact Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Industries We{' '}
              <span className="hollow-text-brand">
                Specialize
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Serving diverse industries with tailored AI solutions
            </p>
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

      {/* 6. Get a Quote Section - Modern CTA */}
      <section className="py-20 bg-[#5e2cb6] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fecc4d]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Build Your{' '}
              <span className="hollow-text-white">
                AI Solution?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              Get in touch and let's discuss how we can transform your business with AI solutions.
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

      {/* 7. Technologies We Use */}
      <Technologies technologies={technologies} />

      {/* Additional Content - Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              AI Development{' '}
              <span className="hollow-text-brand">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how AI development can transform your business and unlock new possibilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent Automation</h3>
              <p className="text-gray-600">
                Automate complex tasks and decision-making processes with AI. Reduce manual work, improve accuracy, and free up your team to focus on strategic initiatives.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Extract valuable insights from your data with AI-powered analytics. Make better decisions, identify patterns, and predict trends to stay ahead of the competition.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#fecc4d]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#fecc4d]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enhanced Customer Experience</h3>
              <p className="text-gray-600">
                Deliver personalized experiences with AI-powered chatbots, recommendation engines, and customer service automation that understands and responds to customer needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#10b981]/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#10b981]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Advantage</h3>
              <p className="text-gray-600">
                Gain a competitive edge with AI capabilities that your competitors may not have. Leverage cutting-edge technology to innovate and differentiate your business.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Reduction</h3>
              <p className="text-gray-600">
                Reduce operational costs by automating repetitive tasks and optimizing processes. AI can handle tasks 24/7 without breaks, reducing the need for additional staff.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">
                Build AI systems that scale with your business. Cloud-based AI infrastructure can handle growing data volumes and user demands without major rework.
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
              AI Development{' '}
              <span className="hollow-text-brand">
                Use Cases
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how businesses leverage AI to solve complex challenges and drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#5e2cb6]/5 to-[#c91a6f]/5 rounded-xl p-8 border border-[#5e2cb6]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Chatbots & Virtual Assistants</h3>
              <p className="text-gray-600 mb-4">
                Build AI-powered chatbots that provide 24/7 customer support, answer questions, and handle routine inquiries. Reduce support costs while improving response times.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Natural language understanding</li>
                <li>• Multi-channel support</li>
                <li>• Context-aware conversations</li>
                <li>• Integration with CRM systems</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#fecc4d]/5 to-[#10b981]/5 rounded-xl p-8 border border-[#fecc4d]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Analytics & Forecasting</h3>
              <p className="text-gray-600 mb-4">
                Use machine learning to predict future trends, forecast demand, and identify opportunities. Make data-driven decisions with confidence.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sales forecasting</li>
                <li>• Demand prediction</li>
                <li>• Risk assessment</li>
                <li>• Market trend analysis</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#10b981]/5 to-[#5e2cb6]/5 rounded-xl p-8 border border-[#10b981]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Computer Vision Applications</h3>
              <p className="text-gray-600 mb-4">
                Implement image recognition, object detection, and visual analysis for quality control, security, and automation in manufacturing and retail.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quality inspection</li>
                <li>• Facial recognition</li>
                <li>• Document processing</li>
                <li>• Inventory management</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#c91a6f]/5 to-[#fecc4d]/5 rounded-xl p-8 border border-[#c91a6f]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recommendation Systems</h3>
              <p className="text-gray-600 mb-4">
                Build personalized recommendation engines that suggest products, content, or services based on user behavior and preferences.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Product recommendations</li>
                <li>• Content personalization</li>
                <li>• Cross-selling opportunities</li>
                <li>• User behavior analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Process Diagram */}
      <ProcessDiagram 
        title="AI Development Process"
        subtitle="From strategy to deployment, we ensure intelligent solutions at every step"
        steps={processSteps}
      />

      {/* 9. FAQs */}
      <FAQDropdown faqs={faqs} />

      {/* 10. SEO Location Section */}
      <SEOLocationSection serviceName="AI Development Services" />

      {/* 11. Contact Section */}
      <ContactSection 
        title="Get in Touch"
        description="Have a project in mind? Let's discuss how we can help transform your business with AI solutions."
      />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}

