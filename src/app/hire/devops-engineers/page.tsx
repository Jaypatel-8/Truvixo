'use client'

import { Cloud, Server, Zap, Shield, Network, Database, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, MessageSquare, Rocket, Target, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function HireDevOpsEngineers() {
  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable cloud infrastructure',
      icon: <Cloud className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'CI/CD Pipelines',
      description: 'Automated deployment and continuous integration',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Container Orchestration',
      description: 'Docker and Kubernetes deployment and management',
      icon: <Server className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Terraform, CloudFormation, and automation',
      icon: <Network className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Monitoring & Logging',
      description: 'Set up monitoring, logging, and alerting systems',
      icon: <Database className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Security & Compliance',
      description: 'Implement security best practices and compliance',
      icon: <Shield className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Cloud className="w-7 h-7" strokeWidth={2} />, 
      title: 'Cloud Expertise', 
      description: 'Deep expertise in AWS, Azure, GCP, and cloud-native technologies',
      color: '#5e2cb6'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'Automation First', 
      description: 'Build automated, scalable infrastructure',
      color: '#c91a6f'
    },
    { 
      icon: <Server className="w-7 h-7" strokeWidth={2} />, 
      title: 'Container Expertise', 
      description: 'Expertise in Docker, Kubernetes, and container orchestration',
      color: '#fecc4d'
    },
    { 
      icon: <Shield className="w-7 h-7" strokeWidth={2} />, 
      title: 'Security Focused', 
      description: 'Security and compliance built into every solution',
      color: '#10b981'
    }
  ]

  const industries = [
    { name: 'Fintech', icon: <Building2 className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Healthcare', icon: <Heart className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'E-Commerce', icon: <ShoppingCart className="w-7 h-7" strokeWidth={2} />, color: '#fecc4d' },
    { name: 'Logistics', icon: <Truck className="w-7 h-7" strokeWidth={2} />, color: '#10b981' },
    { name: 'Real Estate', icon: <Home className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' }
  ]

  const technologies = [
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const },
    { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', color: '#7B42BC', category: 'devops' as const },
    { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', color: '#D24939', category: 'devops' as const },
    { name: 'GitLab CI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', color: '#FC6D26', category: 'devops' as const },
    { name: 'Ansible', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', color: '#EE0000', category: 'devops' as const },
    { name: 'Prometheus', logo: 'https://prometheus.io/assets/prometheus_logo.png', color: '#E6522C', category: 'devops' as const },
    { name: 'Grafana', logo: 'https://grafana.com/static/img/menu/grafana2.svg', color: '#F46800', category: 'devops' as const },
    { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: '#0078D4', category: 'cloud' as const }
  ]

  const processSteps = [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your infrastructure needs, cloud preferences, and DevOps requirements',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Engineer Matching',
      description: 'We match you with DevOps engineers skilled in your preferred cloud and tools',
      icon: <Users className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Technical Assessment',
      description: 'Comprehensive interviews covering cloud platforms, CI/CD, and infrastructure',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Portfolio Review',
      description: 'Review engineer portfolios showcasing infrastructure projects and automation',
      icon: <MessageSquare className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Trial Period',
      description: 'Optional trial period to evaluate engineer skills on real infrastructure projects',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Team Integration',
      description: 'Seamless integration with your development and operations teams',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('devops-engineers')

  return (
    <PageTemplate
      badge={{
        icon: <Cloud className="w-4 h-4" strokeWidth={2} />,
        text: 'Hire DevOps Engineers'
      }}
      title="Hire DevOps"
      hollowText="Engineers"
      description="Hire experienced DevOps engineers who build and manage scalable cloud infrastructure. From CI/CD to container orchestration, we provide the DevOps expertise you need. Our engineers are experts in AWS, Azure, Docker, Kubernetes, and modern DevOps tools."
      services={services}
      servicesTitle="DevOps"
      servicesHollowText="Services"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Hire Our"
      whyChooseHollowText="DevOps Engineers"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Hire"
      getQuoteHollowText="DevOps Engineers?"
      getQuoteDescription="Get in touch and let's discuss how we can help you find the perfect DevOps engineers."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about hiring DevOps engineers? Let's discuss your needs."
      processTitle="Hiring Process"
      processSubtitle="From requirement analysis to team integration, we ensure a seamless DevOps engineering experience"
      processSteps={processSteps}
    />
  )
}
