'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Brain, Code, TrendingUp, Target, Shield, BarChart, Zap, Cloud, Database, Phone, Mail, Calendar, Building2, Heart, ShoppingCart, Truck, Home, GraduationCap, Rocket, CheckCircle, Settings } from 'lucide-react'
import dynamic from 'next/dynamic'
import Technologies from '@/components/Technologies'
import FAQDropdown from '@/components/FAQDropdown'
import Clientele from '@/components/Clientele'
import ContactSection from '@/components/ContactSection'
import ProcessDiagram from '@/components/ProcessDiagram'
import { getFAQsForPage } from '@/lib/pageData'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function MachineLearningModelDevelopment() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale')
    scrollElements.forEach((el) => observer.observe(el))

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const services = [
    {
      title: 'Custom ML Model Development',
      description: 'Build custom machine learning models tailored to your data and use case',
      icon: <Brain className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors with predictive models',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Natural Language Processing',
      description: 'NLP models for text analysis, sentiment, and language understanding',
      icon: <Code className="w-8 h-8" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual analysis',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#059669'
    },
    {
      title: 'Model Training & Tuning',
      description: 'Hyperparameter tuning and model optimization for best performance',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Model Deployment',
      description: 'Deploy ML models to production with monitoring and scaling',
      icon: <Cloud className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Data Pipeline Automation',
      description: 'Automated data processing and model training pipelines',
      icon: <Database className="w-8 h-8" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'Model Monitoring',
      description: 'Continuous monitoring and retraining for model performance',
      icon: <BarChart className="w-8 h-8" strokeWidth={2} />,
      color: '#059669'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Brain className="w-7 h-7" strokeWidth={2} />, 
      title: 'Experienced ML Engineers', 
      description: 'Expert team with deep machine learning expertise',
      color: '#5e2cb6'
    },
    { 
      icon: <Code className="w-7 h-7" strokeWidth={2} />, 
      title: 'Custom Models', 
      description: 'Tailored ML models built for your specific use case, not off-the-shelf',
      color: '#c91a6f'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'Full Hyperparameter Tuning', 
      description: 'Optimized models for best performance and accuracy',
      color: '#d97706'
    },
    { 
      icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, 
      title: 'Data Pipeline Automation', 
      description: 'Automated data processing and model training workflows',
      color: '#059669'
    },
    { 
      icon: <Cloud className="w-7 h-7" strokeWidth={2} />, 
      title: 'Production Deployment', 
      description: 'Complete ML lifecycle from training to production',
      color: '#5e2cb6'
    },
    { 
      icon: <Rocket className="w-7 h-7" strokeWidth={2} />, 
      title: 'Scalable Infrastructure', 
      description: 'Cloud-based ML infrastructure that scales',
      color: '#c91a6f'
    }
  ]

  const technologies = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00', category: 'backend' as const },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: '#EE4C2C', category: 'backend' as const },
    { name: 'AWS SageMaker', logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Scikit-learn', logo: 'https://scikit-learn.org/favicon.ico', color: '#F7931E', category: 'backend' as const },
    { name: 'Pandas', logo: 'https://pandas.pydata.org/favicon.ico', color: '#150458', category: 'backend' as const },
    { name: 'NumPy', logo: 'https://numpy.org/favicon.ico', color: '#013243', category: 'backend' as const },
    { name: 'Jupyter', logo: 'https://jupyter.org/favicon.ico', color: '#F37626', category: 'backend' as const },
    { name: 'MLflow', logo: 'https://mlflow.org/favicon.ico', color: '#0194E2', category: 'backend' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const }
  ]

  const processSteps = [
    {
      title: 'Problem Definition & Data Collection',
      description: 'Define ML problem, gather requirements, and collect relevant data for model training',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Data Preparation & Exploration',
      description: 'Clean, preprocess, and explore data to understand patterns and prepare for modeling',
      icon: <Database className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Model Development & Training',
      description: 'Develop ML models, train with data, and tune hyperparameters for optimal performance',
      icon: <Brain className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Model Evaluation & Validation',
      description: 'Evaluate model performance, validate accuracy, and test on unseen data',
      icon: <BarChart className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Model Deployment',
      description: 'Deploy models to production with APIs, monitoring, and scaling infrastructure',
      icon: <Cloud className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Monitoring & Retraining',
      description: 'Monitor model performance, detect drift, and retrain models to maintain accuracy',
      icon: <Settings className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const industries = [
    { name: 'Fintech', icon: <Building2 className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Healthcare', icon: <Heart className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'Retail', icon: <ShoppingCart className="w-7 h-7" strokeWidth={2} />, color: '#d97706' },
    { name: 'Logistics', icon: <Truck className="w-7 h-7" strokeWidth={2} />, color: '#059669' },
    { name: 'Real Estate', icon: <Home className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Education', icon: <GraduationCap className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' }
  ]

  const faqs = getFAQsForPage('machine-learning-model-development')

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <section className="relative min-h-[85vh] bg-white flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e2cb6]/10 rounded-full mb-6">
                <Brain className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
                <span className="text-sm font-semibold text-[#5e2cb6]">ML Model Development</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Machine Learning Model{' '}
                <span className="hollow-text-brand block mt-2">
                  Development
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                We design, train, and deploy ML models that solve complex business problems using data-driven logic. From prediction to automation, we build intelligent solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-[#5e2cb6] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-[#5e2cb6]/30"
                >
                  <Calendar className="w-5 h-5" strokeWidth={2} />
                  <span>Get a Quote</span>
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-white text-[#5e2cb6] border-2 border-[#5e2cb6] font-semibold py-4 px-8 rounded-xl hover:bg-[#5e2cb6]/5 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4 scroll-animate-scale">
              {services.slice(0, 4).map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{ borderColor: service.color + '40' }}
                >
                  <div className="mb-4" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{service.title}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isMounted && <div className="mt-12"><Clientele /></div>}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              ML Model{' '}
              <span className="hollow-text-brand">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive machine learning model development solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
                style={{ 
                  borderColor: service.color + '40'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = service.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = service.color + '40'
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: service.color }}></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5e2cb6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Why Choose ML Model{' '}
              <span className="hollow-text-brand">
                Development
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver enterprise-grade ML solutions that are built specifically for your business, ensuring optimal performance, accuracy, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
                style={{ 
                  borderColor: item.color + '40'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = item.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = item.color + '40'
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ backgroundColor: item.color }}></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5e2cb6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Industries We{' '}
              <span className="hollow-text-brand">
                Specialize
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Serving diverse industries with tailored ML solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                style={{ 
                  borderColor: industry.color + '40'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = industry.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = industry.color + '40'
                }}
              >
                <div className="mb-3 flex justify-center" style={{ color: industry.color }}>
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#5e2cb6] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Build Your{' '}
              <span className="hollow-text-white">
                ML Model?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              Get in touch and let's discuss how we can help build ML models for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-[#5e2cb6] font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-5 h-5" strokeWidth={2} />
                <span>Call Us</span>
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-transparent text-white border-2 border-white font-semibold py-4 px-8 rounded-xl hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" strokeWidth={2} />
                <span>Schedule Consultation</span>
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <a href="mailto:sales@truvixoo.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-5 h-5" strokeWidth={2} />
                <span>sales@truvixoo.com</span>
              </a>
              <a href="tel:+916354326412" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-5 h-5" strokeWidth={2} />
                <span>+91 63543 26412</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content - Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              ML Model Development{' '}
              <span className="hollow-text-brand">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how machine learning model development can unlock insights and automate decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Insights</h3>
              <p className="text-gray-600">
                Predict future trends, behaviors, and outcomes with machine learning. Make data-driven decisions based on predictive analytics rather than historical patterns alone.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Decision Making</h3>
              <p className="text-gray-600">
                Automate complex decision-making processes with ML models. Reduce manual work, improve consistency, and enable real-time decision making at scale.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#d97706]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#d97706]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pattern Recognition</h3>
              <p className="text-gray-600">
                Identify patterns and anomalies in large datasets that humans might miss. ML models excel at finding complex relationships in data.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#059669]/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#059669]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Reduction</h3>
              <p className="text-gray-600">
                Automate tasks that previously required human intervention. Reduce operational costs while improving accuracy and speed of processes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#5e2cb6]/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-[#5e2cb6]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Improved Accuracy</h3>
              <p className="text-gray-600">
                ML models can achieve higher accuracy than rule-based systems. Learn from data and improve performance over time with more training data.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#c91a6f]/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-[#c91a6f]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">
                ML models can process vast amounts of data and scale automatically. Handle growing data volumes and user demands without proportional cost increases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              ML Model Development{' '}
              <span className="hollow-text-brand">
                Use Cases
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how businesses leverage machine learning models to solve complex problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#5e2cb6]/5 to-[#c91a6f]/5 rounded-xl p-8 border border-[#5e2cb6]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Demand Forecasting</h3>
              <p className="text-gray-600 mb-4">
                Build predictive models to forecast product demand, sales, and inventory needs. Optimize supply chain, reduce stockouts, and minimize excess inventory.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sales forecasting models</li>
                <li>• Inventory optimization</li>
                <li>• Seasonal demand prediction</li>
                <li>• Supply chain optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#d97706]/5 to-[#059669]/5 rounded-xl p-8 border border-[#d97706]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fraud Detection</h3>
              <p className="text-gray-600 mb-4">
                Develop ML models to detect fraudulent transactions, activities, and behaviors in real-time. Protect against financial losses and security threats.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Transaction fraud detection</li>
                <li>• Anomaly detection models</li>
                <li>• Real-time risk scoring</li>
                <li>• Pattern recognition</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#059669]/5 to-[#5e2cb6]/5 rounded-xl p-8 border border-[#059669]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Churn Prediction</h3>
              <p className="text-gray-600 mb-4">
                Predict which customers are likely to churn and take proactive measures. Identify at-risk customers and implement retention strategies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Churn probability scoring</li>
                <li>• Customer behavior analysis</li>
                <li>• Retention campaign targeting</li>
                <li>• Lifetime value prediction</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#c91a6f]/5 to-[#d97706]/5 rounded-xl p-8 border border-[#c91a6f]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Image Classification</h3>
              <p className="text-gray-600 mb-4">
                Build computer vision models for image recognition, object detection, and visual analysis. Applications in quality control, security, and automation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Product quality inspection</li>
                <li>• Object detection and recognition</li>
                <li>• Medical image analysis</li>
                <li>• Automated visual inspection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Technologies technologies={technologies} />
      <ProcessDiagram title="ML Model Development Process" subtitle="From data to deployment, we ensure accurate and reliable models at every step" steps={processSteps} />
      <FAQDropdown faqs={faqs} />
      <ContactSection title="Get in Touch" description="Have a project in mind? Let's discuss how we can help build ML models for your business." />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}

