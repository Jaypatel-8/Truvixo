'use client'

import { useState, useMemo, useEffect } from 'react'
import type { ProjectDetail } from '@/lib/projectData'
import ProjectCardInteractive from '@/components/ProjectCardInteractive'
import { Rocket, Sparkles, Calendar, ArrowRight } from 'lucide-react'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'
import dynamic from 'next/dynamic'

const StatsCounter = dynamic(() => import('@/components/StatsCounter'), {
    ssr: false,
    loading: () => <div className="text-center p-4"><div className="h-10 bg-gray-100 rounded animate-pulse mb-1" /><div className="h-4 bg-gray-100 rounded w-16 mx-auto" /></div>,
})

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
        refreshKey: activeCategory, // Critical: re-scans for new projects when filter changes
    })

    // Exclude 'All' gracefully dynamically and sort for hydration consistency
    const categories = useMemo(() => {
        const cats = new Set(projects.map(p => p.category))
        // Sort the categories to ensure the exact same order on server and client
        return ['All', ...Array.from(cats).sort()]
    }, [projects])

    // Filter projects
    const filteredProjects = useMemo(() => {
        if (activeCategory === 'All') return projects
        return projects.filter(p => p.category === activeCategory)
    }, [activeCategory, projects])

    return (
        <main className="min-h-screen bg-white dark:bg-[#0b0c10] pt-24 pb-32 overflow-hidden selection:bg-truvixo-blue selection:text-white">

            {/* 1. Floating gradient blobs - consistent with Home */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
                <div className="hero-blob absolute top-[15%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#5e2cb6]/8 blur-[80px]" />
                <div className="hero-blob absolute bottom-[20%] right-[8%] w-[500px] h-[500px] rounded-full bg-[#c91a6f]/6 blur-[100px]" style={{ animationDelay: '-4s' }} />
                <div className="hero-blob absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-[#10b981]/5 blur-[60px]" style={{ animationDelay: '-8s' }} />
            </div>

            {/* 2. Bouncing balls background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
                <div className="hero-ball w-3 h-3 md:w-4 md:h-4 top-[18%] left-[15%] bg-[#5e2cb6]/40" style={{ animationDelay: '0s' }} />
                <div className="hero-ball w-2 h-2 md:w-3 md:h-3 top-[25%] right-[20%] bg-[#c91a6f]/40" style={{ animationDelay: '0.4s' }} />
                <div className="hero-ball w-4 h-4 md:w-5 md:h-5 bottom-[30%] left-[12%] bg-[#10b981]/35" style={{ animationDelay: '0.8s' }} />
                <div className="hero-ball w-2 h-2 md:w-3 md:h-3 bottom-[25%] right-[18%] bg-[#5e2cb6]/30" style={{ animationDelay: '0.2s' }} />
            </div>

            {/* 3. Minimal Grid Background */}
            <div className="hero-grid-overlay absolute inset-0 overflow-hidden opacity-[0.03]">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-projects" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-900"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-projects)" />
                </svg>
            </div>

            {/* SaaS Standard Centered Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 md:py-32 text-center overflow-hidden">
                <div className="relative z-10 above-fold scroll-animate">

                    {/* Subtle Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5e2cb6]/10 text-[#5e2cb6] text-sm font-semibold mb-8 shadow-sm">
                        <Sparkles className="w-4 h-4" />
                        <span>Our Work</span>
                    </div>

                    <h1 className="heading-reveal text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-6 leading-[0.9] tracking-tight">
                        <span className="heading-reveal-line block"><span>Impactful Software &</span></span>
                        <span className="heading-reveal-line block mt-2"><span><span className="hollow-text-brand">Digital</span> Experiences</span></span>
                    </h1>

                    <p className="p-reveal text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mb-10 px-4">
                        Explore our curated selection of high-performance applications, innovative AI solutions, and robust system architectures built for scale.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 mb-16">
                        <button 
                            onClick={() => {
                                document.getElementById('projects-grid')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="btn-entrance btn-press w-full sm:w-auto bg-[#5e2cb6] text-white font-semibold py-4 px-10 rounded-lg hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 text-base md:text-lg shadow-lg shadow-[#5e2cb6]/20"
                        >
                            <Calendar className="w-5 h-5" />
                            <span>View Projects</span>
                        </button>
                        <a 
                            href="/contact"
                            className="btn-entrance w-full sm:w-auto bg-white text-[#10b981] border-2 border-[#10b981] font-semibold py-4 px-10 rounded-lg hover:bg-[#10b981]/5 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 text-base md:text-lg shadow-lg"
                        >
                            <span>Contact Us</span>
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Stats Bar Integrated into Hero */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto p-reveal" style={{ animationDelay: '200ms' }}>
                        <div className="text-center bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                            <StatsCounter end={20} suffix="+" label="Projects" color="#5e2cb6" />
                        </div>
                        <div className="text-center bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                            <StatsCounter end={7} suffix="+" label="Clients" color="#c91a6f" />
                        </div>
                        <div className="text-center bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                            <StatsCounter end={98} suffix="%" label="Satisfaction" color="#fecc4d" />
                        </div>
                        <div className="text-center bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                            <StatsCounter end={24} suffix="/7" label="Support" color="#10b981" />
                        </div>
                    </div>
                </div>

                {/* Clean Filter Navigation - Repositioned slightly lower for flow */}
                <div id="projects-grid" className="relative z-10 max-w-4xl mx-auto mt-24 mb-12 scroll-animate" style={{ animationDelay: '400ms' }}>
                    <div className="inline-flex flex-wrap justify-center gap-2 lg:gap-4 p-3 rounded-2xl bg-white/50 backdrop-blur-md border border-gray-100 shadow-lg shadow-gray-200/20">
                        {categories.map((category) => {
                            const isActive = isMounted && activeCategory === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-2.5 rounded-xl text-sm font-bold tracking-tight transition-all duration-300 ${isActive
                                        ? 'bg-[#5e2cb6] text-white shadow-md transform scale-[1.02]'
                                        : 'bg-transparent text-gray-500 hover:bg-gray-100/80 hover:text-gray-900 border border-transparent'
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
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
