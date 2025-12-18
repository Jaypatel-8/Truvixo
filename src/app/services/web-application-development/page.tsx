import WebApplicationClient from './WebApplicationClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function WebApplicationDevelopment() {
  const faqs = getFAQsForPage('web-application-development')

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <WebApplicationClient faqs={faqs} />
    </main>
  )
}
