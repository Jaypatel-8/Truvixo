import { Metadata } from 'next'
import Footer from '@/components/Footer'
import { Target, Users, BarChart3, Zap, Award, Globe, Sparkles, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Work - TruVixo Portfolio & Case Studies',
  description: 'Explore our portfolio of successful projects that demonstrate our expertise in digital marketing, branding, and software development.',
}

const WorkPage = () => {
  const categories = [
    {
      name: 'Branding',
      icon: <Target className="w-8 h-8" />,
      count: '12',
      color: 'purple'
    },
    {
      name: 'Development',
      icon: <Zap className="w-8 h-8" />,
      count: '18',
      color: 'pink'
    },
    {
      name: 'Strategy',
      icon: <BarChart3 className="w-8 h-8" />,
      count: '8',
      color: 'yellow'
    },
    {
      name: 'Marketing',
      icon: <Users className="w-8 h-8" />,
      count: '15',
      color: 'magenta'
    }
  ]

  const highlights = [
    {
      title: '500+ Projects Completed',
      description: 'Successfully delivered across various industries',
      icon: <Award className="w-6 h-6" />,
      color: 'purple'
    },
    {
      title: '98% Client Satisfaction',
      description: 'Based on post-project feedback surveys',
      icon: <Users className="w-6 h-6" />,
      color: 'pink'
    },
    {
      title: 'Global Reach',
      description: 'Serving clients in 7+ countries worldwide',
      icon: <Globe className="w-6 h-6" />,
      color: 'yellow'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-expandi text-center">
          <h1 className="text-hero text-gray-900 mb-8">
            Our <span className="text-emphasis">Work</span>
          </h1>
          <p className="text-subtitle max-w-3xl mx-auto">
            Our impact spans from Fortune 500 titans to visionary startups. 
            Wherever you start, we help you go bigger, faster, louder.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container-expandi">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 mb-6">
              Explore Our <span className="text-emphasis">Portfolio</span>
            </h2>
            <p className="text-subtitle max-w-3xl mx-auto">
              Browse our work by category and discover our expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {categories.map((category, index) => (
              <div key={index} className="text-center group hover-lift cursor-pointer">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`icon-container ${category.color} mx-auto mb-6`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-2xl font-bold text-truvixo-purple">{category.count} Projects</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-20 bg-white">
        <div className="container-expandi">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 mb-6">
              Featured <span className="text-emphasis">Projects</span>
            </h2>
            <p className="text-subtitle max-w-3xl mx-auto">
              Discover some of our most successful projects that showcase our expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                category: 'Web Development',
                description: 'Complete redesign resulting in 150% increase in conversion rates',
                gradient: 'gradient-bg'
              },
              {
                title: 'Brand Identity',
                category: 'Branding',
                description: 'Complete brand overhaul for premium organic food company',
                gradient: 'gradient-bg-2'
              },
              {
                title: 'Analytics Dashboard',
                category: 'AI & Analytics',
                description: 'Intelligent platform processing millions of data points',
                gradient: 'gradient-bg-3'
              }
            ].map((project, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 interactive-card">
                <div className={`w-16 h-16 ${project.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-truvixo-blue transition-colors duration-300">{project.title}</h3>
                <p className="text-truvixo-blue font-semibold mb-4">{project.category}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                <button className="w-full bg-truvixo-blue text-white font-bold py-3 px-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group">
                  <span className="flex items-center justify-center gap-2">
                    View Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-expandi">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 mb-6">
              Why Clients <span className="text-emphasis">Choose</span> Us
            </h2>
            <p className="text-subtitle max-w-3xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group hover-lift">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`icon-container ${highlight.color} mx-auto mb-6`}>
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-truvixo-purple to-truvixo-pink text-white">
        <div className="container-expandi text-center">
          <h2 className="text-section mb-6">
            Ready to create something <span className="text-white">extraordinary</span>?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's transform your brand's potential into powerful realities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-truvixo-purple font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-truvixo-purple transition-all duration-300">
              Book a Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WorkPage
