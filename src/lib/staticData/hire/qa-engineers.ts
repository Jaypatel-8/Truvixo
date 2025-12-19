// Server-only static data for Hire QA Engineers page
export const qaEngineersData = {
  hero: {
    badge: {
      iconName: 'CheckCircle',
      text: 'Hire QA Engineers'
    },
    title: 'Hire QA',
    hollowText: 'Engineers',
    description: 'Hire experienced QA engineers who ensure software quality and reliability. From manual testing to automated test suites, we provide the QA expertise you need. Our engineers are experts in Selenium, Cypress, Jest, and modern testing frameworks.'
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
      title: 'E2E Testing',
      description: 'End-to-end testing for complete workflows',
      iconName: 'Target',
      color: '#d97706'
    },
    {
      title: 'Performance Testing',
      description: 'Load testing and performance optimization',
      iconName: 'BarChart',
      color: '#059669'
    },
    {
      title: 'Security Testing',
      description: 'Security vulnerability testing and assessment',
      iconName: 'Shield',
      color: '#5e2cb6'
    },
    {
      title: 'Test Automation',
      description: 'Set up CI/CD test automation pipelines',
      iconName: 'Rocket',
      color: '#c91a6f'
    }
  ],
  whyChooseUs: [
    {
      iconName: 'CheckCircle',
      title: 'QA Expertise',
      description: 'Expert QA engineers with comprehensive testing knowledge',
      color: '#5e2cb6'
    },
    {
      iconName: 'Zap',
      title: 'Test Automation',
      description: 'Build automated test suites for faster testing cycles',
      color: '#c91a6f'
    },
    {
      iconName: 'Target',
      title: 'Quality Focus',
      description: 'Ensure software quality and reliability',
      color: '#d97706'
    },
    {
      iconName: 'Shield',
      title: 'Comprehensive Testing',
      description: 'Manual, automated, performance, and security testing',
      color: '#059669'
    }
  ],
  industries: [
    { name: 'Fintech', iconName: 'Building2', color: '#5e2cb6' },
    { name: 'Healthcare', iconName: 'Heart', color: '#c91a6f' },
    { name: 'E-Commerce', iconName: 'ShoppingCart', color: '#d97706' },
    { name: 'Logistics', iconName: 'Truck', color: '#059669' },
    { name: 'Real Estate', iconName: 'Home', color: '#5e2cb6' }
  ],
  technologies: [
    { name: 'Selenium', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg', color: '#43B02A', category: 'tools' as const },
    { name: 'Cypress', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/cypress.svg', color: '#17202C', category: 'tools' as const },
    { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', color: '#C21325', category: 'tools' as const },
    { name: 'Playwright', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/playwright.svg', color: '#2EAD33', category: 'tools' as const },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/postman.svg', color: '#FF6C37', category: 'tools' as const },
    { name: 'JMeter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jmeter/jmeter-original.svg', color: '#D22128', category: 'tools' as const }
  ],
  processSteps: [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your testing needs and QA requirements',
      iconName: 'Target'
    },
    {
      title: 'Engineer Matching',
      description: 'We match you with QA engineers skilled in your tech stack',
      iconName: 'Users'
    },
    {
      title: 'Technical Assessment',
      description: 'Comprehensive interviews covering testing methodologies and tools',
      iconName: 'FileText'
    },
    {
      title: 'Trial Period',
      description: 'Optional trial period to evaluate engineer performance',
      iconName: 'CheckCircle'
    },
    {
      title: 'Team Integration',
      description: 'Seamless integration with your development team',
      iconName: 'Rocket'
    },
    {
      title: 'Continuous Support',
      description: 'Ongoing support, test maintenance, and quality assurance',
      iconName: 'Zap'
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

