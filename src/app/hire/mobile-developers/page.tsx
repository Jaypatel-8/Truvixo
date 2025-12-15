'use client'

import { Smartphone, Code, Zap, Layers, Target, TrendingUp, Building2, Heart, ShoppingCart, Truck, Home, Users, CheckCircle, MessageSquare, Rocket, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function HireMobileDevelopers() {
  const services = [
    {
      title: 'iOS Development',
      description: 'Native iOS apps with Swift and SwiftUI',
      icon: <Smartphone className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Android Development',
      description: 'Native Android apps with Kotlin and Java',
      icon: <Code className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'React Native Development',
      description: 'Cross-platform apps with React Native',
      icon: <Layers className="w-8 h-8" strokeWidth={2} />,
      color: '#d97706'
    },
    {
      title: 'Flutter Development',
      description: 'Cross-platform apps with Flutter',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#059669'
    },
    {
      title: 'App Store Optimization',
      description: 'ASO and app store submission support',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Mobile UI/UX',
      description: 'Design and implement mobile-first interfaces',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Smartphone className="w-7 h-7" strokeWidth={2} />, 
      title: 'Native & Cross-Platform', 
      description: 'Expertise in both native and cross-platform development',
      color: '#5e2cb6'
    },
    { 
      icon: <Code className="w-7 h-7" strokeWidth={2} />, 
      title: 'Modern Frameworks', 
      description: 'Proficient in React Native, Flutter, Swift, Kotlin',
      color: '#c91a6f'
    },
    { 
      icon: <Target className="w-7 h-7" strokeWidth={2} />, 
      title: 'App Store Expertise', 
      description: 'Complete app store submission and optimization',
      color: '#d97706'
    },
    { 
      icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, 
      title: 'Performance Optimized', 
      description: 'Build fast, efficient mobile applications',
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
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'mobile' as const },
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B', category: 'mobile' as const },
    { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', color: '#FA7343', category: 'mobile' as const },
    { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', color: '#7F52FF', category: 'mobile' as const },
    { name: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', color: '#0175C2', category: 'mobile' as const },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: '#FFCA28', category: 'backend' as const },
    { name: 'Xcode', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg', color: '#147EFB', category: 'mobile' as const },
    { name: 'Android Studio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', color: '#3DDC84', category: 'mobile' as const }
  ]

  const processSteps = [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your mobile app requirements, platform preferences, and target audience',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Developer Matching',
      description: 'We match you with mobile developers skilled in iOS, Android, or cross-platform',
      icon: <Users className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Technical Interview',
      description: 'Comprehensive interviews covering mobile frameworks, app architecture, and best practices',
      icon: <MessageSquare className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Portfolio Review',
      description: 'Review developer portfolios and previous mobile app projects',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Trial Period',
      description: 'Optional trial period to assess developer skills and communication',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Onboarding & Support',
      description: 'Smooth onboarding with ongoing support and app store submission assistance',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('mobile-developers')

  return (
    <PageTemplate
      badge={{
        icon: <Smartphone className="w-4 h-4" strokeWidth={2} />,
        text: 'Hire Mobile Developers'
      }}
      title="Hire Mobile"
      hollowText="Developers"
      description="Hire experienced mobile developers who build native and cross-platform mobile applications. From iOS to Android, we provide the mobile expertise you need. Our developers are experts in React Native, Flutter, Swift, Kotlin, and modern mobile technologies."
      services={services}
      servicesTitle="Mobile"
      servicesHollowText="Services"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Hire Our"
      whyChooseHollowText="Mobile Developers"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Hire"
      getQuoteHollowText="Mobile Developers?"
      getQuoteDescription="Get in touch and let's discuss how we can help you find the perfect mobile developers."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about hiring mobile developers? Let's discuss your needs."
      processTitle="Hiring Process"
      processSubtitle="From requirement analysis to app store submission, we ensure a seamless mobile development experience"
      processSteps={processSteps}
    />
  )
}
