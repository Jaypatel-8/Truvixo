import { ReactNode } from 'react'

interface Service {
  title: string
  description: string
  icon: ReactNode
  color: string
}

interface ServicesGridProps {
  title: string
  hollowText: string
  subtitle?: string
  services: Service[]
  columns?: 3 | 4
}

export default function ServicesGrid({
  title,
  hollowText,
  subtitle,
  services,
  columns = 4
}: ServicesGridProps) {
  const gridCols = columns === 4 
    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            {title}{' '}
            <span className="hollow-text-brand">
              {hollowText}
            </span>
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className={`grid ${gridCols} gap-6`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border-2 border-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden service-card"
              style={{ 
                '--service-color': service.color,
                '--service-color-base': service.color + '40',
                borderColor: service.color + '40'
              } as React.CSSProperties & { '--service-color': string; '--service-color-base': string }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: service.color }}></div>
              <div className="relative z-10">
                <div className="mb-6 flex justify-center" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5e2cb6] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}











