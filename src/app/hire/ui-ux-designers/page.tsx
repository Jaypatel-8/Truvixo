'use client'

import UIUXDesignersClient from './UIUXDesignersClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function HireUIUXDesigners() {
  const faqs = getFAQsForPage('ui-ux-designers')

  return <UIUXDesignersClient faqs={faqs} />
}
