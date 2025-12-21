// Server-only static data for Database Technology page
export const databaseTechnologyData = {
  hero: {
    title: 'Database Development Technologies We Use to Build',
    hollowText: 'Scalable, High-Performance Data Solutions',
    description: 'We use the latest database technologies to design, optimize, and maintain high-performance data solutions. Our database expertise ensures data integrity, scalability, and optimal performance for your applications.'
  },
  technologies: [
    {
      name: 'MongoDB',
      iconName: 'Database',
      description: 'NoSQL database for flexible, scalable document storage',
      number: '1'
    },
    {
      name: 'PostgreSQL',
      iconName: 'Database',
      description: 'Advanced open-source relational database with robust features',
      number: '2'
    },
    {
      name: 'MySQL',
      iconName: 'Database',
      description: 'Popular relational database for web applications',
      number: '3'
    },
    {
      name: 'Redis',
      iconName: 'Zap',
      description: 'In-memory data structure store for caching and real-time applications',
      number: '4'
    },
    {
      name: 'DynamoDB',
      iconName: 'Cloud',
      description: 'Fully managed NoSQL database service on AWS',
      number: '5'
    },
    {
      name: 'Cassandra',
      iconName: 'Database',
      description: 'Distributed NoSQL database for handling large amounts of data',
      number: '6'
    }
  ],
  whatWeBuild: [
    { iconName: 'Database', title: 'Database Design' },
    { iconName: 'Server', title: 'Data Warehouses' },
    { iconName: 'Cloud', title: 'Cloud Databases' },
    { iconName: 'Zap', title: 'Real-Time Systems' }
  ],
  benefits: [
    { iconName: 'Zap', title: 'High Performance', description: 'Optimized queries and indexing' },
    { iconName: 'Shield', title: 'Data Security', description: 'Encryption and access control' },
    { iconName: 'TrendingUp', title: 'Scalability', description: 'Grows with your business' },
    { iconName: 'CheckCircle', title: 'Data Integrity', description: 'ACID compliance and consistency' },
    { iconName: 'Rocket', title: 'Fast Queries', description: 'Optimized for speed' }
  ],
  whyChooseUs: [
    { iconName: 'Database', title: 'Database Expertise', description: 'Deep knowledge of SQL and NoSQL' },
    { iconName: 'Target', title: 'Optimization', description: 'Performance tuning and indexing' },
    { iconName: 'Shield', title: 'Security First', description: 'Data protection and compliance' },
    { iconName: 'Rocket', title: 'Scalable Solutions', description: 'Architecture that grows' }
  ],
  cta: {
    title: 'Build a Robust Database Solution',
    buttonText: 'Get Started'
  }
} as const






