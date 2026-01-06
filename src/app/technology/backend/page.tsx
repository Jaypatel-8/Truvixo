import BackendClient from './BackendClient'
import { getFAQsForPage } from '@/lib/pageData'
import { frontendTechnologyData } from '@/lib/staticData/technology/frontend'
import type { BasePageData } from '@/lib/types/staticData'

export default function BackendTechnology() {
  const faqs = getFAQsForPage('backend')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <BackendClient faqs={faqs} backendTechnologyData={frontendTechnologyData as unknown as BasePageData} />
    </main>
  )
}
