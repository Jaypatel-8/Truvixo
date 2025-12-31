// Server Component - imports FAQs and static data, passes to Client Component
import SaaSClient from './SaaSClient'
import { getFAQsForPage } from '@/lib/pageData'
import { saasProductDevelopmentData } from '@/lib/staticData/services/saas-product-development'

export default function SaaSProductDevelopment() {
  const faqs = getFAQsForPage('saas-product-development')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <SaaSClient faqs={faqs} saasData={saasProductDevelopmentData} />
    </main>
  )
}
