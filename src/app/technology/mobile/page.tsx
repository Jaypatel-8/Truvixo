import MobileClient from './MobileClient'
import { getFAQsForPage } from '@/lib/pageData'
import { frontendTechnologyData } from '@/lib/staticData/technology/frontend'
import type { BasePageData } from '@/lib/types/staticData'

export default function MobileTechnology() {
  const faqs = getFAQsForPage('mobile')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <MobileClient faqs={faqs} mobileTechnologyData={frontendTechnologyData as unknown as BasePageData} />
    </main>
  )
}
