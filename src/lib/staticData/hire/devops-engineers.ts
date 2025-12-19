// Server-only static data for Hire DevOps Engineers page
export const devopsEngineersData = {
  hero: {
    badge: {
      iconName: 'Cloud',
      text: 'Hire DevOps Engineers'
    },
    title: 'Hire DevOps',
    hollowText: 'Engineers',
    description: 'Hire experienced DevOps engineers who build and maintain scalable cloud infrastructure. From CI/CD pipelines to container orchestration, we provide the DevOps expertise you need. Our engineers are experts in AWS, Azure, Docker, Kubernetes, and modern DevOps tools.'
  },
  services: [
    {
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable cloud infrastructure',
      iconName: 'Cloud',
      color: '#5e2cb6'
    },
    {
      title: 'CI/CD Pipelines',
      description: 'Build automated deployment pipelines',
      iconName: 'Zap',
      color: '#c91a6f'
    },
    {
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker container management',
      iconName: 'Server',
      color: '#d97706'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Terraform, CloudFormation, and automation',
      iconName: 'Code',
      color: '#059669'
    },
    {
      title: 'Monitoring & Logging',
      description: 'Set up monitoring and logging systems',
      iconName: 'BarChart',
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
      description: 'Deep expertise in AWS, Azure, GCP, and cloud-native technologies',
      color: '#5e2cb6'
    },
    {
      iconName: 'Zap',
      title: 'Automation',
      description: 'Build automated CI/CD pipelines and infrastructure',
      color: '#c91a6f'
    },
    {
      iconName: 'Server',
      title: 'Containerization',
      description: 'Expertise in Docker, Kubernetes, and container orchestration',
      color: '#d97706'
    },
    {
      iconName: 'Shield',
      title: 'Security First',
      description: 'Implement security best practices and compliance',
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
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const },
    { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', color: '#7B42BC', category: 'devops' as const },
    { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', color: '#D24939', category: 'devops' as const },
    { name: 'GitLab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', color: '#FC6D26', category: 'devops' as const },
    { name: 'Ansible', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', color: '#EE0000', category: 'devops' as const },
    { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: '#0078D4', category: 'cloud' as const }
  ],
  processSteps: [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your infrastructure needs and DevOps requirements',
      iconName: 'Target'
    },
    {
      title: 'Engineer Matching',
      description: 'We match you with DevOps engineers skilled in your tech stack',
      iconName: 'Users'
    },
    {
      title: 'Technical Assessment',
      description: 'Comprehensive interviews covering cloud, containers, and automation',
      iconName: 'FileText'
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
    },
    {
      title: 'Continuous Support',
      description: 'Ongoing support, infrastructure monitoring, and optimization',
      iconName: 'Zap'
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

