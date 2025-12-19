'use client'

import MobileDevelopersClient from './MobileDevelopersClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function HireMobileDevelopers() {
  const faqs = getFAQsForPage('mobile-developers')

  return <MobileDevelopersClient faqs={faqs} />
}
