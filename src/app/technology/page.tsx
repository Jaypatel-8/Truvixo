'use client'

import Link from 'next/link'
import { ArrowRight, Brain, Server, Cloud, Smartphone, Database, Wrench } from 'lucide-react'

export default function TechnologyPage() {
  const technologies = [
    {
      title: 'Frontend',
      description: 'React, Next.js, Vue.js, Angular',
      href: '/technology/frontend',
      icon: <Brain className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Backend',
      description: 'Node.js, Python, Django, FastAPI',
      href: '/technology/backend',
      icon: <Server className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'AI/ML',
      description: 'TensorFlow, PyTorch, Machine Learning',
      href: '/technology/ai-ml',
      icon: <Brain className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    },
    {
      title: 'Cloud & DevOps',
      description: 'AWS, Azure, Docker, Kubernetes',
      href: '/technology/cloud-devops',
      icon: <Cloud className="w-8 h-8" strokeWidth={2} />,
      color: '#10b981'
    },
    {
      title: 'Mobile',
      description: 'React Native, Flutter, iOS, Android',
      href: '/technology/mobile',
      icon: <Smartphone className="w-8 h-8" strokeWidth={2} />,
      color: '#5e2cb6'
    },
    {
      title: 'Database',
      description: 'MongoDB, PostgreSQL, MySQL',
      href: '/technology/database',
      icon: <Database className="w-8 h-8" strokeWidth={2} />,
      color: '#c91a6f'
    },
    {
      title: 'Tools & Integrations',
      description: 'Development tools and third-party integrations',
      href: '/technology/tools-integrations',
      icon: <Wrench className="w-8 h-8" strokeWidth={2} />,
      color: '#fecc4d'
    }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      <section className="relative min-h-[60vh] bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Technologies We{' '}
            <span className="hollow-text-brand">Use</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-gray-700 mb-4 leading-tight">
            Modern Tech Stack for Modern Solutions
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-12 max-w-4xl mx-auto font-light">
            Explore our comprehensive technology expertise across frontend, backend, AI/ML, cloud, mobile, and more.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Link
                key={index}
                href={tech.href}
                className="group bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center border-2" style={{ borderColor: tech.color, backgroundColor: tech.color + '10' }}>
                    <div style={{ color: tech.color }}>
                      {tech.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 flex-1 group-hover:text-[#5e2cb6] transition-colors">
                    {tech.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {tech.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: tech.color }}>
                  <span>Explore</span>
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
