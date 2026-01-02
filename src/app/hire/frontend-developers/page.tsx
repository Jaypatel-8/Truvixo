import FrontendDevelopersClient from './FrontendDevelopersClient'
import { getFAQsForPage } from '@/lib/pageData'
import { frontendDevelopersData } from '@/lib/staticData/hire/frontend-developers'

export default function HireFrontendDevelopers() {
  const faqs = getFAQsForPage('frontend-developers')
  
  return <FrontendDevelopersClient faqs={faqs} frontendDevelopersData={frontendDevelopersData} />
}
