'use client'

import { Shield, CheckCircle, Zap, Target, Eye, TrendingUp, Building2, Heart, ShoppingCart, Truck, Home, Users, MessageSquare, Rocket, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function HireQAEngineers() {
  const services = [
    {
      title: 'Manual Testing',
      description: 'Comprehensive manual testing and quality assurance',
      icon: <Eye className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Automated Testing',
      description: 'Build and maintain automated test suites',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'E2E Testing',
      description: 'End-to-end testing with Selenium, Cypress, Playwright',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'Performance Testing',
      description: 'Load testing and performance optimization',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#059669'
    },
    {
      title: 'Security Testing',
      description: 'Security audits and vulnerability testing',
      icon: <Shield className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Test Automation',
      description: 'CI/CD integration and test pipeline setup',
      icon: <CheckCircle className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Shield className="w-7 h-7" strokeWidth={2} />, 
      title: 'Quality Assurance', 
      description: 'Ensure bug-free, high-quality software releases',
      color: '#5e2cb6'
    },
    { 
      icon: <Zap className="w-7 h-7" strokeWidth={2} />, 
      title: 'Test Automation', 
      description: 'Build automated test suites for faster releases',
      color: '#c91a6f'
    },
    { 
      icon: <Target className="w-7 h-7" strokeWidth={2} />, 
      title: 'Comprehensive Testing', 
      description: 'Unit, integration, E2E, and performance testing',
      color: '#d97706'
    },
    { 
      icon: <Eye className="w-7 h-7" strokeWidth={2} />, 
      title: 'Manual & Automated', 
      description: 'Expertise in both manual and automated testing',
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
    { name: 'Selenium', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg', color: '#43B02A', category: 'backend' as const },
    { name: 'Cypress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg', color: '#17202C', category: 'backend' as const },
    { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', color: '#C21325', category: 'backend' as const },
    { name: 'Playwright', logo: 'https://playwright.dev/img/playwright-logo.svg', color: '#45BA4B', category: 'backend' as const },
    { name: 'Postman', logo: 'https://www.postman.com/_ar-assets/images/favicon-1-48.png', color: '#FF6C37', category: 'backend' as const },
    { name: 'JMeter', logo: 'https://jmeter.apache.org/images/jmeter.png', color: '#D22128', category: 'backend' as const },
    { name: 'TestNG', logo: 'https://testng.org/doc/images/testng-logo.png', color: '#FF6C37', category: 'backend' as const },
    { name: 'Appium', logo: 'https://appium.io/img/appium-logo.png', color: '#5A5A5A', category: 'mobile' as const }
  ]

  const processSteps = [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your testing requirements, test coverage needs, and QA processes',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Engineer Matching',
      description: 'We match you with QA engineers skilled in manual and automated testing',
      icon: <Users className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Technical Assessment',
      description: 'Comprehensive interviews covering testing methodologies, tools, and frameworks',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Portfolio Review',
      description: 'Review engineer portfolios showcasing test automation and QA projects',
      icon: <MessageSquare className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Trial Period',
      description: 'Optional trial period to evaluate engineer skills on real testing projects',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Team Integration',
      description: 'Seamless integration with your development team and QA workflows',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('qa-engineers')

  return (
    <PageTemplate
      badge={{
        icon: <Shield className="w-4 h-4" strokeWidth={2} />,
        text: 'Hire QA Engineers'
      }}
      title="Hire QA"
      hollowText="Engineers"
      description="Hire experienced QA engineers who ensure bug-free, high-quality software. From manual testing to automated test suites, we provide the QA expertise you need. Our engineers are experts in Selenium, Cypress, Jest, Playwright, and modern testing frameworks."
      services={services}
      servicesTitle="QA"
      servicesHollowText="Services"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Hire Our"
      whyChooseHollowText="QA Engineers"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Hire"
      getQuoteHollowText="QA Engineers?"
      getQuoteDescription="Get in touch and let's discuss how we can help you find the perfect QA engineers."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about hiring QA engineers? Let's discuss your needs."
      processTitle="Hiring Process"
      processSubtitle="From requirement analysis to team integration, we ensure a seamless QA engineering experience"
      processSteps={processSteps}
    />
  )
}
