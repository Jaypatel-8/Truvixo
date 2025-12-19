'use client'

import { Database, Code, Server, Zap, Shield, Network, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { uiUxDesignersData } from '@/lib/staticData/hire/ui-ux-designers'
import { getIconComponent } from '@/lib/utils/iconMapper'

interface FullStackDevelopersClientProps {
  faqs: Array<{ question: string; answer: string }>
}

export default function FullStackDevelopersClient({ faqs }: FullStackDevelopersClientProps) {
  // Convert icon names to ReactNode icons
  const BadgeIcon = getIconComponent(uiUxDesignersData.hero.badge.iconName) || Code
  const badgeIcon = <BadgeIcon className="w-4 h-4" strokeWidth={2} />

  const services = uiUxDesignersData.services.map(service => {
    const IconComponent = getIconComponent(service.iconName) || Code
    return {
      ...service,
      icon: <IconComponent className="w-8 h-8" strokeWidth={2} />
    }
  })

  const whyChooseUs = uiUxDesignersData.whyChooseUs.map(item => {
    const IconComponent = getIconComponent(item.iconName) || Code
    return {
      ...item,
      icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
    }
  })

  const industries = uiUxDesignersData.industries.map(industry => {
    const IconComponent = getIconComponent(industry.iconName) || Building2
    return {
      ...industry,
      icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
    }
  })

  const processSteps = uiUxDesignersData.processSteps.map(step => {
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
        text: uiUxDesignersData.hero.badge.text
      }}
      title={uiUxDesignersData.hero.title}
      hollowText={uiUxDesignersData.hero.hollowText}
      description={uiUxDesignersData.hero.description}
      services={services}
      servicesTitle={uiUxDesignersData.servicesTitle}
      servicesHollowText={uiUxDesignersData.servicesHollowText}
      whyChoose={whyChooseUs}
      whyChooseTitle={uiUxDesignersData.whyChooseTitle}
      whyChooseHollowText={uiUxDesignersData.whyChooseHollowText}
      industries={industries}
      technologies={[...uiUxDesignersData.technologies]}
      getQuoteTitle={uiUxDesignersData.getQuoteTitle}
      getQuoteHollowText={uiUxDesignersData.getQuoteHollowText}
      getQuoteDescription={uiUxDesignersData.getQuoteDescription}
      faqs={faqs}
      contactTitle={uiUxDesignersData.contactTitle}
      contactDescription={uiUxDesignersData.contactDescription}
      processTitle={uiUxDesignersData.processTitle}
      processSubtitle={uiUxDesignersData.processSubtitle}
      processSteps={processSteps}
    />
  )
}

