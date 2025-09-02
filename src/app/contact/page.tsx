'use client'

import { useState, useEffect } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Calendar,
  User,
  Building,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Zap,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const ContactPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  // Set page title and meta description
  useEffect(() => {
    document.title = 'Contact TruVixo - Get in Touch'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ready to start your project? Contact TruVixo today for a free consultation and let\'s discuss how we can help transform your business.')
    }
  }, [])

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Us',
      details: 'hello@truvixo.com',
      description: 'Send us a message anytime',
      color: 'truvixo-blue'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm',
      color: 'truvixo-purple'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule an in-person meeting',
      color: 'truvixo-red'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Response Time',
      details: 'Within 24 hours',
      description: 'We\'ll get back to you quickly',
      color: 'truvixo-yellow'
    }
  ]

  const services = [
    'Lead Generation',
    'Brand Strategy',
    'Creative Design',
    'Digital Innovation',
    'White Label Solutions'
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())
    
    const days = []
    const today = new Date()
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)
      
      const isCurrentMonth = date.getMonth() === month
      const isToday = date.toDateString() === today.toDateString()
      const isPast = date < today
      
      days.push({
        date,
        isCurrentMonth,
        isToday,
        isPast
      })
    }
    
    return days
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', { ...formData, selectedDate, selectedTime })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-white/50">
              <Sparkles className="w-5 h-5 text-truvixo-blue animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">Let's Connect</span>
            </div>
                        <h1 className="text-display-2xl font-display text-gray-900 mb-6 leading-tight">
              Ready to{' '}
              <span className="animate-text-shimmer bg-gradient-to-r from-truvixo-blue via-truvixo-purple to-truvixo-red bg-clip-text text-transparent">
                Transform?
              </span>
            </h1>
                        <p className="text-body-lg font-primary text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Schedule a meeting with our team and let's discuss how we can help bring your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="group card-modern p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${info.color}/10 to-${info.color}/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <div className={`text-${info.color}`}>
                    {info.icon}
          </div>
                </div>
                <h3 className="text-display-md font-display text-gray-900 mb-2 group-hover:text-truvixo-blue transition-colors duration-300">{info.title}</h3>
                <p className={`text-${info.color} font-primary font-semibold mb-2`}>{info.details}</p>
                <p className="text-body-sm font-primary text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50/50 via-blue-50/30 to-indigo-50/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
      {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="card-modern p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-truvixo-blue to-truvixo-purple rounded-2xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-display-lg font-display text-gray-900">Send us a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                        id="name"
                        name="name"
                      required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 input-modern focus:ring-2 focus:ring-truvixo-blue focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 input-modern focus:ring-2 focus:ring-truvixo-blue focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                    </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 input-modern focus:ring-2 focus:ring-truvixo-blue focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                    </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 input-modern focus:ring-2 focus:ring-truvixo-blue focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.toLowerCase().replace(' ', '-')}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                      rows={4}
                    required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 input-modern focus:ring-2 focus:ring-truvixo-blue focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project and goals..."
                  />
                </div>

                <button
                  type="submit"
                    className="w-full btn-modern bg-gradient-to-r from-truvixo-blue to-truvixo-purple text-white font-display font-bold py-4 px-8 rounded-2xl hover:shadow-xl hover:from-truvixo-purple hover:to-truvixo-red transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group"
                >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
              </div>
            </div>

            {/* Calendar Section */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="card-modern p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-truvixo-purple to-truvixo-red rounded-2xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-display-lg font-display text-gray-900">Schedule a Meeting</h2>
                </div>

                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-300"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <h3 className="text-display-md font-display text-gray-900">
                    {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h3>
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-300"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center text-sm font-semibold text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                  {generateCalendarDays().map((day, index) => (
                    <button
                      key={index}
                      onClick={() => !day.isPast && setSelectedDate(day.date)}
                      disabled={day.isPast}
                      className={`
                        p-2 text-sm rounded-xl transition-all duration-300
                        ${!day.isCurrentMonth ? 'text-gray-300' : ''}
                        ${day.isPast ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-truvixo-blue/10 cursor-pointer'}
                        ${day.isToday ? 'bg-truvixo-blue/20 text-truvixo-blue font-bold' : ''}
                        ${selectedDate?.toDateString() === day.date.toDateString() ? 'bg-truvixo-blue text-white font-bold' : ''}
                      `}
                    >
                      {day.date.getDate()}
                    </button>
                  ))}
          </div>

                {/* Time Slots */}
                {selectedDate && (
                <div className="space-y-4">
                    <h4 className="text-display-md font-display text-gray-900">Available Times</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`
                            p-3 text-sm font-medium rounded-xl transition-all duration-300
                            ${selectedTime === time 
                              ? 'bg-truvixo-blue text-white' 
                              : 'bg-gray-100 text-gray-700 hover:bg-truvixo-blue/10 hover:text-truvixo-blue'
                            }
                          `}
                        >
                          {time}
                        </button>
                    ))}
                  </div>
                </div>
                )}

                {/* Schedule Button */}
                {selectedDate && selectedTime && (
                  <button className="w-full mt-6 btn-modern bg-gradient-to-r from-truvixo-purple to-truvixo-red text-white font-display font-bold py-4 px-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group">
                    <Calendar className="w-5 h-5" />
                    Schedule Meeting
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-display-lg font-display text-gray-900 mb-4">Why Choose TruVixo?</h2>
            <p className="text-body-lg font-primary text-gray-600">Join 500+ satisfied clients who trust us with their projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-8 h-8" />, title: 'Fast Response', desc: 'We respond within 24 hours' },
              { icon: <Star className="w-8 h-8" />, title: '98% Satisfaction', desc: 'Client satisfaction rate' },
              { icon: <CheckCircle className="w-8 h-8" />, title: 'Quality Guaranteed', desc: 'Premium results every time' }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-truvixo-blue/10 to-truvixo-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-truvixo-blue">{item.icon}</div>
                </div>
                <h3 className="text-display-md font-display text-gray-900 mb-2">{item.title}</h3>
                <p className="text-body-md font-primary text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
