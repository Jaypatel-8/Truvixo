'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Star, Users, Target, Zap, BarChart3, Globe, Building2, Linkedin, Mail, MessageSquare, Palette, Sparkles, Rocket, TrendingUp, Award, MousePointer, ChevronLeft, ChevronRight, Phone, MapPin, Clock, Send, Calendar, Loader2, X } from 'lucide-react'
import Link from 'next/link'
import { sendContactEmail, sendScheduleDemoEmail, type ContactFormData, type ScheduleDemoData } from '@/lib/emailService'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'
import { contactIndustries, contactServices, contactTimeSlots, contactFAQs } from '@/lib/staticData/contact'

export default function Contact() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    industry: '',
    service: ''
  })
  const [calendarData, setCalendarData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    service: '',
    selectedDate: '',
    selectedTime: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [bookingMessage, setBookingMessage] = useState('')
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [bookingErrors, setBookingErrors] = useState<Record<string, string>>({})

  // Use custom hook for IntersectionObserver-based scroll animations
  useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    selectors: ['.scroll-animate', '.scroll-animate-left', '.scroll-animate-right', '.scroll-animate-scale', '.scroll-animate-rotate'],
    unobserveAfterIntersect: false,
    useIdleCallback: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleCalendarInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setCalendarData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (bookingErrors[name]) {
      setBookingErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validatePhone = (phone: string): boolean => {
    // Allow various phone formats: +1234567890, (123) 456-7890, 123-456-7890, etc.
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const industries = contactIndustries
  const services = contactServices
  const timeSlots = contactTimeSlots

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setFormErrors({})

    // Client-side validation
    const errors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required'
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.industry) {
      errors.industry = 'Please select an industry'
    }
    
    if (!formData.service) {
      errors.service = 'Please select a service'
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long'
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setIsSubmitting(false)
      setSubmitMessage('Please fix the errors below and try again.')
      return
    }

    try {
      const emailData: ContactFormData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        message: formData.message.trim(),
        industry: formData.industry,
        service: formData.service,
        subject: 'New Contact Form Submission from TruVixo Website'
      }

      const result = await sendContactEmail(emailData)
      
      setIsSubmitting(false)
      setSubmitMessage(result.message)
      
      if (result.success) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          industry: '',
          service: ''
        })
        setFormErrors({})
      }
    } catch (error: any) {
      setIsSubmitting(false)
      setSubmitMessage(error?.message || 'An unexpected error occurred. Please try again or contact us directly at sales@truvixoo.com')
    }
  }

  const handleTimeSlotClick = (time: string) => {
    setCalendarData(prev => ({
      ...prev,
      selectedTime: prev.selectedTime === time ? '' : time
    }))
    if (bookingErrors.selectedTime) {
      setBookingErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors.selectedTime
        return newErrors
      })
    }
  }

  const handleCalendarSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsBookingSubmitting(true)
    setBookingMessage('')
    setBookingErrors({})

    // Client-side validation
    const errors: Record<string, string> = {}
    
    if (!calendarData.name.trim()) {
      errors.name = 'Name is required'
    }
    
    if (!calendarData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!validateEmail(calendarData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    
    if (!calendarData.phone.trim()) {
      errors.phone = 'Phone number is required'
    } else if (!validatePhone(calendarData.phone)) {
      errors.phone = 'Please enter a valid phone number'
    }
    
    if (!calendarData.selectedDate) {
      errors.selectedDate = 'Please select a date'
    } else {
      const selectedDate = new Date(calendarData.selectedDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        errors.selectedDate = 'Please select a future date'
      }
    }
    
    if (!calendarData.selectedTime) {
      errors.selectedTime = 'Please select a time slot'
    }

    if (Object.keys(errors).length > 0) {
      setBookingErrors(errors)
      setIsBookingSubmitting(false)
      setBookingMessage('Please fix the errors below and try again.')
      return
    }

    try {
      const bookingData: ScheduleDemoData = {
        name: calendarData.name.trim(),
        email: calendarData.email.trim(),
        phone: calendarData.phone.trim(),
        company: calendarData.company.trim(),
        industry: calendarData.industry,
        service: calendarData.service,
        selectedDate: calendarData.selectedDate,
        selectedTime: calendarData.selectedTime,
        subject: 'New Demo Scheduling Request from TruVixo Website'
      }

      const result = await sendScheduleDemoEmail(bookingData)
      
      setIsBookingSubmitting(false)
      setBookingMessage(result.message)
      
      if (result.success) {
        // Reset calendar form on success
        setCalendarData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          service: '',
          selectedDate: '',
          selectedTime: ''
        })
        setBookingErrors({})
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsCalendarOpen(false)
          setBookingMessage('')
        }, 2000)
      }
    } catch (error: any) {
      setIsBookingSubmitting(false)
      setBookingMessage(error?.message || 'An unexpected error occurred. Please try again or contact us directly at sales@truvixoo.com')
    }
  }

  const handleCalendarClose = () => {
    setIsCalendarOpen(false)
    setBookingMessage('')
    setBookingErrors({})
    // Optionally reset calendar data when closing
    // setCalendarData({ name: '', email: '', phone: '', company: '', industry: '', service: '', selectedDate: '', selectedTime: '' })
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+91 63543 26412, +91 79906 31490',
      color: '#5e2cb6'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'sales@truvixoo.com',
      color: '#c91a6f'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: 'Global Services',
      color: '#d97706'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      color: '#059669'
    }
  ]


  return (
    <main className="min-h-screen bg-white overflow-hidden">

      {/* Hero Section - Matching Homepage Style */}
      <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden pt-20">
        {/* Minimal Grid Background - Matching Homepage */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-900"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-contact)" />
          </svg>
        </div>

        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-16">
          <div className="scroll-animate">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-6 leading-[0.9] tracking-tight">
              <span className="block mb-2">
                Let's{' '}
                <span className="hollow-text-brand">
                  Connect
                </span>
              </span>
              <span className="block text-gray-700 font-light text-4xl md:text-5xl lg:text-6xl mt-4">
                and Build Together
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-8 px-4">
              We'd love to hear about your ideas, challenges, or upcoming projects. Get in touch and let's transform your vision into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Form */}
            <div className="scroll-animate-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
                Send us a{' '}
                <span className="hollow-text-brand">
                  Message
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              {submitMessage && (
                <div className={`mb-6 p-4 border rounded-xl flex items-start gap-3 ${
                  submitMessage.includes('Thank you') || submitMessage.includes('success')
                    ? 'bg-green-50 border-green-200 text-green-800'
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}>
                  {submitMessage.includes('Thank you') || submitMessage.includes('success') ? (
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  )}
                  <p className="flex-1">{submitMessage}</p>
                  <button
                    onClick={() => setSubmitMessage('')}
                    className="text-current opacity-70 hover:opacity-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 ${
                        formErrors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 ${
                        formErrors.industry ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                    {formErrors.industry && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.industry}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 ${
                        formErrors.service ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {formErrors.service && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.service}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 resize-none ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#5e2cb6] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#4a1f8f] hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send a Message
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsCalendarOpen(true)}
                    className="flex-1 border-2 border-[#5e2cb6] text-[#5e2cb6] font-semibold py-4 px-8 rounded-xl hover:bg-[#5e2cb6]/5 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule a Consultation
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info & Calendar */}
            <div className="scroll-animate-right">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
                Get in{' '}
                <span className="hollow-text-brand">
                  Touch
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help you succeed. Reach out to us through any of these channels.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ 
                        backgroundColor: info.color + '10',
                        color: info.color
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </div>
                  ))}
          </div>

              {/* Book a Call Button */}
              <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Prefer to talk?
                </h3>
                <p className="text-gray-600 mb-6">
                  Schedule a free consultation call with our team.
                </p>
                        <button
                  onClick={() => setIsCalendarOpen(true)}
                  className="bg-[#5e2cb6] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#4a1f8f] hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto shadow-lg"
                >
                    <Calendar className="w-5 h-5" />
                  Book a Call
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Frequently Asked{' '}
              <span className="hollow-text-brand">
                Questions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions? We've got answers. Here are some common questions we receive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 scroll-animate-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Modal */}
      {isCalendarOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 border border-gray-200 my-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Book a Call</h3>
              <button
                onClick={handleCalendarClose}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {bookingMessage && (
              <div className={`mb-6 p-4 border rounded-xl flex items-start gap-3 ${
                bookingMessage.includes('Thank you') || bookingMessage.includes('success')
                  ? 'bg-green-50 border-green-200 text-green-800'
                  : 'bg-red-50 border-red-200 text-red-800'
              }`}>
                {bookingMessage.includes('Thank you') || bookingMessage.includes('success') ? (
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                ) : (
                  <X className="w-5 h-5 mt-0.5 flex-shrink-0" />
                )}
                <p className="flex-1">{bookingMessage}</p>
                <button
                  onClick={() => setBookingMessage('')}
                  className="text-current opacity-70 hover:opacity-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            <form onSubmit={handleCalendarSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="calendar-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="calendar-name"
                    name="name"
                    value={calendarData.name}
                    onChange={handleCalendarInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 ${
                      bookingErrors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your full name"
                  />
                  {bookingErrors.name && (
                    <p className="mt-1 text-sm text-red-600">{bookingErrors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="calendar-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="calendar-email"
                    name="email"
                    value={calendarData.email}
                    onChange={handleCalendarInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 ${
                      bookingErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {bookingErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{bookingErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="calendar-phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="calendar-phone"
                    name="phone"
                    value={calendarData.phone}
                    onChange={handleCalendarInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 ${
                      bookingErrors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {bookingErrors.phone && (
                    <p className="mt-1 text-sm text-red-600">{bookingErrors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="calendar-company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="calendar-company"
                    name="company"
                    value={calendarData.company}
                    onChange={handleCalendarInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="calendar-industry" className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    id="calendar-industry"
                    name="industry"
                    value={calendarData.industry}
                    onChange={handleCalendarInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="calendar-service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="calendar-service"
                    name="service"
                    value={calendarData.service}
                    onChange={handleCalendarInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>
            
              <div>
                <label htmlFor="calendar-date" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date *
                </label>
                <input
                  type="date"
                  id="calendar-date"
                  name="selectedDate"
                  value={calendarData.selectedDate}
                  onChange={handleCalendarInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 border rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 ${
                    bookingErrors.selectedDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {bookingErrors.selectedDate && (
                  <p className="mt-1 text-sm text-red-600">{bookingErrors.selectedDate}</p>
                )}
              </div>
            
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Time *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleTimeSlotClick(time)}
                      className={`px-3 py-2 text-sm border rounded-lg transition-colors duration-200 ${
                        calendarData.selectedTime === time
                          ? 'bg-[#5e2cb6] text-white border-[#5e2cb6]'
                          : 'border-gray-300 bg-white text-gray-900 hover:bg-[#5e2cb6]/10 hover:border-[#5e2cb6]'
                      } ${bookingErrors.selectedTime ? 'border-red-500' : ''}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {bookingErrors.selectedTime && (
                  <p className="mt-1 text-sm text-red-600">{bookingErrors.selectedTime}</p>
                )}
              </div>
            
              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleCalendarClose}
                  disabled={isBookingSubmitting}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isBookingSubmitting}
                  className="flex-1 bg-[#5e2cb6] text-white px-4 py-3 rounded-xl hover:bg-[#4a1f8f] hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isBookingSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Confirm Booking
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </main>
  )
}


