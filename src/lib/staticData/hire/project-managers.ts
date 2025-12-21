// Server-only static data for Hire Project Managers page
export const projectManagersData = {
  hero: {
    badge: {
      iconName: 'Briefcase',
      text: 'Hire Project Managers'
    },
    title: 'Hire Project',
    hollowText: 'Managers',
    description: 'Hire experienced project managers who ensure successful project delivery. Our project managers are experts in Agile, Scrum, Kanban, and traditional project management methodologies.'
  },
  services: [
    {
      title: 'Agile Project Management',
      description: 'Lead Agile teams and manage sprints effectively',
      iconName: 'Zap',
      color: '#5e2cb6'
    },
    {
      title: 'Scrum Master',
      description: 'Facilitate Scrum ceremonies and remove blockers',
      iconName: 'Users',
      color: '#c91a6f'
    },
    {
      title: 'Stakeholder Management',
      description: 'Manage client relationships and expectations',
      iconName: 'MessageSquare',
      color: '#fecc4d'
    },
    {
      title: 'Resource Planning',
      description: 'Plan and allocate resources efficiently',
      iconName: 'Calendar',
      color: '#10b981'
    },
    {
      title: 'Risk Management',
      description: 'Identify and mitigate project risks',
      iconName: 'Shield',
      color: '#5e2cb6'
    },
    {
      title: 'Quality Assurance',
      description: 'Ensure project quality and deliverables',
      iconName: 'CheckCircle',
      color: '#c91a6f'
    }
  ],
  whyChooseUs: [
    {
      iconName: 'Briefcase',
      title: 'Project Management Expertise',
      description: 'Experienced in Agile, Scrum, and traditional methodologies',
      color: '#5e2cb6'
    },
    {
      iconName: 'Users',
      title: 'Team Leadership',
      description: 'Strong leadership and team coordination skills',
      color: '#c91a6f'
    },
    {
      iconName: 'Target',
      title: 'Delivery Focus',
      description: 'Ensure on-time and on-budget project delivery',
      color: '#fecc4d'
    },
    {
      iconName: 'TrendingUp',
      title: 'Process Improvement',
      description: 'Continuously improve project processes and workflows',
      color: '#10b981'
    }
  ],
  industries: [
    { name: 'Software Development', iconName: 'Code', color: '#5e2cb6' },
    { name: 'E-Commerce', iconName: 'ShoppingCart', color: '#c91a6f' },
    { name: 'Healthcare', iconName: 'Heart', color: '#fecc4d' },
    { name: 'Fintech', iconName: 'DollarSign', color: '#10b981' },
    { name: 'SaaS', iconName: 'Cloud', color: '#5e2cb6' }
  ],
  technologies: [
    { name: 'JIRA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', color: '#0052CC', category: 'management' as const },
    { name: 'Confluence', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg', color: '#172B4D', category: 'management' as const },
    { name: 'Trello', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg', color: '#0079BF', category: 'management' as const },
    { name: 'Asana', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/asana/asana-original.svg', color: '#F06A6A', category: 'management' as const },
    { name: 'Monday.com', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/monday/monday-original.svg', color: '#FF3D71', category: 'management' as const }
  ],
  processSteps: [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your project management needs and team structure',
      iconName: 'Target'
    },
    {
      title: 'PM Matching',
      description: 'We match you with project managers experienced in your industry',
      iconName: 'Users'
    },
    {
      title: 'Assessment',
      description: 'Evaluate project management skills and methodology expertise',
      iconName: 'FileText'
    },
    {
      title: 'Portfolio Review',
      description: 'Review PM portfolios showcasing successful project deliveries',
      iconName: 'Briefcase'
    },
    {
      title: 'Trial Period',
      description: 'Optional trial period to evaluate PM performance',
      iconName: 'CheckCircle'
    },
    {
      title: 'Team Integration',
      description: 'Seamless integration with your development and management teams',
      iconName: 'Rocket'
    }
  ],
  servicesTitle: 'Project Management',
  servicesHollowText: 'Services',
  whyChooseTitle: 'Why Hire Our',
  whyChooseHollowText: 'Project Managers',
  getQuoteTitle: 'Ready to Hire',
  getQuoteHollowText: 'Project Managers?',
  getQuoteDescription: 'Get in touch and let\'s discuss how we can help you find the perfect project managers.',
  contactTitle: 'Get in Touch',
  contactDescription: 'Have questions about hiring project managers? Let\'s discuss your needs.',
  processTitle: 'Hiring Process',
  processSubtitle: 'From requirement analysis to ongoing support, we ensure a seamless hiring experience'
} as const


