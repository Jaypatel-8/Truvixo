// Server Component - No client-side interactivity needed
import { Linkedin, Mail, Phone, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const WHATSAPP_LINK = 'https://wa.me/916354326412'
const FOOTER_LINK_CLASS = 'text-sm text-gray-600 hover:bg-[#5e2cb6]/10 hover:text-[#5e2cb6] transition-colors duration-300 block rounded px-1 py-0.5 -mx-1'

function toCamelCase(str: string): string {
  return str.split(/\s+/).map((word, i) =>
    i === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join('')
}

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
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' }
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-animate">
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
            
            {/* Contact Information - Colored icons */}
            <div className="space-y-3 mb-6">
              <a 
                href="tel:+916354326412" 
                className="flex items-center gap-3 text-gray-700 hover:text-[#16a34a] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(22, 163, 74, 0.12)' }}>
                  <Phone className="w-5 h-5" style={{ color: '#16a34a' }} />
                </div>
                <span className="text-sm font-medium">+91 63543 26412</span>
              </a>
              <a 
                href="tel:+917990631490" 
                className="flex items-center gap-3 text-gray-700 hover:text-[#16a34a] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(22, 163, 74, 0.12)' }}>
                  <Phone className="w-5 h-5" style={{ color: '#16a34a' }} />
                </div>
                <span className="text-sm font-medium">+91 79906 31490</span>
              </a>
              <a 
                href="mailto:sales@truvixoo.com" 
                className="flex items-center gap-3 text-gray-700 hover:text-[#ea4335] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(234, 67, 53, 0.12)' }}>
                  <Mail className="w-5 h-5" style={{ color: '#ea4335' }} />
                </div>
                <span className="text-sm font-medium">sales@truvixoo.com</span>
              </a>
            </div>

            {/* Social & Chat - Colored icons */}
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.linkedin.com/company/truvixo%E2%84%A2/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:opacity-90"
                style={{ backgroundColor: 'rgba(10, 102, 194, 0.12)' }}
                aria-label="Visit TruVixo on LinkedIn"
              >
                <Linkedin className="w-5 h-5" style={{ color: '#0A66C2' }} />
              </a>
              <a 
                href="https://www.instagram.com/truvixo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:opacity-90"
                style={{ backgroundColor: 'rgba(228, 64, 95, 0.12)' }}
                aria-label="Visit TruVixo on Instagram"
              >
                <Instagram className="w-5 h-5" style={{ color: '#E4405F' }} />
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:opacity-90"
                style={{ backgroundColor: 'rgba(37, 211, 102, 0.12)' }}
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#25D366' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services - Software Development */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wide">Software Development</h3>
            <ul className="space-y-2.5">
              {services['Software Development'].map((service, index) => (
                <li key={index}>
                  <Link href={service.href} prefetch={true} className={FOOTER_LINK_CLASS}>
                    {toCamelCase(service.name)}
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
                      <Link href={service.href} prefetch={true} className={FOOTER_LINK_CLASS}>
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
                      <Link href={service.href} prefetch={true} className={FOOTER_LINK_CLASS}>
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
                  <Link href={service.href} prefetch={true} className={FOOTER_LINK_CLASS}>
                    {toCamelCase(service.name)}
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
                  <Link href={industry.href} prefetch={true} className={FOOTER_LINK_CLASS}>
                    {toCamelCase(industry.name)}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-2.5">
              {company.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} prefetch={true} className={FOOTER_LINK_CLASS}>
                    {toCamelCase(item.name)}
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
              <Link href="/cancellation-refund" prefetch={true} className="text-gray-600 hover:text-black transition-colors duration-300">
                Cancellation & Refund
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





