'use client'

import { useEffect, useState } from 'react'
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import ContactSection from '@/components/ContactSection'
import SEOLocationSection from '@/components/SEOLocationSection'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function Blog() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale')
    scrollElements.forEach((el) => observer.observe(el))

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const blogPosts = [
    {
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is transforming the software development landscape and what it means for businesses.',
      author: 'TruVixo Team',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/TruVixo.png'
    },
    {
      title: 'Best Practices for Cloud Migration',
      excerpt: 'A comprehensive guide to migrating your applications to the cloud successfully, including strategies and common pitfalls.',
      author: 'TruVixo Team',
      date: 'December 10, 2024',
      readTime: '7 min read',
      category: 'Cloud & DevOps',
      image: '/TruVixo.png'
    },
    {
      title: 'Digital Transformation in Healthcare',
      excerpt: 'How technology is revolutionizing healthcare delivery and improving patient outcomes through innovative solutions.',
      author: 'TruVixo Team',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'Healthcare',
      image: '/TruVixo.png'
    },
    {
      title: 'Building Scalable Mobile Applications',
      excerpt: 'Key strategies and technologies for developing mobile apps that can scale with your business growth.',
      author: 'TruVixo Team',
      date: 'November 28, 2024',
      readTime: '8 min read',
      category: 'Mobile Development',
      image: '/TruVixo.png'
    },
    {
      title: 'SEO Strategies for 2025',
      excerpt: 'Latest SEO trends and best practices to improve your website\'s search engine rankings and organic traffic.',
      author: 'TruVixo Team',
      date: 'November 20, 2024',
      readTime: '5 min read',
      category: 'Digital Marketing',
      image: '/TruVixo.png'
    },
    {
      title: 'The Role of DevOps in Modern Software Development',
      excerpt: 'Understanding how DevOps practices accelerate development cycles and improve software quality.',
      author: 'TruVixo Team',
      date: 'November 15, 2024',
      readTime: '6 min read',
      category: 'DevOps',
      image: '/TruVixo.png'
    }
  ]

  const categories = [
    'All Posts',
    'AI & Technology',
    'Cloud & DevOps',
    'Mobile Development',
    'Digital Marketing',
    'Healthcare',
    'DevOps'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-[#5e2cb6]/5 via-white to-[#c91a6f]/5 flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-16">
          <div className="scroll-animate">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Our{' '}
              <span className="hollow-text-brand">Blog</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-8">
              Insights, trends, and best practices in software development, AI, digital marketing, and technology
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full border border-gray-200 hover:border-[#5e2cb6] hover:text-[#5e2cb6] transition-all duration-300 text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-[#5e2cb6]/10 to-[#c91a6f]/10 flex items-center justify-center">
                  <Tag className="w-12 h-12 text-[#5e2cb6] opacity-50" strokeWidth={2} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#5e2cb6] px-3 py-1 bg-[#5e2cb6]/10 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" strokeWidth={2} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" strokeWidth={2} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" strokeWidth={2} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="text-[#5e2cb6] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Location Section */}
      <SEOLocationSection serviceName="Technology Blog & Industry Insights" />

      {/* Contact Section */}
      <ContactSection 
        title="Stay Updated"
        description="Subscribe to our newsletter to get the latest insights, tips, and updates delivered to your inbox."
      />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  )
}
