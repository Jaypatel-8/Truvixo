'use client'

import { useState, useMemo, memo } from 'react'
import Image from 'next/image'

interface Technology {
  name: string
  logo?: string
  color?: string
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'devops' | 'mobile' | 'ai' | 'management' | 'testing' | 'design' | 'other'
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
      'ai': 'AI/ML'
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-reveal">
        <div className="text-center mb-12">
          <h2 className="heading-reveal text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            <span className="heading-reveal-line block">Technologies We{' '}</span>
            <span className="heading-reveal-line block">
              <span className="hollow-text-brand">Use</span>
            </span>
          </h2>
          <p className="section-desc-reveal text-lg text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks that power our innovative solutions
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 scroll-animate">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 scroll-stagger">
          {displayTechnologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="scroll-stagger-item scroll-animate-scale group bg-white rounded-xl p-6 border border-gray-200 text-center card-hover"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="relative w-12 h-12 mb-3 flex items-center justify-center">
                  {tech.logo ? (
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="object-contain"
                      loading="lazy"
                      unoptimized
                    />
                  ) : (
                    <span
                      className="text-lg font-bold text-gray-400 flex items-center justify-center w-full h-full rounded bg-gray-100"
                      aria-hidden
                    >
                      {tech.name.charAt(0)}
                    </span>
                  )}
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


