import AIMLClient from './AIMLClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function AIMLTechnology() {
  const faqs = getFAQsForPage('ai-ml')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <AIMLClient faqs={faqs} />
    </main>
  )
}
