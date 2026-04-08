'use client'

import { useState, useMemo, useEffect } from 'react'
import type { ProjectDetail } from '@/lib/projectData'
import ProjectCardInteractive from '@/components/ProjectCardInteractive'
import { Rocket, Sparkles } from 'lucide-react'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'

interface ProjectsClientProps {
    projects: ProjectDetail[]
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
    const [activeCategory, setActiveCategory] = useState<string>('All')
    const [isMounted, setIsMounted] = useState(false)

    // Wait for mount
    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Call exact animation hook from TruVixo framework
    useIntersectionObserver({
        threshold: 0.1, // Trigger slightly later so images popup smoothly
        rootMargin: '0px 0px -50px 0px',
        selectors: ['.scroll-animate', '.scroll-animate-scale', '.heading-reveal', '.p-reveal'],
        unobserveAfterIntersect: true,
    })

    // Exclude 'All' gracefully dynamically
    const categories = useMemo(() => {
        const cats = new Set(projects.map(p => p.category))
        return ['All', ...Array.from(cats)]
    }, [projects])

    // Filter projects
    const filteredProjects = useMemo(() => {
        if (activeCategory === 'All') return projects
        return projects.filter(p => p.category === activeCategory)
    }, [activeCategory, projects])

    return (
        <main className="min-h-screen bg-white dark:bg-[#0b0c10] pt-24 pb-32 overflow-hidden selection:bg-truvixo-blue selection:text-white">

            {/* Decorative Blur Backgrounds */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden>
                <div className="absolute -top-40 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute top-1/4 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl opacity-50" />
            </div>

            {/* SaaS Standard Centered Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-20 md:py-32 text-center overflow-hidden">
                <div className="relative z-10 scroll-animate">

                    {/* Subtle Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-truvixo-purple/10 text-truvixo-purple dark:text-purple-400 text-sm font-semibold mb-8 shadow-sm">
                        <Sparkles className="w-4 h-4" />
                        <span>Our Work</span>
                    </div>

                    {/* Clean Large Heading */}
                    <h1 className="heading-reveal text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                        Impactful Software & <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-truvixo-purple to-truvixo-blue">Digital Experiences</span>
                    </h1>

                    {/* Soft Subheading */}
                    <p className="p-reveal text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Explore our curated selection of high-performance applications, innovative AI solutions, and robust system architectures built for scale.
                    </p>

                    {/* Core CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 p-reveal" style={{ animationDelay: '150ms' }}>
                        <button
                            onClick={() => {
                                document.getElementById('projects-grid')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold transition-all duration-300 bg-truvixo-purple text-white hover:opacity-90 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            View Projects
                        </button>
                        <a
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold transition-all duration-300 bg-white dark:bg-[#111827] text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 shadow-sm"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Clean Filter Navigation */}
                <div id="projects-grid" className="relative z-10 max-w-3xl mx-auto scroll-animate" style={{ animationDelay: '300ms' }}>
                    <div className="inline-flex flex-wrap justify-center gap-2 lg:gap-4 p-2 md:p-3 rounded-2xl bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 shadow-xl shadow-gray-200/20 dark:shadow-none">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${activeCategory === category
                                    ? 'bg-truvixo-purple text-white shadow-md transform scale-[1.02]'
                                    : 'bg-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Timeline/Alternating Layout */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col gap-8 md:gap-16 pt-8 pb-24">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <div key={project.slug} className="relative">
                                {/* Connecting Line between cards if not the last one */}
                                {index !== filteredProjects.length - 1 && (
                                    <div className="hidden lg:block absolute left-1/2 bottom-[-4rem] top-[calc(100%-4rem)] w-px bg-gradient-to-b from-gray-200 to-transparent dark:from-gray-800" />
                                )}

                                <ProjectCardInteractive
                                    project={project}
                                    index={index}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="py-24 text-center">
                            <div className="inline-flex w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 items-center justify-center mb-6">
                                <Rocket className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No projects found</h3>
                            <p className="text-gray-500">We don't have any published projects matching this specific filter yet.</p>
                        </div>
                    )}
                </div>
            </section>

        </main>
    )
}
