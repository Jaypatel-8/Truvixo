// Server-only static data for Machine Learning Model Development page
export const machineLearningModelDevelopmentData = {
  hero: {
    badge: {
      iconName: 'Brain',
      text: 'Machine Learning Model Development'
    },
    title: 'Machine Learning',
    hollowText: 'Model Development',
    description: 'Develop custom machine learning models tailored to your business needs. From predictive analytics to computer vision, we build ML models that deliver actionable insights and drive intelligent decision-making.'
  },
  services: [
    {
      title: 'Predictive Models',
      description: 'Build models for forecasting and prediction',
      iconName: 'TrendingUp',
      color: '#5e2cb6'
    },
    {
      title: 'Computer Vision',
      description: 'Image recognition and computer vision solutions',
      iconName: 'Eye',
      color: '#c91a6f'
    },
    {
      title: 'NLP Models',
      description: 'Natural language processing and text analysis',
      iconName: 'MessageSquare',
      color: '#d97706'
    },
    {
      title: 'Recommendation Systems',
      description: 'Personalized recommendation engines',
      iconName: 'Target',
      color: '#059669'
    },
    {
      title: 'Anomaly Detection',
      description: 'Identify outliers and anomalies in data',
      iconName: 'AlertCircle',
      color: '#5e2cb6'
    },
    {
      title: 'Model Deployment',
      description: 'Deploy ML models to production environments',
      iconName: 'Rocket',
      color: '#c91a6f'
    }
  ],
  whyChooseUs: [
    {
      iconName: 'Brain',
      title: 'Expert ML Engineers',
      description: 'Experienced data scientists and ML engineers',
      color: '#5e2cb6'
    },
    {
      iconName: 'BarChart',
      title: 'Data-Driven',
      description: 'Models built on comprehensive data analysis',
      color: '#c91a6f'
    },
    {
      iconName: 'Zap',
      title: 'Fast Iteration',
      description: 'Rapid model development and testing cycles',
      color: '#d97706'
    },
    {
      iconName: 'Shield',
      title: 'Production Ready',
      description: 'Models optimized for production deployment',
      color: '#059669'
    }
  ],
  technologies: [
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00', category: 'ai' as const },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: '#EE4C2C', category: 'ai' as const },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
    { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/scikitlearn.svg', color: '#F7931E', category: 'ai' as const },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/pandas.svg', color: '#150458', category: 'ai' as const },
    { name: 'AWS SageMaker', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazonaws.svg', color: '#FF9900', category: 'cloud' as const }
  ],
  processSteps: [
    {
      title: 'Data Collection',
      description: 'Gather and prepare training data',
      iconName: 'Database'
    },
    {
      title: 'Data Preprocessing',
      description: 'Clean, transform, and prepare data for training',
      iconName: 'Settings'
    },
    {
      title: 'Model Development',
      description: 'Design and train machine learning models',
      iconName: 'Brain'
    },
    {
      title: 'Model Training',
      description: 'Train models with optimized hyperparameters',
      iconName: 'Zap'
    },
    {
      title: 'Evaluation & Testing',
      description: 'Validate model performance and accuracy',
      iconName: 'BarChart'
    },
    {
      title: 'Deployment',
      description: 'Deploy models to production with monitoring',
      iconName: 'Rocket'
    }
  ],
  industries: [
    { name: 'Healthcare', iconName: 'Heart', color: '#5e2cb6' },
    { name: 'Fintech', iconName: 'Building2', color: '#c91a6f' },
    { name: 'E-commerce', iconName: 'ShoppingCart', color: '#d97706' },
    { name: 'Manufacturing', iconName: 'Factory', color: '#059669' },
    { name: 'Retail', iconName: 'ShoppingCart', color: '#5e2cb6' },
    { name: 'Transportation', iconName: 'Truck', color: '#c91a6f' }
  ],
  benefits: [
    {
      iconName: 'Brain',
      title: 'Intelligent Automation',
      description: 'Automate complex decision-making processes with ML models that learn and improve over time.',
      color: '#5e2cb6'
    },
    {
      iconName: 'TrendingUp',
      title: 'Predictive Insights',
      description: 'Forecast trends, behaviors, and outcomes to make proactive business decisions.',
      color: '#c91a6f'
    },
    {
      iconName: 'Target',
      title: 'Personalization',
      description: 'Deliver personalized experiences and recommendations to users based on their behavior.',
      color: '#d97706'
    },
    {
      iconName: 'BarChart',
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on patterns and insights extracted from your data.',
      color: '#059669'
    },
    {
      iconName: 'Zap',
      title: 'Efficiency Gains',
      description: 'Automate repetitive tasks and processes, freeing up resources for strategic work.',
      color: '#5e2cb6'
    },
    {
      iconName: 'Shield',
      title: 'Risk Reduction',
      description: 'Identify risks and anomalies early through predictive models and pattern detection.',
      color: '#c91a6f'
    }
  ],
  useCases: [
    {
      title: 'Predictive Analytics',
      description: 'Build models to forecast sales, demand, customer behavior, and business trends.',
      gradient: 'from-[#5e2cb6]/5 to-[#c91a6f]/5',
      borderColor: '#5e2cb6',
      items: [
        'Sales forecasting',
        'Demand prediction',
        'Customer churn prediction',
        'Market trend analysis'
      ]
    },
    {
      title: 'Computer Vision',
      description: 'Develop image recognition and computer vision solutions for various applications.',
      gradient: 'from-[#d97706]/5 to-[#059669]/5',
      borderColor: '#d97706',
      items: [
        'Image classification',
        'Object detection',
        'Facial recognition',
        'Quality control automation'
      ]
    }
  ],
  processTitle: 'ML Model Development Process',
  processSubtitle: 'From data to deployment, we build production-ready ML models that deliver value',
  getQuote: {
    title: 'Ready to Build ML',
    hollowText: 'Models?',
    description: 'Get in touch and let\'s discuss your machine learning needs.'
  },
  contact: {
    title: 'Get in Touch',
    description: 'Have data to analyze? Let\'s discuss how ML can help your business.'
  },
  seoServiceName: 'Machine Learning Model Development'
} as const


