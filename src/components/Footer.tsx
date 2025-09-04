'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Work', href: '/our-work' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    services: [
      { name: 'Lead Generation', href: '/services#lead-generation' },
      { name: 'Brand Strategy', href: '/services#brand-strategy' },
      { name: 'Creative Design', href: '/services#creative-design' },
      { name: 'Digital Innovation', href: '/services#digital-innovation' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Guides', href: '/guides' },
      { name: 'FAQ', href: '/faq' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  }

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Twitter', href: '#', icon: <Twitter className="w-5 h-5" /> },
    { name: 'Facebook', href: '#', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Instagram', href: '#', icon: <Instagram className="w-5 h-5" /> },
    { name: 'YouTube', href: '#', icon: <Youtube className="w-5 h-5" /> }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-truvixo-blue/10 to-truvixo-purple/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-truvixo-purple/10 to-truvixo-red/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-truvixo-red/10 to-truvixo-yellow/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-truvixo-yellow/10 to-truvixo-blue/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="mb-6">
              <div className="relative w-40 h-12 mb-6">
                <Image
                  src="/TruVixo.png"
                  alt="TruVixo Logo"
                  fill
                  className="object-contain filter brightness-0 invert"
                  quality={100}
                  sizes="(max-width: 768px) 160px, 160px"
                  onLoad={() => console.log('Footer logo loaded successfully')}
                  onError={() => console.error('Footer logo failed to load')}
                />
              </div>
              <p className="text-gray-300 max-w-md text-body-md font-primary leading-relaxed">
                We're a team of specialists delivering award-winning work for brands worldwide. 
                Transform your business with our innovative solutions.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 bg-gradient-to-br from-truvixo-blue/20 to-truvixo-purple/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-4 h-4 text-truvixo-blue" />
                </div>
                <span className="text-body-sm font-primary">hello@truvixo.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 bg-gradient-to-br from-truvixo-purple/20 to-truvixo-red/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 text-truvixo-purple" />
                </div>
                <span className="text-body-sm font-primary">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 bg-gradient-to-br from-truvixo-red/20 to-truvixo-yellow/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-4 h-4 text-truvixo-red" />
                </div>
                <span className="text-body-sm font-primary">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-display-md font-display text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-body-sm font-primary text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-display-md font-display text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-body-sm font-primary text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-display-md font-display text-white mb-6">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-body-sm font-primary text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800/50 pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-body-sm font-primary text-gray-400">
              © {currentYear} TruVixo. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-body-sm">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="font-primary text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <div
                  key={social.name}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <Link
                    href={social.href}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <div className="group-hover:animate-bounce">
                      {social.icon}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
