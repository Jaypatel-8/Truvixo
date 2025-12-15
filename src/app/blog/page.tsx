'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, BookOpen, Calendar, User, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import Clientele from '@/components/Clientele'

export default function Blog() {
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
      date: 'March 15, 2024',
      author: 'TruVixo Team',
      category: 'AI & Technology',
      readTime: '5 min read',
      color: '#5e2cb6'
    },
    {
      title: 'Best Practices for Custom Software Development',
      excerpt: 'Key strategies and best practices for building custom software solutions that scale with your business.',
      date: 'March 10, 2024',
      author: 'TruVixo Team',
      category: 'Development',
      readTime: '7 min read',
      color: '#c91a6f'
    },
    {
      title: 'Digital Marketing Trends for 2024',
      excerpt: 'Stay ahead with the latest digital marketing trends and strategies that drive results in 2024.',
      date: 'March 5, 2024',
      author: 'TruVixo Team',
      category: 'Marketing',
      readTime: '6 min read',
      color: '#fecc4d'
    },
    {
      title: 'Why Mobile-First Design Matters',
      excerpt: 'Understanding the importance of mobile-first design and how it impacts user experience and conversions.',
      date: 'February 28, 2024',
      author: 'TruVixo Team',
      category: 'Design',
      readTime: '4 min read',
      color: '#10b981'
    },
    {
      title: 'SaaS Product Development: A Complete Guide',
      excerpt: 'Everything you need to know about building successful SaaS products from concept to launch.',
      date: 'February 20, 2024',
      author: 'TruVixo Team',
      category: 'SaaS',
      readTime: '8 min read',
      color: '#5e2cb6'
    },
    {
      title: 'Conversion Rate Optimization Strategies',
      excerpt: 'Proven CRO strategies that help turn more visitors into customers and increase revenue.',
      date: 'February 15, 2024',
      author: 'TruVixo Team',
      category: 'Marketing',
      readTime: '5 min read',
      color: '#c91a6f'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <section className="relative min-h-[60vh] bg-white flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5e2cb6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c91a6f]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="scroll-animate">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e2cb6]/10 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-[#5e2cb6]" strokeWidth={2} />
              <span className="text-sm font-semibold text-[#5e2cb6]">Insights & Blog</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Insights &{' '}
              <span className="hollow-text-brand">
                Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and best practices in software development, AI, and digital marketing.
            </p>
          </div>
        </div>
      </section>

      {isMounted && <div className="mt-12"><Clientele /></div>}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden scroll-animate"
                style={{ 
                  borderColor: post.color + '40'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = post.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = post.color + '40'
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ backgroundColor: post.color }}></div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: post.color + '20', color: post.color }}>
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#5e2cb6] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" strokeWidth={2} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" strokeWidth={2} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link href="#" className="flex items-center gap-2 text-[#5e2cb6] font-semibold hover:gap-3 transition-all">
                      Read More
                      <ArrowRightIcon className="w-4 h-4" strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}







