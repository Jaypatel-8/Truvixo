import UIUXDesignersClient from './UIUXDesignersClient'
import { getFAQsForPage } from '@/lib/pageData'
import { uiUxDesignersData } from '@/lib/staticData/hire/ui-ux-designers'

export default function HireUIUXDesigners() {
  const faqs = getFAQsForPage('ui-ux-designers')
  
  return <UIUXDesignersClient faqs={faqs} uiUxDesignersData={uiUxDesignersData} />
}
