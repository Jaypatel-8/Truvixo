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
  liveLink?: string
  githubLink?: string
  imageUrl?: string
}

export const projects: ProjectDetail[] = [
  // {
  //   slug: 'nova-logistics',
  //   title: 'Nova Logistics',
  //   client: 'Nova Logistics',
  //   category: 'Logistics & Supply Chain',
  //   description: 'Digital transformation platform for logistics management that streamlined operations and improved efficiency by 40%.',
  //   fullDescription: 'Nova Logistics required a comprehensive digital transformation solution to modernize their logistics operations, improve real-time tracking, and optimize delivery routes. We developed a scalable platform that integrated IoT devices, real-time analytics, and automated route optimization to transform their entire supply chain management.',
  //   technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'IoT', 'Redis', 'Docker', 'Kubernetes'],
  //   results: [
  //     '40% improvement in operational efficiency',
  //     'Real-time tracking and visibility',
  //     'Automated route optimization',
  //     'Reduced delivery times by 30%',
  //     '50% reduction in fuel costs',
  //     '99.9% system uptime'
  //   ],
  //   teamSize: '8-10 members',
  //   location: 'USA',
  //   duration: '6 months',
  //   problem: 'Nova Logistics faced significant challenges with manual tracking systems, inefficient route planning, and lack of real-time visibility into their supply chain operations. This resulted in delayed deliveries, increased fuel costs, and poor customer satisfaction.',
  //   solution: 'We developed a comprehensive logistics management platform with real-time GPS tracking, AI-powered route optimization, automated dispatch systems, and integrated IoT sensors for cargo monitoring. The solution included mobile apps for drivers, web dashboards for managers, and APIs for third-party integrations.',
  //   approach: [
  //     'Conducted comprehensive analysis of existing logistics workflows and pain points',
  //     'Designed scalable microservices architecture for high availability',
  //     'Implemented real-time tracking using GPS and IoT sensors',
  //     'Developed AI algorithms for optimal route planning and resource allocation',
  //     'Created intuitive mobile and web interfaces for different user roles',
  //     'Established continuous monitoring and analytics dashboards'
  //   ],
  //   challenges: [
  //     'Integrating multiple legacy systems with modern cloud infrastructure',
  //     'Ensuring real-time data synchronization across distributed systems',
  //     'Handling high-volume GPS data processing and storage',
  //     'Maintaining system performance during peak delivery periods',
  //     'Ensuring data security and compliance with logistics regulations'
  //   ],
  //   impact: [
  //     '40% improvement in overall operational efficiency',
  //     '30% reduction in delivery times',
  //     '50% decrease in fuel consumption through optimized routes',
  //     '99.9% system reliability and uptime',
  //     'Significant improvement in customer satisfaction scores',
  //     'Scalable infrastructure supporting 10x growth'
  //   ],
  //   color: '#5e2cb6',
  //   liveLink: 'https://novalogistics.demo.truvixo.com',
  //   githubLink: 'https://github.com/truvixo/nova-logistics',
  //   imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
  // },
  // {
  //   slug: 'brightedge-healthcare-analytics',
  //   title: 'BrightEdge Healthcare Analytics',
  //   client: 'BrightEdge',
  //   category: 'Healthcare Technology',
  //   description: 'AI-powered healthcare analytics solution that revolutionized patient data analysis and improved decision-making processes.',
  //   fullDescription: 'BrightEdge needed an advanced healthcare analytics platform to process large volumes of patient data, provide predictive insights, and support clinical decision-making. We built a HIPAA-compliant AI-powered system that analyzes patient records, predicts health outcomes, and delivers actionable insights to healthcare providers.',
  //   technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'HIPAA Compliance', 'FastAPI', 'Docker', 'AWS'],
  //   results: [
  //     '90% reduction in data processing time',
  //     'Real-time patient insights delivery',
  //     'Predictive analytics for patient outcomes',
  //     '50% improvement in decision-making speed',
  //     '95% accuracy in risk prediction models',
  //     'Full HIPAA compliance achieved'
  //   ],
  //   teamSize: '12-15 members',
  //   location: 'USA',
  //   duration: '8 months',
  //   problem: 'Healthcare providers struggled with processing vast amounts of patient data manually, leading to delayed diagnoses, missed patterns, and inefficient resource allocation. The lack of predictive analytics made it difficult to identify at-risk patients early.',
  //   solution: 'We developed an AI-powered healthcare analytics platform that processes patient data in real-time, uses machine learning models for predictive analytics, and provides intuitive dashboards for healthcare professionals. The system includes automated risk scoring, treatment recommendations, and population health insights.',
  //   approach: [
  //     'Conducted extensive research on healthcare data patterns and clinical workflows',
  //     'Developed HIPAA-compliant data processing and storage infrastructure',
  //     'Built machine learning models for disease prediction and risk assessment',
  //     'Created secure APIs for integration with existing hospital systems',
  //     'Designed user-friendly dashboards for doctors and administrators',
  //     'Implemented comprehensive security measures and audit logging'
  //   ],
  //   challenges: [
  //     'Ensuring HIPAA compliance throughout the development process',
  //     'Processing and analyzing large volumes of sensitive patient data',
  //     'Integrating with multiple legacy hospital information systems',
  //     'Maintaining model accuracy while ensuring interpretability for clinicians',
  //     'Handling real-time data processing with minimal latency'
  //   ],
  //   impact: [
  //     '90% reduction in time spent on data analysis',
  //     '50% faster clinical decision-making process',
  //     '95% accuracy in predicting patient health risks',
  //     'Significant improvement in early intervention rates',
  //     'Enhanced patient outcomes through data-driven care',
  //     'Reduced healthcare costs through preventive care strategies'
  //   ],
  //   color: '#c91a6f',
  //   liveLink: 'https://brightedge.demo.truvixo.com',
  //   githubLink: 'https://github.com/truvixo/brightedge-analytics',
  //   imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  // },
  // {
  //   slug: 'urbanmint-property-platform',
  //   title: 'UrbanMint Property Platform',
  //   client: 'UrbanMint',
  //   category: 'Real Estate Tech',
  //   description: 'Modern property management and investment platform that transformed how real estate professionals manage properties and investments.',
  //   fullDescription: 'UrbanMint required a comprehensive property management and investment platform to streamline property operations, track investments, and provide analytics for real estate professionals. We built a modern platform with property listings, investment tracking, financial analytics, and automated workflows.',
  //   technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Maps API', 'Redis', 'AWS', 'Docker'],
  //   results: [
  //     '150% increase in user engagement',
  //     'Streamlined property management workflows',
  //     'Automated investment tracking',
  //     '25% increase in platform adoption',
  //     '60% reduction in manual data entry',
  //     'Real-time property valuation updates'
  //   ],
  //   teamSize: '10-12 members',
  //   location: 'Australia',
  //   duration: '7 months',
  //   problem: 'Real estate professionals struggled with fragmented tools, manual property tracking, and lack of comprehensive investment analytics. Managing multiple properties, tracking rental income, and analyzing investment performance required multiple disconnected systems.',
  //   solution: 'We developed a unified property management platform that consolidates property listings, rental management, investment tracking, financial analytics, and automated reporting. The platform includes mobile apps for on-the-go access and integrates with payment gateways for seamless transactions.',
  //   approach: [
  //     'Analyzed real estate industry workflows and pain points',
  //     'Designed intuitive user experience for property managers and investors',
  //     'Built scalable backend infrastructure for handling large property portfolios',
  //     'Integrated payment processing and financial tracking systems',
  //     'Developed automated reporting and analytics dashboards',
  //     'Created mobile applications for field operations'
  //   ],
  //   challenges: [
  //     'Integrating multiple third-party services (maps, payments, analytics)',
  //     'Handling complex financial calculations and reporting',
  //     'Ensuring data accuracy across multiple property sources',
  //     'Scaling the platform to support large property portfolios',
  //     'Maintaining performance with real-time data updates'
  //   ],
  //   impact: [
  //     '150% increase in user engagement and platform usage',
  //     '25% growth in platform adoption rate',
  //     '60% reduction in time spent on manual property management tasks',
  //     'Streamlined workflows leading to improved operational efficiency',
  //     'Enhanced investment decision-making through comprehensive analytics',
  //     'Improved tenant satisfaction through automated communication systems'
  //   ],
  //   color: '#d97706',
  //   liveLink: 'https://urbanmint.demo.truvixo.com',
  //   githubLink: 'https://github.com/truvixo/urbanmint-api',
  //   imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop'
  // },
  // {
  //   slug: 'padmavat-construction-management',
  //   title: 'Padmavat Construction Management',
  //   client: 'Padmavat Construction',
  //   category: 'Construction & Infrastructure',
  //   description: 'Digital solutions for construction project management that improved project tracking, resource allocation, and team collaboration.',
  //   fullDescription: 'Padmavat Construction needed a comprehensive construction management system to track projects, manage resources, coordinate teams, and ensure timely project delivery. We developed a mobile-first platform with project tracking, resource management, team collaboration, and real-time progress monitoring.',
  //   technologies: ['React Native', 'Node.js', 'MongoDB', 'Cloud Infrastructure', 'AWS', 'Docker', 'Redis'],
  //   results: [
  //     '35% improvement in project delivery time',
  //     'Enhanced team collaboration',
  //     'Real-time project tracking',
  //     'Reduced project costs by 20%',
  //     'Improved resource utilization',
  //     'Better compliance and safety tracking'
  //   ],
  //   teamSize: '9-11 members',
  //   location: 'UK',
  //   duration: '5 months',
  //   problem: 'Construction projects suffered from poor coordination, delayed communication, inefficient resource allocation, and lack of real-time visibility into project progress. Manual tracking led to cost overruns, schedule delays, and quality issues.',
  //   solution: 'We created a comprehensive construction management platform with mobile apps for field workers, web dashboards for project managers, real-time progress tracking, resource allocation tools, and automated reporting. The system includes features for safety compliance, quality control, and financial tracking.',
  //   approach: [
  //     'Conducted field research to understand construction site workflows',
  //     'Designed mobile-first solution for on-site workers',
  //     'Built real-time collaboration and communication features',
  //     'Developed resource allocation and inventory management systems',
  //     'Created automated reporting for project progress and costs',
  //     'Integrated safety compliance and quality control tracking'
  //   ],
  //   challenges: [
  //     'Developing mobile apps that work reliably in construction site conditions',
  //     'Handling offline functionality for areas with poor connectivity',
  //     'Integrating with various construction equipment and sensors',
  //     'Managing complex project hierarchies and dependencies',
  //     'Ensuring data accuracy across multiple project sites'
  //   ],
  //   impact: [
  //     '35% improvement in project delivery timelines',
  //     '20% reduction in overall project costs',
  //     'Enhanced collaboration leading to fewer communication gaps',
  //     'Improved resource utilization and reduced waste',
  //     'Better safety compliance and incident tracking',
  //     'Increased client satisfaction through transparent project visibility'
  //   ],
  //   color: '#059669',
  //   liveLink: 'https://padmavat.demo.truvixo.com',
  //   githubLink: 'https://github.com/truvixo/padmavat-mobile',
  //   imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop'
  // },
  {
    slug: 'find24',
    title: 'Find24',
    client: 'Gofind24',
    category: 'Hyperlocal Business Discovery & SaaS',
    description: 'A comprehensive digital ecosystem for Tier 2 and Tier 3 cities in India, connecting users with local businesses and providing tools for business growth.',
    fullDescription: 'Find24 (Gofind24) is a specialized service ecosystem designed to bridge the digital gap in Tier 2 and Tier 3 cities across India. It serves as a comprehensive platform for users to discover local businesses and professionals, while providing business owners with an easy-to-use digital presence through WhatsApp integration, digital catalogs, and lead generation tools.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'WhatsApp API', 'Tailwind CSS'],
    results: [
      '200+ local businesses digitalized in the first quarter',
      '50% increase in direct customer leads for verified vendors',
      '95% user satisfaction in local service discovery',
      'Streamlined communication via WhatsApp integration',
      'Real-time business analytics for small vendors',
      'Improved local accessibility to essential services'
    ],
    teamSize: '6-8 members',
    location: 'India',
    duration: '4 months',
    problem: 'Small and medium local vendors in Tier 2 and Tier 3 cities in India lacked a professional digital footprint. Users in these communities struggled to find reliable local services, leading to a disconnected local economy and missed business opportunities.',
    solution: 'We built an end-to-end hyperlocal discovery platform that enables businesses to create digital catalogs and connect directly with customers via WhatsApp and Call. The solution includes a powerful search engine, verified business badges, customer reviews, and a growth analytics dashboard for business owners.',
    approach: [
      'In-depth research into local business workflows in Tier 2/3 cities',
      'Designed a highly accessible mobile-first user interface',
      'Developed a scalable search and filtering system for local services',
      'Integrated WhatsApp Business API for seamless B2C communication',
      'Built a subscription-based model with Razorpay integration',
      'Implemented a robust reviews and verification system to build trust'
    ],
    challenges: [
      'Designing an interface that is intuitive for non-technical business owners',
      'Handling real-time location-based search across diverse regions',
      'Ensuring high performance on lower-end mobile devices and slower networks',
      'Integrating secure payment processing for recurring subscriptions',
      'Building a scalable media management system for product catalogs'
    ],
    impact: [
      'Empowered local Indian businesses with professional digital tools',
      'Bridged the digital gap for Tier 2 and Tier 3 city residents',
      'Significant growth in local vendor visibility and lead counts',
      'Created a trustworthy ecosystem for local service discovery',
      'High platform retention rate among subscribed business owners',
      'Scalable architecture ready for national expansion'
    ],
    color: '#4E3CDB',
    liveLink: 'https://www.gofind24.com/',
    imageUrl: '/images/projects/find24.png'
  },
  {
    slug: 'brum-reseller',
    title: 'Brum Reseller',
    client: 'Brum Reseller',
    category: 'Premium E-commerce & Fashion',
    description: 'A modern, high-performance e-commerce platform for curated apparel, footwear, and accessories with a focus on quality and sustainability.',
    fullDescription: 'Brum Reseller is a premium digital destination for modern fashion enthusiasts. The platform provides a curated collection of high-quality apparel, footwear, and accessories. We built a high-performance storefront with seamless navigation, secure payment processing, and a robust backend to manage global logistics and customer success.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Stripe', 'Tailwind CSS', 'AWS', 'PostgreSQL'],
    results: [
      'Successfully launched multi-category collections across Men’s, Women’s, and Kid’s fashion',
      'Implemented a 100% secure payment gateway with Stripe integration',
      'Established a standardized 3-5 day global shipping workflow',
      'Achieved a 40% increase in mobile conversion rates through responsive design',
      'Maintained a 99% customer satisfaction rate with 24/7 support framework',
      'Reduced average page load time to under 1.2 seconds'
    ],
    teamSize: '5-7 members',
    location: 'United Kingdom',
    duration: '5 months',
    problem: 'The luxury and premium fashion market requires a high level of trust and quality presentation. Brum Reseller needed a platform that reflected their brand value while providing modern e-commerce features like fast shipping, secure payments, and sustainable practices transparency.',
    solution: 'We developed a clean, minimalist, and high-performance e-commerce platform using Next.js and Tailwind CSS. The solution included advanced search and filtering, integrated payment systems, automated inventory management, and a dedicated customer support dashboard.',
    approach: [
      'Conducted brand research to align the digital experience with premium fashion standards',
      'Designed a minimalist UI/UX that emphasizes high-quality product imagery',
      'Built a custom inventory management system for real-time stock tracking',
      'Integrated Stripe for global, multi-currency payment processing',
      'Optimized the platform for mobile devices to capture the fashion-forward demographic',
      'Implemented a robust CI/CD pipeline for seamless regular updates'
    ],
    challenges: [
      'Ensuring high-resolution images load quickly across different network speeds',
      'Managing complex categorization for global fashion collections',
      'Building a secure and scalable multi-currency payment system',
      'Integrating with multiple international shipping providers',
      'Maintaining brand consistency across all digital touchpoints'
    ],
    impact: [
      'Established Brum Reseller as a trusted name in premium e-commerce',
      'Significantly improved user engagement through a high-performance interface',
      'Streamlined global logistics through automated workflows',
      'Provided a scalable foundation for future brand expansion',
      'Enhanced customer trust through secure and transparent shopping experiences',
      'Successfully communicated the brand\'s commitment to quality and sustainability'
    ],
    color: '#E86B32',
    liveLink: 'https://www.brumreseller.co.uk/',
    imageUrl: '/images/projects/brum-reseller.png'
  },
  {
    slug: 'physiofi',
    title: 'PhysioFi',
    client: 'PhysioFi',
    category: 'Healthcare & Rehabilitation',
    description: 'A professional physiotherapy platform providing expert doorstep and online consultation services for personalized recovery and pain management.',
    fullDescription: 'PhysioFi is a comprehensive digital health platform designed to transform physiotherapy delivery. By combining clinical expertise with a hybrid service model of home visits and tele-consultations, PhysioFi ensures high patient compliance and effective recovery. The platform features advanced therapy integrations, clinical progress tracking, and a streamlined recovery workflow.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vercel', 'PostgreSQL', 'Framer Motion'],
    results: [
      'Successfully delivered 1000+ home physiotherapy sessions in Ahmedabad',
      'Developed a standardized 4-step recovery workflow for clinical consistency',
      'Integrated advanced modalities like Cupping and Dry Needling into home protocols',
      'Achieved a 35% improvement in patient compliance through hybrid consultation',
      '98% positive patient recovery feedback for chronic pain management',
      'Reduced initial assessment turnaround time by 50%'
    ],
    teamSize: '4-6 members',
    location: 'India',
    duration: '4 months',
    problem: 'Patients requiring physical rehabilitation often struggle with the inconvenience of clinic visits, leading to missed sessions and prolonged recovery. Fragmented clinical documentation and lack of personalized follow-up further hinder the effective management of chronic pain and mobility issues.',
    solution: 'We built a modern, patient-centric platform that bridges the gap between expert clinical care and home-based recovery. The solution includes an intuitive booking system, digital assessment tools, personalized exercise libraries, and a secure tele-consultation framework for remote guidance.',
    approach: [
      'Mapped out end-to-end clinical recovery workflows for physiotherapy',
      'Designed a clean, professional UI that builds trust in a clinical setting',
      'Developed a robust scheduling system for home visit management',
      'Built a hybrid Consultation module for seamless virtual assessments',
      'Integrated clinical documentation for patient progress monitoring',
      'Optimized the mobile experience for on-the-go therapist management'
    ],
    challenges: [
      'Ensuring consistent clinical quality across distributed home-visit services',
      'Building a user-friendly interface for geriatric and post-op patients',
      'Managing real-time location-based scheduling for therapists',
      'Providing high-quality video streaming for tele-consultations',
      'Securing sensitive patient health data and recovery records'
    ],
    impact: [
      'Empowered patients with accessible, high-quality physiotherapy care',
      'Redefined home-based rehabilitation through standardized clinical protocols',
      'Improved recovery outcomes through consistent and personalized therapy',
      'Streamlined clinic operations via automated booking and documentation',
      'Established PhysioFi as a leading digital health provider in Ahmedabad',
      'Scalable model ready for expansion into new therapeutic regions'
    ],
    color: '#0D9488',
    liveLink: 'https://physiofi.vercel.app/',
    imageUrl: '/images/projects/physiofi.png'
  },
  {
    slug: 'aquapro-cleaning',
    title: 'AquaPro Cleaning',
    client: 'AquaPro Cleaning Services',
    category: 'Professional Cleaning & Maintenance',
    description: 'A comprehensive cleaning service ecosystem for residential, commercial, and industrial segments with a focus on quality and eco-friendly practices.',
    fullDescription: 'AquaPro Cleaning Services is a premier provider of professional cleaning solutions across Canada. The platform manages a diverse range of services from residential deep cleaning to specialized industrial and yacht maintenance. We built a robust service management system that integrates booking, scheduling, and specialized protocol tracking to ensure the highest level of cleanliness.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'AWS', 'PostgreSQL', 'Framer Motion'],
    results: [
      'Successfully served 500+ quality customers across Ontario',
      'Completed 100+ specialized industrial and yacht cleaning projects',
      'Standardized cleaning protocols for 15+ different service categories',
      'Achieved 100% bonded and insured status for client trust',
      'Integrated eco-friendly product lines into all cleaning workflows',
      'Optimized booking workflow reducing scheduling time by 60%'
    ],
    teamSize: '6-8 members',
    location: 'Canada',
    duration: '6 months',
    problem: 'The cleaning industry often suffers from a lack of transparency, inconsistent quality, and difficulty in managing specialized requests like move-in/out or marine cleaning. Customers need a reliable, fully insured partner that can handle multi-sector needs while maintaining high standards.',
    solution: 'We developed an end-to-end service platform that streamlines the cleaning lifecycle. The solution includes a detailed service catalog, automated booking and quoting, specialized protocol checklists for therapists, and an integrated customer feedback system to guarantee quality.',
    approach: [
      'Analyzed operational workflows across residential and industrial cleaning sectors',
      'Designed a professional, "fresh & clean" UI that reflects the brand identity',
      'Built a scalable backend for multi-region service management',
      'Implemented specialized protocol tracking for yacht and post-construction projects',
      'Integrated secure payment and invoicing for commercial clients',
      'Developed a mobile-optimized interface for field team management'
    ],
    challenges: [
      'Managing diverse service protocols across residential and industrial sectors',
      'Scaling logistics for teams across multiple cities in Ontario',
      'Ensuring consistent quality standards for specialized cleaning tasks',
      'Building a robust booking system for complex, multi-day projects',
      'Maintaining real-time inventory tracking for eco-friendly supplies'
    ],
    impact: [
      'Established AquaPro as a leading professional cleaning brand in Ontario',
      'Transformed cleaning logistics into a streamlined digital ecosystem',
      'Enhanced customer trust through transparent and insured service models',
      'Improved operational efficiency via automated scheduling and protocol tracking',
      'Promoted sustainable practices through integrated eco-friendly workflows',
      'Scalable architecture ready for national expansion across Canada'
    ],
    color: '#0047AB',
    liveLink: 'https://aquapro-cleaning.com/',
    imageUrl: '/images/projects/aquapro.png'
  },
  {
    slug: 'akshita-enterprise',
    title: 'Akshita Enterprise',
    client: 'Akshita Enterprise',
    category: 'Premium Real Estate & Consulting',
    description: 'A luxury real estate platform providing verified property listings and transparent guidance for high-end residential and commercial investments.',
    fullDescription: 'Akshita Enterprise is a premier real estate channel partner serving the Ahmedabad and Gandhinagar regions. The platform consolidates premium property listings across residential, commercial, industrial, and agricultural sectors. We built a high-fidelity digital experience that focuses on transparency, verified documentation, and end-to-end guidance for luxury property buyers.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'Framer Motion', 'Vercel', 'PostgreSQL'],
    results: [
      'Digitalized a diverse portfolio of 100+ premium properties',
      'Implemented a lead-generating WhatsApp and enquiry integration system',
      'Achieved a premium brand positioning through luxury visual design',
      'Established trust through verified RERA-checked property status mapping',
      'Standardized a comprehensive 5-step property acquisition workflow',
      'Reduced initial property search-to-enquiry time by 45%'
    ],
    teamSize: '5-7 members',
    location: 'India',
    duration: '5 months',
    problem: 'The luxury real estate market in growing urban hubs often lacks centralized, verified, and transparent information. High-net-worth individuals and NRI investors struggle with fragmented listings and complex legal/loan documentation when searching for premium assets.',
    solution: 'We developed a minimalist, high-performance real estate platform that prioritizes high-fidelity architectural imagery and verified property data. The solution includes advanced filtering, real-time status tracking, and integrated support for professional legal and financial services.',
    approach: [
      'Conducted market research into the luxury real estate buyer journey',
      'Designed a premium "Gold & Black" UI aesthetic to reflect elite branding',
      'Built a robust property management system for real-time status updates',
      'Integrated an intuitive advanced search and filtering experience',
      'Developed specialized modules for NRI and professional legal services',
      'Optimized for mobile-first engagement for busy professional investors'
    ],
    challenges: [
      'Maintaining high performance while rendering high-resolution architectural images',
      'Consolidating complex data for diverse property categories (Residential to Industrial)',
      'Building a secure and reliable enquiry tracking system',
      'Ensuring real-time synchronization of property availability status',
      'Balancing luxury aesthetics with high-performance web standards'
    ],
    impact: [
      'Positioned Akshita Enterprise as the trusted authority in premium real estate',
      'Significantly improved property discovery for high-profile investors',
      'Streamlined the acquisition journey through integrated professional services',
      'Enhanced client trust through transparent, verified documentation',
      'Established a scalable digital foundation for future regional expansion',
      'Achieved superior user engagement through immersive architectural storytelling'
    ],
    color: '#C8A44A',
    liveLink: 'https://www.akshitaenterprise.com/',
    imageUrl: '/images/projects/akshita.png'
  },
  {
    slug: 'pramukh-real-estate',
    title: 'Pramukh Real Estate',
    client: 'Pramukh Group',
    category: 'Premium Real Estate & Consulting',
    description: 'A minimalist digital sanctuary for a premier real estate builder, showcasing the "Architecture of Serenity" through high-fidelity design and tranquil user experiences.',
    fullDescription: 'Pramukh Real Estate (Pramukh Group) is a visionary real estate developer focused on creating "residential sanctuaries" in Ahmedabad. The platform embodies their core philosophy of minimalist luxury and spiritual peace. We developed a high-fidelity digital portal that prioritizes architectural storytelling, serene animations, and a seamless inquiry journey for ultra-luxury residential projects.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'PostgreSQL'],
    results: [
      'Successfully digitalized a portfolio of ultra-luxury 3 & 4 BHK projects',
      'Established a unique "Architecture of Serenity" brand position in the Ahmedabad market',
      'Implemented a high-conversion inquiry system for premium property leads',
      'Achieved a 50% improvement in time-on-site through immersive galleries',
      'Unified the brand legacy of 30+ years into a modern digital experience',
      'Scalable hosting architecture ready for rapid project launches'
    ],
    teamSize: '5-7 members',
    location: 'India',
    duration: '5 months',
    problem: 'The urban real estate market is often characterized by information overload, visual clutter, and a lack of focus on the inhabitant\'s mental well-being. Pramukh Group needed a digital presence that differentiated their "peace-first" philosophy from the high-decibel marketing of traditional developers.',
    solution: 'We built a minimalist, "serene" digital experience that mirrors the tranquility of Pramukh\'s physical spaces. Using Next.js and Framer Motion, we created a flow that guides users through a peaceful journey—from high-fidelity architectural reveals to verified project details and direct access to curated well-being amenities.',
    approach: [
      'Deep-dive into the "Philosophy of Peace" to translate physical architecture into digital UI',
      'Designed a high-contrast, minimalist layout with generous whitespace and "breathing" animations',
      'Developed interactive project spotlights for flagship developments like Vivanta and Elysium',
      'Integrated a robust inquiry management system for personalized buyer guidance',
      'Optimized media delivery for high-resolution architectural photography',
      'Implemented smooth scroll reveals and signature transitions to reinforce the brand theme'
    ],
    challenges: [
      'Translating a core philosophical concept like "Serenity" into functional web design',
      'Balancing high-resolution architectural imagery with aggressive performance targets',
      'Developing a custom animation framework for delicate, non-intrusive scroll reveals',
      'Ensuring a premium experience across all device types and network conditions',
      'Organizing a diverse portfolio of luxury projects into a cohesive narrative'
    ],
    impact: [
      'Positioned Pramukh Group as the definitive leader in "Peaceful Luxury" real estate',
      'Significantly enhanced user trust and brand credibility among high-net-worth investors',
      'Streamlined the property discovery process for premium buyers',
      'Increased the quality and volume of digital inquiries for flagship projects',
      'Provided a future-proof digital foundation for the group\'s expanding portfolio',
      'Effectively communicated the brand\'s commitment to timeless cultural values'
    ],
    color: '#A59D84',
    liveLink: 'https://pramukh-real-estate-ochre.vercel.app/',
    imageUrl: '/images/projects/pramukh.png'
  }
]

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find(project => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug)
}

