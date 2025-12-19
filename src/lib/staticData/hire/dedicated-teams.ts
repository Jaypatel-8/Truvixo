// Server-only static data for Hire Dedicated Teams page
export const dedicatedTeamsData = {
  hero: {
    badge: {
      iconName: 'Users',
      text: 'Hire Dedicated Teams'
    },
    title: 'Hire Dedicated',
    hollowText: 'Teams',
    description: 'Hire complete dedicated development teams tailored to your project needs. Get a full team of developers, designers, QA engineers, and project managers working exclusively on your project. Our dedicated teams deliver end-to-end solutions with seamless collaboration.'
  },
  services: [
    {
      title: 'Full Development Team',
      description: 'Complete team of developers, designers, and managers',
      iconName: 'Users',
      color: '#5e2cb6'
    },
    {
      title: 'Frontend Team',
      description: 'Dedicated frontend development team',
      iconName: 'Code',
      color: '#c91a6f'
    },
    {
      title: 'Backend Team',
      description: 'Dedicated backend development team',
      iconName: 'Server',
      color: '#d97706'
    },
    {
      title: 'Mobile Team',
      description: 'Dedicated mobile development team',
      iconName: 'Smartphone',
      color: '#059669'
    },
    {
      title: 'DevOps Team',
      description: 'Dedicated DevOps and infrastructure team',
      iconName: 'Cloud',
      color: '#5e2cb6'
    },
    {
      title: 'QA Team',
      description: 'Dedicated quality assurance team',
      iconName: 'CheckCircle',
      color: '#c91a6f'
    }
  ],
  whyChooseUs: [
    {
      iconName: 'Users',
      title: 'Complete Team',
      description: 'Get a full team with all roles needed for your project',
      color: '#5e2cb6'
    },
    {
      iconName: 'Target',
      title: 'Dedicated Focus',
      description: 'Team works exclusively on your project',
      color: '#c91a6f'
    },
    {
      iconName: 'Zap',
      title: 'Faster Delivery',
      description: 'Complete teams deliver projects faster',
      color: '#d97706'
    },
    {
      iconName: 'Rocket',
      title: 'Scalable',
      description: 'Easily scale team size based on project needs',
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
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'database' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const }
  ],
  processSteps: [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your project requirements and team composition needs',
      iconName: 'Target'
    },
    {
      title: 'Team Assembly',
      description: 'We assemble a dedicated team matching your project needs',
      iconName: 'Users'
    },
    {
      title: 'Team Introduction',
      description: 'Introduce team members and establish communication channels',
      iconName: 'MessageSquare'
    },
    {
      title: 'Project Kickoff',
      description: 'Kickoff meeting to align on goals, timelines, and processes',
      iconName: 'Rocket'
    },
    {
      title: 'Ongoing Collaboration',
      description: 'Regular communication and collaboration throughout the project',
      iconName: 'Zap'
    },
    {
      title: 'Continuous Support',
      description: 'Ongoing support and team adjustments as needed',
      iconName: 'CheckCircle'
    }
  ],
  servicesTitle: 'Dedicated',
  servicesHollowText: 'Teams',
  whyChooseTitle: 'Why Hire Our',
  whyChooseHollowText: 'Dedicated Teams',
  getQuoteTitle: 'Ready to Hire',
  getQuoteHollowText: 'Dedicated Teams?',
  getQuoteDescription: 'Get in touch and let\'s discuss how we can assemble the perfect dedicated team for your project.',
  contactTitle: 'Get in Touch',
  contactDescription: 'Have questions about hiring dedicated teams? Let\'s discuss your needs.',
  processTitle: 'Hiring Process',
  processSubtitle: 'From requirement analysis to ongoing support, we ensure a seamless team hiring experience'
} as const

