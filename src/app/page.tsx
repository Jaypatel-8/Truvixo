import HomeClient from './HomeClient'
import { homeTechnologies, homeServicesList, homeWhyChooseUs, homeTestimonials, homeFAQs, homeFeaturedProjects } from '@/lib/staticData/home'

export default function Home() {
  return (
    <HomeClient
      technologies={homeTechnologies}
      servicesList={homeServicesList}
      whyChooseUs={homeWhyChooseUs}
      testimonials={homeTestimonials}
      faqs={homeFAQs}
      featuredProjects={homeFeaturedProjects}
    />
  )
}
