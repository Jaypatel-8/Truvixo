'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const WorkShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const projects = [
    {
      id: 1,
      title: 'TechFlow Brand Identity',
      subtitle: 'Complete brand redesign for a fintech startup',
      image: '/api/placeholder/800/600',
      featured: true
    },
    {
      id: 2,
      title: 'E-commerce AI Chatbot',
      subtitle: 'Intelligent customer service chatbot',
      image: '/api/placeholder/800/600',
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Migration Strategy',
      subtitle: 'Seamless migration of legacy systems',
      image: '/api/placeholder/800/600',
      featured: false
    },
    {
      id: 4,
      title: 'Digital Marketing Campaign',
      subtitle: 'Multi-channel marketing campaign',
      image: '/api/placeholder/800/600',
      featured: false
    },
    {
      id: 5,
      title: 'SaaS Platform Development',
      subtitle: 'Full-stack SaaS application',
      image: '/api/placeholder/800/600',
      featured: true
    },
    {
      id: 6,
      title: 'Predictive Analytics Dashboard',
      subtitle: 'Real-time business intelligence',
      image: '/api/placeholder/800/600',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header - Ajeeb Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-center mb-32"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-truvixo-black mb-8">
            Featured <span className="text-truvixo-purple">work</span>
          </h2>
        </motion.div>

        {/* Featured Projects Grid - Ajeeb Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                {/* Project Image - Ajeeb Style */}
                <div className="w-full h-96 bg-gray-100 flex items-center justify-center mb-8">
                  <span className="text-gray-500 text-sm">Project Image</span>
                </div>
                
                {/* Project Info - Ajeeb Style */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-light text-truvixo-black group-hover:text-truvixo-purple transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-truvixo-black/70 leading-relaxed font-light">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects - Ajeeb Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/work" className="text-xl font-light text-truvixo-black hover:text-truvixo-purple transition-colors duration-300">
            work∞
          </Link>
        </motion.div>
      </div>

      {/* Project Modal - Ajeeb Style */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-12">
                <h3 className="text-4xl font-light mb-6">{selectedProject?.title}</h3>
                <p className="text-xl text-truvixo-black/70 mb-8 font-light">{selectedProject?.subtitle}</p>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-truvixo-purple hover:text-truvixo-purple-dark transition-colors duration-300 font-light"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default WorkShowcase
