'use client'

import { useMemo } from 'react'
import { Database, Code, Server, Zap, Shield, Network, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import type { BasePageData } from '@/lib/types/staticData'
import { getIconComponent } from '@/lib/utils/iconMapper'
import { getHireRelatedLinks } from '@/lib/utils/relatedLinks'

interface UIUXDesignersClientProps {
  faqs: Array<{ question: string; answer: string }>
  uiUxDesignersData: BasePageData
}

export default function UIUXDesignersClient({ faqs, uiUxDesignersData }: UIUXDesignersClientProps) {
  const hero = uiUxDesignersData?.hero
  const badge = hero?.badge
  const BadgeIcon = getIconComponent(badge?.iconName) || Code
  const badgeIcon = <BadgeIcon className="w-4 h-4" strokeWidth={2} />

  const services = useMemo(() => 
    (uiUxDesignersData?.services ?? []).map(service => {
      const IconComponent = getIconComponent(service.iconName) || Code
      return {
        ...service,
        icon: <IconComponent className="w-8 h-8" strokeWidth={2} />
      }
    }), [uiUxDesignersData?.services]
  )

  const whyChooseUs = useMemo(() => 
    (uiUxDesignersData?.whyChooseUs ?? []).map(item => {
      const IconComponent = getIconComponent(item.iconName) || Code
      return {
        ...item,
        icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
      }
    }), [uiUxDesignersData?.whyChooseUs]
  )

  const industries = useMemo(() => 
    (uiUxDesignersData?.industries ?? []).map(industry => {
      const IconComponent = getIconComponent(industry.iconName) || Building2
      return {
        ...industry,
        icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
      }
    }), [uiUxDesignersData?.industries]
  )

  const processSteps = useMemo(() => 
    (uiUxDesignersData?.processSteps ?? []).map(step => {
      const IconComponent = getIconComponent(step.iconName) || Target
      return {
        ...step,
        icon: <IconComponent className="w-6 h-6" strokeWidth={2} />
      }
    }), [uiUxDesignersData?.processSteps]
  )

  const technologiesList = Array.isArray(uiUxDesignersData?.technologies) ? [...uiUxDesignersData.technologies] : []

  return (
    <PageTemplate
      relatedLinks={getHireRelatedLinks('ui-ux-designers')}
      relatedLinksTitle={"Related Hiring Options"}
      badge={badge ? { icon: badgeIcon, text: badge.text } : undefined}
      title={hero?.title ?? ''}
      hollowText={hero?.hollowText ?? ''}
      description={hero?.description ?? ''}
      services={services}
      servicesTitle={uiUxDesignersData?.servicesTitle}
      servicesHollowText={uiUxDesignersData?.servicesHollowText}
      whyChoose={whyChooseUs}
      whyChooseTitle={uiUxDesignersData?.whyChooseTitle}
      whyChooseHollowText={uiUxDesignersData?.whyChooseHollowText}
      industries={industries}
      technologies={technologiesList}
      getQuoteTitle={uiUxDesignersData?.getQuoteTitle}
      getQuoteHollowText={uiUxDesignersData?.getQuoteHollowText}
      getQuoteDescription={uiUxDesignersData?.getQuoteDescription}
      faqs={faqs}
      contactTitle={uiUxDesignersData?.contactTitle}
      contactDescription={uiUxDesignersData?.contactDescription}
      processTitle={uiUxDesignersData?.processTitle}
      processSubtitle={uiUxDesignersData?.processSubtitle}
      processSteps={processSteps}
    />
  )
}

