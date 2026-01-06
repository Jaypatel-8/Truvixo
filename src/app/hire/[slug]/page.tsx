import { notFound } from 'next/navigation'
import HirePageClient from './HirePageClient'
import { mainServices } from '@/lib/seoContent'

export const dynamicParams = true

export async function generateStaticParams() {
  // Extract slugs from mainServices and return them as params
  return mainServices.map((service) => ({ slug: service.slug }))
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function HirePage({ params }: PageProps) {
  const { slug } = params

  if (!slug) {
    notFound()
  }

  return <HirePageClient slug={slug} />
}
