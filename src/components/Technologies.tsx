'use client'

import { useState } from 'react'
import { Code, Server, Cloud, Database, Smartphone, Globe, Layers, Cpu, ArrowRight } from 'lucide-react'

interface Technology {
  name: string
  logo: string // URL or path to logo
  color: string // Brand color for the technology
  category: 'frontend' | 'backend' | 'cloud' | 'mobile' | 'database' | 'devops'
}

interface TechnologiesProps {
  technologies: Technology[]
  title?: string
  subtitle?: string
  className?: string
}

// Technology categories with outlined icons matching logo colors
const categories = [
  { 
    name: 'Frontend', 
    icon: <Code className="w-8 h-8" strokeWidth={2} />, 
    color: '#5e2cb6', // truvixo-blue
    description: 'Modern UI frameworks and libraries'
  },
  { 
    name: 'Backend', 
    icon: <Server className="w-8 h-8" strokeWidth={2} />, 
    color: '#c91a6f', // truvixo-purple
    description: 'Robust server-side technologies'
  },
  { 
    name: 'Cloud', 
    icon: <Cloud className="w-8 h-8" strokeWidth={2} />, 
    color: '#fecc4d', // truvixo-yellow
    description: 'Cloud infrastructure and services'
  },
  { 
    name: 'Mobile', 
    icon: <Smartphone className="w-8 h-8" strokeWidth={2} />, 
    color: '#10b981', // truvixo-green
    description: 'Cross-platform mobile development'
  },
  { 
    name: 'Database', 
    icon: <Database className="w-8 h-8" strokeWidth={2} />, 
    color: '#f59e0b', // truvixo-orange
    description: 'Data storage and management'
  },
  { 
    name: 'DevOps', 
    icon: <Layers className="w-8 h-8" strokeWidth={2} />, 
    color: '#d42628', // truvixo-red
    description: 'Deployment and infrastructure tools'
  }
]

export default function Technologies({ 
  technologies, 
  title = "Technologies We Use",
  subtitle = "Modern tech stack for optimal performance",
  className = '' 
}: TechnologiesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Group technologies by category
  const technologiesByCategory = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = []
    }
    acc[tech.category].push(tech)
    return acc
  }, {} as Record<string, Technology[]>)

  // Get technologies for selected category or all if none selected
  const displayTechnologies = selectedCategory 
    ? technologiesByCategory[selectedCategory] || []
    : technologies

  // Get selected category name
  const selectedCategoryName = selectedCategory 
    ? categories.find(cat => cat.name.toLowerCase() === selectedCategory)?.name || selectedCategory
    : null

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="hollow-text-brand">{title.split(' ').slice(-1)[0]}</span>
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Single Grid Container with 2 Sub-Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Sub-Grid - Categories */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Categories
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category, index) => {
                const isSelected = selectedCategory === category.name.toLowerCase()
                const categoryTechs = technologiesByCategory[category.name.toLowerCase() as keyof typeof technologiesByCategory] || []
                
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(
                      isSelected ? null : category.name.toLowerCase()
                    )}
                    className={`group bg-white rounded-xl p-5 border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center ${
                      isSelected 
                        ? 'shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{
                      borderColor: isSelected ? category.color : undefined,
                      boxShadow: isSelected ? `0 10px 25px -5px ${category.color}40` : undefined
                    }}
                  >
                    <div 
                      className="mb-3 flex justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ color: category.color }}
                    >
                      {category.icon}
                    </div>
                    <h3 
                      className="font-bold text-sm mb-1 transition-colors"
                      style={{ 
                        color: isSelected ? category.color : '#111827'
                      }}
                    >
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {categoryTechs.length} {categoryTechs.length === 1 ? 'tech' : 'techs'}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Sub-Grid - Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {selectedCategoryName ? (
                <>
                  {selectedCategoryName} Technologies
                </>
              ) : (
                <>
                  All Technologies
                </>
              )}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto pr-2">
              {displayTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
                  style={{
                    borderColor: tech.color + '40'
                  }}
                >
                  <div className="mb-3 flex justify-center items-center h-12">
                    <div 
                      className="w-12 h-12 flex items-center justify-center relative"
                    >
                      {/* Outlined colored icon effect */}
                      <div 
                        className="absolute inset-0 rounded-lg border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          borderColor: tech.color
                        }}
                      ></div>
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                  <h3 
                    className="font-semibold text-xs transition-colors"
                    style={{
                      color: tech.color
                    }}
                  >
                    {tech.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clear filter button */}
        {selectedCategory && (
          <div className="text-center mt-6">
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors inline-flex items-center gap-2"
            >
              Show All Technologies
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

