import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technology Stack & Development Services | React, Node.js, Python, AI, Cloud | TruVixo™',
  description: 'Expert technology development services with React, Next.js, Node.js, Python, AI/ML, AWS, Docker, Kubernetes. Build modern applications with cutting-edge technologies. Global technology development company.',
  keywords: [
    'technology development company',
    'React development services',
    'Node.js development company',
    'Python development services',
    'AI development company',
    'machine learning development',
    'cloud development services',
    'DevOps services company',
    'frontend development',
    'backend development',
    'mobile app development',
    'database development',
    'technology stack',
    'development tools',
    'software technology services',
    'best technology developers',
    'hire technology developers',
    'technology consulting',
    'custom technology solutions',
    'enterprise technology development',
    'modern technology stack',
    'cutting-edge technologies',
    'technology expertise',
    'technology solutions',
    'technology services worldwide',
    'global technology company',
    'technology development agency'
  ],
  openGraph: {
    title: 'Technology Stack & Development Services | TruVixo™',
    description: 'Expert technology development services with React, Node.js, Python, AI/ML, AWS, Docker, Kubernetes. Build modern applications with cutting-edge technologies.',
    type: 'website',
    url: 'https://truvixo.com/technology',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Stack & Development Services | TruVixo™',
    description: 'Expert technology development services with React, Node.js, Python, AI/ML, AWS, Docker, Kubernetes.',
  },
}

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}



