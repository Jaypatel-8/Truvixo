'use client'

import { useState, useEffect, useRef } from 'react'
import { X, Send, Loader2, CheckCircle } from 'lucide-react'
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
  const modalRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)

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

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        industry: '',
        service: ''
      })
      setIsSubmitted(false)
      setIsSubmitting(false)
      setSubmitMessage('')
    }
  }, [isOpen])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
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

    try {
      const result = await sendContactEmail(emailData)
      setIsSubmitting(false)
      
      if (result.success) {
        setIsSubmitted(true)
        setSubmitMessage(result.message)
      } else {
        setSubmitMessage(result.message)
      }
    } catch (error) {
      setIsSubmitting(false)
      setSubmitMessage('An error occurred. Please try again or contact us directly at sales@truvixoo.com')
    }
  }

  const handleClose = () => {
    if (isSubmitting) {
      return // Don't close while submitting
    }
    onClose()
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking directly on backdrop, not on modal content
    if (e.target === backdropRef.current && !isSubmitting) {
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      ref={backdropRef}
      className="fixed inset-0 bg-black/70 dark:bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl md:text-3xl font-bold text-[#5e2cb6] dark:text-[#8b5cf6]">
            Get Started with TruVixo
          </h3>
          <button
            onClick={handleClose}
            type="button"
            className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            disabled={isSubmitting}
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
            <div className="flex items-center gap-2 text-green-800 dark:text-green-300">
              <CheckCircle className="w-5 h-5" />
              <p className="font-medium">{submitMessage || 'Thank you! We will get back to you soon.'}</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitMessage && !isSubmitted && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
            <p className="text-red-800 dark:text-red-300">{submitMessage}</p>
          </div>
        )}
        
        {/* Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#5e2cb6] dark:focus:ring-[#8b5cf6] focus:border-[#5e2cb6] dark:focus:border-[#8b5cf6] transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#5e2cb6] dark:focus:ring-[#8b5cf6] focus:border-[#5e2cb6] dark:focus:border-[#8b5cf6] transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="modal-company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="modal-company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#5e2cb6] dark:focus:ring-[#8b5cf6] focus:border-[#5e2cb6] dark:focus:border-[#8b5cf6] transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your company name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="modal-industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry *
                </label>
                <select
                  id="modal-industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#5e2cb6] dark:focus:ring-[#8b5cf6] focus:border-[#5e2cb6] dark:focus:border-[#8b5cf6] transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Select Industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="modal-service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Service Interested In *
                </label>
                <select
                  id="modal-service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#5e2cb6] dark:focus:ring-[#8b5cf6] focus:border-[#5e2cb6] dark:focus:border-[#8b5cf6] transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Select Service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="modal-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#5e2cb6] dark:focus:ring-[#8b5cf6] focus:border-[#5e2cb6] dark:focus:border-[#8b5cf6] transition-all resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#5e2cb6] dark:bg-[#8b5cf6] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#4a1f8f] dark:hover:bg-[#7c3ae0] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We've received your message and will get back to you within 24 hours.
            </p>
            <button
              onClick={handleClose}
              className="bg-[#5e2cb6] dark:bg-[#8b5cf6] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#4a1f8f] dark:hover:bg-[#7c3ae0] transition-all"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
