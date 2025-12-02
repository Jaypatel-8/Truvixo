import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Development Services | TruVixo',
  description: 'Custom AI and machine learning solutions for your business',
}

export default function AIPage() {
  // Instant redirect using meta refresh for static export (faster than client-side)
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/services/ai-development-services/" />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Redirecting to AI Development Services...</p>
          <Link 
            href="/services/ai-development-services/" 
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
