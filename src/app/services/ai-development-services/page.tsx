import AIDevelopmentClient from './AIDevelopmentClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function AIDevelopmentServices() {
  const faqs = getFAQsForPage('ai-development-services')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <AIDevelopmentClient faqs={faqs} />
    </main>
  )
}
