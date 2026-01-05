import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { getFAQsForPage } from '@/lib/pageData'
import { aboutWhyChooseUs, aboutTeamMembers, aboutFocusAreas, aboutIndustries } from '@/lib/staticData/about'

const AboutClient = dynamic(() => import('./AboutClient'), {
  loading: () => (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5e2cb6]"></div>
      </div>
    </main>
  ),
  ssr: false,
})

export default function About() {
  const faqs = getFAQsForPage('about')
  
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-50 overflow-hidden">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5e2cb6]"></div>
        </div>
      </main>
    }>
      <AboutClient 
        faqs={faqs}
        whyChooseUs={[...aboutWhyChooseUs]}
        teamMembers={[...aboutTeamMembers]}
        focusAreas={[...aboutFocusAreas]}
        industries={[...aboutIndustries]}
      />
    </Suspense>
  )
}
