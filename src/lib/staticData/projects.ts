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
  // 'nova-logistics': {
  //   title: 'Nova Logistics',
  //   client: 'Nova Logistics',
  //   category: 'Logistics & Supply Chain',
  //   description: 'Digital transformation platform for logistics management that streamlined operations and improved efficiency by 40%.',
  //   technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'IoT', 'Docker', 'Redis'],
  //   results: [
  //     '40% improvement in operational efficiency',
  //     'Real-time tracking and visibility',
  //     'Automated route optimization',
  //     'Reduced delivery times by 30%'
  //   ],
  //   teamSize: '8-10 members',
  //   location: 'Ahmedabad, Gujarat, India',
  //   problem: 'Nova Logistics faced challenges with manual route planning, lack of real-time visibility, and inefficient resource allocation. Their existing system couldn\'t handle the growing volume of shipments and lacked integration capabilities with modern logistics tools.',
  //   solution: 'We developed a comprehensive digital transformation platform with real-time tracking, AI-powered route optimization, and automated resource allocation. The solution integrated IoT devices for live shipment monitoring and provided analytics dashboards for data-driven decision making.',
  //   approach: [
  //     'Conducted comprehensive analysis of existing logistics workflows and pain points',
  //     'Designed scalable microservices architecture for high-volume operations',
  //     'Implemented real-time tracking using IoT sensors and GPS integration',
  //     'Developed AI algorithms for optimal route planning and resource allocation',
  //     'Created intuitive dashboards for operations team and management',
  //     'Ensured seamless integration with existing ERP and warehouse systems'
  //   ],
  //   duration: '6 months',
  //   color: '#5e2cb6'
  // },
  // 'brightedge-healthcare-analytics': {
  //   title: 'BrightEdge Healthcare Analytics',
  //   client: 'BrightEdge',
  //   category: 'Healthcare Technology',
  //   description: 'AI-powered healthcare analytics solution that revolutionized patient data analysis and improved decision-making processes.',
  //   technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'HIPAA Compliance', 'FastAPI', 'Docker'],
  //   results: [
  //     '90% reduction in data processing time',
  //     'Real-time patient insights delivery',
  //     'Predictive analytics for patient outcomes',
  //     '50% improvement in decision-making speed'
  //   ],
  //   teamSize: '12-15 members',
  //   location: 'Ahmedabad, Gujarat, India',
  //   problem: 'BrightEdge needed to process massive volumes of patient data while maintaining HIPAA compliance. Their legacy system was slow, couldn\'t provide real-time insights, and lacked predictive capabilities. Healthcare professionals were spending too much time on data analysis instead of patient care.',
  //   solution: 'We built an AI-powered healthcare analytics platform with machine learning models for predictive analytics, real-time data processing, and HIPAA-compliant infrastructure. The solution automated data analysis and provided actionable insights to healthcare professionals.',
  //   approach: [
  //     'Analyzed healthcare data requirements and HIPAA compliance needs',
  //     'Designed secure, HIPAA-compliant architecture with encryption at rest and in transit',
  //     'Developed machine learning models for predictive patient outcome analysis',
  //     'Built real-time data processing pipeline for instant insights',
  //     'Created intuitive dashboards for healthcare professionals',
  //     'Implemented comprehensive audit trails and compliance monitoring'
  //   ],
  //   duration: '8 months',
  //   color: '#c91a6f'
  // },
  // 'urbanmint-property-platform': {
  //   title: 'UrbanMint Property Platform',
  //   client: 'UrbanMint',
  //   category: 'Real Estate Tech',
  //   description: 'Modern property management and investment platform that transformed how real estate professionals manage properties and investments.',
  //   technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Maps API', 'AWS', 'Redis'],
  //   results: [
  //     '150% increase in user engagement',
  //     'Streamlined property management workflows',
  //     'Automated investment tracking',
  //     '25% increase in platform adoption'
  //   ],
  //   teamSize: '10-12 members',
  //   location: 'Ahmedabad, Gujarat, India',
  //   problem: 'UrbanMint required a modern platform to manage properties, track investments, and streamline workflows. Their existing system was outdated, lacked mobile support, and couldn\'t handle the growing user base. Real estate professionals needed better tools for property management and investment tracking.',
  //   solution: 'We developed a comprehensive property management platform with modern UI/UX, mobile-responsive design, automated investment tracking, and integrated payment processing. The platform included advanced search, property analytics, and collaboration tools for real estate teams.',
  //   approach: [
  //     'Conducted user research with real estate professionals to understand workflows',
  //     'Designed modern, intuitive UI/UX with mobile-first approach',
  //     'Built scalable Next.js application with server-side rendering for performance',
  //     'Integrated Stripe for seamless payment processing',
  //     'Implemented advanced property search with Maps API integration',
  //     'Developed automated investment tracking and analytics features'
  //   ],
  //   duration: '7 months',
  //   color: '#d97706'
  // },
  // 'padmavat-construction-management': {
  //   title: 'Padmavat Construction Management',
  //   client: 'Padmavat Construction',
  //   category: 'Construction & Infrastructure',
  //   description: 'Digital solutions for construction project management that improved project tracking, resource allocation, and team collaboration.',
  //   technologies: ['React Native', 'Node.js', 'MongoDB', 'Cloud Infrastructure', 'AWS', 'Docker'],
  //   results: [
  //     '35% improvement in project delivery time',
  //     'Enhanced team collaboration',
  //     'Real-time project tracking',
  //     'Reduced project costs by 20%'
  //   ],
  //   teamSize: '6-8 members',
  //   location: 'Ahmedabad, Gujarat, India',
  //   problem: 'Padmavat Construction struggled with manual project tracking, poor communication between on-site and office teams, and inefficient resource allocation. Project delays were common due to lack of real-time visibility and coordination issues.',
  //   solution: 'We created a comprehensive construction management platform with mobile apps for on-site teams, real-time project tracking, resource management, and collaboration tools. The solution enabled seamless communication and improved project coordination.',
  //   approach: [
  //     'Analyzed construction workflows and on-site requirements',
  //     'Developed React Native mobile apps for field workers',
  //     'Built real-time project tracking and resource allocation system',
  //     'Created collaboration tools for seamless team communication',
  //     'Implemented document management and progress reporting features',
  //     'Ensured offline functionality for remote construction sites'
  //   ],
  //   duration: '5 months',
  //   color: '#059669'
  // },
  'find24': {
    title: 'Find24',
    client: 'Gofind24',
    category: 'Hyperlocal Business Discovery & SaaS',
    description: 'A comprehensive digital ecosystem for Tier 2 and Tier 3 cities in India, connecting users with local businesses and providing tools for business growth.',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'AWS', 'WhatsApp API', 'Razorpay', 'Tailwind CSS'],
    results: [
      '200+ local businesses digitalized in the first quarter',
      '50% increase in direct customer leads for verified vendors',
      '95% user satisfaction in local service discovery',
      'Streamlined communication via WhatsApp integration'
    ],
    teamSize: '6-8 members',
    location: 'India',
    problem: 'Small and medium local vendors in Tier 2 and Tier 3 cities in India lacked a professional digital footprint. Users in these communities struggled to find reliable local services, leading to a disconnected local economy.',
    solution: 'We built an end-to-end hyperlocal discovery platform that enables businesses to create digital catalogs and connect directly with customers via WhatsApp and Call.',
    approach: [
      'In-depth research into local business workflows in Tier 2/3 cities',
      'Designed a highly accessible mobile-first user interface',
      'Developed a scalable search and filtering system for local services',
      'Integrated WhatsApp Business API for seamless B2C communication',
      'Built a subscription-based model with Razorpay integration',
      'Implemented a robust reviews and verification system to build trust'
    ],
    duration: '4 months',
    color: '#4E3CDB'
  },
  'brum-reseller': {
    title: 'Brum Reseller',
    client: 'Brum Reseller',
    category: 'Premium E-commerce & Fashion',
    description: 'A modern, high-performance e-commerce platform for curated apparel, footwear, and accessories with a focus on quality and sustainability.',
    technologies: ['Next.js', 'React', 'Node.js', 'Stripe', 'Tailwind CSS', 'AWS', 'PostgreSQL'],
    results: [
      'Successfully launched multi-category fashion collections',
      'Implemented 100% secure payment gateway with Stripe',
      'Established standardized 3-5 day global shipping workflow',
      '40% increase in mobile conversion rates'
    ],
    teamSize: '5-7 members',
    location: 'United Kingdom',
    problem: 'The luxury fashion market requires high trust and quality presentation. Brum Reseller needed a platform reflecting brand value with modern features like fast shipping and secure payments.',
    solution: 'A clean, high-performance e-commerce platform using Next.js, featuring advanced search, secure payments, and automated logistics management.',
    approach: [
      'Align digital experience with premium fashion standards',
      'Design minimalist UI/UX emphasizing product imagery',
      'Build custom inventory management for real-time tracking',
      'Integrate Stripe for global payment processing',
      'Optimize for mobile-first user experience',
      'Implement robust CI/CD for regular updates'
    ],
    duration: '5 months',
    color: '#E86B32'
  },
  'physiofi': {
    title: 'PhysioFi',
    client: 'PhysioFi',
    category: 'Healthcare & Rehabilitation',
    description: 'A professional physiotherapy platform providing expert doorstep and online consultation services for personalized recovery and pain management.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
    results: [
      'Successfully delivered 1000+ sessions',
      'Developed 4-step recovery workflow',
      'Integrated advanced clinical modalities',
      '35% improvement in patient compliance'
    ],
    teamSize: '4-6 members',
    location: 'India',
    problem: 'Accessibility to specialized physiotherapy is limited by mobility and fragmented follow-up care.',
    solution: 'A modern platform bridging clinical expertise and home-based recovery through hybrid consultations.',
    approach: [
      'Map clinical recovery workflows',
      'Design clean, trust-building UI',
      'Develop robust scheduling system',
      'Build hybrid consultation module',
      'Integrate clinical documentation',
      'Optimize for therapist mobility'
    ],
    duration: '4 months',
    color: '#0D9488'
  },
  'aquapro-cleaning': {
    title: 'AquaPro Cleaning',
    client: 'AquaPro Cleaning Services',
    category: 'Professional Cleaning & Maintenance',
    description: 'A comprehensive cleaning service ecosystem for residential, commercial, and industrial segments with a focus on quality and eco-friendly practices.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'AWS', 'PostgreSQL'],
    results: [
      'Successfully served 500+ customers',
      'Completed 100+ specialized projects',
      'Standardized protocols for 15+ categories',
      '100% bonded and insured service'
    ],
    teamSize: '6-8 members',
    location: 'Canada',
    problem: 'Customers need a reliable, fully insured, and eco-conscious cleaning partner for diverse residential and industrial needs.',
    solution: 'A scalable service platform with mapping, scheduling, and protocol tracking for high-standard cleaning logistics.',
    approach: [
      'Analyze multi-sector cleaning workflows',
      'Design fresh & clean brand-centric UI',
      'Build scalable multi-region backend',
      'Implement specialized protocol tracking',
      'Integrate secure commercial invoicing',
      'Develop mobile field team management'
    ],
    duration: '6 months',
    color: '#0047AB'
  },
  'akshita-enterprise': {
    title: 'Akshita Enterprise',
    client: 'Akshita Enterprise',
    category: 'Premium Real Estate & Consulting',
    description: 'A luxury real estate platform providing verified property listings and transparent guidance for high-end residential and commercial investments.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'Framer Motion'],
    results: [
      'Digitalized 100+ premium properties across multiple categories',
      'Implemented lead-generating WhatsApp and enquiry services',
      'Established trust through verified RERA-checked property mapping',
      '45% reduction in initial search-to-enquiry turnaround'
    ],
    teamSize: '5-7 members',
    location: 'India',
    problem: 'Searching for luxury real estate often lacks centralized, verified information, specifically for HNI and NRI investors.',
    solution: 'A minimalist, high-fidelity real estate platform that prioritizes architectural storytelling and verified documentation.',
    approach: [
      'Market research into luxury buyer behavior',
      'Design premium Gold & Black brand aesthetic',
      'Build real-time property status updates',
      'Integrate intuitive advanced search/filter',
      'Develop specialized NRI support modules',
      'Optimize for high-performance mobile accessibility'
    ],
    duration: '5 months',
    color: '#C8A44A'
  },
  'pramukh-real-estate': {
    title: 'Pramukh Real Estate',
    client: 'Pramukh Group',
    category: 'Premium Real Estate & Consulting',
    description: 'A minimalist digital sanctuary for a premier real estate builder, showcasing the "Architecture of Serenity" through high-fidelity design and tranquil user experiences.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'PostgreSQL'],
    results: [
      'Successfully digitalized ultra-luxury 3 & 4 BHK projects',
      'Established "Architecture of Serenity" market positioning',
      'Implemented high-conversion premium inquiry system',
      'Achieved 50% improvement in time-on-site'
    ],
    teamSize: '5-7 members',
    location: 'India',
    duration: '5 months',
    problem: 'Urban real estate often lacks focus on mental well-being and is characterized by visual clutter.',
    solution: 'A "serene" digital experience mirroring the tranquility of Pramukh\'s physical spaces.',
    approach: [
      'Translate "Philosophy of Peace" into digital UI',
      'Design minimalist layout with "breathing" animations',
      'Develop interactive spotlights for flagship projects',
      'Integrate robust personalized inquiry system',
      'Optimize media for high-resolution photography',
      'Implement signature transitions for brand reinforcement'
    ],
    color: '#A59D84'
  }
}














