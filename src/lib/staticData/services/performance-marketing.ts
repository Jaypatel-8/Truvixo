// Server-only static data for Performance Marketing page
export const performanceMarketingData = {
  hero: {
    badge: {
      iconName: 'BarChart',
      text: 'Performance Marketing'
    },
    title: 'Performance',
    hollowText: 'Marketing',
    description: 'Drive measurable results with performance-based marketing strategies. Pay only for results that matter - leads, sales, and conversions. Our performance marketing services combine data-driven strategies with advanced tracking to maximize ROI and deliver quantifiable business outcomes.'
  },
  services: [
    {
      title: 'Performance Campaigns',
      description: 'Set up campaigns that pay only for results - leads, sales, or conversions',
      iconName: 'Target',
      color: '#5e2cb6'
    },
    {
      title: 'Affiliate Marketing',
      description: 'Build and manage affiliate networks to scale your reach',
      iconName: 'Users',
      color: '#c91a6f'
    },
    {
      title: 'CPA Optimization',
      description: 'Optimize campaigns to achieve the lowest cost per acquisition',
      iconName: 'TrendingDown',
      color: '#d97706'
    },
    {
      title: 'Multi-Channel Attribution',
      description: 'Track and attribute conversions across all marketing channels',
      iconName: 'BarChart',
      color: '#059669'
    },
    {
      title: 'Conversion Tracking',
      description: 'Implement advanced tracking to measure true performance',
      iconName: 'CheckCircle',
      color: '#5e2cb6'
    },
    {
      title: 'ROI Optimization',
      description: 'Continuously optimize campaigns to maximize return on investment',
      iconName: 'Rocket',
      color: '#c91a6f'
    }
  ],
  whyChooseUs: [
    {
      iconName: 'Target',
      title: 'Results-Driven',
      description: 'Focus on metrics that drive business growth',
      color: '#5e2cb6'
    },
    {
      iconName: 'BarChart',
      title: 'Data-Driven',
      description: 'Decisions based on comprehensive analytics',
      color: '#c91a6f'
    },
    {
      iconName: 'TrendingUp',
      title: 'Scalable Growth',
      description: 'Scale successful campaigns for maximum impact',
      color: '#d97706'
    },
    {
      iconName: 'Rocket',
      title: 'ROI Focused',
      description: 'Maximize return on every marketing dollar',
      color: '#059669'
    }
  ],
  technologies: [
    { name: 'Google Analytics', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/googleanalytics.svg', color: '#FF6F00', category: 'backend' as const },
    { name: 'Facebook Pixel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg', color: '#1877F2', category: 'backend' as const },
    { name: 'Google Tag Manager', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/googletagmanager.svg', color: '#4285F4', category: 'backend' as const }
  ],
  processSteps: [
    {
      title: 'Goal Definition',
      description: 'Define clear performance goals and KPIs',
      iconName: 'Target'
    },
    {
      title: 'Tracking Setup',
      description: 'Implement advanced tracking and attribution',
      iconName: 'CheckCircle'
    },
    {
      title: 'Campaign Launch',
      description: 'Launch performance-based campaigns',
      iconName: 'Rocket'
    },
    {
      title: 'Optimization',
      description: 'Continuously optimize for better performance',
      iconName: 'TrendingUp'
    },
    {
      title: 'Scaling',
      description: 'Scale successful campaigns for growth',
      iconName: 'Zap'
    },
    {
      title: 'Reporting',
      description: 'Provide detailed performance reports and insights',
      iconName: 'BarChart'
    }
  ],
  industries: [
    { name: 'E-commerce', iconName: 'ShoppingCart', color: '#5e2cb6' },
    { name: 'SaaS', iconName: 'Cloud', color: '#c91a6f' },
    { name: 'Healthcare', iconName: 'Heart', color: '#d97706' },
    { name: 'Fintech', iconName: 'Building2', color: '#059669' },
    { name: 'Education', iconName: 'GraduationCap', color: '#5e2cb6' },
    { name: 'Real Estate', iconName: 'Home', color: '#c91a6f' }
  ],
  benefits: [
    {
      iconName: 'Target',
      title: 'Pay for Results',
      description: 'Performance marketing means you only pay when you get results - leads, sales, or conversions. This model aligns marketing costs directly with business outcomes, ensuring maximum efficiency.',
      color: '#5e2cb6'
    },
    {
      iconName: 'BarChart',
      title: 'Measurable ROI',
      description: 'Every dollar spent is tracked and attributed to specific results. Performance marketing provides complete transparency, allowing you to see exactly which campaigns drive the best ROI.',
      color: '#c91a6f'
    },
    {
      iconName: 'TrendingUp',
      title: 'Scalable Growth',
      description: 'Once you identify winning campaigns, you can scale them to drive more results. Performance marketing allows you to grow revenue predictably by increasing spend on proven channels.',
      color: '#d97706'
    },
    {
      iconName: 'Zap',
      title: 'Faster Optimization',
      description: 'Real-time data enables quick optimization decisions. Performance marketing allows you to pause underperforming campaigns and double down on winners immediately.',
      color: '#059669'
    },
    {
      iconName: 'Shield',
      title: 'Risk Reduction',
      description: 'By paying only for results, you reduce the risk of wasted ad spend. Performance marketing ensures your budget is allocated to channels and campaigns that actually deliver.',
      color: '#5e2cb6'
    },
    {
      iconName: 'Rocket',
      title: 'Competitive Advantage',
      description: 'Businesses using performance marketing typically achieve better ROI than traditional advertising. This efficiency gives you a competitive edge in customer acquisition.',
      color: '#c91a6f'
    }
  ],
  useCases: [
    {
      title: 'E-Commerce Sales',
      description: 'Drive online sales with performance-based campaigns. Pay only when customers make purchases, ensuring profitable customer acquisition.',
      gradient: 'from-[#5e2cb6]/5 to-[#c91a6f]/5',
      borderColor: '#5e2cb6',
      items: [
        'CPA-based campaigns',
        'Shopping ads optimization',
        'Retargeting campaigns',
        'Conversion tracking'
      ]
    },
    {
      title: 'Lead Generation',
      description: 'Generate qualified leads with performance-based lead generation campaigns. Pay only for leads that meet your quality criteria.',
      gradient: 'from-[#d97706]/5 to-[#059669]/5',
      borderColor: '#d97706',
      items: [
        'CPL campaigns',
        'Lead quality scoring',
        'Multi-channel attribution',
        'Lead nurturing'
      ]
    },
    {
      title: 'App Installs',
      description: 'Drive mobile app installs with performance-based campaigns. Pay only for actual app installations and optimize for in-app conversions.',
      gradient: 'from-[#059669]/5 to-[#5e2cb6]/5',
      borderColor: '#059669',
      items: [
        'CPI campaigns',
        'App store optimization',
        'In-app event tracking',
        'Retention campaigns'
      ]
    },
    {
      title: 'SaaS Subscriptions',
      description: 'Acquire SaaS customers with performance marketing. Pay based on trial signups or paid conversions, ensuring profitable customer acquisition.',
      gradient: 'from-[#c91a6f]/5 to-[#d97706]/5',
      borderColor: '#c91a6f',
      items: [
        'Trial signup campaigns',
        'Subscription conversion',
        'LTV optimization',
        'Churn reduction'
      ]
    }
  ],
  processTitle: 'Performance Marketing Process',
  processSubtitle: 'From tracking to scaling, we ensure maximum ROI and measurable results at every step',
  getQuote: {
    title: 'Ready to Drive',
    hollowText: 'Performance Results?',
    description: 'Get in touch and let\'s discuss how we can improve your performance marketing.'
  },
  contact: {
    title: 'Get in Touch',
    description: 'Have a project in mind? Let\'s discuss how we can help with your performance marketing.'
  },
  seoServiceName: 'Performance Marketing Services'
} as const

