import SMMClient from './SMMClient'
import { getFAQsForPage } from '@/lib/pageData'
import { smmData } from '@/lib/staticData/services/smm'
import type { BasePageData } from '@/lib/types/staticData'

export default function SMM() {
  const faqs = getFAQsForPage('smm')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <SMMClient faqs={faqs} smmData={smmData as unknown as BasePageData} />
    </main>
  )
}
