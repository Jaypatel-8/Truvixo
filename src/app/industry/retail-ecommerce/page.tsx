import RetailEcommerceClient from './RetailEcommerceClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function RetailEcommerceDevelopment() {
  const faqs = getFAQsForPage('retail-ecommerce')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <RetailEcommerceClient faqs={faqs} />
    </main>
  )
}
