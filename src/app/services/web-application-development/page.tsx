import WebApplicationClient from './WebApplicationClient'
import { getFAQsForPage } from '@/lib/pageData'
import { webApplicationDevelopmentData } from '@/lib/staticData/services/web-application-development'

export default function WebApplicationDevelopment() {
  const faqs = getFAQsForPage('web-application-development')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <WebApplicationClient faqs={faqs} webAppData={webApplicationDevelopmentData} />
    </main>
  )
}
