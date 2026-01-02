import HealthcareClient from './HealthcareClient'
import { getFAQsForPage } from '@/lib/pageData'
import { healthcareIndustryData } from '@/lib/staticData/industry/healthcare'
import type { BasePageData } from '@/lib/types/staticData'

export default function HealthcareDevelopment() {
  const faqs = getFAQsForPage('healthcare')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <HealthcareClient faqs={faqs} healthcareData={healthcareIndustryData as unknown as BasePageData} />
    </main>
  )
}
