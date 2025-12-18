import SEOClient from './SEOClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function SEO() {
  const faqs = getFAQsForPage('seo')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <SEOClient faqs={faqs} />
    </main>
  )
}
