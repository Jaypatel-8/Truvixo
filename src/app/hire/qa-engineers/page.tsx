'use client'

import QAEngineersClient from './QAEngineersClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function HireQAEngineers() {
  const faqs = getFAQsForPage('qa-engineers')

  return <QAEngineersClient faqs={faqs} />
}
