'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ArrowRight, Target, BarChart3, Palette, Globe, Building2, Users, Award, MessageSquare } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Lead Generation', href: '/services#lead-generation', icon: <Target className="w-4 h-4" />, description: 'Boost Your Sales Quota' },
        { name: 'Brand Strategy', href: '/services#brand-strategy', icon: <BarChart3 className="w-4 h-4" />, description: 'Find Your True North' },
        { name: 'Creative Design', href: '/services#creative-design', icon: <Palette className="w-4 h-4" />, description: 'Visual Excellence' },
        { name: 'Digital Innovation', href: '/services#digital-innovation', icon: <Globe className="w-4 h-4" />, description: 'Transform Raw Emotion' },
        { name: 'White Label', href: '/services#white-label', icon: <Building2 className="w-4 h-4" />, description: 'Do Digital Marketing Under Your Own Brand' }
      ]
    },
    { name: 'Our Work', href: '/our-work' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fade-in ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 animate-slide-up">
            <Link href="/" className="flex items-center group">
              <div className="text-2xl font-bold text-truvixo-blue group-hover:scale-110 transition-transform duration-300">
                TruVixo
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="text-gray-700 hover:text-truvixo-blue font-medium transition-colors duration-300 cursor-pointer flex items-center gap-1"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-truvixo-blue transition-all duration-300 group-hover:w-full"></span>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-truvixo-blue font-medium transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-truvixo-blue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 z-50 animate-fade-in-up"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="px-4 pb-2">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Our Services</h3>
                    </div>
                    {item.dropdown.map((dropdownItem, index) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-truvixo-blue to-truvixo-purple rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          {dropdownItem.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 group-hover:text-truvixo-blue transition-colors duration-300">
                            {dropdownItem.name}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {dropdownItem.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-truvixo-blue group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    ))}
                    <div className="px-4 pt-3 border-t border-gray-100">
                      <Link
                        href="/services"
                        className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-truvixo-blue to-truvixo-purple text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        View All Services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button className="bg-gradient-to-r from-truvixo-blue to-truvixo-purple text-white font-semibold py-2 px-5 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 btn-animated text-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-truvixo-blue hover:bg-gray-100 transition-all duration-300 animate-slide-up"
            onClick={() => setIsOpen(!isOpen)}
            style={{ animationDelay: '0.3s' }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-fade-in-up">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.dropdown ? (
                  <div>
                    <div className="text-gray-700 font-medium py-2 flex items-center gap-2">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className="ml-4 space-y-2">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block text-gray-600 hover:text-truvixo-blue font-medium py-1 transition-colors duration-300 flex items-center gap-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.icon}
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-truvixo-blue font-medium py-2 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div
              className="pt-4 border-t border-gray-200 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <button
                className="w-full bg-gradient-to-r from-truvixo-blue to-truvixo-purple text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 btn-animated"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
