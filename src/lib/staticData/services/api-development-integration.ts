// Server-only static data for API Development & Integration page
export const apiDevelopmentIntegrationData = {
  hero: {
    badge: {
      iconName: 'Network',
      text: 'API Development & Integration'
    },
    title: 'API Development',
    hollowText: '& Integration',
    description: 'Build robust, scalable APIs and integrate with third-party services. Our API development services include RESTful APIs, GraphQL, microservices, and seamless integration with existing systems.'
  },
  services: [
    {
      title: 'RESTful APIs',
      description: 'Design and develop RESTful API services',
      iconName: 'Code',
      color: '#5e2cb6'
    },
    {
      title: 'GraphQL APIs',
      description: 'Build flexible GraphQL APIs for efficient data fetching',
      iconName: 'Network',
      color: '#c91a6f'
    },
    {
      title: 'API Integration',
      description: 'Integrate with third-party APIs and services',
      iconName: 'Link',
      color: '#d97706'
    },
    {
      title: 'Microservices',
      description: 'Build microservices architecture with APIs',
      iconName: 'Layers',
      color: '#059669'
    },
    {
      title: 'API Documentation',
      description: 'Comprehensive API documentation and testing',
      iconName: 'FileText',
      color: '#5e2cb6'
    },
    {
      title: 'API Security',
      description: 'Implement authentication, authorization, and security',
      iconName: 'Shield',
      color: '#c91a6f'
    }
  ],
  whyChooseUs: [
    {
      iconName: 'Network',
      title: 'Scalable Architecture',
      description: 'APIs built to handle high traffic and scale',
      color: '#5e2cb6'
    },
    {
      iconName: 'Zap',
      title: 'Fast Performance',
      description: 'Optimized APIs for low latency and high throughput',
      color: '#c91a6f'
    },
    {
      iconName: 'Shield',
      title: 'Secure by Design',
      description: 'Enterprise-grade security and authentication',
      color: '#d97706'
    },
    {
      iconName: 'Code',
      title: 'Well Documented',
      description: 'Comprehensive documentation and examples',
      color: '#059669'
    }
  ],
  technologies: [
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '#000000', category: 'backend' as const },
    { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/graphql.svg', color: '#E10098', category: 'backend' as const },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/postman.svg', color: '#FF6C37', category: 'tools' as const },
    { name: 'Swagger', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/swagger.svg', color: '#85EA2D', category: 'tools' as const },
    { name: 'AWS API Gateway', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const }
  ],
  processSteps: [
    {
      title: 'API Design',
      description: 'Design API architecture and endpoints',
      iconName: 'Layers'
    },
    {
      title: 'Development',
      description: 'Develop APIs with best practices and standards',
      iconName: 'Code'
    },
    {
      title: 'Testing',
      description: 'Comprehensive API testing and validation',
      iconName: 'Shield'
    },
    {
      title: 'Documentation',
      description: 'Create comprehensive API documentation',
      iconName: 'FileText'
    },
    {
      title: 'Integration',
      description: 'Integrate with existing systems and services',
      iconName: 'Link'
    },
    {
      title: 'Deployment',
      description: 'Deploy APIs to production with monitoring',
      iconName: 'Rocket'
    }
  ],
  industries: [
    { name: 'Fintech', iconName: 'Building2', color: '#5e2cb6' },
    { name: 'Healthcare', iconName: 'Heart', color: '#c91a6f' },
    { name: 'E-commerce', iconName: 'ShoppingCart', color: '#d97706' },
    { name: 'Logistics', iconName: 'Truck', color: '#059669' },
    { name: 'SaaS', iconName: 'Cloud', color: '#5e2cb6' },
    { name: 'Manufacturing', iconName: 'Factory', color: '#c91a6f' }
  ],
  benefits: [
    {
      iconName: 'Network',
      title: 'System Integration',
      description: 'Connect different systems and services seamlessly through well-designed APIs.',
      color: '#5e2cb6'
    },
    {
      iconName: 'Zap',
      title: 'Faster Development',
      description: 'Reusable APIs accelerate development and reduce time to market.',
      color: '#c91a6f'
    },
    {
      iconName: 'TrendingUp',
      title: 'Scalability',
      description: 'APIs enable horizontal scaling and handle increased load efficiently.',
      color: '#d97706'
    },
    {
      iconName: 'Shield',
      title: 'Security',
      description: 'Centralized security and authentication through API gateways.',
      color: '#059669'
    },
    {
      iconName: 'Code',
      title: 'Flexibility',
      description: 'APIs allow frontend and backend to evolve independently.',
      color: '#5e2cb6'
    },
    {
      iconName: 'Globe',
      title: 'Third-Party Integration',
      description: 'Easily integrate with external services and platforms.',
      color: '#c91a6f'
    }
  ],
  useCases: [
    {
      title: 'Microservices Architecture',
      description: 'Build microservices with APIs for scalable, maintainable systems.',
      gradient: 'from-[#5e2cb6]/5 to-[#c91a6f]/5',
      borderColor: '#5e2cb6',
      items: [
        'Service-to-service communication',
        'API gateway implementation',
        'Independent service deployment',
        'Distributed system architecture'
      ]
    },
    {
      title: 'Third-Party Integrations',
      description: 'Integrate with payment gateways, CRM systems, and other services.',
      gradient: 'from-[#d97706]/5 to-[#059669]/5',
      borderColor: '#d97706',
      items: [
        'Payment gateway integration',
        'CRM system connections',
        'Email service integration',
        'Analytics platform integration'
      ]
    }
  ],
  processTitle: 'API Development Process',
  processSubtitle: 'From design to deployment, we build secure, scalable APIs that power your applications',
  getQuote: {
    title: 'Ready to Build',
    hollowText: 'APIs?',
    description: 'Get in touch and let\'s discuss your API development needs.'
  },
  contact: {
    title: 'Get in Touch',
    description: 'Need API development or integration? Let\'s discuss your requirements.'
  },
  seoServiceName: 'API Development & Integration'
} as const


