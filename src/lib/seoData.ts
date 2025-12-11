// SEO Data for Location-Based Rankings
// Helps rank for "best in [location]" keywords

export const locations = [
  { name: 'Worldwide', type: 'global' },
]

export const serviceTypes = [
  'Software Development',
  'AI Development',
  'Web Development',
  'Mobile App Development',
  'Digital Marketing',
  'SEO Services',
  'PPC Services',
  'Social Media Marketing',
  'E-commerce Development',
  'Custom Software Development',
  'Enterprise Software Development',
  'SaaS Development',
  'API Development',
  'CMS Development',
  'Machine Learning Development',
  'UI/UX Design',
  'Branding Services',
  'Performance Marketing',
  'Email Marketing',
  'CRO Services',
]

export interface SEOContent {
  title: string
  description: string
  keywords: string[]
  h1: string
  locationHeadlines: {
    india: string
    gujarat: string
    ahmedabad: string
    dubai: string
    usa: string
    australia: string
    worldwide: string
  }
  contentSections: {
    heading: string
    content: string
  }[]
}

// Generate SEO content for services
export function getServiceSEO(serviceName: string, serviceSlug: string): SEOContent {
  const baseTitle = `${serviceName} Company`
  const locations = {
    india: `Best ${serviceName} Company in India | Top ${serviceName} Services`,
    gujarat: `Best ${serviceName} Company in Gujarat | Leading ${serviceName} Agency`,
    ahmedabad: `Best ${serviceName} Company in Ahmedabad | Expert ${serviceName} Services`,
    dubai: `Best ${serviceName} Company in Dubai, UAE | Premium ${serviceName} Services`,
    usa: `Best ${serviceName} Company in USA | Top-Rated ${serviceName} Agency`,
    australia: `Best ${serviceName} Company in Australia | Professional ${serviceName} Services`,
    worldwide: `Best ${serviceName} Company Worldwide | Global ${serviceName} Solutions`
  }

  return {
    title: `${baseTitle} | Global Services | TruVixo™`,
    description: `TruVixo is the best ${serviceName.toLowerCase()} company worldwide. We provide top-rated ${serviceName.toLowerCase()} services with proven results. Get expert ${serviceName.toLowerCase()} solutions today.`,
    keywords: [
      `best ${serviceName.toLowerCase()} company`,
      `best ${serviceName.toLowerCase()} company worldwide`,
      `global ${serviceName.toLowerCase()} services`,
      `worldwide ${serviceName.toLowerCase()} agency`,
      `top ${serviceName.toLowerCase()} company`,
      `leading ${serviceName.toLowerCase()} services`,
      serviceName.toLowerCase(),
      serviceSlug,
    ],
    h1: `Best ${serviceName} Company | Global Services`,
    locationHeadlines: locations,
    contentSections: [
      {
        heading: `Global ${serviceName} Solutions`,
        content: `TruVixo provides world-class ${serviceName.toLowerCase()} solutions to businesses worldwide. Our global presence and international expertise make us the best ${serviceName.toLowerCase()} company for businesses seeking reliable, scalable, and effective ${serviceName.toLowerCase()} services regardless of location.`
      }
    ]
  }
}

// Main company SEO
export const companySEO = {
  title: 'Best Software Development & Digital Marketing Agency | Global Services | TruVixo™',
  description: 'TruVixo is the best software development and digital marketing agency worldwide. We provide AI development, web development, mobile apps, SEO, PPC, and digital marketing services. Top-rated agency with proven results.',
  keywords: [
    'best software development company',
    'best digital marketing agency',
    'best software development company worldwide',
    'best digital marketing agency worldwide',
    'global software development company',
    'worldwide digital marketing agency',
    'software development and marketing agency',
    'AI development company',
    'web development company',
    'mobile app development company',
    'SEO services company',
    'PPC services company',
  ],
  h1: 'Best Software Development & Digital Marketing Agency | Global Services',
}

