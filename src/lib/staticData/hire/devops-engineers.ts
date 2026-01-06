// Server-only static data for Hire DevOps Engineers page
export const devopsEngineersData = {
  hero: {
    badge: {
      iconName: 'Cloud',
      text: 'Hire DevOps Engineers'
    },
    title: 'Hire DevOps',
    hollowText: 'Engineers',
    description: 'Hire experienced DevOps engineers who automate infrastructure, streamline deployments, and ensure reliable operations. Our DevOps engineers are experts in AWS, Docker, Kubernetes, CI/CD, and cloud technologies.'
  },
  services: [
    {
      title: 'CI/CD Pipelines',
      description: 'Build and maintain continuous integration and deployment',
      iconName: 'Zap',
      color: '#5e2cb6'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Design and manage AWS, Azure, and GCP infrastructure',
      iconName: 'Cloud',
      color: '#c91a6f'
    },
    {
      title: 'Containerization',
      description: 'Docker and Kubernetes orchestration',
      iconName: 'Package',
      color: '#fecc4d'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Terraform, CloudFormation, and automation',
      iconName: 'Code',
      color: '#10b981'
    },
    {
      title: 'Monitoring & Logging',
      description: 'Set up monitoring, alerting, and logging systems',
      iconName: 'Gauge',
      color: '#5e2cb6'
    },
    {
      title: 'Security & Compliance',
      description: 'Implement security best practices and compliance',
      iconName: 'Shield',
      color: '#c91a6f'
    }
  ],
  whyChooseUs: [
    {
      iconName: 'Cloud',
      title: 'Cloud Expertise',
      description: 'Expertise in AWS, Azure, GCP, and multi-cloud strategies',
      color: '#5e2cb6'
    },
    {
      iconName: 'Zap',
      title: 'Automation',
      description: 'Automate deployments and infrastructure management',
      color: '#c91a6f'
    },
    {
      iconName: 'Target',
      title: 'Reliability',
      description: 'Ensure high availability and system reliability',
      color: '#fecc4d'
    },
    {
      iconName: 'TrendingUp',
      title: 'Scalability',
      description: 'Build scalable infrastructure that grows with your business',
      color: '#10b981'
    }
  ],
  industries: [
    { name: 'SaaS', iconName: 'Cloud', color: '#5e2cb6' },
    { name: 'E-Commerce', iconName: 'ShoppingCart', color: '#c91a6f' },
    { name: 'Fintech', iconName: 'DollarSign', color: '#fecc4d' },
    { name: 'Healthcare', iconName: 'Heart', color: '#10b981' },
    { name: 'Enterprise', iconName: 'Building2', color: '#5e2cb6' }
  ],
  technologies: [
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const },
    { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', color: '#7B42BC', category: 'devops' as const },
    { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', color: '#D24939', category: 'devops' as const }
  ],
  processSteps: [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your DevOps needs and infrastructure requirements',
      iconName: 'Target'
    },
    {
      title: 'Engineer Matching',
      description: 'We match you with DevOps engineers skilled in your cloud platform',
      iconName: 'Users'
    },
    {
      title: 'Technical Assessment',
      description: 'Comprehensive interviews covering cloud, containers, and automation',
      iconName: 'FileText'
    },
    {
      title: 'Portfolio Review',
      description: 'Review engineer portfolios showcasing DevOps projects',
      iconName: 'Cloud'
    },
    {
      title: 'Trial Period',
      description: 'Optional trial period to evaluate engineer performance',
      iconName: 'CheckCircle'
    },
    {
      title: 'Team Integration',
      description: 'Seamless integration with your development and operations teams',
      iconName: 'Rocket'
    }
  ],
  servicesTitle: 'DevOps',
  servicesHollowText: 'Services',
  whyChooseTitle: 'Why Hire Our',
  whyChooseHollowText: 'DevOps Engineers',
  getQuoteTitle: 'Ready to Hire',
  getQuoteHollowText: 'DevOps Engineers?',
  getQuoteDescription: 'Get in touch and let\'s discuss how we can help you find the perfect DevOps engineers.',
  contactTitle: 'Get in Touch',
  contactDescription: 'Have questions about hiring DevOps engineers? Let\'s discuss your needs.',
  processTitle: 'Hiring Process',
  processSubtitle: 'From requirement analysis to ongoing support, we ensure a seamless hiring experience'
} as const



