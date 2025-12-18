import EcommerceClient from './EcommerceClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function EcommerceDevelopment() {
  const faqs = getFAQsForPage('ecommerce-development')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <EcommerceClient faqs={faqs} />
    </main>
  )
}
