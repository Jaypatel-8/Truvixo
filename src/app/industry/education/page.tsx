'use client'

import { GraduationCap, Book, Users, Video, Target, TrendingUp, Building2, Heart, ShoppingCart, Truck, Home, Code, Rocket, CheckCircle, FileText, Shield } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function EducationDevelopment() {
  const services = [
    {
      title: 'Learning Management Systems',
      description: 'Comprehensive LMS platforms with course management',
      icon: <Book className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'E-Learning Platforms',
      description: 'Interactive e-learning and online course platforms',
      icon: <Video className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Student Management',
      description: 'Complete student information and management systems',
      icon: <Users className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Assessment Tools',
      description: 'Online testing, quizzes, and assessment platforms',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Virtual Classrooms',
      description: 'Live virtual classroom and video conferencing',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Educational Analytics',
      description: 'Student performance analytics and reporting',
      icon: <GraduationCap className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <GraduationCap className="w-7 h-7" strokeWidth={2} />, 
      title: 'Education Expertise', 
      description: 'Deep understanding of educational workflows and requirements',
      color: '#5e2cb6'
    },
    { 
      icon: <Book className="w-7 h-7" strokeWidth={2} />, 
      title: 'LMS Development', 
      description: 'Build comprehensive learning management systems',
      color: '#c91a6f'
    },
    { 
      icon: <Video className="w-7 h-7" strokeWidth={2} />, 
      title: 'E-Learning Solutions', 
      description: 'Interactive e-learning platforms with SCORM support',
      color: '#fecc4d'
    },
    { 
      icon: <Users className="w-7 h-7" strokeWidth={2} />, 
      title: 'Student-Centric', 
      description: 'Solutions designed to enhance student learning',
      color: '#10b981'
    }
  ]

  const industries = [
    { name: 'Schools', icon: <GraduationCap className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Universities', icon: <Book className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' },
    { name: 'Online Learning', icon: <Video className="w-7 h-7" strokeWidth={2} />, color: '#fecc4d' },
    { name: 'Corporate Training', icon: <Users className="w-7 h-7" strokeWidth={2} />, color: '#10b981' },
    { name: 'Tutoring', icon: <Target className="w-7 h-7" strokeWidth={2} />, color: '#5e2cb6' },
    { name: 'Certification', icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, color: '#c91a6f' }
  ]

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'frontend' as const },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'backend' as const },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' as const },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'database' as const },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900', category: 'cloud' as const },
    { name: 'SCORM', logo: 'https://scorm.com/wp-content/uploads/2018/10/scorm-logo.png', color: '#4A90E2', category: 'backend' as const },
    { name: 'Zoom API', logo: 'https://zoom.us/favicon.ico', color: '#2D8CFF', category: 'backend' as const },
    { name: 'WebRTC', logo: 'https://webrtc.org/favicon.ico', color: '#333333', category: 'backend' as const },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'devops' as const }
  ]

  const processSteps = [
    {
      title: 'Discovery & Requirements',
      description: 'We analyze your education needs, learning objectives, and user requirements',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Learning Design',
      description: 'Design learning experiences, course structure, and assessment strategies',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Platform Development',
      description: 'Build LMS with course management, student tracking, and assessment tools',
      icon: <Code className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Content Integration',
      description: 'Integrate SCORM content, video streaming, and interactive learning materials',
      icon: <Book className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Testing & Quality',
      description: 'Rigorous testing of learning paths, assessments, and user experience',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Launch & Training',
      description: 'Deploy platform with user training, documentation, and ongoing support',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('education')

  return (
    <PageTemplate
      badge={{
        icon: <GraduationCap className="w-4 h-4" strokeWidth={2} />,
        text: 'Education Solutions'
      }}
      title="Education &"
      hollowText="E-Learning"
      description="We build comprehensive education and e-learning solutions that enhance learning experiences. From LMS platforms to virtual classrooms, we deliver education technology that makes a difference. Our solutions are built with student engagement, learning analytics, and scalability in mind."
      services={services}
      servicesTitle="Education"
      servicesHollowText="Solutions"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Choose"
      whyChooseHollowText="Education Development"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Build"
      getQuoteHollowText="Education Solutions?"
      getQuoteDescription="Get in touch and let's discuss how we can help transform education delivery."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about education development? Let's discuss your project."
      processTitle="Education Development Process"
      processSubtitle="From discovery to launch, we ensure engaging learning experiences and educational excellence at every step"
      processSteps={processSteps}
    />
  )
}
