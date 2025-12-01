'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Calendar, Code, Shield, Zap, TrendingUp, Globe, FileCode, Layers, Coffee, Rocket, Phone, Mail, Building2, Heart, ShoppingCart, Truck, Home, GraduationCap, Target } from 'lucide-react'
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

export default function WebApplicationDevelopment() {
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
      title: 'Progressive Web Apps',
      description: 'Fast, responsive web applications that work offline',
      icon: <Globe className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Single Page Applications',
      description: 'Modern SPAs built with React, Vue, or Angular',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Full-Stack Web Apps',
      description: 'Complete web solutions with frontend and backend',
      icon: <Layers className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'E-commerce Platforms',
      description: 'Scalable online stores with payment integration',
      icon: <ShoppingCart className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Zap className="w-6 h-6" strokeWidth={2} />, 
      title: 'Fast-Loading & SEO-Optimized', 
      description: 'Built for speed and search engine visibility' 
    },
    { 
      icon: <Shield className="w-6 h-6" strokeWidth={2} />, 
      title: 'Secure Architecture', 
      description: 'Enterprise-grade security built-in' 
    },
    { 
      icon: <Code className="w-6 h-6" strokeWidth={2} />, 
      title: 'Modern Frameworks', 
      description: 'Next.js, React, Vue, and Angular expertise' 
    },
    { 
      icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />, 
      title: 'Scalable Cloud Deployment', 
      description: 'Grows with your business needs' 
    }
  ]

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000', category: 'frontend' as const },
    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: '#4FC08D', category: 'frontend' as const },
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: '#DD0031', category: 'frontend' as const },
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
      description: 'We analyze your requirements, user needs, and business goals to create a comprehensive development plan',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Design & Prototyping',
      description: 'Create intuitive UI/UX designs and interactive prototypes for user validation',
      icon: <Layers className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Architecture Design',
      description: 'Design scalable architecture with modern tech stack and best practices',
      icon: <FileCode className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Development & Integration',
      description: 'Build web application with agile methodology and continuous integration',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing including unit, integration, and performance testing',
      icon: <Shield className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Deployment & Launch',
      description: 'Deploy to production with monitoring, analytics, and ongoing support',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const industries = [
    { name: 'Fintech', icon: <Building2 className="w-6 h-6" strokeWidth={2} /> },
    { name: 'Healthcare', icon: <Heart className="w-6 h-6" strokeWidth={2} /> },
    { name: 'Retail', icon: <ShoppingCart className="w-6 h-6" strokeWidth={2} /> },
    { name: 'Logistics', icon: <Truck className="w-6 h-6" strokeWidth={2} /> },
    { name: 'Real Estate', icon: <Home className="w-6 h-6" strokeWidth={2} /> },
    { name: 'Education', icon: <GraduationCap className="w-6 h-6" strokeWidth={2} /> }
  ]

  const faqs = getFAQsForPage('web-application-development')

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[70vh] bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-web" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-black"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-web)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-16">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Web Application{' '}
              <span className="hollow-text-brand">
                Development
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              We create modern, scalable, SEO-friendly web applications designed for user engagement and business performance. Our web applications are built with cutting-edge technologies, responsive design, and optimized performance to deliver exceptional user experiences. From single-page applications to complex enterprise web platforms, we transform your ideas into powerful digital solutions that drive business growth and user satisfaction.
            </p>
            <div className="mb-8 p-6 bg-gradient-to-r from-[#5e2cb6]/10 to-[#c91a6f]/10 dark:from-[#5e2cb6]/20 dark:to-[#c91a6f]/20 rounded-xl border border-[#5e2cb6]/20 dark:border-[#5e2cb6]/30 max-w-4xl mx-auto">
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">Why Choose Our Web Application Development:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-[#5e2cb6] dark:text-[#8b5cf6] mt-1">✓</span>
                  <span className="text-gray-600 dark:text-gray-400"><strong>Modern Tech Stack:</strong> Built with React, Next.js, Vue, Angular, and other cutting-edge frameworks</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#5e2cb6] dark:text-[#8b5cf6] mt-1">✓</span>
                  <span className="text-gray-600 dark:text-gray-400"><strong>Responsive Design:</strong> Mobile-first approach ensuring perfect experience on all devices</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#5e2cb6] dark:text-[#8b5cf6] mt-1">✓</span>
                  <span className="text-gray-600 dark:text-gray-400"><strong>SEO Optimized:</strong> Built with SEO best practices for better search engine rankings</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#5e2cb6] dark:text-[#8b5cf6] mt-1">✓</span>
                  <span className="text-gray-600 dark:text-gray-400"><strong>Scalable Architecture:</strong> Cloud-native solutions that grow with your business</span>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <Zap className="w-5 h-5 text-[#5e2cb6] dark:text-[#8b5cf6] flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold mb-1">Fast Performance</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Lightning-fast load times and optimized performance for better user experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <Shield className="w-5 h-5 text-[#c91a6f] dark:text-[#ec4899] flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold mb-1">Secure & Scalable</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Enterprise-grade security and architecture that scales with your business.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <TrendingUp className="w-5 h-5 text-[#fecc4d] flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold mb-1">SEO Optimized</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Built with SEO best practices to improve search engine visibility and rankings.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-[#5e2cb6] text-white font-semibold py-4 px-10 rounded-lg hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-[#5e2cb6]/20"
              >
                <Calendar className="w-5 h-5" strokeWidth={2} />
                <span>Get a Quote</span>
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-[#5e2cb6] border-2 border-[#5e2cb6] font-semibold py-4 px-10 rounded-lg hover:bg-[#5e2cb6]/5 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Client Section */}
      {isMounted && <Clientele />}

      {/* 3. Services */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
              Web Application{' '}
              <span className="hollow-text-brand">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive web application development services tailored to your business needs. From responsive web apps to progressive web applications, we deliver solutions that drive engagement and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <div className="text-gray-900 dark:text-white mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
              Why Choose{' '}
              <span className="hollow-text-brand">
                Us
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver web applications that not only look great but also drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <div className="text-gray-900 dark:text-white mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industries */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
              Industries We{' '}
              <span className="hollow-text-brand">
                Specialize
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We have extensive experience building web applications for various industries, understanding unique requirements and delivering tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg"
              >
                <div className="text-gray-900 dark:text-white mb-3 flex justify-center">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Get a Quote Section */}
      <section className="py-16 bg-[#5e2cb6] dark:bg-[#8b5cf6] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Get a{' '}
              <span className="hollow-text-white">
                Quote
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              Ready to build your web application? Get in touch and let's discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-[#5e2cb6] font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-5 h-5" strokeWidth={2} />
                <span>Call Us</span>
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-transparent text-white border-2 border-white font-semibold py-4 px-8 rounded-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" strokeWidth={2} />
                <span>Schedule Consultation</span>
              </button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
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
      {/* Additional Content - Web App Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
              Web Application{' '}
              <span className="hollow-text-brand">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover how modern web applications can transform your business operations and customer engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 dark:bg-[#8b5cf6]/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-[#5e2cb6] dark:text-[#8b5cf6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cross-Platform Compatibility</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access your web application from any device or browser. No need for separate iOS or Android apps - one web application works seamlessly across desktop, tablet, and mobile devices, reducing development and maintenance costs.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 dark:bg-[#c91a6f]/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Instant Updates</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Deploy updates instantly without requiring users to download new versions. Web applications allow you to push updates, new features, and bug fixes immediately, ensuring all users always have access to the latest version.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#fecc4d]/10 dark:bg-[#fecc4d]/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#fecc4d]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cost-Effective Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build once, deploy everywhere. Web applications eliminate the need for separate native apps, reducing development time and costs. Maintenance is also simpler with a single codebase to manage and update.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#10b981]/10 dark:bg-[#10b981]/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#10b981]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Enhanced Security</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Web applications benefit from centralized security updates and SSL encryption. Data is stored securely on servers, reducing the risk of data loss from device theft or damage. Regular security patches protect against vulnerabilities.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 dark:bg-[#8b5cf6]/20 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-[#5e2cb6] dark:text-[#8b5cf6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Easy Integration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Seamlessly integrate with third-party services, APIs, and existing business systems. Web applications can connect to payment gateways, CRM systems, analytics tools, and more, creating a unified business ecosystem.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 dark:bg-[#c91a6f]/20 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Scalable Infrastructure</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Cloud-based web applications scale automatically with your business growth. Handle traffic spikes, user growth, and increased data without performance degradation. Scale resources up or down based on demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
              Web Application{' '}
              <span className="hollow-text-brand">
                Use Cases
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore how businesses leverage web applications to streamline operations and enhance customer experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#5e2cb6]/5 to-[#c91a6f]/5 dark:from-[#5e2cb6]/10 dark:to-[#c91a6f]/10 rounded-xl p-8 border border-[#5e2cb6]/20 dark:border-[#5e2cb6]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">E-Commerce Platforms</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Build comprehensive online stores with shopping carts, payment processing, inventory management, and order tracking. Create seamless shopping experiences that drive conversions and customer satisfaction.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Product catalogs with advanced search and filtering</li>
                <li>• Secure payment gateway integration</li>
                <li>• Real-time inventory management</li>
                <li>• Customer account and order history</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#fecc4d]/5 to-[#10b981]/5 dark:from-[#fecc4d]/10 dark:to-[#10b981]/10 rounded-xl p-8 border border-[#fecc4d]/20 dark:border-[#fecc4d]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business Management Systems</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Develop custom CRM, ERP, and project management solutions tailored to your business workflows. Streamline operations, improve collaboration, and gain insights with integrated business applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Customer relationship management (CRM)</li>
                <li>• Enterprise resource planning (ERP)</li>
                <li>• Project and task management</li>
                <li>• Business intelligence and reporting</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#10b981]/5 to-[#5e2cb6]/5 dark:from-[#10b981]/10 dark:to-[#5e2cb6]/10 rounded-xl p-8 border border-[#10b981]/20 dark:border-[#10b981]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">SaaS Applications</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Create software-as-a-service platforms with subscription management, multi-tenancy, and scalable architecture. Build recurring revenue businesses with cloud-based SaaS solutions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Subscription and billing management</li>
                <li>• Multi-tenant architecture</li>
                <li>• User authentication and authorization</li>
                <li>• API integrations and webhooks</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#c91a6f]/5 to-[#fecc4d]/5 dark:from-[#c91a6f]/10 dark:to-[#fecc4d]/10 rounded-xl p-8 border border-[#c91a6f]/20 dark:border-[#c91a6f]/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Content Management Systems</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Build custom CMS platforms for content creation, publishing, and management. Create intuitive interfaces for content editors while maintaining powerful backend functionality.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• WYSIWYG content editors</li>
                <li>• Media library and asset management</li>
                <li>• Role-based access control</li>
                <li>• SEO-friendly content publishing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Technologies technologies={technologies} />

      {/* 8. Process Diagram */}
      <ProcessDiagram 
        title="Web Development Process"
        subtitle="From discovery to deployment, we ensure quality, performance, and scalability at every step"
        steps={processSteps}
      />

      {/* 9. FAQs */}
      <FAQDropdown faqs={faqs} />

      {/* 10. Contact Section */}
      <ContactSection 
        title="Get in Touch"
        description="Have a project in mind? Let's discuss how we can help transform your business with web applications."
      />

      {/* 11. Client Section at Bottom */}
      {isMounted && (
        <Clientele 
          title="Trusted by Leading Companies"
          subtitle="Join our growing list of satisfied clients"
        />
      )}

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}
