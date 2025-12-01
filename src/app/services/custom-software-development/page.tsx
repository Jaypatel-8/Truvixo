'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Code, Shield, Zap, TrendingUp, Users, Building2, Heart, ShoppingCart, Truck, Factory, Home, Phone, Mail, Calendar, Cloud, Settings, Network, BarChart3, Rocket, CheckCircle, Target } from 'lucide-react'
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

export default function CustomSoftwareDevelopment() {
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

  // Custom Software Development Services with colored icons
  const services = [
    {
      title: 'Enterprise Application Development',
      description: 'Scalable enterprise solutions built for large organizations with complex requirements',
      icon: <Building2 className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'SaaS Platform Development',
      description: 'Cloud-based software-as-a-service platforms with subscription management',
      icon: <Cloud className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Custom CRM Development',
      description: 'Tailored customer relationship management systems for your business processes',
      icon: <Users className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'ERP System Development',
      description: 'Enterprise resource planning systems to streamline business operations',
      icon: <Settings className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'API Development & Integration',
      description: 'RESTful and GraphQL APIs with seamless third-party integrations',
      icon: <Code className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Legacy System Modernization',
      description: 'Transform outdated systems into modern, efficient solutions',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Microservices Architecture',
      description: 'Scalable microservices-based applications for enterprise needs',
      icon: <Network className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Custom Dashboard Development',
      description: 'Real-time analytics dashboards with data visualization',
      icon: <BarChart3 className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Code className="w-7 h-7" strokeWidth={2} />, 
      title: 'Fully Tailored Solutions', 
      description: 'Every solution is custom-built for your unique business requirements',
      color: '#5e2cb6'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'Modern Technology Stack', 
      description: 'We use the latest frameworks and tools for optimal performance',
      color: '#c91a6f'
    },
    { 
      icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, 
      title: 'Scalable Architecture', 
      description: 'Built to grow with your business needs',
      color: '#fecc4d'
    },
    { 
      icon: <Shield className="w-7 h-7" strokeWidth={2} />, 
      title: 'Enterprise Security', 
      description: 'Enterprise-grade security and compliance built-in',
      color: '#10b981'
    },
    { 
      icon: <Rocket className="w-7 h-7" strokeWidth={2} />, 
      title: 'Rapid Development', 
      description: 'Agile methodology for faster time-to-market',
      color: '#5e2cb6'
    },
    { 
      icon: <Users className="w-7 h-7" strokeWidth={2} />, 
      title: 'Long-Term Support', 
      description: 'Ongoing maintenance and updates included',
      color: '#c91a6f'
    }
  ]

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'frontend' as const },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
    { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', color: '#092E20', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'database' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const }
  ]

  const processSteps = [
    {
      title: 'Discovery & Planning',
      description: 'Understand your business requirements, goals, and technical constraints to create a comprehensive project plan',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Architecture Design',
      description: 'Design scalable, secure system architecture that aligns with your business needs and growth plans',
      icon: <Network className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Development & Integration',
      description: 'Build custom software with modern technologies, following agile methodology and best practices',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Testing & QA',
      description: 'Comprehensive testing including unit, integration, and user acceptance testing to ensure quality',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Deployment & Launch',
      description: 'Deploy your software to production with zero-downtime strategies and comprehensive monitoring',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and enhancements to keep your software running smoothly',
      icon: <Settings className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const industries = [
    { name: 'Fintech', icon: <Building2 className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Healthcare', icon: <Heart className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'Retail', icon: <ShoppingCart className="w-7 h-7" strokeWidth={2} />, color: '#fecc4d' },
    { name: 'Logistics', icon: <Truck className="w-7 h-7" strokeWidth={2} />, color: '#10b981' },
    { name: 'Manufacturing', icon: <Factory className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Real Estate', icon: <Home className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' }
  ]

  const faqs = getFAQsForPage('custom-software-development')

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
                <Code className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#5e2cb6]">Custom Development</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Custom Software{' '}
                <span className="hollow-text-brand block mt-2">
                  Development
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                We build scalable, secure, and high-performance custom software tailored to your business needs. Transform your ideas into powerful digital solutions.
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
              Our{' '}
              <span className="hollow-text-brand">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive custom software solutions tailored to your business needs
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
              Why Choose Custom Software{' '}
              <span className="hollow-text-brand">
                Development
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver enterprise-grade custom software solutions that are built specifically for your business, ensuring optimal performance, scalability, and security.
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
              Serving diverse industries with tailored software solutions
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
                Solution?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              Get in touch and let's discuss how we can transform your business with custom software solutions.
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
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
              Custom Software{' '}
              <span className="hollow-text-brand">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover how custom software development can transform your business operations and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 dark:bg-[#8b5cf6]/20 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-[#5e2cb6] dark:text-[#8b5cf6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Tailored to Your Needs</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Custom software is built specifically for your business processes, eliminating the need to adapt your workflow to off-the-shelf solutions. Every feature is designed to solve your unique challenges and support your business goals.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 dark:bg-[#c91a6f]/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Scalable Architecture</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Built with scalability in mind, custom software grows with your business. Whether you're adding users, processing more data, or expanding to new markets, your software can scale seamlessly without major rewrites.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#fecc4d]/10 dark:bg-[#fecc4d]/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#fecc4d]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Enhanced Security</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Custom software provides better security control. You can implement security measures specific to your industry requirements and data sensitivity, reducing the risk of breaches and ensuring compliance.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#10b981]/10 dark:bg-[#10b981]/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#10b981]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Competitive Advantage</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Custom software gives you unique capabilities that competitors using generic solutions don't have. This differentiation can be a significant competitive advantage in your market.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 dark:bg-[#8b5cf6]/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#5e2cb6] dark:text-[#8b5cf6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Improved Efficiency</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Streamline operations and automate repetitive tasks with custom workflows. Reduce manual errors, save time, and increase productivity across your organization with software designed for your specific processes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 dark:bg-[#c91a6f]/20 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Full Ownership</h3>
              <p className="text-gray-600 dark:text-gray-400">
                You own the source code and have complete control over your software. No vendor lock-in, no subscription fees, and the freedom to modify, extend, or integrate as your business evolves.
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
              Custom Software{' '}
              <span className="hollow-text-brand">
                Use Cases
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore how businesses leverage custom software to solve complex challenges and drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#5e2cb6]/5 to-[#c91a6f]/5 dark:from-[#5e2cb6]/10 dark:to-[#c91a6f]/10 rounded-xl p-8 border border-[#5e2cb6]/20 dark:border-[#5e2cb6]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enterprise Resource Planning</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Build custom ERP systems that integrate all business functions - finance, HR, inventory, sales, and operations - into a unified platform tailored to your workflows.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Integrated business processes</li>
                <li>• Real-time data visibility</li>
                <li>• Custom reporting and analytics</li>
                <li>• Workflow automation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#fecc4d]/5 to-[#10b981]/5 dark:from-[#fecc4d]/10 dark:to-[#10b981]/10 rounded-xl p-8 border border-[#fecc4d]/20 dark:border-[#fecc4d]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Customer Relationship Management</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Develop custom CRM solutions that match your sales process, customer journey, and team structure. Track interactions, manage pipelines, and automate follow-ups.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Sales pipeline management</li>
                <li>• Customer interaction tracking</li>
                <li>• Marketing automation</li>
                <li>• Custom reporting dashboards</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#10b981]/5 to-[#5e2cb6]/5 dark:from-[#10b981]/10 dark:to-[#5e2cb6]/10 rounded-xl p-8 border border-[#10b981]/20 dark:border-[#10b981]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business Process Automation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Automate complex business processes with custom workflows that reduce manual work, eliminate errors, and accelerate operations across departments.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Workflow automation</li>
                <li>• Document management</li>
                <li>• Approval processes</li>
                <li>• Integration with existing systems</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#c91a6f]/5 to-[#fecc4d]/5 dark:from-[#c91a6f]/10 dark:to-[#fecc4d]/10 rounded-xl p-8 border border-[#c91a6f]/20 dark:border-[#c91a6f]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Analytics Platforms</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Create custom analytics platforms that aggregate data from multiple sources, provide real-time insights, and support data-driven decision making.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Multi-source data integration</li>
                <li>• Real-time dashboards</li>
                <li>• Custom KPIs and metrics</li>
                <li>• Predictive analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Process Diagram */}
      <ProcessDiagram
        title="Custom Software Development Process"
        subtitle="From concept to deployment, we ensure quality and success at every step"
        steps={processSteps}
      />

      {/* 9. FAQs */}
      <FAQDropdown faqs={faqs} />

      {/* 10. Contact Section */}
      <ContactSection 
        title="Get in Touch"
        description="Have a project in mind? Let's discuss how we can help transform your business with custom software solutions."
      />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}
