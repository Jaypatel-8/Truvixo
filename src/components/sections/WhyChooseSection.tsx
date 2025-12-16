import { ReactNode } from 'react'

interface WhyChooseItem {
  icon: ReactNode
  title: string
  description?: string
  color: string
}

interface WhyChooseSectionProps {
  title: string
  hollowText: string
  subtitle?: string
  items: WhyChooseItem[]
  columns?: 3 | 4 | 5
}

export default function WhyChooseSection({
  title,
  hollowText,
  subtitle,
  items,
  columns = 5
}: WhyChooseSectionProps) {
  const gridCols = columns === 5
    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5'
    : columns === 4
    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  const logoColors = ['#5e2cb6', '#c91a6f', '#fecc4d', '#10b981', '#d42628', '#f59e0b']

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            {title}{' '}
            <span className="hollow-text-brand">
              {hollowText}
            </span>
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        <div className={`grid ${gridCols} gap-6`}>
          {items.map((item, index) => {
            const color = item.color || logoColors[index % logoColors.length]
            return (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-3 flex justify-center" style={{ color: color }}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-600 text-xs mt-2">{item.description}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
