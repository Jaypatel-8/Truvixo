import SEOClient from './SEOClient'
import { getFAQsForPage } from '@/lib/pageData'
import { seoData } from '@/lib/staticData/services/seo'

export default function SEO() {
  const faqs = getFAQsForPage('seo')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <SEOClient faqs={faqs} seoData={seoData} />
    </main>
  )
}
