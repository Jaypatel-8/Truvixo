'use client'

import { useState } from 'react'
import { X, Send, Loader2 } from 'lucide-react'
import { sendContactEmail, type ContactFormData } from '@/lib/emailService'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    industry: '',
    service: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const industries = [
    'FinTech',
    'Healthcare',
    'Retail & E-commerce',
    'EdTech',
    'Manufacturing',
    'Real Estate',
    'Logistics & Supply Chain',
    'Construction',
    'Other'
  ]

  const services = [
    'AI & Emerging Technologies',
    'Software Development & Product Engineering',
    'Cloud & DevOps',
    'Testing & QA + IT Consulting',
    'Digital Marketing & Growth Strategy',
    'Product Design & UX',
    'Data, Analytics & Business Intelligence',
    'Cybersecurity & Infrastructure',
    'Not Sure'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    const emailData: ContactFormData = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
      industry: formData.industry,
      service: formData.service,
      subject: 'New Contact Form Submission from TruVixo Website'
    }

    const result = await sendContactEmail(emailData)
    
    setIsSubmitting(false)
    
    if (result.success) {
      setIsSubmitted(true)
      setSubmitMessage(result.message)
    } else {
      setSubmitMessage(result.message)
    }
  }

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      industry: '',
      service: ''
    })
    setIsSubmitted(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-12 shadow-2xl transform animate-scale-in max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900">Get Started with TruVixo</h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {submitMessage && (
          <div className={`mb-6 p-4 border rounded-xl ${
            submitMessage.includes('Thank you') || submitMessage.includes('success')
              ? 'bg-green-50 border-green-200 text-green-800'
              : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <p>{submitMessage}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="modal-company" className="block text-sm font-medium text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              id="modal-company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              placeholder="Your company name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="modal-industry" className="block text-sm font-medium text-gray-700 mb-2">
                Industry *
              </label>
              <select
                id="modal-industry"
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">Select Industry</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="modal-service" className="block text-sm font-medium text-gray-700 mb-2">
                Service Interested In *
              </label>
              <select
                id="modal-service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="modal-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Close
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}






