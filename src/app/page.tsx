import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WorkShowcase from '@/components/WorkShowcase'
import Testimonials from '@/components/Testimonials'
import LogoLoop from '@/components/LogoLoop'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <WorkShowcase />
      <Testimonials />
      <LogoLoop />
      <Footer />
    </main>
  )
}
