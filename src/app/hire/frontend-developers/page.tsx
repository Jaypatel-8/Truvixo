'use client'

import { Code, Zap, Eye, TrendingUp, Layers, FileCode, Target, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, MessageSquare, Rocket } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function HireFrontendDevelopers() {
  const services = [
    {
      title: 'React Development',
      description: 'Expert React developers for building modern web applications',
      icon: <Code className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Next.js Development',
      description: 'Full-stack Next.js developers for server-side rendered apps',
      icon: <FileCode className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Vue.js Development',
      description: 'Vue.js specialists for progressive web applications',
      icon: <Layers className="w-8 h-8" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'Angular Development',
      description: 'Angular experts for enterprise-grade applications',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#059669'
    },
    {
      title: 'UI/UX Implementation',
      description: 'Turn designs into pixel-perfect, responsive interfaces',
      icon: <Eye className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize frontend performance and loading speeds',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Code className="w-7 h-7" strokeWidth={2} />, 
      title: 'Expertise in Modern Frameworks', 
      description: 'Proficient in React, Next.js, Vue, Angular, and more',
      color: '#5e2cb6'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'SEO-Friendly & Fast', 
      description: 'Optimized for performance and search engines',
      color: '#c91a6f'
    },
    { 
      icon: <FileCode className="w-7 h-7" strokeWidth={2} />, 
      title: 'Clean Code', 
      description: 'Well-structured, maintainable, and documented codebase',
      color: '#d97706'
    },
    { 
      icon: <Eye className="w-7 h-7" strokeWidth={2} />, 
      title: 'UI/UX Expertise', 
      description: 'Strong understanding of user-centered design principles',
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
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000', category: 'frontend' as const },
    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: '#4FC08D', category: 'frontend' as const },
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: '#DD0031', category: 'frontend' as const },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'frontend' as const },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E', category: 'frontend' as const },
    { name: 'Tailwind CSS', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', color: '#06B6D4', category: 'frontend' as const },
    { name: 'Sass', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', color: '#CC6699', category: 'frontend' as const },
    { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', color: '#764ABC', category: 'frontend' as const },
    { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', color: '#E10098', category: 'frontend' as const }
  ]

  const processSteps = [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your project needs, tech stack preferences, and team requirements',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Developer Shortlisting',
      description: 'We match you with pre-vetted frontend developers based on your specific needs',
      icon: <Users className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Technical Interview',
      description: 'You interview candidates to assess technical skills and cultural fit',
      icon: <MessageSquare className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Trial Period',
      description: 'Optional 1-week trial to ensure the developer meets your expectations',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Onboarding & Integration',
      description: 'Smooth onboarding process with access to your tools and workflows',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous support and team management throughout the engagement',
      icon: <TrendingUp className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('frontend-developers')

  return (
    <PageTemplate
      badge={{
        icon: <Code className="w-4 h-4" strokeWidth={2} />,
        text: 'Hire Frontend Developers'
      }}
      title="Hire Frontend"
      hollowText="Developers"
      description="Hire experienced frontend developers who specialize in building responsive, high-performance web applications using modern UI frameworks. We help you turn your designs into pixel-perfect, scalable digital experiences. Our developers are experts in React, Next.js, Vue, Angular, and other cutting-edge technologies."
      services={services}
      servicesTitle="Frontend"
      servicesHollowText="Services"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Hire Our"
      whyChooseHollowText="Frontend Developers"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Hire"
      getQuoteHollowText="Frontend Developers?"
      getQuoteDescription="Get in touch and let's discuss how we can help you find the perfect frontend developers."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about hiring frontend developers? Let's discuss your needs."
      processTitle="Hiring Process"
      processSubtitle="From requirement analysis to ongoing support, we ensure a seamless hiring experience"
      processSteps={processSteps}
    />
  )
}
