'use client'

import { useState } from 'react'
import { Phone, Mail, Send, Loader2 } from 'lucide-react'
import { sendContactEmail, type ContactFormData } from '@/lib/emailService'

interface ContactSectionProps {
  title?: string
  description?: string
  className?: string
}

export default function ContactSection({ 
  title = "Get in Touch",
  description = "Have a project in mind? Let's discuss how we can help transform your business.",
  className = ''
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    const emailData: ContactFormData = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
      industry: '',
      service: '',
      subject: 'New Contact Form Submission from TruVixo Website'
    }

    const result = await sendContactEmail(emailData)
    
    setIsSubmitting(false)
    
    if (result.success) {
      setIsSuccess(true)
      setSubmitMessage('Thank you! We\'ll get back to you soon.')
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        phone: ''
      })
      setTimeout(() => {
        setIsSuccess(false)
        setSubmitMessage('')
      }, 5000)
    } else {
      setSubmitMessage(result.message)
    }
  }

  return (
    <section className={`py-16 bg-gray-50 ${className}`} id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="hollow-text-brand">{title.split(' ').slice(-1)[0]}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-5 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center border-2 flex-shrink-0" style={{ backgroundColor: '#5e2cb6' + '15', borderColor: '#5e2cb6' }}>
                <Phone className="w-6 h-6" style={{ color: '#5e2cb6' }} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone</p>
                <a href="tel:+916354326412" className="text-gray-900 font-semibold hover:text-[#5e2cb6] transition-colors">+91 63543 26412</a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center border-2 flex-shrink-0" style={{ backgroundColor: '#c91a6f' + '15', borderColor: '#c91a6f' }}>
                <Mail className="w-6 h-6" style={{ color: '#c91a6f' }} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <a href="mailto:sales@truvixoo.com" className="text-gray-900 font-semibold hover:text-[#c91a6f] transition-colors">sales@truvixoo.com</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 outline-none text-sm"
                    placeholder="Name *"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 outline-none text-sm"
                    placeholder="Email *"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 outline-none text-sm"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 outline-none text-sm"
                    placeholder="Company"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 outline-none resize-none text-sm"
                  placeholder="Message *"
                />
              </div>

              {submitMessage && (
                <div className={`p-3 rounded-lg text-sm ${isSuccess ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5e2cb6] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#4a1f8f] transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-[#5e2cb6]/20 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" strokeWidth={2} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

