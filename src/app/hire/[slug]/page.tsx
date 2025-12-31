import { notFound } from 'next/navigation'
import HirePageClient from './HirePageClient'

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

export default function HirePage({ params }: PageProps) {
  const { slug } = params

  if (!slug) {
    notFound()
  }

  return <HirePageClient slug={slug} />
}
