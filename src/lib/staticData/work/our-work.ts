// Server-only static data for Our Work page
export const ourWorkData = {
  hero: {
    badge: {
      iconName: 'Rocket',
      text: 'Our Work'
    },
    title: 'Our',
    hollowText: 'Work',
    description: 'Explore our portfolio of successful projects across industries. From fintech to healthcare, we\'ve delivered innovative solutions that drive business growth and transformation. Each project showcases our expertise, creativity, and commitment to excellence.'
  },
  services: [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions for unique business needs',
      iconName: 'Code',
      color: '#5e2cb6'
    },
    {
      title: 'Web Applications',
      description: 'Modern, scalable web applications',
      iconName: 'Globe',
      color: '#c91a6f'
    },
    {
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps',
      iconName: 'Smartphone',
      color: '#d97706'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent systems and ML solutions',
      iconName: 'Brain',
      color: '#059669'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      iconName: 'Cloud',
      color: '#5e2cb6'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation projects',
      iconName: 'Rocket',
      color: '#c91a6f'
    }
  ],
  whyChooseUs: [
    {
      iconName: 'Rocket',
      title: 'Proven Results',
      description: '500+ successful projects delivered',
      color: '#5e2cb6'
    },
    {
      iconName: 'Target',
      title: 'Industry Expertise',
      description: 'Experience across diverse industries',
      color: '#c91a6f'
    },
    {
      iconName: 'Zap',
      title: 'Innovation',
      description: 'Cutting-edge technologies and solutions',
      color: '#d97706'
    },
    {
      iconName: 'Users',
      title: 'Client Satisfaction',
      description: '98% client satisfaction rate',
      color: '#059669'
    }
  ],
  industries: [
    { name: 'Fintech', iconName: 'Building2', color: '#5e2cb6' },
    { name: 'Healthcare', iconName: 'Heart', color: '#c91a6f' },
    { name: 'E-Commerce', iconName: 'ShoppingCart', color: '#d97706' },
    { name: 'Logistics', iconName: 'Truck', color: '#059669' },
    { name: 'Real Estate', iconName: 'Home', color: '#5e2cb6' },
    { name: 'Education', iconName: 'GraduationCap', color: '#c91a6f' }
  ],
  technologies: [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const }
  ],
  processSteps: [
    {
      title: 'Discovery',
      description: 'Understand client needs and project requirements',
      iconName: 'Target'
    },
    {
      title: 'Planning',
      description: 'Create detailed project plan and roadmap',
      iconName: 'Calendar'
    },
    {
      title: 'Design',
      description: 'Design user experience and system architecture',
      iconName: 'Palette'
    },
    {
      title: 'Development',
      description: 'Build solution with agile methodology',
      iconName: 'Code'
    },
    {
      title: 'Testing',
      description: 'Comprehensive testing and quality assurance',
      iconName: 'CheckCircle'
    },
    {
      title: 'Deployment',
      description: 'Deploy to production and provide ongoing support',
      iconName: 'Rocket'
    }
  ],
  benefits: [
    {
      iconName: 'Rocket',
      title: 'Successful Projects',
      description: '500+ projects delivered with proven results',
      color: '#5e2cb6'
    },
    {
      iconName: 'Target',
      title: 'Industry Diversity',
      description: 'Experience across multiple industries and domains',
      color: '#c91a6f'
    },
    {
      iconName: 'Zap',
      title: 'Innovation',
      description: 'Cutting-edge technologies and modern solutions',
      color: '#d97706'
    },
    {
      iconName: 'Users',
      title: 'Client Success',
      description: '98% client satisfaction and long-term partnerships',
      color: '#059669'
    },
    {
      iconName: 'TrendingUp',
      title: 'Business Impact',
      description: 'Solutions that drive measurable business growth',
      color: '#5e2cb6'
    },
    {
      iconName: 'Award',
      title: 'Excellence',
      description: 'Award-winning projects and industry recognition',
      color: '#c91a6f'
    }
  ],
  servicesTitle: 'Our',
  servicesHollowText: 'Work',
  whyChooseTitle: 'Why Choose',
  whyChooseHollowText: 'Our Work',
  getQuoteTitle: 'Ready to Start',
  getQuoteHollowText: 'Your Project?',
  getQuoteDescription: 'Get in touch and let\'s discuss how we can help bring your vision to life.',
  contactTitle: 'Get in Touch',
  contactDescription: 'Have questions about our work? Let\'s discuss your project needs.',
  processTitle: 'Our Project',
  processSubtitle: 'Development Process',
  seoServiceName: 'Our Work Portfolio',
  cta: {
    title: 'Ready to Start',
    hollowText: 'Your Project?',
    description: 'Get in touch and let\'s discuss how we can help bring your vision to life.',
    buttonText: 'Get Started',
    email: 'sales@truvixo.com',
    phone: '+91-63543-26412'
  }
} as const

