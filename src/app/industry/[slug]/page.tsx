import { notFound } from 'next/navigation'
import IndustryPageClient from './IndustryPageClient'

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
