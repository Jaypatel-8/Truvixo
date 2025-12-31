'use client'

import { Code, Layers, Database, Cloud, Zap, Network, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, MessageSquare, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
interface FullStackDevelopersPageClientProps {
  faqs: Array<{ question: string; answer: string }>
}

export default function FullStackDevelopersPageClient({ faqs }: FullStackDevelopersPageClientProps) {
  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'End-to-end web application development',
      icon: <Code className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'API & Backend Development',
      description: 'Build scalable APIs and server-side logic',
      icon: <Network className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Frontend Development',
      description: 'Modern UI/UX implementation with React, Vue, Angular',
      icon: <Layers className="w-8 h-8" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'Database Design',
      description: 'Design and optimize databases for performance',
      icon: <Database className="w-8 h-8" strokeWidth={2} />,
      color: '#059669'
    },
    {
      title: 'Cloud Deployment',
      description: 'Deploy and manage applications on cloud platforms',
      icon: <Cloud className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'DevOps Integration',
      description: 'CI/CD pipelines and infrastructure automation',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Code className="w-7 h-7" strokeWidth={2} />, 
      title: 'End-to-End Expertise', 
      description: 'Handle both frontend and backend development seamlessly',
      color: '#5e2cb6'
    },
    { 
      icon: <Layers className="w-7 h-7" strokeWidth={2} />, 
      title: 'Modern Tech Stack', 
      description: 'Proficient in React, Node.js, Python, and more',
      color: '#c91a6f'
    },
    { 
      icon: <Database className="w-7 h-7" strokeWidth={2} />, 
      title: 'Database Mastery', 
      description: 'Expertise in SQL and NoSQL databases',
      color: '#d97706'
    },
    { 
      icon: <Cloud className="w-7 h-7" strokeWidth={2} />, 
      title: 'Cloud-Native', 
      description: 'Build and deploy scalable cloud applications',
      color: '#059669'
    }
  ]

  const industries = [
    { name: 'Fintech', icon: <Building2 className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Healthcare', icon: <Heart className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'E-Commerce', icon: <ShoppingCart className="w-7 h-7" strokeWidth={2} />, color: '#d97706' },
    { name: 'Logistics', icon: <Truck className="w-7 h-7" strokeWidth={2} />, color: '#059669' },
    { name: 'Real Estate', icon: <Home className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' }
  ]

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'frontend' as const },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000', category: 'frontend' as const },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'database' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', color: '#E10098', category: 'backend' as const },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D', category: 'database' as const }
  ]

  const processSteps = [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your full-stack requirements, tech stack preferences, and project scope',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Developer Matching',
      description: 'We match you with full-stack developers skilled in your preferred technologies',
      icon: <Users className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Technical Assessment',
      description: 'Comprehensive interviews covering frontend, backend, databases, and DevOps',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Portfolio Review',
      description: 'Review developer portfolios showcasing full-stack projects and capabilities',
      icon: <MessageSquare className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Trial Period',
      description: 'Optional trial period to evaluate developer performance on real projects',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Team Integration',
      description: 'Seamless integration with your development team and project workflows',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]


  return (
    <PageTemplate
      badge={{
        icon: <Code className="w-4 h-4" strokeWidth={2} />,
        text: 'Hire Full-Stack Developers'
      }}
      title="Hire Full-Stack"
      hollowText="Developers"
      description="Hire experienced full-stack developers who can handle both frontend and backend development. Build complete applications with a single developer or team. Our full-stack developers are experts in React, Node.js, Python, databases, and cloud technologies."
      services={services}
      servicesTitle="Full-Stack"
      servicesHollowText="Services"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Hire Our"
      whyChooseHollowText="Full-Stack Developers"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Hire"
      getQuoteHollowText="Full-Stack Developers?"
      getQuoteDescription="Get in touch and let's discuss how we can help you find the perfect full-stack developers."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about hiring full-stack developers? Let's discuss your needs."
      processTitle="Hiring Process"
      processSubtitle="From requirement analysis to team integration, we ensure a seamless full-stack development experience"
      processSteps={processSteps}
    />
  )
}
