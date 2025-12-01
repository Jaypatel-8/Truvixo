'use client'

import { Target, Palette, Layers, Eye, Zap, TrendingUp, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, MessageSquare, Rocket, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function HireUIUXDesigners() {
  const services = [
    {
      title: 'UI Design',
      description: 'Create beautiful, intuitive user interfaces',
      icon: <Palette className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'UX Research',
      description: 'User research and usability testing',
      icon: <Eye className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Design Systems',
      description: 'Build comprehensive design systems and component libraries',
      icon: <Layers className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Prototyping',
      description: 'Interactive prototypes and wireframes',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'User Testing',
      description: 'Conduct user testing and gather feedback',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Design Handoff',
      description: 'Seamless design-to-development handoff',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Target className="w-7 h-7" strokeWidth={2} />, 
      title: 'User-Centered Design', 
      description: 'Design focused on user needs and experiences',
      color: '#5e2cb6'
    },
    { 
      icon: <Palette className="w-7 h-7" strokeWidth={2} />, 
      title: 'Modern Design Tools', 
      description: 'Proficient in Figma, Adobe XD, Sketch, and more',
      color: '#c91a6f'
    },
    { 
      icon: <Layers className="w-7 h-7" strokeWidth={2} />, 
      title: 'Design Systems', 
      description: 'Build scalable, consistent design systems',
      color: '#fecc4d'
    },
    { 
      icon: <Eye className="w-7 h-7" strokeWidth={2} />, 
      title: 'UX Research', 
      description: 'Data-driven design decisions based on user research',
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
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: '#F24E1E', category: 'frontend' as const },
    { name: 'Adobe XD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg', color: '#FF61F6', category: 'frontend' as const },
    { name: 'Sketch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg', color: '#F7B500', category: 'frontend' as const },
    { name: 'Adobe Illustrator', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg', color: '#FF9A00', category: 'frontend' as const },
    { name: 'Adobe Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', color: '#31A8FF', category: 'frontend' as const },
    { name: 'InVision', logo: 'https://www.invisionapp.com/favicon.ico', color: '#FF3366', category: 'frontend' as const },
    { name: 'Principle', logo: 'https://principleformac.com/favicon.ico', color: '#5A5A5A', category: 'frontend' as const }
  ]

  const processSteps = [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your design needs, brand guidelines, and user experience goals',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Designer Matching',
      description: 'We match you with UI/UX designers skilled in your industry and design style',
      icon: <Users className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Portfolio Review',
      description: 'Review designer portfolios showcasing UI/UX projects and design systems',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Design Challenge',
      description: 'Optional design challenge to assess designer skills and creativity',
      icon: <Palette className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Trial Period',
      description: 'Optional trial period to evaluate designer performance on real projects',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Team Integration',
      description: 'Seamless integration with your product and development teams',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('ui-ux-designers')

  return (
    <PageTemplate
      badge={{
        icon: <Target className="w-4 h-4" strokeWidth={2} />,
        text: 'Hire UI/UX Designers'
      }}
      title="Hire UI/UX"
      hollowText="Designers"
      description="Hire experienced UI/UX designers who create beautiful, user-centered designs. From research to prototyping, we provide the design expertise you need. Our designers are experts in Figma, Adobe XD, Sketch, and modern design tools."
      services={services}
      servicesTitle="UI/UX"
      servicesHollowText="Services"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Hire Our"
      whyChooseHollowText="UI/UX Designers"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Hire"
      getQuoteHollowText="UI/UX Designers?"
      getQuoteDescription="Get in touch and let's discuss how we can help you find the perfect UI/UX designers."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about hiring UI/UX designers? Let's discuss your needs."
      processTitle="Hiring Process"
      processSubtitle="From requirement analysis to team integration, we ensure a seamless UI/UX design experience"
      processSteps={processSteps}
    />
  )
}
