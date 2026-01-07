// Static data for project pages
// Moved from inline component data to improve build performance and bundle size

export interface ProjectData {
  title: string
  client: string
  category: string
  description: string
  technologies: string[]
  results: string[]
  teamSize: string
  location: string
  problem: string
  solution: string
  approach: string[]
  duration: string
  color: string
}

export const projectDataMap: Record<string, ProjectData> = {
  'nova-logistics': {
    title: 'Nova Logistics',
    client: 'Nova Logistics',
    category: 'Logistics & Supply Chain',
    description: 'Digital transformation platform for logistics management that streamlined operations and improved efficiency by 40%.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'IoT', 'Docker', 'Redis'],
    results: [
      '40% improvement in operational efficiency',
      'Real-time tracking and visibility',
      'Automated route optimization',
      'Reduced delivery times by 30%'
    ],
    teamSize: '8-10 members',
    location: 'Ahmedabad, Gujarat, India',
    problem: 'Nova Logistics faced challenges with manual route planning, lack of real-time visibility, and inefficient resource allocation. Their existing system couldn\'t handle the growing volume of shipments and lacked integration capabilities with modern logistics tools.',
    solution: 'We developed a comprehensive digital transformation platform with real-time tracking, AI-powered route optimization, and automated resource allocation. The solution integrated IoT devices for live shipment monitoring and provided analytics dashboards for data-driven decision making.',
    approach: [
      'Conducted comprehensive analysis of existing logistics workflows and pain points',
      'Designed scalable microservices architecture for high-volume operations',
      'Implemented real-time tracking using IoT sensors and GPS integration',
      'Developed AI algorithms for optimal route planning and resource allocation',
      'Created intuitive dashboards for operations team and management',
      'Ensured seamless integration with existing ERP and warehouse systems'
    ],
    duration: '6 months',
    color: '#5e2cb6'
  },
  'brightedge-healthcare-analytics': {
    title: 'BrightEdge Healthcare Analytics',
    client: 'BrightEdge',
    category: 'Healthcare Technology',
    description: 'AI-powered healthcare analytics solution that revolutionized patient data analysis and improved decision-making processes.',
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'HIPAA Compliance', 'FastAPI', 'Docker'],
    results: [
      '90% reduction in data processing time',
      'Real-time patient insights delivery',
      'Predictive analytics for patient outcomes',
      '50% improvement in decision-making speed'
    ],
    teamSize: '12-15 members',
    location: 'Ahmedabad, Gujarat, India',
    problem: 'BrightEdge needed to process massive volumes of patient data while maintaining HIPAA compliance. Their legacy system was slow, couldn\'t provide real-time insights, and lacked predictive capabilities. Healthcare professionals were spending too much time on data analysis instead of patient care.',
    solution: 'We built an AI-powered healthcare analytics platform with machine learning models for predictive analytics, real-time data processing, and HIPAA-compliant infrastructure. The solution automated data analysis and provided actionable insights to healthcare professionals.',
    approach: [
      'Analyzed healthcare data requirements and HIPAA compliance needs',
      'Designed secure, HIPAA-compliant architecture with encryption at rest and in transit',
      'Developed machine learning models for predictive patient outcome analysis',
      'Built real-time data processing pipeline for instant insights',
      'Created intuitive dashboards for healthcare professionals',
      'Implemented comprehensive audit trails and compliance monitoring'
    ],
    duration: '8 months',
    color: '#c91a6f'
  },
  'urbanmint-property-platform': {
    title: 'UrbanMint Property Platform',
    client: 'UrbanMint',
    category: 'Real Estate Tech',
    description: 'Modern property management and investment platform that transformed how real estate professionals manage properties and investments.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Maps API', 'AWS', 'Redis'],
    results: [
      '150% increase in user engagement',
      'Streamlined property management workflows',
      'Automated investment tracking',
      '25% increase in platform adoption'
    ],
    teamSize: '10-12 members',
    location: 'Ahmedabad, Gujarat, India',
    problem: 'UrbanMint required a modern platform to manage properties, track investments, and streamline workflows. Their existing system was outdated, lacked mobile support, and couldn\'t handle the growing user base. Real estate professionals needed better tools for property management and investment tracking.',
    solution: 'We developed a comprehensive property management platform with modern UI/UX, mobile-responsive design, automated investment tracking, and integrated payment processing. The platform included advanced search, property analytics, and collaboration tools for real estate teams.',
    approach: [
      'Conducted user research with real estate professionals to understand workflows',
      'Designed modern, intuitive UI/UX with mobile-first approach',
      'Built scalable Next.js application with server-side rendering for performance',
      'Integrated Stripe for seamless payment processing',
      'Implemented advanced property search with Maps API integration',
      'Developed automated investment tracking and analytics features'
    ],
    duration: '7 months',
    color: '#d97706'
  },
  'padmavat-construction-management': {
    title: 'Padmavat Construction Management',
    client: 'Padmavat Construction',
    category: 'Construction & Infrastructure',
    description: 'Digital solutions for construction project management that improved project tracking, resource allocation, and team collaboration.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Cloud Infrastructure', 'AWS', 'Docker'],
    results: [
      '35% improvement in project delivery time',
      'Enhanced team collaboration',
      'Real-time project tracking',
      'Reduced project costs by 20%'
    ],
    teamSize: '6-8 members',
    location: 'Ahmedabad, Gujarat, India',
    problem: 'Padmavat Construction struggled with manual project tracking, poor communication between on-site and office teams, and inefficient resource allocation. Project delays were common due to lack of real-time visibility and coordination issues.',
    solution: 'We created a comprehensive construction management platform with mobile apps for on-site teams, real-time project tracking, resource management, and collaboration tools. The solution enabled seamless communication and improved project coordination.',
    approach: [
      'Analyzed construction workflows and on-site requirements',
      'Developed React Native mobile apps for field workers',
      'Built real-time project tracking and resource allocation system',
      'Created collaboration tools for seamless team communication',
      'Implemented document management and progress reporting features',
      'Ensured offline functionality for remote construction sites'
    ],
    duration: '5 months',
    color: '#059669'
  }
}











