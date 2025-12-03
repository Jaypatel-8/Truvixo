'use client'

import { ReactNode } from 'react'
import { Phone, Mail, Calendar } from 'lucide-react'

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
  email?: string
  phone?: string
}

export default function GetQuoteSection({
  title,
  hollowText,
  description,
  primaryCTA,
  secondaryCTA,
  email = 'sales@truvixoo.com',
  phone = '+91 63543 26412'
}: GetQuoteSectionProps) {
  return (
    <section className="py-20 bg-[#5e2cb6] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="scroll-animate">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            {title}{' '}
            <span className="hollow-text-white">
              {hollowText}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
            {description}
          </p>
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              {primaryCTA && (
                <button 
                  onClick={primaryCTA.onClick}
                  className="bg-white text-[#5e2cb6] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                >
                  <Phone className="w-5 h-5" strokeWidth={2} />
                  <span>{primaryCTA.text}</span>
                </button>
              )}
              {secondaryCTA && (
                <button 
                  onClick={secondaryCTA.onClick}
                  className="bg-transparent text-white border-2 border-white font-semibold py-4 px-8 rounded-xl hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" strokeWidth={2} />
                  <span>{secondaryCTA.text}</span>
                </button>
              )}
            </div>
          )}
          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-5 h-5" strokeWidth={2} />
              <span>{email}</span>
            </a>
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-5 h-5" strokeWidth={2} />
              <span>{phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}




