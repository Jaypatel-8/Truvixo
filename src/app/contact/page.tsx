'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle, Star, Users, Target, Zap, BarChart3, Globe, Building2, Linkedin, Mail, MessageSquare, Palette, Sparkles, Rocket, TrendingUp, Award, MousePointer, ChevronLeft, ChevronRight, Phone, MapPin, Clock, Send, Calendar, Loader2, X } from 'lucide-react'
import Link from 'next/link'
import { sendContactEmail, type ContactFormData } from '@/lib/emailService'

export default function Contact() {
  const [activeSection, setActiveSection] = useState('contact')
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  // Scroll animation hook
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          const sectionId = entry.target.getAttribute('data-section')
          if (sectionId) {
            setActiveSection(sectionId)
          }
        }
      })
    }, observerOptions)

    // Observe all scroll animation elements
    const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-rotate')
    scrollElements.forEach((el) => observer.observe(el))

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

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
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
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
    }
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
      details: 'Ahmedabad, Gujarat, India',
      color: '#fecc4d'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      color: '#10b981'
    }
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
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
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on scope and complexity. Most projects range from 4-12 weeks, with larger transformations taking 3-6 months."
              },
              {
                question: "Do you work with startups?",
                answer: "Absolutely! We love working with startups and offer special packages designed for early-stage companies looking to scale quickly."
              },
              {
                question: "What's your pricing structure?",
                answer: "We offer flexible pricing based on project scope and requirements. Contact us for a customized quote that fits your budget."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! We offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Of course! We work collaboratively with your internal teams and can integrate seamlessly into your existing workflows."
              },
              {
                question: "What makes TruVixo different?",
                answer: "We combine human creativity with AI intelligence, offering end-to-end solutions from branding to funding. We're not just service providers - we're your growth partners."
              }
            ].map((faq, index) => (
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Book a Call</h3>
              <button
                onClick={() => setIsCalendarOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-[#5e2cb6] focus:border-transparent"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Time
              </label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time, index) => (
                  <button
                    key={index}
                    className="px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-900 hover:bg-[#5e2cb6]/10 hover:border-[#5e2cb6] transition-colors duration-200"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setIsCalendarOpen(false)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button className="flex-1 bg-[#5e2cb6] text-white px-4 py-3 rounded-xl hover:bg-[#4a1f8f] hover:shadow-lg transition-all duration-300">
                Confirm Booking
              </button>
            </div>
          </div>
    </div>
      )}

    </main>
  )
}
