import DedicatedTeamsClient from './DedicatedTeamsClient'
import { getFAQsForPage } from '@/lib/pageData'
import { dedicatedTeamsData } from '@/lib/staticData/hire/dedicated-teams'

export default function HireDedicatedTeams() {
  const faqs = getFAQsForPage('dedicated-teams')
  
  return <DedicatedTeamsClient faqs={faqs} dedicatedTeamsData={dedicatedTeamsData} />
}
