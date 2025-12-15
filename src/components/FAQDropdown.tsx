'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface FAQDropdownProps {
  faqs: FAQ[]
  title?: string
  className?: string
}

export default function FAQDropdown({ 
  faqs, 
  title = "Frequently Asked Questions",
  className = '' 
}: FAQDropdownProps) {
  return (
    <div className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              {title.split(' ').map((word, index, arr) => {
                if (index === arr.length - 1) {
                  return <span key={index} className="hollow-text-brand">{word}</span>
                }
                return <span key={index}>{word} </span>
              })}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions? We’ve got answers. Here are some common questions we receive.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 scroll-animate-scale"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


