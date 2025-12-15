import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Use env override to ensure sitemap host matches the deployed origin
  const site = (process.env.NEXT_PUBLIC_SITE_URL || 'https://truvixo.com').replace(/\/$/, '')
  const withTrailingSlash = (path: string) => {
    if (path === '') return `${site}/`
    return `${site}${path.endsWith('/') ? path : `${path}/`}`
  }

  const now = new Date()
  
  // Main pages - High priority for core pages (ensure trailing slash)
  const mainPages = [
    { url: withTrailingSlash(''), priority: 1.0, changeFrequency: 'daily' as const },
    { url: withTrailingSlash('/services'), priority: 0.9, changeFrequency: 'weekly' as const },
    { url: withTrailingSlash('/technology'), priority: 0.9, changeFrequency: 'weekly' as const },
    { url: withTrailingSlash('/hire'), priority: 0.9, changeFrequency: 'weekly' as const },
    { url: withTrailingSlash('/industry'), priority: 0.9, changeFrequency: 'weekly' as const },
    { url: withTrailingSlash('/our-work'), priority: 0.8, changeFrequency: 'weekly' as const },
    { url: withTrailingSlash('/ai'), priority: 0.8, changeFrequency: 'weekly' as const },
    { url: withTrailingSlash('/about'), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: withTrailingSlash('/contact'), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: withTrailingSlash('/blog'), priority: 0.7, changeFrequency: 'weekly' as const },
    { url: withTrailingSlash('/work'), priority: 0.7, changeFrequency: 'weekly' as const },
    { url: withTrailingSlash('/careers'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: withTrailingSlash('/our-approach'), priority: 0.7, changeFrequency: 'monthly' as const },
    { url: withTrailingSlash('/products'), priority: 0.7, changeFrequency: 'monthly' as const },
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

  // Service pages - High priority for SEO
  const servicePages = serviceSlugs.map(slug => ({
    url: withTrailingSlash(`/services/${slug}`),
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8, // Higher priority for service pages
  }))

  // Hire pages - High priority for recruitment
  const hirePages = hireSlugs.map(slug => ({
    url: withTrailingSlash(`/hire/${slug}`),
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8, // Higher priority for hire pages
  }))

  // Industry pages - High priority for industry targeting
  const industryPages = industrySlugs.map(slug => ({
    url: withTrailingSlash(`/industry/${slug}`),
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8, // Higher priority for industry pages
  }))

  const technologyPages = technologySlugs.map(slug => ({
    url: withTrailingSlash(`/technology/${slug}`),
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9, // Higher priority for technology pages
  }))

  // Project pages - Showcase portfolio
  const projectPages = projectSlugs.map(slug => ({
    url: withTrailingSlash(`/our-work/${slug}`),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7, // Increased priority for portfolio pages
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

  // Return sorted by priority (highest first) for better crawling
  return allPages.sort((a, b) => (b.priority || 0) - (a.priority || 0))
}
