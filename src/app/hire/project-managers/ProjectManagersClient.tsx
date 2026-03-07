'use client'

import { useMemo } from 'react'
import { Database, Code, Server, Zap, Shield, Network, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import type { BasePageData } from '@/lib/types/staticData'
import { getIconComponent } from '@/lib/utils/iconMapper'
import { getHireRelatedLinks } from '@/lib/utils/relatedLinks'

interface ProjectManagersClientProps {
  faqs: Array<{ question: string; answer: string }>
  projectManagersData: BasePageData
}

export default function ProjectManagersClient({ faqs, projectManagersData }: ProjectManagersClientProps) {
  const hero = projectManagersData?.hero
  const badge = hero?.badge
  const BadgeIcon = getIconComponent(badge?.iconName) || Code
  const badgeIcon = <BadgeIcon className="w-4 h-4" strokeWidth={2} />

  const services = useMemo(() => 
    (projectManagersData?.services ?? []).map(service => {
      const IconComponent = getIconComponent(service.iconName) || Code
      return {
        ...service,
        icon: <IconComponent className="w-8 h-8" strokeWidth={2} />
      }
    }), [projectManagersData?.services]
  )

  const whyChooseUs = useMemo(() => 
    (projectManagersData?.whyChooseUs ?? []).map(item => {
      const IconComponent = getIconComponent(item.iconName) || Code
      return {
        ...item,
        icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
      }
    }), [projectManagersData?.whyChooseUs]
  )

  const industries = useMemo(() => 
    (projectManagersData?.industries ?? []).map(industry => {
      const IconComponent = getIconComponent(industry.iconName) || Building2
      return {
        ...industry,
        icon: <IconComponent className="w-7 h-7" strokeWidth={2} />
      }
    }), [projectManagersData?.industries]
  )

  const processSteps = useMemo(() => 
    (projectManagersData?.processSteps ?? []).map(step => {
      const IconComponent = getIconComponent(step.iconName) || Target
      return {
        ...step,
        icon: <IconComponent className="w-6 h-6" strokeWidth={2} />
      }
    }), [projectManagersData?.processSteps]
  )

  const technologiesList = Array.isArray(projectManagersData?.technologies) ? [...projectManagersData.technologies] : []

  return (
    <PageTemplate
      relatedLinks={getHireRelatedLinks('project-managers')}
      relatedLinksTitle={"Related Hiring Options"}
      badge={badge ? { icon: badgeIcon, text: badge.text } : undefined}
      title={hero?.title ?? ''}
      hollowText={hero?.hollowText ?? ''}
      description={hero?.description ?? ''}
      services={services}
      servicesTitle={projectManagersData?.servicesTitle}
      servicesHollowText={projectManagersData?.servicesHollowText}
      whyChoose={whyChooseUs}
      whyChooseTitle={projectManagersData?.whyChooseTitle}
      whyChooseHollowText={projectManagersData?.whyChooseHollowText}
      industries={industries}
      technologies={technologiesList}
      getQuoteTitle={projectManagersData?.getQuoteTitle}
      getQuoteHollowText={projectManagersData?.getQuoteHollowText}
      getQuoteDescription={projectManagersData?.getQuoteDescription}
      faqs={faqs}
      contactTitle={projectManagersData?.contactTitle}
      contactDescription={projectManagersData?.contactDescription}
      processTitle={projectManagersData?.processTitle}
      processSubtitle={projectManagersData?.processSubtitle}
      processSteps={processSteps}
    />
  )
}

