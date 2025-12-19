import { notFound } from 'next/navigation'
import ServicePageClient from './ServicePageClient'

interface PageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: PageProps) {
  const { slug } = params

  if (!slug) {
    notFound()
  }

  return <ServicePageClient slug={slug} />
}
