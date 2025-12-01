import HirePageClient from './HirePageClient'

// Required for static export - must be exported before default export
export function generateStaticParams() {
  return []
}

export default function HirePage({ params }: { params: { slug: string } }) {
  return <HirePageClient slug={params.slug} />
}
