import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { getFAQsForPage } from '@/lib/pageData'
import { ppcData } from '@/lib/staticData/services/ppc'
import type { BasePageData } from '@/lib/types/staticData'

const PPCClient = dynamic(() => import('./PPCClient'), {
  loading: () => (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5e2cb6]"></div>
      </div>
    </main>
  ),
  ssr: false,
})

export default function PPC() {
  const faqs = getFAQsForPage('ppc')
  
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-50 overflow-hidden">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5e2cb6]"></div>
        </div>
      </main>
    }>
      <PPCClient faqs={faqs} ppcData={ppcData as unknown as BasePageData} />
    </Suspense>
  )
}
