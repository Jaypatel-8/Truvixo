// Comprehensive SEO Content for Location, Service, and Technology-Based Rankings
// Unique, natural content optimized for Google ranking

export interface LocationSEO {
  location: string
  country: string
  title: string
  description: string
  h1: string
  content: string
  keywords: string[]
}

export interface ServiceSEO {
  serviceName: string
  serviceSlug: string
  title: string
  description: string
  h1: string
  content: string
  keywords: string[]
  locations: LocationSEO[]
}

// Target Locations
export const targetLocations = [
  { location: 'India', country: 'India', priority: 1 },
  { location: 'Gujarat', country: 'India', priority: 2 },
  { location: 'Ahmedabad', country: 'India', priority: 3 },
  { location: 'Dubai', country: 'UAE', priority: 4 },
  { location: 'USA', country: 'United States', priority: 5 },
  { location: 'Australia', country: 'Australia', priority: 6 },
  { location: 'Worldwide', country: 'Global', priority: 7 },
]

// Main Services
export const mainServices = [
  {
    name: 'Software Development',
    slug: 'custom-software-development',
    keywords: ['software development', 'custom software', 'enterprise software', 'application development']
  },
  {
    name: 'AI Development Services',
    slug: 'ai-development-services',
    keywords: ['AI development', 'artificial intelligence', 'machine learning', 'AI solutions', 'LLM integration']
  },
  {
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    keywords: ['digital marketing', 'online marketing', 'marketing agency', 'brand marketing']
  },
  {
    name: 'Web Development',
    slug: 'web-application-development',
    keywords: ['web development', 'web application', 'website development', 'responsive web design']
  },
  {
    name: 'Mobile App Development',
    slug: 'mobile-app-development',
    keywords: ['mobile app development', 'iOS development', 'Android development', 'mobile applications']
  },
  {
    name: 'SEO Services',
    slug: 'seo',
    keywords: ['SEO services', 'search engine optimization', 'SEO company', 'organic search']
  },
  {
    name: 'PPC Services',
    slug: 'ppc',
    keywords: ['PPC services', 'pay per click', 'Google Ads', 'advertising services']
  },
]

// Generate unique location-based SEO content
export function generateLocationSEO(
  serviceName: string,
  location: string,
  country: string
): LocationSEO {
  const isWorldwide = location === 'Worldwide'
  const locationText = isWorldwide ? 'worldwide' : `in ${location}`
  const countryText = isWorldwide ? 'globally' : `in ${country}`

  return {
    location,
    country,
    title: `Best ${serviceName} Company ${locationText.charAt(0).toUpperCase() + locationText.slice(1)} | TruVixo™`,
    description: `TruVixo is recognized as the best ${serviceName.toLowerCase()} company ${locationText}. We deliver exceptional ${serviceName.toLowerCase()} services ${countryText} with proven expertise, innovative solutions, and client-focused approach. Trusted by businesses ${locationText} for reliable, scalable, and cost-effective ${serviceName.toLowerCase()} solutions.`,
    h1: `Best ${serviceName} Company ${locationText.charAt(0).toUpperCase() + locationText.slice(1)}`,
    content: `When businesses ${locationText} need exceptional ${serviceName.toLowerCase()} services, they turn to TruVixo. Our team of expert professionals has established a strong reputation ${countryText} for delivering innovative ${serviceName.toLowerCase()} solutions that drive real business results. 

As a leading ${serviceName.toLowerCase()} company ${locationText}, we understand the unique challenges and opportunities that businesses face ${countryText}. Our comprehensive approach combines cutting-edge technology, industry best practices, and deep market knowledge to provide ${serviceName.toLowerCase()} services that exceed expectations.

Whether you're a startup ${locationText} looking to build your first product or an established enterprise seeking to scale, TruVixo offers the expertise and resources you need. Our track record ${countryText} speaks for itself - we've helped numerous businesses ${locationText} achieve their goals through strategic ${serviceName.toLowerCase()} solutions.

What sets us apart ${locationText} is our commitment to excellence, transparent communication, and results-driven methodology. We work closely with clients ${countryText} to understand their specific needs and deliver customized ${serviceName.toLowerCase()} services that align with their business objectives.`,
    keywords: [
      `best ${serviceName.toLowerCase()} company ${locationText}`,
      `${serviceName.toLowerCase()} company ${locationText}`,
      `top ${serviceName.toLowerCase()} agency ${locationText}`,
      `${serviceName.toLowerCase()} services ${locationText}`,
      `professional ${serviceName.toLowerCase()} ${locationText}`,
      `expert ${serviceName.toLowerCase()} ${locationText}`,
      `${serviceName.toLowerCase()} solutions ${locationText}`,
    ]
  }
}

