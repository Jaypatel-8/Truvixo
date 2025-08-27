import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WorkShowcase from '@/components/WorkShowcase'

export const metadata: Metadata = {
  title: 'Our Work - TruVixo Portfolio & Case Studies',
  description: 'Explore our portfolio of successful projects that demonstrate our expertise in digital marketing, branding, and software development.',
}

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-truvixo-black mb-8 leading-none">
            Our <span className="text-truvixo-purple">Work</span>
          </h1>
          <p className="text-xl md:text-2xl text-truvixo-black/70 max-w-4xl mx-auto leading-relaxed">
            Our impact spans from Fortune 500 titans to visionary startups. 
            Wherever you start, we help you go bigger, faster, louder.
          </p>
        </div>
      </section>

      {/* Work Showcase */}
      <WorkShowcase />

      {/* CTA Section */}
      <section className="py-32 bg-truvixo-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to create something <span className="text-truvixo-purple">extraordinary</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's transform your brand's potential into powerful realities.
          </p>
          <button className="bg-truvixo-purple text-white text-lg px-8 py-4 rounded-none font-medium hover:bg-truvixo-purple-dark transition-colors duration-300 border-2 border-truvixo-purple hover:border-truvixo-purple-dark">
            Book a Call
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WorkPage
