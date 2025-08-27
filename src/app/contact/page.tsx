import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact TruVixo - Get In Touch & Schedule a Call',
  description: 'Contact TruVixo today to discuss your digital marketing, branding, or software development needs. Schedule a free consultation call with our experts.',
}

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-truvixo-black mb-8 leading-none">
            Get in <span className="text-truvixo-purple">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-truvixo-black/70 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your brand? Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-truvixo-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-truvixo-purple rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-truvixo-black mb-4">Email Us</h3>
              <p className="text-truvixo-black/70">hello@truvixo.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-truvixo-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-truvixo-pink rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-truvixo-black mb-4">Call Us</h3>
              <p className="text-truvixo-black/70">+1 (555) 123-4567</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-truvixo-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-truvixo-yellow rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-truvixo-black mb-4">Visit Us</h3>
              <p className="text-truvixo-black/70">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-truvixo-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to create something <span className="text-truvixo-purple">extraordinary</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's transform your brand's potential into powerful realities.
          </p>
          <button className="bg-truvixo-purple text-white text-lg px-8 py-4 rounded-none font-medium hover:bg-truvixo-purple-dark transition-colors duration-300 border-2 border-truvixo-purple hover:border-truvixo-purple-dark">
            Book a Call
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
