import LogisticsClient from './LogisticsClient'
import { getFAQsForPage } from '@/lib/pageData'
import { logisticsData } from '@/lib/staticData/industry/logistics'

export default function LogisticsDevelopment() {
  const faqs = getFAQsForPage('logistics')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <LogisticsClient faqs={faqs} logisticsData={logisticsData} />
    </main>
  )
}
