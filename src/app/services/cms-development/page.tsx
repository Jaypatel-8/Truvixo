import CMSClient from './CMSClient'
import { getFAQsForPage } from '@/lib/pageData'
import { cmsDevelopmentData } from '@/lib/staticData/services/cms-development'
import type { BasePageData } from '@/lib/types/staticData'

export default function CMSDevelopment() {
  const faqs = getFAQsForPage('cms-development')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <CMSClient faqs={faqs} cmsData={cmsDevelopmentData as unknown as BasePageData} />
    </main>
  )
}
