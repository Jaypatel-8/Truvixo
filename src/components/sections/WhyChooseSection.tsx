import { ReactNode } from 'react'

interface WhyChooseItem {
  icon: ReactNode
  title: string
  description: string
  color: string
}

interface WhyChooseSectionProps {
  title: string
  hollowText: string
  subtitle?: string
  items: WhyChooseItem[]
  columns?: 3 | 4
}

export default function WhyChooseSection({
  title,
  hollowText,
  subtitle,
  items,
  columns = 4
}: WhyChooseSectionProps) {
  const gridCols = columns === 4 
    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
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
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border-2 border-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden why-choose-card"
              style={{ 
                '--item-color': item.color,
                '--item-color-base': item.color + '40',
                borderColor: item.color + '40'
              } as React.CSSProperties & { '--item-color': string; '--item-color-base': string }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ backgroundColor: item.color }}></div>
              <div className="relative z-10">
                <div className="mb-6 flex justify-center" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5e2cb6] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}











