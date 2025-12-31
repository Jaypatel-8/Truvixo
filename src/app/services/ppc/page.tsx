// Server Component - imports FAQs and static data, passes to Client Component
import PPCClient from './PPCClient'
import { getFAQsForPage } from '@/lib/pageData'
import { ppcData } from '@/lib/staticData/services/ppc'
import type { BasePageData } from '@/lib/types/staticData'

export default function PPC() {
  const faqs = getFAQsForPage('ppc')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <PPCClient faqs={faqs} ppcData={ppcData as unknown as BasePageData} />
    </main>
  )
}
