'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function HirePage() {
  const router = useRouter()

  useEffect(() => {
    // Immediate redirect on client-side
    router.replace('/hire/ai-ml-engineers/')
  }, [router])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#5e2cb6]"></div>
        </div>
        <p className="text-gray-600 mb-4 text-lg">Redirecting to Hire Developers...</p>
        <Link 
          href="/hire/ai-ml-engineers/" 
          className="text-[#5e2cb6] font-semibold hover:underline transition-colors"
          prefetch={true}
        >
          Click here if you are not redirected automatically
        </Link>
      </div>
    </div>
  )
}
