// Structured Data (JSON-LD) for Technology Pages
// Improves SEO and helps Google understand the content

interface TechnologyStructuredDataProps {
  name: string
  description: string
  technologies: string[]
  services: string[]
  url: string
}

export function TechnologyStructuredData({
  name,
  description,
  technologies,
  services,
  url
}: TechnologyStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${name} Services - TruVixo`,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'TruVixo',
      url: 'https://truvixo.com',
      logo: 'https://truvixo.com/TruVixo.png',
      sameAs: [
        'https://www.linkedin.com/company/truvixo',
        'https://twitter.com/truvixo',
        'https://www.facebook.com/truvixo'
      ]
    },
    serviceType: name,
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${name} Services`,
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service
        }
      }))
    },
    knowsAbout: technologies,
    url: url
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

// Organization structured data for global SEO
export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TruVixo',
    url: 'https://truvixo.com',
    logo: 'https://truvixo.com/TruVixo.png',
    description: 'Leading software development and digital marketing agency providing AI development, web development, mobile app development, and technology services worldwide.',
    foundingDate: '2021',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '50+'
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide'
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '23.0225',
        longitude: '72.5714'
      }
    },
    knowsAbout: [
      'Software Development',
      'AI Development',
      'Machine Learning',
      'Web Development',
      'Mobile App Development',
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'Django',
      'TensorFlow',
      'PyTorch',
      'AWS',
      'Azure',
      'Docker',
      'Kubernetes',
      'MongoDB',
      'PostgreSQL',
      'React Native',
      'Flutter',
      'TypeScript',
      'Vue.js',
      'Angular'
    ],
    sameAs: [
      'https://www.linkedin.com/company/truvixo',
      'https://twitter.com/truvixo',
      'https://www.facebook.com/truvixo'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-63543-26412',
      contactType: 'Customer Service',
      email: 'sales@truvixo.com',
      areaServed: 'Worldwide',
      availableLanguage: ['English']
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

// WebSite structured data with search action
export function WebSiteStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TruVixo',
    url: 'https://truvixo.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://truvixo.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

