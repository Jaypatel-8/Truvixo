import { Metadata } from 'next'
import { getTechnologyMetadata } from '@/lib/technologySEO'

export const metadata: Metadata = {
  ...getTechnologyMetadata('backend'),
  openGraph: {
    title: getTechnologyMetadata('backend').title,
    description: getTechnologyMetadata('backend').description,
    type: 'website',
    url: 'https://truvixo.com/technology/backend',
  },
  twitter: {
    card: 'summary_large_image',
    title: getTechnologyMetadata('backend').title,
    description: getTechnologyMetadata('backend').description,
  },
}

export default function BackendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

