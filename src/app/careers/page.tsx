'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Briefcase, Users, Zap, TrendingUp, Heart, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import Clientele from '@/components/Clientele'
import ContactSection from '@/components/ContactSection'
import GetQuoteSection from '@/components/sections/GetQuoteSection'
// Removed dynamic job loading and admin features to prevent rendering issues

export default function Careers() {
  const [isMounted, setIsMounted] = useState(false)
  
  // Static job positions - removed dynamic loading
  const openPositions = [
    {
      id: '1',
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are looking for an experienced full-stack developer to join our team.',
      requirements: ['5+ years experience', 'React, Node.js', 'TypeScript'],
      isActive: true,
      color: '#5e2cb6'
    },
    {
      id: '2',
      title: 'AI/ML Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our AI team to build cutting-edge machine learning solutions.',
      requirements: ['3+ years experience', 'Python, TensorFlow', 'ML expertise'],
      isActive: true,
      color: '#c91a6f'
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help us build and maintain scalable cloud infrastructure.',
      requirements: ['4+ years experience', 'AWS, Docker, Kubernetes'],
      isActive: true,
      color: '#d97706'
    }
  ]

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

  // Removed HiringFormModal - using contact page instead

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Attractive compensation packages',
      icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Flexible Work',
      description: 'Remote and hybrid work options',
      icon: <Zap className="w-6 h-6" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Growth Opportunities',
      description: 'Career development and learning',
      icon: <Users className="w-6 h-6" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'Great Culture',
      description: 'Collaborative and supportive team',
      icon: <Heart className="w-6 h-6" strokeWidth={2} />,
      color: '#059669'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <section className="relative min-h-[85vh] bg-white flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="scroll-animate">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e2cb6]/10 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
              <span className="text-sm font-semibold text-[#5e2cb6]">Careers</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Join Our{' '}
              <span className="hollow-text-brand">
                Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Build your career with us. We're looking for talented individuals who are passionate about technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {isMounted && <div className="mt-12"><Clientele /></div>}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Open{' '}
              <span className="hollow-text-brand">
                Positions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore current job openings and find your next opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
                style={{ 
                  borderColor: position.color + '40'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = position.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = position.color + '40'
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ backgroundColor: position.color }}></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: position.color + '20', color: position.color }}>
                      {position.department}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#5e2cb6] transition-colors">
                    {position.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {position.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" strokeWidth={2} />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" strokeWidth={2} />
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#5e2cb6] font-semibold hover:gap-3 transition-all"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Why Work{' '}
              <span className="hollow-text-brand">
                With Us
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Benefits and perks that make TruVixo a great place to work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl text-center"
                style={{ 
                  borderColor: benefit.color + '40'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = benefit.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = benefit.color + '40'
                }}
              >
                <div className="mb-6 flex justify-center" style={{ color: benefit.color }}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5e2cb6] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#5e2cb6] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white">
              Don't See a{' '}
              <span className="hollow-text-white">
                Position?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link 
              href="/contact"
              className="bg-white text-[#5e2cb6] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              <Mail className="w-5 h-5" strokeWidth={2} />
              <span>Send Your Resume</span>
            </Link>
          </div>
        </div>
      </section>
      

      {/* Removed HiringFormModal - using contact page instead */}
    </main>
  )
}


