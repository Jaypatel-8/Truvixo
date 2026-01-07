// Utility to generate related links for SEO and crawlability

export interface RelatedLink {
  title: string
  href: string
  description?: string
}

// Service-related links mapping
export const getServiceRelatedLinks = (serviceSlug: string): RelatedLink[] => {
  const allServices: Record<string, RelatedLink[]> = {
    'seo': [
      { title: 'PPC Services', href: '/services/ppc', description: 'Pay-per-click advertising campaigns' },
      { title: 'SMM Services', href: '/services/smm', description: 'Social media marketing solutions' },
      { title: 'CRO Services', href: '/services/cro', description: 'Conversion rate optimization' },
      { title: 'Performance Marketing', href: '/services/performance-marketing', description: 'Data-driven marketing strategies' },
      { title: 'Email Marketing', href: '/services/email-marketing', description: 'Email campaign management' },
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Build optimized websites' }
    ],
    'ppc': [
      { title: 'SEO Services', href: '/services/seo', description: 'Search engine optimization' },
      { title: 'CRO Services', href: '/services/cro', description: 'Conversion rate optimization' },
      { title: 'SMM Services', href: '/services/smm', description: 'Social media marketing' },
      { title: 'Performance Marketing', href: '/services/performance-marketing', description: 'Comprehensive marketing solutions' },
      { title: 'Email Marketing', href: '/services/email-marketing', description: 'Email campaign services' }
    ],
    'smm': [
      { title: 'SEO Services', href: '/services/seo', description: 'Search engine optimization' },
      { title: 'PPC Services', href: '/services/ppc', description: 'Pay-per-click advertising' },
      { title: 'CRO Services', href: '/services/cro', description: 'Conversion rate optimization' },
      { title: 'Performance Marketing', href: '/services/performance-marketing', description: 'Integrated marketing strategies' },
      { title: 'Email Marketing', href: '/services/email-marketing', description: 'Email marketing campaigns' }
    ],
    'cro': [
      { title: 'SEO Services', href: '/services/seo', description: 'Search engine optimization' },
      { title: 'PPC Services', href: '/services/ppc', description: 'Pay-per-click advertising' },
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Optimized web applications' },
      { title: 'E-commerce Development', href: '/services/ecommerce-development', description: 'E-commerce solutions' },
      { title: 'Performance Marketing', href: '/services/performance-marketing', description: 'Data-driven marketing' }
    ],
    'custom-software-development': [
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Custom web applications' },
      { title: 'Mobile App Development', href: '/services/mobile-app-development', description: 'Mobile solutions' },
      { title: 'Enterprise Software Development', href: '/services/enterprise-software-development', description: 'Enterprise solutions' },
      { title: 'SaaS Product Development', href: '/services/saas-product-development', description: 'SaaS platforms' },
      { title: 'API Development & Integration', href: '/services/api-development-integration', description: 'API services' },
      { title: 'Legacy App Modernization', href: '/services/legacy-app-modernization', description: 'Modernize existing systems' }
    ],
    'web-application-development': [
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Tailored software solutions' },
      { title: 'E-commerce Development', href: '/services/ecommerce-development', description: 'E-commerce platforms' },
      { title: 'CMS Development', href: '/services/cms-development', description: 'Content management systems' },
      { title: 'SaaS Product Development', href: '/services/saas-product-development', description: 'SaaS applications' },
      { title: 'SEO Services', href: '/services/seo', description: 'Optimize your web app' },
      { title: 'Maintenance & Support', href: '/services/maintenance-support', description: 'Ongoing support' }
    ],
    'mobile-app-development': [
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Web solutions' },
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Custom development' },
      { title: 'AI Development Services', href: '/services/ai-development-services', description: 'AI-powered apps' },
      { title: 'Enterprise Software Development', href: '/services/enterprise-software-development', description: 'Enterprise mobile apps' },
      { title: 'Maintenance & Support', href: '/services/maintenance-support', description: 'App maintenance' }
    ],
    'ai-development-services': [
      { title: 'Machine Learning Model Development', href: '/services/machine-learning-model-development', description: 'ML model development' },
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'AI-powered software' },
      { title: 'Enterprise Software Development', href: '/services/enterprise-software-development', description: 'Enterprise AI solutions' },
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'AI web applications' },
      { title: 'Hire AI/ML Engineers', href: '/hire/ai-ml-engineers', description: 'Expert AI developers' }
    ],
    'machine-learning-model-development': [
      { title: 'AI Development Services', href: '/services/ai-development-services', description: 'AI solutions' },
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'ML-powered software' },
      { title: 'Enterprise Software Development', href: '/services/enterprise-software-development', description: 'Enterprise ML' },
      { title: 'Hire AI/ML Engineers', href: '/hire/ai-ml-engineers', description: 'ML experts' }
    ],
    'ecommerce-development': [
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Web applications' },
      { title: 'CMS Development', href: '/services/cms-development', description: 'Content management' },
      { title: 'CRO Services', href: '/services/cro', description: 'Optimize conversions' },
      { title: 'SEO Services', href: '/services/seo', description: 'E-commerce SEO' },
      { title: 'PPC Services', href: '/services/ppc', description: 'E-commerce advertising' },
      { title: 'Maintenance & Support', href: '/services/maintenance-support', description: 'E-commerce support' }
    ],
    'enterprise-software-development': [
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Custom solutions' },
      { title: 'SaaS Product Development', href: '/services/saas-product-development', description: 'SaaS platforms' },
      { title: 'API Development & Integration', href: '/services/api-development-integration', description: 'API integration' },
      { title: 'Legacy App Modernization', href: '/services/legacy-app-modernization', description: 'Modernize systems' },
      { title: 'Maintenance & Support', href: '/services/maintenance-support', description: 'Enterprise support' }
    ],
    'saas-product-development': [
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Web applications' },
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Custom SaaS' },
      { title: 'Enterprise Software Development', href: '/services/enterprise-software-development', description: 'Enterprise SaaS' },
      { title: 'API Development & Integration', href: '/services/api-development-integration', description: 'SaaS APIs' },
      { title: 'Maintenance & Support', href: '/services/maintenance-support', description: 'SaaS maintenance' }
    ],
    'api-development-integration': [
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Custom solutions' },
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Web apps' },
      { title: 'Enterprise Software Development', href: '/services/enterprise-software-development', description: 'Enterprise integration' },
      { title: 'Mobile App Development', href: '/services/mobile-app-development', description: 'Mobile APIs' }
    ],
    'cms-development': [
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Web applications' },
      { title: 'E-commerce Development', href: '/services/ecommerce-development', description: 'E-commerce CMS' },
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Custom CMS' },
      { title: 'SEO Services', href: '/services/seo', description: 'CMS SEO optimization' }
    ],
    'legacy-app-modernization': [
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Modern solutions' },
      { title: 'Enterprise Software Development', href: '/services/enterprise-software-development', description: 'Enterprise modernization' },
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Web modernization' },
      { title: 'Maintenance & Support', href: '/services/maintenance-support', description: 'Ongoing support' }
    ],
    'maintenance-support': [
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Development services' },
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Web development' },
      { title: 'Enterprise Software Development', href: '/services/enterprise-software-development', description: 'Enterprise services' },
      { title: 'Legacy App Modernization', href: '/services/legacy-app-modernization', description: 'Modernization services' }
    ],
    'performance-marketing': [
      { title: 'SEO Services', href: '/services/seo', description: 'Search optimization' },
      { title: 'PPC Services', href: '/services/ppc', description: 'Paid advertising' },
      { title: 'SMM Services', href: '/services/smm', description: 'Social media' },
      { title: 'CRO Services', href: '/services/cro', description: 'Conversion optimization' },
      { title: 'Email Marketing', href: '/services/email-marketing', description: 'Email campaigns' }
    ],
    'email-marketing': [
      { title: 'SEO Services', href: '/services/seo', description: 'Search optimization' },
      { title: 'PPC Services', href: '/services/ppc', description: 'Paid advertising' },
      { title: 'SMM Services', href: '/services/smm', description: 'Social media marketing' },
      { title: 'CRO Services', href: '/services/cro', description: 'Conversion optimization' },
      { title: 'Performance Marketing', href: '/services/performance-marketing', description: 'Integrated marketing' }
    ]
  }

  return allServices[serviceSlug] || [
    { title: 'All Services', href: '/services', description: 'Browse all our services' },
    { title: 'Contact Us', href: '/contact', description: 'Get in touch' },
    { title: 'Our Work', href: '/our-work', description: 'View our portfolio' }
  ]
}

