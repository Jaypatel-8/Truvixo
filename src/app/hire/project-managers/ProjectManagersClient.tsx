'use client'

import { Database, Code, Server, Zap, Shield, Network, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { projectManagersData } from '@/lib/staticData/hire/project-managers'
import { getIconComponent } from '@/lib/utils/iconMapper'

interface FullStackDevelopersClientProps {
  faqs: Array<{ question: string; answer: string }>
}

export default function FullStackDevelopersClient({ faqs }: FullStackDevelopersClientProps) {
  // Convert icon names to ReactNode icons
  const BadgeIcon = getIconComponent(projectManagersData.hero.badge.iconName) || Code
  const badgeIcon = <BadgeIcon className="w-4 h-4" strokeWidth={2} />

  const services = projectManagersData.services.map(service => {
    const IconComponent = getIconComponent(service.iconName) || Code
    return {
      ...service,
      icon: <IconComponent className="w-8 h-8" strokeWidth={2} />
    }
  })

  const whyChooseUs = projectManagersData.whyChooseUs.map(item => {
    const IconComponent = getIconComponent(item.iconName) || Code
    return {
      ...item,
      icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
    }
  })

  const industries = projectManagersData.industries.map(industry => {
    const IconComponent = getIconComponent(industry.iconName) || Building2
    return {
      ...industry,
      icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
    }
  })

  const processSteps = projectManagersData.processSteps.map(step => {
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
        text: projectManagersData.hero.badge.text
      }}
      title={projectManagersData.hero.title}
      hollowText={projectManagersData.hero.hollowText}
      description={projectManagersData.hero.description}
      services={services}
      servicesTitle={projectManagersData.servicesTitle}
      servicesHollowText={projectManagersData.servicesHollowText}
      whyChoose={whyChooseUs}
      whyChooseTitle={projectManagersData.whyChooseTitle}
      whyChooseHollowText={projectManagersData.whyChooseHollowText}
      industries={industries}
      technologies={[...projectManagersData.technologies]}
      getQuoteTitle={projectManagersData.getQuoteTitle}
      getQuoteHollowText={projectManagersData.getQuoteHollowText}
      getQuoteDescription={projectManagersData.getQuoteDescription}
      faqs={faqs}
      contactTitle={projectManagersData.contactTitle}
      contactDescription={projectManagersData.contactDescription}
      processTitle={projectManagersData.processTitle}
      processSubtitle={projectManagersData.processSubtitle}
      processSteps={processSteps}
    />
  )
}

