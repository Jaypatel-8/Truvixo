// Static data for home page
// Moved from inline component data to improve build performance and bundle size

export const homeServicesList = [
  { 
    name: 'Custom Software Development', 
    description: 'Tailored software solutions built to scale with your business needs and drive digital transformation',
    iconName: 'Code',
    color: '#5e2cb6'
  },
  {
    name: 'AI & Machine Learning', 
    description: 'Intelligent systems that learn, adapt, and deliver measurable results through advanced algorithms',
    iconName: 'Brain',
    color: '#c91a6f'
  },
  { 
    name: 'Web & Mobile Development', 
    description: 'Modern applications that deliver exceptional user experiences across all devices and platforms',
    iconName: 'Smartphone',
    color: '#fecc4d'
  },
  { 
    name: 'Cloud & DevOps', 
    description: 'Scalable infrastructure and seamless deployment pipelines that accelerate your time to market',
    iconName: 'Cloud',
    color: '#10b981'
  },
  {
    name: 'Digital Marketing', 
    description: 'Data-driven strategies that amplify your brand and drive growth through targeted campaigns',
    iconName: 'Megaphone',
    color: '#5e2cb6'
  },
  { 
    name: 'UI/UX Design', 
    description: 'Intuitive interfaces that engage users and drive conversions through exceptional design',
    iconName: 'Palette',
    color: '#c91a6f'
  },
  { 
    name: 'Data Engineering', 
    description: 'Transform raw data into actionable insights and intelligence that power business decisions',
    iconName: 'Database',
    color: '#fecc4d'
  },
  {
    name: 'Enterprise Solutions', 
    description: 'Robust systems designed for scale, security, and performance to support enterprise growth',
    iconName: 'Server',
    color: '#10b981'
  },
  { 
    name: 'Consulting & Strategy', 
    description: 'Strategic guidance to optimize your technology investments and accelerate digital transformation',
    iconName: 'Target',
    color: '#5e2cb6'
  },
  { 
    name: 'Maintenance & Support', 
    description: 'Ongoing optimization and support to keep your systems running smoothly and efficiently',
    iconName: 'Settings',
    color: '#c91a6f'
  },
  {
    name: 'Legacy Modernization', 
    description: 'Transform outdated systems into modern, efficient solutions that drive innovation',
    iconName: 'Wrench',
    color: '#fecc4d'
  }
] as const

export const homeWhyChooseUs = [
  { title: 'Proven Expertise', iconName: 'Award' },
  { title: 'Scalable Solutions', iconName: 'Rocket' },
  { title: 'Risk-Free Trial', iconName: 'Shield' },
  { title: 'Enterprise Security', iconName: 'Shield' },
  { title: 'Transparent Communication', iconName: 'MessageSquare' }
] as const

export const homeTestimonials = [
  {
    quote: 'They delivered our MVP in 8 weeks — excellent engineering and communication. The team was responsive, professional, and delivered exactly what we needed.', 
    author: 'Sarah Johnson', 
    role: 'Product Lead',
    company: 'SaaS Startup',
    rating: 5
  },
  { 
    quote: 'Our internal search accuracy improved dramatically after their AI implementation. The system they built has transformed how we handle customer queries.', 
    author: 'Michael Chen', 
    role: 'CTO',
    company: 'Healthcare Company',
    rating: 5
  },
  { 
    quote: 'TruVixo helped us scale from 0 to 100K users in 6 months. Their expertise in cloud infrastructure and DevOps was invaluable.', 
    author: 'David Rodriguez', 
    role: 'Founder & CEO',
    company: 'FinTech Startup',
    rating: 5
  },
  { 
    quote: 'The mobile app they developed exceeded our expectations. Clean code, on-time delivery, and great support throughout the project.', 
    author: 'Emily Watson', 
    role: 'Product Manager',
    company: 'E-commerce Platform',
    rating: 5
  },
  { 
    quote: 'Working with TruVixo was seamless. They understood our vision and delivered a product that perfectly matched our requirements.', 
    author: 'James Anderson', 
    role: 'Co-Founder',
    company: 'EdTech Company',
    rating: 5
  },
  { 
    quote: 'Their AI development team is top-notch. They built a custom ML model that increased our conversion rates by 40%.', 
    author: 'Lisa Thompson', 
    role: 'Head of Marketing',
    company: 'Retail Company',
    rating: 5
  },
  {
    quote: 'TruVixo transformed our business operations with their custom software solution. The team understood our requirements perfectly and delivered beyond expectations. Their technical expertise and commitment to quality is outstanding.',
    author: 'Rajesh Kumar',
    role: 'Founder & CEO',
    company: 'Mumbai-based FinTech Startup',
    rating: 5
  },
  {
    quote: 'We partnered with TruVixo for our e-commerce platform development. They delivered a robust, scalable solution that handles our growing customer base seamlessly. Their support team is always available and responsive.',
    author: 'Priya Sharma',
    role: 'Director of Technology',
    company: 'Delhi-based Retail Company',
    rating: 5
  },
  {
    quote: 'The AI-powered analytics system TruVixo built for us has revolutionized our decision-making process. Their team is highly skilled, professional, and always delivers on time. Highly recommended!',
    author: 'Amit Patel',
    role: 'CTO',
    company: 'Bangalore Healthcare Solutions',
    rating: 5
  },
  {
    quote: 'TruVixo developed our mobile application with exceptional attention to detail. The app has received great feedback from our users. Their development process is transparent and their communication is excellent throughout.',
    author: 'Neha Gupta',
    role: 'Product Head',
    company: 'Hyderabad EdTech Platform',
    rating: 5
  },
  {
    quote: 'Working with TruVixo has been a game-changer for our startup. They helped us build a scalable cloud infrastructure that supports our rapid growth. Their DevOps expertise is truly impressive.',
    author: 'Vikram Singh',
    role: 'Co-Founder',
    company: 'Pune SaaS Company',
    rating: 5
  },
  {
    quote: 'TruVixo\'s team delivered our enterprise software solution ahead of schedule. The quality of code and documentation is excellent. They truly understand business requirements and translate them into technical solutions effectively.',
    author: 'Anjali Mehta',
    role: 'IT Director',
    company: 'Chennai Manufacturing Company',
    rating: 5
  }
] as const

