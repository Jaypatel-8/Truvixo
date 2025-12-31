// Shared utility functions for transforming static data
// Reduces code duplication across Client components

import { getIconComponent } from './iconMapper'
import type { ServiceItem, WhyChooseUsItem, ProcessStep } from '@/lib/types/staticData'
import { LucideIcon } from 'lucide-react'
import { ReactElement } from 'react'

/**
 * Transform service items by adding icon components
 * Used in all service/industry Client components
 */
export function transformServices(
  services: ServiceItem[]
): Array<ServiceItem & { icon: ReactElement | null }> {
  return services.map((service) => {
    const IconComponent = getIconComponent(service.iconName)
    return {
      ...service,
      icon: IconComponent ? (
        <IconComponent className="w-8 h-8" strokeWidth={2} />
      ) : null,
    }
  })
}

/**
 * Transform whyChooseUs items by adding icon components
 * Used in all service/industry Client components
 */
export function transformWhyChooseUs(
  whyChooseUs: WhyChooseUsItem[]
): Array<WhyChooseUsItem & { icon: ReactElement | null }> {
  return whyChooseUs.map((item) => {
    const IconComponent = getIconComponent(item.iconName)
    return {
      ...item,
      icon: IconComponent ? (
        <IconComponent className="w-7 h-7" strokeWidth={2} />
      ) : null,
    }
  })
}

/**
 * Transform process steps by adding icon components
 * Used in all service/industry Client components
 */
export function transformProcessSteps(
  processSteps: ProcessStep[]
): Array<ProcessStep & { icon: ReactElement | null }> {
  return processSteps.map((step) => {
    const IconComponent = getIconComponent(step.iconName)
    return {
      ...step,
      icon: IconComponent ? (
        <IconComponent className="w-6 h-6" strokeWidth={2} />
      ) : null,
    }
  })
}

/**
 * Generic icon transformer - fallback for custom icon sizes
 */
export function transformWithIcon<T extends { iconName: string }>(
  items: T[],
  iconSize: string = 'w-6 h-6',
  strokeWidth: number = 2
): Array<T & { icon: ReactElement | null }> {
  return items.map((item) => {
    const IconComponent = getIconComponent(item.iconName)
    return {
      ...item,
      icon: IconComponent ? (
        <IconComponent className={iconSize} strokeWidth={strokeWidth} />
      ) : null,
    }
  })
}





