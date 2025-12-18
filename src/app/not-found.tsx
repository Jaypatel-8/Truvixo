import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            404
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            href="/services"
            className="bg-white text-purple-600 font-bold py-4 px-8 rounded-xl border-2 border-purple-200 hover:bg-purple-50 transition-all duration-300 inline-flex items-center gap-2"
          >
            <Search className="w-5 h-5" />
            Browse Services
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 mb-4">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="text-purple-600 hover:text-purple-700 font-medium">
              Services
            </Link>
            <Link href="/ai" className="text-purple-600 hover:text-purple-700 font-medium">
              AI Solutions
            </Link>
            <Link href="/hire" className="text-purple-600 hover:text-purple-700 font-medium">
              Hire Developers
            </Link>
            <Link href="/industry" className="text-purple-600 hover:text-purple-700 font-medium">
              Industries
            </Link>
            <Link href="/about" className="text-purple-600 hover:text-purple-700 font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

















