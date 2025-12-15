'use client'

import { ReactNode } from 'react'
import { Calendar, ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  badge?: {
    icon: ReactNode
    text: string
  }
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
  previewCards?: Array<{
    icon: ReactNode
    title: string
    description: string
    color: string
  }>
}

export default function HeroSection({
  badge,
  title,
  hollowText,
  description,
  primaryCTA,
  secondaryCTA,
  previewCards
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] bg-white flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate">
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e2cb6]/10 rounded-full mb-6">
                {badge.icon}
                <span className="text-sm font-semibold text-[#5e2cb6]">{badge.text}</span>
              </div>
            )}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              {title}{' '}
              <span className="hollow-text-brand block mt-2">
                {hollowText}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-col sm:flex-row items-start gap-4">
                {primaryCTA && (
                  <button 
                    onClick={primaryCTA.onClick}
                    className="bg-[#5e2cb6] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-[#5e2cb6]/30"
                  >
                    <Calendar className="w-5 h-5" strokeWidth={2} />
                    <span>{primaryCTA.text}</span>
                  </button>
                )}
                {secondaryCTA && (
                  <button 
                    onClick={secondaryCTA.onClick}
                    className="bg-white text-[#5e2cb6] border-2 border-[#5e2cb6] font-semibold py-4 px-8 rounded-xl hover:bg-[#5e2cb6]/5 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                  >
                    <span>{secondaryCTA.text}</span>
                    <ArrowRight className="w-5 h-5" strokeWidth={2} />
                  </button>
                )}
              </div>
            )}
          </div>

          {previewCards && previewCards.length > 0 && (
            <div className="hidden lg:grid grid-cols-2 gap-4 scroll-animate-scale">
              {previewCards.slice(0, 4).map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{ borderColor: card.color + '40' }}
                >
                  <div className="mb-4" style={{ color: card.color }}>
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{card.title}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">{card.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}









