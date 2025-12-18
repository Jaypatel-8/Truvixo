import SMMClient from './SMMClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function SMM() {
  const faqs = getFAQsForPage('smm')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <SMMClient faqs={faqs} />
    </main>
  )
}
