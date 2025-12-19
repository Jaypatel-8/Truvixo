'use client'

import { Database, Code, Server, Zap, Shield, Network, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { fullStackDevelopersData } from '@/lib/staticData/hire/full-stack-developers'
import { getIconComponent } from '@/lib/utils/iconMapper'

interface BackendDevelopersClientProps {
  faqs: Array<{ question: string; answer: string }>
}

export default function BackendDevelopersClient({ faqs }: BackendDevelopersClientProps) {
  // Convert icon names to ReactNode icons
  const BadgeIcon = getIconComponent(fullStackDevelopersData.hero.badge.iconName) || Server
  const badgeIcon = <BadgeIcon className="w-4 h-4" strokeWidth={2} />

  const services = fullStackDevelopersData.services.map(service => {
    const IconComponent = getIconComponent(service.iconName) || Code
    return {
      ...service,
      icon: <IconComponent className="w-8 h-8" strokeWidth={2} />
    }
  })

  const whyChooseUs = fullStackDevelopersData.whyChooseUs.map(item => {
    const IconComponent = getIconComponent(item.iconName) || Code
    return {
      ...item,
      icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
    }
  })

  const industries = fullStackDevelopersData.industries.map(industry => {
    const IconComponent = getIconComponent(industry.iconName) || Building2
    return {
      ...industry,
      icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
    }
  })

  const processSteps = fullStackDevelopersData.processSteps.map(step => {
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
        text: fullStackDevelopersData.hero.badge.text
      }}
      title={fullStackDevelopersData.hero.title}
      hollowText={fullStackDevelopersData.hero.hollowText}
      description={fullStackDevelopersData.hero.description}
      services={services}
      servicesTitle={fullStackDevelopersData.servicesTitle}
      servicesHollowText={fullStackDevelopersData.servicesHollowText}
      whyChoose={whyChooseUs}
      whyChooseTitle={fullStackDevelopersData.whyChooseTitle}
      whyChooseHollowText={fullStackDevelopersData.whyChooseHollowText}
      industries={industries}
      technologies={[...fullStackDevelopersData.technologies]}
      getQuoteTitle={fullStackDevelopersData.getQuoteTitle}
      getQuoteHollowText={fullStackDevelopersData.getQuoteHollowText}
      getQuoteDescription={fullStackDevelopersData.getQuoteDescription}
      faqs={faqs}
      contactTitle={fullStackDevelopersData.contactTitle}
      contactDescription={fullStackDevelopersData.contactDescription}
      processTitle={fullStackDevelopersData.processTitle}
      processSubtitle={fullStackDevelopersData.processSubtitle}
      processSteps={processSteps}
    />
  )
}

