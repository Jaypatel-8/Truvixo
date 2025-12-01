'use client'

import { Home, Building2, MapPin, Target, TrendingUp, Zap, Heart, ShoppingCart, Truck, GraduationCap, Code, Rocket, CheckCircle, FileText, Shield } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function RealEstateDevelopment() {
  const services = [
    {
      title: 'Property Management Systems',
      description: 'Complete property and tenant management platforms',
      icon: <Building2 className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Real Estate Listings',
      description: 'Property listing and marketplace platforms',
      icon: <Home className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Virtual Tours',
      description: '3D virtual tours and property visualization',
      icon: <MapPin className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'CRM for Real Estate',
      description: 'Customer relationship management for agents',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Document Management',
      description: 'Digital document storage and management',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Property analytics and market insights',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Home className="w-7 h-7" strokeWidth={2} />, 
      title: 'Real Estate Expertise', 
      description: 'Deep understanding of real estate workflows and requirements',
      color: '#5e2cb6'
    },
    { 
      icon: <Building2 className="w-7 h-7" strokeWidth={2} />, 
      title: 'Property Management', 
      description: 'Build comprehensive property management systems',
      color: '#c91a6f'
    },
    { 
      icon: <MapPin className="w-7 h-7" strokeWidth={2} />, 
      title: 'Virtual Tours', 
      description: '3D visualization and virtual property tours',
      color: '#fecc4d'
    },
    { 
      icon: <Target className="w-7 h-7" strokeWidth={2} />, 
      title: 'CRM Integration', 
      description: 'Seamless CRM integration for real estate agents',
      color: '#10b981'
    }
  ]

  const industries = [
    { name: 'Residential', icon: <Home className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Commercial', icon: <Building2 className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'Property Management', icon: <Target className="w-7 h-7" strokeWidth={2} />, color: '#fecc4d' },
    { name: 'Real Estate Agents', icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, color: '#10b981' },
    { name: 'Developers', icon: <Zap className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Brokerages', icon: <Building2 className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' }
  ]

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'Google Maps API', logo: 'https://www.google.com/maps/favicon.ico', color: '#4285F4', category: 'backend' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Three.js', logo: 'https://threejs.org/favicon.ico', color: '#000000', category: 'frontend' as const },
    { name: 'Matterport', logo: 'https://matterport.com/favicon.ico', color: '#5A5A5A', category: 'frontend' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D', category: 'database' as const }
  ]

  const processSteps = [
    {
      title: 'Discovery & Requirements',
      description: 'We analyze your real estate needs, property types, and business workflows',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'System Design',
      description: 'Design real estate platform with property management, listings, and CRM',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Integration Planning',
      description: 'Plan integrations with MLS, payment gateways, and document management systems',
      icon: <Shield className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Development & Testing',
      description: 'Build real estate platform with virtual tours, property search, and analytics',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing of property search, virtual tours, and transaction workflows',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Launch & Support',
      description: 'Deploy with MLS integration, user training, and ongoing real estate support',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('real-estate')

  return (
    <PageTemplate
      badge={{
        icon: <Home className="w-4 h-4" strokeWidth={2} />,
        text: 'Real Estate Solutions'
      }}
      title="Real Estate"
      hollowText="Development"
      description="We build comprehensive real estate solutions that streamline operations. From property management to virtual tours, we deliver real estate technology that transforms the industry. Our solutions are built with property search, virtual tours, and transaction management in mind."
      services={services}
      servicesTitle="Real Estate"
      servicesHollowText="Solutions"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Choose"
      whyChooseHollowText="Real Estate Development"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Build"
      getQuoteHollowText="Real Estate Solutions?"
      getQuoteDescription="Get in touch and let's discuss how we can help transform your real estate business."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about real estate development? Let's discuss your project."
      processTitle="Real Estate Development Process"
      processSubtitle="From discovery to launch, we ensure property management excellence, virtual experiences, and transaction efficiency at every step"
      processSteps={processSteps}
    />
  )
}
