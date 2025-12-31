// Server Component - imports FAQs and passes to Client Component
import MobileAppClient from './MobileAppClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function MobileAppDevelopment() {
  const faqs = getFAQsForPage('mobile-app-development')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <MobileAppClient faqs={faqs} />
    </main>
  )
}
