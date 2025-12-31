// Server Component - imports FAQs and passes to Client Component
import AboutClient from './AboutClient'
import { getFAQsForPage } from '@/lib/pageData'
import { aboutWhyChooseUs, aboutTeamMembers, aboutFocusAreas, aboutIndustries } from '@/lib/staticData/about'

export default function About() {
  const faqs = getFAQsForPage('about')
  
  return (
    <AboutClient 
      faqs={faqs}
      whyChooseUs={aboutWhyChooseUs}
      teamMembers={aboutTeamMembers}
      focusAreas={aboutFocusAreas}
      industries={aboutIndustries}
    />
  )
}
