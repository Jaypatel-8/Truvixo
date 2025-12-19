'use client'

import { useState, useMemo, memo } from 'react'
import Image from 'next/image'

interface Technology {
  name: string
  logo: string
  color: string
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'devops' | 'mobile' | 'ai' | 'tools'
}

interface TechnologiesProps {
  technologies: Technology[]
}

const Technologies = memo(function Technologies({ technologies }: TechnologiesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Memoize technologies grouped by category
  const technologiesByCategory = useMemo(() => {
    const grouped: Record<string, Technology[]> = {}
    technologies.forEach((tech) => {
      if (!grouped[tech.category]) {
        grouped[tech.category] = []
      }
      grouped[tech.category].push(tech)
    })
    return grouped
  }, [technologies])

  // Memoize available categories
  const categories = useMemo(() => {
    const cats = ['all', ...Object.keys(technologiesByCategory)]
    return cats
  }, [technologiesByCategory])

  // Memoize displayed technologies based on selected category
  const displayTechnologies = useMemo(() => {
    if (selectedCategory === 'all') {
      return technologies
    }
    return technologiesByCategory[selectedCategory] || []
  }, [selectedCategory, technologies, technologiesByCategory])

  // Category name mapping for better display
  const getCategoryDisplayName = (category: string): string => {
    const categoryMap: Record<string, string> = {
      'all': 'All',
      'frontend': 'Frontend',
      'backend': 'Backend',
      'database': 'Database',
      'cloud': 'Cloud',
      'devops': 'DevOps',
      'mobile': 'Mobile',
      'ai': 'AI/ML',
      'tools': 'Tools'
    }
    return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1)
  }

  // Memoize selected category name for display
  const selectedCategoryName = useMemo(() => {
    if (selectedCategory === 'all') return 'All Technologies'
    return getCategoryDisplayName(selectedCategory)
  }, [selectedCategory])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Technologies We{' '}
            <span className="hollow-text-brand">
              Use
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks that power our innovative solutions
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              aria-label={`Filter technologies by ${category === 'all' ? 'all categories' : category}`}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {getCategoryDisplayName(category)}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {displayTechnologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center scroll-animate-scale"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="relative w-12 h-12 mb-3 flex items-center justify-center">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="object-contain"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      const target = e.target as HTMLImageElement
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iI0YzRjRGNiIvPgo8cGF0aCBkPSJNMjQgMTJMMzYgMjRMMjQgMzZMMTIgMjRMMjQgMTJaIiBmaWxsPSIjOEU5MEE2Ii8+Cjwvc3ZnPgo='
                    }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Technologies.displayName = 'Technologies'

export default Technologies


