import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://truvixo.com'
  const now = new Date()
  
  // Main pages - Highest priority for core pages
  const mainPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/technology`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/hire`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/industry`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/our-work`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/ai`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/careers`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/our-approach`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/privacy`, priority: 0.5, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/terms`, priority: 0.5, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/cancellation-refund`, priority: 0.5, changeFrequency: 'yearly' as const },
  ]

  // Service pages - All services with high priority for SEO
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

  // Hire pages - All hiring pages
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

  // Industry pages - All industry-specific pages
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

  // Technology pages - All technology stack pages
  const technologySlugs = [
    'frontend',
    'backend',
    'mobile',
    'ai-ml',
    'cloud-devops',
    'database',
    'tools-integrations'
  ]

  // Project/Portfolio pages - All case studies
  const projectSlugs = [
    'nova-logistics',
    'brightedge-healthcare-analytics',
    'urbanmint-property-platform',
    'padmavat-construction-management'
  ]

  // Generate service pages with proper metadata
  const servicePages = serviceSlugs.map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85, // High priority for service pages (important for SEO)
  }))

  // Generate hire pages with proper metadata
  const hirePages = hireSlugs.map(slug => ({
    url: `${baseUrl}/hire/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8, // High priority for recruitment pages
  }))

  // Generate industry pages with proper metadata
  const industryPages = industrySlugs.map(slug => ({
    url: `${baseUrl}/industry/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85, // High priority for industry pages (important for targeting)
  }))

  // Generate technology pages with proper metadata
  const technologyPages = technologySlugs.map(slug => ({
    url: `${baseUrl}/technology/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8, // Good priority for technology pages
  }))

  // Generate project pages with proper metadata
  const projectPages = projectSlugs.map(slug => ({
    url: `${baseUrl}/our-work/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75, // Good priority for portfolio/case study pages
  }))
  
  // Combine all pages for comprehensive sitemap
  const allPages = [
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

  // Return sorted by priority (highest first) for better crawling efficiency
  // This helps search engines prioritize important pages
  return allPages.sort((a, b) => (b.priority || 0) - (a.priority || 0))
}
