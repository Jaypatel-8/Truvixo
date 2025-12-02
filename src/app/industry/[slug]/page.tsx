import IndustryPageClient from './IndustryPageClient'

export const dynamicParams = false

export async function generateStaticParams() {
  // All industry slugs that have dedicated pages
  return [
    { slug: 'fintech' },
    { slug: 'healthcare' },
    { slug: 'retail-ecommerce' },
    { slug: 'education' },
    { slug: 'logistics' },
    { slug: 'real-estate' },
    { slug: 'manufacturing' },
    { slug: 'travel-hospitality' }
  ]
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  return <IndustryPageClient slug={params.slug} />
}
