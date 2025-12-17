import { Metadata } from 'next'
import { getTechnologyMetadata } from '@/lib/technologySEO'

export const metadata: Metadata = {
  ...getTechnologyMetadata('database'),
  openGraph: {
    title: getTechnologyMetadata('database').title,
    description: getTechnologyMetadata('database').description,
    type: 'website',
    url: 'https://truvixo.com/technology/database',
  },
  twitter: {
    card: 'summary_large_image',
    title: getTechnologyMetadata('database').title,
    description: getTechnologyMetadata('database').description,
  },
}

export default function DatabaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}



