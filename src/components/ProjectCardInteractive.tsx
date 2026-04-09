'use client'

import React from 'react'
import Link from 'next/link'
import { ExternalLink, Github, ArrowRight, Code2 } from 'lucide-react'
import type { ProjectDetail } from '@/lib/projectData'

interface ProjectCardInteractiveProps {
    project: ProjectDetail
    index: number
}

export default function ProjectCardInteractive({ project, index }: ProjectCardInteractiveProps) {
    const primaryColor = project.color || '#5e2cb6'

    // Decide layout variation based on index (even = image right, odd = image left)
    const isEven = index % 2 === 0

    return (
        <div
            className="scroll-animate group relative w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-12 lg:py-24"
        >
            {/* Visual / Image Side */}
            <div
                className={`w-full lg:w-3/5 relative z-10 transition-transform duration-700 ease-out group-hover:scale-[1.02] ${isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
            >
                <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                    {/* Fallback pattern if no image */}
                    <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800" />

                    {project.imageUrl && (
                        <>
                            {/* Unoptimized image flag for Hostinger static export compatibility if needed, using standard img to avoid Next config conflicts */}
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Deep gradient overlay to ensure text contrast if we place elements over the image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                        </>
                    )}

                    {/* Decorative glowing orb behind image */}
                    <div
                        className="absolute -inset-4 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 -z-10 rounded-3xl"
                        style={{ backgroundColor: primaryColor }}
                    />

                    {/* Quick-action overlay layer (appears on hover) */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-sm bg-black/20">
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noreferrer"
                                className="w-14 h-14 rounded-full bg-white text-gray-900 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl hover:scale-110"
                                aria-label="View Live Project"
                            >
                                <ExternalLink className="w-6 h-6" />
                            </a>
                        )}
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noreferrer"
                                className="w-14 h-14 rounded-full bg-[#111827] text-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 shadow-xl hover:scale-110"
                                aria-label="View Source Code"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div
                className={`w-full lg:w-2/5 flex flex-col relative z-20 ${isEven ? 'lg:order-1 lg:items-start lg:text-left' : 'lg:order-2 lg:items-start lg:text-left'
                    }`}
            >
                {/* Subtle Accent Line */}
                <div
                    className="w-12 h-1 rounded-full mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: primaryColor }}
                />

                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                        <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: primaryColor }}
                        />
                        <span className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100">
                            {project.category}
                        </span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {project.duration}
                    </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1] transition-transform duration-300 origin-left group-hover:scale-[1.02]">
                    {project.title}
                </h3>

                {/* Detailed description that stands out cleanly */}
                <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                    {project.description}
                </p>

                {/* Tech Stack Chips - Minimal approach */}
                <div className="flex flex-wrap gap-2 mb-10 w-full max-w-sm">
                    {project.technologies.slice(0, 6).map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-sm font-medium text-gray-500 dark:text-gray-400 relative overflow-hidden group/chip cursor-default"
                        >
                            {tech}
                            {idx < 5 && idx < project.technologies.length - 1 && (
                                <span className="mx-2 text-gray-300 dark:text-gray-700">•</span>
                            )}
                        </span>
                    ))}
                    {project.technologies.length > 6 && (
                        <span className="text-sm font-medium text-gray-400 italic">
                            + more
                        </span>
                    )}
                </div>

                {/* Primary Action Button */}
                <Link
                    href={`/our-work/${project.slug}`}
                    className="group/btn inline-flex items-center gap-3 text-base font-semibold transition-all duration-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-6 py-4 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                    <span className="text-gray-900 dark:text-white">View Case Study</span>
                    <div
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 scale-90 group-hover/btn:scale-110"
                        style={{ backgroundColor: primaryColor + '15', color: primaryColor }}
                    >
                        <ArrowRight className="w-4 h-4 ml-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </div>
                </Link>
            </div>

        </div>
    )
}
