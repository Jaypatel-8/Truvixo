// Server Component - imports FAQs and static data, passes to Client Component
import CROClient from './CROClient'
import { getFAQsForPage } from '@/lib/pageData'
import { croData } from '@/lib/staticData/services/cro'
import type { BasePageData } from '@/lib/types/staticData'

export default function CRO() {
  const faqs = getFAQsForPage('cro')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <CROClient faqs={faqs} croData={croData as unknown as BasePageData} />
    </main>
  )
}
