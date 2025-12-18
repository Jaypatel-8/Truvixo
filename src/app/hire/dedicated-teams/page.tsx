'use client'

import { Rocket, Users, Code, Zap, Target, TrendingUp, Building2, Heart, ShoppingCart, Truck, Home, CheckCircle, MessageSquare, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function HireDedicatedTeams() {
  const services = [
    {
      title: 'Full Development Team',
      description: 'Complete team of developers, designers, and managers',
      icon: <Users className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Frontend Team',
      description: 'Dedicated frontend development team',
      icon: <Code className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Backend Team',
      description: 'Dedicated backend development team',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'Mobile Team',
      description: 'Dedicated mobile development team',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#059669'
    },
    {
      title: 'DevOps Team',
      description: 'Dedicated DevOps and infrastructure team',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'QA Team',
      description: 'Dedicated quality assurance team',
      icon: <Rocket className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Users className="w-7 h-7" strokeWidth={2} />, 
      title: 'Complete Teams', 
      description: 'Full teams with developers, designers, and managers',
      color: '#5e2cb6'
    },
    { 
      icon: <Rocket className="w-7 h-7" strokeWidth={2} />, 
      title: 'Fast Assembly', 
      description: 'Assemble dedicated teams within 2-4 weeks',
      color: '#c91a6f'
    },
    { 
      icon: <Target className="w-7 h-7" strokeWidth={2} />, 
      title: 'Dedicated Focus', 
      description: 'Teams exclusively focused on your project',
      color: '#d97706'
    },
    { 
      icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, 
      title: 'Scalable', 
      description: 'Easily scale teams up or down as needed',
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
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'database' as const },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'frontend' as const }
  ]

  const processSteps = [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your team requirements, project scope, and skill set needs',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Team Planning',
      description: 'We plan the team structure, roles, and responsibilities for your project',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Team Assembly',
      description: 'We assemble a dedicated team with the right mix of skills and experience',
      icon: <Users className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Team Introduction',
      description: 'Introduce team members, conduct interviews, and ensure cultural fit',
      icon: <MessageSquare className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Onboarding & Setup',
      description: 'Complete team onboarding with access to tools, workflows, and processes',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Ongoing Management',
      description: 'Continuous team management, performance monitoring, and support',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('dedicated-teams')

  return (
    <PageTemplate
      badge={{
        icon: <Rocket className="w-4 h-4" strokeWidth={2} />,
        text: 'Hire Dedicated Teams'
      }}
      title="Hire Dedicated"
      hollowText="Teams"
      description="Hire dedicated development teams exclusively focused on your project. From full-stack teams to specialized units, we provide the team expertise you need. Our teams are assembled with the right mix of developers, designers, and managers for your project."
      services={services}
      servicesTitle="Dedicated"
      servicesHollowText="Teams"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Hire"
      whyChooseHollowText="Dedicated Teams"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Hire"
      getQuoteHollowText="Dedicated Teams?"
      getQuoteDescription="Get in touch and let's discuss how we can help you assemble the perfect dedicated team."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about hiring dedicated teams? Let's discuss your needs."
      processTitle="Team Assembly Process"
      processSubtitle="From requirement analysis to ongoing management, we ensure a seamless dedicated team experience"
      processSteps={processSteps}
    />
  )
}
