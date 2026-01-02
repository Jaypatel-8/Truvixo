import CareersClient from './CareersClient'
import { getFAQsForPage } from '@/lib/pageData'
import { careersData } from '@/lib/staticData/company/careers'

export default function Careers() {
  const faqs = getFAQsForPage('careers')
  
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <CareersClient faqs={faqs} careersData={careersData} />
    </main>
  )
}
