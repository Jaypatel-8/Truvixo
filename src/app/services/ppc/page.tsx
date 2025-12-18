import PPCClient from './PPCClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function PPC() {
  const faqs = getFAQsForPage('ppc')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <PPCClient faqs={faqs} />
    </main>
  )
}
