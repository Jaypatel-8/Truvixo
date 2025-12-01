'use client'

import { Users, Target, Zap, TrendingUp, Calendar, CheckCircle, Building2, Heart, ShoppingCart, Truck, Home, MessageSquare, Rocket, FileText } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import { getFAQsForPage } from '@/lib/pageData'

export default function HireProjectManagers() {
  const services = [
    {
      title: 'Agile Project Management',
      description: 'Manage projects using Agile, Scrum, and Kanban methodologies',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Team Coordination',
      description: 'Coordinate distributed and remote teams effectively',
      icon: <Users className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Stakeholder Management',
      description: 'Manage client communication and stakeholder expectations',
      icon: <CheckCircle className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Resource Planning',
      description: 'Plan and allocate resources efficiently',
      icon: <Calendar className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Risk Management',
      description: 'Identify and mitigate project risks',
      icon: <Zap className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Delivery Management',
      description: 'Ensure on-time, on-budget project delivery',
      icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  const whyChooseUs = [
    { 
      icon: <Target className="w-7 h-7" strokeWidth={2} />, 
      title: 'Agile Expertise', 
      description: 'Experienced in Agile, Scrum, Kanban, and other methodologies',
      color: '#5e2cb6'
    },
    { 
      icon: <Users className="w-7 h-7" strokeWidth={2} />, 
      title: 'Team Leadership', 
      description: 'Proven ability to lead and coordinate distributed teams',
      color: '#c91a6f'
    },
    { 
      icon: <CheckCircle className="w-7 h-7" strokeWidth={2} />, 
      title: 'Stakeholder Management', 
      description: 'Excellent communication and stakeholder management skills',
      color: '#fecc4d'
    },
    { 
      icon: <TrendingUp className="w-7 h-7" strokeWidth={2} />, 
      title: 'On-Time Delivery', 
      description: 'Track record of delivering projects on time and on budget',
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
    { name: 'Jira', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', color: '#0052CC', category: 'backend' as const },
    { name: 'Confluence', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg', color: '#172B4D', category: 'backend' as const },
    { name: 'Trello', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg', color: '#0079BF', category: 'backend' as const },
    { name: 'Asana', logo: 'https://asana.com/favicon.ico', color: '#F06A6A', category: 'backend' as const },
    { name: 'Monday.com', logo: 'https://monday.com/favicon.ico', color: '#FF0080', category: 'backend' as const },
    { name: 'Slack', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg', color: '#4A154B', category: 'backend' as const }
  ]

  const processSteps = [
    {
      title: 'Requirement Analysis',
      description: 'We analyze your project management needs, team size, and methodology preferences',
      icon: <Target className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Manager Matching',
      description: 'We match you with project managers experienced in your industry and project type',
      icon: <Users className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Interview & Assessment',
      description: 'Comprehensive interviews covering project management methodologies and leadership skills',
      icon: <FileText className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Reference Check',
      description: 'Verify manager track record and previous project success stories',
      icon: <MessageSquare className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Trial Period',
      description: 'Optional trial period to evaluate manager performance on real projects',
      icon: <CheckCircle className="w-6 h-6" strokeWidth={2} />
    },
    {
      title: 'Team Integration',
      description: 'Seamless integration with your development team and stakeholders',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />
    }
  ]

  const faqs = getFAQsForPage('project-managers')

  return (
    <PageTemplate
      badge={{
        icon: <Users className="w-4 h-4" strokeWidth={2} />,
        text: 'Hire Project Managers'
      }}
      title="Hire Project"
      hollowText="Managers"
      description="Hire experienced project managers who ensure successful project delivery. From Agile to stakeholder management, we provide the project management expertise you need. Our managers are experts in Agile, Scrum, Kanban, and modern project management tools."
      services={services}
      servicesTitle="Project Management"
      servicesHollowText="Services"
      whyChoose={whyChooseUs}
      whyChooseTitle="Why Hire Our"
      whyChooseHollowText="Project Managers"
      industries={industries}
      technologies={technologies}
      getQuoteTitle="Ready to Hire"
      getQuoteHollowText="Project Managers?"
      getQuoteDescription="Get in touch and let's discuss how we can help you find the perfect project managers."
      faqs={faqs}
      contactTitle="Get in Touch"
      contactDescription="Have questions about hiring project managers? Let's discuss your needs."
      processTitle="Hiring Process"
      processSubtitle="From requirement analysis to team integration, we ensure a seamless project management experience"
      processSteps={processSteps}
    />
  )
}
