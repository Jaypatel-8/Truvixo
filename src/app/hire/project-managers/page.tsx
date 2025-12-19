'use client'

import ProjectManagersClient from './ProjectManagersClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function HireProjectManagers() {
  const faqs = getFAQsForPage('project-managers')

  return <ProjectManagersClient faqs={faqs} />
}
