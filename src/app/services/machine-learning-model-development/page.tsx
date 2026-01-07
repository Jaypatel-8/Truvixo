import MLClient from './MLClient'
import { getFAQsForPage } from '@/lib/pageData'
import { machineLearningModelDevelopmentData } from '@/lib/staticData/services/machine-learning-model-development'
import type { BasePageData } from '@/lib/types/staticData'

export default function MachineLearningModelDevelopment() {
  const faqs = getFAQsForPage('machine-learning-model-development')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <MLClient faqs={faqs} mlData={machineLearningModelDevelopmentData as unknown as BasePageData} />
    </main>
  )
}
