'use client'

import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "TruVixo has been a total game-changer, creative, professional, and deeply in sync with our brand. They deliver beyond expectations and feel like part of the team.",
      author: "Yug Bhatiya",
      role: "CEO & Founder of Control Z"
    },
    {
      quote: "They got too good and popular that they don't have time. Now it's on you to be the kind of client they can't say no to.",
      author: "Neha Jain",
      role: "CEO & Founder of Zerocircle"
    },
    {
      quote: "If you want more than just a brand, if you want a story people feel, TruVixo is who you need.",
      author: "Fetus",
      role: "Founder of Fetus, Streetwear brand"
    }
  ]

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
        duration: 0.8
      }
    }
  }

  return (
    <section className="py-32 bg-white">
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
            What leaders say about working with <span className="text-truvixo-purple">TruVixo</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="border-b border-gray-200 pb-16">
                {/* Quote */}
                <blockquote className="text-2xl text-truvixo-black/80 leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-truvixo-black">
                    {testimonial.author}
                  </div>
                  <div className="text-truvixo-purple font-medium">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
