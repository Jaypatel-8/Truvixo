import IndustryPageClient from './IndustryPageClient'

// Required for static export - must be exported before default export
export function generateStaticParams() {
  return []
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  return <IndustryPageClient slug={params.slug} />
}
