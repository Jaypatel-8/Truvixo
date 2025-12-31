// Server Component - imports FAQs and static data, passes to Client Component
import APIClient from './APIClient'
import { getFAQsForPage } from '@/lib/pageData'
import { apiDevelopmentIntegrationData } from '@/lib/staticData/services/api-development-integration'
import type { BasePageData } from '@/lib/types/staticData'

export default function APIDevelopmentIntegration() {
  const faqs = getFAQsForPage('api-development-integration')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <APIClient faqs={faqs} apiData={apiDevelopmentIntegrationData as unknown as BasePageData} />
    </main>
  )
}
