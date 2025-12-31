// Server Component - imports FAQs and passes to Client Component
import EnterpriseSoftwareClient from './EnterpriseSoftwareClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function EnterpriseSoftwareDevelopment() {
  const faqs = getFAQsForPage('enterprise-software-development')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <EnterpriseSoftwareClient faqs={faqs} />
    </main>
  )
}
