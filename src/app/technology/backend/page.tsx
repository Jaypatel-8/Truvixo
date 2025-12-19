import BackendClient from './BackendClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function BackendTechnology() {
  const faqs = getFAQsForPage('backend')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <BackendClient faqs={faqs} />
    </main>
  )
}
