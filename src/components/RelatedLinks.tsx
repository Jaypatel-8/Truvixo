'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface RelatedLink {
  title: string
  href: string
  description?: string
}

interface RelatedLinksProps {
  title?: string
  links: RelatedLink[]
  columns?: 2 | 3 | 4
}

export default function RelatedLinks({ 
  title = 'Explore More', 
  links, 
  columns = 3 
}: RelatedLinksProps) {
  if (!links || links.length === 0) return null

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
            {title}
          </h2>
          <p className="text-gray-600">
            Discover more related services and solutions
          </p>
        </div>
        
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-4`}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              prefetch={true}
              className="group bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#5e2cb6] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#5e2cb6] transition-colors">
                    {link.title}
                  </h3>
                  {link.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {link.description}
                    </p>
                  )}
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#5e2cb6] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}




