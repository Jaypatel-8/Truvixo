'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import gsap from 'gsap'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (navRef.current) {
      const navItems = navRef.current.querySelectorAll('a')
      
      navItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          })
        })
        
        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      })
    }
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/our-work' },
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
              <div className="relative w-32 h-10 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/TruVixo.png"
                  alt="TruVixo Logo"
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 120px, 128px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  onLoad={() => console.log('Logo loaded successfully')}
                  onError={() => console.error('Logo failed to load')}
                />
                {/* Fallback text logo */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-2xl font-bold text-truvixo-blue">TruVixo</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation with GSAP */}
          <nav ref={navRef} className="hidden lg:flex items-center space-x-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-truvixo-blue font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-truvixo-blue transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button className="bg-truvixo-blue text-white font-semibold py-2 px-5 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm">
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
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-truvixo-blue font-medium py-2 transition-colors duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div
              className="pt-4 border-t border-gray-200 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <button
                className="w-full bg-truvixo-blue text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
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
