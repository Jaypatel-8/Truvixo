import CloudDevOpsClient from './CloudDevOpsClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function CloudDevOpsTechnology() {
  const faqs = getFAQsForPage('cloud-devops')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <CloudDevOpsClient faqs={faqs} />
    </main>
  )
}
