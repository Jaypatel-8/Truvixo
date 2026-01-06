'use client'

import { useMemo } from 'react'
import { Database, Code, Server, Zap, Shield, Network, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import type { BasePageData } from '@/lib/types/staticData'
import { getIconComponent } from '@/lib/utils/iconMapper'

interface DevOpsEngineersClientProps {
  faqs: Array<{ question: string; answer: string }>
  devopsEngineersData: BasePageData
}

export default function DevOpsEngineersClient({ faqs, devopsEngineersData }: DevOpsEngineersClientProps) {
  // Convert icon names to ReactNode icons
  const BadgeIcon = getIconComponent(devopsEngineersData.hero.badge.iconName) || Code
  const badgeIcon = <BadgeIcon className="w-4 h-4" strokeWidth={2} />

  const services = useMemo(() => 
    devopsEngineersData.services.map(service => {
      const IconComponent = getIconComponent(service.iconName) || Code
      return {
        ...service,
        icon: <IconComponent className="w-8 h-8" strokeWidth={2} />
      }
    }), [devopsEngineersData.services]
  )

  const whyChooseUs = useMemo(() => 
    devopsEngineersData.whyChooseUs.map(item => {
      const IconComponent = getIconComponent(item.iconName) || Code
      return {
        ...item,
        icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
      }
    }), [devopsEngineersData.whyChooseUs]
  )

  const industries = useMemo(() => 
    devopsEngineersData.industries.map(industry => {
      const IconComponent = getIconComponent(industry.iconName) || Building2
      return {
        ...industry,
        icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
      }
    }), [devopsEngineersData.industries]
  )

  const processSteps = useMemo(() => 
    devopsEngineersData.processSteps.map(step => {
      const IconComponent = getIconComponent(step.iconName) || Target
      return {
        ...step,
        icon: <IconComponent className="w-6 h-6" strokeWidth={2} />
      }
    }), [devopsEngineersData.processSteps]
  )

  return (
    <PageTemplate
      badge={{
        icon: badgeIcon,
        text: devopsEngineersData.hero.badge.text
      }}
      title={devopsEngineersData.hero.title}
      hollowText={devopsEngineersData.hero.hollowText}
      description={devopsEngineersData.hero.description}
      services={services}
      servicesTitle={devopsEngineersData.servicesTitle}
      servicesHollowText={devopsEngineersData.servicesHollowText}
      whyChoose={whyChooseUs}
      whyChooseTitle={devopsEngineersData.whyChooseTitle}
      whyChooseHollowText={devopsEngineersData.whyChooseHollowText}
      industries={industries}
      technologies={[...devopsEngineersData.technologies]}
      getQuoteTitle={devopsEngineersData.getQuoteTitle}
      getQuoteHollowText={devopsEngineersData.getQuoteHollowText}
      getQuoteDescription={devopsEngineersData.getQuoteDescription}
      faqs={faqs}
      contactTitle={devopsEngineersData.contactTitle}
      contactDescription={devopsEngineersData.contactDescription}
      processTitle={devopsEngineersData.processTitle}
      processSubtitle={devopsEngineersData.processSubtitle}
      processSteps={processSteps}
    />
  )
}

