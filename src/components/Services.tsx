'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'Branding',
      description: "You need a brand identity that's unmistakably you. We build visual and verbal identities that scale, stand out, and stick.",
      features: ['Art Direction', 'Identity Design', 'Design System', 'Brand Collaterals', 'Sonic Identity', 'Motion Identity'],
      color: 'truvixo-purple',
      bgColor: 'bg-truvixo-purple/5'
    },
    {
      title: 'Strategy',
      description: 'Find your true north. We decode your audience, sharpen your brand narrative, and design the strategic foundation for everything you build next.',
      features: ['Brand Audit', 'Competitor Analysis', 'Audience Insights', 'Brand Narrative', 'Vision and Mission', 'Brand Voice', 'Brand Pillars'],
      color: 'truvixo-pink',
      bgColor: 'bg-truvixo-pink/5'
    },
    {
      title: 'Website',
      description: "Your website isn't a brochure, it's your brand's beating heart online. We design websites that don't just look great; they convert, connect, and move.",
      features: ['User Experience', 'Design Systems', 'Ecommerce', 'Front-end development', 'Immersive Experiences', 'Digital Design'],
      color: 'truvixo-yellow',
      bgColor: 'bg-truvixo-yellow/5'
    },
    {
      title: 'Campaigns',
      description: 'Stories move people. Words move markets. We create content that stirs emotion, builds loyalty, and turns passive audiences into brand believers.',
      features: ['Ideation', 'Motion Design', 'Content Strategy', 'Scriptwriting', 'Long-Form Content', 'Story-Led Campaigns'],
      color: 'truvixo-magenta',
      bgColor: 'bg-truvixo-magenta/5'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-truvixo-black mb-8">
            What We Do, <span className="text-truvixo-purple">Exceptionally</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <div className={`${service.bgColor} p-12 border-l-4 border-${service.color} hover:shadow-xl transition-all duration-300`}>
                {/* Service Title */}
                <h3 className="text-4xl md:text-5xl font-bold text-truvixo-black mb-6 group-hover:text-truvixo-purple transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-xl text-truvixo-black/70 mb-8 leading-relaxed max-w-lg">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-truvixo-black/60 hover:text-truvixo-purple transition-colors duration-200 cursor-pointer">
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center text-truvixo-purple group-hover:translate-x-2 transition-transform duration-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mt-32"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-truvixo-purple text-white text-lg px-8 py-4 rounded-none font-medium hover:bg-truvixo-purple-dark transition-colors duration-300 border-2 border-truvixo-purple hover:border-truvixo-purple-dark"
          >
            Inquire about Partnerships
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
