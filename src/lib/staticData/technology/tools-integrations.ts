// Server-only static data for Tools & Integrations Technology page
export const toolsIntegrationsTechnologyData = {
  hero: {
    title: 'Development Tools & Integrations We Use to Build',
    hollowText: 'Efficient, Integrated Development Workflows',
    description: 'We use the latest development tools and integrations to streamline workflows, enhance productivity, and ensure seamless third-party integrations. Our tooling expertise ensures efficient development, testing, and deployment processes.'
  },
  technologies: [
    {
      name: 'Git',
      iconName: 'Code',
      description: 'Version control system for tracking code changes and collaboration.',
      number: '1'
    },
    {
      name: 'GitHub',
      iconName: 'Code',
      description: 'Code hosting platform for version control and collaboration.',
      number: '2'
    },
    {
      name: 'Postman',
      iconName: 'Network',
      description: 'API development and testing platform for REST and GraphQL APIs.',
      number: '3'
    },
    {
      name: 'Jira',
      iconName: 'Target',
      description: 'Project management and issue tracking for agile teams.',
      number: '4'
    },
    {
      name: 'Slack',
      iconName: 'MessageSquare',
      description: 'Team communication and collaboration platform.',
      number: '5'
    },
    {
      name: 'VS Code',
      iconName: 'Code',
      description: 'Lightweight, powerful code editor with extensive extensions.',
      number: '6'
    }
  ],
  whatWeBuild: [
    { iconName: 'Code', title: 'Development Workflows' },
    { iconName: 'Network', title: 'API Integrations' },
    { iconName: 'Target', title: 'Project Management' },
    { iconName: 'MessageSquare', title: 'Team Collaboration' },
    { iconName: 'Zap', title: 'Automation Tools' },
    { iconName: 'Shield', title: 'Security Tools' }
  ],
  benefits: [
    { iconName: 'Zap', title: 'Efficient Workflows', description: 'Streamlined development processes' },
    { iconName: 'Target', title: 'Better Collaboration', description: 'Enhanced team productivity' },
    { iconName: 'Network', title: 'Seamless Integrations', description: 'Third-party API connections' },
    { iconName: 'Rocket', title: 'Faster Development', description: 'Tools that speed up delivery' },
    { iconName: 'Shield', title: 'Quality Assurance', description: 'Testing and quality tools' }
  ],
  whyChooseUs: [
    { iconName: 'Code', title: 'Tool Expertise', description: 'Mastery of development tools' },
    { iconName: 'Network', title: 'Integration Skills', description: 'Seamless third-party integrations' },
    { iconName: 'Target', title: 'Workflow Optimization', description: 'Efficient development processes' },
    { iconName: 'Rocket', title: 'Productivity', description: 'Tools that enhance productivity' }
  ],
  cta: {
    title: 'Optimize Your Development Workflow',
    buttonText: 'Get Started'
  }
} as const

