// Server-only static data for SaaS Product Development page
export const saasProductDevelopmentData = {
  hero: {
    badge: {
      iconName: 'Cloud',
      text: 'SaaS Product Development'
    },
    title: 'SaaS Product',
    hollowText: 'Development',
    description: 'Build scalable, cloud-based software-as-a-service products that generate recurring revenue. Our SaaS development expertise includes multi-tenancy architecture, subscription management, and scalable infrastructure to help you launch and grow your SaaS business.'
  },
  services: [
    {
      title: 'Multi-Tenant Architecture',
      description: 'Build scalable SaaS platforms with secure multi-tenant architecture',
      iconName: 'Cloud',
      color: '#5e2cb6'
    },
    {
      title: 'Subscription Management',
      description: 'Implement flexible subscription billing and payment processing',
      iconName: 'CreditCard',
      color: '#c91a6f'
    },
    {
      title: 'API Development',
      description: 'Build robust APIs for integrations and third-party connections',
      iconName: 'Code',
      color: '#d97706'
    },
    {
      title: 'User Management',
      description: 'Comprehensive user authentication, authorization, and profile management',
      iconName: 'Users',
      color: '#059669'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Built-in analytics dashboards and reporting features',
      iconName: 'BarChart',
      color: '#5e2cb6'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud deployment on AWS, Azure, or GCP',
      iconName: 'Server',
      color: '#c91a6f'
    }
  ],
  whyChooseUs: [
    {
      iconName: 'Cloud',
      title: 'Scalable Architecture',
      description: 'Built to scale from startup to enterprise',
      color: '#5e2cb6'
    },
    {
      iconName: 'Zap',
      title: 'Fast Time to Market',
      description: 'Rapid development and deployment cycles',
      color: '#c91a6f'
    },
    {
      iconName: 'Shield',
      title: 'Security First',
      description: 'Enterprise-grade security and compliance',
      color: '#d97706'
    },
    {
      iconName: 'TrendingUp',
      title: 'Revenue Optimization',
      description: 'Built-in subscription and billing management',
      color: '#059669'
    }
  ],
  technologies: [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'Stripe', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/stripe.svg', color: '#635BFF', category: 'backend' as const }
  ],
  processSteps: [
    {
      title: 'Product Strategy',
      description: 'Define product vision, market positioning, and business model',
      iconName: 'Target'
    },
    {
      title: 'Architecture Design',
      description: 'Design scalable multi-tenant architecture and infrastructure',
      iconName: 'Layers'
    },
    {
      title: 'Development',
      description: 'Build SaaS platform with agile methodology',
      iconName: 'Code'
    },
    {
      title: 'Subscription Integration',
      description: 'Implement billing, payments, and subscription management',
      iconName: 'CreditCard'
    },
    {
      title: 'Testing & QA',
      description: 'Comprehensive testing including security and performance',
      iconName: 'Shield'
    },
    {
      title: 'Launch & Scale',
      description: 'Deploy to production and scale infrastructure',
      iconName: 'Rocket'
    }
  ],
  industries: [
    { name: 'SaaS', iconName: 'Cloud', color: '#5e2cb6' },
    { name: 'Fintech', iconName: 'Building2', color: '#c91a6f' },
    { name: 'Healthcare', iconName: 'Heart', color: '#d97706' },
    { name: 'Education', iconName: 'GraduationCap', color: '#059669' },
    { name: 'Real Estate', iconName: 'Home', color: '#5e2cb6' },
    { name: 'E-commerce', iconName: 'ShoppingCart', color: '#c91a6f' }
  ],
  benefits: [
    {
      iconName: 'TrendingUp',
      title: 'Recurring Revenue',
      description: 'SaaS models generate predictable recurring revenue through subscriptions, providing stable cash flow and growth potential.',
      color: '#5e2cb6'
    },
    {
      iconName: 'Cloud',
      title: 'Scalable Infrastructure',
      description: 'Cloud-based architecture scales automatically with user growth, handling increased load without performance issues.',
      color: '#c91a6f'
    },
    {
      iconName: 'Zap',
      title: 'Rapid Updates',
      description: 'Deploy updates instantly to all users without manual installations, ensuring everyone has the latest features.',
      color: '#d97706'
    },
    {
      iconName: 'Shield',
      title: 'Centralized Security',
      description: 'Security updates and patches are managed centrally, protecting all users simultaneously.',
      color: '#059669'
    },
    {
      iconName: 'BarChart',
      title: 'Data-Driven Insights',
      description: 'Built-in analytics provide valuable user behavior insights to improve product and business decisions.',
      color: '#5e2cb6'
    },
    {
      iconName: 'Globe',
      title: 'Global Accessibility',
      description: 'Access your SaaS product from anywhere, on any device, enabling global market reach.',
      color: '#c91a6f'
    }
  ],
  useCases: [
    {
      title: 'Business Management SaaS',
      description: 'Build comprehensive business management platforms with CRM, project management, and analytics features.',
      gradient: 'from-[#5e2cb6]/5 to-[#c91a6f]/5',
      borderColor: '#5e2cb6',
      items: [
        'Customer relationship management',
        'Project and task management',
        'Team collaboration tools',
        'Business intelligence dashboards'
      ]
    },
    {
      title: 'Industry-Specific SaaS',
      description: 'Create specialized SaaS solutions for healthcare, finance, education, and other industries.',
      gradient: 'from-[#d97706]/5 to-[#059669]/5',
      borderColor: '#d97706',
      items: [
        'Healthcare management systems',
        'Financial planning tools',
        'Learning management systems',
        'Real estate platforms'
      ]
    }
  ],
  processTitle: 'SaaS Development Process',
  processSubtitle: 'From concept to launch, we build scalable SaaS products that drive recurring revenue',
  getQuote: {
    title: 'Ready to Build Your',
    hollowText: 'SaaS Product?',
    description: 'Get in touch and let\'s discuss your SaaS product vision.'
  },
  contact: {
    title: 'Get in Touch',
    description: 'Have a SaaS idea? Let\'s discuss how we can help bring it to market.'
  },
  seoServiceName: 'SaaS Product Development'
} as const


