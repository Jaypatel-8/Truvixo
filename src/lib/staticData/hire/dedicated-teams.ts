// Server-only static data for Hire Dedicated Teams page
export const dedicatedTeamsData = {
  hero: {
    badge: {
      iconName: 'Users',
      text: 'Hire Dedicated Teams'
    },
    title: 'Hire Dedicated',
    hollowText: 'Teams',
    description: 'Hire dedicated development teams tailored to your project needs. Our dedicated teams include developers, designers, QA engineers, and project managers working exclusively on your projects.'
  },
  services: [
    {
      title: 'Full-Stack Teams',
      description: 'Complete teams with frontend, backend, and DevOps',
      iconName: 'Code',
      color: '#5e2cb6'
    },
    {
      title: 'Specialized Teams',
      description: 'Teams specialized in specific technologies or domains',
      iconName: 'Target',
      color: '#c91a6f'
    },
    {
      title: 'Agile Teams',
      description: 'Cross-functional Agile teams with Scrum masters',
      iconName: 'Zap',
      color: '#fecc4d'
    },
    {
      title: 'Extended Teams',
      description: 'Extend your in-house team with remote developers',
      iconName: 'Users',
      color: '#10b981'
    },
    {
      title: 'Project Teams',
      description: 'Dedicated teams for specific projects or initiatives',
      iconName: 'Briefcase',
      color: '#5e2cb6'
    },
    {
      title: 'Support Teams',
      description: 'Teams for maintenance and ongoing support',
      iconName: 'Settings',
      color: '#c91a6f'
    }
  ],
  whyChooseUs: [
    {
      iconName: 'Users',
      title: 'Complete Teams',
      description: 'Full teams with all roles needed for your project',
      color: '#5e2cb6'
    },
    {
      iconName: 'Target',
      title: 'Customized',
      description: 'Teams tailored to your specific project requirements',
      color: '#c91a6f'
    },
    {
      iconName: 'Zap',
      title: 'Agile Methodology',
      description: 'Teams following Agile and Scrum best practices',
      color: '#fecc4d'
    },
    {
      iconName: 'TrendingUp',
      title: 'Scalable',
      description: 'Easily scale teams up or down based on project needs',
      color: '#10b981'
    }
  ],
  industries: [
    { name: 'E-Commerce', iconName: 'ShoppingCart', color: '#5e2cb6' },
    { name: 'SaaS', iconName: 'Cloud', color: '#c91a6f' },
    { name: 'Healthcare', iconName: 'Heart', color: '#fecc4d' },
    { name: 'Fintech', iconName: 'DollarSign', color: '#10b981' },
    { name: 'Enterprise', iconName: 'Building2', color: '#5e2cb6' }
  ],
  technologies: [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const }
  ],
  processSteps: [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your project needs and team requirements',
      iconName: 'Target'
    },
    {
      title: 'Team Formation',
      description: 'We form dedicated teams with the right mix of skills',
      iconName: 'Users'
    },
    {
      title: 'Team Introduction',
      description: 'Introduce team members and establish communication channels',
      iconName: 'MessageSquare'
    },
    {
      title: 'Onboarding',
      description: 'Onboard team to your project, tools, and processes',
      iconName: 'Rocket'
    },
    {
      title: 'Team Integration',
      description: 'Seamless integration with your existing teams and workflows',
      iconName: 'Network'
    },
    {
      title: 'Ongoing Management',
      description: 'Continuous team management and performance monitoring',
      iconName: 'Settings'
    }
  ],
  servicesTitle: 'Dedicated',
  servicesHollowText: 'Teams',
  whyChooseTitle: 'Why Hire Our',
  whyChooseHollowText: 'Dedicated Teams',
  getQuoteTitle: 'Ready to Hire',
  getQuoteHollowText: 'Dedicated Teams?',
  getQuoteDescription: 'Get in touch and let\'s discuss how we can help you build the perfect dedicated team.',
  contactTitle: 'Get in Touch',
  contactDescription: 'Have questions about hiring dedicated teams? Let\'s discuss your needs.',
  processTitle: 'Team Formation',
  processSubtitle: 'From requirement analysis to ongoing support, we ensure a seamless team formation experience'
} as const

