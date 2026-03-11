import { Calendar, ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'

interface GetQuoteSectionProps {
  title?: string
  hollowText?: string
  description?: string
  primaryCTA?: {
    text: string
    onClick?: () => void
    href?: string
    type?: 'button' | 'link' | 'tel'
  }
  secondaryCTA?: {
    text: string
    onClick?: () => void
    href?: string
    type?: 'button' | 'link' | 'tel'
  }
}

export default function GetQuoteSection({
  title = '',
  hollowText = '',
  description = '',
  primaryCTA,
  secondaryCTA
}: GetQuoteSectionProps) {
  return (
    <section className="mt-16 py-16 bg-[#5e2cb6] text-white relative overflow-hidden section-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="scroll-animate">
          <h2 className="heading-reveal text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-white">
            <span className="heading-reveal-line block">{title}{' '}</span>
            <span className="heading-reveal-line block">
              <span className="hollow-text-white font-semibold">{hollowText}</span>
            </span>
          </h2>
          <p className="section-desc-reveal text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8 font-normal">
            {description}
          </p>
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCTA && (
                primaryCTA.type === 'tel' ? (
                  <a 
                    href={`tel:${primaryCTA.href || '+916354326412'}`}
                    className="btn-entrance btn-press bg-white text-[#5e2cb6] font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                  >
                    <Phone className="w-5 h-5" strokeWidth={2} />
                    <span>{primaryCTA.text}</span>
                  </a>
                ) : primaryCTA.type === 'link' || primaryCTA.href ? (
                  <Link 
                    href={primaryCTA.href || '/contact'}
                    className="btn-entrance btn-press bg-white text-[#5e2cb6] font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                  >
                    <Phone className="w-5 h-5" strokeWidth={2} />
                    <span>{primaryCTA.text}</span>
                  </Link>
                ) : (
                  <button 
                    onClick={primaryCTA.onClick}
                    className="btn-entrance btn-press bg-white text-[#5e2cb6] font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                  >
                    <Phone className="w-5 h-5" strokeWidth={2} />
                    <span>{primaryCTA.text}</span>
                  </button>
                )
              )}
              {secondaryCTA && (
                secondaryCTA.type === 'link' || secondaryCTA.href ? (
                  <Link 
                    href={secondaryCTA.href || '/contact'}
                    className="btn-entrance btn-press bg-transparent text-white border-2 border-white font-semibold py-4 px-8 rounded-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <Calendar className="w-5 h-5" strokeWidth={2} />
                    <span>{secondaryCTA.text}</span>
                  </Link>
                ) : (
                  <button 
                    onClick={secondaryCTA.onClick}
                    className="btn-entrance btn-press bg-transparent text-white border-2 border-white font-semibold py-4 px-8 rounded-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <Calendar className="w-5 h-5" strokeWidth={2} />
                    <span>{secondaryCTA.text}</span>
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}


