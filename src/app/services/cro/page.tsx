import CROClient from './CROClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function CRO() {
  const faqs = getFAQsForPage('cro')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <CROClient faqs={faqs} />
    </main>
  )
}
