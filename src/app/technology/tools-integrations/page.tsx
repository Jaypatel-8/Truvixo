import ToolsIntegrationsClient from './ToolsIntegrationsClient'
import { getFAQsForPage } from '@/lib/pageData'
import { frontendTechnologyData } from '@/lib/staticData/technology/frontend'
import type { BasePageData } from '@/lib/types/staticData'

export default function ToolsIntegrationsTechnology() {
  const faqs = getFAQsForPage('tools-integrations')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <ToolsIntegrationsClient faqs={faqs} toolsIntegrationsTechnologyData={frontendTechnologyData as unknown as BasePageData} />
    </main>
  )
}
