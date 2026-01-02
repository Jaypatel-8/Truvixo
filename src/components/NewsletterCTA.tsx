'use client'

import { useState } from 'react'
import { ArrowRight, Mail, Phone, Calendar } from 'lucide-react'

interface NewsletterCTAProps {
  onContactClick?: () => void
  className?: string
}

export default function NewsletterCTA({ onContactClick, className = '' }: NewsletterCTAProps) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onContactClick) {
      onContactClick()
    }
  }

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#5e2cb6] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#d97706] rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
              Let's Start Your{' '}
              <span className="hollow-text-white">
                Project
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss your requirements and get a free consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:+916354326412"
                className="bg-white text-[#5e2cb6] font-semibold py-4 px-8 rounded-lg hover:bg-[#d97706] hover:text-[#5e2cb6] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
              <button
                onClick={onContactClick}
                className="bg-transparent text-white border-2 border-white font-semibold py-4 px-8 rounded-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a Call</span>
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              <a href="mailto:sales@truvixoo.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>sales@truvixoo.com</span>
              </a>
              <a href="tel:+916354326412" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 63543 26412</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




