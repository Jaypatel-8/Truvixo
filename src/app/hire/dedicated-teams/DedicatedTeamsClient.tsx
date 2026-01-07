'use client'

import { useMemo } from 'react'
import { Database, Code, Server, Zap, Shield, Network, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import type { BasePageData } from '@/lib/types/staticData'
import { getIconComponent } from '@/lib/utils/iconMapper'
import { getHireRelatedLinks } from '@/lib/utils/relatedLinks'

interface DedicatedTeamsClientProps {
  faqs: Array<{ question: string; answer: string }>
  dedicatedTeamsData: BasePageData
}

export default function DedicatedTeamsClient({ faqs, dedicatedTeamsData }: DedicatedTeamsClientProps) {
  // Convert icon names to ReactNode icons
  const BadgeIcon = getIconComponent(dedicatedTeamsData.hero.badge.iconName) || Code
  const badgeIcon = <BadgeIcon className="w-4 h-4" strokeWidth={2} />

  const services = useMemo(() => 
    (dedicatedTeamsData.services || []).map(service => {
      const IconComponent = getIconComponent(service.iconName) || Code
      return {
        ...service,
        icon: <IconComponent className="w-8 h-8" strokeWidth={2} />
      }
    }), [dedicatedTeamsData.services]
  )

  const whyChooseUs = useMemo(() => 
    (dedicatedTeamsData.whyChooseUs || []).map(item => {
      const IconComponent = getIconComponent(item.iconName) || Code
      return {
        ...item,
        icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
      }
    }), [dedicatedTeamsData.whyChooseUs]
  )

  const industries = useMemo(() => 
    (dedicatedTeamsData.industries || []).map(industry => {
      const IconComponent = getIconComponent(industry.iconName) || Building2
      return {
        ...industry,
        icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
      }
    }), [dedicatedTeamsData.industries]
  )

  const processSteps = useMemo(() => 
    (dedicatedTeamsData.processSteps || []).map(step => {
      const IconComponent = getIconComponent(step.iconName) || Target
      return {
        ...step,
        icon: <IconComponent className="w-6 h-6" strokeWidth={2} />
      }
    }), [dedicatedTeamsData.processSteps]
  )

  return (
    <PageTemplate
      relatedLinks={getHireRelatedLinks('dedicated-teams')}
      relatedLinksTitle={"Related Hiring Options"}
      badge={{
        icon: badgeIcon,
        text: dedicatedTeamsData.hero.badge.text
      }}
      title={dedicatedTeamsData.hero.title}
      hollowText={dedicatedTeamsData.hero.hollowText}
      description={dedicatedTeamsData.hero.description}
      services={services}
      servicesTitle={dedicatedTeamsData.servicesTitle}
      servicesHollowText={dedicatedTeamsData.servicesHollowText}
      whyChoose={whyChooseUs}
      whyChooseTitle={dedicatedTeamsData.whyChooseTitle}
      whyChooseHollowText={dedicatedTeamsData.whyChooseHollowText}
      industries={industries}
      technologies={dedicatedTeamsData.technologies ? [...dedicatedTeamsData.technologies] : []}
      getQuoteTitle={dedicatedTeamsData.getQuoteTitle}
      getQuoteHollowText={dedicatedTeamsData.getQuoteHollowText}
      getQuoteDescription={dedicatedTeamsData.getQuoteDescription}
      faqs={faqs}
      contactTitle={dedicatedTeamsData.contactTitle}
      contactDescription={dedicatedTeamsData.contactDescription}
      processTitle={dedicatedTeamsData.processTitle}
      processSubtitle={dedicatedTeamsData.processSubtitle}
      processSteps={processSteps}
    />
  )
}

