import AIPageClient from './AIPageClient'

// Required for static export - must be exported before default export
export function generateStaticParams() {
  return []
}

export default function AIPage({ params }: { params: { slug: string } }) {
  return <AIPageClient slug={params.slug} />
}
