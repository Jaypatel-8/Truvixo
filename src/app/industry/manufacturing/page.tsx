import ManufacturingClient from './ManufacturingClient'
import { getFAQsForPage } from '@/lib/pageData'
import { manufacturingIndustryData } from '@/lib/staticData/industry/manufacturing'

export default function ManufacturingDevelopment() {
  const faqs = getFAQsForPage('manufacturing')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <ManufacturingClient faqs={faqs} manufacturingData={manufacturingIndustryData} />
    </main>
  )
}
