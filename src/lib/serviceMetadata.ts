import { Metadata } from 'next'
import { generateServiceSEO } from './seoContent'

// Service metadata mapping
const serviceMetadataMap: Record<string, { name: string; slug: string }> = {
  'custom-software-development': { name: 'Custom Software Development', slug: 'custom-software-development' },
  'ai-development-services': { name: 'AI Development Services', slug: 'ai-development-services' },
  'mobile-app-development': { name: 'Mobile App Development', slug: 'mobile-app-development' },
  'web-application-development': { name: 'Web Application Development', slug: 'web-application-development' },
  'saas-product-development': { name: 'SaaS Product Development', slug: 'saas-product-development' },
  'enterprise-software-development': { name: 'Enterprise Software Development', slug: 'enterprise-software-development' },
  'api-development-integration': { name: 'API Development & Integration', slug: 'api-development-integration' },
  'cms-development': { name: 'CMS Development', slug: 'cms-development' },
  'ecommerce-development': { name: 'E-commerce Development', slug: 'ecommerce-development' },
  'legacy-app-modernization': { name: 'Legacy App Modernization', slug: 'legacy-app-modernization' },
  'maintenance-support': { name: 'Maintenance & Support', slug: 'maintenance-support' },
  'machine-learning-model-development': { name: 'Machine Learning Model Development', slug: 'machine-learning-model-development' },
  'seo': { name: 'SEO Services', slug: 'seo' },
  'ppc': { name: 'PPC Services', slug: 'ppc' },
  'smm': { name: 'Social Media Marketing', slug: 'smm' },
  'performance-marketing': { name: 'Performance Marketing', slug: 'performance-marketing' },
  'email-marketing': { name: 'Email Marketing', slug: 'email-marketing' },
  'cro': { name: 'Conversion Rate Optimization', slug: 'cro' },
}

// Generate metadata for service pages
export function generateServiceMetadata(serviceSlug: string): Metadata {
  const service = serviceMetadataMap[serviceSlug]
  if (!service) {
    return {
      title: 'Service | TruVixo™',
      description: 'Professional services from TruVixo',
    }
  }

  const seoData = generateServiceSEO(service.name, serviceSlug)

  // Ensure title is under 60 characters
  const maxTitleLength = 60
  const finalTitle = seoData.title.length > maxTitleLength 
    ? seoData.title.substring(0, maxTitleLength - 3) + '...' 
    : seoData.title

  // Ensure description is 130-155 characters
  const finalDescription = seoData.description.length > 155
    ? seoData.description.substring(0, 152) + '...'
    : seoData.description.length < 130
    ? seoData.description + '. Get expert solutions with proven results.'
    : seoData.description

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: `https://truvixo.com/services/${serviceSlug}`,
      siteName: 'TruVixo',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/TruVixo.png',
          width: 1200,
          height: 630,
          alt: `TruVixo - ${service.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.title,
      description: seoData.description,
      images: ['/TruVixo.png'],
    },
    alternates: {
      canonical: `https://truvixo.com/services/${serviceSlug}`,
    },
  }
}


