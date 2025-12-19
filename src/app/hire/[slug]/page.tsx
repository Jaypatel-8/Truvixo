import { notFound } from 'next/navigation'
import HirePageClient from './HirePageClient'

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
