import AIMLClient from './AIMLClient'
import { getFAQsForPage } from '@/lib/pageData'
import { frontendTechnologyData } from '@/lib/staticData/technology/frontend'
import type { BasePageData } from '@/lib/types/staticData'

export default function AIMLTechnology() {
  const faqs = getFAQsForPage('ai-ml')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <AIMLClient faqs={faqs} aiMlTechnologyData={frontendTechnologyData as unknown as BasePageData} />
    </main>
  )
}
