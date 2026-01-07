import CustomSoftwareClient from './CustomSoftwareClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function CustomSoftwareDevelopment() {
  const faqs = getFAQsForPage('custom-software-development')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <CustomSoftwareClient faqs={faqs} />
    </main>
  )
}
