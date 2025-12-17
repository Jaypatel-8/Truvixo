'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Calendar, Phone, Mail, MapPin, Clock, Users, Award, Heart, Zap, Globe, Coffee, Laptop, GraduationCap, Briefcase, Code, Brain, Palette, TrendingUp, CheckCircle, MessageSquare, Rocket, Shield, DollarSign, Building2 } from 'lucide-react'
import dynamic from 'next/dynamic'
import SEOLocationSection from '@/components/SEOLocationSection'
import ContactSection from '@/components/ContactSection'
import Clientele from '@/components/Clientele'
import FAQDropdown from '@/components/FAQDropdown'
import GetQuoteSection from '@/components/sections/GetQuoteSection'
import { getFAQsForPage } from '@/lib/pageData'

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

  // Scroll animation hook
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

    const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-rotate')
    scrollElements.forEach((el) => observer.observe(el))

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Attractive compensation packages that reflect your skills and experience',
      icon: <DollarSign className="w-7 h-7" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to maintain work-life balance',
      icon: <Laptop className="w-7 h-7" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      icon: <Heart className="w-7 h-7" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities, training programs, and career development',
      icon: <GraduationCap className="w-7 h-7" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Innovation Time',
      description: 'Dedicated time to explore new technologies and work on passion projects',
      icon: <Zap className="w-7 h-7" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and celebrations',
      icon: <Users className="w-7 h-7" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'We\'re looking for an experienced full-stack developer to join our engineering team. You\'ll work on cutting-edge projects using React, Next.js, Node.js, and modern cloud technologies.',
      requirements: [
        '5+ years of full-stack development experience',
        'Expertise in React, Next.js, and Node.js',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Strong problem-solving and communication skills'
      ],
      icon: <Code className="w-6 h-6" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Join our AI team to build innovative machine learning solutions. Work on projects involving NLP, computer vision, and predictive analytics.',
      requirements: [
        '3+ years of ML/AI development experience',
        'Strong Python skills and ML frameworks (TensorFlow, PyTorch)',
        'Experience with model deployment and MLOps',
        'Passion for solving complex problems with AI'
      ],
      icon: <Brain className="w-6 h-6" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Create beautiful, intuitive user experiences. Work closely with clients and developers to design solutions that users love.',
      requirements: [
        '4+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe XD, or similar tools',
        'Strong portfolio showcasing design thinking',
        'Experience with design systems and prototyping'
      ],
      icon: <Palette className="w-6 h-6" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Drive growth through data-driven marketing strategies. Manage campaigns across SEO, PPC, social media, and content marketing.',
      requirements: [
        '3+ years of digital marketing experience',
        'Experience with Google Ads, Facebook Ads, and SEO',
        'Strong analytical skills and data-driven mindset',
        'Excellent written and verbal communication'
      ],
      icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Build and maintain scalable infrastructure. Automate deployments, optimize performance, and ensure system reliability.',
      requirements: [
        '4+ years of DevOps experience',
        'Expertise in AWS, Docker, Kubernetes, CI/CD',
        'Experience with infrastructure as code (Terraform)',
        'Strong troubleshooting and automation skills'
      ],
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Lead cross-functional teams to deliver successful projects. Manage timelines, resources, and client relationships.',
      requirements: [
        '5+ years of project management experience',
        'Experience with Agile/Scrum methodologies',
        'Strong leadership and communication skills',
        'PMP or similar certification preferred'
      ],
      icon: <Briefcase className="w-6 h-6" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const cultureValues = [
    {
      title: 'Innovation',
      description: 'We encourage experimentation and embrace new ideas that push boundaries',
      icon: <Zap className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication',
      icon: <Users className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, setting high standards',
      icon: <Award className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Growth',
      description: 'We invest in our team\'s growth and provide opportunities to learn and advance',
      icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = [
    {
      question: 'What is the application process?',
      answer: 'Our process typically includes: 1) Submit your application, 2) Initial screening call, 3) Technical/role-specific assessment, 4) Interview with team members, 5) Final interview with leadership, 6) Offer. The entire process usually takes 2-3 weeks.'
    },
    {
      question: 'Do you offer remote work?',
      answer: 'Yes! We offer flexible remote and hybrid work options. Many of our team members work remotely, and we have a strong culture of remote collaboration.'
    },
    {
      question: 'What benefits do you offer?',
      answer: 'We offer competitive salaries, health insurance, flexible work arrangements, learning and development opportunities, innovation time, team events, and more.'
    },
    {
      question: 'Do you hire entry-level positions?',
      answer: 'Yes, we occasionally have openings for junior positions and internships. We believe in growing talent and providing opportunities for career development.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, AWS, Docker, Kubernetes, TensorFlow, and many more. We\'re always exploring new technologies.'
    },
    {
      question: 'How do I apply?',
      answer: 'You can apply by clicking the "Apply Now" button on any open position, or send your resume to careers@truvixoo.com. Make sure to include a cover letter explaining why you\'re interested in joining TruVixo.'
    }
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
          <div className="text-center scroll-animate">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e2cb6]/10 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
              <span className="text-sm font-semibold text-[#5e2cb6]">Join Our Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Build Your Career{' '}
              <span className="hollow-text-brand block mt-2">
                With Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join a team of innovators, creators, and problem-solvers. Work on exciting projects, grow your skills, and make an impact. We're building the future, and we want you to be part of it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-[#5e2cb6] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-[#5e2cb6]/30"
              >
                <Briefcase className="w-5 h-5" strokeWidth={2} />
                <span>View Open Positions</span>
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-[#5e2cb6] border-2 border-[#5e2cb6] font-semibold py-4 px-8 rounded-xl hover:bg-[#5e2cb6]/5 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                <Mail className="w-5 h-5" strokeWidth={2} />
                <span>Send Your Resume</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Client Section */}
      {isMounted && <div className="mt-12"><Clientele /></div>}

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Why Join{' '}
              <span className="hollow-text-brand">
                TruVixo
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job—we offer a career path with growth, learning, and impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
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

      {/* Culture & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Our{' '}
              <span className="hollow-text-brand">
                Culture
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The values that guide us and shape our work environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {cultureValues.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ color: '#5e2cb6' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Open{' '}
              <span className="hollow-text-brand">
                Positions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore current opportunities to join our team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
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
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: position.color + '10', color: position.color }}>
                      {position.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#5e2cb6] transition-colors">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-3">
                        <span className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md">
                          <Briefcase className="w-3 h-3" strokeWidth={2} />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md">
                          <Clock className="w-3 h-3" strokeWidth={2} />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md">
                          <MapPin className="w-3 h-3" strokeWidth={2} />
                          {position.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{position.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.slice(0, 3).map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-[#10b981] mt-0.5 flex-shrink-0" strokeWidth={2} />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="w-full bg-[#5e2cb6] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg shadow-[#5e2cb6]/30"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Don't see a position that matches your skills?</p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-[#5e2cb6] border-2 border-[#5e2cb6] font-semibold py-3 px-6 rounded-xl hover:bg-[#5e2cb6]/5 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" strokeWidth={2} />
              <span>Send Us Your Resume</span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQDropdown faqs={faqs} />

      {/* SEO Location Section */}
      <SEOLocationSection serviceName="Career Opportunities & Job Openings" />

      {/* Contact Section */}
      <ContactSection 
        title="Have Questions?"
        description="Want to learn more about working at TruVixo? Get in touch and we'll be happy to answer your questions."
      />

      {/* Get Quote Section - Last section before footer */}
      <GetQuoteSection
        title="Ready to Join Our"
        hollowText="Team?"
        description="Get in touch and let's discuss how you can be part of building the future with TruVixo."
        primaryCTA={{
          text: 'Call Us',
          onClick: () => setIsContactModalOpen(true)
        }}
        secondaryCTA={{
          text: 'Schedule Consultation',
          onClick: () => setIsContactModalOpen(true)
        }}
      />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}
