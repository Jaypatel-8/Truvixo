// Server-only static data for Cloud & DevOps Technology page
export const cloudDevOpsTechnologyData = {
  hero: {
    title: 'Cloud & DevOps Technologies We Use to Build',
    hollowText: 'Scalable, Automated Infrastructure',
    description: 'We use the latest cloud and DevOps technologies to build scalable, automated infrastructure. Our DevOps engineering ensures reliable deployments, infrastructure automation, monitoring, and seamless CI/CD pipelines.'
  },
  technologies: [
    {
      name: 'AWS',
      iconName: 'Cloud',
      description: 'Amazon Web Services for scalable cloud infrastructure and services.',
      number: '1'
    },
    {
      name: 'Azure',
      iconName: 'Cloud',
      description: 'Microsoft cloud platform for enterprise applications.',
      number: '2'
    },
    {
      name: 'Docker',
      iconName: 'Package',
      description: 'Containerization platform for consistent deployments.',
      number: '3'
    },
    {
      name: 'Kubernetes',
      iconName: 'Server',
      description: 'Container orchestration for scalable, automated deployments.',
      number: '4'
    },
    {
      name: 'Terraform',
      iconName: 'Code',
      description: 'Infrastructure as code for automated infrastructure management.',
      number: '5'
    },
    {
      name: 'Jenkins',
      iconName: 'Zap',
      description: 'Automation server for continuous integration and delivery.',
      number: '6'
    }
  ],
  whatWeBuild: [
    { iconName: 'Cloud', title: 'Cloud Infrastructure' },
    { iconName: 'Zap', title: 'CI/CD Pipelines' },
    { iconName: 'Server', title: 'Container Orchestration' },
    { iconName: 'Code', title: 'Infrastructure as Code' },
    { iconName: 'Shield', title: 'Security & Compliance' },
    { iconName: 'BarChart', title: 'Monitoring & Logging' }
  ],
  benefits: [
    { iconName: 'Zap', title: 'Automated Deployments', description: 'Streamlined CI/CD pipelines' },
    { iconName: 'Cloud', title: 'Scalable Infrastructure', description: 'Grows with your needs' },
    { iconName: 'Shield', title: 'Secure', description: 'Enterprise-grade security' },
    { iconName: 'Target', title: 'Reliable', description: 'High availability and uptime' },
    { iconName: 'Rocket', title: 'Fast Delivery', description: 'Rapid deployment cycles' }
  ],
  whyChooseUs: [
    { iconName: 'Cloud', title: 'Cloud Expertise', description: 'AWS, Azure, GCP proficiency' },
    { iconName: 'Zap', title: 'Automation', description: 'Infrastructure and deployment automation' },
    { iconName: 'Server', title: 'Containerization', description: 'Docker and Kubernetes expertise' },
    { iconName: 'Rocket', title: 'DevOps Best Practices', description: 'Industry-standard practices' }
  ],
  cta: {
    title: 'Build Cloud Infrastructure',
    buttonText: 'Get Started'
  }
} as const

