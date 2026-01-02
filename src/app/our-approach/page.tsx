import OurApproachClient from './OurApproachClient'
import { getFAQsForPage } from '@/lib/pageData'
import { ourApproachData } from '@/lib/staticData/company/our-approach'
import type { BasePageData } from '@/lib/types/staticData'

export default function OurApproach() {
  const faqs = getFAQsForPage('our-approach')
  
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <OurApproachClient faqs={faqs} ourApproachData={ourApproachData as unknown as BasePageData} />
    </main>
  )
}
