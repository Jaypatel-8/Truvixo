import EmailMarketingClient from './EmailMarketingClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function EmailMarketing() {
  const faqs = getFAQsForPage('email-marketing')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <EmailMarketingClient faqs={faqs} />
    </main>
  )
}
