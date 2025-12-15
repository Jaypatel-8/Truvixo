'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Users, MapPin, Code, Target, CheckCircle, Calendar, Phone, Mail, Rocket, TrendingUp, Shield, Zap, Clock, Award, Lightbulb, Building2, Cloud, BarChart3, Settings, Network } from 'lucide-react'
import dynamic from 'next/dynamic'
import SEOLocationSection from '@/components/SEOLocationSection'
import ContactSection from '@/components/ContactSection'
import Clientele from '@/components/Clientele'
import FAQDropdown from '@/components/FAQDropdown'
import ProcessDiagram from '@/components/ProcessDiagram'
import { getFAQsForPage } from '@/lib/pageData'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

interface ProjectData {
  title: string
  client: string
  category: string
  description: string
  technologies: string[]
  results: string[]
  teamSize: string
  location: string
  problem: string
  solution: string
  approach: string[]
  duration: string
  color: string
}

export default function ProjectPageClient({ slug }: { slug: string }) {
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

  // Project data mapping
  const projectDataMap: Record<string, ProjectData> = {
    'nova-logistics': {
      title: 'Nova Logistics',
      client: 'Nova Logistics',
      category: 'Logistics & Supply Chain',
      description: 'Digital transformation platform for logistics management that streamlined operations and improved efficiency by 40%.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'IoT', 'Docker', 'Redis'],
      results: [
        '40% improvement in operational efficiency',
        'Real-time tracking and visibility',
        'Automated route optimization',
        'Reduced delivery times by 30%'
      ],
      teamSize: '8-10 members',
      location: 'Ahmedabad, Gujarat, India',
      problem: 'Nova Logistics faced challenges with manual route planning, lack of real-time visibility, and inefficient resource allocation. Their existing system couldn\'t handle the growing volume of shipments and lacked integration capabilities with modern logistics tools.',
      solution: 'We developed a comprehensive digital transformation platform with real-time tracking, AI-powered route optimization, and automated resource allocation. The solution integrated IoT devices for live shipment monitoring and provided analytics dashboards for data-driven decision making.',
      approach: [
        'Conducted comprehensive analysis of existing logistics workflows and pain points',
        'Designed scalable microservices architecture for high-volume operations',
        'Implemented real-time tracking using IoT sensors and GPS integration',
        'Developed AI algorithms for optimal route planning and resource allocation',
        'Created intuitive dashboards for operations team and management',
        'Ensured seamless integration with existing ERP and warehouse systems'
      ],
      duration: '6 months',
      color: '#5e2cb6'
    },
    'brightedge-healthcare-analytics': {
      title: 'BrightEdge Healthcare Analytics',
      client: 'BrightEdge',
      category: 'Healthcare Technology',
      description: 'AI-powered healthcare analytics solution that revolutionized patient data analysis and improved decision-making processes.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'HIPAA Compliance', 'FastAPI', 'Docker'],
      results: [
        '90% reduction in data processing time',
        'Real-time patient insights delivery',
        'Predictive analytics for patient outcomes',
        '50% improvement in decision-making speed'
      ],
      teamSize: '12-15 members',
      location: 'Ahmedabad, Gujarat, India',
      problem: 'BrightEdge needed to process massive volumes of patient data while maintaining HIPAA compliance. Their legacy system was slow, couldn\'t provide real-time insights, and lacked predictive capabilities. Healthcare professionals were spending too much time on data analysis instead of patient care.',
      solution: 'We built an AI-powered healthcare analytics platform with machine learning models for predictive analytics, real-time data processing, and HIPAA-compliant infrastructure. The solution automated data analysis and provided actionable insights to healthcare professionals.',
      approach: [
        'Analyzed healthcare data requirements and HIPAA compliance needs',
        'Designed secure, HIPAA-compliant architecture with encryption at rest and in transit',
        'Developed machine learning models for predictive patient outcome analysis',
        'Built real-time data processing pipeline for instant insights',
        'Created intuitive dashboards for healthcare professionals',
        'Implemented comprehensive audit trails and compliance monitoring'
      ],
      duration: '8 months',
      color: '#c91a6f'
    },
    'urbanmint-property-platform': {
      title: 'UrbanMint Property Platform',
      client: 'UrbanMint',
      category: 'Real Estate Tech',
      description: 'Modern property management and investment platform that transformed how real estate professionals manage properties and investments.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Maps API', 'AWS', 'Redis'],
      results: [
        '150% increase in user engagement',
        'Streamlined property management workflows',
        'Automated investment tracking',
        '25% increase in platform adoption'
      ],
      teamSize: '10-12 members',
      location: 'Ahmedabad, Gujarat, India',
      problem: 'UrbanMint required a modern platform to manage properties, track investments, and streamline workflows. Their existing system was outdated, lacked mobile support, and couldn\'t handle the growing user base. Real estate professionals needed better tools for property management and investment tracking.',
      solution: 'We developed a comprehensive property management platform with modern UI/UX, mobile-responsive design, automated investment tracking, and integrated payment processing. The platform included advanced search, property analytics, and collaboration tools for real estate teams.',
      approach: [
        'Conducted user research with real estate professionals to understand workflows',
        'Designed modern, intuitive UI/UX with mobile-first approach',
        'Built scalable Next.js application with server-side rendering for performance',
        'Integrated Stripe for seamless payment processing',
        'Implemented advanced property search with Maps API integration',
        'Developed automated investment tracking and analytics features'
      ],
      duration: '7 months',
      color: '#d97706'
    },
    'padmavat-construction-management': {
      title: 'Padmavat Construction Management',
      client: 'Padmavat Construction',
      category: 'Construction & Infrastructure',
      description: 'Digital solutions for construction project management that improved project tracking, resource allocation, and team collaboration.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Cloud Infrastructure', 'AWS', 'Docker'],
      results: [
        '35% improvement in project delivery time',
        'Enhanced team collaboration',
        'Real-time project tracking',
        'Reduced project costs by 20%'
      ],
      teamSize: '6-8 members',
      location: 'Ahmedabad, Gujarat, India',
      problem: 'Padmavat Construction struggled with manual project tracking, poor communication between on-site and office teams, and inefficient resource allocation. Project delays were common due to lack of real-time visibility and coordination issues.',
      solution: 'We created a comprehensive construction management platform with mobile apps for on-site teams, real-time project tracking, resource management, and collaboration tools. The solution enabled seamless communication and improved project coordination.',
      approach: [
        'Analyzed construction workflows and on-site requirements',
        'Developed React Native mobile apps for field workers',
        'Built real-time project tracking and resource allocation system',
        'Created collaboration tools for seamless team communication',
        'Implemented document management and progress reporting features',
        'Ensured offline functionality for remote construction sites'
      ],
      duration: '5 months',
      color: '#059669'
    }
  }

  const project = projectDataMap[slug] || {
    title: 'Project',
    client: 'Client',
    category: 'Category',
    description: 'Project description',
    technologies: [],
    results: [],
    teamSize: 'N/A',
    location: 'Ahmedabad, Gujarat, India',
    problem: 'Problem statement',
    solution: 'Solution description',
    approach: [],
    duration: 'N/A',
    color: '#5e2cb6'
  }

  const projectInfo = [
    { icon: <Users className="w-6 h-6" strokeWidth={2} />, label: 'Team Size', value: project.teamSize, color: '#5e2cb6' },
    { icon: <MapPin className="w-6 h-6" strokeWidth={2} />, label: 'Location', value: project.location, color: '#c91a6f' },
    { icon: <Clock className="w-6 h-6" strokeWidth={2} />, label: 'Duration', value: project.duration, color: '#d97706' },
    { icon: <Award className="w-6 h-6" strokeWidth={2} />, label: 'Category', value: project.category, color: '#059669' }
  ]

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-white flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e2cb6]/10 rounded-full mb-6">
                <Target className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#5e2cb6]">{project.category}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                {project.title}
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 mb-6 leading-tight">
                {project.client} <span className="hollow-text-brand">Case</span> Study
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                {project.description}
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
              {[
                { icon: <Users className="w-8 h-8" strokeWidth={2} />, title: 'Team Size', desc: project.teamSize, color: '#5e2cb6' },
                { icon: <MapPin className="w-8 h-8" strokeWidth={2} />, title: 'Location', desc: project.location, color: '#c91a6f' },
                { icon: <Clock className="w-8 h-8" strokeWidth={2} />, title: 'Duration', desc: project.duration, color: '#d97706' },
                { icon: <Award className="w-8 h-8" strokeWidth={2} />, title: 'Category', desc: project.category, color: '#059669' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{ borderColor: item.color + '40' }}
                >
                  <div className="mb-4" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Client Section */}
      {isMounted && <div className="mt-12"><Clientele /></div>}

      {/* Project Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Project <span className="hollow-text-brand">Overview</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Key details about this successful project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden scroll-animate-scale"
                style={{ 
                  borderColor: info.color + '40'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = info.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = info.color + '40'
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ backgroundColor: info.color }}></div>
                <div className="relative z-10 text-center">
                  <div className="mb-4 flex justify-center" style={{ color: info.color }}>
                    {info.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">{info.label}</h3>
                  <p className="text-xl font-bold text-gray-900">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Challenge & <span className="hollow-text-brand">Solution</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Understanding the problem and our innovative approach
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-xl p-6 border-2 border-[#5e2cb6]/40 hover:border-[#5e2cb6] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl relative overflow-hidden scroll-animate-left">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ backgroundColor: '#5e2cb6' }}></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-[#5e2cb6]" strokeWidth={1.5} />
                  <h2 className="text-xl font-bold text-gray-900">
                    The Problem
                  </h2>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">{project.problem}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-[#c91a6f]/40 hover:border-[#c91a6f] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl relative overflow-hidden scroll-animate-right">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ backgroundColor: '#c91a6f' }}></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-8 h-8 text-[#c91a6f]" strokeWidth={1.5} />
                  <h2 className="text-xl font-bold text-gray-900">
                    Our Solution
                  </h2>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Development <span className="hollow-text-brand">Process</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to delivering exceptional results
            </p>
          </div>

          {/* Process Diagram - Horizontal Flow */}
          <div className="relative">
            {/* Desktop Horizontal Process Flow */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Main Timeline Line */}
                <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#5e2cb6] via-[#c91a6f] via-[#d97706] to-[#059669] rounded-full z-0"></div>
                
                {/* Process Steps Container */}
                <div className="relative flex justify-between items-start pt-8 pb-16">
                  {project.approach.map((step, index) => {
                    const stepColors = ['#5e2cb6', '#c91a6f', '#d97706', '#059669', '#5e2cb6', '#c91a6f']
                    const stepColor = stepColors[index % stepColors.length]
                    const stepIcons = [
                      <Target className="w-6 h-6" strokeWidth={2} />,
                      <Settings className="w-6 h-6" strokeWidth={2} />,
                      <Code className="w-6 h-6" strokeWidth={2} />,
                      <Shield className="w-6 h-6" strokeWidth={2} />,
                      <Rocket className="w-6 h-6" strokeWidth={2} />,
                      <Network className="w-6 h-6" strokeWidth={2} />
                    ]
                    const stepIcon = stepIcons[index % stepIcons.length]
                    
                    // Extract title from first part of step
                    const titleMatch = step.match(/^([^.,]+)/)
                    const title = titleMatch ? titleMatch[1].trim() : `Step ${index + 1}`
                    
                    return (
                      <div key={index} className="flex-1 flex flex-col items-center relative px-2">
                        {/* Process Node on Timeline */}
                        <div className="relative z-20 mb-6">
                          <div 
                            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300 border-4 border-white"
                            style={{ 
                              backgroundColor: stepColor,
                              color: 'white'
                            }}
                          >
                            {stepIcon}
                          </div>
                          <div 
                            className="mt-3 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mx-auto border-3 border-white shadow-lg"
                            style={{ 
                              backgroundColor: stepColor,
                              color: 'white',
                              borderWidth: '3px'
                            }}
                          >
                            {index + 1}
                          </div>
                        </div>

                        {/* Step Card */}
                        <div className="w-full max-w-[200px]">
                          <div className="bg-white rounded-xl p-5 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group min-h-[240px] flex flex-col">
                            <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ backgroundColor: stepColor }}></div>
                            <div className="relative z-10 flex flex-col h-full">
                              <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-[#5e2cb6] transition-colors line-clamp-2 min-h-[40px]">
                                {title}
                              </h3>
                              <p className="text-xs text-gray-600 leading-relaxed flex-grow line-clamp-5">
                                {step}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Connecting Arrow */}
                        {index < project.approach.length - 1 && (
                          <div className="absolute top-24 left-full transform -translate-x-1/2 -translate-y-1/2 z-10">
                            <ArrowRight className="w-6 h-6 text-gray-600" strokeWidth={2.5} aria-hidden="true" />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Vertical Process Flow */}
            <div className="lg:hidden space-y-6">
              {project.approach.map((step, index) => {
                const stepColors = ['#5e2cb6', '#c91a6f', '#d97706', '#059669', '#5e2cb6', '#c91a6f']
                const stepColor = stepColors[index % stepColors.length]
                const stepIcons = [
                  <Target className="w-6 h-6" strokeWidth={2} />,
                  <Settings className="w-6 h-6" strokeWidth={2} />,
                  <Code className="w-6 h-6" strokeWidth={2} />,
                  <Shield className="w-6 h-6" strokeWidth={2} />,
                  <Rocket className="w-6 h-6" strokeWidth={2} />,
                  <Network className="w-6 h-6" strokeWidth={2} />
                ]
                const stepIcon = stepIcons[index % stepIcons.length]
                
                // Extract title from first part of step
                const titleMatch = step.match(/^([^.,]+)/)
                const title = titleMatch ? titleMatch[1].trim() : `Step ${index + 1}`
                
                return (
                  <div key={index} className="relative flex items-start gap-4">
                    {/* Vertical Line */}
                    {index < project.approach.length - 1 && (
                      <div className="absolute left-5 top-16 bottom-0 w-0.5 bg-gradient-to-b" style={{ background: `linear-gradient(to bottom, ${stepColor}, ${stepColors[(index + 1) % stepColors.length]})` }}></div>
                    )}
                    
                    {/* Step Node */}
                    <div className="flex-shrink-0 relative z-10">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ 
                          backgroundColor: stepColor,
                          color: 'white'
                        }}
                      >
                        {stepIcon}
                      </div>
                      <div 
                        className="mt-2 w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs mx-auto border-2 border-white shadow-md"
                        style={{ 
                          backgroundColor: stepColor,
                          color: 'white'
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Step Card */}
                    <div className="flex-1">
                      <div className="bg-white rounded-xl p-5 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group min-h-[180px] flex flex-col">
                        <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ backgroundColor: stepColor }}></div>
                        <div className="relative z-10 flex flex-col h-full">
                          <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#5e2cb6] transition-colors">
                            {title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                            {step}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>


      {/* Key Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Key <span className="hollow-text-brand">Results</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Measurable outcomes and impact delivered by our solution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#d97706] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ backgroundColor: '#d97706' }}></div>
                <div className="relative z-10 flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-[#d97706] flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <p className="text-lg text-gray-700 leading-relaxed">{result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Project <span className="hollow-text-brand">Benefits</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Discover how this project delivered measurable value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Improved Efficiency</h3>
              <p className="text-gray-600">
                Streamlined operations and automated processes leading to significant efficiency gains and cost savings.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Real-time analytics and reporting provide actionable insights for better decision-making.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#d97706]/10 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-[#d97706]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solution</h3>
              <p className="text-gray-600">
                Built with scalability in mind, the solution grows with business needs seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Project <span className="hollow-text-brand">Use</span> Cases
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Explore how this solution addresses real-world business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#5e2cb6]/5 to-[#c91a6f]/5 rounded-xl p-8 border border-[#5e2cb6]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Impact
              </h3>
              <p className="text-gray-600 mb-4">
                This solution transformed how {project.client} operates, delivering measurable improvements in key business metrics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {project.results.slice(0, 4).map((result, idx) => (
                  <li key={idx}>• {result}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#d97706]/5 to-[#059669]/5 rounded-xl p-8 border border-[#d97706]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Technical Excellence
              </h3>
              <p className="text-gray-600 mb-4">
                Built with modern technologies and best practices, ensuring reliability, performance, and maintainability.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <li key={idx}>• {tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQDropdown faqs={getFAQsForPage('default')} />
      <SEOLocationSection serviceName={`${project.title} Project`} />
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