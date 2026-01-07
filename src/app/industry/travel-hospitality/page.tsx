import TravelHospitalityClient from './TravelHospitalityClient'
import { getFAQsForPage } from '@/lib/pageData'
import { travelHospitalityData } from '@/lib/staticData/industry/travel-hospitality'

export default function TravelHospitalityDevelopment() {
  const faqs = getFAQsForPage('travel-hospitality')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <TravelHospitalityClient faqs={faqs} travelHospitalityData={travelHospitalityData} />
    </main>
  )
}
