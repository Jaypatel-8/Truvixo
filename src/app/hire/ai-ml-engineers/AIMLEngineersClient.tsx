'use client'

import { useMemo } from 'react'
import { Database, Code, Server, Zap, Shield, Network, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import type { BasePageData } from '@/lib/types/staticData'
import { getIconComponent } from '@/lib/utils/iconMapper'
import { getHireRelatedLinks } from '@/lib/utils/relatedLinks'

interface AIMLEngineersClientProps {
  faqs: Array<{ question: string; answer: string }>
  aiMlEngineersData: BasePageData
}

export default function AIMLEngineersClient({ faqs, aiMlEngineersData }: AIMLEngineersClientProps) {
  // Convert icon names to ReactNode icons
  const BadgeIcon = getIconComponent(aiMlEngineersData.hero.badge?.iconName || 'Code') || Code
  const badgeIcon = <BadgeIcon className="w-4 h-4" strokeWidth={2} />

  const services = useMemo(() => 
    (aiMlEngineersData.services || []).map((service: { iconName: string; title: string; description: string; color: string }) => {
      const IconComponent = getIconComponent(service.iconName) || Code
      return {
        ...service,
        icon: <IconComponent className="w-8 h-8" strokeWidth={2} />
      }
    }), [aiMlEngineersData.services]
  )

  const whyChooseUs = useMemo(() => 
    (aiMlEngineersData.whyChooseUs || []).map((item: { iconName: string; title: string; description: string; color: string }) => {
      const IconComponent = getIconComponent(item.iconName) || Code
      return {
        ...item,
        icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
      }
    }), [aiMlEngineersData.whyChooseUs]
  )

  const industries = useMemo(() => 
    (aiMlEngineersData.industries || []).map((industry: { iconName: string; name: string; color: string }) => {
      const IconComponent = getIconComponent(industry.iconName) || Building2
      return {
        ...industry,
        icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
      }
    }), [aiMlEngineersData.industries]
  )

  const processSteps = useMemo(() => 
    (aiMlEngineersData.processSteps || []).map((step: { iconName: string; title: string; description: string }) => {
      const IconComponent = getIconComponent(step.iconName) || Target
      return {
        ...step,
        icon: <IconComponent className="w-6 h-6" strokeWidth={2} />
      }
    }), [aiMlEngineersData.processSteps]
  )

  return (
    <PageTemplate
      relatedLinks={getHireRelatedLinks('ai-ml-engineers')}
      relatedLinksTitle={"Related Hiring Options"}
      badge={aiMlEngineersData.hero.badge ? {
        icon: badgeIcon,
        text: aiMlEngineersData.hero.badge.text
      } : undefined}
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
      technologies={aiMlEngineersData.technologies ? (aiMlEngineersData.technologies as any) : []}
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

