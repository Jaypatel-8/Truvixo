'use client'

import { useState, useEffect } from 'react'
import { 
  ExternalLink, 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp,
  Globe,
  Palette,
  Code,
  Zap,
  CheckCircle,
  Award,
  Sparkles,
  Calendar,
  Phone,
  Mail,
  Building2,
  Cloud,
  Shield,
  Settings,
  Network,
  Heart,
  ShoppingCart,
  Truck,
  Home,
  Rocket,
  BarChart3,
  Target,
  GraduationCap
} from 'lucide-react'
import ContactFormModal from '@/components/ContactFormModal'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import SEOLocationSection from '@/components/SEOLocationSection'
import ContactSection from '@/components/ContactSection'
import Clientele from '@/components/Clientele'
import Technologies from '@/components/Technologies'
import FAQDropdown from '@/components/FAQDropdown'
import ProcessDiagram from '@/components/ProcessDiagram'
import { getFAQsForPage } from '@/lib/pageData'

const OurWork = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [featuredProjects, setFeaturedProjects] = useState([
    {
      id: 1,
      title: 'Nova Logistics',
      client: 'Nova Logistics',
      category: 'Logistics & Supply Chain',
      description: 'Digital transformation platform for logistics management that streamlined operations and improved efficiency by 40%.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'IoT'],
      results: [
        '40% improvement in operational efficiency',
        'Real-time tracking and visibility',
        'Automated route optimization',
        'Reduced delivery times by 30%'
      ],
      link: '/our-work/nova-logistics',
      gradient: 'gradient-bg'
    },
    {
      id: 2,
      title: 'BrightEdge Healthcare Analytics',
      client: 'BrightEdge',
      category: 'Healthcare Technology',
      description: 'AI-powered healthcare analytics solution that revolutionized patient data analysis and improved decision-making processes.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'HIPAA Compliance'],
      results: [
        '90% reduction in data processing time',
        'Real-time patient insights delivery',
        'Predictive analytics for patient outcomes',
        '50% improvement in decision-making speed'
      ],
      link: '/our-work/brightedge-healthcare-analytics',
      gradient: 'gradient-bg-2'
    },
    {
      id: 3,
      title: 'UrbanMint Property Platform',
      client: 'UrbanMint',
      category: 'Real Estate Tech',
      description: 'Modern property management and investment platform that transformed how real estate professionals manage properties and investments.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Maps API'],
      results: [
        '150% increase in user engagement',
        'Streamlined property management workflows',
        'Automated investment tracking',
        '25% increase in platform adoption'
      ],
      link: '/our-work/urbanmint-property-platform',
      gradient: 'gradient-bg-3'
    },
    {
      id: 4,
      title: 'Padmavat Construction Management',
      client: 'Padmavat Construction',
      category: 'Construction & Infrastructure',
      description: 'Digital solutions for construction project management that improved project tracking, resource allocation, and team collaboration.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Cloud Infrastructure'],
      results: [
        '35% improvement in project delivery time',
        'Enhanced team collaboration',
        'Real-time project tracking',
        'Reduced project costs by 20%'
      ],
      link: '/our-work/padmavat-construction-management',
      gradient: 'gradient-bg-4'
    }
  ])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Removed dynamic project loading - using static projects to prevent rendering issues

  const industriesServed = [
    { name: 'FinTech', icon: '💳' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Retail', icon: '🛒' },
    { name: 'EdTech', icon: '🎓' },
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Real Estate', icon: '🏢' },
    { name: 'Logistics', icon: '🚚' },
    { name: 'Construction', icon: '🏗️' }
  ]

  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your unique business requirements',
      icon: <Code className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by advanced AI and ML technologies',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Web Applications',
      description: 'Modern, scalable web applications for businesses of all sizes',
      icon: <Globe className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      icon: <Phone className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and management',
      icon: <ShoppingCart className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern business needs',
      icon: <Cloud className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Large-scale enterprise software for complex business operations',
      icon: <Building2 className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services for modern businesses',
      icon: <Rocket className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Award className="w-7 h-7" strokeWidth={2} />, 
      title: 'Proven Track Record', 
      description: '500+ successful projects delivered across diverse industries with 98% client satisfaction',
      color: '#5e2cb6'
    },
    { 
      icon: <Users className="w-7 h-7" strokeWidth={2} />, 
      title: 'Expert Team', 
      description: '50+ skilled professionals with expertise in cutting-edge technologies and methodologies',
      color: '#c91a6f'
    },
    { 
      icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, 
      title: 'Measurable Results', 
      description: 'Data-driven approach ensuring measurable business outcomes and ROI',
      color: '#fecc4d'
    },
    { 
      icon: <Shield className="w-7 h-7" strokeWidth={2} />, 
      title: 'Quality Assurance', 
      description: 'Rigorous testing and quality control processes for reliable, bug-free solutions',
      color: '#10b981'
    },
    { 
      icon: <Rocket className="w-7 h-7" strokeWidth={2} />, 
      title: 'Agile Methodology', 
      description: 'Flexible, iterative development approach for faster time-to-market',
      color: '#5e2cb6'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'Innovation Focus', 
      description: 'Cutting-edge technologies and innovative solutions for competitive advantage',
      color: '#c91a6f'
    }
  ]

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'database' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'frontend' as const },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00', category: 'ai' as const }
  ]

  const processSteps = [
    {
      title: 'Discovery & Planning',
      description: 'Understand your business needs, goals, and requirements through comprehensive analysis',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Design & Architecture',
      description: 'Create scalable architecture and intuitive user experience designs',
      icon: <Network className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Development & Integration',
      description: 'Build robust solutions using modern technologies and best practices',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing to ensure reliability, performance, and security',
      icon: <Shield className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Deployment & Launch',
      description: 'Seamless deployment to production with zero-downtime strategies',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and optimization for long-term success',
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

  const faqs = getFAQsForPage('default')

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

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
                <Rocket className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#5e2cb6]">Our Portfolio</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Our{' '}
                <span className="hollow-text-brand block mt-2">
                  Work
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-light text-gray-700 mb-4 leading-tight">
                Turning Vision into Impactful Digital Experiences
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                Explore how TruVixo helps businesses innovate through technology and creativity. Discover our portfolio of successful projects that demonstrate our ability to deliver exceptional results across various industries.
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

      {/* Services Section */}
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
              Comprehensive solutions across all technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Why Choose{' '}
              <span className="hollow-text-brand">
                TruVixo
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional results through expertise, innovation, and commitment to excellence
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

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Featured{' '}
              <span className="hollow-text-brand">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore some of our most successful projects that demonstrate our ability to deliver exceptional results across various industries.
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div>
                  <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 interactive-card">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 ${project.gradient} rounded-xl flex items-center justify-center`}>
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-truvixo-blue uppercase tracking-wider">{project.category}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{project.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-base text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-base font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-base font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={project.link}
                      className="w-full bg-[#5e2cb6] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 group shadow-lg shadow-[#5e2cb6]/30 flex items-center justify-center gap-2"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
              Serving diverse industries with tailored technology solutions
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

      {/* CTA Section */}
      <section className="py-20 bg-[#5e2cb6] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Start Your{' '}
              <span className="hollow-text-white">
                Project?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              Get in touch and let's discuss how we can help transform your business with innovative technology solutions.
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Project{' '}
              <span className="hollow-text-brand">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our projects deliver measurable value and transform businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Increased Efficiency</h3>
              <p className="text-gray-600">
                Our solutions streamline operations, automate processes, and reduce manual work, leading to significant efficiency gains and cost savings.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Real-time analytics and reporting provide actionable insights for better decision-making and strategic planning.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#fecc4d]/10 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-[#fecc4d]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">
                Built with scalability in mind, our solutions grow with your business, handling increased load and users seamlessly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#10b981]/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#10b981]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enhanced Security</h3>
              <p className="text-gray-600">
                Enterprise-grade security features protect your data and ensure compliance with industry standards and regulations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Improved User Experience</h3>
              <p className="text-gray-600">
                Intuitive interfaces and seamless user experiences increase engagement and satisfaction among your customers and employees.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Advantage</h3>
              <p className="text-gray-600">
                Innovative technology solutions give you a competitive edge, enabling faster time-to-market and better customer experiences.
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
              Project{' '}
              <span className="hollow-text-brand">
                Use Cases
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how our projects solve real-world business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#5e2cb6]/5 to-[#c91a6f]/5 rounded-xl p-8 border border-[#5e2cb6]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">
                Modernize legacy systems and transform business operations with cutting-edge technology solutions that improve efficiency and productivity.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Legacy system modernization</li>
                <li>• Process automation</li>
                <li>• Cloud migration</li>
                <li>• Digital workflow implementation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#fecc4d]/5 to-[#10b981]/5 rounded-xl p-8 border border-[#fecc4d]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Experience Enhancement</h3>
              <p className="text-gray-600 mb-4">
                Build customer-facing applications and platforms that deliver exceptional user experiences and drive engagement.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Mobile and web applications</li>
                <li>• E-commerce platforms</li>
                <li>• Customer portals</li>
                <li>• Real-time communication tools</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#10b981]/5 to-[#5e2cb6]/5 rounded-xl p-8 border border-[#10b981]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Analytics & Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Implement analytics platforms and AI solutions that turn data into actionable insights for strategic decision-making.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Business intelligence dashboards</li>
                <li>• Predictive analytics</li>
                <li>• Machine learning models</li>
                <li>• Data visualization tools</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#c91a6f]/5 to-[#fecc4d]/5 rounded-xl p-8 border border-[#c91a6f]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Excellence</h3>
              <p className="text-gray-600 mb-4">
                Develop internal tools and systems that optimize operations, improve collaboration, and enhance productivity.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Enterprise resource planning</li>
                <li>• Project management systems</li>
                <li>• Collaboration platforms</li>
                <li>• Workflow automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Technologies technologies={technologies} />
      <ProcessDiagram title="Our Development Process" subtitle="From discovery to deployment, we ensure successful project delivery at every step" steps={processSteps} />
      <FAQDropdown faqs={faqs} />
      <SEOLocationSection serviceName="Project Development & Digital Solutions" />
      <ContactSection 
        title="Get in Touch"
        description="Have a project in mind? Let's discuss how we can help transform your business."
      />

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  )
}
export default OurWork
