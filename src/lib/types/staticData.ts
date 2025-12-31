// Shared TypeScript types for static data structures
// Used across all service, industry, and hire pages

export interface HeroBadge {
  iconName: string
  text: string
}

export interface Hero {
  badge?: HeroBadge
  title: string
  hollowText: string
  description: string
}

export interface ServiceItem {
  title: string
  description: string
  iconName: string
  color: string
}

export interface WhyChooseUsItem {
  iconName: string
  title: string
  description: string
  color: string
}

export interface ProcessStep {
  title: string
  description: string
  iconName: string
}

export interface Technology {
  name: string
  logo?: string
  color?: string
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'devops' | 'testing' | 'ai' | 'cloud' | 'management' | 'design' | 'other'
  // Technology page specific properties
  iconName?: string
  description?: string
  number?: string
}

export interface Benefit {
  iconName: string
  title: string
  description: string
  color: string
}

export interface Industry {
  name: string
  iconName: string
  color: string
}

export interface UseCase {
  title: string
  description: string
  gradient: string
  borderColor: string
  items: string[]
}

export interface GetQuote {
  title: string
  hollowText: string
  description: string
}

export interface Contact {
  title: string
  description: string
}

// Base structure for service/industry/hire pages
export interface BasePageData {
  hero: Hero
  servicesTitle?: string
  servicesHollowText?: string
  services?: ServiceItem[] | readonly ServiceItem[]
  whyChooseTitle?: string
  whyChooseHollowText?: string
  whyChooseUs?: WhyChooseUsItem[] | readonly WhyChooseUsItem[]
  technologies?: Technology[] | readonly Technology[]
  processSteps?: ProcessStep[] | readonly ProcessStep[]
  industries?: Industry[] | readonly Industry[]
  benefitsTitle?: string
  benefitsHollowText?: string
  benefits?: Benefit[] | readonly Benefit[]
  useCasesTitle?: string
  useCasesHollowText?: string
  useCases?: UseCase[] | readonly UseCase[]
  processTitle?: string
  processSubtitle?: string
  getQuote?: GetQuote
  contact?: Contact
  seoServiceName?: string
  // Technology page specific
  whatWeBuild?: Array<{ iconName: string; title: string }> | readonly Array<{ iconName: string; title: string }>
  // Alternative property names used in some pages
  getQuoteTitle?: string
  getQuoteHollowText?: string
  getQuoteDescription?: string
  contactTitle?: string
  contactDescription?: string
}

