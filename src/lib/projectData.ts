export interface ProjectDetail {
  slug: string
  title: string
  client: string
  category: string
  description: string
  fullDescription: string
  technologies: string[]
  results: string[]
  teamSize: string
  location: string
  duration: string
  problem: string
  solution: string
  approach: string[]
  challenges: string[]
  impact: string[]
  color: string
}

export const projects: ProjectDetail[] = [
  {
    slug: 'nova-logistics',
    title: 'Nova Logistics',
    client: 'Nova Logistics',
    category: 'Logistics & Supply Chain',
    description: 'Digital transformation platform for logistics management that streamlined operations and improved efficiency by 40%.',
    fullDescription: 'Nova Logistics required a comprehensive digital transformation solution to modernize their logistics operations, improve real-time tracking, and optimize delivery routes. We developed a scalable platform that integrated IoT devices, real-time analytics, and automated route optimization to transform their entire supply chain management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'IoT', 'Redis', 'Docker', 'Kubernetes'],
    results: [
      '40% improvement in operational efficiency',
      'Real-time tracking and visibility',
      'Automated route optimization',
      'Reduced delivery times by 30%',
      '50% reduction in fuel costs',
      '99.9% system uptime'
    ],
    teamSize: '8-10 members',
    location: 'Ahmedabad, Gujarat, India',
    duration: '6 months',
    problem: 'Nova Logistics faced significant challenges with manual tracking systems, inefficient route planning, and lack of real-time visibility into their supply chain operations. This resulted in delayed deliveries, increased fuel costs, and poor customer satisfaction.',
    solution: 'We developed a comprehensive logistics management platform with real-time GPS tracking, AI-powered route optimization, automated dispatch systems, and integrated IoT sensors for cargo monitoring. The solution included mobile apps for drivers, web dashboards for managers, and APIs for third-party integrations.',
    approach: [
      'Conducted comprehensive analysis of existing logistics workflows and pain points',
      'Designed scalable microservices architecture for high availability',
      'Implemented real-time tracking using GPS and IoT sensors',
      'Developed AI algorithms for optimal route planning and resource allocation',
      'Created intuitive mobile and web interfaces for different user roles',
      'Established continuous monitoring and analytics dashboards'
    ],
    challenges: [
      'Integrating multiple legacy systems with modern cloud infrastructure',
      'Ensuring real-time data synchronization across distributed systems',
      'Handling high-volume GPS data processing and storage',
      'Maintaining system performance during peak delivery periods',
      'Ensuring data security and compliance with logistics regulations'
    ],
    impact: [
      '40% improvement in overall operational efficiency',
      '30% reduction in delivery times',
      '50% decrease in fuel consumption through optimized routes',
      '99.9% system reliability and uptime',
      'Significant improvement in customer satisfaction scores',
      'Scalable infrastructure supporting 10x growth'
    ],
    color: '#5e2cb6'
  },
  {
    slug: 'brightedge-healthcare-analytics',
    title: 'BrightEdge Healthcare Analytics',
    client: 'BrightEdge',
    category: 'Healthcare Technology',
    description: 'AI-powered healthcare analytics solution that revolutionized patient data analysis and improved decision-making processes.',
    fullDescription: 'BrightEdge needed an advanced healthcare analytics platform to process large volumes of patient data, provide predictive insights, and support clinical decision-making. We built a HIPAA-compliant AI-powered system that analyzes patient records, predicts health outcomes, and delivers actionable insights to healthcare providers.',
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'HIPAA Compliance', 'FastAPI', 'Docker', 'AWS'],
    results: [
      '90% reduction in data processing time',
      'Real-time patient insights delivery',
      'Predictive analytics for patient outcomes',
      '50% improvement in decision-making speed',
      '95% accuracy in risk prediction models',
      'Full HIPAA compliance achieved'
    ],
    teamSize: '12-15 members',
    location: 'Ahmedabad, Gujarat, India',
    duration: '8 months',
    problem: 'Healthcare providers struggled with processing vast amounts of patient data manually, leading to delayed diagnoses, missed patterns, and inefficient resource allocation. The lack of predictive analytics made it difficult to identify at-risk patients early.',
    solution: 'We developed an AI-powered healthcare analytics platform that processes patient data in real-time, uses machine learning models for predictive analytics, and provides intuitive dashboards for healthcare professionals. The system includes automated risk scoring, treatment recommendations, and population health insights.',
    approach: [
      'Conducted extensive research on healthcare data patterns and clinical workflows',
      'Developed HIPAA-compliant data processing and storage infrastructure',
      'Built machine learning models for disease prediction and risk assessment',
      'Created secure APIs for integration with existing hospital systems',
      'Designed user-friendly dashboards for doctors and administrators',
      'Implemented comprehensive security measures and audit logging'
    ],
    challenges: [
      'Ensuring HIPAA compliance throughout the development process',
      'Processing and analyzing large volumes of sensitive patient data',
      'Integrating with multiple legacy hospital information systems',
      'Maintaining model accuracy while ensuring interpretability for clinicians',
      'Handling real-time data processing with minimal latency'
    ],
    impact: [
      '90% reduction in time spent on data analysis',
      '50% faster clinical decision-making process',
      '95% accuracy in predicting patient health risks',
      'Significant improvement in early intervention rates',
      'Enhanced patient outcomes through data-driven care',
      'Reduced healthcare costs through preventive care strategies'
    ],
    color: '#c91a6f'
  },
  {
    slug: 'urbanmint-property-platform',
    title: 'UrbanMint Property Platform',
    client: 'UrbanMint',
    category: 'Real Estate Tech',
    description: 'Modern property management and investment platform that transformed how real estate professionals manage properties and investments.',
    fullDescription: 'UrbanMint required a comprehensive property management and investment platform to streamline property operations, track investments, and provide analytics for real estate professionals. We built a modern platform with property listings, investment tracking, financial analytics, and automated workflows.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Maps API', 'Redis', 'AWS', 'Docker'],
    results: [
      '150% increase in user engagement',
      'Streamlined property management workflows',
      'Automated investment tracking',
      '25% increase in platform adoption',
      '60% reduction in manual data entry',
      'Real-time property valuation updates'
    ],
    teamSize: '10-12 members',
    location: 'Ahmedabad, Gujarat, India',
    duration: '7 months',
    problem: 'Real estate professionals struggled with fragmented tools, manual property tracking, and lack of comprehensive investment analytics. Managing multiple properties, tracking rental income, and analyzing investment performance required multiple disconnected systems.',
    solution: 'We developed a unified property management platform that consolidates property listings, rental management, investment tracking, financial analytics, and automated reporting. The platform includes mobile apps for on-the-go access and integrates with payment gateways for seamless transactions.',
    approach: [
      'Analyzed real estate industry workflows and pain points',
      'Designed intuitive user experience for property managers and investors',
      'Built scalable backend infrastructure for handling large property portfolios',
      'Integrated payment processing and financial tracking systems',
      'Developed automated reporting and analytics dashboards',
      'Created mobile applications for field operations'
    ],
    challenges: [
      'Integrating multiple third-party services (maps, payments, analytics)',
      'Handling complex financial calculations and reporting',
      'Ensuring data accuracy across multiple property sources',
      'Scaling the platform to support large property portfolios',
      'Maintaining performance with real-time data updates'
    ],
    impact: [
      '150% increase in user engagement and platform usage',
      '25% growth in platform adoption rate',
      '60% reduction in time spent on manual property management tasks',
      'Streamlined workflows leading to improved operational efficiency',
      'Enhanced investment decision-making through comprehensive analytics',
      'Improved tenant satisfaction through automated communication systems'
    ],
    color: '#fecc4d'
  },
  {
    slug: 'padmavat-construction-management',
    title: 'Padmavat Construction Management',
    client: 'Padmavat Construction',
    category: 'Construction & Infrastructure',
    description: 'Digital solutions for construction project management that improved project tracking, resource allocation, and team collaboration.',
    fullDescription: 'Padmavat Construction needed a comprehensive construction management system to track projects, manage resources, coordinate teams, and ensure timely project delivery. We developed a mobile-first platform with project tracking, resource management, team collaboration, and real-time progress monitoring.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Cloud Infrastructure', 'AWS', 'Docker', 'Redis'],
    results: [
      '35% improvement in project delivery time',
      'Enhanced team collaboration',
      'Real-time project tracking',
      'Reduced project costs by 20%',
      'Improved resource utilization',
      'Better compliance and safety tracking'
    ],
    teamSize: '9-11 members',
    location: 'Ahmedabad, Gujarat, India',
    duration: '5 months',
    problem: 'Construction projects suffered from poor coordination, delayed communication, inefficient resource allocation, and lack of real-time visibility into project progress. Manual tracking led to cost overruns, schedule delays, and quality issues.',
    solution: 'We created a comprehensive construction management platform with mobile apps for field workers, web dashboards for project managers, real-time progress tracking, resource allocation tools, and automated reporting. The system includes features for safety compliance, quality control, and financial tracking.',
    approach: [
      'Conducted field research to understand construction site workflows',
      'Designed mobile-first solution for on-site workers',
      'Built real-time collaboration and communication features',
      'Developed resource allocation and inventory management systems',
      'Created automated reporting for project progress and costs',
      'Integrated safety compliance and quality control tracking'
    ],
    challenges: [
      'Developing mobile apps that work reliably in construction site conditions',
      'Handling offline functionality for areas with poor connectivity',
      'Integrating with various construction equipment and sensors',
      'Managing complex project hierarchies and dependencies',
      'Ensuring data accuracy across multiple project sites'
    ],
    impact: [
      '35% improvement in project delivery timelines',
      '20% reduction in overall project costs',
      'Enhanced collaboration leading to fewer communication gaps',
      'Improved resource utilization and reduced waste',
      'Better safety compliance and incident tracking',
      'Increased client satisfaction through transparent project visibility'
    ],
    color: '#10b981'
  }
]

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find(project => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug)
}

