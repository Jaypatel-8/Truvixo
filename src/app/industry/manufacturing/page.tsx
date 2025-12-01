'use client'

import { Settings, Cog, Zap, TrendingUp, Target, Shield, Building2, Heart, ShoppingCart, Truck, Home, Code, Rocket, CheckCircle, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function ManufacturingDevelopment() {
  const services = [
    {
      title: 'ERP Systems',
      description: 'Custom ERP solutions for manufacturing operations',
      icon: <Settings className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Production Management',
      description: 'Production planning and scheduling systems',
      icon: <Cog className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Quality Control',
      description: 'Quality assurance and inspection systems',
      icon: <Shield className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'IoT Integration',
      description: 'IoT devices and smart manufacturing solutions',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain and logistics',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Manufacturing analytics and business intelligence',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Settings className="w-7 h-7" strokeWidth={2} />, 
      title: 'Manufacturing Expertise', 
      description: 'Deep understanding of manufacturing workflows and processes',
      color: '#5e2cb6'
    },
    { 
      icon: <Cog className="w-7 h-7" strokeWidth={2} />, 
      title: 'ERP Development', 
      description: 'Build custom ERP systems tailored for manufacturing',
      color: '#c91a6f'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'IoT Integration', 
      description: 'Smart manufacturing with IoT and Industry 4.0',
      color: '#fecc4d'
    },
    { 
      icon: <Shield className="w-7 h-7" strokeWidth={2} />, 
      title: 'Quality Focus', 
      description: 'Quality control and assurance built into every solution',
      color: '#10b981'
    }
  ]

  const industries = [
    { name: 'Automotive', icon: <Settings className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Electronics', icon: <Zap className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'Food & Beverage', icon: <Target className="w-7 h-7" strokeWidth={2} />, color: '#fecc4d' },
    { name: 'Pharmaceutical', icon: <Shield className="w-7 h-7" strokeWidth={2} />, color: '#10b981' },
    { name: 'Textiles', icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Aerospace', icon: <Cog className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' }
  ]

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const },
    { name: 'IoT Platforms', logo: 'https://www.iot.org/favicon.ico', color: '#5A5A5A', category: 'backend' as const },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'database' as const }
  ]

  const processSteps = [
    {
      title: 'Discovery & Analysis',
      description: 'We analyze your manufacturing operations, production workflows, and ERP requirements',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'System Design',
      description: 'Design manufacturing ERP with production planning, quality control, and supply chain',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'IoT Integration Planning',
      description: 'Plan IoT device integration, sensor networks, and Industry 4.0 connectivity',
      icon: <Zap className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Development & Testing',
      description: 'Build manufacturing platform with ERP, production management, and analytics',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing of production workflows, quality control, and IoT integrations',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Deployment & Support',
      description: 'Deploy with IoT integration, user training, and ongoing manufacturing support',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('manufacturing')

  return (
    <PageTemplate
      badge={{
        icon: <Settings className="w-4 h-4" strokeWidth={2} />,
        text: 'Manufacturing Solutions'
      }}
      title="Manufacturing"
      hollowText="Development"
      description="We build comprehensive manufacturing solutions that optimize production. From ERP systems to IoT integration, we deliver manufacturing technology that drives efficiency. Our solutions are built with production management, quality control, and Industry 4.0 in mind."
      services={services}
      servicesTitle="Manufacturing"
      servicesHollowText="Solutions"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Choose"
      whyChooseHollowText="Manufacturing Development"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Build"
      getQuoteHollowText="Manufacturing Solutions?"
      getQuoteDescription="Get in touch and let's discuss how we can help optimize your manufacturing operations."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about manufacturing development? Let's discuss your project."
      processTitle="Manufacturing Development Process"
      processSubtitle="From discovery to deployment, we ensure production efficiency, quality control, and Industry 4.0 integration at every step"
      processSteps={processSteps}
    />
  )
}
