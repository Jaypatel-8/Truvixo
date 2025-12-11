import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://truvixo.com'
  const now = new Date()
  
  // Main pages
  const mainPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/our-work`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/ai`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/hire`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/industry`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/technology`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/careers`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/our-approach`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/products`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/work`, priority: 0.7, changeFrequency: 'weekly' as const },
  ]

  // Service pages
  const serviceSlugs = [
    'custom-software-development',
    'ai-development-services',
    'mobile-app-development',
    'web-application-development',
    'saas-product-development',
    'enterprise-software-development',
    'api-development-integration',
    'cms-development',
    'ecommerce-development',
    'legacy-app-modernization',
    'maintenance-support',
    'machine-learning-model-development',
    'seo',
    'ppc',
    'smm',
    'performance-marketing',
    'email-marketing',
    'cro'
  ]

  // Hire pages
  const hireSlugs = [
    'ai-ml-engineers',
    'full-stack-developers',
    'backend-developers',
    'frontend-developers',
    'mobile-developers',
    'devops-engineers',
    'qa-engineers',
    'ui-ux-designers',
    'project-managers',
    'dedicated-teams'
  ]

  // Industry pages
  const industrySlugs = [
    'fintech',
    'healthcare',
    'retail-ecommerce',
    'education',
    'logistics',
    'real-estate',
    'manufacturing',
    'travel-hospitality'
  ]

  // Technology pages
  const technologySlugs = [
    'frontend',
    'backend',
    'mobile',
    'ai-ml',
    'cloud-devops',
    'database',
    'tools-integrations'
  ]

  // Project pages
  const projectSlugs = [
    'nova-logistics',
    'brightedge-healthcare-analytics',
    'urbanmint-property-platform',
    'padmavat-construction-management'
  ]

  const servicePages = serviceSlugs.map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const hirePages = hireSlugs.map(slug => ({
    url: `${baseUrl}/hire/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const industryPages = industrySlugs.map(slug => ({
    url: `${baseUrl}/industry/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const technologyPages = technologySlugs.map(slug => ({
    url: `${baseUrl}/technology/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const projectPages = projectSlugs.map(slug => ({
    url: `${baseUrl}/our-work/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [
    ...mainPages.map(page => ({
      url: page.url,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...servicePages,
    ...hirePages,
    ...industryPages,
    ...technologyPages,
    ...projectPages,
  ]
}
