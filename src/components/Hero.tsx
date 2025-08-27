'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Large Typography Section - Ajeeb Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-7xl md:text-8xl lg:text-9xl font-light text-truvixo-black leading-none tracking-tight pt-40"
          >
            design director
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-7xl md:text-8xl lg:text-9xl font-light text-truvixo-black leading-none tracking-tight"
          >
            for visionary brands
          </motion.h1>
        </motion.div>

        {/* Subtitle - Ajeeb Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mb-32"
        >
          {/* <p className="text-2xl md:text-3xl text-truvixo-black/80 max-w-4xl mx-auto leading-relaxed font-light">
            TruVixo is a creative agency that helps brands find their magic
          </p> */}
        </motion.div>

        {/* Description - Ajeeb Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="mb-32"
        >
          {/* <p className="text-lg md:text-xl text-truvixo-black/70 max-w-5xl mx-auto leading-relaxed font-light">
            TruVixo is an independent interdisciplinary agency specializing in Branding, Strategy, 
            and Digital Innovation. Based in San Francisco but working internationally, 
            we partner with Fortune 500s and visionary startups to craft culturally disruptive 
            identities and digital experiences.
          </p> */}
        </motion.div>

        {/* Scroll Indicator - Ajeeb Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl text-truvixo-black/40"
            >
              ☟
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements - Minimal Ajeeb Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-32 w-64 h-64 bg-truvixo-purple/3 rounded-full" />
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-truvixo-pink/3 rounded-full" />
      </div>
    </section>
  )
}

export default Hero
