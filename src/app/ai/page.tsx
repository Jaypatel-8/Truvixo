'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AIPage() {
  const router = useRouter()

  useEffect(() => {
    // Immediate redirect on client-side
    router.replace('/services/ai-development-services/')
  }, [router])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#5e2cb6]"></div>
        </div>
        <p className="text-gray-600 mb-4 text-lg">Redirecting to AI Development Services...</p>
        <Link 
          href="/services/ai-development-services/" 
          className="text-[#5e2cb6] font-semibold hover:underline transition-colors"
          prefetch={true}
        >
          Click here if you are not redirected automatically
        </Link>
      </div>
    </div>
  )
}


