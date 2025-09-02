'use client'

import { ArrowRight, Target, BarChart3, Palette, Globe, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'

const ProductsPage = () => {
  const products = [
    {
      id: 'lead-generation',
      title: 'Lead Generation',
      subtitle: 'Boost Your Sales Quota',
      description: 'Get more leads by improving cold outreach conversions. Warm up before outreach, omnichannel campaigns, and smart automation.',
      features: [
        'Warm up before outreach',
        'Omnichannel campaigns', 
        'Smart automation',
        'Campaign priorities',
        'Lead scoring & qualification',
        'CRM integration'
      ],
      icon: <Target className="w-12 h-12" />,
      color: 'purple',
      price: 'Custom',
      rating: 4.9,
      reviews: 127
    },
    {
      id: 'brand-strategy',
      title: 'Brand Strategy',
      subtitle: 'Find Your True North',
      description: 'Decode your audience, sharpen your brand narrative, and design the strategic foundation for everything you build next.',
      features: [
        'Brand Audit',
        'Competitor Analysis',
        'Audience Insights',
        'Brand Narrative',
        'Positioning Strategy',
        'Brand Guidelines'
      ],
      icon: <BarChart3 className="w-12 h-12" />,
      color: 'pink',
      price: 'Custom',
      rating: 4.8,
      reviews: 89
    },
    {
      id: 'creative-design',
      title: 'Creative Design',
      subtitle: 'Visual Excellence',
      description: 'Through smart strategy and fearless design, we line up your vision, voice, and visuals into one unstoppable force.',
      features: [
        'Identity Design',
        'Design Systems',
        'Brand Collaterals',
        'Motion Identity',
        'UI/UX Design',
        'Print & Digital Assets'
      ],
      icon: <Palette className="w-12 h-12" />,
      color: 'yellow',
      price: 'Custom',
      rating: 4.9,
      reviews: 156
    },
    {
      id: 'digital-innovation',
      title: 'Digital Innovation',
      subtitle: 'Transform Raw Emotion',
      description: 'We transform raw emotion into lasting impact, creating brands that win markets, inspire teams, and charm investors.',
      features: [
        'User Experience',
        'Digital Design',
        'Immersive Experiences',
        'Front-end Development',
        'Web Applications',
        'Digital Products'
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
              Our <span className="text-truvixo-purple">Products</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our comprehensive suite of solutions designed to transform your brand and drive exceptional results
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
              Ready to get started?
            </h2>
            <p className="text-gray-600 mb-8">
              Let's discuss how our products can help you achieve your goals and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/work" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
