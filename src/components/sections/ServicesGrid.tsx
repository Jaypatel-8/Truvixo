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
        <div className="text-center mb-16 section-reveal">
          <h2 className="heading-reveal text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            <span className="heading-reveal-line block">{title}{' '}</span>
            <span className="heading-reveal-line block">
              <span className="hollow-text-brand">{hollowText}</span>
            </span>
          </h2>
          {subtitle && (
            <p className="section-desc-reveal text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className={`grid ${gridCols} gap-6 scroll-stagger`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="scroll-stagger-item group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-opacity-100 relative overflow-hidden scroll-animate-scale card-hover card-hover-border"
              style={{ 
                borderColor: service.color + '40',
                animationDelay: `${index * 0.06}s`
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = service.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = service.color + '40'
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: service.color }}></div>
              <div className="relative z-10">
                <div className="mb-6 flex justify-center" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#5e2cb6] transition-colors" style={{ color: '#111827' }}>
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













