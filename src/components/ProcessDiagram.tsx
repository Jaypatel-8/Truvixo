'use client'

import { useEffect, useState } from 'react'
import { Target, FileText, Code, Shield, Rocket, Settings, CheckCircle } from 'lucide-react'

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
  variant?: 'card' | 'stepper' // New prop to choose between card (old) and stepper (new) design
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
  className = "",
  variant = 'stepper' // Default to new stepper design
}: ProcessDiagramProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState<number | null>(null)

  // Logo colors - using all brand colors
  const logoColors = [
    '#5e2cb6', // Blue
    '#c91a6f', // Purple/Pink
    '#fecc4d', // Yellow
    '#10b981', // Green
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

  // If variant is 'card', use the old card-based design (for case study pages)
  if (variant === 'card') {
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
      </section>
    )
  }

  // Modern Minimal Stepper Design (default)
  return (
    <section className={`py-20 bg-white relative overflow-hidden ${className}`} id="process-diagram-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
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

        {/* Horizontal Zigzag Stepper - Desktop View */}
        <div className="hidden lg:block">
          <div className="relative py-20" style={{ minHeight: '500px' }}>
            {/* Horizontal Container for all steps */}
            <div className="relative flex items-center justify-between px-4">
              {steps.map((step, index) => {
                const stepColor = logoColors[index % logoColors.length]
                const isActive = activeStep === index || activeStep === null
                const isEven = index % 2 === 0
                const isLast = index === steps.length - 1
                
                return (
                  <div 
                    key={index}
                    className="flex-1 flex flex-col items-center relative group"
                    style={{ position: 'relative', minHeight: '480px' }}
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    {/* Step Content - Alternates top/bottom with proper spacing to avoid icon overlap */}
                    <div 
                      className={`w-full max-w-[240px] text-center absolute transition-all duration-300 ${
                        isEven ? 'top-0' : 'bottom-0'
                      } ${isActive ? 'opacity-100' : 'opacity-90'}`}
                      style={{
                        [isEven ? 'top' : 'bottom']: '0px',
                        [isEven ? 'paddingBottom' : 'paddingTop']: '220px', // Significantly increased padding to prevent overlap
                        [isEven ? 'marginBottom' : 'marginTop']: '20px' // Additional margin for extra spacing
                      }}
                    >
                      <div className="mb-3">
                        <span 
                          className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                          style={{ 
                            backgroundColor: `${stepColor}15`,
                            color: stepColor,
                            border: `1px solid ${stepColor}30`
                          }}
                        >
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 
                        className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                          isActive ? 'text-gray-900' : 'text-gray-700'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p 
                        className={`text-sm leading-relaxed transition-all duration-300 ${
                          isActive ? 'text-gray-700' : 'text-gray-600'
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Step Circle with Icon - Center aligned vertically (Reduced size) */}
                    <div 
                      className="relative z-20"
                      style={{ 
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 20,
                        marginTop: '0px',
                        marginBottom: '0px'
                      }}
                    >
                      <div 
                        className={`relative rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                          isActive ? 'scale-110' : 'scale-100'
                        }`}
                        style={{ 
                          width: '64px',
                          height: '64px',
                          backgroundColor: isActive ? stepColor : 'white',
                          color: isActive ? 'white' : stepColor,
                          borderColor: stepColor,
                          boxShadow: isActive 
                            ? `0 8px 24px ${stepColor}50, 0 0 0 3px ${stepColor}15` 
                            : `0 4px 12px ${stepColor}20`
                        }}
                      >
                        <div className="w-7 h-7">
                          {step.icon}
                        </div>
                        {/* Step Number Badge (Reduced size) */}
                        <div 
                          className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-lg"
                          style={{ 
                            backgroundColor: stepColor,
                            color: 'white'
                          }}
                        >
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Dotted Horizontal Connecting Line with Arrow */}
                    {!isLast && (
                      <div 
                        className="absolute top-1/2 left-full w-full z-10 pointer-events-none"
                        style={{ 
                          transform: 'translateY(-50%)',
                          height: '2px',
                          paddingRight: '20px'
                        }}
                      >
                        {/* Horizontal Dotted Line */}
                        <svg 
                          className="absolute top-0 left-0"
                          width="calc(100% - 20px)"
                          height="2"
                          style={{ 
                            opacity: isActive ? 1 : 0.5,
                            transition: 'opacity 0.5s ease'
                          }}
                        >
                          <line 
                            x1="0" 
                            y1="1" 
                            x2="100%" 
                            y2="1"
                            stroke={isActive ? stepColor : '#d1d5db'}
                            strokeWidth="2"
                            strokeDasharray="6 4"
                          />
                        </svg>
                        {/* Arrow Head */}
                        <div 
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 transition-all duration-500"
                          style={{
                            borderTop: '7px solid transparent',
                            borderBottom: '7px solid transparent',
                            borderLeft: `10px solid ${isActive ? logoColors[(index + 1) % logoColors.length] : '#d1d5db'}`,
                            opacity: isActive ? 1 : 0.5
                          }}
                        />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Vertical Stepper - Mobile View */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const stepColor = logoColors[index % logoColors.length]
            const isActive = activeStep === index || activeStep === null
            const isLast = index === steps.length - 1
            
            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="flex items-start gap-4">
                  {/* Step Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div 
                      className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                        isActive ? 'scale-110' : 'scale-100'
                      }`}
                      style={{ 
                        backgroundColor: isActive ? stepColor : 'white',
                        color: isActive ? 'white' : stepColor,
                        borderColor: stepColor,
                        boxShadow: isActive 
                          ? `0 6px 20px ${stepColor}50, 0 0 0 3px ${stepColor}15` 
                          : `0 4px 12px ${stepColor}20`
                      }}
                    >
                      <div className="w-7 h-7">
                        {step.icon}
                      </div>
                      {/* Step Number Badge */}
                      <div 
                        className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-lg"
                        style={{ 
                          backgroundColor: stepColor,
                          color: 'white',
                          fontSize: '10px'
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-1">
                    <div className="mb-3">
                      <span 
                        className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                        style={{ 
                          backgroundColor: `${stepColor}15`,
                          color: stepColor,
                          border: `1px solid ${stepColor}30`
                        }}
                      >
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 
                      className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                        isActive ? 'text-gray-900' : 'text-gray-700'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className={`text-sm leading-relaxed transition-all duration-300 ${
                        isActive ? 'text-gray-700' : 'text-gray-600'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Dotted Vertical Connecting Line with Arrow */}
                {!isLast && (
                  <div className="absolute left-8 top-16 bottom-0 z-0">
                    <svg 
                      className="absolute top-0 left-0"
                      width="2"
                      height={isActive ? 'calc(100% + 2rem)' : '70%'}
                      style={{ 
                        opacity: isActive ? 1 : 0.5,
                        transition: 'height 0.5s ease, opacity 0.5s ease'
                      }}
                    >
                      <line 
                        x1="1" 
                        y1="0" 
                        x2="1" 
                        y2="100%"
                        stroke={isActive ? stepColor : '#d1d5db'}
                        strokeWidth="2"
                        strokeDasharray="6 4"
                      />
                    </svg>
                    {/* Arrow Head */}
                    <div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 transition-all duration-500"
                      style={{
                        borderLeft: '7px solid transparent',
                        borderRight: '7px solid transparent',
                        borderTop: `10px solid ${isActive ? logoColors[(index + 1) % logoColors.length] : '#d1d5db'}`,
                        opacity: isActive ? 1 : 0.5,
                        transform: 'translateY(100%) translateX(-50%)'
                      }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