// Industry-related links
export const getIndustryRelatedLinks = (industrySlug: string): RelatedLink[] => {
  const allIndustries: Record<string, RelatedLink[]> = {
    'healthcare': [
      { title: 'Fintech Solutions', href: '/industry/fintech', description: 'Financial technology services' },
      { title: 'Education Solutions', href: '/industry/education', description: 'Educational technology' },
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Healthcare software' },
      { title: 'AI Development Services', href: '/services/ai-development-services', description: 'AI for healthcare' },
      { title: 'Enterprise Software', href: '/services/enterprise-software-development', description: 'Enterprise healthcare solutions' }
    ],
    'fintech': [
      { title: 'Healthcare Solutions', href: '/industry/healthcare', description: 'Healthcare technology' },
      { title: 'Retail & eCommerce', href: '/industry/retail-ecommerce', description: 'E-commerce solutions' },
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Fintech software' },
      { title: 'Enterprise Software', href: '/services/enterprise-software-development', description: 'Enterprise fintech' },
      { title: 'API Development', href: '/services/api-development-integration', description: 'Fintech APIs' }
    ],
    'retail-ecommerce': [
      { title: 'E-commerce Development', href: '/services/ecommerce-development', description: 'E-commerce platforms' },
      { title: 'CRO Services', href: '/services/cro', description: 'Conversion optimization' },
      { title: 'SEO Services', href: '/services/seo', description: 'E-commerce SEO' },
      { title: 'PPC Services', href: '/services/ppc', description: 'E-commerce advertising' },
      { title: 'Fintech Solutions', href: '/industry/fintech', description: 'Payment solutions' }
    ],
    'education': [
      { title: 'Healthcare Solutions', href: '/industry/healthcare', description: 'Healthcare technology' },
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'EdTech software' },
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Learning platforms' },
      { title: 'CMS Development', href: '/services/cms-development', description: 'Content management' }
    ],
    'logistics': [
      { title: 'Manufacturing Solutions', href: '/industry/manufacturing', description: 'Manufacturing technology' },
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Logistics software' },
      { title: 'Enterprise Software', href: '/services/enterprise-software-development', description: 'Enterprise logistics' },
      { title: 'API Development', href: '/services/api-development-integration', description: 'Logistics APIs' }
    ],
    'real-estate': [
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Real estate software' },
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Property platforms' },
      { title: 'CMS Development', href: '/services/cms-development', description: 'Property management' },
      { title: 'Fintech Solutions', href: '/industry/fintech', description: 'Payment solutions' }
    ],
    'manufacturing': [
      { title: 'Logistics Solutions', href: '/industry/logistics', description: 'Logistics technology' },
      { title: 'Enterprise Software', href: '/services/enterprise-software-development', description: 'Manufacturing software' },
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Custom solutions' },
      { title: 'AI Development Services', href: '/services/ai-development-services', description: 'AI for manufacturing' }
    ],
    'travel-hospitality': [
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Travel software' },
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Booking platforms' },
      { title: 'Mobile App Development', href: '/services/mobile-app-development', description: 'Travel apps' },
      { title: 'Retail & eCommerce', href: '/industry/retail-ecommerce', description: 'E-commerce solutions' }
    ]
  }

  return allIndustries[industrySlug] || [
    { title: 'All Industries', href: '/industry', description: 'Browse all industries' },
    { title: 'Our Services', href: '/services', description: 'View our services' },
    { title: 'Contact Us', href: '/contact', description: 'Get in touch' }
  ]
}

