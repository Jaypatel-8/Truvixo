import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { getFAQsForPage } from '@/lib/pageData'
import { healthcareIndustryData } from '@/lib/staticData/industry/healthcare'
import type { BasePageData } from '@/lib/types/staticData'

const HealthcareClient = dynamic(() => import('./HealthcareClient'), {
  loading: () => (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5e2cb6]"></div>
      </div>
    </main>
  ),
  ssr: false,
})

export default function HealthcareDevelopment() {
  const faqs = getFAQsForPage('healthcare')
  
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-50 overflow-hidden">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5e2cb6]"></div>
        </div>
      </main>
    }>
      <HealthcareClient faqs={faqs} healthcareData={healthcareIndustryData as unknown as BasePageData} />
    </Suspense>
  )
}
