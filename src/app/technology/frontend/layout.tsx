import { Metadata } from 'next'
import { getTechnologyMetadata } from '@/lib/technologySEO'

export const metadata: Metadata = {
  ...getTechnologyMetadata('frontend'),
  openGraph: {
    title: getTechnologyMetadata('frontend').title,
    description: getTechnologyMetadata('frontend').description,
    type: 'website',
    url: 'https://truvixo.com/technology/frontend',
  },
  twitter: {
    card: 'summary_large_image',
    title: getTechnologyMetadata('frontend').title,
    description: getTechnologyMetadata('frontend').description,
  },
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

