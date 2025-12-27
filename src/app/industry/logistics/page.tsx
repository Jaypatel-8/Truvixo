'use client'

import { useEffect, useState } from 'react'
import { Truck, Package, MapPin, Zap, TrendingUp, Target, Building2, Heart, ShoppingCart, Home, GraduationCap, Code, Rocket, CheckCircle, FileText, Shield, ArrowRight, Phone, Mail, Calendar } from 'lucide-react'
import dynamic from 'next/dynamic'
import Technologies from '@/components/Technologies'
import FAQDropdown from '@/components/FAQDropdown'
import Clientele from '@/components/Clientele'
import ContactSection from '@/components/ContactSection'
import ProcessDiagram from '@/components/ProcessDiagram'
import { getFAQsForPage } from '@/lib/pageData'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function LogisticsDevelopment() {
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
      title: 'Fleet Management',
      description: 'Comprehensive fleet tracking and management systems',
      icon: <Truck className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Route Optimization',
      description: 'AI-powered route planning and optimization',
      icon: <MapPin className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Warehouse Management',
      description: 'Complete warehouse and inventory management',
      icon: <Package className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Tracking Systems',
      description: 'Real-time shipment and package tracking',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Delivery Management',
      description: 'End-to-end delivery and fulfillment systems',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Logistics Analytics',
      description: 'Business intelligence and logistics analytics',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Truck className="w-7 h-7" strokeWidth={2} />, 
      title: 'Logistics Expertise', 
      description: 'Deep understanding of logistics and supply chain operations',
      color: '#5e2cb6'
    },
    { 
      icon: <MapPin className="w-7 h-7" strokeWidth={2} />, 
      title: 'Route Optimization', 
      description: 'AI-powered route planning for efficiency',
      color: '#c91a6f'
    },
    { 
      icon: <Package className="w-7 h-7" strokeWidth={2} />, 
      title: 'Real-Time Tracking', 
      description: 'GPS tracking and real-time shipment monitoring',
      color: '#fecc4d'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'Scalable Solutions', 
      description: 'Build systems that scale with your logistics operations',
      color: '#10b981'
    }
  ]

  const industries = [
    { name: 'Shipping', icon: <Truck className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Warehousing', icon: <Package className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'Last Mile', icon: <MapPin className="w-7 h-7" strokeWidth={2} />, color: '#fecc4d' },
    { name: 'Supply Chain', icon: <Target className="w-7 h-7" strokeWidth={2} />, color: '#10b981' },
    { name: '3PL', icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Freight', icon: <Truck className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' }
  ]

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Google Maps API', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/googlemaps.svg', color: '#4285F4', category: 'backend' as const },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D', category: 'database' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
    { name: 'IoT Integration', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/arduino.svg', color: '#5A5A5A', category: 'backend' as const }
  ]

  const processSteps = [
    {
      title: 'Discovery & Analysis',
      description: 'We analyze your logistics operations, fleet size, and supply chain requirements',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'System Design',
      description: 'Design logistics architecture with GPS tracking, route optimization, and warehouse management',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Integration Planning',
      description: 'Plan integrations with shipping carriers, GPS devices, and warehouse systems',
      icon: <Shield className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Development & Testing',
      description: 'Build logistics platform with real-time tracking, route optimization, and analytics',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Performance Testing',
      description: 'Rigorous testing of route algorithms, tracking accuracy, and system performance',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Deployment & Support',
      description: 'Deploy with 24/7 monitoring, GPS integration, and ongoing logistics optimization',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('logistics')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      {/* 1. Hero Section - Modern & Sleek */}
      <section className="relative min-h-[85vh] bg-white flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#fecc4d]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e2cb6]/10 rounded-full mb-6">
                <Truck className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#5e2cb6]">Logistics Solutions</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Logistics &{' '}
                <span className="hollow-text-brand block mt-2">
                  Transportation
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                We build comprehensive logistics and transportation solutions that optimize operations. From fleet management to route optimization, we deliver logistics technology that drives efficiency.
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

            {/* Right Visual - Service Cards Preview */}
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

      {/* 2. Our Client Section */}
      {isMounted && <div className="mt-12"><Clientele /></div>}

      {/* 3. Services Section - Modern Grid with Colored Icons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Logistics{' '}
              <span className="hollow-text-brand">
                Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics technology solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
                style={{ 
                  borderColor: service.color + '40',
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

      {/* 4. Why Choose Section - Modern Grid Design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Why Choose Logistics{' '}
              <span className="hollow-text-brand">
                Development
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive logistics solutions that optimize operations and drive efficiency.
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

      {/* 5. Industries Section - Compact Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Logistics{' '}
              <span className="hollow-text-brand">
                Segments
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Serving diverse logistics segments with tailored solutions
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

      {/* 6. Get a Quote Section - Modern CTA */}
      <section className="py-20 bg-[#5e2cb6] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fecc4d]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Build{' '}
              <span className="hollow-text-white">
                Logistics Solutions?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              Get in touch and let's discuss how we can help optimize your logistics operations.
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

      {/* 7. Technologies We Use */}
      <Technologies technologies={technologies} />

      {/* 8. Process Diagram */}
      <ProcessDiagram
        title="Logistics Development Process"
        subtitle="From discovery to deployment, we ensure efficient operations, real-time tracking, and route optimization at every step"
        steps={processSteps}
      />

      {/* 9. FAQs */}
      <FAQDropdown faqs={faqs} />

      {/* 10. Contact Section */}
      <ContactSection 
        title="Get in Touch"
        description="Have questions about logistics development? Let's discuss your project."
      />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}

