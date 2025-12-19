// Server-only static data for AI/ML Technology page
export const aiMlTechnologyData = {
  hero: {
    title: 'AI/ML Development Technologies We Use to Build',
    hollowText: 'Intelligent, Data-Driven Solutions',
    description: 'We use cutting-edge AI and machine learning technologies to build intelligent systems that learn, adapt, and make data-driven decisions. Our AI/ML engineering ensures model accuracy, performance, and production-ready deployments.'
  },
  technologies: [
    {
      name: 'TensorFlow',
      iconName: 'Brain',
      description: 'Open-source platform for machine learning and deep learning models.',
      number: '1'
    },
    {
      name: 'PyTorch',
      iconName: 'Brain',
      description: 'Flexible deep learning framework for research and production.',
      number: '2'
    },
    {
      name: 'Scikit-learn',
      iconName: 'Target',
      description: 'Machine learning library for data mining and analysis.',
      number: '3'
    },
    {
      name: 'Keras',
      iconName: 'Layers',
      description: 'High-level neural networks API for rapid prototyping.',
      number: '4'
    },
    {
      name: 'OpenCV',
      iconName: 'Eye',
      description: 'Computer vision library for image and video processing.',
      number: '5'
    },
    {
      name: 'NLTK',
      iconName: 'MessageSquare',
      description: 'Natural language processing toolkit for text analysis.',
      number: '6'
    }
  ],
  whatWeBuild: [
    { iconName: 'Brain', title: 'Machine Learning Models' },
    { iconName: 'Network', title: 'Deep Learning Systems' },
    { iconName: 'Eye', title: 'Computer Vision' },
    { iconName: 'MessageSquare', title: 'NLP Solutions' },
    { iconName: 'BarChart', title: 'Predictive Analytics' },
    { iconName: 'Rocket', title: 'MLOps Pipelines' }
  ],
  benefits: [
    { iconName: 'Brain', title: 'Intelligent Systems', description: 'AI-powered decision making' },
    { iconName: 'Target', title: 'Accurate Predictions', description: 'High model accuracy' },
    { iconName: 'TrendingUp', title: 'Data-Driven', description: 'Insights from data' },
    { iconName: 'Rocket', title: 'Production Ready', description: 'Deploy models to production' },
    { iconName: 'Zap', title: 'Real-Time Processing', description: 'Fast inference and predictions' }
  ],
  whyChooseUs: [
    { iconName: 'Brain', title: 'AI/ML Expertise', description: 'Deep knowledge of ML and deep learning' },
    { iconName: 'Target', title: 'Custom Models', description: 'Build models tailored to your needs' },
    { iconName: 'Rocket', title: 'MLOps', description: 'Deploy and monitor ML models' },
    { iconName: 'TrendingUp', title: 'Data Science', description: 'Comprehensive data analysis' }
  ],
  cta: {
    title: 'Build an AI/ML Solution',
    buttonText: 'Get Started'
  }
} as const

