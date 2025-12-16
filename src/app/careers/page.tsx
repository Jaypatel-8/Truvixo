'use client'

import { useEffect, useState } from 'react'
import { Briefcase, MapPin, Clock, ArrowRight, Users, Award, Zap, TrendingUp, Calendar, Mail, Phone } from 'lucide-react'
import dynamic from 'next/dynamic'
import ContactSection from '@/components/ContactSection'
import SEOLocationSection from '@/components/SEOLocationSection'
import GetQuoteSection from '@/components/sections/GetQuoteSection'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function Careers() {
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

  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Dubai / India',
      type: 'Full-time',
      description: 'We are looking for an experienced full-stack developer to join our team. You will work on cutting-edge projects using React, Next.js, Node.js, and modern cloud technologies.'
    },
    {
      title: 'AI/ML Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / USA',
      type: 'Full-time',
      description: 'Join our AI team to develop innovative machine learning solutions. Experience with TensorFlow, PyTorch, and LLM integration required.'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / Australia',
      type: 'Full-time',
      description: 'Create beautiful and intuitive user experiences. We need a creative designer with strong portfolio and experience in modern design tools.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Dubai',
      type: 'Full-time',
      description: 'Manage cloud infrastructure, CI/CD pipelines, and ensure system reliability. AWS, Docker, Kubernetes experience required.'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote / India',
      type: 'Full-time',
      description: 'Drive growth through SEO, PPC, content marketing, and social media strategies. Data-driven approach and proven results required.'
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Remote / Dubai',
      type: 'Full-time',
      description: 'Lead cross-functional teams and ensure successful project delivery. Agile/Scrum experience and strong communication skills required.'
    }
  ]

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Attractive compensation packages',
      icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Remote Work',
      description: 'Work from anywhere flexibility',
      icon: <MapPin className="w-6 h-6" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Growth Opportunities',
      description: 'Career development and learning',
      icon: <Zap className="w-6 h-6" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Great Team',
      description: 'Collaborative and supportive culture',
      icon: <Users className="w-6 h-6" strokeWidth={2} />,
      color: '#10b981'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-[#5e2cb6]/5 via-white to-[#c91a6f]/5 flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-16">
          <div className="scroll-animate">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Build Your{' '}
              <span className="hollow-text-brand">Career</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-8">
              Join a team of innovators, creators, and problem-solvers. Work on cutting-edge projects, grow your skills, and make an impact with technology that transforms businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-[#5e2cb6] text-white font-semibold py-4 px-10 rounded-lg hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-base md:text-lg shadow-lg shadow-[#5e2cb6]/20"
              >
                <Briefcase className="w-5 h-5" strokeWidth={2} />
                <span>View Open Positions</span>
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-[#5e2cb6] border-2 border-[#5e2cb6] font-semibold py-4 px-10 rounded-lg hover:bg-[#5e2cb6]/5 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 text-base md:text-lg shadow-lg"
              >
                <Mail className="w-5 h-5" strokeWidth={2} />
                <span>Send Your Resume</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Open{' '}
              <span className="hollow-text-brand">Positions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and join our growing team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">{position.department}</p>
                  </div>
                  <Briefcase className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" strokeWidth={2} />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" strokeWidth={2} />
                    <span>{position.type}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {position.description}
                </p>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="text-[#5e2cb6] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Why Work{' '}
              <span className="hollow-text-brand">With Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a great work environment and benefits to help you grow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="mb-6 flex justify-center" style={{ color: benefit.color }}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
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

      {/* SEO Location Section */}
      <SEOLocationSection serviceName="Career Opportunities & Job Openings" />

      {/* Get Quote Section */}
      <GetQuoteSection
        title="Join Our"
        hollowText="Team"
        description="Interested in joining our team? Get in touch to learn more about our opportunities, company culture, and how you can grow your career with us."
        primaryCTA={{
          text: 'Get a Quote',
          onClick: () => setIsContactModalOpen(true)
        }}
        secondaryCTA={{
          text: 'Schedule a Call',
          onClick: () => setIsContactModalOpen(true)
        }}
      />

      {/* Contact Section */}
      <ContactSection 
        title="Interested in Joining Us?"
        description="Don't see a position that matches? Send us your resume and we'll keep you in mind for future opportunities."
      />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  )
}
