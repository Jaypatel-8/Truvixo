'use client'

import { useEffect, useState } from 'react'
import { Target, FileText, Code, Shield, Rocket, Settings, ArrowRight, CheckCircle } from 'lucide-react'

interface ProcessStep {
  title: string
  description: string
  icon: React.ReactNode
}

interface ProcessDiagramProps {
  title?: string
  subtitle?: string
  steps?: ProcessStep[]
  className?: string
}

const defaultSteps: ProcessStep[] = [
  {
    title: 'Discovery & Roadmap',
    description: 'We understand your business goals and create a strategic roadmap',
    icon: <Target className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: 'Design & Prototyping',
    description: 'Create intuitive designs and interactive prototypes',
    icon: <FileText className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: 'Agile Sprints & Implementation',
    description: 'Build your solution using agile methodology',
    icon: <Code className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: 'QA & Security Testing',
    description: 'Rigorous testing ensures quality and security',
    icon: <Shield className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: 'Production Launch & Monitoring',
    description: 'Deploy to production with continuous monitoring',
    icon: <Rocket className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: 'Ongoing Maintenance & Iteration',
    description: 'Continuous improvement and support',
    icon: <Settings className="w-6 h-6" strokeWidth={2} />
  }
]

export default function ProcessDiagram({ 
  title = "Our Process",
  subtitle = "A proven methodology that delivers results",
  steps = defaultSteps,
  className = ""
}: ProcessDiagramProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Logo colors - using all brand colors
  const logoColors = [
    '#5e2cb6', // Blue
    '#c91a6f', // Purple/Pink
    '#d97706', // Yellow
    '#059669', // Green
    '#d42628', // Red
    '#f59e0b'  // Orange
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('process-diagram-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])


  return (
    <section className={`py-16 bg-white relative overflow-hidden ${className}`} id="process-diagram-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            {title === "Our Process" ? (
              <>
                Our <span className="hollow-text-brand">Process</span>
              </>
            ) : title && title.includes(' ') ? (
              <>
                {title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="hollow-text-brand">{title.split(' ').slice(-1)[0]}</span>
              </>
            ) : title ? (
              <span className="hollow-text-brand">{title}</span>
            ) : (
              <>
                Our <span className="hollow-text-brand">Process</span>
              </>
            )}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Process Diagram - Desktop View */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#5e2cb6] via-[#c91a6f] via-[#d97706] to-[#059669] rounded-full z-0"></div>
            
            {/* Process Steps Container */}
            <div className="relative flex justify-between items-start pt-8 pb-16">
              {steps.map((step, index) => {
                const stepColor = logoColors[index % logoColors.length]
                
                return (
                  <div key={index} className="flex-1 flex flex-col items-center relative px-2">
                    {/* Process Node on Timeline */}
                    <div className="relative z-20 mb-6">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300 border-4 border-white"
                        style={{ 
                          backgroundColor: stepColor,
                          color: 'white'
                        }}
                      >
                        {step.icon}
                      </div>
                      <div 
                        className="mt-3 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mx-auto border-3 border-white shadow-lg"
                        style={{ 
                          backgroundColor: stepColor,
                          color: 'white',
                          borderWidth: '3px'
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Step Card */}
                    <div className="w-full max-w-[200px]">
                      <div className="bg-white rounded-xl p-5 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group min-h-[240px] flex flex-col">
                        <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ backgroundColor: stepColor }}></div>
                        <div className="relative z-10 flex flex-col h-full">
                          <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-[#5e2cb6] transition-colors line-clamp-2 min-h-[40px]">
                            {step.title}
                          </h3>
                          <p className="text-xs text-gray-600 leading-relaxed flex-grow line-clamp-5">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Connecting Arrow */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-24 left-full transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="w-6 h-6 text-gray-600" strokeWidth={2.5} aria-hidden="true" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Process Diagram - Mobile/Tablet View */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const stepColor = logoColors[index % logoColors.length]
            const stepColors = logoColors
            
            return (
              <div
                key={index}
                className="relative flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                style={{
                  borderColor: stepColor + '40'
                }}
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-5 top-16 bottom-0 w-0.5 bg-gradient-to-b" style={{ background: `linear-gradient(to bottom, ${stepColor}, ${stepColors[(index + 1) % stepColors.length]})` }}></div>
                )}
                
                {/* Step Node */}
                <div className="flex-shrink-0 relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white"
                    style={{ 
                      backgroundColor: stepColor,
                      color: 'white'
                    }}
                  >
                    {step.icon}
                  </div>
                  <div 
                    className="mt-3 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-3 border-white shadow-lg"
                    style={{ 
                      backgroundColor: stepColor,
                      color: 'white',
                      borderWidth: '3px'
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}



