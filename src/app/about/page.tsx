import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About TruVixo - Our Story & Mission',
  description: 'Learn about TruVixo\'s mission to create work that hits you right in the feels. Led by seasoned professionals driven by raw talent and innovation.',
}

const AboutPage = () => {
  const stats = [
    { number: '12+', label: 'Years Experience' },
    { number: '50+', label: 'Brands Transformed' },
    { number: '14', label: 'Categories Disrupted' },
    { number: '7+', label: 'Countries Reached' },
    { number: '70%', label: 'Repeat Clients' },
    { number: '3', label: 'In-house Brands' }
  ]

  const focusAreas = [
    {
      title: 'Brand Strategy',
      description: 'We decode your audience, sharpen your brand narrative, and design the strategic foundation for everything you build next.',
      color: 'border-truvixo-purple'
    },
    {
      title: 'Creative Design',
      description: 'Through smart strategy and fearless design, we line up your vision, voice, and visuals into one unstoppable force.',
      color: 'border-truvixo-pink'
    },
    {
      title: 'Digital Innovation',
      description: 'We transform raw emotion into lasting impact, creating brands that win markets, inspire teams, and charm investors.',
      color: 'border-truvixo-yellow'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Ajeeb Style */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-32">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-truvixo-black mb-8 leading-none">
              why <span className="text-truvixo-purple">truvixo</span>?
            </h1>
          </div>

          {/* Mission Statement - Ajeeb Style */}
          <div className="max-w-4xl mx-auto text-center mb-32">
            <p className="text-2xl md:text-3xl text-truvixo-black/80 leading-relaxed font-light">
              Fueled by a mission to create work that hits you right in the feels.
            </p>
          </div>

          {/* Story - Ajeeb Style */}
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xl text-truvixo-black/70 leading-relaxed mb-8 font-light">
              TruVixo is led by seasoned professionals, driven by raw talent and a restless urge to shake the system.
            </p>
            <p className="text-xl text-truvixo-black/70 leading-relaxed mb-8 font-light">
              After years in the creative game, we saw the system for what it was: polished, predictable, and painfully hollow. 
              Too much noise. Not enough meaning. So we built TruVixo to do things differently.
            </p>
            <p className="text-xl text-truvixo-black/70 leading-relaxed font-light">
              No cookie-cutter solutions here, just hands-on, thoughtful, heart-stirring work.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Ajeeb Style */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-light text-truvixo-purple mb-4">
                  {stat.number}
                </div>
                <div className="text-truvixo-black/70 font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas - Ajeeb Style */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-truvixo-black mb-8">
              Turn complex challenges into <span className="text-truvixo-purple">brand triumphs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {focusAreas.map((area, index) => (
              <div key={index} className={`border-l-4 ${area.color} pl-12`}>
                <h3 className="text-3xl font-light text-truvixo-black mb-8">
                  {area.title}
                </h3>
                <p className="text-lg text-truvixo-black/70 leading-relaxed font-light">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Ajeeb Style */}
      <section className="py-32 bg-truvixo-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8">
            Ready to create something <span className="text-truvixo-purple">extraordinary</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
            Let's transform your brand's potential into powerful realities.
          </p>
          <Link href="/contact" className="text-xl font-light text-truvixo-purple hover:text-truvixo-purple-dark transition-colors duration-300">
            make contact:
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
