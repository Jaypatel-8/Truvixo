'use client'

import { useMemo } from 'react'
import { Database, Code, Server, Zap, Shield, Network, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import type { BasePageData } from '@/lib/types/staticData'
import { getIconComponent } from '@/lib/utils/iconMapper'

interface MobileDevelopersClientProps {
  faqs: Array<{ question: string; answer: string }>
  mobileDevelopersData: BasePageData
}

export default function MobileDevelopersClient({ faqs, mobileDevelopersData }: MobileDevelopersClientProps) {
  // Convert icon names to ReactNode icons
  const BadgeIcon = getIconComponent(mobileDevelopersData.hero.badge.iconName) || Code
  const badgeIcon = <BadgeIcon className="w-4 h-4" strokeWidth={2} />

  const services = useMemo(() => 
    mobileDevelopersData.services.map(service => {
      const IconComponent = getIconComponent(service.iconName) || Code
      return {
        ...service,
        icon: <IconComponent className="w-8 h-8" strokeWidth={2} />
      }
    }), [mobileDevelopersData.services]
  )

  const whyChooseUs = useMemo(() => 
    mobileDevelopersData.whyChooseUs.map(item => {
      const IconComponent = getIconComponent(item.iconName) || Code
      return {
        ...item,
        icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
      }
    }), [mobileDevelopersData.whyChooseUs]
  )

  const industries = useMemo(() => 
    mobileDevelopersData.industries.map(industry => {
      const IconComponent = getIconComponent(industry.iconName) || Building2
      return {
        ...industry,
        icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
      }
    }), [mobileDevelopersData.industries]
  )

  const processSteps = useMemo(() => 
    mobileDevelopersData.processSteps.map(step => {
      const IconComponent = getIconComponent(step.iconName) || Target
      return {
        ...step,
        icon: <IconComponent className="w-6 h-6" strokeWidth={2} />
      }
    }), [mobileDevelopersData.processSteps]
  )

  return (
    <PageTemplate
      badge={{
        icon: badgeIcon,
        text: mobileDevelopersData.hero.badge.text
      }}
      title={mobileDevelopersData.hero.title}
      hollowText={mobileDevelopersData.hero.hollowText}
      description={mobileDevelopersData.hero.description}
      services={services}
      servicesTitle={mobileDevelopersData.servicesTitle}
      servicesHollowText={mobileDevelopersData.servicesHollowText}
      whyChoose={whyChooseUs}
      whyChooseTitle={mobileDevelopersData.whyChooseTitle}
      whyChooseHollowText={mobileDevelopersData.whyChooseHollowText}
      industries={industries}
      technologies={[...mobileDevelopersData.technologies]}
      getQuoteTitle={mobileDevelopersData.getQuoteTitle}
      getQuoteHollowText={mobileDevelopersData.getQuoteHollowText}
      getQuoteDescription={mobileDevelopersData.getQuoteDescription}
      faqs={faqs}
      contactTitle={mobileDevelopersData.contactTitle}
      contactDescription={mobileDevelopersData.contactDescription}
      processTitle={mobileDevelopersData.processTitle}
      processSubtitle={mobileDevelopersData.processSubtitle}
      processSteps={processSteps}
    />
  )
}

