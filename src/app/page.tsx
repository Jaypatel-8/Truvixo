import HomeClient from './HomeClient'
import type { ServiceItem, WhyChooseUsItem, Technology } from '@/lib/types/staticData'
import { homeTechnologies, homeServicesList, homeWhyChooseUs, homeTestimonials, homeFAQs, homeFeaturedProjects } from '@/lib/staticData/home'

export default function Home() {
  return (
    <HomeClient
      technologies={Array.from(homeTechnologies) as Technology[]}
      servicesList={Array.from(homeServicesList) as ServiceItem[]}
      whyChooseUs={Array.from(homeWhyChooseUs) as WhyChooseUsItem[]}
      testimonials={Array.from(homeTestimonials)}
      faqs={Array.from(homeFAQs)}
      featuredProjects={homeFeaturedProjects}
    />
  )
}
