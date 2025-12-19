import ToolsIntegrationsClient from './ToolsIntegrationsClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function ToolsIntegrationsTechnology() {
  const faqs = getFAQsForPage('tools-integrations')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <ToolsIntegrationsClient faqs={faqs} />
    </main>
  )
}
