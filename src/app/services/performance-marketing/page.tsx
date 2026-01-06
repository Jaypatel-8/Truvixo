import PerformanceMarketingClient from './PerformanceMarketingClient'
import { getFAQsForPage } from '@/lib/pageData'
import { performanceMarketingData } from '@/lib/staticData/services/performance-marketing'

export default function PerformanceMarketing() {
  const faqs = getFAQsForPage('performance-marketing')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <PerformanceMarketingClient faqs={faqs} performanceMarketingData={performanceMarketingData} />
    </main>
  )
}
