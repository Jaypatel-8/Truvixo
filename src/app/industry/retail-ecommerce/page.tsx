// Server Component - imports FAQs and static data, passes to Client Component
import RetailEcommerceClient from './RetailEcommerceClient'
import { getFAQsForPage } from '@/lib/pageData'
import { retailEcommerceData } from '@/lib/staticData/industry/retail-ecommerce'

export default function RetailEcommerceDevelopment() {
  const faqs = getFAQsForPage('retail-ecommerce')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <RetailEcommerceClient faqs={faqs} retailEcommerceData={retailEcommerceData} />
    </main>
  )
}
