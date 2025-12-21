// Server-only static data for Real Estate Industry page
export const realEstateIndustryData = {
  hero: {
    badge: {
      iconName: 'Home',
      text: 'Real Estate Solutions'
    },
    title: 'Real Estate',
    hollowText: 'Development',
    description: 'We build custom real estate software solutions that transform property management, sales, and investment operations.'
  },
  services: [
    {
      title: 'Property Management Systems',
      description: 'Complete property management solutions',
      iconName: 'Home',
      color: '#5e2cb6'
    },
    {
      title: 'Real Estate Portals',
      description: 'Property listing and search platforms',
      iconName: 'Building2',
      color: '#c91a6f'
    },
    {
      title: 'Investment Platforms',
      description: 'Real estate investment and analytics tools',
      iconName: 'TrendingUp',
      color: '#fecc4d'
    },
    {
      title: 'CRM Systems',
      description: 'Customer relationship management for real estate',
      iconName: 'Users',
      color: '#10b981'
    }
  ],
  whyChooseUs: [
    {
      iconName: 'Home',
      title: 'Real Estate Expertise',
      description: 'Deep understanding of real estate operations',
      color: '#5e2cb6'
    },
    {
      iconName: 'Building2',
      title: 'Property Management',
      description: 'Custom property management solutions',
      color: '#c91a6f'
    },
    {
      iconName: 'TrendingUp',
      title: 'Investment Tools',
      description: 'Analytics and investment platforms',
      color: '#fecc4d'
    },
    {
      iconName: 'Shield',
      title: 'Secure Solutions',
      description: 'Data protection and compliance',
      color: '#10b981'
    }
  ],
  industries: [
    { name: 'Residential', iconName: 'Home', color: '#5e2cb6' },
    { name: 'Commercial', iconName: 'Building2', color: '#c91a6f' },
    { name: 'Industrial', iconName: 'Factory', color: '#fecc4d' },
    { name: 'Land Development', iconName: 'MapPin', color: '#10b981' }
  ],
  processSteps: [
    {
      title: 'Requirements Analysis',
      description: 'Analyze real estate business needs',
      iconName: 'Target'
    },
    {
      title: 'System Design',
      description: 'Design custom real estate solutions',
      iconName: 'FileText'
    },
    {
      title: 'Development',
      description: 'Build and integrate real estate systems',
      iconName: 'Code'
    },
    {
      title: 'Testing',
      description: 'Quality assurance and testing',
      iconName: 'CheckCircle'
    },
    {
      title: 'Deployment',
      description: 'Deploy and train real estate teams',
      iconName: 'Rocket'
    }
  ],
  benefits: [
    {
      iconName: 'TrendingUp',
      title: 'Increased Efficiency',
      description: 'Streamline property management operations',
      color: '#5e2cb6'
    },
    {
      iconName: 'Users',
      title: 'Better Customer Experience',
      description: 'Improved tenant and client interactions',
      color: '#c91a6f'
    },
    {
      iconName: 'BarChart',
      title: 'Data Analytics',
      description: 'Real-time insights and reporting',
      color: '#fecc4d'
    }
  ],
  technologies: [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const }
  ],
  processTitle: 'Real Estate Development Process',
  processSubtitle: 'From analysis to deployment, we ensure quality and efficiency',
  contact: {
    title: 'Get in Touch',
    description: 'Have questions about real estate development? Let\'s discuss your project.'
  },
  cta: {
    title: 'Ready to Transform',
    hollowText: 'Real Estate?',
    description: 'Get in touch and let\'s discuss how we can help streamline your real estate operations.'
  }
} as const






