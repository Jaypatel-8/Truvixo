// Server-only static data for Careers page
export const careersData = {
  hero: {
    badge: {
      iconName: 'Briefcase',
      text: 'Join Our Team'
    },
    title: 'Build Your Career',
    hollowText: 'With Us',
    description: 'Join a team of innovators, creators, and problem-solvers. Work on exciting projects, grow your skills, and make an impact. We\'re building the future, and we want you to be part of it.'
  },
  benefits: [
    {
      title: 'Competitive Salary',
      description: 'Attractive compensation packages that reflect your skills and experience',
      iconName: 'DollarSign',
      color: '#5e2cb6'
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to maintain work-life balance',
      iconName: 'Laptop',
      color: '#c91a6f'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      iconName: 'Heart',
      color: '#fecc4d'
    },
    {
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities, training programs, and career development',
      iconName: 'GraduationCap',
      color: '#10b981'
    },
    {
      title: 'Innovation Time',
      description: 'Dedicated time to explore new technologies and work on passion projects',
      iconName: 'Zap',
      color: '#5e2cb6'
    },
    {
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and celebrations',
      iconName: 'Users',
      color: '#c91a6f'
    }
  ],
  openPositions: [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'We\'re looking for an experienced full-stack developer to join our engineering team. You\'ll work on cutting-edge projects using React, Next.js, Node.js, and modern cloud technologies.',
      requirements: [
        '5+ years of full-stack development experience',
        'Expertise in React, Next.js, and Node.js',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Strong problem-solving and communication skills'
      ],
      iconName: 'Code',
      color: '#5e2cb6'
    },
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Join our AI team to build innovative machine learning solutions. Work on projects involving NLP, computer vision, and predictive analytics.',
      requirements: [
        '3+ years of ML/AI development experience',
        'Strong Python skills and ML frameworks (TensorFlow, PyTorch)',
        'Experience with model deployment and MLOps',
        'Passion for solving complex problems with AI'
      ],
      iconName: 'Brain',
      color: '#c91a6f'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Create beautiful, intuitive user experiences. Work closely with clients and developers to design solutions that users love.',
      requirements: [
        '4+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe XD, or similar tools',
        'Strong portfolio showcasing design thinking',
        'Experience with design systems and prototyping'
      ],
      iconName: 'Palette',
      color: '#fecc4d'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Drive growth through data-driven marketing strategies. Manage campaigns across SEO, PPC, social media, and content marketing.',
      requirements: [
        '3+ years of digital marketing experience',
        'Experience with Google Ads, Facebook Ads, and SEO',
        'Strong analytical skills and data-driven mindset',
        'Excellent written and verbal communication'
      ],
      iconName: 'TrendingUp',
      color: '#10b981'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Build and maintain scalable infrastructure. Automate deployments, optimize performance, and ensure system reliability.',
      requirements: [
        '4+ years of DevOps experience',
        'Expertise in AWS, Docker, Kubernetes, CI/CD',
        'Experience with infrastructure as code (Terraform)',
        'Strong troubleshooting and automation skills'
      ],
      iconName: 'Rocket',
      color: '#5e2cb6'
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Lead cross-functional teams to deliver successful projects. Manage timelines, resources, and client relationships.',
      requirements: [
        '5+ years of project management experience',
        'Experience with Agile/Scrum methodologies',
        'Strong leadership and communication skills',
        'PMP or similar certification preferred'
      ],
      iconName: 'Briefcase',
      color: '#c91a6f'
    }
  ],
  cultureValues: [
    {
      title: 'Innovation',
      description: 'We encourage experimentation and embrace new ideas that push boundaries',
      iconName: 'Zap'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication',
      iconName: 'Users'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, setting high standards',
      iconName: 'Award'
    },
    {
      title: 'Growth',
      description: 'We invest in our team\'s growth and provide opportunities to learn and advance',
      iconName: 'TrendingUp'
    }
  ],
  seoServiceName: 'Career Opportunities & Job Openings',
  contact: {
    title: 'Get in Touch',
    description: 'Have questions about careers at TruVixo? Let\'s discuss your future with us.'
  },
  getQuote: {
    title: 'Ready to Join',
    hollowText: 'Our Team?',
    description: 'Get in touch and let\'s discuss how you can be part of building the future with TruVixo.'
  }
} as const

