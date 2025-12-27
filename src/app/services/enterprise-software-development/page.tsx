'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Building2, Cloud, Shield, Zap, Settings, Users, Network, Phone, Mail, Calendar, Heart, ShoppingCart, Truck, Home, GraduationCap, Rocket, BarChart3, CheckCircle, Target } from 'lucide-react'
import dynamic from 'next/dynamic'
import Technologies from '@/components/Technologies'
import FAQDropdown from '@/components/FAQDropdown'
import Clientele from '@/components/Clientele'
import ContactSection from '@/components/ContactSection'
import GetQuoteSection from '@/components/sections/GetQuoteSection'
import ProcessDiagram from '@/components/ProcessDiagram'
import { getFAQsForPage } from '@/lib/pageData'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function EnterpriseSoftwareDevelopment() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Use custom hook for IntersectionObserver-based scroll animations
  useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    selectors: ['.scroll-animate', '.scroll-animate-left', '.scroll-animate-right', '.scroll-animate-scale'],
    unobserveAfterIntersect: false,
    useIdleCallback: false,
  })

  const services = [
    {
      title: 'ERP System Development',
      description: 'Comprehensive enterprise resource planning systems for large organizations',
      icon: <Settings className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'CRM Solutions',
      description: 'Custom customer relationship management systems tailored to your business',
      icon: <Users className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Microservices Architecture',
      description: 'Scalable microservices-based enterprise applications',
      icon: <Network className="w-8 h-8" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'Cloud-Native Solutions',
      description: 'Enterprise applications built for cloud scalability and reliability',
      icon: <Cloud className="w-8 h-8" strokeWidth={2} />,
      color: '#059669'
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting dashboards for data-driven decisions',
      icon: <BarChart3 className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Workflow Automation',
      description: 'Automate business processes and workflows for efficiency',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'High Availability Systems',
      description: '99.9% uptime enterprise systems with failover and redundancy',
      icon: <Shield className="w-8 h-8" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'Legacy System Integration',
      description: 'Seamless integration with existing enterprise systems',
      icon: <Network className="w-8 h-8" strokeWidth={2} />,
      color: '#059669'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Building2 className="w-7 h-7" strokeWidth={2} />, 
      title: 'Enterprise Expertise', 
      description: 'Proven experience building solutions for large organizations',
      color: '#5e2cb6'
    },
    { 
      icon: <Shield className="w-7 h-7" strokeWidth={2} />, 
      title: 'Security & Compliance', 
      description: 'Enterprise-grade security and regulatory compliance built-in',
      color: '#c91a6f'
    },
    { 
      icon: <Cloud className="w-7 h-7" strokeWidth={2} />, 
      title: 'Scalable Architecture', 
      description: 'Cloud-native solutions that scale with your business',
      color: '#d97706'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'High Performance', 
      description: 'Optimized for speed, reliability, and high availability',
      color: '#059669'
    },
    { 
      icon: <Rocket className="w-7 h-7" strokeWidth={2} />, 
      title: 'Rapid Deployment', 
      description: 'Agile methodology for faster enterprise solution delivery',
      color: '#5e2cb6'
    },
    { 
      icon: <Users className="w-7 h-7" strokeWidth={2} />, 
      title: 'Dedicated Support', 
      description: '24/7 support and maintenance for enterprise systems',
      color: '#c91a6f'
    }
  ]

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'frontend' as const },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'database' as const },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D', category: 'database' as const },
    { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: '#0078D4', category: 'cloud' as const }
  ]

  const processSteps = [
    {
      title: 'Enterprise Analysis',
      description: 'Analyze business requirements, existing systems, and integration needs for enterprise solutions',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Architecture Design',
      description: 'Design scalable, secure enterprise architecture with high availability and disaster recovery',
      icon: <Network className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Development & Integration',
      description: 'Build enterprise software with microservices architecture and integrate with existing systems',
      icon: <Settings className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Security & Compliance',
      description: 'Implement enterprise-grade security, compliance standards, and access controls',
      icon: <Shield className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Testing & QA',
      description: 'Comprehensive testing including load testing, security testing, and user acceptance testing',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Deployment & Support',
      description: 'Deploy with zero downtime and provide 24/7 enterprise support and monitoring',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const industries = [
    { name: 'Fintech', icon: <Building2 className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Healthcare', icon: <Heart className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'Manufacturing', icon: <Settings className="w-7 h-7" strokeWidth={2} />, color: '#d97706' },
    { name: 'Retail', icon: <ShoppingCart className="w-7 h-7" strokeWidth={2} />, color: '#059669' },
    { name: 'Logistics', icon: <Truck className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Real Estate', icon: <Home className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' }
  ]

  const faqs = getFAQsForPage('enterprise-software-development')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <section className="relative min-h-[85vh] bg-white flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e2cb6]/10 rounded-full mb-6">
                <Building2 className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#5e2cb6]">Enterprise Solutions</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Enterprise Software{' '}
                <span className="hollow-text-brand block mt-2">
                  Development
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                We build secure, scalable enterprise solutions that streamline operations and enable digital transformation for large organizations.
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Enterprise{' '}
              <span className="hollow-text-brand">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive enterprise software solutions
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Why Choose Enterprise{' '}
              <span className="hollow-text-brand">
                Software Development
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver enterprise-grade software solutions that are built specifically for large organizations, ensuring optimal performance, scalability, and security.
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
              Serving diverse industries with tailored enterprise solutions
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

      {/* Additional Content - Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Enterprise Software{' '}
              <span className="hollow-text-brand">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how enterprise software development can transform your organization and drive efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unified Operations</h3>
              <p className="text-gray-600">
                Integrate all business functions into a single platform. Enterprise software eliminates data silos, improves collaboration, and provides a unified view of operations across departments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">
                Built-in security features including encryption, access controls, audit trails, and compliance with industry standards like SOC 2, HIPAA, and GDPR.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#d97706]/10 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-[#d97706]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Infrastructure</h3>
              <p className="text-gray-600">
                Cloud-native architecture scales automatically with your business growth. Handle increasing users, data, and transactions without performance degradation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#059669]/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-[#059669]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Driven Decisions</h3>
              <p className="text-gray-600">
                Real-time analytics and reporting dashboards provide insights for data-driven decision making. Track KPIs, monitor performance, and identify opportunities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Process Automation</h3>
              <p className="text-gray-600">
                Automate repetitive tasks and workflows to increase efficiency. Reduce manual errors, save time, and allow employees to focus on strategic work.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High Availability</h3>
              <p className="text-gray-600">
                99.9% uptime with redundant systems, failover mechanisms, and disaster recovery. Ensure business continuity even during infrastructure failures.
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
              Enterprise Software{' '}
              <span className="hollow-text-brand">
                Use Cases
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how enterprises leverage custom software to streamline operations and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#5e2cb6]/5 to-[#c91a6f]/5 rounded-xl p-8 border border-[#5e2cb6]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ERP Systems</h3>
              <p className="text-gray-600 mb-4">
                Build comprehensive ERP systems that integrate finance, HR, inventory, manufacturing, and sales. Streamline operations and provide real-time visibility across the organization.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Financial management and accounting</li>
                <li>• Inventory and supply chain management</li>
                <li>• Human resources and payroll</li>
                <li>• Manufacturing and production planning</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#d97706]/5 to-[#059669]/5 rounded-xl p-8 border border-[#d97706]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise CRM</h3>
              <p className="text-gray-600 mb-4">
                Develop custom CRM systems for large sales teams. Manage customer relationships, track sales pipelines, automate follow-ups, and generate comprehensive reports.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Lead and opportunity management</li>
                <li>• Sales pipeline tracking</li>
                <li>• Customer interaction history</li>
                <li>• Sales forecasting and analytics</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#059669]/5 to-[#5e2cb6]/5 rounded-xl p-8 border border-[#059669]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Intelligence Platforms</h3>
              <p className="text-gray-600 mb-4">
                Create BI platforms that aggregate data from multiple sources, provide real-time dashboards, and enable advanced analytics for strategic decision making.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Multi-source data integration</li>
                <li>• Real-time dashboards and KPIs</li>
                <li>• Advanced analytics and reporting</li>
                <li>• Predictive analytics and forecasting</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#c91a6f]/5 to-[#d97706]/5 rounded-xl p-8 border border-[#c91a6f]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Workflow Automation Systems</h3>
              <p className="text-gray-600 mb-4">
                Build workflow automation platforms that streamline business processes, manage approvals, and automate repetitive tasks across departments.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Process workflow design</li>
                <li>• Approval and routing automation</li>
                <li>• Document management</li>
                <li>• Integration with existing systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Technologies technologies={technologies} />
      <ProcessDiagram title="Enterprise Software Development Process" subtitle="From analysis to deployment, we ensure enterprise-grade solutions at every step" steps={processSteps} />
      <FAQDropdown faqs={faqs} />
      <ContactSection title="Get in Touch" description="Have a project in mind? Let's discuss how we can help transform your enterprise." />

      {/* Get Quote Section - Last section before footer */}
      <GetQuoteSection
        title="Ready to Transform Your"
        hollowText="Enterprise?"
        description="Get in touch and let's discuss how we can help transform your enterprise with custom software solutions."
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

