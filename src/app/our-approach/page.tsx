import OurApproachClient from './OurApproachClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function OurApproach() {
  const faqs = getFAQsForPage('our-approach')

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <OurApproachClient faqs={faqs} />
    </main>
  )
}
