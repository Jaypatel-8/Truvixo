'use client'

import { useEffect } from 'react'
import { 
  Code, Globe, Smartphone, Brain, Cloud, Settings, Database, 
  Palette, TestTube, Cpu, FileCode, Layers, Zap,
  Server, Coffee, Rocket, Box, Sparkles, Shield,
  BarChart, GitBranch, Container, Wrench, Eye, Radio, Circle
} from 'lucide-react'
import dynamic from 'next/dynamic'

const ProcessDiagram = dynamic(() => import('@/components/ProcessDiagram'), {
  ssr: false,
  loading: () => null,
})

export default function Technology() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale')
    scrollElements.forEach((el) => observer.observe(el))

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const technologyCategories = [
    {
      name: 'Frontend Technologies',
      icon: <Code className="w-6 h-6" />,
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
      items: [
        { name: 'React.js', icon: <Code className="w-5 h-5" /> },
        { name: 'Next.js', icon: <FileCode className="w-5 h-5" /> },
        { name: 'Vue.js', icon: <Layers className="w-5 h-5" /> },
        { name: 'Angular', icon: <Zap className="w-5 h-5" /> },
        { name: 'HTML5', icon: <FileCode className="w-5 h-5" /> },
        { name: 'CSS3', icon: <Palette className="w-5 h-5" /> },
        { name: 'JavaScript', icon: <Code className="w-5 h-5" /> },
        { name: 'TypeScript', icon: <FileCode className="w-5 h-5" /> },
        { name: 'Tailwind CSS', icon: <Palette className="w-5 h-5" /> },
        { name: 'Bootstrap', icon: <Layers className="w-5 h-5" /> }
      ]
    },
    {
      name: 'Backend Technologies',
      icon: <Server className="w-6 h-6" />,
      color: 'bg-pink-100',
      textColor: 'text-pink-600',
      items: [
        { name: 'Node.js', icon: <Coffee className="w-5 h-5" /> },
        { name: 'Express.js', icon: <Server className="w-5 h-5" /> },
        { name: 'Python', icon: <Code className="w-5 h-5" /> },
        { name: 'Django', icon: <Rocket className="w-5 h-5" /> },
        { name: 'FastAPI', icon: <Zap className="w-5 h-5" /> },
        { name: 'Java', icon: <Coffee className="w-5 h-5" /> },
        { name: 'Spring Boot', icon: <Box className="w-5 h-5" /> },
        { name: 'PHP', icon: <Code className="w-5 h-5" /> },
        { name: 'Laravel', icon: <Sparkles className="w-5 h-5" /> },
        { name: '.NET Core', icon: <Shield className="w-5 h-5" /> }
      ]
    },
    {
      name: 'Mobile App Technologies',
      icon: <Smartphone className="w-6 h-6" />,
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      items: [
        { name: 'Flutter', icon: <Smartphone className="w-5 h-5" /> },
        { name: 'React Native', icon: <Code className="w-5 h-5" /> },
        { name: 'Swift', icon: <Zap className="w-5 h-5" /> },
        { name: 'Kotlin', icon: <Code className="w-5 h-5" /> },
        { name: 'Java (Android)', icon: <Coffee className="w-5 h-5" /> },
        { name: 'FlutterFlow', icon: <Layers className="w-5 h-5" /> }
      ]
    },
    {
      name: 'AI / ML Technologies',
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
      items: [
        { name: 'TensorFlow', icon: <Brain className="w-5 h-5" /> },
        { name: 'PyTorch', icon: <Sparkles className="w-5 h-5" /> },
        { name: 'Scikit-learn', icon: <BarChart className="w-5 h-5" /> },
        { name: 'OpenAI', icon: <Brain className="w-5 h-5" /> },
        { name: 'Google Gemini', icon: <Zap className="w-5 h-5" /> },
        { name: 'Anthropic Claude', icon: <Brain className="w-5 h-5" /> },
        { name: 'LangChain', icon: <GitBranch className="w-5 h-5" /> },
        { name: 'LlamaIndex', icon: <Database className="w-5 h-5" /> },
        { name: 'HuggingFace', icon: <Brain className="w-5 h-5" /> },
        { name: 'Pandas', icon: <BarChart className="w-5 h-5" /> },
        { name: 'NumPy', icon: <BarChart className="w-5 h-5" /> }
      ]
    },
    {
      name: 'Cloud Platforms',
      icon: <Cloud className="w-6 h-6" />,
      color: 'bg-green-100',
      textColor: 'text-green-600',
      items: [
        { name: 'AWS', icon: <Cloud className="w-5 h-5" /> },
        { name: 'Google Cloud (GCP)', icon: <Cloud className="w-5 h-5" /> },
        { name: 'Microsoft Azure', icon: <Cloud className="w-5 h-5" /> },
        { name: 'DigitalOcean', icon: <Cloud className="w-5 h-5" /> },
        { name: 'Firebase', icon: <Sparkles className="w-5 h-5" /> },
        { name: 'Supabase', icon: <Database className="w-5 h-5" /> }
      ]
    },
    {
      name: 'DevOps & Containerization',
      icon: <Settings className="w-6 h-6" />,
      color: 'bg-red-100',
      textColor: 'text-red-600',
      items: [
        { name: 'Docker', icon: <Container className="w-5 h-5" /> },
        { name: 'Kubernetes', icon: <Container className="w-5 h-5" /> },
        { name: 'GitHub Actions', icon: <GitBranch className="w-5 h-5" /> },
        { name: 'GitLab CI/CD', icon: <GitBranch className="w-5 h-5" /> },
        { name: 'Jenkins', icon: <Settings className="w-5 h-5" /> },
        { name: 'Terraform', icon: <Wrench className="w-5 h-5" /> },
        { name: 'Nginx', icon: <Server className="w-5 h-5" /> }
      ]
    },
    {
      name: 'Databases & Storage',
      icon: <Database className="w-6 h-6" />,
      color: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      items: [
        { name: 'MongoDB', icon: <Database className="w-5 h-5" /> },
        { name: 'PostgreSQL', icon: <Database className="w-5 h-5" /> },
        { name: 'MySQL', icon: <Database className="w-5 h-5" /> },
        { name: 'Redis', icon: <Database className="w-5 h-5" /> },
        { name: 'DynamoDB', icon: <Database className="w-5 h-5" /> },
        { name: 'SQLite', icon: <Database className="w-5 h-5" /> }
      ]
    },
    {
      name: 'UI / UX & Prototyping',
      icon: <Palette className="w-6 h-6" />,
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
      items: [
        { name: 'Figma', icon: <Palette className="w-5 h-5" /> },
        { name: 'Adobe XD', icon: <Eye className="w-5 h-5" /> },
        { name: 'Sketch', icon: <Palette className="w-5 h-5" /> },
        { name: 'InVision', icon: <Eye className="w-5 h-5" /> },
        { name: 'Illustrator', icon: <Palette className="w-5 h-5" /> },
        { name: 'Photoshop', icon: <Palette className="w-5 h-5" /> }
      ]
    },
    {
      name: 'Testing & QA Tools',
      icon: <TestTube className="w-6 h-6" />,
      color: 'bg-orange-100',
      textColor: 'text-orange-600',
      items: [
        { name: 'Jest', icon: <TestTube className="w-5 h-5" /> },
        { name: 'Cypress', icon: <TestTube className="w-5 h-5" /> },
        { name: 'Selenium', icon: <TestTube className="w-5 h-5" /> },
        { name: 'Mocha / Chai', icon: <TestTube className="w-5 h-5" /> },
        { name: 'Postman', icon: <Wrench className="w-5 h-5" /> },
        { name: 'JMeter', icon: <BarChart className="w-5 h-5" /> }
      ]
    },
    {
      name: 'IoT & Embedded',
      icon: <Cpu className="w-6 h-6" />,
      color: 'bg-teal-100',
      textColor: 'text-teal-600',
      items: [
        { name: 'Raspberry Pi', icon: <Cpu className="w-5 h-5" /> },
        { name: 'Arduino', icon: <Cpu className="w-5 h-5" /> },
        { name: 'MQTT', icon: <Radio className="w-5 h-5" /> },
        { name: 'BLE', icon: <Radio className="w-5 h-5" /> },
        { name: 'IoT Cloud Platforms', icon: <Cloud className="w-5 h-5" /> }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Our Technology{' '}
              <span className="hollow-text-teal">
                Stack
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-light">
              Cutting-edge tools and frameworks we use to build innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate-scale border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <div className={category.textColor}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className={`${category.textColor} opacity-70`}>
                        {item.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build with{' '}
              <span className="hollow-text-teal">
                Modern Tech
              </span>
              ?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can leverage these technologies for your project
            </p>
            <a
              href="/contact"
              className="bg-white text-purple-600 font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Process Diagram */}
      <ProcessDiagram 
        title="Our Process"
        subtitle="How we leverage technology for your success"
      />
    </main>
  )
}




