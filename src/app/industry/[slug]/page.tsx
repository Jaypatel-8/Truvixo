import { notFound } from 'next/navigation'
import IndustryPageClient from './IndustryPageClient'

export const dynamicParams = true

export async function generateStaticParams() {
  // Return empty array for dev mode - routes will be generated on-demand
  // For production static export, add all possible slugs here
  return []
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
