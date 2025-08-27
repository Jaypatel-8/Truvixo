'use client'

import { motion } from 'framer-motion'

const LogoLoop = () => {
  const logos = [
    'Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5',
    'Client 6', 'Client 7', 'Client 8', 'Client 9', 'Client 10'
  ]

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-truvixo-black mb-8">
            Trusted by <span className="text-truvixo-purple">Industry Leaders</span>
          </h2>
          <p className="text-xl text-truvixo-black/70 max-w-3xl mx-auto">
            Our impact spans from Fortune 500 titans to visionary startups. 
            Wherever you start, we help you go bigger, faster, louder.
          </p>
        </motion.div>

        {/* Logo Loop */}
        <div className="relative">
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-16"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 bg-gray-100 flex items-center justify-center text-truvixo-black/60 font-medium text-sm"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LogoLoop