// Generate service-based SEO content
export function generateServiceSEO(serviceName: string, serviceSlug: string): ServiceSEO {
  const locations = targetLocations.map(loc => 
    generateLocationSEO(serviceName, loc.location, loc.country)
  )

  return {
    serviceName,
    serviceSlug,
    title: `Best ${serviceName} Company | India, Gujarat, Ahmedabad, Dubai, USA, Australia & Worldwide | TruVixo™`,
    description: `TruVixo is the best ${serviceName.toLowerCase()} company in India, Gujarat, Ahmedabad, Dubai, USA, Australia, and worldwide. We provide comprehensive ${serviceName.toLowerCase()} services with proven expertise, innovative solutions, and exceptional results. Trusted by businesses globally.`,
    h1: `Best ${serviceName} Company in India, Gujarat, Ahmedabad, Dubai, USA, Australia & Worldwide`,
    content: `TruVixo stands out as the premier ${serviceName.toLowerCase()} company, serving clients across India, Gujarat, Ahmedabad, Dubai, USA, Australia, and worldwide. Our comprehensive ${serviceName.toLowerCase()} services are designed to help businesses achieve their goals through innovative solutions and expert execution.

With a proven track record spanning multiple countries and industries, we've established ourselves as a trusted partner for businesses seeking exceptional ${serviceName.toLowerCase()} services. Our team combines deep technical expertise with strategic thinking to deliver results that drive growth and success.

Whether you're located in India, operating from Gujarat or Ahmedabad, expanding to Dubai, serving the USA market, reaching customers in Australia, or running a global business, TruVixo provides ${serviceName.toLowerCase()} services tailored to your specific needs and market requirements.`,
    keywords: [
      `best ${serviceName.toLowerCase()} company`,
      `${serviceName.toLowerCase()} services`,
      `top ${serviceName.toLowerCase()} agency`,
      `professional ${serviceName.toLowerCase()}`,
      `expert ${serviceName.toLowerCase()}`,
      `${serviceName.toLowerCase()} solutions`,
      `${serviceName.toLowerCase()} company in india`,
      `${serviceName.toLowerCase()} company in gujarat`,
      `${serviceName.toLowerCase()} company in ahmedabad`,
      `${serviceName.toLowerCase()} company in dubai`,
      `${serviceName.toLowerCase()} company in usa`,
      `${serviceName.toLowerCase()} company in australia`,
    ],
    locations
  }
}

// Main company SEO with all locations
export const companySEO = {
  title: 'Best Software Development & Digital Marketing Agency | India, Gujarat, Ahmedabad, Dubai, USA, Australia & Worldwide | TruVixo™',
  description: 'TruVixo is the best software development and digital marketing agency in India, Gujarat, Ahmedabad, Dubai, USA, Australia, and worldwide. We provide comprehensive AI development, web development, mobile apps, SEO, PPC, and digital marketing services. Top-rated agency with proven results and global expertise.',
  h1: 'Best Software Development & Digital Marketing Agency in India, Gujarat, Ahmedabad, Dubai, USA, Australia & Worldwide',
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
  content: `TruVixo has established itself as the leading software development and digital marketing agency, serving clients across India, Gujarat, Ahmedabad, Dubai, USA, Australia, and worldwide. Our comprehensive suite of services combines cutting-edge technology with strategic marketing expertise to help businesses achieve exceptional growth and success.

With a strong presence in India, particularly in Gujarat and Ahmedabad, and expanding reach to Dubai, USA, Australia, and global markets, we bring together the best of both worlds - innovative software development and data-driven digital marketing strategies.

Our team of expert developers, designers, marketers, and strategists work collaboratively to deliver solutions that not only meet but exceed client expectations. Whether you're a startup looking to build your first product or an established enterprise seeking to scale, TruVixo provides the expertise and resources you need to succeed.

What sets us apart is our commitment to excellence, transparent communication, and results-driven methodology. We understand that every business is unique, which is why we take a customized approach to every project, ensuring that our solutions align perfectly with your business objectives and market requirements.`
}

// Technology-based SEO
export const technologySEO = {
  'AI & Machine Learning': {
    title: 'Best AI & Machine Learning Development Company | India, Gujarat, Ahmedabad, Dubai, USA, Australia & Worldwide',
    description: 'TruVixo is the best AI and machine learning development company in India, Gujarat, Ahmedabad, Dubai, USA, Australia, and worldwide. Expert AI solutions, ML models, LLM integration, and intelligent automation services.',
    keywords: [
      'best AI development company',
      'machine learning development',
      'AI solutions company',
      'LLM integration services',
      'AI development in india',
      'AI development in gujarat',
      'AI development in ahmedabad',
      'AI development in dubai',
      'AI development in usa',
      'AI development in australia',
    ]
  },
  'Web Technologies': {
    title: 'Best Web Development Company | India, Gujarat, Ahmedabad, Dubai, USA, Australia & Worldwide',
    description: 'TruVixo is the best web development company in India, Gujarat, Ahmedabad, Dubai, USA, Australia, and worldwide. Expert React, Next.js, Vue, Angular development and modern web solutions.',
    keywords: [
      'best web development company',
      'React development company',
      'Next.js development',
      'web application development',
      'web development in india',
      'web development in gujarat',
      'web development in ahmedabad',
      'web development in dubai',
      'web development in usa',
      'web development in australia',
    ]
  },
  'Mobile Technologies': {
    title: 'Best Mobile App Development Company | India, Gujarat, Ahmedabad, Dubai, USA, Australia & Worldwide',
    description: 'TruVixo is the best mobile app development company in India, Gujarat, Ahmedabad, Dubai, USA, Australia, and worldwide. Expert iOS, Android, React Native, and Flutter development.',
    keywords: [
      'best mobile app development company',
      'iOS development company',
      'Android development company',
      'React Native development',
      'mobile app development in india',
      'mobile app development in gujarat',
      'mobile app development in ahmedabad',
      'mobile app development in dubai',
      'mobile app development in usa',
      'mobile app development in australia',
    ]
  }
}

