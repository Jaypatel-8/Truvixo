import { Linkedin, Mail, MessageSquare, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  // All services organized by category
  const services = {
    'Software Development': [
      { name: 'Custom Software Development', href: '/services/custom-software-development' },
      { name: 'Web Application Development', href: '/services/web-application-development' },
      { name: 'Mobile App Development', href: '/services/mobile-app-development' },
      { name: 'SaaS Product Development', href: '/services/saas-product-development' },
      { name: 'Enterprise Software Development', href: '/services/enterprise-software-development' },
      { name: 'API Development & Integration', href: '/services/api-development-integration' },
      { name: 'E-commerce Development', href: '/services/ecommerce-development' },
      { name: 'CMS Development', href: '/services/cms-development' },
      { name: 'Legacy App Modernization', href: '/services/legacy-app-modernization' },
      { name: 'Maintenance & Support', href: '/services/maintenance-support' }
    ],
    'AI & Machine Learning': [
      { name: 'AI Development Services', href: '/services/ai-development-services' },
      { name: 'Machine Learning Model Development', href: '/services/machine-learning-model-development' }
    ],
    'Digital Marketing': [
      { name: 'SEO', href: '/services/seo' },
      { name: 'PPC', href: '/services/ppc' },
      { name: 'SMM', href: '/services/smm' },
      { name: 'Performance Marketing', href: '/services/performance-marketing' },
      { name: 'Email Marketing', href: '/services/email-marketing' },
      { name: 'CRO', href: '/services/cro' }
    ],
    'Hire Developers': [
      { name: 'Hire Frontend Developers', href: '/hire/frontend-developers' },
      { name: 'Hire Backend Developers', href: '/hire/backend-developers' },
      { name: 'Hire Full-Stack Developers', href: '/hire/full-stack-developers' },
      { name: 'Hire Mobile Developers', href: '/hire/mobile-developers' },
      { name: 'Hire AI/ML Engineers', href: '/hire/ai-ml-engineers' },
      { name: 'Hire DevOps Engineers', href: '/hire/devops-engineers' },
      { name: 'Hire QA Engineers', href: '/hire/qa-engineers' },
      { name: 'Hire UI/UX Designers', href: '/hire/ui-ux-designers' },
      { name: 'Hire Project Managers', href: '/hire/project-managers' },
      { name: 'Hire Dedicated Teams', href: '/hire/dedicated-teams' }
    ]
  }

  const industries = [
    { name: 'Fintech', href: '/industry/fintech' },
    { name: 'Healthcare', href: '/industry/healthcare' },
    { name: 'Retail & eCommerce', href: '/industry/retail-ecommerce' },
    { name: 'Education & eLearning', href: '/industry/education' },
    { name: 'Logistics & Transportation', href: '/industry/logistics' },
    { name: 'Real Estate', href: '/industry/real-estate' },
    { name: 'Manufacturing', href: '/industry/manufacturing' }
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' }
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Company Info & Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/TruVixo.png"
                alt="TruVixo Logo"
                width={140}
                height={50}
                className="h-12 w-auto transition-all duration-300"
                priority
              />
            </Link>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              AI-powered branding, marketing, and technology company helping businesses scale from concept to market leader.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <a 
                href="tel:+916354326412" 
                className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <Phone className="w-5 h-5 text-gray-900" />
                </div>
                <span className="text-sm font-medium">+91 63543 26412</span>
              </a>
              <a 
                href="tel:+917990631490" 
                className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <Phone className="w-5 h-5 text-gray-900" />
                </div>
                <span className="text-sm font-medium">+91 79906 31490</span>
              </a>
              <a 
                href="mailto:sales@truvixoo.com" 
                className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <Mail className="w-5 h-5 text-gray-900" />
                </div>
                <span className="text-sm font-medium">sales@truvixoo.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/company/truvixo%E2%84%A2/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                aria-label="Visit TruVixo on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-900" />
              </a>
              <a 
                href="mailto:sales@truvixoo.com"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                aria-label="Email TruVixo"
              >
                <Mail className="w-5 h-5 text-gray-900" />
              </a>
              <a 
                href="/contact"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                aria-label="Contact TruVixo"
              >
                <MessageSquare className="w-5 h-5 text-gray-900" />
              </a>
            </div>
          </div>

          {/* Services - Software Development */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wide">Software Development</h3>
            <ul className="space-y-2.5">
              {services['Software Development'].map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    prefetch={true}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-300 block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - AI & Digital Marketing */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wide">AI & Marketing</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-gray-700 mb-2.5 uppercase">AI & Machine Learning</h4>
                <ul className="space-y-2.5">
                  {services['AI & Machine Learning'].map((service, index) => (
                    <li key={index}>
                      <Link 
                        href={service.href} 
                        className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 block"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-700 mb-2.5 uppercase">Digital Marketing</h4>
                <ul className="space-y-2.5">
                  {services['Digital Marketing'].map((service, index) => (
                    <li key={index}>
                      <Link 
                        href={service.href} 
                        className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 block"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Hire Developers */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wide">Hire Developers</h3>
            <ul className="space-y-2.5">
              {services['Hire Developers'].map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    prefetch={true}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-300 block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Company */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wide">Industries</h3>
            <ul className="space-y-2.5 mb-6">
              {industries.map((industry, index) => (
                <li key={index}>
              <Link 
                href={industry.href}
                prefetch={true}
                className="text-sm text-gray-600 hover:text-black transition-colors duration-300 block"
              >
                {industry.name}
              </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-2.5">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    prefetch={true}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-300 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} TruVixo. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" prefetch={true} className="text-gray-600 hover:text-black transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" prefetch={true} className="text-gray-600 hover:text-black transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/contact" prefetch={true} className="text-gray-600 hover:text-black transition-colors duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer





