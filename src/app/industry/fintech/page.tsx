import FintechClient from './FintechClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function FintechDevelopment() {
  const faqs = getFAQsForPage('fintech')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <FintechClient faqs={faqs} />
    </main>
  )
}
