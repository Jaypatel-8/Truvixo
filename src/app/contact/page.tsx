import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact TruVixo - Get in Touch',
  description: 'Ready to start your project? Contact TruVixo today for a free consultation and let\'s discuss how we can help transform your business.',
}

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'hello@truvixo.com',
      description: 'Send us a message anytime'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule an in-person meeting'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      details: 'Within 24 hours',
      description: 'We\'ll get back to you quickly'
    }
  ]

  const services = [
    'Lead Generation',
    'Brand Strategy',
    'Creative Design',
    'Digital Innovation',
    'White Label Solutions'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Get in <span className="text-truvixo-blue">Touch</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
              Ready to start your project? Let's discuss how we can help transform your business and achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-truvixo-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-truvixo-blue">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-truvixo-blue font-semibold mb-2">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truvixo-blue focus:border-transparent transition-all duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truvixo-blue focus:border-transparent transition-all duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truvixo-blue focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truvixo-blue focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truvixo-blue focus:border-transparent transition-all duration-300"
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
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-truvixo-blue focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-truvixo-blue text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Let's Start a Conversation</h3>
                
                <div className="space-y-6 mb-8">
                  <p className="text-gray-600 leading-relaxed">
                    We're excited to hear about your project and discuss how we can help bring your vision to life. 
                    Whether you have a specific brief or just want to explore possibilities, we're here to help.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Our team typically responds within 24 hours, and we're happy to schedule a call to dive deeper 
                    into your requirements and answer any questions you might have.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What to expect:</h4>
                  <div className="space-y-3">
                    {[
                      'Free initial consultation',
                      'Detailed project proposal',
                      'Transparent pricing',
                      'Regular progress updates',
                      'Ongoing support'
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 animate-fade-in-up"
                        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about working with TruVixo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary depending on scope and complexity. A simple brand refresh might take 4-6 weeks, while a comprehensive digital transformation could take 3-6 months. We\'ll provide a detailed timeline during our initial consultation.'
              },
              {
                question: 'What is your pricing structure?',
                answer: 'We offer transparent, project-based pricing tailored to your specific needs. We\'ll provide a detailed proposal after understanding your requirements, with no hidden fees or surprises.'
              },
              {
                question: 'Do you work with startups and small businesses?',
                answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We believe every business deserves access to high-quality creative and strategic services.'
              },
              {
                question: 'Can you help with ongoing support after project completion?',
                answer: 'Yes! We offer ongoing support and maintenance packages to ensure your project continues to perform optimally. We\'re here for the long term, not just the initial project.'
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-8 animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-truvixo-blue to-truvixo-purple text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Don't wait to transform your business. Contact us today and let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-truvixo-blue font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-truvixo-blue transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
