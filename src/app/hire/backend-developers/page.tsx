'use client'

import { Database, Code, Server, Zap, Shield, Network, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, MessageSquare, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function HireBackendDevelopers() {
  const services = [
    {
      title: 'Node.js Development',
      description: 'Expert Node.js developers for scalable backend systems',
      icon: <Code className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Python Development',
      description: 'Python specialists for APIs and data processing',
      icon: <Server className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'API Development',
      description: 'Build RESTful and GraphQL APIs',
      icon: <Network className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Database Design',
      description: 'Design and optimize databases for performance',
      icon: <Database className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Microservices Architecture',
      description: 'Build scalable microservices systems',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Security Implementation',
      description: 'Implement authentication and security best practices',
      icon: <Shield className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Server className="w-7 h-7" strokeWidth={2} />, 
      title: 'Backend Expertise', 
      description: 'Deep expertise in Node.js, Python, Java, .NET, and more',
      color: '#5e2cb6'
    },
    { 
      icon: <Database className="w-7 h-7" strokeWidth={2} />, 
      title: 'Database Mastery', 
      description: 'Proficient in SQL and NoSQL databases',
      color: '#c91a6f'
    },
    { 
      icon: <Network className="w-7 h-7" strokeWidth={2} />, 
      title: 'API Development', 
      description: 'Build scalable REST and GraphQL APIs',
      color: '#fecc4d'
    },
    { 
      icon: <Shield className="w-7 h-7" strokeWidth={2} />, 
      title: 'Security First', 
      description: 'Enterprise-grade security implementation',
      color: '#10b981'
    }
  ]

  const industries = [
    { name: 'Fintech', icon: <Building2 className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Healthcare', icon: <Heart className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'E-Commerce', icon: <ShoppingCart className="w-7 h-7" strokeWidth={2} />, color: '#fecc4d' },
    { name: 'Logistics', icon: <Truck className="w-7 h-7" strokeWidth={2} />, color: '#10b981' },
    { name: 'Real Estate', icon: <Home className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' }
  ]

  const technologies = [
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#ED8B00', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'database' as const },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D', category: 'database' as const },
    { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', color: '#E10098', category: 'backend' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const }
  ]

  const processSteps = [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your backend requirements, architecture needs, and scalability goals',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Developer Matching',
      description: 'We match you with backend developers skilled in your preferred tech stack',
      icon: <Users className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Technical Assessment',
      description: 'Comprehensive technical interviews covering architecture, databases, and APIs',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Trial Period',
      description: 'Optional trial period to evaluate developer performance and fit',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Team Integration',
      description: 'Seamless integration with your development team and workflows',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Continuous Support',
      description: 'Ongoing support, code reviews, and performance monitoring',
      icon: <Zap className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('backend-developers')

  return (
    <PageTemplate
      badge={{
        icon: <Server className="w-4 h-4" strokeWidth={2} />,
        text: 'Hire Backend Developers'
      }}
      title="Hire Backend"
      hollowText="Developers"
      description="Hire experienced backend developers who build scalable, secure, and high-performance server-side applications. From APIs to databases, we provide the backend expertise you need. Our developers are experts in Node.js, Python, Java, .NET, and modern backend technologies."
      services={services}
      servicesTitle="Backend"
      servicesHollowText="Services"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Hire Our"
      whyChooseHollowText="Backend Developers"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Hire"
      getQuoteHollowText="Backend Developers?"
      getQuoteDescription="Get in touch and let's discuss how we can help you find the perfect backend developers."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about hiring backend developers? Let's discuss your needs."
      processTitle="Hiring Process"
      processSubtitle="From requirement analysis to ongoing support, we ensure a seamless hiring experience"
      processSteps={processSteps}
    />
  )
}
