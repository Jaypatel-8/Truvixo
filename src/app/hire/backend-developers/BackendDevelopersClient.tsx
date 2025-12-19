'use client'

import { Database, Code, Server, Zap, Shield, Network, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { backendDevelopersData } from '@/lib/staticData/hire/backend-developers'
import { getIconComponent } from '@/lib/utils/iconMapper'

interface BackendDevelopersClientProps {
  faqs: Array<{ question: string; answer: string }>
}

export default function BackendDevelopersClient({ faqs }: BackendDevelopersClientProps) {
  // Convert icon names to ReactNode icons
  const BadgeIcon = getIconComponent(backendDevelopersData.hero.badge.iconName) || Server
  const badgeIcon = <BadgeIcon className="w-4 h-4" strokeWidth={2} />

  const services = backendDevelopersData.services.map(service => {
    const IconComponent = getIconComponent(service.iconName) || Code
    return {
      ...service,
      icon: <IconComponent className="w-8 h-8" strokeWidth={2} />
    }
  })

  const whyChooseUs = backendDevelopersData.whyChooseUs.map(item => {
    const IconComponent = getIconComponent(item.iconName) || Code
    return {
      ...item,
      icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
    }
  })

  const industries = backendDevelopersData.industries.map(industry => {
    const IconComponent = getIconComponent(industry.iconName) || Building2
    return {
      ...industry,
      icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
    }
  })

  const processSteps = backendDevelopersData.processSteps.map(step => {
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
        text: backendDevelopersData.hero.badge.text
      }}
      title={backendDevelopersData.hero.title}
      hollowText={backendDevelopersData.hero.hollowText}
      description={backendDevelopersData.hero.description}
      services={services}
      servicesTitle={backendDevelopersData.servicesTitle}
      servicesHollowText={backendDevelopersData.servicesHollowText}
      whyChoose={whyChooseUs}
      whyChooseTitle={backendDevelopersData.whyChooseTitle}
      whyChooseHollowText={backendDevelopersData.whyChooseHollowText}
      industries={industries}
      technologies={[...backendDevelopersData.technologies]}
      getQuoteTitle={backendDevelopersData.getQuoteTitle}
      getQuoteHollowText={backendDevelopersData.getQuoteHollowText}
      getQuoteDescription={backendDevelopersData.getQuoteDescription}
      faqs={faqs}
      contactTitle={backendDevelopersData.contactTitle}
      contactDescription={backendDevelopersData.contactDescription}
      processTitle={backendDevelopersData.processTitle}
      processSubtitle={backendDevelopersData.processSubtitle}
      processSteps={processSteps}
    />
  )
}

