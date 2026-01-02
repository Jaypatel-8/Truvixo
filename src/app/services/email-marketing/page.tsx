import EmailMarketingClient from './EmailMarketingClient'
import { getFAQsForPage } from '@/lib/pageData'
import { emailMarketingData } from '@/lib/staticData/services/email-marketing'
import type { BasePageData } from '@/lib/types/staticData'

export default function EmailMarketing() {
  const faqs = getFAQsForPage('email-marketing')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <EmailMarketingClient faqs={faqs} emailMarketingData={emailMarketingData as unknown as BasePageData} />
    </main>
  )
}
