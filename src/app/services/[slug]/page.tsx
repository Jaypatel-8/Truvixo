import { Metadata } from 'next'
import ServicePageClient from './ServicePageClient'
import { generateServiceMetadata } from '@/lib/serviceMetadata'

export const dynamicParams = false

export async function generateStaticParams() {
  // All service slugs that have dedicated pages
  return [
    { slug: 'custom-software-development' },
    { slug: 'ai-development-services' },
    { slug: 'mobile-app-development' },
    { slug: 'web-application-development' },
    { slug: 'saas-product-development' },
    { slug: 'enterprise-software-development' },
    { slug: 'api-development-integration' },
    { slug: 'cms-development' },
    { slug: 'ecommerce-development' },
    { slug: 'legacy-app-modernization' },
    { slug: 'maintenance-support' },
    { slug: 'machine-learning-model-development' },
    { slug: 'seo' },
    { slug: 'ppc' },
    { slug: 'smm' },
    { slug: 'performance-marketing' },
    { slug: 'email-marketing' },
    { slug: 'cro' }
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return generateServiceMetadata(params.slug)
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  return <ServicePageClient slug={params.slug} />
}
