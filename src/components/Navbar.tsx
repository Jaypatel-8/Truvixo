'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react'
import Logo from './Logo'
import { getMenuIcon } from '@/lib/menuIcons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [servicesHoveredCategory, setServicesHoveredCategory] = useState<string | null>(null)
  const [aiOpen, setAiOpen] = useState(false)
  const [hireOpen, setHireOpen] = useState(false)
  const [industryOpen, setIndustryOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  
  // Track last click time for double-click detection
  const [lastClickTime, setLastClickTime] = useState<{ [key: string]: number }>({})
  
  // Mobile dropdown states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileAiOpen, setMobileAiOpen] = useState(false)
  const [mobileHireOpen, setMobileHireOpen] = useState(false)
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close all menus function
  const closeAllMenus = () => {
    setServicesOpen(false)
    setServicesHoveredCategory(null)
    setAiOpen(false)
    setHireOpen(false)
    setIndustryOpen(false)
    setCompanyOpen(false)
    setIsOpen(false)
    setMobileServicesOpen(false)
    setMobileAiOpen(false)
    setMobileHireOpen(false)
    setMobileIndustryOpen(false)
    setMobileCompanyOpen(false)
  }

  // Handle dropdown toggle with double-click detection
  const handleDropdownToggle = (menu: 'services' | 'ai' | 'hire' | 'industry' | 'company') => {
    const now = Date.now()
    const lastClick = lastClickTime[menu] || 0
    const timeDiff = now - lastClick

    // Double-click detection (within 300ms)
    if (timeDiff < 300) {
      // Close the menu
      closeAllMenus()
      setLastClickTime({})
      return
    }

    // Close all other menus
    setServicesOpen(menu === 'services')
    setAiOpen(menu === 'ai')
    setHireOpen(menu === 'hire')
    setIndustryOpen(menu === 'industry')
    setCompanyOpen(menu === 'company')
    
    // Update last click time
    setLastClickTime({ ...lastClickTime, [menu]: now })
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.dropdown-menu') && !target.closest('.dropdown-trigger')) {
        setServicesOpen(false)
        setServicesHoveredCategory(null) // Reset expanded category
        setAiOpen(false)
        setHireOpen(false)
        setIndustryOpen(false)
        setCompanyOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // SERVICES - Organized by categories (no duplicates)
  const servicesCategories = [
    {
      category: 'Software Development',
      items: [
        { name: 'Custom Software Development', href: '/services/custom-software-development' },
        { name: 'Web Application Development', href: '/services/web-application-development' },
        { name: 'Mobile App Development', href: '/services/mobile-app-development' },
        { name: 'Enterprise Software Development', href: '/services/enterprise-software-development' },
        { name: 'API Development & Integration', href: '/services/api-development-integration' },
        { name: 'CMS Development', href: '/services/cms-development' }
      ]
    },
    {
      category: 'E-commerce & SaaS',
      items: [
        { name: 'E-commerce Development', href: '/services/ecommerce-development' },
        { name: 'SaaS Product Development', href: '/services/saas-product-development' }
      ]
    },
    {
      category: 'AI & Machine Learning',
      items: [
        { name: 'AI Development Services', href: '/services/ai-development-services' },
        { name: 'Machine Learning Model Development', href: '/services/machine-learning-model-development' }
      ]
    },
    {
      category: 'Modernization & Support',
      items: [
        { name: 'Legacy App Modernization', href: '/services/legacy-app-modernization' },
        { name: 'Maintenance & Support', href: '/services/maintenance-support' }
      ]
    },
    {
      category: 'Digital Marketing',
      items: [
        { name: 'SEO', href: '/services/seo' },
        { name: 'PPC', href: '/services/ppc' },
        { name: 'SMM', href: '/services/smm' },
        { name: 'Performance Marketing', href: '/services/performance-marketing' },
        { name: 'Email Marketing', href: '/services/email-marketing' },
        { name: 'CRO', href: '/services/cro' }
      ]
    }
  ]

  const aiItems = [
    { name: 'AI Development Services', href: '/services/ai-development-services' },
    { name: 'Machine Learning Model Development', href: '/services/machine-learning-model-development' },
    { name: 'AI Solutions', href: '/ai' }
  ]

  const hireItems = [
    { name: 'Hire AI/ML Engineers', href: '/hire/ai-ml-engineers' },
    { name: 'Hire Full-Stack Developers', href: '/hire/full-stack-developers' },
    { name: 'Hire Backend Developers', href: '/hire/backend-developers' },
    { name: 'Hire Frontend Developers', href: '/hire/frontend-developers' },
    { name: 'Hire Mobile Developers', href: '/hire/mobile-developers' },
    { name: 'Hire DevOps Engineers', href: '/hire/devops-engineers' },
    { name: 'Hire QA Engineers', href: '/hire/qa-engineers' },
    { name: 'Hire UI/UX Designers', href: '/hire/ui-ux-designers' },
    { name: 'Hire Project Managers', href: '/hire/project-managers' },
    { name: 'Hire Dedicated Teams', href: '/hire/dedicated-teams' }
  ]

  const industryItems = [
    { name: 'Fintech', href: '/industry/fintech' },
    { name: 'Healthcare', href: '/industry/healthcare' },
    { name: 'Retail & eCommerce', href: '/industry/retail-ecommerce' },
    { name: 'Education & eLearning', href: '/industry/education' },
    { name: 'Logistics & Transportation', href: '/industry/logistics' },
    { name: 'Real Estate', href: '/industry/real-estate' },
    { name: 'Manufacturing', href: '/industry/manufacturing' }
  ]

  const companyItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Approach', href: '/our-approach' },
    { name: 'Insights / Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact / Request Quote', href: '/contact' }
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white shadow-sm border-b border-gray-100'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Services Mega Menu */}
              <div className="relative dropdown-menu">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    handleDropdownToggle('services')
                  }}
                  className="dropdown-trigger text-gray-900 hover:text-black font-semibold transition-colors duration-300 flex items-center gap-1 text-sm tracking-wide uppercase"
                  aria-label="Services menu"
                  aria-expanded={servicesOpen}
                >
                  SERVICES
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                
                {servicesOpen && (
                  <div 
                    className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50 overflow-hidden transition-all duration-300 ${
                      servicesHoveredCategory ? 'w-[900px]' : 'w-[300px]'
                    }`}
                    onMouseLeave={() => setServicesHoveredCategory(null)}
                    style={{ maxHeight: '600px' }}
                  >
                    <div className="flex h-full">
                      {/* Left Column - Categories (Fixed width) */}
                      <div className="w-64 border-r border-gray-200 px-4 py-2 overflow-y-auto" style={{ maxHeight: '600px' }}>
                        {servicesCategories.map((category, catIndex) => {
                          const isHovered = servicesHoveredCategory === category.category
                          return (
                            <div
                              key={catIndex}
                              onMouseEnter={() => setServicesHoveredCategory(category.category)}
                              className={`px-4 py-3 rounded-lg transition-all duration-200 mb-1 ${
                                isHovered 
                                  ? 'bg-[#5e2cb6]/10 text-[#5e2cb6] font-semibold' 
                                  : 'text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">{category.category}</span>
                                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`} />
                              </div>
                            </div>
                          )
                        })}
                      </div>
                      
                      {/* Right Column - Items for Hovered Category (Only shown when category is hovered) */}
                      {servicesHoveredCategory && (
                        <div className="flex-1 px-6 py-2 overflow-y-auto transition-all duration-300 animate-in fade-in slide-in-from-right-4" style={{ maxHeight: '600px', minWidth: '400px' }}>
                          <div className="space-y-1">
                            <div className="mb-4 pb-3 border-b border-gray-200">
                              <div className="flex items-center gap-2 text-gray-900 text-sm uppercase tracking-wide font-bold">
                                <ChevronLeft className="w-3 h-3" />
                                <span>{servicesHoveredCategory}</span>
                              </div>
                            </div>
                            {servicesCategories
                              .find(cat => cat.category === servicesHoveredCategory)
                              ?.items.map((item, itemIndex) => {
                                const icon = getMenuIcon(item.name)
                                return (
                                  <Link
                                    key={itemIndex}
                                    href={item.href}
                                    prefetch={true}
                                    onClick={closeAllMenus}
                                    className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:bg-[#5e2cb6]/5 hover:text-[#5e2cb6] rounded-lg transition-all duration-200 cursor-pointer group"
                                  >
                                    {icon}
                                    <span className="flex-1 font-medium">{item.name}</span>
                                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#5e2cb6]" />
                                  </Link>
                                )
                              })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* AI Dropdown */}
              <div className="relative dropdown-menu">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    handleDropdownToggle('ai')
                  }}
                  className="dropdown-trigger text-gray-900 hover:text-black font-semibold transition-colors duration-300 flex items-center gap-1 text-sm tracking-wide uppercase"
                  aria-label="AI services menu"
                  aria-expanded={aiOpen}
                >
                  AI
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                
                {aiOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50">
                    {aiItems.map((item, index) => {
                      const icon = getMenuIcon(item.name)
                      return (
                        <Link
                          key={index}
                          href={item.href}
                          prefetch={true}
                          onClick={closeAllMenus}
                          className="flex items-center gap-2 px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-black transition-colors duration-200 border-b border-gray-100 last:border-0"
                        >
                          {icon}
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* HIRE Dropdown */}
              <div className="relative dropdown-menu">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    handleDropdownToggle('hire')
                  }}
                  className="dropdown-trigger text-gray-900 hover:text-black font-semibold transition-colors duration-300 flex items-center gap-1 text-sm tracking-wide uppercase"
                  aria-label="Hire developers menu"
                  aria-expanded={hireOpen}
                >
                  HIRE
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${hireOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                
                {hireOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50 max-h-[600px] overflow-y-auto">
                    {hireItems.map((item, index) => {
                      const icon = getMenuIcon(item.name)
                      return (
                        <Link
                          key={index}
                          href={item.href}
                          prefetch={true}
                          onClick={closeAllMenus}
                          className="flex items-center gap-2 px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-black transition-colors duration-200 border-b border-gray-100 last:border-0"
                        >
                          {icon}
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* INDUSTRY Dropdown */}
              <div className="relative dropdown-menu">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    handleDropdownToggle('industry')
                  }}
                  className="dropdown-trigger text-gray-900 hover:text-black font-semibold transition-colors duration-300 flex items-center gap-1 text-sm tracking-wide uppercase"
                  aria-label="Industry solutions menu"
                  aria-expanded={industryOpen}
                >
                  INDUSTRY
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${industryOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                
                {industryOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50">
                    {industryItems.map((item, index) => {
                      const icon = getMenuIcon(item.name)
                      return (
                        <Link
                          key={index}
                          href={item.href}
                          prefetch={true}
                          onClick={closeAllMenus}
                          className="flex items-center gap-2 px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-black transition-colors duration-200 border-b border-gray-100 last:border-0"
                        >
                          {icon}
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* COMPANY Dropdown */}
              <div className="relative dropdown-menu">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    handleDropdownToggle('company')
                  }}
                  className="dropdown-trigger text-gray-900 hover:text-black font-semibold transition-colors duration-300 flex items-center gap-1 text-sm tracking-wide uppercase"
                  aria-label="Company information menu"
                  aria-expanded={companyOpen}
                >
                  COMPANY
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${companyOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                
                {companyOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50">
                    {companyItems.map((item, index) => {
                      const icon = getMenuIcon(item.name)
                      return (
                        <Link
                          key={index}
                          href={item.href}
                          prefetch={true}
                          onClick={closeAllMenus}
                          className="flex items-center gap-2 px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-black transition-colors duration-200 border-b border-gray-100 last:border-0"
                        >
                          {icon}
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact" prefetch={true} className="bg-[#5e2cb6] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#4a1f8f] transition-all duration-300 inline-block shadow-sm shadow-[#5e2cb6]/20">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-900 hover:text-black transition-colors duration-300"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 top-20 z-40 bg-white overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <div className="space-y-4">
              {/* Mobile Services Dropdown */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-xl font-medium text-gray-700 hover:text-truvixo-blue transition-colors duration-300 py-2"
                  aria-label="Services menu"
                  aria-expanded={mobileServicesOpen}
                >
                  SERVICES
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {mobileServicesOpen && (
                  <div className="mt-3 pl-4 space-y-4 bg-gray-50 rounded-lg p-4">
                    {servicesCategories.map((category, catIndex) => (
                      <div key={catIndex} className="space-y-2">
                        <h3 className="font-bold text-sm text-gray-900 mb-2 uppercase">
                          {category.category}
                        </h3>
                        <div className="space-y-1 pl-2">
                          {category.items.map((item, itemIndex) => {
                            const icon = getMenuIcon(item.name)
                            return (
                              <Link
                                key={itemIndex}
                                href={item.href}
                                prefetch={true}
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 py-1.5"
                                onClick={closeAllMenus}
                              >
                                {icon}
                                {item.name}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile AI Dropdown */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setMobileAiOpen(!mobileAiOpen)}
                  className="w-full flex items-center justify-between text-xl font-medium text-gray-700 hover:text-truvixo-blue transition-colors duration-300 py-2"
                  aria-label="AI services menu"
                  aria-expanded={mobileAiOpen}
                >
                  AI
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileAiOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {mobileAiOpen && (
                  <div className="mt-3 pl-4 space-y-2 bg-gray-50 rounded-lg p-4">
                    {aiItems.map((item, index) => {
                      const icon = getMenuIcon(item.name)
                      return (
                        <Link
                          key={index}
                          href={item.href}
                          prefetch={true}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 py-2"
                          onClick={closeAllMenus}
                        >
                          {icon}
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Mobile HIRE Dropdown */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setMobileHireOpen(!mobileHireOpen)}
                  className="w-full flex items-center justify-between text-xl font-medium text-gray-700 hover:text-truvixo-blue transition-colors duration-300 py-2"
                  aria-label="Hire developers menu"
                  aria-expanded={mobileHireOpen}
                >
                  HIRE
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileHireOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {mobileHireOpen && (
                  <div className="mt-3 pl-4 space-y-2 bg-gray-50 rounded-lg p-4">
                    {hireItems.map((item, index) => {
                      const icon = getMenuIcon(item.name)
                      return (
                        <Link
                          key={index}
                          href={item.href}
                          prefetch={true}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 py-2"
                          onClick={closeAllMenus}
                        >
                          {icon}
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Mobile INDUSTRY Dropdown */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)}
                  className="w-full flex items-center justify-between text-xl font-medium text-gray-700 hover:text-truvixo-blue transition-colors duration-300 py-2"
                  aria-label="Industry solutions menu"
                  aria-expanded={mobileIndustryOpen}
                >
                  INDUSTRY
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileIndustryOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {mobileIndustryOpen && (
                  <div className="mt-3 pl-4 space-y-2 bg-gray-50 rounded-lg p-4">
                    {industryItems.map((item, index) => {
                      const icon = getMenuIcon(item.name)
                      return (
                        <Link
                          key={index}
                          href={item.href}
                          prefetch={true}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 py-2"
                          onClick={closeAllMenus}
                        >
                          {icon && <span className="text-[#5e2cb6]">{icon}</span>}
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Mobile COMPANY Dropdown */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  className="w-full flex items-center justify-between text-xl font-medium text-gray-700 hover:text-truvixo-blue transition-colors duration-300 py-2"
                  aria-label="Company information menu"
                  aria-expanded={mobileCompanyOpen}
                >
                  COMPANY
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileCompanyOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {mobileCompanyOpen && (
                  <div className="mt-3 pl-4 space-y-2 bg-gray-50 rounded-lg p-4">
                    {companyItems.map((item, index) => {
                      const icon = getMenuIcon(item.name)
                      return (
                        <Link
                          key={index}
                          href={item.href}
                          prefetch={true}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 py-2"
                          onClick={closeAllMenus}
                        >
                          {icon}
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              <div className="pt-6">
                <Link href="/contact" prefetch={true} className="w-full bg-truvixo-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-truvixo-blue/90 transition-all duration-300 inline-block text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar

