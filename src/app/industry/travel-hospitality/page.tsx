'use client'

import { Plane, Hotel, Globe, Users, Award, Calendar, Building2, Heart, ShoppingCart, Truck, Home, GraduationCap, Code, Rocket, CheckCircle, FileText, Shield, Target } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function TravelHospitalityDevelopment() {
  const services = [
    {
      title: 'Booking Engines',
      description: 'Flight, hotel, and travel booking systems',
      icon: <Plane className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Hotel Management',
      description: 'Complete hotel operations and management systems',
      icon: <Hotel className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Travel Portals',
      description: 'Comprehensive travel and tourism platforms',
      icon: <Globe className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'CRM Systems',
      description: 'Customer relationship management for travel businesses',
      icon: <Users className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Loyalty Programs',
      description: 'Reward points and loyalty management systems',
      icon: <Award className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Reservation Systems',
      description: 'Restaurant and event reservation platforms',
      icon: <Calendar className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Plane className="w-7 h-7" strokeWidth={2} />, 
      title: 'Travel Expertise', 
      description: 'Deep understanding of travel and hospitality workflows',
      color: '#5e2cb6'
    },
    { 
      icon: <Hotel className="w-7 h-7" strokeWidth={2} />, 
      title: 'Booking Systems', 
      description: 'Build comprehensive booking and reservation systems',
      color: '#c91a6f'
    },
    { 
      icon: <Globe className="w-7 h-7" strokeWidth={2} />, 
      title: 'Multi-Channel', 
      description: 'Support for multiple booking channels and platforms',
      color: '#fecc4d'
    },
    { 
      icon: <Users className="w-7 h-7" strokeWidth={2} />, 
      title: 'Customer Focus', 
      description: 'Solutions designed to enhance customer experience',
      color: '#10b981'
    }
  ]

  const industries = [
    { name: 'Hotels', icon: <Hotel className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Airlines', icon: <Plane className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'Travel Agencies', icon: <Globe className="w-7 h-7" strokeWidth={2} />, color: '#fecc4d' },
    { name: 'Restaurants', icon: <Calendar className="w-7 h-7" strokeWidth={2} />, color: '#10b981' },
    { name: 'Events', icon: <Award className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Tourism', icon: <Users className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' }
  ]

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'Amadeus API', logo: 'https://developers.amadeus.com/favicon.ico', color: '#FF6B35', category: 'backend' as const },
    { name: 'Sabre API', logo: 'https://www.sabre.com/favicon.ico', color: '#5A5A5A', category: 'backend' as const },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D', category: 'database' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'devops' as const }
  ]

  const processSteps = [
    {
      title: 'Discovery & Requirements',
      description: 'We analyze your travel and hospitality needs, booking channels, and GDS requirements',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'System Design',
      description: 'Design travel platform with booking engines, hotel management, and CRM systems',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'GDS Integration Planning',
      description: 'Plan integrations with GDS systems (Amadeus, Sabre) and payment gateways',
      icon: <Shield className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Development & Testing',
      description: 'Build travel platform with booking, reservations, and loyalty program management',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing of booking workflows, payment processing, and GDS integrations',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Launch & Support',
      description: 'Deploy with GDS integration, user training, and ongoing travel industry support',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('travel-hospitality')

  return (
    <PageTemplate
      badge={{
        icon: <Plane className="w-4 h-4" strokeWidth={2} />,
        text: 'Travel & Hospitality Solutions'
      }}
      title="Travel &"
      hollowText="Hospitality"
      description="We build comprehensive travel and hospitality solutions that enhance customer experiences. From booking engines to hotel management, we deliver travel technology that drives bookings. Our solutions are built with GDS integration, multi-channel booking, and customer experience in mind."
      services={services}
      servicesTitle="Travel & Hospitality"
      servicesHollowText="Solutions"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Choose"
      whyChooseHollowText="Travel & Hospitality Development"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Build"
      getQuoteHollowText="Travel Solutions?"
      getQuoteDescription="Get in touch and let's discuss how we can help transform your travel and hospitality business."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about travel and hospitality development? Let's discuss your project."
      processTitle="Travel & Hospitality Development Process"
      processSubtitle="From discovery to launch, we ensure seamless bookings, GDS integration, and exceptional customer experiences at every step"
      processSteps={processSteps}
    />
  )
}
