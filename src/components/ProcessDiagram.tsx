'use client'

import { ReactNode } from 'react'
import { ArrowRight, Search, Palette, Code, TestTube, Rocket, Settings } from 'lucide-react'

interface ProcessStep {
  title: string
  description: string
  icon?: ReactNode
}

interface ProcessDiagramProps {
  title?: string
  subtitle?: string
  steps?: ProcessStep[]
  className?: string
}

const defaultSteps: ProcessStep[] = [
  {
    title: 'Discovery & Planning',
    description: 'Understand your business needs, goals, and requirements through comprehensive analysis',
  },
  {
    title: 'Design & Architecture',
    description: 'Create scalable architecture and intuitive user experience designs',
  },
  {
    title: 'Development & Integration',
    description: 'Build robust solutions using modern technologies and best practices',
  },
  {
    title: 'Testing & Quality Assurance',
    description: 'Comprehensive testing to ensure reliability, performance, and security',
  },
  {
    title: 'Deployment & Launch',
    description: 'Seamless deployment to production with zero-downtime strategies',
  },
  {
    title: 'Support & Maintenance',
    description: 'Ongoing support, updates, and optimization for long-term success',
  },
]

// Default icons for each step
const defaultIcons = [
  Search,   // Discovery & Planning
  Palette,  // Design & Architecture
  Code,     // Development & Integration
  TestTube, // Testing & Quality Assurance
  Rocket,   // Deployment & Launch
  Settings, // Support & Maintenance
]

// Minimal color palette
const stepColors = [
  { primary: '#5e2cb6', light: '#ede9fe' }, // Purple
  { primary: '#c91a6f', light: '#fce7f3' }, // Pink
  { primary: '#f59e0b', light: '#fffbeb' }, // Yellow
  { primary: '#10b981', light: '#d1fae5' }, // Green
  { primary: '#3b82f6', light: '#dbeafe' }, // Blue
  { primary: '#ef4444', light: '#fee2e2' }, // Red
]

export default function ProcessDiagram({
  title = 'Our Process',
  subtitle = 'Our proven software development methodology delivers exceptional results',
  steps = defaultSteps,
  className = '',
}: ProcessDiagramProps) {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
                {title.split(' ').map((word, index, array) => {
                  const isLast = index === array.length - 1
                  if (word.toLowerCase() === 'process' || word.toLowerCase() === 'development') {
                    return (
                      <span key={index}>
                        {' '}
                        <span className="hollow-text-brand">{word}</span>
                        {!isLast && ' '}
                      </span>
                    )
                  }
                  return (
                    <span key={index}>
                      {word}
                      {!isLast && ' '}
                    </span>
                  )
                })}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Horizontal Process Flow */}
        <div className="relative">
          {/* Desktop: Horizontal Layout */}
          <div className="hidden lg:flex items-start justify-between">
            {steps.map((step, index) => {
              const colors = stepColors[index % stepColors.length]
              const IconComponent = step.icon ? null : defaultIcons[index % defaultIcons.length]
              
              return (
                <div key={index} className="flex-1 flex flex-col items-center relative">
                  {/* Step Content */}
                  <div className="w-full text-center">
                    {/* Icon in Round Container with Step Number */}
                    <div className="mb-6 flex items-center justify-center">
                      {step.icon ? (
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center relative"
                          style={{ 
                            backgroundColor: colors.light,
                            color: colors.primary
                          }}
                        >
                          {step.icon}
                          {/* Step Number in Upper Corner */}
                          <div 
                            className="absolute -top-1 -left-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md"
                            style={{ backgroundColor: colors.primary }}
                          >
                            {index + 1}
                          </div>
                        </div>
                      ) : IconComponent ? (
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center relative"
                          style={{ 
                            backgroundColor: colors.light,
                            color: colors.primary
                          }}
                        >
                          <IconComponent 
                            className="w-7 h-7" 
                            strokeWidth={2}
                          />
                          {/* Step Number in Upper Corner */}
                          <div 
                            className="absolute -top-1 -left-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md"
                            style={{ backgroundColor: colors.primary }}
                          >
                            {index + 1}
                          </div>
                        </div>
                      ) : null}
                    </div>

                    {/* Title - Minimal */}
                    <h3 className="text-lg font-bold mb-3 text-gray-900">
                      {step.title}
                    </h3>

                    {/* Description - Minimal */}
                    <p className="text-sm text-gray-600 leading-relaxed px-2">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Connector - Minimal */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 right-0 transform translate-x-1/2 flex items-center">
                      <ArrowRight 
                        className="w-5 h-5" 
                        style={{ color: colors.primary }}
                        strokeWidth={2}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Mobile/Tablet: Vertical Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const colors = stepColors[index % stepColors.length]
              const IconComponent = step.icon ? null : defaultIcons[index % defaultIcons.length]
              
              return (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon in Round Container with Step Number */}
                  <div className="flex-shrink-0 relative">
                    {step.icon ? (
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center relative"
                        style={{ 
                          backgroundColor: colors.light,
                          color: colors.primary
                        }}
                      >
                        {step.icon}
                        {/* Step Number in Upper Corner */}
                        <div 
                          className="absolute -top-1 -left-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md"
                          style={{ backgroundColor: colors.primary }}
                        >
                          {index + 1}
                        </div>
                      </div>
                    ) : IconComponent ? (
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center relative"
                        style={{ 
                          backgroundColor: colors.light,
                          color: colors.primary
                        }}
                      >
                        <IconComponent 
                          className="w-6 h-6" 
                          strokeWidth={2}
                        />
                        {/* Step Number in Upper Corner */}
                        <div 
                          className="absolute -top-1 -left-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md"
                          style={{ backgroundColor: colors.primary }}
                        >
                          {index + 1}
                        </div>
                      </div>
                    ) : null}
                    {/* Connecting Line - Minimal */}
                    {index < steps.length - 1 && (
                      <div 
                        className="absolute left-1/2 top-full w-0.5 h-6 transform -translate-x-1/2 mt-2"
                        style={{ backgroundColor: colors.primary }}
                      ></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
