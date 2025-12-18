import DatabaseClient from './DatabaseClient'
import { getFAQsForPage } from '@/lib/pageData'

export default function DatabaseTechnology() {
  const faqs = getFAQsForPage('database')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <DatabaseClient faqs={faqs} />
    </main>
  )
}
