import { Metadata } from "next";
import ProjectPageClient from "./ProjectPageClient";
import { projectDataMap } from "@/lib/staticData/projects";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    // { slug: 'nova-logistics' },
    // { slug: 'brightedge-healthcare-analytics' },
    // { slug: 'urbanmint-property-platform' },
    // { slug: 'padmavat-construction-management' },
    { slug: 'find24' },
    { slug: 'brum-reseller' },
    { slug: 'physiofi' },
    { slug: 'aquapro-cleaning' },
    { slug: 'akshita-enterprise' },
    { slug: 'pramukh-real-estate' }
  ]
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const projectNames: Record<string, string> = {
    // 'nova-logistics': 'Nova Logistics - Digital Transformation Platform',
    // 'brightedge-healthcare-analytics': 'BrightEdge Healthcare Analytics - AI-Powered Solution',
    // 'urbanmint-property-platform': 'UrbanMint Property Platform - Real Estate Management',
    // 'padmavat-construction-management': 'Padmavat Construction Management - Project Management Solution',
    'find24': 'Find24 - Hyperlocal Business Discovery & SaaS Platform',
    'brum-reseller': 'Brum Reseller - Premium E-commerce & Fashion Destination',
    'physiofi': 'PhysioFi - Physiotherapy & Tele-Consultation Platform',
    'aquapro-cleaning': 'AquaPro Cleaning - Professional Cleaning Services Canada',
    'akshita-enterprise': 'Akshita Enterprise - Premium Real Estate & Consultancy',
    'pramukh-real-estate': 'Pramukh Real Estate - Architecture of Serenity'
  }

  const title = projectNames[params.slug] || 'Project Case Study'

  return {
    title:
      title.length > 50
        ? `${title.substring(0, 47)}... | TruVixo`
        : `${title} | TruVixo`,
    description: `TruVixoo case study: ${title.toLowerCase()}. Explore innovative tech solutions, team expertise, and proven results. Get expert development services.`,
    keywords:
      "project case study, software development, digital transformation, TruVixoo projects",
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <ProjectPageClient slug={params.slug} projectDataMap={projectDataMap} />
  );
}
