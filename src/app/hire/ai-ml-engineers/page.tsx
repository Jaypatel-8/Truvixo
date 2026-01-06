import AIMLEngineersClient from './AIMLEngineersClient'
import { getFAQsForPage } from '@/lib/pageData'
import { aiMlEngineersData } from '@/lib/staticData/hire/ai-ml-engineers'

export default function HireAIMLEngineers() {
  const faqs = getFAQsForPage('ai-ml-engineers')
  
  return <AIMLEngineersClient faqs={faqs} aiMlEngineersData={aiMlEngineersData} />
}
