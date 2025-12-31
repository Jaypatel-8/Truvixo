// Server Component - imports FAQs and static data, passes to Client Component
import FullStackDevelopersClient from './FullStackDevelopersClient'
import { getFAQsForPage } from '@/lib/pageData'
import { fullStackDevelopersData } from '@/lib/staticData/hire/full-stack-developers'

export default function HireFullStackDevelopers() {
  const faqs = getFAQsForPage('full-stack-developers')
  
  return <FullStackDevelopersClient faqs={faqs} fullStackDevelopersData={fullStackDevelopersData} />
}
