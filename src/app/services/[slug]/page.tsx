import ServicePageClient from './ServicePageClient'

// Required for static export - must be exported before default export
export function generateStaticParams() {
  return []
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  return <ServicePageClient slug={params.slug} />
}
