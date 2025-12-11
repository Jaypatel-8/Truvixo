import { Metadata } from 'next'
import { getTechnologyMetadata } from '@/lib/technologySEO'

export const metadata: Metadata = {
  ...getTechnologyMetadata('mobile'),
  openGraph: {
    title: getTechnologyMetadata('mobile').title,
    description: getTechnologyMetadata('mobile').description,
    type: 'website',
    url: 'https://truvixo.com/technology/mobile',
  },
  twitter: {
    card: 'summary_large_image',
    title: getTechnologyMetadata('mobile').title,
    description: getTechnologyMetadata('mobile').description,
  },
}

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

