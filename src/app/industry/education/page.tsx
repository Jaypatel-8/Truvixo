// Server Component - imports FAQs and static data, passes to Client Component
import EducationClient from './EducationClient'
import { getFAQsForPage } from '@/lib/pageData'
import { educationData } from '@/lib/staticData/industry/education'

export default function EducationDevelopment() {
  const faqs = getFAQsForPage('education')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <EducationClient faqs={faqs} educationData={educationData} />
    </main>
  )
}
