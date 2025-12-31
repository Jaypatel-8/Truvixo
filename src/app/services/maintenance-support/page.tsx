// Server Component - imports FAQs and static data, passes to Client Component
import MaintenanceClient from './MaintenanceClient'
import { getFAQsForPage } from '@/lib/pageData'
import { maintenanceSupportData } from '@/lib/staticData/services/maintenance-support'

export default function MaintenanceSupport() {
  const faqs = getFAQsForPage('maintenance-support')
  
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <MaintenanceClient faqs={faqs} maintenanceData={maintenanceSupportData} />
    </main>
  )
}
