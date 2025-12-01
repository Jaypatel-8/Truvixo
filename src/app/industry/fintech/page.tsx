'use client'

import { Building2, CreditCard, Wallet, DollarSign, BarChart, TrendingUp, Shield, Zap, Heart, ShoppingCart, Truck, Home, GraduationCap, Target, FileText, Code, Rocket, Settings, CheckCircle } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function FintechDevelopment() {
  const services = [
    {
      title: 'Digital Banking Platforms',
      description: 'Complete banking solutions with modern technology',
      icon: <CreditCard className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Payment Applications',
      description: 'Secure mobile payment and wallet applications',
      icon: <Wallet className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Loan Management Systems',
      description: 'Automated lending and credit management platforms',
      icon: <DollarSign className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Trading Platforms',
      description: 'Stock, crypto, and forex trading systems',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Wealth Management',
      description: 'AI-powered investment and robo-advisor tools',
      icon: <BarChart className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Fraud Detection',
      description: 'AI-based fraud prevention and security systems',
      icon: <Shield className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Building2 className="w-7 h-7" strokeWidth={2} />, 
      title: 'Fintech Expertise', 
      description: 'Deep industry knowledge and regulatory compliance',
      color: '#5e2cb6'
    },
    { 
      icon: <Shield className="w-7 h-7" strokeWidth={2} />, 
      title: 'Bank-Grade Security', 
      description: 'Enterprise security and PCI-DSS compliance',
      color: '#c91a6f'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'High Performance', 
      description: '99.9% uptime and real-time transaction processing',
      color: '#fecc4d'
    },
    { 
      icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, 
      title: 'Scalable Solutions', 
      description: 'Cloud-native architecture that scales',
      color: '#10b981'
    }
  ]

  const industries = [
    { name: 'Banking', icon: <Building2 className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Payments', icon: <CreditCard className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'Lending', icon: <DollarSign className="w-7 h-7" strokeWidth={2} />, color: '#fecc4d' },
    { name: 'Investments', icon: <BarChart className="w-7 h-7" strokeWidth={2} />, color: '#10b981' },
    { name: 'Insurance', icon: <Shield className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Cryptocurrency', icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' }
  ]

  const technologies = [
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D', category: 'database' as const },
    { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', color: '#E10098', category: 'backend' as const },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'frontend' as const },
    { name: 'Stripe', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg', color: '#635BFF', category: 'backend' as const }
  ]

  const processSteps = [
    {
      title: 'Discovery & Requirements',
      description: 'We analyze your fintech needs, regulatory requirements, and compliance standards',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Architecture Design',
      description: 'Design secure, scalable fintech architecture with compliance in mind',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Security Implementation',
      description: 'Implement bank-grade security, encryption, and PCI-DSS compliance',
      icon: <Shield className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Development & Integration',
      description: 'Build fintech solutions with payment gateway and banking API integrations',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Testing & Compliance',
      description: 'Rigorous security testing, compliance audits, and performance validation',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Launch & Monitoring',
      description: 'Deploy with 24/7 monitoring, fraud detection, and ongoing compliance',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('fintech')

  return (
    <PageTemplate
      badge={{
        icon: <Building2 className="w-4 h-4" strokeWidth={2} />,
        text: 'Fintech Solutions'
      }}
      title="Fintech"
      hollowText="Development"
      description="We build secure, compliant fintech solutions that transform financial services. From digital banking to payment apps, we deliver enterprise-grade fintech applications. Our solutions are built with bank-grade security, regulatory compliance, and scalability in mind."
      services={services}
      servicesTitle="Fintech"
      servicesHollowText="Solutions"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Choose"
      whyChooseHollowText="Fintech Development"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Build"
      getQuoteHollowText="Fintech Solutions?"
      getQuoteDescription="Get in touch and let's discuss how we can help transform your fintech business."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about fintech development? Let's discuss your project."
      processTitle="Fintech Development Process"
      processSubtitle="From discovery to launch, we ensure security, compliance, and scalability at every step"
      processSteps={processSteps}
    />
  )
}
