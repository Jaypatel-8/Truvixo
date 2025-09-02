'use client'

import { useRef, useState, useCallback } from 'react'
import { ArrowRight, Target, BarChart3, Palette, Globe, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      number: '01.',
      title: 'Brand Solutions',
      subtitle: 'Customised Partner Solutions',
      description: 'We provide customised solutions to meet partner needs. We understand the objectives and requirements to develop strategies & create holistic consumer experiences.',
      features: ['Brand Strategy', 'Visual Identity', 'Consumer Experience', 'Market Positioning'],
      icon: <Target className="w-12 h-12" />,
      color: 'blue'
    },
    {
      number: '02.',
      title: 'Tech Solutions',
      subtitle: 'People, Processes & Technology',
      description: 'We optimise People, Processes and Technology. Map processes, align to objectives and maximise team efficiency with tech to improve the customer experience.',
      features: ['Process Mapping', 'Team Efficiency', 'Tech Integration', 'Customer Experience'],
      icon: <BarChart3 className="w-12 h-12" />,
      color: 'green'
    },
    {
      number: '03.',
      title: 'Media Solutions',
      subtitle: 'Strategic Ad Placement',
      description: 'Drive results through strategic, audience-aligned ad placement across channels using the right messaging at the optimal time.',
      features: ['Audience Targeting', 'Channel Strategy', 'Message Optimization', 'Performance Analytics'],
      icon: <Palette className="w-12 h-12" />,
      color: 'purple'
    },
    {
      number: '04.',
      title: 'Research Solutions',
      subtitle: 'Qualitative & Quantitative',
      description: 'We provide specialised market research for businesses using qualitative and quantitative methods. We integrate market research with our services.',
      features: ['Market Research', 'Data Analysis', 'Consumer Insights', 'Strategy Integration'],
      icon: <Globe className="w-12 h-12" />,
      color: 'orange'
    }
  ]

  const scrollToNext = useCallback(() => {
    if (containerRef.current) {
      const nextIndex = (activeIndex + 1) % services.length
      setActiveIndex(nextIndex)
      const card = containerRef.current.children[nextIndex] as HTMLElement
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [activeIndex, services.length])

  const scrollToPrev = useCallback(() => {
    if (containerRef.current) {
      const prevIndex = activeIndex === 0 ? services.length - 1 : activeIndex - 1
      setActiveIndex(prevIndex)
      const card = containerRef.current.children[prevIndex] as HTMLElement
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [activeIndex, services.length])

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What We Do, <span className="text-blue-600">Exceptionally</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We combine strategic thinking with creative excellence to deliver results that exceed expectations
          </p>
        </div>

        {/* Services Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={scrollToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Services Cards */}
          <div className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide snap-x snap-mandatory">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-96 snap-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-${service.color}-100 flex items-center justify-center`}>
                      <div className={`text-${service.color}-600`}>
                        {service.icon}
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-gray-300">{service.number}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8 lg:hidden">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  if (containerRef.current) {
                    const card = containerRef.current.children[index] as HTMLElement
                    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Ready to create something <span className="text-white">extraordinary</span>?
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Let's transform your business together with our innovative solutions and creative expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
