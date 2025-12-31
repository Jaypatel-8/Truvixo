// Server Component - imports FAQs and static data, passes to Client Component
import DatabaseClient from './DatabaseClient'
import { getFAQsForPage } from '@/lib/pageData'
import { databaseTechnologyData } from '@/lib/staticData/technology/database'
import type { BasePageData } from '@/lib/types/staticData'

export default function DatabaseTechnology() {
  const faqs = getFAQsForPage('database')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <DatabaseClient faqs={faqs} databaseTechnologyData={databaseTechnologyData as unknown as BasePageData} />
    </main>
  )
}
