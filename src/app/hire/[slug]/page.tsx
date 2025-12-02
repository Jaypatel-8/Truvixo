import HirePageClient from './HirePageClient'

export const dynamicParams = false

export async function generateStaticParams() {
  // All hire slugs that have dedicated pages
  return [
    { slug: 'ai-ml-engineers' },
    { slug: 'full-stack-developers' },
    { slug: 'backend-developers' },
    { slug: 'frontend-developers' },
    { slug: 'mobile-developers' },
    { slug: 'devops-engineers' },
    { slug: 'qa-engineers' },
    { slug: 'ui-ux-designers' },
    { slug: 'project-managers' },
    { slug: 'dedicated-teams' }
  ]
}

export default function HirePage({ params }: { params: { slug: string } }) {
  return <HirePageClient slug={params.slug} />
}
