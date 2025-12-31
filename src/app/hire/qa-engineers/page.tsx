// Server Component - imports FAQs and static data, passes to Client Component
import QAEngineersClient from './QAEngineersClient'
import { getFAQsForPage } from '@/lib/pageData'
import { qaEngineersData } from '@/lib/staticData/hire/qa-engineers'

export default function HireQAEngineers() {
  const faqs = getFAQsForPage('qa-engineers')
  
  return <QAEngineersClient faqs={faqs} qaEngineersData={qaEngineersData} />
}
