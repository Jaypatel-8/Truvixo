'use client'

import { Database, Code, Server, Zap, Shield, Network, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { aiMlEngineersData } from '@/lib/staticData/hire/ai-ml-engineers'
import { getIconComponent } from '@/lib/utils/iconMapper'

interface FullStackDevelopersClientProps {
  faqs: Array<{ question: string; answer: string }>
}

export default function FullStackDevelopersClient({ faqs }: FullStackDevelopersClientProps) {
  // Convert icon names to ReactNode icons
  const BadgeIcon = getIconComponent(aiMlEngineersData.hero.badge.iconName) || Code
  const badgeIcon = <BadgeIcon className="w-4 h-4" strokeWidth={2} />

  const services = aiMlEngineersData.services.map(service => {
    const IconComponent = getIconComponent(service.iconName) || Code
    return {
      ...service,
      icon: <IconComponent className="w-8 h-8" strokeWidth={2} />
    }
  })

  const whyChooseUs = aiMlEngineersData.whyChooseUs.map(item => {
    const IconComponent = getIconComponent(item.iconName) || Code
    return {
      ...item,
      icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
    }
  })

  const industries = aiMlEngineersData.industries.map(industry => {
    const IconComponent = getIconComponent(industry.iconName) || Building2
    return {
      ...industry,
      icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
    }
  })

  const processSteps = aiMlEngineersData.processSteps.map(step => {
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
        text: aiMlEngineersData.hero.badge.text
      }}
      title={aiMlEngineersData.hero.title}
      hollowText={aiMlEngineersData.hero.hollowText}
      description={aiMlEngineersData.hero.description}
      services={services}
      servicesTitle={aiMlEngineersData.servicesTitle}
      servicesHollowText={aiMlEngineersData.servicesHollowText}
      whyChoose={whyChooseUs}
      whyChooseTitle={aiMlEngineersData.whyChooseTitle}
      whyChooseHollowText={aiMlEngineersData.whyChooseHollowText}
      industries={industries}
      technologies={[...aiMlEngineersData.technologies]}
      getQuoteTitle={aiMlEngineersData.getQuoteTitle}
      getQuoteHollowText={aiMlEngineersData.getQuoteHollowText}
      getQuoteDescription={aiMlEngineersData.getQuoteDescription}
      faqs={faqs}
      contactTitle={aiMlEngineersData.contactTitle}
      contactDescription={aiMlEngineersData.contactDescription}
      processTitle={aiMlEngineersData.processTitle}
      processSubtitle={aiMlEngineersData.processSubtitle}
      processSteps={processSteps}
    />
  )
}

