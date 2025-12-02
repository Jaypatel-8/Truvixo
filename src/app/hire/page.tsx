import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hire Developers | TruVixo',
  description: 'Hire experienced developers for your projects',
}

export default function HirePage() {
  // Instant redirect using meta refresh for static export (faster than client-side)
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/hire/ai-ml-engineers/" />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Redirecting to Hire Developers...</p>
          <Link 
            href="/hire/ai-ml-engineers/" 
            className="text-[#5e2cb6] font-semibold hover:underline"
            prefetch={true}
          >
            Click here if you are not redirected automatically
          </Link>
        </div>
      </div>
    </>
  )
}
