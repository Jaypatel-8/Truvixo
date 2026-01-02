import OurWorkClient from './OurWorkClient'
import { getFAQsForPage } from '@/lib/pageData'
import { ourWorkData } from '@/lib/staticData/our-work'

export default function OurWork() {
  const faqs = getFAQsForPage('default')

  return <OurWorkClient faqs={faqs} ourWorkData={ourWorkData} />
}
