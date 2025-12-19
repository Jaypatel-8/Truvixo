// Server-only static data for Backend Technology page
export const backendTechnologyData = {
  hero: {
    title: 'Backend Development Technologies We Use to Build',
    hollowText: 'Scalable, High-Performance Server Solutions',
    description: 'We use the latest backend technologies to build robust, scalable server-side applications. Our backend engineering ensures API performance, database optimization, security, and seamless integration with frontend systems.'
  },
  technologies: [
    {
      name: 'Node.js',
      iconName: 'Server',
      description: 'JavaScript runtime for building scalable network applications and APIs.',
      number: '1'
    },
    {
      name: 'Python',
      iconName: 'Code',
      description: 'Versatile language for APIs, data processing, and machine learning backends.',
      number: '2'
    },
    {
      name: 'Java',
      iconName: 'Server',
      description: 'Enterprise-grade backend development for large-scale applications.',
      number: '3'
    },
    {
      name: '.NET',
      iconName: 'Code',
      description: 'Microsoft framework for building robust enterprise applications.',
      number: '4'
    },
    {
      name: 'Go',
      iconName: 'Zap',
      description: 'High-performance language for microservices and cloud-native applications.',
      number: '5'
    },
    {
      name: 'GraphQL',
      iconName: 'Network',
      description: 'Query language for APIs that provides efficient data fetching.',
      number: '6'
    }
  ],
  whatWeBuild: [
    { iconName: 'Server', title: 'RESTful APIs' },
    { iconName: 'Network', title: 'GraphQL APIs' },
    { iconName: 'Zap', title: 'Microservices' },
    { iconName: 'Database', title: 'Database Backends' },
    { iconName: 'Cloud', title: 'Cloud Services' },
    { iconName: 'Shield', title: 'Secure Backends' }
  ],
  benefits: [
    { iconName: 'Zap', title: 'High Performance', description: 'Optimized APIs and server logic' },
    { iconName: 'Shield', title: 'Secure', description: 'Enterprise-grade security' },
    { iconName: 'TrendingUp', title: 'Scalable', description: 'Handles growing traffic' },
    { iconName: 'Database', title: 'Database Integration', description: 'Seamless data management' },
    { iconName: 'Rocket', title: 'Fast APIs', description: 'Low latency responses' }
  ],
  whyChooseUs: [
    { iconName: 'Server', title: 'Backend Expertise', description: 'Deep knowledge of server technologies' },
    { iconName: 'Target', title: 'API Design', description: 'Well-architected REST and GraphQL APIs' },
    { iconName: 'Shield', title: 'Security First', description: 'Built-in security best practices' },
    { iconName: 'Rocket', title: 'Scalable Architecture', description: 'Architecture that grows with you' }
  ],
  cta: {
    title: 'Build a Robust Backend Solution',
    buttonText: 'Get Started'
  }
} as const

