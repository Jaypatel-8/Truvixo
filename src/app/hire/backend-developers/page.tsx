import BackendDevelopersClient from './BackendDevelopersClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function HireBackendDevelopers() {
  const faqs = getFAQsForPage('backend-developers')

  return <BackendDevelopersClient faqs={faqs} />
}
