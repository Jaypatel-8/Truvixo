import { Metadata } from 'next'
import { getTechnologyMetadata } from '@/lib/technologySEO'

export const metadata: Metadata = {
  ...getTechnologyMetadata('cloud-devops'),
  openGraph: {
    title: getTechnologyMetadata('cloud-devops').title,
    description: getTechnologyMetadata('cloud-devops').description,
    type: 'website',
    url: 'https://truvixo.com/technology/cloud-devops',
  },
  twitter: {
    card: 'summary_large_image',
    title: getTechnologyMetadata('cloud-devops').title,
    description: getTechnologyMetadata('cloud-devops').description,
  },
}

export default function CloudDevOpsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

