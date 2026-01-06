// Server-only static data for Maintenance & Support page
export const maintenanceSupportData = {
  hero: {
    badge: {
      iconName: 'Settings',
      text: 'Maintenance & Support'
    },
    title: 'Maintenance',
    hollowText: '& Support',
    description: 'Ensure your applications run smoothly with our comprehensive maintenance and support services. From bug fixes to performance optimization, we keep your software up-to-date, secure, and performing at its best.'
  },
  services: [
    {
      title: 'Bug Fixes',
      description: 'Rapid bug identification and resolution',
      iconName: 'AlertCircle',
      color: '#5e2cb6'
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize application performance and speed',
      iconName: 'Zap',
      color: '#c91a6f'
    },
    {
      title: 'Security Updates',
      description: 'Regular security patches and updates',
      iconName: 'Shield',
      color: '#d97706'
    },
    {
      title: 'Feature Enhancements',
      description: 'Add new features and improvements',
      iconName: 'Plus',
      color: '#059669'
    },
    {
      title: 'Monitoring & Alerts',
      description: '24/7 monitoring and proactive alerts',
      iconName: 'Activity',
      color: '#5e2cb6'
    },
    {
      title: 'Technical Support',
      description: 'Dedicated technical support team',
      iconName: 'Headphones',
      color: '#c91a6f'
    }
  ],
  servicesTitle: 'Maintenance',
  servicesHollowText: '& Support',
  whyChooseTitle: 'Why Choose Our',
  whyChooseHollowText: 'Maintenance & Support',
  whyChooseUs: [
    {
      iconName: 'Clock',
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring',
      color: '#5e2cb6'
    },
    {
      iconName: 'Zap',
      title: 'Rapid Response',
      description: 'Quick response times for critical issues',
      color: '#c91a6f'
    },
    {
      iconName: 'Shield',
      title: 'Proactive Monitoring',
      description: 'Identify and fix issues before they impact users',
      color: '#d97706'
    },
    {
      iconName: 'TrendingUp',
      title: 'Continuous Improvement',
      description: 'Ongoing optimization and enhancement',
      color: '#059669'
    }
  ],
  technologies: [
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032', category: 'devops' as const },
    { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', color: '#D24939', category: 'devops' as const },
    { name: 'Grafana', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/grafana.svg', color: '#F46800', category: 'devops' as const }
  ],
  processSteps: [
    {
      title: 'Monitoring',
      description: 'Continuous monitoring of application health',
      iconName: 'Activity'
    },
    {
      title: 'Issue Detection',
      description: 'Proactive identification of potential issues',
      iconName: 'AlertCircle'
    },
    {
      title: 'Analysis',
      description: 'Root cause analysis and impact assessment',
      iconName: 'Search'
    },
    {
      title: 'Resolution',
      description: 'Quick resolution of issues and bugs',
      iconName: 'Wrench'
    },
    {
      title: 'Testing',
      description: 'Thorough testing before deployment',
      iconName: 'Shield'
    },
    {
      title: 'Deployment',
      description: 'Safe deployment with rollback capability',
      iconName: 'Rocket'
    }
  ],
  industries: [
    { name: 'E-commerce', iconName: 'ShoppingCart', color: '#5e2cb6' },
    { name: 'Fintech', iconName: 'Building2', color: '#c91a6f' },
    { name: 'Healthcare', iconName: 'Heart', color: '#d97706' },
    { name: 'SaaS', iconName: 'Cloud', color: '#059669' },
    { name: 'Education', iconName: 'GraduationCap', color: '#5e2cb6' },
    { name: 'Manufacturing', iconName: 'Factory', color: '#c91a6f' }
  ],
  benefitsTitle: 'Maintenance',
  benefitsHollowText: '& Support Benefits',
  benefits: [
    {
      iconName: 'Shield',
      title: 'Reduced Downtime',
      description: 'Proactive monitoring and rapid response minimize application downtime and business disruption.',
      color: '#5e2cb6'
    },
    {
      iconName: 'TrendingUp',
      title: 'Improved Performance',
      description: 'Regular optimization keeps your application running at peak performance.',
      color: '#c91a6f'
    },
    {
      iconName: 'Lock',
      title: 'Enhanced Security',
      description: 'Timely security updates protect your application from vulnerabilities and threats.',
      color: '#d97706'
    },
    {
      iconName: 'DollarSign',
      title: 'Cost Efficiency',
      description: 'Preventive maintenance reduces the cost of major fixes and system failures.',
      color: '#059669'
    },
    {
      iconName: 'Users',
      title: 'Better User Experience',
      description: 'Consistent performance and reliability improve user satisfaction.',
      color: '#5e2cb6'
    },
    {
      iconName: 'Code',
      title: 'Code Quality',
      description: 'Regular updates and refactoring maintain code quality and maintainability.',
      color: '#c91a6f'
    }
  ],
  useCasesTitle: 'Maintenance',
  useCasesHollowText: '& Support Use Cases',
  useCases: [
    {
      title: 'Production Support',
      description: '24/7 monitoring and support for production applications.',
      gradient: 'from-[#5e2cb6]/5 to-[#c91a6f]/5',
      borderColor: '#5e2cb6',
      items: [
        'Real-time monitoring',
        'Incident management',
        'Performance tracking',
        'Uptime guarantee'
      ]
    },
    {
      title: 'Application Updates',
      description: 'Regular updates, patches, and feature enhancements.',
      gradient: 'from-[#d97706]/5 to-[#059669]/5',
      borderColor: '#d97706',
      items: [
        'Security patches',
        'Feature updates',
        'Performance improvements',
        'Bug fixes'
      ]
    }
  ],
  processTitle: 'Maintenance Process',
  processSubtitle: 'From monitoring to resolution, we ensure your applications run smoothly and efficiently',
  getQuote: {
    title: 'Need Maintenance',
    hollowText: 'Support?',
    description: 'Get in touch and let\'s discuss your maintenance and support needs.'
  },
  contact: {
    title: 'Get in Touch',
    description: 'Need ongoing support? Let\'s discuss how we can help maintain your applications.'
  },
  seoServiceName: 'Maintenance & Support'
} as const


