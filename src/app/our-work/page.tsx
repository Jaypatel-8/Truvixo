import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Our Work - TruVixo™ Portfolio & Case Studies',
  description: 'Explore TruVixo™ portfolio showcasing successful projects in digital marketing, branding, and software development. See how we transform businesses.',
}

const OurWork = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform Redesign',
      client: 'TechFlow Inc.',
      category: 'Web Development',
      description: 'Complete redesign of an e-commerce platform resulting in 150% increase in conversion rates and 40% improvement in user engagement.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      results: [
        '150% increase in conversion rates',
        '40% improvement in user engagement',
        '60% faster page load times',
        '25% increase in mobile sales'
      ],
      link: '#',
      gradient: 'gradient-bg'
    },
    {
      id: 2,
      title: 'Brand Identity Transformation',
      client: 'GreenLife Foods',
      category: 'Branding',
      description: 'Complete brand overhaul including logo design, visual identity, and marketing materials that positioned the company as a premium organic food brand.',
      technologies: ['Brand Strategy', 'Visual Design', 'Marketing Collateral'],
      results: [
        '300% increase in brand recognition',
        '45% improvement in customer perception',
        '80% increase in social media engagement',
        'New premium pricing strategy implemented'
      ],
      link: '#',
      gradient: 'gradient-bg-2'
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      client: 'DataSense Corp.',
      category: 'AI & Analytics',
      description: 'Built an intelligent analytics platform that processes millions of data points to provide actionable business insights in real-time.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      results: [
        '90% reduction in data processing time',
        'Real-time insights delivery',
        'Predictive analytics capabilities',
        '50% improvement in decision-making speed'
      ],
      link: '#',
      gradient: 'gradient-bg-3'
    }
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
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              Our <span className="gradient-text animate-pulse-slow">Work</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the transformative projects that showcase our expertise in digital innovation, creative design, and strategic thinking.
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
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                        <span className="text-sm font-semibold text-truvixo-blue uppercase tracking-wider">{project.category}</span>
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{result}</span>
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-truvixo-blue via-truvixo-purple to-truvixo-red text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Ready to Start Your Project?{' '}
              <span className="text-yellow-300">✨</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help transform your business and achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-truvixo-blue font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 btn-animated">
                <span className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 group-hover:animate-bounce" />
                  Start Your Project
                </span>
              </button>
              <button className="group border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-truvixo-blue transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  View Portfolio
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurWork

