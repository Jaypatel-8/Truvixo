import MobileClient from './MobileClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function MobileTechnology() {
  const faqs = getFAQsForPage('mobile')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <MobileClient faqs={faqs} />
    </main>
  )
}
