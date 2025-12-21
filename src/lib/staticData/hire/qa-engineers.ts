// Server-only static data for Hire QA Engineers page
export const qaEngineersData = {
  hero: {
    badge: {
      iconName: 'CheckCircle',
      text: 'Hire QA Engineers'
    },
    title: 'Hire QA',
    hollowText: 'Engineers',
    description: 'Hire experienced QA engineers who ensure software quality and reliability. Our QA engineers are experts in manual and automated testing, test planning, and quality assurance processes.'
  },
  services: [
    {
      title: 'Manual Testing',
      description: 'Comprehensive manual testing and quality assurance',
      iconName: 'CheckCircle',
      color: '#5e2cb6'
    },
    {
      title: 'Automated Testing',
      description: 'Build and maintain automated test suites',
      iconName: 'Zap',
      color: '#c91a6f'
    },
    {
      title: 'Test Planning',
      description: 'Create test strategies and test plans',
      iconName: 'FileText',
      color: '#fecc4d'
    },
    {
      title: 'API Testing',
      description: 'Test REST APIs and microservices',
      iconName: 'Network',
      color: '#10b981'
    },
    {
      title: 'Performance Testing',
      description: 'Load testing and performance optimization',
      iconName: 'Gauge',
      color: '#5e2cb6'
    },
    {
      title: 'Security Testing',
      description: 'Identify security vulnerabilities and risks',
      iconName: 'Shield',
      color: '#c91a6f'
    }
  ],
  whyChooseUs: [
    {
      iconName: 'CheckCircle',
      title: 'Quality Assurance',
      description: 'Ensure software reliability and bug-free releases',
      color: '#5e2cb6'
    },
    {
      iconName: 'Zap',
      title: 'Test Automation',
      description: 'Expertise in Selenium, Cypress, Jest, and more',
      color: '#c91a6f'
    },
    {
      iconName: 'Target',
      title: 'Comprehensive Coverage',
      description: 'Test all aspects from functionality to performance',
      color: '#fecc4d'
    },
    {
      iconName: 'Shield',
      title: 'Security Focus',
      description: 'Identify and prevent security vulnerabilities',
      color: '#10b981'
    }
  ],
  industries: [
    { name: 'E-Commerce', iconName: 'ShoppingCart', color: '#5e2cb6' },
    { name: 'Fintech', iconName: 'DollarSign', color: '#c91a6f' },
    { name: 'Healthcare', iconName: 'Heart', color: '#fecc4d' },
    { name: 'SaaS', iconName: 'Cloud', color: '#10b981' },
    { name: 'Mobile Apps', iconName: 'Smartphone', color: '#5e2cb6' }
  ],
  technologies: [
    { name: 'Selenium', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg', color: '#43B02A', category: 'testing' as const },
    { name: 'Cypress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg', color: '#17202C', category: 'testing' as const },
    { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', color: '#C21325', category: 'testing' as const },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', color: '#FF6C37', category: 'testing' as const },
    { name: 'JIRA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', color: '#0052CC', category: 'testing' as const }
  ],
  processSteps: [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your QA needs, testing requirements, and project scope',
      iconName: 'Target'
    },
    {
      title: 'QA Engineer Matching',
      description: 'We match you with QA engineers skilled in your testing needs',
      iconName: 'Users'
    },
    {
      title: 'Technical Assessment',
      description: 'Comprehensive interviews covering manual and automated testing',
      iconName: 'FileText'
    },
    {
      title: 'Portfolio Review',
      description: 'Review QA engineer portfolios showcasing testing projects',
      iconName: 'CheckCircle'
    },
    {
      title: 'Trial Period',
      description: 'Optional trial period to evaluate QA engineer performance',
      iconName: 'Clock'
    },
    {
      title: 'Team Integration',
      description: 'Seamless integration with your development and QA teams',
      iconName: 'Rocket'
    }
  ],
  servicesTitle: 'QA',
  servicesHollowText: 'Services',
  whyChooseTitle: 'Why Hire Our',
  whyChooseHollowText: 'QA Engineers',
  getQuoteTitle: 'Ready to Hire',
  getQuoteHollowText: 'QA Engineers?',
  getQuoteDescription: 'Get in touch and let\'s discuss how we can help you find the perfect QA engineers.',
  contactTitle: 'Get in Touch',
  contactDescription: 'Have questions about hiring QA engineers? Let\'s discuss your needs.',
  processTitle: 'Hiring Process',
  processSubtitle: 'From requirement analysis to ongoing support, we ensure a seamless hiring experience'
} as const


