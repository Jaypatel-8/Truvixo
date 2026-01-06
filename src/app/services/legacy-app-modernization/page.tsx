import LegacyClient from './LegacyClient'
import { getFAQsForPage } from '@/lib/pageData'
import { legacyAppModernizationData } from '@/lib/staticData/services/legacy-app-modernization'

export default function LegacyAppModernization() {
  const faqs = getFAQsForPage('legacy-app-modernization')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <LegacyClient faqs={faqs} legacyData={legacyAppModernizationData} />
    </main>
  )
}
