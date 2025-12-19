// Server-only static data for CMS Development page
export const cmsDevelopmentData = {
  hero: {
    badge: {
      iconName: 'FileText',
      text: 'CMS Development'
    },
    title: 'Custom CMS',
    hollowText: 'Development',
    description: 'Build powerful, flexible content management systems tailored to your needs. Our CMS solutions empower content creators while maintaining robust backend functionality, ensuring seamless content publishing, management, and optimization.'
  },
  services: [
    {
      title: 'Custom CMS Development',
      description: 'Tailored content management systems built to your specific requirements',
      iconName: 'FileText',
      color: '#5e2cb6'
    },
    {
      title: 'Headless CMS',
      description: 'API-first CMS solutions for modern multi-channel content delivery',
      iconName: 'Code',
      color: '#c91a6f'
    },
    {
      title: 'CMS Migration',
      description: 'Seamless migration from legacy CMS to modern platforms',
      iconName: 'ArrowRight',
      color: '#d97706'
    },
    {
      title: 'CMS Customization',
      description: 'Extend and customize existing CMS platforms with custom features',
      iconName: 'Settings',
      color: '#059669'
    },
    {
      title: 'Content Workflows',
      description: 'Design and implement content approval and publishing workflows',
      iconName: 'Workflow',
      color: '#5e2cb6'
    },
    {
      title: 'CMS Integration',
      description: 'Integrate CMS with third-party tools and services',
      iconName: 'Network',
      color: '#c91a6f'
    }
  ],
  whyChooseUs: [
    {
      iconName: 'FileText',
      title: 'Custom Solutions',
      description: 'CMS built specifically for your content needs and workflows',
      color: '#5e2cb6'
    },
    {
      iconName: 'Zap',
      title: 'Fast Performance',
      description: 'Optimized CMS for quick content loading and management',
      color: '#c91a6f'
    },
    {
      iconName: 'Shield',
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security with scalable architecture',
      color: '#d97706'
    },
    {
      iconName: 'Users',
      title: 'User-Friendly',
      description: 'Intuitive interfaces for content creators and editors',
      color: '#059669'
    }
  ],
  technologies: [
    { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg', color: '#21759B', category: 'backend' as const },
    { name: 'Strapi', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/strapi.svg', color: '#2F2E8B', category: 'backend' as const },
    { name: 'Contentful', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/contentful.svg', color: '#2478CC', category: 'backend' as const },
    { name: 'Sanity', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/sanity.svg', color: '#F03E2F', category: 'backend' as const },
    { name: 'Drupal', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-plain.svg', color: '#0678BE', category: 'backend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const }
  ],
  processSteps: [
    {
      title: 'Requirements Analysis',
      description: 'Analyze content needs, workflows, and user requirements',
      iconName: 'Target'
    },
    {
      title: 'CMS Architecture',
      description: 'Design CMS architecture and content structure',
      iconName: 'Layers'
    },
    {
      title: 'Development',
      description: 'Build CMS with custom features and integrations',
      iconName: 'Code'
    },
    {
      title: 'Content Migration',
      description: 'Migrate existing content to new CMS platform',
      iconName: 'ArrowRight'
    },
    {
      title: 'Testing & Training',
      description: 'Test functionality and train content editors',
      iconName: 'Shield'
    },
    {
      title: 'Launch & Support',
      description: 'Deploy CMS and provide ongoing support',
      iconName: 'Rocket'
    }
  ],
  industries: [
    { name: 'Publishing', iconName: 'FileText', color: '#5e2cb6' },
    { name: 'E-commerce', iconName: 'ShoppingCart', color: '#c91a6f' },
    { name: 'Healthcare', iconName: 'Heart', color: '#d97706' },
    { name: 'Education', iconName: 'GraduationCap', color: '#059669' },
    { name: 'Real Estate', iconName: 'Home', color: '#5e2cb6' },
    { name: 'Media', iconName: 'Users', color: '#c91a6f' }
  ],
  benefits: [
    {
      iconName: 'FileText',
      title: 'Content Control',
      description: 'Full control over content structure, presentation, and management. Custom CMS solutions allow you to organize content exactly how your business needs it.',
      color: '#5e2cb6'
    },
    {
      iconName: 'Zap',
      title: 'Faster Publishing',
      description: 'Streamlined content workflows enable faster content creation and publishing. Reduce time from content creation to publication.',
      color: '#c91a6f'
    },
    {
      iconName: 'Shield',
      title: 'Enhanced Security',
      description: 'Custom CMS solutions provide better security control compared to generic platforms. Implement security measures specific to your needs.',
      color: '#d97706'
    },
    {
      iconName: 'TrendingUp',
      title: 'SEO Optimization',
      description: 'Built-in SEO features help improve search engine rankings. Custom CMS can include advanced SEO tools and optimization capabilities.',
      color: '#059669'
    },
    {
      iconName: 'Users',
      title: 'User Experience',
      description: 'Intuitive interfaces designed for your content team. Custom CMS can match your team\'s workflow and preferences.',
      color: '#5e2cb6'
    },
    {
      iconName: 'Rocket',
      title: 'Scalability',
      description: 'CMS that grows with your content needs. Handle increasing content volume and complexity without performance issues.',
      color: '#c91a6f'
    }
  ],
  useCases: [
    {
      title: 'Corporate Websites',
      description: 'Build CMS for corporate websites with news, blog, and resource management. Enable marketing teams to update content without technical knowledge.',
      gradient: 'from-[#5e2cb6]/5 to-[#c91a6f]/5',
      borderColor: '#5e2cb6',
      items: [
        'Blog and news management',
        'Resource library',
        'Team and company pages',
        'Event management'
      ]
    },
    {
      title: 'E-commerce Content',
      description: 'Create CMS for product catalogs, descriptions, and marketing content. Manage product information, categories, and promotional content.',
      gradient: 'from-[#d97706]/5 to-[#059669]/5',
      borderColor: '#d97706',
      items: [
        'Product content management',
        'Category organization',
        'Marketing content',
        'SEO optimization'
      ]
    }
  ],
  processTitle: 'CMS Development Process',
  processSubtitle: 'From planning to launch, we build CMS solutions that empower your content team',
  getQuote: {
    title: 'Get a',
    hollowText: 'Quote',
    description: 'Ready to build your custom CMS? Get in touch and let\'s discuss your content management needs.'
  },
  contact: {
    title: 'Get in Touch',
    description: 'Have a project in mind? Let\'s discuss how we can help build your CMS solution.'
  },
  seoServiceName: 'CMS Development'
} as const

