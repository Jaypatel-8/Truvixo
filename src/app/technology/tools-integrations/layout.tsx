import { Metadata } from 'next'
import { getTechnologyMetadata } from '@/lib/technologySEO'

export const metadata: Metadata = {
  ...getTechnologyMetadata('tools-integrations'),
  openGraph: {
    title: getTechnologyMetadata('tools-integrations').title,
    description: getTechnologyMetadata('tools-integrations').description,
    type: 'website',
    url: 'https://truvixo.com/technology/tools-integrations',
  },
  twitter: {
    card: 'summary_large_image',
    title: getTechnologyMetadata('tools-integrations').title,
    description: getTechnologyMetadata('tools-integrations').description,
  },
}

export default function ToolsIntegrationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}



