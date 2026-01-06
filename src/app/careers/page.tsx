import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { getFAQsForPage } from '@/lib/pageData'
import { careersData } from '@/lib/staticData/company/careers'

const CareersClient = dynamic(() => import('./CareersClient'), {
  loading: () => (
    <main className="min-h-screen bg-white overflow-hidden">
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5e2cb6]"></div>
      </div>
    </main>
  ),
  ssr: false,
})

export default function Careers() {
  const faqs = getFAQsForPage('careers')
  
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-white overflow-hidden">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5e2cb6]"></div>
        </div>
      </main>
    }>
      <CareersClient faqs={faqs} careersData={careersData} />
    </Suspense>
  )
}
