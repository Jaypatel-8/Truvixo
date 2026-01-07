import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { getFAQsForPage } from '@/lib/pageData'
import { webApplicationDevelopmentData } from '@/lib/staticData/services/web-application-development'

const WebApplicationClient = dynamic(() => import('./WebApplicationClient'), {
  ssr: true,
  loading: () => (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#5e2cb6] mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  ),
})

export default function WebApplicationDevelopment() {
  const faqs = getFAQsForPage('web-application-development')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <Suspense fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#5e2cb6] mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }>
        <WebApplicationClient faqs={faqs} webAppData={webApplicationDevelopmentData} />
      </Suspense>
    </main>
  )
}
