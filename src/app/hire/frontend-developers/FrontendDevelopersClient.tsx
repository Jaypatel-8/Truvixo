'use client'

import { useMemo } from 'react'
import { Database, Code, Server, Zap, Shield, Network, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import type { BasePageData } from '@/lib/types/staticData'
import { getIconComponent } from '@/lib/utils/iconMapper'
import { getHireRelatedLinks } from '@/lib/utils/relatedLinks'

interface FrontendDevelopersClientProps {
  faqs: Array<{ question: string; answer: string }>
  frontendDevelopersData: BasePageData
}

export default function FrontendDevelopersClient({ faqs, frontendDevelopersData }: FrontendDevelopersClientProps) {
  const hero = frontendDevelopersData?.hero
  const badge = hero?.badge
  const BadgeIcon = getIconComponent(badge?.iconName) || Code
  const badgeIcon = <BadgeIcon className="w-4 h-4" strokeWidth={2} />

  const services = useMemo(() => 
    (frontendDevelopersData?.services ?? []).map(service => {
      const IconComponent = getIconComponent(service.iconName) || Code
      return {
        ...service,
        icon: <IconComponent className="w-8 h-8" strokeWidth={2} />
      }
    }), [frontendDevelopersData?.services]
  )

  const whyChooseUs = useMemo(() => 
    (frontendDevelopersData?.whyChooseUs ?? []).map(item => {
      const IconComponent = getIconComponent(item.iconName) || Code
      return {
        ...item,
        icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
      }
    }), [frontendDevelopersData?.whyChooseUs]
  )

  const industries = useMemo(() => 
    (frontendDevelopersData?.industries ?? []).map(industry => {
      const IconComponent = getIconComponent(industry.iconName) || Building2
      return {
        ...industry,
        icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
      }
    }), [frontendDevelopersData?.industries]
  )

  const processSteps = useMemo(() => 
    (frontendDevelopersData?.processSteps ?? []).map(step => {
      const IconComponent = getIconComponent(step.iconName) || Target
      return {
        ...step,
        icon: <IconComponent className="w-6 h-6" strokeWidth={2} />
      }
    }), [frontendDevelopersData?.processSteps]
  )

  const technologiesList = Array.isArray(frontendDevelopersData?.technologies) ? [...frontendDevelopersData.technologies] : []

  return (
    <PageTemplate
      relatedLinks={getHireRelatedLinks('frontend-developers')}
      relatedLinksTitle={"Related Hiring Options"}
      badge={badge ? { icon: badgeIcon, text: badge.text } : undefined}
      title={hero?.title ?? ''}
      hollowText={hero?.hollowText ?? ''}
      description={hero?.description ?? ''}
      services={services}
      servicesTitle={frontendDevelopersData?.servicesTitle}
      servicesHollowText={frontendDevelopersData?.servicesHollowText}
      whyChoose={whyChooseUs}
      whyChooseTitle={frontendDevelopersData?.whyChooseTitle}
      whyChooseHollowText={frontendDevelopersData?.whyChooseHollowText}
      industries={industries}
      technologies={technologiesList}
      getQuoteTitle={frontendDevelopersData?.getQuoteTitle}
      getQuoteHollowText={frontendDevelopersData?.getQuoteHollowText}
      getQuoteDescription={frontendDevelopersData?.getQuoteDescription}
      faqs={faqs}
      contactTitle={frontendDevelopersData?.contactTitle}
      contactDescription={frontendDevelopersData?.contactDescription}
      processTitle={frontendDevelopersData?.processTitle}
      processSubtitle={frontendDevelopersData?.processSubtitle}
      processSteps={processSteps}
    />
  )
}

