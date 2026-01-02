import ProjectManagersClient from './ProjectManagersClient'
import { getFAQsForPage } from '@/lib/pageData'
import { projectManagersData } from '@/lib/staticData/hire/project-managers'

export default function HireProjectManagers() {
  const faqs = getFAQsForPage('project-managers')
  
  return <ProjectManagersClient faqs={faqs} projectManagersData={projectManagersData} />
}
