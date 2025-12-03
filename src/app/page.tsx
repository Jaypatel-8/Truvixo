'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Calendar, Code, Brain, Smartphone, Cloud, Database, Server, Target, Settings, Wrench, Megaphone, Palette, Award, Rocket, Shield, MessageSquare, Phone, Mail, ChevronRight, Users, TrendingUp, Zap, BarChart3, Building2, Heart, ShoppingCart, Truck, Home as HomeIcon, GraduationCap, CheckCircle, Clock, DollarSign, Briefcase, Lightbulb } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const Technologies = dynamic(() => import('../components/Technologies'), {
  ssr: false,
  loading: () => <div className="min-h-[400px]"></div>,
})

const FAQDropdown = dynamic(() => import('../components/FAQDropdown'), {
  ssr: false,
  loading: () => <div className="min-h-[200px]"></div>,
})

const NewsletterCTA = dynamic(() => import('../components/NewsletterCTA'), {
  ssr: false,
  loading: () => null,
})

const ContactSection = dynamic(() => import('../components/ContactSection'), {
  ssr: false,
  loading: () => <div className="min-h-[300px]"></div>,
})

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ContactFormModal = dynamic(() => import('../components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

const TestimonialCarousel = dynamic(() => import('../components/TestimonialCarousel'), {
  ssr: false,
  loading: () => null,
})

const ProcessDiagram = dynamic(
  () => import('../components/ProcessDiagram'),
  {
    ssr: false,
    loading: () => <div className="min-h-[400px]"></div>,
  }
)

const Clientele = dynamic(() => import('../components/Clientele'), {
  ssr: false,
  loading: () => null,
})

const SEOLocationSection = dynamic(() => import('../components/SEOLocationSection'), {
  ssr: false,
  loading: () => null,
})

const ServicesSwiper = dynamic(() => import('../components/ServicesSwiper'), {
  ssr: false,
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 11 }).map((_, index) => (
        <div key={index} className="h-full bg-white rounded-lg p-8 border border-gray-200 animate-pulse">
          <div className="w-16 h-16 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-6 bg-gray-200 rounded mb-3"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  )
})

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [featuredProjects, setFeaturedProjects] = useState<any[]>([
    { 
      title: 'Enterprise Platform', 
      category: 'Software Development',
      description: 'Scalable cloud infrastructure for enterprise operations',
      href: '/our-work' 
    },
    { 
      title: 'AI Analytics System', 
      category: 'AI & Machine Learning',
      description: 'Intelligent data processing and predictive analytics',
      href: '/our-work' 
    },
    { 
      title: 'Mobile Application', 
      category: 'Mobile Development',
      description: 'Cross-platform mobile solution with native performance',
      href: '/our-work' 
    },
    { 
      title: 'Digital Transformation', 
      category: 'Consulting',
      description: 'End-to-end modernization of legacy systems',
      href: '/our-work' 
    }
  ])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Removed dynamic project loading to prevent rendering issues
  // Using static featured projects instead

  useEffect(() => {
    // Immediate IntersectionObserver initialization for faster rendering
    const observerOptions = {
      threshold: 0.01,
      rootMargin: '50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          // Unobserve after animation to improve performance
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Use requestIdleCallback for non-critical animations
    const initObserver = () => {
      const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale')
      scrollElements.forEach((el) => observer.observe(el))
    }

    if ('requestIdleCallback' in window) {
      requestIdleCallback(initObserver, { timeout: 100 })
    } else {
      setTimeout(initObserver, 0)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Technologies data with categories and colored logos
  const technologies = [
    // Frontend
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000', category: 'frontend' as const },
    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: '#4FC08D', category: 'frontend' as const },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'frontend' as const },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', color: '#06B6D4', category: 'frontend' as const },
    
    // Backend
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
    { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', color: '#092E20', category: 'backend' as const },
    { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', color: '#009688', category: 'backend' as const },
    { name: 'NestJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg', color: '#E0234E', category: 'backend' as const },
    
    // Cloud
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'cloud' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'cloud' as const },
    { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: '#0078D4', category: 'cloud' as const },
    
    // Mobile
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B', category: 'mobile' as const },
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'mobile' as const },
    
    // Database
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'database' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1', category: 'database' as const },
    
    // DevOps
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032', category: 'devops' as const },
    { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', color: '#D24939', category: 'devops' as const },
    { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', color: '#7B42BC', category: 'devops' as const }
  ]

  const servicesList = [
    { 
      name: 'Custom Software Development', 
      description: 'Tailored software solutions built to scale with your business needs and drive digital transformation',
      icon: <Code className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      name: 'AI & Machine Learning', 
      description: 'Intelligent systems that learn, adapt, and deliver measurable results through advanced algorithms',
      icon: <Brain className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    { 
      name: 'Web & Mobile Development', 
      description: 'Modern applications that deliver exceptional user experiences across all devices and platforms',
      icon: <Smartphone className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    { 
      name: 'Cloud & DevOps', 
      description: 'Scalable infrastructure and seamless deployment pipelines that accelerate your time to market',
      icon: <Cloud className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      name: 'Digital Marketing', 
      description: 'Data-driven strategies that amplify your brand and drive growth through targeted campaigns',
      icon: <Megaphone className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    { 
      name: 'UI/UX Design', 
      description: 'Intuitive interfaces that engage users and drive conversions through exceptional design',
      icon: <Palette className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    { 
      name: 'Data Engineering', 
      description: 'Transform raw data into actionable insights and intelligence that power business decisions',
      icon: <Database className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      name: 'Enterprise Solutions', 
      description: 'Robust systems designed for scale, security, and performance to support enterprise growth',
      icon: <Server className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    { 
      name: 'Consulting & Strategy', 
      description: 'Strategic guidance to optimize your technology investments and accelerate digital transformation',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    { 
      name: 'Maintenance & Support', 
      description: 'Ongoing optimization and support to keep your systems running smoothly and efficiently',
      icon: <Settings className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      name: 'Legacy Modernization', 
      description: 'Transform outdated systems into modern, efficient solutions that drive innovation',
      icon: <Wrench className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    }
  ]


  const whyChooseUs = [
    { title: 'Proven Expertise', icon: <Award className="w-6 h-6" strokeWidth={2} /> },
    { title: 'Scalable Solutions', icon: <Rocket className="w-6 h-6" strokeWidth={2} /> },
    { title: 'Risk-Free Trial', icon: <Shield className="w-6 h-6" strokeWidth={2} /> },
    { title: 'Enterprise Security', icon: <Shield className="w-6 h-6" strokeWidth={2} /> },
    { title: 'Transparent Communication', icon: <MessageSquare className="w-6 h-6" strokeWidth={2} /> }
  ]

  const testimonials = [
    {
      quote: 'They delivered our MVP in 8 weeks — excellent engineering and communication. The team was responsive, professional, and delivered exactly what we needed.', 
      author: 'Sarah Johnson', 
      role: 'Product Lead',
      company: 'SaaS Startup',
      rating: 5
    },
    { 
      quote: 'Our internal search accuracy improved dramatically after their AI implementation. The system they built has transformed how we handle customer queries.', 
      author: 'Michael Chen', 
      role: 'CTO',
      company: 'Healthcare Company',
      rating: 5
    },
    { 
      quote: 'TruVixo helped us scale from 0 to 100K users in 6 months. Their expertise in cloud infrastructure and DevOps was invaluable.', 
      author: 'David Rodriguez', 
      role: 'Founder & CEO',
      company: 'FinTech Startup',
      rating: 5
    },
    { 
      quote: 'The mobile app they developed exceeded our expectations. Clean code, on-time delivery, and great support throughout the project.', 
      author: 'Emily Watson', 
      role: 'Product Manager',
      company: 'E-commerce Platform',
      rating: 5
    },
    { 
      quote: 'Working with TruVixo was seamless. They understood our vision and delivered a product that perfectly matched our requirements.', 
      author: 'James Anderson', 
      role: 'Co-Founder',
      company: 'EdTech Company',
      rating: 5
    },
    { 
      quote: 'Their AI development team is top-notch. They built a custom ML model that increased our conversion rates by 40%.', 
      author: 'Lisa Thompson', 
      role: 'Head of Marketing',
      company: 'Retail Company',
      rating: 5
    }
  ]

  const faqs = [
    { 
      question: 'How quickly can you start a software development project?', 
      answer: 'We can onboard a dedicated developer within 1–2 weeks, while full development teams are assembled based on project scope and requirements. Our agile onboarding process ensures quick project initiation without compromising quality or thorough planning.' 
    },
    { 
      question: 'Do you sign NDAs and maintain data security?', 
      answer: 'Yes, we sign comprehensive NDAs and follow strict security practices including ISO 27001 standards, regular security audits, encrypted communications, and secure development environments. Client data confidentiality and intellectual property protection are our top priorities.' 
    },
    { 
      question: 'Do you offer a risk-free trial period?', 
      answer: 'Yes, we offer a 1-week risk-free trial for development engagements. This allows you to evaluate our technical expertise, communication style, and work quality before committing to a long-term partnership. If you are not satisfied, there is no obligation to continue.' 
    },
    { 
      question: 'What industries do you serve with your software solutions?', 
      answer: 'We serve diverse industries including FinTech, Healthcare, Retail & E-commerce, Logistics & Transportation, Education, Real Estate, Manufacturing, and Travel & Hospitality. Our industry-specific expertise enables us to understand unique requirements, compliance needs, and market dynamics for each sector.' 
    },
    { 
      question: 'Can you integrate third-party APIs and services?', 
      answer: 'Yes, we have extensive experience integrating third-party APIs including payment gateways (Stripe, PayPal), mapping services (Google Maps, Mapbox), CRM systems (Salesforce, HubSpot), analytics platforms (Google Analytics, Mixpanel), cloud services, and many more. We ensure seamless integration with proper error handling and documentation.' 
    },
    {
      question: 'What technologies and frameworks do you use for software development?',
      answer: 'We use modern technology stacks including React, Next.js, Vue.js for frontend development; Node.js, Python, Django for backend; React Native, Flutter for mobile apps; AWS, Azure, GCP for cloud infrastructure; and Docker, Kubernetes for containerization. We choose technologies based on project requirements, scalability needs, and long-term maintainability.'
    },
    {
      question: 'How do you ensure software quality and testing?',
      answer: 'We follow comprehensive quality assurance practices including unit testing, integration testing, automated testing, code reviews, performance testing, and security audits. Our development process includes continuous integration and deployment (CI/CD) pipelines to catch issues early and ensure reliable, high-quality software delivery.'
    }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* 1. Hero Section - Sleek & Modern */}
      <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden pt-20">
        {/* Minimal Grid Background */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-900"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-16">
          <div className="scroll-animate">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-6 leading-[0.9] tracking-tight">
              Building the{' '}
              <span className="hollow-text-brand">Future</span>
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 mb-6 leading-tight">
              with Intelligent Technology
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-8 px-4">
              We design, build, and scale custom software, AI solutions, and digital platforms that transform businesses from concept to market leader.
            </p>

            {/* CTA Buttons - With Logo Colors */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 mb-12">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-[#5e2cb6] text-white font-semibold py-4 px-10 rounded-lg hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-base md:text-lg shadow-lg shadow-[#5e2cb6]/20"
              >
                <Calendar className="w-5 h-5" strokeWidth={2} />
                <span>Book a Call</span>
              </button>
              <Link 
                href="/services"
                prefetch={true}
                className="bg-white text-[#10b981] border-2 border-[#10b981] font-semibold py-4 px-10 rounded-lg hover:bg-[#10b981]/5 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-base md:text-lg shadow-lg"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </Link>
            </div>

            {/* Stats Section - With Logo Colors */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { value: '20+', label: 'Projects', color: '#5e2cb6' },
                { value: '7+', label: 'Clients', color: '#c91a6f' },
                { value: '98%', label: 'Satisfaction', color: '#fecc4d' },
                { value: '24/7', label: 'Support', color: '#10b981' }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-300">
                  <div className="text-3xl md:text-4xl font-black mb-1" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Client Section - Right after hero */}
      <Clientele />

      {/* 3. Our Services */}
      <section id="services-section" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Our{' '}
              <span className="hollow-text-brand">
                Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-2">
              Comprehensive technology solutions to transform your business
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto mb-8">
              From custom software development to AI solutions, digital marketing, and cloud infrastructure - we deliver end-to-end technology services that drive innovation, efficiency, and growth for businesses across industries. Our proven methodology combines cutting-edge technology with strategic business insights to deliver measurable results.
            </p>
            
            {/* CTA Button - Prominently placed after description */}
            <div className="flex justify-center mb-10">
              <Link
                href="/services"
                prefetch={true}
                className="inline-flex items-center gap-2 bg-[#5e2cb6] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#5e2cb6]/20 group"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </Link>
            </div>
        </div>

          <div className="relative">
            <div className="relative px-4 md:px-0 flex items-center">
              <ServicesSwiper servicesList={servicesList} />
              {/* Navigation Buttons - Centered Vertically */}
              <button 
                className="swiper-button-prev-services hidden md:flex absolute left-0 md:-left-4 z-20 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 border-2 border-gray-200 shadow-lg hover:shadow-xl"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
                aria-label="Previous services"
              >
                <ChevronRight className="w-6 h-6 text-gray-900 rotate-180" strokeWidth={2} />
              </button>
              <button 
                className="swiper-button-next-services hidden md:flex absolute right-0 md:-right-4 z-20 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 border-2 border-gray-200 shadow-lg hover:shadow-xl"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
                aria-label="Next services"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Our{' '}
              <span className="hollow-text-brand">
                Works
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing excellence in software development, AI solutions, and digital innovation across diverse industries and use cases
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                prefetch={true}
                className="group bg-white rounded-lg p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium mb-3">{project.category}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="text-gray-900 font-semibold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  View Case Study <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technologies We Use - Two Grid System */}
      <Technologies technologies={technologies} />

      {/* 6. Why Choose TruVixo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Why Choose{' '}
              <span className="hollow-text-brand">
                TruVixo
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver software solutions that drive real results. Our approach integrates industry best practices, modern technology stacks, and strategic thinking to create solutions that not only meet current needs but scale with your business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((item, index) => {
              const logoColors = ['#5e2cb6', '#c91a6f', '#fecc4d', '#10b981', '#d42628', '#f59e0b']
              const color = logoColors[index % logoColors.length]
              return (
              <div 
                key={index} 
                  className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="mb-3 flex justify-center" style={{ color: color }}>
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6.5. Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Industries We{' '}
              <span className="hollow-text-brand">
                Serve
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized software solutions tailored to your industry's unique challenges. Expert custom development for FinTech, Healthcare, E-commerce, Logistics, Real Estate, Education, Manufacturing, and Retail sectors. We understand industry-specific requirements and deliver solutions that comply with regulations while driving business value.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'FinTech', href: '/industry/fintech', icon: <DollarSign className="w-8 h-8" strokeWidth={2} />, color: '#5e2cb6', description: 'Secure financial platforms' },
              { name: 'Healthcare', href: '/industry/healthcare', icon: <Heart className="w-8 h-8" strokeWidth={2} />, color: '#c91a6f', description: 'HIPAA-compliant systems' },
              { name: 'E-commerce', href: '/industry/retail-ecommerce', icon: <ShoppingCart className="w-8 h-8" strokeWidth={2} />, color: '#fecc4d', description: 'Scalable online stores' },
              { name: 'Logistics', href: '/industry/logistics', icon: <Truck className="w-8 h-8" strokeWidth={2} />, color: '#10b981', description: 'Supply chain systems' },
              { name: 'Real Estate', href: '/industry/real-estate', icon: <HomeIcon className="w-8 h-8" strokeWidth={2} />, color: '#d42628', description: 'Property platforms' },
              { name: 'Education', href: '/industry/education', icon: <GraduationCap className="w-8 h-8" strokeWidth={2} />, color: '#f59e0b', description: 'E-learning solutions' },
              { name: 'Manufacturing', href: '/industry/manufacturing', icon: <Settings className="w-8 h-8" strokeWidth={2} />, color: '#5e2cb6', description: 'IoT automation' },
              { name: 'Retail', href: '/industry/retail-ecommerce', icon: <ShoppingCart className="w-8 h-8" strokeWidth={2} />, color: '#c91a6f', description: 'POS systems' }
            ].map((industry, index) => (
              <Link
                key={index}
                href={industry.href}
                prefetch={true}
                className="group bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center" style={{ color: industry.color }}>
                  {industry.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6.6. Company Achievements & Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Our{' '}
              <span className="hollow-text-brand">
                Achievements
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '20+', label: 'Projects Completed', icon: <Briefcase className="w-8 h-8" strokeWidth={2} />, color: '#5e2cb6', description: 'Delivered across industries' },
              { value: '7+', label: 'Clients', icon: <Users className="w-8 h-8" strokeWidth={2} />, color: '#c91a6f', description: 'Trust us with their business' },
              { value: '98%', label: 'Client Satisfaction', icon: <Award className="w-8 h-8" strokeWidth={2} />, color: '#fecc4d', description: 'Consistently high ratings' },
              { value: '24/7', label: 'Support Available', icon: <Clock className="w-8 h-8" strokeWidth={2} />, color: '#10b981', description: 'Round-the-clock assistance' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.7. Our Expertise & Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Our{' '}
              <span className="hollow-text-brand">
                Expertise
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep technical knowledge in full-stack development, AI & machine learning, cloud infrastructure, and mobile applications. Our team stays current with emerging technologies and industry trends to deliver solutions that leverage the latest innovations while maintaining reliability and performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Full-Stack Development',
                description: 'Comprehensive end-to-end development services covering frontend interfaces, backend systems, database architecture, and API integration. Our full-stack development approach ensures seamless integration between all application layers, resulting in robust, scalable, and maintainable software solutions built with modern frameworks and industry best practices.',
                icon: <Code className="w-8 h-8" strokeWidth={2} />,
                color: '#5e2cb6',
                features: ['React, Next.js, Vue.js', 'Node.js, Python, Django', 'REST & GraphQL APIs', 'Microservices Architecture']
              },
              {
                title: 'AI & Machine Learning',
                description: 'Advanced artificial intelligence and machine learning solutions tailored to your business needs. We develop custom AI systems including natural language processing, computer vision, predictive analytics, and intelligent automation that learn from data and adapt to changing conditions, enabling smarter decision-making and operational efficiency.',
                icon: <Brain className="w-8 h-8" strokeWidth={2} />,
                color: '#c91a6f',
                features: ['Custom ML Models', 'NLP & Chatbots', 'Computer Vision', 'Predictive Analytics']
              },
              {
                title: 'Cloud & DevOps',
                description: 'Enterprise-grade cloud infrastructure and DevOps practices designed for scalability, reliability, and performance. We implement automated CI/CD pipelines, containerization strategies, and infrastructure as code to ensure your applications are always available, secure, and can scale seamlessly with your business growth.',
                icon: <Cloud className="w-8 h-8" strokeWidth={2} />,
                color: '#fecc4d',
                features: ['AWS, Azure, GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code']
              },
              {
                title: 'Mobile Development',
                description: 'Native and cross-platform mobile application development for iOS and Android platforms. We create engaging, high-performance mobile experiences that users love, combining intuitive design with powerful functionality. Our mobile solutions are optimized for performance, security, and seamless user experience across all devices.',
                icon: <Smartphone className="w-8 h-8" strokeWidth={2} />,
                color: '#10b981',
                features: ['React Native', 'Flutter', 'Native iOS & Android', 'Progressive Web Apps']
              },
              {
                title: 'Digital Marketing',
                description: 'Data-driven digital marketing strategies that drive measurable business growth. Our comprehensive approach includes search engine optimization, pay-per-click advertising, social media marketing, content creation, and conversion rate optimization. We leverage analytics and insights to continuously improve campaign performance and maximize return on investment.',
                icon: <Megaphone className="w-8 h-8" strokeWidth={2} />,
                color: '#d42628',
                features: ['SEO & Content Marketing', 'PPC & Performance Marketing', 'Social Media Marketing', 'CRO & Analytics']
              },
              {
                title: 'UI/UX Design',
                description: 'User-centered design solutions that combine aesthetic appeal with functional excellence. We create intuitive, engaging interfaces that not only look beautiful but also drive user engagement and conversions. Our design process includes comprehensive user research, wireframing, prototyping, and usability testing to ensure exceptional user experiences.',
                icon: <Palette className="w-8 h-8" strokeWidth={2} />,
                color: '#f59e0b',
                features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing']
              }
            ].map((expertise, index) => {
              // Map expertise to service pages
              const getExpertiseUrl = (title: string): string => {
                const urlMap: { [key: string]: string } = {
                  'Full-Stack Development': '/services/custom-software-development',
                  'Custom Software Development': '/services/custom-software-development',
                  'AI & Machine Learning': '/services/ai-development-services',
                  'Cloud & DevOps': '/services/maintenance-support',
                  'Mobile Development': '/services/mobile-app-development',
                  'Digital Marketing': '/services/seo',
                  'UI/UX Design': '/services/custom-software-development'
                }
                return urlMap[title] || '/services'
              }
              
              return (
              <Link
                key={index}
                href={getExpertiseUrl(expertise.title)}
                prefetch={true}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl block group"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center border-2" style={{ borderColor: expertise.color, backgroundColor: expertise.color + '10' }}>
                    <div style={{ color: expertise.color }}>
                      {expertise.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 flex-1 group-hover:text-[#5e2cb6] transition-colors">
                    {expertise.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {expertise.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {expertise.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4" style={{ color: expertise.color }} strokeWidth={2} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-sm font-semibold mt-4" style={{ color: expertise.color }}>
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </div>
              </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. Process of Work */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Our{' '}
              <span className="hollow-text-brand">
                Process
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven software development methodology delivers exceptional results through systematic approach from initial concept and requirements analysis to deployment, maintenance, and continuous improvement. We follow agile principles and industry best practices to ensure timely delivery and superior quality.
            </p>
          </div>
        </div>
        <ProcessDiagram 
          title=""
          subtitle=""
        />
      </section>

      {/* 8. Testimonials - Redesigned */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              What Our{' '}
              <span className="hollow-text-brand">
                Clients
              </span>
              {' '}Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it — hear from businesses we've helped transform through innovative software solutions, digital marketing strategies, and technology consulting. Our clients span various industries and have achieved significant growth and operational improvements.
            </p>
          </div>

          <div className="relative">
            <TestimonialCarousel testimonials={testimonials} speed={40} className="py-4" />
          </div>
        </div>
      </section>

      {/* 9. Partnership & Trust */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Trusted{' '}
              <span className="hollow-text-brand">
                Partners
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We partner with leading technology platforms and tools including AWS, Microsoft Azure, Google Cloud, Docker, Kubernetes, and modern development frameworks to deliver best-in-class software solutions. Our expertise with these platforms ensures scalable, secure, and high-performance applications.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {[
              { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900' },
              { name: 'Microsoft Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: '#0078D4' },
              { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', color: '#4285F4' },
              { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
              { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' },
              { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' }
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border-2 border-gray-200 flex items-center justify-center h-24 hover:border-gray-300 transition-all duration-300 group"
                style={{ borderColor: partner.color + '40' }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Our{' '}
              <span className="hollow-text-brand">
                Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The core principles that guide everything we do and shape how we work with our clients. Our values of innovation, transparency, excellence, and client-centricity drive our commitment to delivering exceptional software development and digital marketing services that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'We stay ahead of technology trends and continuously explore new solutions to solve complex problems.',
                icon: <Lightbulb className="w-8 h-8" strokeWidth={2} />,
                color: '#5e2cb6'
              },
              {
                title: 'Client-Centric',
                description: 'Your success is our success. We prioritize understanding your business goals and delivering solutions that drive real value.',
                icon: <Users className="w-8 h-8" strokeWidth={2} />,
                color: '#c91a6f'
              },
              {
                title: 'Transparency',
                description: 'Clear communication, honest feedback, and regular updates ensure you always know where your project stands.',
                icon: <MessageSquare className="w-8 h-8" strokeWidth={2} />,
                color: '#fecc4d'
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in code quality, design, and delivery to ensure exceptional outcomes every time.',
                icon: <Award className="w-8 h-8" strokeWidth={2} />,
                color: '#10b981'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="mb-6 flex justify-center" style={{ color: value.color }}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Frequently Asked{' '}
              <span className="hollow-text-brand">
                Questions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our software development services, digital marketing solutions, project process, pricing, and how we collaborate with clients to deliver exceptional results. Learn more about our expertise, methodologies, and commitment to client success.
            </p>
          </div>
          <FAQDropdown faqs={faqs} title="" />
        </div>
      </section>

      {/* 12. SEO Location Section - Subtle placement for SEO */}
      <div className="hidden md:block">
        <SEOLocationSection serviceName="Software Development & Digital Marketing" />
      </div>

      {/* 13. Newsletter/Call Section */}
      <NewsletterCTA onContactClick={() => setIsContactModalOpen(true)} />

      {/* 14. Contact Section - Before Footer */}
      <ContactSection 
        title="Get in Touch"
        description="Have a project in mind? Let's discuss how we can help transform your business."
      />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}


