import type { Metadata } from 'next'
import { Target, BarChart3, Palette, Globe, Building2, CheckCircle, ArrowRight, Users, Zap, Award, Sparkles, Rocket, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - TruVixo Creative & Technology Solutions',
  description: 'Discover our comprehensive range of services including lead generation, brand strategy, creative design, digital innovation, and white label solutions.',
}

const ServicesPage = () => {
  const services = [
    {
      id: 'lead-generation',
      number: '01.',
      title: 'Lead Generation',
      subtitle: 'Boost Your Sales Quota',
      description: 'Get more leads by improving cold outreach conversions. Warm up before outreach. Omnichannel campaigns. GIF & Image hyper-personalization. Campaign priorities.',
      features: [
        'Get more leads by improving cold outreach conversions',
        'Work smarter, not harder, by automating routine tasks',
        'Choose a simple solution for complex tasks'
      ],
      icon: <Target className="w-12 h-12" />,
      color: 'truvixo-blue',
      gradient: 'gradient-bg',
      cta: 'Start Generating Leads'
    },
    {
      id: 'brand-strategy',
      number: '02.',
      title: 'Brand Strategy',
      subtitle: 'Find Your True North',
      description: 'Find your ideal brand positioning in several simple clicks. Build-in strategy tools. Smart filters of opportunities. Brand data clean-up.',
      features: [
        'Find your ideal brand positioning in several simple clicks',
        'Reach your brand goals faster by increasing engagement rates',
        'Improve your brand results based on truthful analytics'
      ],
      icon: <BarChart3 className="w-12 h-12" />,
      color: 'truvixo-purple',
      gradient: 'gradient-bg-2',
      cta: 'Develop Your Strategy'
    },
    {
      id: 'creative-design',
      number: '03.',
      title: 'Creative Design',
      subtitle: 'Visual Excellence',
      description: 'Achieve creative excellence for your business ideas. Extended design capabilities. Data-driven insights. Different campaign types.',
      features: [
        'Find gold-mine creative opportunities with smart algorithms',
        'Enhance your brand engagement rate by up to 35%',
        'Improve your campaign results and manage your pipeline'
      ],
      icon: <Palette className="w-12 h-12" />,
      color: 'truvixo-red',
      gradient: 'gradient-bg-3',
      cta: 'Start Your Design Project'
    },
    {
      id: 'digital-innovation',
      number: '04.',
      title: 'Digital Innovation',
      subtitle: 'Transform Raw Emotion',
      description: 'Grow your digital presence with fewer efforts. Extended capabilities. Different campaign types. Hyper-personalization. Top-notch service.',
      features: [
        'Increase your digital ROI by generating more qualified leads',
        'Get the most of team management',
        'Keep your digital process organized with integrations'
      ],
      icon: <Globe className="w-12 h-12" />,
      color: 'truvixo-yellow',
      gradient: 'gradient-bg-4',
      cta: 'Innovate Digitally'
    },
    {
      id: 'white-label',
      number: '05.',
      title: 'White Label',
      subtitle: 'Do Digital Marketing Under Your Own Brand',
      description: 'Build your brand reputation by delivering high-quality digital solutions. Seamless setup. Your own domain to win trust. Dedicated customer success manager.',
      features: [
        'Build your brand reputation by delivering high-quality solutions',
        'Upsell your customers by offering different pricing plans',
        'Increase your agency\'s ROI by generating more qualified leads'
      ],
      icon: <Building2 className="w-12 h-12" />,
      color: 'truvixo-blue',
      gradient: 'gradient-bg',
      cta: 'Start White Label'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Team Members' },
    { number: '7+', label: 'Years Experience' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-purple-50 to-red-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-truvixo-blue/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-truvixo-purple/20 rounded-full animate-float-delay-1"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-truvixo-red/20 rounded-full animate-float-delay-2"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-truvixo-yellow/20 rounded-full animate-float-delay-3"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              Our <span className="gradient-text animate-pulse-slow">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive solutions to transform your business and drive growth through creative excellence and strategic innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-truvixo-blue mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              What We Do Best
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of services designed to meet your business needs
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-20 h-20 rounded-xl bg-${service.color}-100 flex items-center justify-center`}>
                        <div className={`text-${service.color}`}>
                          {service.icon}
                        </div>
                      </div>
                      <div className="text-6xl font-bold text-gray-200">{service.number}</div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <h4 className="text-xl font-semibold text-gray-700 mb-6">{service.subtitle}</h4>
                    <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="bg-truvixo-blue text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 group">
                      {service.cta}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 lg:p-12">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <div className={`text-${service.color}`}>
                          {service.icon}
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h4>
                      <p className="text-gray-600 mb-6">{service.subtitle}</p>
                      <div className="space-y-3">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures success in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, title: 'Discovery', description: 'We start by understanding your business, goals, and challenges' },
              { icon: <Target className="w-8 h-8" />, title: 'Strategy', description: 'Develop a comprehensive plan tailored to your specific needs' },
              { icon: <Zap className="w-8 h-8" />, title: 'Execution', description: 'Implement solutions with precision and attention to detail' },
              { icon: <Award className="w-8 h-8" />, title: 'Optimization', description: 'Continuously improve and refine for maximum results' }
            ].map((step, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-truvixo-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-truvixo-blue">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-truvixo-blue to-truvixo-purple text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss your project and how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-truvixo-blue font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-truvixo-blue transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