export const homeFAQs = [
  { 
    question: 'How quickly can you start a software development project?', 
    answer: 'We can onboard a dedicated developer within 1–2 weeks, while full development teams are assembled based on project scope and requirements. Our agile onboarding process ensures quick project initiation without compromising quality or thorough planning.' 
  },
  { 
    question: 'Do you sign NDAs and maintain data security?', 
    answer: 'Yes, we sign comprehensive NDAs and follow strict security practices including ISO 27001 standards, regular security audits, encrypted communications, and secure development environments. Client data confidentiality and intellectual property protection are our top priorities.' 
  },
  { 
    question: 'Do you offer a risk-free trial period?', 
    answer: 'Yes, we offer a 1-week risk-free trial for development engagements. This allows you to evaluate our technical expertise, communication style, and work quality before committing to a long-term partnership. If you are not satisfied, there is no obligation to continue.' 
  },
  { 
    question: 'What industries do you serve with your software solutions?', 
    answer: 'We serve diverse industries including FinTech, Healthcare, Retail & E-commerce, Logistics & Transportation, Education, Real Estate, Manufacturing, and Travel & Hospitality. Our industry-specific expertise enables us to understand unique requirements, compliance needs, and market dynamics for each sector.' 
  },
  { 
    question: 'Can you integrate third-party APIs and services?', 
    answer: 'Yes, we have extensive experience integrating third-party APIs including payment gateways (Stripe, PayPal), mapping services (Google Maps, Mapbox), CRM systems (Salesforce, HubSpot), analytics platforms (Google Analytics, Mixpanel), cloud services, and many more. We ensure seamless integration with proper error handling and documentation.' 
  },
  {
    question: 'What technologies and frameworks do you use for software development?',
    answer: 'We use modern technology stacks including React, Next.js, Vue.js for frontend development; Node.js, Python, Django for backend; React Native, Flutter for mobile apps; AWS, Azure, GCP for cloud infrastructure; and Docker, Kubernetes for containerization. We choose technologies based on project requirements, scalability needs, and long-term maintainability.'
  },
  {
    question: 'How do you ensure software quality and testing?',
    answer: 'We follow comprehensive quality assurance practices including unit testing, integration testing, automated testing, code reviews, performance testing, and security audits. Our development process includes continuous integration and deployment (CI/CD) pipelines to catch issues early and ensure reliable, high-quality software delivery.'
  }
] as const

export const homeFeaturedProjects = [
  { 
    title: 'Enterprise Platform', 
    category: 'Software Development',
    description: 'Scalable cloud infrastructure for enterprise operations',
    href: '/our-work' 
  },
  { 
    title: 'AI Analytics System', 
    category: 'AI & Machine Learning',
    description: 'Intelligent data processing and predictive analytics',
    href: '/our-work' 
  },
  { 
    title: 'Mobile Application', 
    category: 'Mobile Development',
    description: 'Cross-platform mobile solution with native performance',
    href: '/our-work' 
  },
  { 
    title: 'Digital Transformation', 
    category: 'Consulting',
    description: 'End-to-end modernization of legacy systems',
    href: '/our-work' 
  }
] as const

export const homeTechnologies = [
  // Frontend
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000', category: 'frontend' as const },
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: '#4FC08D', category: 'frontend' as const },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'frontend' as const },
  
  // Backend
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
  { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', color: '#092E20', category: 'backend' as const },
  { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', color: '#009688', category: 'backend' as const },
  
  // Cloud
  { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: '#0078D4', category: 'cloud' as const },
  
  // Mobile
  { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B', category: 'mobile' as const },
  { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'mobile' as const },
  
  // Database
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'database' as const },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1', category: 'database' as const },
  
  // AI/ML
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00', category: 'ai' as const },
  { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: '#EE4C2C', category: 'ai' as const },
  
  // DevOps
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032', category: 'devops' as const },
  { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', color: '#D24939', category: 'devops' as const },
  { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', color: '#7B42BC', category: 'devops' as const }
]

