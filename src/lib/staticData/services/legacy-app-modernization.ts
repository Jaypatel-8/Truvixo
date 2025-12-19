// Server-only static data for Legacy App Modernization page
export const legacyAppModernizationData = {
  hero: {
    badge: {
      iconName: 'Wrench',
      text: 'Legacy App Modernization'
    },
    title: 'Legacy App',
    hollowText: 'Modernization',
    description: 'Transform your legacy applications into modern, scalable, and maintainable systems. We help you migrate from outdated technologies to cutting-edge platforms while preserving business logic and ensuring zero downtime.'
  },
  services: [
    {
      title: 'Technology Migration',
      description: 'Migrate from legacy technologies to modern frameworks',
      iconName: 'ArrowRight',
      color: '#5e2cb6'
    },
    {
      title: 'Architecture Refactoring',
      description: 'Refactor monolithic apps to microservices architecture',
      iconName: 'Layers',
      color: '#c91a6f'
    },
    {
      title: 'Database Migration',
      description: 'Migrate legacy databases to modern database systems',
      iconName: 'Database',
      color: '#d97706'
    },
    {
      title: 'Cloud Migration',
      description: 'Move legacy applications to cloud infrastructure',
      iconName: 'Cloud',
      color: '#059669'
    },
    {
      title: 'API Modernization',
      description: 'Modernize APIs and integrate with modern systems',
      iconName: 'Code',
      color: '#5e2cb6'
    },
    {
      title: 'UI/UX Redesign',
      description: 'Redesign user interfaces with modern UX principles',
      iconName: 'Palette',
      color: '#c91a6f'
    }
  ],
  whyChooseUs: [
    {
      iconName: 'Wrench',
      title: 'Zero Downtime',
      description: 'Modernize without disrupting business operations',
      color: '#5e2cb6'
    },
    {
      iconName: 'Shield',
      title: 'Data Preservation',
      description: 'Ensure zero data loss during migration',
      color: '#c91a6f'
    },
    {
      iconName: 'Zap',
      title: 'Performance Boost',
      description: 'Significantly improve application performance',
      color: '#d97706'
    },
    {
      iconName: 'TrendingUp',
      title: 'Cost Reduction',
      description: 'Reduce maintenance and operational costs',
      color: '#059669'
    }
  ],
  technologies: [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const }
  ],
  processSteps: [
    {
      title: 'Assessment',
      description: 'Analyze legacy system architecture and dependencies',
      iconName: 'Search'
    },
    {
      title: 'Planning',
      description: 'Create modernization roadmap and migration strategy',
      iconName: 'Target'
    },
    {
      title: 'Incremental Migration',
      description: 'Migrate in phases to minimize risk and downtime',
      iconName: 'ArrowRight'
    },
    {
      title: 'Modernization',
      description: 'Refactor code and update to modern technologies',
      iconName: 'Code'
    },
    {
      title: 'Testing',
      description: 'Comprehensive testing to ensure functionality',
      iconName: 'Shield'
    },
    {
      title: 'Deployment',
      description: 'Deploy modernized application with monitoring',
      iconName: 'Rocket'
    }
  ],
  industries: [
    { name: 'Finance', iconName: 'Building2', color: '#5e2cb6' },
    { name: 'Healthcare', iconName: 'Heart', color: '#c91a6f' },
    { name: 'Manufacturing', iconName: 'Factory', color: '#d97706' },
    { name: 'Retail', iconName: 'ShoppingCart', color: '#059669' },
    { name: 'Government', iconName: 'Building2', color: '#5e2cb6' },
    { name: 'Education', iconName: 'GraduationCap', color: '#c91a6f' }
  ],
  benefits: [
    {
      iconName: 'Zap',
      title: 'Improved Performance',
      description: 'Modern technologies deliver significantly better performance, faster load times, and better user experience.',
      color: '#5e2cb6'
    },
    {
      iconName: 'Shield',
      title: 'Enhanced Security',
      description: 'Modern applications include up-to-date security features and compliance with current standards.',
      color: '#c91a6f'
    },
    {
      iconName: 'TrendingDown',
      title: 'Reduced Costs',
      description: 'Lower maintenance costs, reduced infrastructure expenses, and improved operational efficiency.',
      color: '#d97706'
    },
    {
      iconName: 'Users',
      title: 'Better User Experience',
      description: 'Modern interfaces and responsive design improve user satisfaction and engagement.',
      color: '#059669'
    },
    {
      iconName: 'Code',
      title: 'Easier Maintenance',
      description: 'Modern codebases are easier to maintain, update, and extend with new features.',
      color: '#5e2cb6'
    },
    {
      iconName: 'Cloud',
      title: 'Cloud Scalability',
      description: 'Migrate to cloud infrastructure for automatic scaling and improved reliability.',
      color: '#c91a6f'
    }
  ],
  useCases: [
    {
      title: 'Monolith to Microservices',
      description: 'Break down monolithic applications into scalable microservices architecture.',
      gradient: 'from-[#5e2cb6]/5 to-[#c91a6f]/5',
      borderColor: '#5e2cb6',
      items: [
        'Service decomposition',
        'API gateway implementation',
        'Independent deployment',
        'Scalable architecture'
      ]
    },
    {
      title: 'Database Modernization',
      description: 'Migrate from legacy databases to modern, scalable database systems.',
      gradient: 'from-[#d97706]/5 to-[#059669]/5',
      borderColor: '#d97706',
      items: [
        'Data migration',
        'Schema optimization',
        'Performance tuning',
        'Backup and recovery'
      ]
    }
  ],
  processTitle: 'Modernization Process',
  processSubtitle: 'From assessment to deployment, we modernize your legacy systems safely and efficiently',
  getQuote: {
    title: 'Ready to Modernize',
    hollowText: 'Your App?',
    description: 'Get in touch and let\'s discuss modernizing your legacy application.'
  },
  contact: {
    title: 'Get in Touch',
    description: 'Have a legacy system? Let\'s discuss how we can modernize it.'
  },
  seoServiceName: 'Legacy App Modernization'
} as const


