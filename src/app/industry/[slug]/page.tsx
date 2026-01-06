import { notFound } from 'next/navigation'
import IndustryPageClient from './IndustryPageClient'
import { educationData } from '@/lib/staticData/industry/education'
import { retailEcommerceData } from '@/lib/staticData/industry/retail-ecommerce'

export const dynamicParams = true

export async function generateStaticParams() {
  // Define slugs for all industries
  const industrySlugs = [
    'education',
    'retail-ecommerce',
    'real-estate',
    'manufacturing',
    'logistics',
    'healthcare',
    'fintech',
    'travel-hospitality',
  ]

  return industrySlugs.map((slug) => ({ slug }))
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function IndustryPage({ params }: PageProps) {
  const { slug } = params

  if (!slug) {
    notFound()
  }

  return <IndustryPageClient slug={slug} />
}
