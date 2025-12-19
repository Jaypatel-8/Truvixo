'use client'

import FrontendDevelopersClient from './FrontendDevelopersClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function HireFrontendDevelopers() {
  const faqs = getFAQsForPage('frontend-developers')

  return <FrontendDevelopersClient faqs={faqs} />
}
