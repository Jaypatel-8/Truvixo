// Server Component - imports FAQs and static data, passes to Client Component
import DevOpsEngineersClient from './DevOpsEngineersClient'
import { getFAQsForPage } from '@/lib/pageData'
import { devopsEngineersData } from '@/lib/staticData/hire/devops-engineers'

export default function HireDevOpsEngineers() {
  const faqs = getFAQsForPage('devops-engineers')
  
  return <DevOpsEngineersClient faqs={faqs} devopsEngineersData={devopsEngineersData} />
}