// Hire-related links
export const getHireRelatedLinks = (hireSlug: string): RelatedLink[] => {
  const allHire: Record<string, RelatedLink[]> = {
    'frontend-developers': [
      { title: 'Hire Backend Developers', href: '/hire/backend-developers', description: 'Backend expertise' },
      { title: 'Hire Full-Stack Developers', href: '/hire/full-stack-developers', description: 'Full-stack teams' },
      { title: 'Hire UI/UX Designers', href: '/hire/ui-ux-designers', description: 'Design experts' },
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Web development services' },
      { title: 'Hire Dedicated Teams', href: '/hire/dedicated-teams', description: 'Dedicated development teams' }
    ],
    'backend-developers': [
      { title: 'Hire Frontend Developers', href: '/hire/frontend-developers', description: 'Frontend expertise' },
      { title: 'Hire Full-Stack Developers', href: '/hire/full-stack-developers', description: 'Full-stack teams' },
      { title: 'Hire DevOps Engineers', href: '/hire/devops-engineers', description: 'DevOps experts' },
      { title: 'API Development & Integration', href: '/services/api-development-integration', description: 'API services' },
      { title: 'Hire Dedicated Teams', href: '/hire/dedicated-teams', description: 'Dedicated teams' }
    ],
    'full-stack-developers': [
      { title: 'Hire Frontend Developers', href: '/hire/frontend-developers', description: 'Frontend specialists' },
      { title: 'Hire Backend Developers', href: '/hire/backend-developers', description: 'Backend specialists' },
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Development services' },
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Web development' },
      { title: 'Hire Dedicated Teams', href: '/hire/dedicated-teams', description: 'Complete teams' }
    ],
    'mobile-developers': [
      { title: 'Hire Frontend Developers', href: '/hire/frontend-developers', description: 'Frontend expertise' },
      { title: 'Mobile App Development', href: '/services/mobile-app-development', description: 'Mobile services' },
      { title: 'Hire UI/UX Designers', href: '/hire/ui-ux-designers', description: 'Mobile design' },
      { title: 'Hire QA Engineers', href: '/hire/qa-engineers', description: 'Mobile testing' }
    ],
    'ai-ml-engineers': [
      { title: 'AI Development Services', href: '/services/ai-development-services', description: 'AI services' },
      { title: 'Machine Learning Model Development', href: '/services/machine-learning-model-development', description: 'ML services' },
      { title: 'Hire Full-Stack Developers', href: '/hire/full-stack-developers', description: 'Full-stack teams' },
      { title: 'Hire Dedicated Teams', href: '/hire/dedicated-teams', description: 'AI teams' }
    ],
    'devops-engineers': [
      { title: 'Hire Backend Developers', href: '/hire/backend-developers', description: 'Backend teams' },
      { title: 'Hire Full-Stack Developers', href: '/hire/full-stack-developers', description: 'Full-stack teams' },
      { title: 'Enterprise Software Development', href: '/services/enterprise-software-development', description: 'Enterprise services' },
      { title: 'Hire Dedicated Teams', href: '/hire/dedicated-teams', description: 'DevOps teams' }
    ],
    'qa-engineers': [
      { title: 'Hire Mobile Developers', href: '/hire/mobile-developers', description: 'Mobile teams' },
      { title: 'Hire Full-Stack Developers', href: '/hire/full-stack-developers', description: 'Development teams' },
      { title: 'Maintenance & Support', href: '/services/maintenance-support', description: 'Support services' }
    ],
    'ui-ux-designers': [
      { title: 'Hire Frontend Developers', href: '/hire/frontend-developers', description: 'Frontend teams' },
      { title: 'Hire Mobile Developers', href: '/hire/mobile-developers', description: 'Mobile teams' },
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Web design services' }
    ],
    'project-managers': [
      { title: 'Hire Dedicated Teams', href: '/hire/dedicated-teams', description: 'Complete teams' },
      { title: 'Hire Full-Stack Developers', href: '/hire/full-stack-developers', description: 'Development teams' },
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Development services' }
    ],
    'dedicated-teams': [
      { title: 'Hire Full-Stack Developers', href: '/hire/full-stack-developers', description: 'Full-stack teams' },
      { title: 'Hire Frontend Developers', href: '/hire/frontend-developers', description: 'Frontend teams' },
      { title: 'Hire Backend Developers', href: '/hire/backend-developers', description: 'Backend teams' },
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Development services' }
    ]
  }

  return allHire[hireSlug] || [
    { title: 'All Hiring Options', href: '/hire', description: 'Browse all positions' },
    { title: 'Our Services', href: '/services', description: 'View services' },
    { title: 'Contact Us', href: '/contact', description: 'Get in touch' }
  ]
}

