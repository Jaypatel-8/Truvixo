'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-truvixo-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Contact Info - Ajeeb Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-12">
            make contact:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div className="text-center">
              <div className="text-2xl font-light text-truvixo-black mb-4">
                W
              </div>
              <Link href="mailto:hello@truvixo.com" className="text-truvixo-black/70 hover:text-truvixo-purple transition-colors duration-300 font-light">
                hello@truvixo.com
              </Link>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-light text-truvixo-black mb-4">
                P
              </div>
              <span className="text-truvixo-black/70 font-light">
                +1 (555) 123-4567
              </span>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-light text-truvixo-black mb-4">
                A
              </div>
              <span className="text-truvixo-black/70 font-light">
                San Francisco, CA
              </span>
            </div>
          </div>
        </motion.div>

        {/* Social Links - Ajeeb Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center space-x-8">
            <Link
              href="#"
              className="text-truvixo-black/70 hover:text-truvixo-purple transition-colors duration-300 font-light"
            >
              <span className="text-xl">I</span>
              <span className="ml-2 text-sm">instagram</span>
            </Link>
            
            <Link
              href="#"
              className="text-truvixo-black/70 hover:text-truvixo-purple transition-colors duration-300 font-light"
            >
              <span className="text-xl">L</span>
              <span className="ml-2 text-sm">linkedin</span>
            </Link>
          </div>
        </motion.div>

        {/* Bottom Section - Ajeeb Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-200 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-truvixo-black/60 text-sm font-light">
              © {currentYear} TruVixo. All rights reserved.
            </div>
            
            <div className="flex space-x-8 text-sm font-light">
              <Link href="/privacy" className="text-truvixo-black/60 hover:text-truvixo-purple transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-truvixo-black/60 hover:text-truvixo-purple transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
