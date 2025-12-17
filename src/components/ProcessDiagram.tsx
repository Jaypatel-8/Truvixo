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
  const [activeStep, setActiveStep] = useState(0)
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isVisible, steps.length])

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
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0">
              <div 
                className="absolute top-0 left-0 h-full transition-all duration-1000 ease-in-out"
                style={{ 
                  width: isVisible ? `${((activeStep + 1) / steps.length) * 100}%` : '0%',
                  background: `linear-gradient(to right, ${logoColors.slice(0, steps.length).join(', ')})`
                }}
              ></div>
            </div>

            {/* Process Steps */}
            <div className="relative flex justify-between items-center">
              {steps.map((step, index) => {
                const isActive = index <= activeStep
                const isCurrent = index === activeStep
                const stepColor = logoColors[index % logoColors.length]
                
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1 relative z-10"
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Step Circle */}
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-500 transform border-2 ${
                        isActive
                          ? 'scale-110 shadow-lg'
                          : 'scale-100 shadow-md bg-white'
                      } ${isCurrent ? 'ring-4 ring-offset-2' : ''}`}
                      style={{
                        backgroundColor: isActive ? stepColor : 'white',
                        borderColor: stepColor,
                        animationDelay: `${index * 0.2}s`,
                        animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                      }}
                    >
                      <div 
                        className={`transition-all duration-500 ${isActive ? 'scale-110' : ''}`}
                        style={{ color: isActive ? 'white' : stepColor }}
                      >
                        {step.icon}
                      </div>
                    </div>

                    {/* Step Number */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 font-bold text-sm transition-all duration-500 border-2 ${
                        isActive ? 'scale-110' : ''
                      }`}
                      style={{
                        backgroundColor: isActive ? stepColor : 'white',
                        borderColor: stepColor,
                        color: isActive ? 'white' : stepColor
                      }}
                    >
                      {index + 1}
                    </div>

                    {/* Step Content */}
                    <div className="text-center max-w-[180px]">
                      <h3
                        className={`font-bold mb-2 transition-all duration-500 ${
                          isActive ? 'text-gray-900 text-lg' : 'text-gray-500 text-base'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm transition-all duration-500 ${
                          isActive ? 'text-gray-600' : 'text-gray-400'
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Active Indicator */}
                    {isCurrent && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div 
                          className="w-3 h-3 rounded-full animate-ping"
                          style={{ backgroundColor: stepColor }}
                        ></div>
                        <div 
                          className="absolute top-0 left-0 w-3 h-3 rounded-full"
                          style={{ backgroundColor: stepColor }}
                        ></div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Process Diagram - Mobile/Tablet View */}
        <div className="lg:hidden">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isActive = index <= activeStep
              const isCurrent = index === activeStep
              const stepColor = logoColors[index % logoColors.length]
              
              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-4 p-6 rounded-xl transition-all duration-500 transform border-2 ${
                    isActive
                      ? 'bg-white shadow-xl scale-105'
                      : 'bg-white/50 shadow-md'
                  } ${isCurrent ? 'ring-2' : ''}`}
                  style={{
                    borderColor: isActive ? stepColor : '#e5e7eb'
                  }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 border-2`}
                      style={{
                        backgroundColor: isActive ? stepColor : 'white',
                        borderColor: stepColor
                      }}
                    >
                      <div style={{ color: isActive ? 'white' : stepColor }}>
                        {step.icon}
                      </div>
                    </div>
                    <div
                      className={`mt-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-500 border-2`}
                      style={{
                        backgroundColor: isActive ? stepColor : 'white',
                        borderColor: stepColor,
                        color: isActive ? 'white' : stepColor
                      }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3
                        className={`font-bold transition-all duration-500 ${
                          isActive ? 'text-gray-900 text-lg' : 'text-gray-600'
                        }`}
                      >
                        {step.title}
                      </h3>
                      {isActive && (
                        <CheckCircle className="w-5 h-5 animate-scale-in" style={{ color: stepColor }} strokeWidth={2} />
                      )}
                    </div>
                    <p
                      className={`text-sm transition-all duration-500 ${
                        isActive ? 'text-gray-600' : 'text-gray-400'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <ArrowRight className="w-6 h-6 rotate-90" style={{ color: stepColor + '60' }} strokeWidth={2} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
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



