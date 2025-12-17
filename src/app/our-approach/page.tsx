'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle, Target, Zap, Code, Rocket, Shield, Brain, Users, TrendingUp, Award, Lightbulb, BarChart3, Clock, Globe, MessageSquare, Calendar, Phone, Mail, Settings, Network, FileText, Layers } from 'lucide-react'
import dynamic from 'next/dynamic'
import SEOLocationSection from '@/components/SEOLocationSection'
import ContactSection from '@/components/ContactSection'
import Clientele from '@/components/Clientele'
import Technologies from '@/components/Technologies'
import FAQDropdown from '@/components/FAQDropdown'
import ProcessDiagram from '@/components/ProcessDiagram'
import GetQuoteSection from '@/components/sections/GetQuoteSection'
import { getFAQsForPage } from '@/lib/pageData'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function OurApproach() {
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

  const methodology = [
    {
      title: 'AI-Driven Strategy',
      description: 'We leverage artificial intelligence and machine learning to analyze data, predict trends, and make informed decisions that drive results.',
      icon: <Brain className="w-7 h-7" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Agile & Iterative',
      description: 'We follow agile methodologies, delivering value in sprints and continuously improving based on feedback and data insights.',
      icon: <Zap className="w-7 h-7" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Every decision is backed by data. We measure, analyze, and optimize continuously to ensure maximum ROI and performance.',
      icon: <BarChart3 className="w-7 h-7" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Client-Centric Focus',
      description: 'Your success is our priority. We work as an extension of your team, understanding your business deeply to deliver tailored solutions.',
      icon: <Users className="w-7 h-7" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Innovation First',
      description: 'We stay ahead of the curve, adopting cutting-edge technologies and methodologies to give you a competitive advantage.',
      icon: <Lightbulb className="w-7 h-7" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Transparent Communication',
      description: 'Clear, honest communication at every step. Regular updates, detailed reports, and open dialogue ensure you\'re always informed.',
      icon: <MessageSquare className="w-7 h-7" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const insights = [
    {
      title: 'Understanding Your Business',
      description: 'We start by deeply understanding your business goals, challenges, market position, and competitive landscape. This foundation ensures every solution is aligned with your strategic objectives.',
      icon: <Target className="w-6 h-6" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Market Research & Analysis',
      description: 'Comprehensive market research helps us identify opportunities, understand user behavior, and position your solution for maximum impact in the market.',
      icon: <BarChart3 className="w-6 h-6" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Technology Assessment',
      description: 'We evaluate your current technology stack, identify gaps, and recommend the best tools and platforms that align with your goals and budget.',
      icon: <Code className="w-6 h-6" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Competitive Intelligence',
      description: 'We analyze your competitors to identify strengths, weaknesses, and opportunities, helping you differentiate and gain competitive advantage.',
      icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'User Research & Personas',
      description: 'We create detailed user personas and conduct research to understand your audience\'s needs, pain points, and behaviors, ensuring solutions resonate.',
      icon: <Users className="w-6 h-6" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'ROI & Success Metrics',
      description: 'We define clear success metrics and KPIs upfront, ensuring we can measure impact and demonstrate value throughout the engagement.',
      icon: <Award className="w-6 h-6" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const principles = [
    {
      title: 'Quality Over Quantity',
      description: 'We focus on delivering exceptional quality rather than rushing to meet deadlines. Every solution is crafted with attention to detail and excellence.',
      icon: <Award className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Scalability & Future-Proofing',
      description: 'We build solutions that scale with your business and adapt to future needs, ensuring long-term value and sustainability.',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Security & Compliance',
      description: 'Security is built into every solution from the ground up, with compliance standards and best practices ensuring data protection and regulatory adherence.',
      icon: <Shield className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Continuous Improvement',
      description: 'We believe in continuous learning and improvement, regularly updating our processes and staying current with industry best practices.',
      icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000', category: 'frontend' as const },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'database' as const },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'frontend' as const }
  ]

  const processSteps = [
    {
      title: 'Discovery & Research',
      description: 'Deep dive into your business, market, competitors, and users to understand goals, challenges, and opportunities',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Strategy & Planning',
      description: 'Develop comprehensive strategy with clear objectives, roadmap, success metrics, and resource allocation',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Design & Architecture',
      description: 'Create detailed designs, system architecture, and technical specifications aligned with your requirements',
      icon: <Layers className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Development & Execution',
      description: 'Build solutions using agile methodology with regular sprints, demos, and iterative improvements',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing including unit, integration, performance, and security testing to ensure quality',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Deployment & Launch',
      description: 'Smooth deployment with zero downtime, monitoring setup, and comprehensive launch support',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Optimization & Growth',
      description: 'Continuous monitoring, optimization, and enhancement based on data insights and user feedback',
      icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = [
    {
      question: 'What methodology do you follow?',
      answer: 'We follow agile and iterative methodologies, delivering value in sprints with continuous feedback and improvement. Our approach is flexible and adapts to your specific needs.'
    },
    {
      question: 'How do you ensure quality?',
      answer: 'We have rigorous quality assurance processes including code reviews, automated testing, performance testing, and security audits. Quality is built into every step of our process.'
    },
    {
      question: 'How do you measure success?',
      answer: 'We define clear success metrics and KPIs upfront, track them throughout the project, and provide regular reports showing progress and ROI. We measure what matters to your business.'
    },
    {
      question: 'How do you handle communication?',
      answer: 'We maintain transparent, regular communication through daily standups, weekly reports, and scheduled reviews. You\'ll always know what\'s happening and have direct access to the team.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We work seamlessly as an extension of your team, integrating with your processes, tools, and workflows. Collaboration is key to our approach.'
    },
    {
      question: 'How do you stay current with technology?',
      answer: 'We invest heavily in continuous learning, research, and experimentation. Our team regularly explores new technologies, attends conferences, and implements best practices.'
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e2cb6]/10 rounded-full mb-6">
                <Lightbulb className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#5e2cb6]">Our Approach</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                How We{' '}
                <span className="hollow-text-brand block mt-2">
                  Work
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Our approach combines AI-driven insights, agile methodology, and client-centric focus to deliver exceptional results. We don't just build solutions—we craft strategies that drive growth and transformation.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-[#5e2cb6] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-[#5e2cb6]/30"
                >
                  <Calendar className="w-5 h-5" strokeWidth={2} />
                  <span>Get Started</span>
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-white text-[#5e2cb6] border-2 border-[#5e2cb6] font-semibold py-4 px-8 rounded-xl hover:bg-[#5e2cb6]/5 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4 scroll-animate-scale">
              {methodology.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{ borderColor: item.color + '40' }}
                >
                  <div className="mb-4" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Client Section */}
      {isMounted && <div className="mt-12"><Clientele /></div>}

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Our{' '}
              <span className="hollow-text-brand">
                Methodology
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven approach that combines innovation, agility, and client focus to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((item, index) => (
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

      {/* Insights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Strategic{' '}
              <span className="hollow-text-brand">
                Insights
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep research and analysis form the foundation of every successful project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: item.color + '10', color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Core{' '}
              <span className="hollow-text-brand">
                Principles
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The fundamental values that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {principles.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all"
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

      {/* Process Diagram */}
      <ProcessDiagram 
        title="Our Process"
        subtitle="From discovery to optimization, a comprehensive approach that delivers results"
        steps={processSteps}
      />

      {/* Technologies Section */}
      <Technologies technologies={technologies} />

      {/* FAQs Section */}
      <FAQDropdown faqs={faqs} />

      {/* SEO Location Section */}
      <SEOLocationSection serviceName="Business Strategy & Digital Transformation" />

      {/* Contact Section */}
      <ContactSection 
        title="Get in Touch"
        description="Have a project in mind? Let's discuss how our approach can help transform your business."
      />

      {/* Get Quote Section - Last section before footer */}
      <GetQuoteSection
        title="Ready to Transform Your"
        hollowText="Business?"
        description="Get in touch and let's discuss how our approach can help you achieve your goals and drive growth."
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
