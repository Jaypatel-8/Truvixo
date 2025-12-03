// SEO Data for Location-Based Rankings
// Helps rank for "best in [location]" keywords

export const locations = [
  { name: 'India', type: 'country' },
  { name: 'Gujarat', type: 'state' },
  { name: 'Ahmedabad', type: 'city' },
  { name: 'Dubai', type: 'city', country: 'UAE' },
  { name: 'USA', type: 'country' },
  { name: 'United States', type: 'country' },
  { name: 'Australia', type: 'country' },
  { name: 'UK', type: 'country' },
  { name: 'United Kingdom', type: 'country' },
  { name: 'Canada', type: 'country' },
  { name: 'Singapore', type: 'country' },
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
    title: `${baseTitle} | Best in India, Gujarat, Ahmedabad, Dubai, USA, Australia & Worldwide`,
    description: `TruVixo is the best ${serviceName.toLowerCase()} company in India, Gujarat, Ahmedabad, Dubai, USA, Australia, and worldwide. We provide top-rated ${serviceName.toLowerCase()} services with proven results. Get expert ${serviceName.toLowerCase()} solutions today.`,
    keywords: [
      `best ${serviceName.toLowerCase()} company in india`,
      `best ${serviceName.toLowerCase()} company in gujarat`,
      `best ${serviceName.toLowerCase()} company in ahmedabad`,
      `best ${serviceName.toLowerCase()} company in dubai`,
      `best ${serviceName.toLowerCase()} company in usa`,
      `best ${serviceName.toLowerCase()} company in australia`,
      `best ${serviceName.toLowerCase()} company worldwide`,
      `${serviceName.toLowerCase()} services india`,
      `${serviceName.toLowerCase()} agency gujarat`,
      `top ${serviceName.toLowerCase()} company`,
      `leading ${serviceName.toLowerCase()} services`,
      serviceName.toLowerCase(),
      serviceSlug,
    ],
    h1: `Best ${serviceName} Company in India, Gujarat, Ahmedabad, Dubai, USA, Australia & Worldwide`,
    locationHeadlines: locations,
    contentSections: [
      {
        heading: `Best ${serviceName} Company in India`,
        content: `TruVixo is recognized as the best ${serviceName.toLowerCase()} company in India, delivering exceptional results for businesses across the country. Our team of expert professionals combines cutting-edge technology with industry best practices to provide top-tier ${serviceName.toLowerCase()} services that drive growth and success.`
      },
      {
        heading: `Leading ${serviceName} Company in Gujarat`,
        content: `As the leading ${serviceName.toLowerCase()} company in Gujarat, TruVixo has established itself as the go-to partner for businesses seeking premium ${serviceName.toLowerCase()} solutions. We understand the unique market dynamics of Gujarat and tailor our services to meet local business needs while maintaining global standards.`
      },
      {
        heading: `Top ${serviceName} Company in Ahmedabad`,
        content: `TruVixo is the top ${serviceName.toLowerCase()} company in Ahmedabad, serving businesses with world-class ${serviceName.toLowerCase()} services. Our Ahmedabad-based team brings local expertise combined with international experience, ensuring your business gets the best ${serviceName.toLowerCase()} solutions available.`
      },
      {
        heading: `Premium ${serviceName} Services in Dubai, UAE`,
        content: `TruVixo offers premium ${serviceName.toLowerCase()} services in Dubai and across the UAE. As one of the best ${serviceName.toLowerCase()} companies in Dubai, we help businesses leverage cutting-edge ${serviceName.toLowerCase()} solutions to achieve their goals in the competitive Middle Eastern market.`
      },
      {
        heading: `Best ${serviceName} Company in USA`,
        content: `TruVixo is recognized as one of the best ${serviceName.toLowerCase()} companies in the USA, providing exceptional ${serviceName.toLowerCase()} services to businesses nationwide. Our US-based operations ensure seamless communication and delivery, making us the preferred choice for American businesses.`
      },
      {
        heading: `Professional ${serviceName} Services in Australia`,
        content: `TruVixo delivers professional ${serviceName.toLowerCase()} services in Australia, helping businesses across the continent achieve their objectives. As a leading ${serviceName.toLowerCase()} company in Australia, we combine local market knowledge with global expertise to deliver outstanding results.`
      },
      {
        heading: `Global ${serviceName} Solutions Worldwide`,
        content: `TruVixo provides world-class ${serviceName.toLowerCase()} solutions to businesses worldwide. Our global presence and international expertise make us the best ${serviceName.toLowerCase()} company for businesses seeking reliable, scalable, and effective ${serviceName.toLowerCase()} services regardless of location.`
      }
    ]
  }
}

// Main company SEO
export const companySEO = {
  title: 'Best Software Development & Digital Marketing Agency | India, Gujarat, Ahmedabad, Dubai, USA, Australia & Worldwide',
  description: 'TruVixo is the best software development and digital marketing agency in India, Gujarat, Ahmedabad, Dubai, USA, Australia, and worldwide. We provide AI development, web development, mobile apps, SEO, PPC, and digital marketing services. Top-rated agency with proven results.',
  keywords: [
    'best software development company in india',
    'best digital marketing agency in india',
    'best software development company in gujarat',
    'best digital marketing agency in gujarat',
    'best software development company in ahmedabad',
    'best digital marketing agency in ahmedabad',
    'best software development company in dubai',
    'best digital marketing agency in dubai',
    'best software development company in usa',
    'best digital marketing agency in usa',
    'best software development company in australia',
    'best digital marketing agency in australia',
    'best software development company worldwide',
    'best digital marketing agency worldwide',
    'software development and marketing agency',
    'AI development company',
    'web development company',
    'mobile app development company',
    'SEO services company',
    'PPC services company',
  ],
  h1: 'Best Software Development & Digital Marketing Agency in India, Gujarat, Ahmedabad, Dubai, USA, Australia & Worldwide',
}

