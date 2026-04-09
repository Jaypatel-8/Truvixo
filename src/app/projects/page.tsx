import { Metadata } from 'next'
import { projects } from '@/lib/projectData'
import ProjectsClient from './ProjectsClient'

export const metadata: Metadata = {
    title: 'Our Projects | TruVixo',
    description: 'Explore an interactive portfolio of our latest capabilities in software engineering, AI, and digital design.',
    openGraph: {
        title: 'Our Projects | TruVixo',
        description: 'Explore an interactive portfolio of our latest capabilities in software engineering, AI, and digital design.',
        images: [{ url: '/og-image.jpg' }],
    }
}

export default function ProjectsPage() {
    // Server-side logic to pre-fetch projects safely
    const safelyFetchedProjects = projects || [];

    return (
        <ProjectsClient projects={safelyFetchedProjects} />
    )
}
