'use client'

import { Truck, Package, MapPin, Zap, TrendingUp, Target, Building2, Heart, ShoppingCart, Home, GraduationCap, Code, Rocket, CheckCircle, FileText, Shield } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function LogisticsDevelopment() {
  const services = [
    {
      title: 'Fleet Management',
      description: 'Comprehensive fleet tracking and management systems',
      icon: <Truck className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Route Optimization',
      description: 'AI-powered route planning and optimization',
      icon: <MapPin className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Warehouse Management',
      description: 'Complete warehouse and inventory management',
      icon: <Package className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Tracking Systems',
      description: 'Real-time shipment and package tracking',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Delivery Management',
      description: 'End-to-end delivery and fulfillment systems',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Logistics Analytics',
      description: 'Business intelligence and logistics analytics',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Truck className="w-7 h-7" strokeWidth={2} />, 
      title: 'Logistics Expertise', 
      description: 'Deep understanding of logistics and supply chain operations',
      color: '#5e2cb6'
    },
    { 
      icon: <MapPin className="w-7 h-7" strokeWidth={2} />, 
      title: 'Route Optimization', 
      description: 'AI-powered route planning for efficiency',
      color: '#c91a6f'
    },
    { 
      icon: <Package className="w-7 h-7" strokeWidth={2} />, 
      title: 'Real-Time Tracking', 
      description: 'GPS tracking and real-time shipment monitoring',
      color: '#fecc4d'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'Scalable Solutions', 
      description: 'Build systems that scale with your logistics operations',
      color: '#10b981'
    }
  ]

  const industries = [
    { name: 'Shipping', icon: <Truck className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Warehousing', icon: <Package className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'Last Mile', icon: <MapPin className="w-7 h-7" strokeWidth={2} />, color: '#fecc4d' },
    { name: 'Supply Chain', icon: <Target className="w-7 h-7" strokeWidth={2} />, color: '#10b981' },
    { name: '3PL', icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Freight', icon: <Truck className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' }
  ]

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Google Maps API', logo: 'https://www.google.com/maps/favicon.ico', color: '#4285F4', category: 'backend' as const },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D', category: 'database' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
    { name: 'IoT Integration', logo: 'https://www.iot.org/favicon.ico', color: '#5A5A5A', category: 'backend' as const }
  ]

  const processSteps = [
    {
      title: 'Discovery & Analysis',
      description: 'We analyze your logistics operations, fleet size, and supply chain requirements',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'System Design',
      description: 'Design logistics architecture with GPS tracking, route optimization, and warehouse management',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Integration Planning',
      description: 'Plan integrations with shipping carriers, GPS devices, and warehouse systems',
      icon: <Shield className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Development & Testing',
      description: 'Build logistics platform with real-time tracking, route optimization, and analytics',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Performance Testing',
      description: 'Rigorous testing of route algorithms, tracking accuracy, and system performance',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Deployment & Support',
      description: 'Deploy with 24/7 monitoring, GPS integration, and ongoing logistics optimization',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('logistics')

  return (
    <PageTemplate
      badge={{
        icon: <Truck className="w-4 h-4" strokeWidth={2} />,
        text: 'Logistics Solutions'
      }}
      title="Logistics &"
      hollowText="Transportation"
      description="We build comprehensive logistics and transportation solutions that optimize operations. From fleet management to route optimization, we deliver logistics technology that drives efficiency. Our solutions are built with real-time tracking, route optimization, and scalability in mind."
      services={services}
      servicesTitle="Logistics"
      servicesHollowText="Solutions"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Choose"
      whyChooseHollowText="Logistics Development"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Build"
      getQuoteHollowText="Logistics Solutions?"
      getQuoteDescription="Get in touch and let's discuss how we can help optimize your logistics operations."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about logistics development? Let's discuss your project."
      processTitle="Logistics Development Process"
      processSubtitle="From discovery to deployment, we ensure efficient operations, real-time tracking, and route optimization at every step"
      processSteps={processSteps}
    />
  )
}
