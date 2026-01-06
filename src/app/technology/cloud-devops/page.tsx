import CloudDevOpsClient from './CloudDevOpsClient'
import { getFAQsForPage } from '@/lib/pageData'
import { frontendTechnologyData } from '@/lib/staticData/technology/frontend'
import type { BasePageData } from '@/lib/types/staticData'

export default function CloudDevOpsTechnology() {
  const faqs = getFAQsForPage('cloud-devops')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <CloudDevOpsClient faqs={faqs} cloudDevOpsTechnologyData={frontendTechnologyData as unknown as BasePageData} />
    </main>
  )
}
