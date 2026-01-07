import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sitemap | TruVixo™',
  description: 'Complete sitemap of all pages on TruVixo website. Find all services, industries, hiring options, and company pages.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function SitemapPage() {
  const services = [
    { name: 'Custom Software Development', href: '/services/custom-software-development' },
    { name: 'Web Application Development', href: '/services/web-application-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app-development' },
    { name: 'SaaS Product Development', href: '/services/saas-product-development' },
    { name: 'Enterprise Software Development', href: '/services/enterprise-software-development' },
    { name: 'API Development & Integration', href: '/services/api-development-integration' },
    { name: 'E-commerce Development', href: '/services/ecommerce-development' },
    { name: 'CMS Development', href: '/services/cms-development' },
    { name: 'Legacy App Modernization', href: '/services/legacy-app-modernization' },
    { name: 'Maintenance & Support', href: '/services/maintenance-support' },
    { name: 'AI Development Services', href: '/services/ai-development-services' },
    { name: 'Machine Learning Model Development', href: '/services/machine-learning-model-development' },
    { name: 'SEO', href: '/services/seo' },
    { name: 'PPC', href: '/services/ppc' },
    { name: 'SMM', href: '/services/smm' },
    { name: 'Performance Marketing', href: '/services/performance-marketing' },
    { name: 'Email Marketing', href: '/services/email-marketing' },
    { name: 'CRO', href: '/services/cro' },
  ]

  const industries = [
    { name: 'Fintech', href: '/industry/fintech' },
    { name: 'Healthcare', href: '/industry/healthcare' },
    { name: 'Retail & eCommerce', href: '/industry/retail-ecommerce' },
    { name: 'Education & eLearning', href: '/industry/education' },
    { name: 'Logistics & Transportation', href: '/industry/logistics' },
    { name: 'Real Estate', href: '/industry/real-estate' },
    { name: 'Manufacturing', href: '/industry/manufacturing' },
    { name: 'Travel & Hospitality', href: '/industry/travel-hospitality' },
  ]

  const hire = [
    { name: 'Hire Frontend Developers', href: '/hire/frontend-developers' },
    { name: 'Hire Backend Developers', href: '/hire/backend-developers' },
    { name: 'Hire Full-Stack Developers', href: '/hire/full-stack-developers' },
    { name: 'Hire Mobile Developers', href: '/hire/mobile-developers' },
    { name: 'Hire AI/ML Engineers', href: '/hire/ai-ml-engineers' },
    { name: 'Hire DevOps Engineers', href: '/hire/devops-engineers' },
    { name: 'Hire QA Engineers', href: '/hire/qa-engineers' },
    { name: 'Hire UI/UX Designers', href: '/hire/ui-ux-designers' },
    { name: 'Hire Project Managers', href: '/hire/project-managers' },
    { name: 'Hire Dedicated Teams', href: '/hire/dedicated-teams' },
  ]

  const technologies = [
    { name: 'Frontend Technology', href: '/technology/frontend' },
    { name: 'Backend Technology', href: '/technology/backend' },
    { name: 'Mobile Technology', href: '/technology/mobile' },
    { name: 'AI/ML Technology', href: '/technology/ai-ml' },
    { name: 'Cloud & DevOps', href: '/technology/cloud-devops' },
    { name: 'Database Technology', href: '/technology/database' },
    { name: 'Tools & Integrations', href: '/technology/tools-integrations' },
  ]

  const mainPages = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Our Approach', href: '/our-approach' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'AI Solutions', href: '/ai' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industry' },
    { name: 'Hire Developers', href: '/hire' },
    { name: 'Technology Stack', href: '/technology' },
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Site <span className="hollow-text-brand">Map</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete list of all pages on TruVixo website. Easily navigate to any service, industry, or page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Main Pages</h2>
            <ul className="space-y-2">
              {mainPages.map((page, index) => (
                <li key={index}>
                  <Link 
                    href={page.href}
                    prefetch={true}
                    className="text-gray-600 hover:text-[#5e2cb6] transition-colors text-sm"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Services</h2>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    prefetch={true}
                    className="text-gray-600 hover:text-[#5e2cb6] transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Industries</h2>
            <ul className="space-y-2">
              {industries.map((industry, index) => (
                <li key={index}>
                  <Link 
                    href={industry.href}
                    prefetch={true}
                    className="text-gray-600 hover:text-[#5e2cb6] transition-colors text-sm"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hire */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Hire Developers</h2>
            <ul className="space-y-2">
              {hire.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    prefetch={true}
                    className="text-gray-600 hover:text-[#5e2cb6] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Technologies</h2>
            <ul className="space-y-2">
              {technologies.map((tech, index) => (
                <li key={index}>
                  <Link 
                    href={tech.href}
                    prefetch={true}
                    className="text-gray-600 hover:text-[#5e2cb6] transition-colors text-sm"
                  >
                    {tech.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* XML Sitemap */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">For Crawlers</h2>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/sitemap.xml"
                  prefetch={true}
                  className="text-gray-600 hover:text-[#5e2cb6] transition-colors text-sm"
                >
                  XML Sitemap
                </Link>
              </li>
              <li>
                <Link 
                  href="/robots.txt"
                  prefetch={true}
                  className="text-gray-600 hover:text-[#5e2cb6] transition-colors text-sm"
                >
                  Robots.txt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-[#5e2cb6] hover:text-[#4a1f8f] font-semibold transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

