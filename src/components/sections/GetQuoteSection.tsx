import { Calendar, ArrowRight, Phone } from 'lucide-react'

interface GetQuoteSectionProps {
  title: string
  hollowText: string
  description: string
  primaryCTA?: {
    text: string
    onClick: () => void
  }
  secondaryCTA?: {
    text: string
    onClick: () => void
  }
}

export default function GetQuoteSection({
  title,
  hollowText,
  description,
  primaryCTA,
  secondaryCTA
}: GetQuoteSectionProps) {
  return (
    <section className="mt-16 py-16 bg-[#5e2cb6] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="scroll-animate">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white">
            {title}{' '}
            <span className="hollow-text-white">
              {hollowText}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
            {description}
          </p>
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCTA && (
                <button 
                  onClick={primaryCTA.onClick}
                  className="bg-white text-[#5e2cb6] font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                >
                  <Phone className="w-5 h-5" strokeWidth={2} />
                  <span>{primaryCTA.text}</span>
                </button>
              )}
              {secondaryCTA && (
                <button 
                  onClick={secondaryCTA.onClick}
                  className="bg-transparent text-white border-2 border-white font-semibold py-4 px-8 rounded-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" strokeWidth={2} />
                  <span>{secondaryCTA.text}</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
