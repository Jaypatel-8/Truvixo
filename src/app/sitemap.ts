import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://truvixo.com'
  const currentDate = new Date()
  
  // Main pages
  const mainPages = [
    { url: baseUrl, priority: 1, changeFreq: 'weekly' },
    { url: `${baseUrl}/about`, priority: 0.8, changeFreq: 'monthly' },
    { url: `${baseUrl}/services`, priority: 0.9, changeFreq: 'weekly' },
    { url: `${baseUrl}/ai`, priority: 0.9, changeFreq: 'weekly' },
    { url: `${baseUrl}/hire`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/industry`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/technology`, priority: 0.8, changeFreq: 'monthly' },
    { url: `${baseUrl}/our-work`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/products`, priority: 0.7, changeFreq: 'monthly' },
    { url: `${baseUrl}/contact`, priority: 0.7, changeFreq: 'monthly' },
    { url: `${baseUrl}/blog`, priority: 0.7, changeFreq: 'weekly' },
    { url: `${baseUrl}/careers`, priority: 0.6, changeFreq: 'monthly' },
    { url: `${baseUrl}/partners`, priority: 0.6, changeFreq: 'monthly' },
    { url: `${baseUrl}/wiki`, priority: 0.6, changeFreq: 'monthly' },
  ]

  // Service pages
  const servicePages = [
    'custom-software-development',
    'web-application-development',
    'mobile-app-development',
    'saas-product-development',
    'enterprise-software-development',
    'api-development-integration',
    'ecommerce-development',
    'cms-development',
    'legacy-app-modernization',
    'maintenance-support',
    'ai-development-services',
    'machine-learning-model-development',
    'digital-transformation',
    'enterprise-software',
    'web-development',
    'website-design',
    'web-app-development',
    'web-portals',
    'spa',
    'cms-crm',
    'mobile-development',
    'android-development',
    'ios-development',
    'flutter-development',
    'react-native',
    'saas-development',
    'ai-ml-development',
    'custom-ai-models',
    'nlp-computer-vision',
    'predictive-analytics',
    'data-science',
    'data-engineering',
    'etl-warehousing',
    'bi-dashboards',
    'dataops-mlops',
    'ai-integration',
    'ai-apis',
    'vector-databases',
    'autonomous-agents',
    'iot-solutions',
    'retail-ecommerce',
    'education-elearning',
    'mvp-development',
    'ui-ux-design',
    'legacy-modernization'
  ]

  // AI pages
  const aiPages = [
    'solutions',
    'chatbots',
    'generative-ai',
    'agent-development',
    'consulting',
    'model-training',
    'iot'
  ]

  // Hire pages
  const hirePages = [
    'ai-developers',
    'generative-ai-engineers',
    'prompt-engineers',
    'ml-engineers',
    'full-stack-developers',
    'mern-developers',
    'backend-developers',
    'frontend-developers',
    'mobile-developers',
    'cross-platform-developers',
    'devops-engineers',
    'dedicated-teams'
  ]

  // Industry pages
  const industryPages = [
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
  const technologyPages = [
    'frontend',
    'backend',
    'mobile',
    'ai-ml',
    'cloud-devops',
    'database',
    'tools-integrations'
  ]

  // Build sitemap
  const sitemap: MetadataRoute.Sitemap = []

  // Add main pages
  mainPages.forEach(page => {
    sitemap.push({
      url: page.url,
      lastModified: currentDate,
      changeFrequency: page.changeFreq as any,
      priority: page.priority,
    })
  })

  // Add service pages
  servicePages.forEach(slug => {
    sitemap.push({
      url: `${baseUrl}/services/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Add AI pages
  aiPages.forEach(slug => {
    sitemap.push({
      url: `${baseUrl}/ai/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Add hire pages
  hirePages.forEach(slug => {
    sitemap.push({
      url: `${baseUrl}/hire/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Add industry pages
  industryPages.forEach(slug => {
    sitemap.push({
      url: `${baseUrl}/industry/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Add technology pages
  technologyPages.forEach(slug => {
    sitemap.push({
      url: `${baseUrl}/technology/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  return sitemap
}
