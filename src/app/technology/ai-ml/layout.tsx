import { Metadata } from 'next'
import { getTechnologyMetadata } from '@/lib/technologySEO'

export const metadata: Metadata = {
  ...getTechnologyMetadata('ai-ml'),
  openGraph: {
    title: getTechnologyMetadata('ai-ml').title,
    description: getTechnologyMetadata('ai-ml').description,
    type: 'website',
    url: 'https://truvixo.com/technology/ai-ml',
  },
  twitter: {
    card: 'summary_large_image',
    title: getTechnologyMetadata('ai-ml').title,
    description: getTechnologyMetadata('ai-ml').description,
  },
}

export default function AIMLLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}



