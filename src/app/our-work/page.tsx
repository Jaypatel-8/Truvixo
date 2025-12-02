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
  Sparkles
} from 'lucide-react'
import ContactFormModal from '@/components/ContactFormModal'
import Link from 'next/link'

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
      link: '/our-work#nova',
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
      link: '/our-work#brightedge',
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
      link: '/our-work#urbanmint',
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
      link: '/our-work#padmavat',
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

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Award className="w-6 h-6" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '50+', label: 'Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '7+', label: 'Years Experience', icon: <TrendingUp className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-purple-50 to-red-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-truvixo-blue/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-truvixo-purple/20 rounded-full animate-float-delay-1"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-truvixo-red/20 rounded-full animate-float-delay-2"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-truvixo-yellow/20 rounded-full animate-float-delay-3"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Turning Vision into Impactful Digital{' '}
              <span className="hollow-text-orange">Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-light">
              Explore how Truvixo helps businesses innovate through technology and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="hollow-text-orange">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore some of our most successful projects that demonstrate our ability to deliver exceptional results across various industries.
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
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

                    <button className="w-full bg-truvixo-blue text-white font-bold py-3 px-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group">
                      <span className="flex items-center justify-center gap-2">
                        View Case Study
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-24 h-24 ${project.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <Globe className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-gray-600 font-medium">Project Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We{' '}
              <span className="hollow-text-orange">Serve</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We help businesses across diverse industries transform through technology and innovation
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {industriesServed.map((industry, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Start Your{' '}
              <span className="hollow-text-orange">Project</span>?
            </h2>
            <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help transform your business and achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/our-work"
                className="group bg-white text-purple-600 font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5 group-hover:animate-bounce" />
                View More Projects
              </Link>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="group border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-500 transform hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                <Users className="w-5 h-5" />
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  )
}

export default OurWork

