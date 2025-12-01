'use client'

import { Heart, Video, FileText, Brain, Calendar, FlaskConical, Shield, Zap, Building2, ShoppingCart, Truck, Home, GraduationCap, Target, Code, Rocket, CheckCircle, Users } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function HealthcareDevelopment() {
  const services = [
    {
      title: 'Telemedicine Platforms',
      description: 'Remote consultation and virtual care systems',
      icon: <Video className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'EMR/EHR Systems',
      description: 'Electronic medical records and health information systems',
      icon: <FileText className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Patient Management',
      description: 'Complete patient care and management systems',
      icon: <Heart className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Healthcare AI',
      description: 'AI-powered diagnostics and patient assistance',
      icon: <Brain className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Remote Monitoring',
      description: 'IoT health tracking and remote monitoring',
      icon: <Calendar className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Lab Management',
      description: 'Laboratory and pharmacy management systems',
      icon: <FlaskConical className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Shield className="w-7 h-7" strokeWidth={2} />, 
      title: 'HIPAA Compliant', 
      description: 'All solutions built with HIPAA compliance in mind',
      color: '#5e2cb6'
    },
    { 
      icon: <Heart className="w-7 h-7" strokeWidth={2} />, 
      title: 'Healthcare Expertise', 
      description: 'Deep understanding of healthcare workflows and requirements',
      color: '#c91a6f'
    },
    { 
      icon: <Brain className="w-7 h-7" strokeWidth={2} />, 
      title: 'AI-Powered Solutions', 
      description: 'AI-powered diagnostics and patient care tools',
      color: '#fecc4d'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'Secure & Scalable', 
      description: 'Enterprise-grade security and scalability',
      color: '#10b981'
    }
  ]

  const industries = [
    { name: 'Hospitals', icon: <Heart className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Clinics', icon: <FileText className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'Telemedicine', icon: <Video className="w-7 h-7" strokeWidth={2} />, color: '#fecc4d' },
    { name: 'Pharmacy', icon: <FlaskConical className="w-7 h-7" strokeWidth={2} />, color: '#10b981' },
    { name: 'Labs', icon: <Brain className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Insurance', icon: <Shield className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' }
  ]

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'HL7/FHIR', logo: 'https://www.hl7.org/fhir/assets/images/fhir-logo-www.png', color: '#4A90E2', category: 'backend' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'backend' as const },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00', category: 'backend' as const }
  ]

  const processSteps = [
    {
      title: 'Discovery & Compliance',
      description: 'We analyze healthcare requirements, HIPAA compliance needs, and integration requirements',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Architecture Design',
      description: 'Design secure, HIPAA-compliant healthcare architecture with HL7/FHIR integration',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Security Implementation',
      description: 'Implement HIPAA-compliant security, encryption, and access controls',
      icon: <Shield className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Development & Integration',
      description: 'Build healthcare solutions with EMR integration and telemedicine capabilities',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'HIPAA Compliance Testing',
      description: 'Rigorous security audits, HIPAA compliance validation, and penetration testing',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Deployment & Support',
      description: 'Deploy with 24/7 monitoring, ongoing compliance, and healthcare-specific support',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('healthcare')

  return (
    <PageTemplate
      badge={{
        icon: <Heart className="w-4 h-4" strokeWidth={2} />,
        text: 'Healthcare Solutions'
      }}
      title="Healthcare"
      hollowText="Development"
      description="We build secure, HIPAA-compliant healthcare solutions that improve patient care. From telemedicine to EMR systems, we deliver healthcare technology that makes a difference. Our solutions are built with patient privacy, regulatory compliance, and clinical workflows in mind."
      services={services}
      servicesTitle="Healthcare"
      servicesHollowText="Solutions"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Choose"
      whyChooseHollowText="Healthcare Development"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Build"
      getQuoteHollowText="Healthcare Solutions?"
      getQuoteDescription="Get in touch and let's discuss how we can help transform healthcare delivery."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about healthcare development? Let's discuss your project."
      processTitle="Healthcare Development Process"
      processSubtitle="From discovery to deployment, we ensure HIPAA compliance, security, and clinical excellence at every step"
      processSteps={processSteps}
    />
  )
}
