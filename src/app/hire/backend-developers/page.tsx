// Server Component - imports FAQs and static data, passes to Client Component
import BackendDevelopersClient from './BackendDevelopersClient'
import { getFAQsForPage } from '@/lib/pageData'
import { backendDevelopersData } from '@/lib/staticData/hire/backend-developers'

export default function HireBackendDevelopers() {
  const faqs = getFAQsForPage('backend-developers')
  
  return <BackendDevelopersClient faqs={faqs} backendDevelopersData={backendDevelopersData} />
}
