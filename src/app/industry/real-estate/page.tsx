import RealEstateClient from './RealEstateClient'
import { getFAQsForPage } from '@/lib/pageData'
import { realEstateIndustryData } from '@/lib/staticData/industry/real-estate'

export default function RealEstateDevelopment() {
  const faqs = getFAQsForPage('real-estate')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <RealEstateClient faqs={faqs} realEstateData={realEstateIndustryData} />
    </main>
  )
}
