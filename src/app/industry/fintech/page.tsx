// Server Component - imports FAQs and static data, passes to Client Component
import FintechClient from './FintechClient'
import { getFAQsForPage } from '@/lib/pageData'
import { fintechData } from '@/lib/staticData/industry/fintech'

export default function FintechDevelopment() {
  const faqs = getFAQsForPage('fintech')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <FintechClient faqs={faqs} fintechData={fintechData} />
    </main>
  )
}
