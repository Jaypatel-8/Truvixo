'use client'

import { ArrowRight, Target, BarChart3, Palette, Globe, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'

const ProductsPage = () => {
  const products = [
    {
      id: 'trumanage',
      title: 'TruManage',
      subtitle: 'Complete Project & Team Management',
      description: 'Streamline your project management, team collaboration, and workflow automation with TruManage. Track progress, manage resources, and deliver projects on time with our comprehensive management platform.',
      features: [
        'Project Planning & Scheduling',
        'Team Collaboration Tools',
        'Task Management & Tracking',
        'Resource Allocation',
        'Time Tracking & Reporting',
        'Workflow Automation',
        'Document Management',
        'Real-time Dashboards'
      ],
      icon: <Target className="w-12 h-12" />,
      color: 'purple',
      price: 'Custom',
      rating: 4.9,
      reviews: 127
    },
    {
      id: 'trudesk',
      title: 'TruDesk',
      subtitle: 'Customer Support & Helpdesk Solution',
      description: 'Deliver exceptional customer support with TruDesk. Manage tickets, automate responses, and provide seamless customer service across multiple channels with our intelligent helpdesk platform.',
      features: [
        'Multi-channel Ticket Management',
        'Automated Ticket Routing',
        'Knowledge Base & FAQs',
        'Live Chat Integration',
        'Customer Satisfaction Surveys',
        'Analytics & Reporting',
        'Team Performance Metrics',
        'Integration with CRM Systems'
      ],
      icon: <BarChart3 className="w-12 h-12" />,
      color: 'pink',
      price: 'Custom',
      rating: 4.8,
      reviews: 89
    },
    {
      id: 'truanalytics',
      title: 'TruAnalytics',
      subtitle: 'Business Intelligence & Data Analytics',
      description: 'Transform your data into actionable insights with TruAnalytics. Build custom dashboards, generate reports, and make data-driven decisions with our powerful business intelligence platform.',
      features: [
        'Custom Dashboard Creation',
        'Real-time Data Visualization',
        'Advanced Reporting & Analytics',
        'Data Integration & ETL',
        'Predictive Analytics',
        'Automated Report Generation',
        'Data Export & Sharing',
        'Mobile Analytics Access'
      ],
      icon: <Palette className="w-12 h-12" />,
      color: 'yellow',
      price: 'Custom',
      rating: 4.9,
      reviews: 156
    },
    {
      id: 'trusocial',
      title: 'TruSocial',
      subtitle: 'Social Media Management & Marketing',
      description: 'Manage all your social media accounts, schedule posts, engage with audiences, and track performance with TruSocial. Streamline your social media marketing efforts in one unified platform.',
      features: [
        'Multi-platform Social Media Management',
        'Content Scheduling & Publishing',
        'Social Media Analytics',
        'Audience Engagement Tools',
        'Influencer Management',
        'Content Calendar',
        'Social Listening & Monitoring',
        'ROI Tracking & Reporting'
      ],
      icon: <Globe className="w-12 h-12" />,
      color: 'magenta',
      price: 'Custom',
      rating: 4.7,
      reviews: 94
    }
  ]



  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container-expandi py-20">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart Tools That Power Modern{' '}
              <span className="hollow-text-purple">Businesses</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore Truvixo's suite of innovative digital products designed to simplify operations and scale success.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container-expandi">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}

                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`icon-container ${product.color} w-16 h-16`}>
                    {product.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{product.price}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{product.rating}</span>
                      <span>({product.reviews})</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                
                <h4 className="text-lg font-semibold text-gray-700 mb-4">
                  {product.subtitle}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-truvixo-purple" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex items-center text-truvixo-purple group-hover:text-truvixo-purple-dark transition-colors duration-300 font-semibold"
                >
                  Learn more
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-expandi">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to <span className="hollow-text-purple">get started</span>?
            </h2>
            <p className="text-gray-600 mb-8">
              Let's discuss how our products can help you achieve your goals and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="border-2 border-purple-500 text-purple-600 font-bold py-4 px-8 rounded-xl hover:bg-purple-50 transition-all duration-300 inline-flex items-center justify-center gap-2">
                Get Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
