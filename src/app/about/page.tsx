import type { Metadata } from 'next'
import { Users, Target, BarChart3, Globe, Award, CheckCircle, Sparkles, Rocket, Heart, Lightbulb, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About TruVixo - Our Story, Team & Mission',
  description: 'Learn about TruVixo\'s journey, our passionate team, and our mission to transform businesses through creative excellence and strategic thinking.',
}

const AboutPage = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We constantly push boundaries and explore new creative frontiers to deliver cutting-edge solutions.',
      gradient: 'gradient-bg'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Client Partnership',
      description: 'We build long-term relationships based on trust, transparency, and shared success.',
      gradient: 'gradient-bg-2'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project, ensuring exceptional quality and results.',
      gradient: 'gradient-bg-3'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      description: 'Award-winning designer with 10+ years of experience in brand strategy and visual identity.',
      gradient: 'gradient-bg',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      name: 'Michael Chen',
      role: 'Strategy Lead',
      description: 'Strategic thinker with expertise in market research, consumer insights, and business transformation.',
      gradient: 'gradient-bg-2',
      icon: <Target className="w-6 h-6" />
    },
    {
      name: 'Emily Rodriguez',
      role: 'Digital Innovation',
      description: 'Tech enthusiast specializing in digital transformation, UX design, and emerging technologies.',
      gradient: 'gradient-bg-3',
      icon: <Zap className="w-6 h-6" />
    }
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
              About <span className="gradient-text animate-pulse-slow">TruVixo</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're a team of passionate creators, strategists, and innovators dedicated to transforming businesses through creative excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2016, TruVixo began as a small creative studio with a big vision: to help businesses find their unique voice and create meaningful connections with their audience.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a passion project has grown into a full-service creative and technology agency, serving clients across industries and continents. We've learned that the best results come from combining strategic thinking with creative excellence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to have helped hundreds of brands transform their businesses and achieve remarkable growth through our innovative approach to creative problem-solving.
              </p>
            </div>
            <div className="gradient-bg-animated rounded-3xl p-12 text-white animate-fade-in-up shadow-2xl hover:shadow-3xl transition-all duration-500" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Rocket className="w-6 h-6 animate-bounce" />
                    Our Mission
                  </h3>
                  <p className="text-lg leading-relaxed">
                    To empower businesses with creative solutions that drive growth, build meaningful connections, and create lasting impact in an ever-evolving digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center animate-fade-in-up interactive-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-truvixo-blue transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-8 text-center animate-fade-in-up interactive-card shadow-2xl hover:shadow-3xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-24 h-24 ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {member.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-truvixo-blue transition-colors duration-300">{member.name}</h3>
                <p className="text-truvixo-blue font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
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
              Ready to Work Together?{' '}
              <span className="text-yellow-300">✨</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help transform your business and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-truvixo-blue font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 btn-animated">
                <span className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                  Start Your Project
                </span>
              </button>
              <button className="group border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-truvixo-blue transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  Schedule a Call
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
