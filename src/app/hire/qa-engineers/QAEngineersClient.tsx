'use client'

import { Database, Code, Server, Zap, Shield, Network, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { qaEngineersData } from '@/lib/staticData/hire/qa-engineers'
import { getIconComponent } from '@/lib/utils/iconMapper'

interface FullStackDevelopersClientProps {
  faqs: Array<{ question: string; answer: string }>
}

export default function FullStackDevelopersClient({ faqs }: FullStackDevelopersClientProps) {
  // Convert icon names to ReactNode icons
  const BadgeIcon = getIconComponent(qaEngineersData.hero.badge.iconName) || Code
  const badgeIcon = <BadgeIcon className="w-4 h-4" strokeWidth={2} />

  const services = qaEngineersData.services.map(service => {
    const IconComponent = getIconComponent(service.iconName) || Code
    return {
      ...service,
      icon: <IconComponent className="w-8 h-8" strokeWidth={2} />
    }
  })

  const whyChooseUs = qaEngineersData.whyChooseUs.map(item => {
    const IconComponent = getIconComponent(item.iconName) || Code
    return {
      ...item,
      icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
    }
  })

  const industries = qaEngineersData.industries.map(industry => {
    const IconComponent = getIconComponent(industry.iconName) || Building2
    return {
      ...industry,
      icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
    }
  })

  const processSteps = qaEngineersData.processSteps.map(step => {
    const IconComponent = getIconComponent(step.iconName) || Target
    return {
      ...step,
      icon: <IconComponent className="w-6 h-6" strokeWidth={2} />
    }
  })

  return (
    <PageTemplate
      badge={{
        icon: badgeIcon,
        text: qaEngineersData.hero.badge.text
      }}
      title={qaEngineersData.hero.title}
      hollowText={qaEngineersData.hero.hollowText}
      description={qaEngineersData.hero.description}
      services={services}
      servicesTitle={qaEngineersData.servicesTitle}
      servicesHollowText={qaEngineersData.servicesHollowText}
      whyChoose={whyChooseUs}
      whyChooseTitle={qaEngineersData.whyChooseTitle}
      whyChooseHollowText={qaEngineersData.whyChooseHollowText}
      industries={industries}
      technologies={[...qaEngineersData.technologies]}
      getQuoteTitle={qaEngineersData.getQuoteTitle}
      getQuoteHollowText={qaEngineersData.getQuoteHollowText}
      getQuoteDescription={qaEngineersData.getQuoteDescription}
      faqs={faqs}
      contactTitle={qaEngineersData.contactTitle}
      contactDescription={qaEngineersData.contactDescription}
      processTitle={qaEngineersData.processTitle}
      processSubtitle={qaEngineersData.processSubtitle}
      processSteps={processSteps}
    />
  )
}

