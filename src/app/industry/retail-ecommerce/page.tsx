'use client'

import { ShoppingCart, Store, Package, TrendingUp, Zap, Target, Building2, Heart, Truck, Home, GraduationCap, Code, Rocket, CheckCircle, FileText, Shield } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function RetailEcommerceDevelopment() {
  const services = [
    {
      title: 'E-commerce Platforms',
      description: 'Custom e-commerce solutions with modern technology',
      icon: <ShoppingCart className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Multi-Vendor Marketplaces',
      description: 'Scalable marketplace platforms with vendor management',
      icon: <Store className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Inventory Management',
      description: 'Comprehensive inventory and warehouse management',
      icon: <Package className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Payment Integration',
      description: 'Seamless payment gateway integration',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Order Management',
      description: 'Complete order processing and fulfillment systems',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Business intelligence and sales analytics',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <ShoppingCart className="w-7 h-7" strokeWidth={2} />, 
      title: 'E-commerce Expertise', 
      description: 'Deep expertise in building scalable e-commerce platforms',
      color: '#5e2cb6'
    },
    { 
      icon: <Store className="w-7 h-7" strokeWidth={2} />, 
      title: 'Multi-Vendor Support', 
      description: 'Build marketplaces with vendor management and commissions',
      color: '#c91a6f'
    },
    { 
      icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, 
      title: 'Payment Integration', 
      description: 'Seamless integration with all major payment gateways',
      color: '#fecc4d'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'Scalable Architecture', 
      description: 'Build platforms that scale with your business',
      color: '#10b981'
    }
  ]

  const industries = [
    { name: 'Online Retail', icon: <ShoppingCart className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Marketplaces', icon: <Store className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'B2B Commerce', icon: <Building2 className="w-7 h-7" strokeWidth={2} />, color: '#fecc4d' },
    { name: 'D2C Brands', icon: <Target className="w-7 h-7" strokeWidth={2} />, color: '#10b981' },
    { name: 'Fashion', icon: <Package className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Electronics', icon: <Zap className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' }
  ]

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Stripe', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg', color: '#635BFF', category: 'backend' as const },
    { name: 'PayPal', logo: 'https://www.paypal.com/favicon.ico', color: '#0070BA', category: 'backend' as const },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D', category: 'database' as const },
    { name: 'Elasticsearch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg', color: '#005571', category: 'database' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const }
  ]

  const processSteps = [
    {
      title: 'Discovery & Planning',
      description: 'We analyze your e-commerce requirements, business model, and target market',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Architecture Design',
      description: 'Design scalable e-commerce architecture with payment and inventory systems',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Payment Integration',
      description: 'Integrate secure payment gateways and PCI-DSS compliant checkout systems',
      icon: <Shield className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Development & Testing',
      description: 'Build e-commerce platform with inventory, orders, and vendor management',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Security & Performance',
      description: 'Rigorous security testing, performance optimization, and load testing',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Launch & Optimization',
      description: 'Deploy with monitoring, analytics, and ongoing optimization for conversions',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('retail-ecommerce')

  return (
    <PageTemplate
      badge={{
        icon: <ShoppingCart className="w-4 h-4" strokeWidth={2} />,
        text: 'Retail & E-commerce Solutions'
      }}
      title="Retail &"
      hollowText="E-commerce"
      description="We build scalable e-commerce platforms and retail solutions that drive sales. From marketplaces to inventory management, we deliver retail technology that grows your business. Our solutions are built with payment integration, inventory management, and scalability in mind."
      services={services}
      servicesTitle="Retail & E-commerce"
      servicesHollowText="Solutions"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Choose"
      whyChooseHollowText="Retail & E-commerce Development"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Build"
      getQuoteHollowText="E-commerce Solutions?"
      getQuoteDescription="Get in touch and let's discuss how we can help transform your retail business."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about retail and e-commerce development? Let's discuss your project."
      processTitle="E-commerce Development Process"
      processSubtitle="From discovery to launch, we ensure security, scalability, and conversion optimization at every step"
      processSteps={processSteps}
    />
  )
}
