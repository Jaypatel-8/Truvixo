import { Metadata } from 'next'
import ProjectPageClient from './ProjectPageClient'

export const dynamicParams = false

export async function generateStaticParams() {
  return [
    { slug: 'nova-logistics' },
    { slug: 'brightedge-healthcare-analytics' },
    { slug: 'urbanmint-property-platform' },
    { slug: 'padmavat-construction-management' }
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const projectNames: Record<string, string> = {
    'nova-logistics': 'Nova Logistics - Digital Transformation Platform',
    'brightedge-healthcare-analytics': 'BrightEdge Healthcare Analytics - AI-Powered Solution',
    'urbanmint-property-platform': 'UrbanMint Property Platform - Real Estate Management',
    'padmavat-construction-management': 'Padmavat Construction Management - Project Management Solution'
  }

  const title = projectNames[params.slug] || 'Project Case Study'
  
  return {
    title: `${title} | TruVixo`,
    description: `Explore how TruVixo delivered exceptional results through innovative technology solutions. Case study showcasing team size, location, tech stack, problem solving, and our approach.`,
    keywords: 'project case study, software development, digital transformation, TruVixo projects',
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectPageClient slug={params.slug} />
}

