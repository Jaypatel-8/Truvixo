'use client'

import Link from 'next/link'
import { ArrowRight, Code, Brain, Smartphone, Server, Users, Target, CheckCircle, Palette, Wrench } from 'lucide-react'

export default function HirePage() {
  const hireOptions = [
    {
      title: 'Frontend Developers',
      description: 'React, Next.js, Vue.js experts',
      href: '/hire/frontend-developers',
      icon: <Code className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Backend Developers',
      description: 'Node.js, Python, Django specialists',
      href: '/hire/backend-developers',
      icon: <Server className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Full-Stack Developers',
      description: 'End-to-end development experts',
      href: '/hire/full-stack-developers',
      icon: <Code className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'AI/ML Engineers',
      description: 'Machine learning and AI specialists',
      href: '/hire/ai-ml-engineers',
      icon: <Brain className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Mobile Developers',
      description: 'React Native, Flutter experts',
      href: '/hire/mobile-developers',
      icon: <Smartphone className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'DevOps Engineers',
      description: 'Cloud infrastructure specialists',
      href: '/hire/devops-engineers',
      icon: <Server className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'UI/UX Designers',
      description: 'User experience and design experts',
      href: '/hire/ui-ux-designers',
      icon: <Palette className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'QA Engineers',
      description: 'Quality assurance specialists',
      href: '/hire/qa-engineers',
      icon: <CheckCircle className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Project Managers',
      description: 'Agile and project management experts',
      href: '/hire/project-managers',
      icon: <Target className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Dedicated Teams',
      description: 'Complete development teams',
      href: '/hire/dedicated-teams',
      icon: <Users className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      <section className="relative min-h-[60vh] bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Hire Expert <span className="hollow-text-brand">Developers</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-gray-700 mb-4 leading-tight">
            Connect with Top-Tier Talent
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-12 max-w-4xl mx-auto font-light">
            Find the perfect developers and designers for your project. We connect you with skilled professionals worldwide.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hireOptions.map((option, index) => (
              <Link
                key={index}
                href={option.href}
                className="group bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center border-2" style={{ borderColor: option.color, backgroundColor: option.color + '10' }}>
                    <div style={{ color: option.color }}>
                      {option.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 flex-1 group-hover:text-[#5e2cb6] transition-colors">
                    {option.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {option.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: option.color }}>
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