// Technology-related links
export const getTechnologyRelatedLinks = (techSlug: string): RelatedLink[] => {
  const allTech: Record<string, RelatedLink[]> = {
    'frontend': [
      { title: 'Backend Technology', href: '/technology/backend', description: 'Backend solutions' },
      { title: 'Mobile Technology', href: '/technology/mobile', description: 'Mobile frameworks' },
      { title: 'Hire Frontend Developers', href: '/hire/frontend-developers', description: 'Frontend experts' },
      { title: 'Web Application Development', href: '/services/web-application-development', description: 'Web development' }
    ],
    'backend': [
      { title: 'Frontend Technology', href: '/technology/frontend', description: 'Frontend solutions' },
      { title: 'Database Technology', href: '/technology/database', description: 'Database solutions' },
      { title: 'Hire Backend Developers', href: '/hire/backend-developers', description: 'Backend experts' },
      { title: 'API Development & Integration', href: '/services/api-development-integration', description: 'API services' }
    ],
    'mobile': [
      { title: 'Frontend Technology', href: '/technology/frontend', description: 'Frontend frameworks' },
      { title: 'Hire Mobile Developers', href: '/hire/mobile-developers', description: 'Mobile experts' },
      { title: 'Mobile App Development', href: '/services/mobile-app-development', description: 'Mobile services' }
    ],
    'ai-ml': [
      { title: 'Backend Technology', href: '/technology/backend', description: 'Backend solutions' },
      { title: 'Hire AI/ML Engineers', href: '/hire/ai-ml-engineers', description: 'AI experts' },
      { title: 'AI Development Services', href: '/services/ai-development-services', description: 'AI services' }
    ],
    'cloud-devops': [
      { title: 'Backend Technology', href: '/technology/backend', description: 'Backend solutions' },
      { title: 'Database Technology', href: '/technology/database', description: 'Database solutions' },
      { title: 'Hire DevOps Engineers', href: '/hire/devops-engineers', description: 'DevOps experts' },
      { title: 'Enterprise Software Development', href: '/services/enterprise-software-development', description: 'Enterprise services' }
    ],
    'database': [
      { title: 'Backend Technology', href: '/technology/backend', description: 'Backend solutions' },
      { title: 'Cloud & DevOps', href: '/technology/cloud-devops', description: 'Cloud solutions' },
      { title: 'API Development & Integration', href: '/services/api-development-integration', description: 'API services' }
    ],
    'tools-integrations': [
      { title: 'API Development & Integration', href: '/services/api-development-integration', description: 'Integration services' },
      { title: 'Custom Software Development', href: '/services/custom-software-development', description: 'Custom solutions' }
    ]
  }

  return allTech[techSlug] || [
    { title: 'All Technologies', href: '/technology', description: 'Browse all technologies' },
    { title: 'Our Services', href: '/services', description: 'View services' }
  ]
}

// General related links for any page
export const getGeneralRelatedLinks = (): RelatedLink[] => {
  return [
    { title: 'All Services', href: '/services', description: 'Browse all our services' },
    { title: 'Our Work', href: '/our-work', description: 'View our portfolio' },
    { title: 'Hire Developers', href: '/hire', description: 'Hire expert developers' },
    { title: 'Industries', href: '/industry', description: 'Industry solutions' },
    { title: 'Technology Stack', href: '/technology', description: 'Technologies we use' },
    { title: 'Contact Us', href: '/contact', description: 'Get in touch with us' }
  ]
}


