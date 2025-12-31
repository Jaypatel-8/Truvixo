// Server Component - imports FAQs and static data, passes to Client Component
import MobileDevelopersClient from './MobileDevelopersClient'
import { getFAQsForPage } from '@/lib/pageData'
import { mobileDevelopersData } from '@/lib/staticData/hire/mobile-developers'

export default function HireMobileDevelopers() {
  const faqs = getFAQsForPage('mobile-developers')
  
  return <MobileDevelopersClient faqs={faqs} mobileDevelopersData={mobileDevelopersData} />
}
