'use client'

import { Brain, Code, TrendingUp, Target, Database, Zap, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, MessageSquare, Rocket, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'

interface AIMLEngineersPageClientProps {
  faqs: Array<{ question: string; answer: string }>
}

export default function AIMLEngineersPageClient({ faqs }: AIMLEngineersPageClientProps) {
  const services = [
    {
      title: 'Machine Learning Engineers',
      description: 'Expert ML engineers for custom model development',
      icon: <Brain className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Deep Learning Specialists',
      description: 'Neural network and deep learning experts',
      icon: <Code className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'NLP Engineers',
      description: 'Natural language processing specialists',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'Computer Vision Engineers',
      description: 'Image recognition and visual analysis experts',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#059669'
    },
    {
      title: 'Data Scientists',
      description: 'Data analysis and predictive modeling experts',
      icon: <Database className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'MLOps Engineers',
      description: 'ML model deployment and infrastructure specialists',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Brain className="w-7 h-7" strokeWidth={2} />, 
      title: 'AI/ML Expertise', 
      description: 'Deep expertise in machine learning, deep learning, and AI technologies',
      color: '#5e2cb6'
    },
    { 
      icon: <Code className="w-7 h-7" strokeWidth={2} />, 
      title: 'Custom Models', 
      description: 'Build custom ML models tailored to your specific use case',
      color: '#c91a6f'
    },
    { 
      icon: <Database className="w-7 h-7" strokeWidth={2} />, 
      title: 'Data Pipeline Expertise', 
      description: 'Expertise in data processing and ML pipelines',
      color: '#d97706'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'Production Deployment', 
      description: 'Full ML lifecycle from training to production deployment',
      color: '#059669'
    }
  ]

  const industries = [
    { name: 'Fintech', icon: <Building2 className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Healthcare', icon: <Heart className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'E-Commerce', icon: <ShoppingCart className="w-7 h-7" strokeWidth={2} />, color: '#d97706' },
    { name: 'Logistics', icon: <Truck className="w-7 h-7" strokeWidth={2} />, color: '#059669' },
    { name: 'Real Estate', icon: <Home className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' }
  ]

  const technologies = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00', category: 'backend' as const },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: '#EE4C2C', category: 'backend' as const },
    { name: 'AWS SageMaker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/scikitlearn.svg', color: '#F7931E', category: 'backend' as const },
    { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg', color: '#F37626', category: 'backend' as const },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/pandas.svg', color: '#150458', category: 'backend' as const },
    { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/numpy.svg', color: '#013243', category: 'backend' as const },
    { name: 'Keras', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/keras.svg', color: '#D00000', category: 'backend' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const }
  ]

  const processSteps = [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your AI/ML requirements, use cases, and data availability',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Engineer Matching',
      description: 'We match you with AI/ML engineers specialized in your domain (NLP, CV, etc.)',
      icon: <Users className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Technical Assessment',
      description: 'Comprehensive interviews covering ML algorithms, frameworks, and model deployment',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Portfolio Review',
      description: 'Review engineer portfolios showcasing ML models and production deployments',
      icon: <MessageSquare className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Trial Period',
      description: 'Optional trial period to evaluate engineer skills on real ML projects',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Team Integration',
      description: 'Seamless integration with your data science team and ML workflows',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]


  return (
    <PageTemplate
      badge={{
        icon: <Brain className="w-4 h-4" strokeWidth={2} />,
        text: 'Hire AI/ML Engineers'
      }}
      title="Hire AI/ML"
      hollowText="Engineers"
      description="Hire experienced AI and machine learning engineers who build intelligent solutions. From custom ML models to production deployment, we provide the AI expertise you need. Our engineers are experts in TensorFlow, PyTorch, NLP, computer vision, and MLOps."
      services={services}
      servicesTitle="AI/ML"
      servicesHollowText="Services"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Hire Our"
      whyChooseHollowText="AI/ML Engineers"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Hire"
      getQuoteHollowText="AI/ML Engineers?"
      getQuoteDescription="Get in touch and let's discuss how we can help you find the perfect AI/ML engineers."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about hiring AI/ML engineers? Let's discuss your needs."
      processTitle="Hiring Process"
      processSubtitle="From requirement analysis to team integration, we ensure a seamless AI/ML engineering experience"
      processSteps={processSteps}
    />
  )
}
