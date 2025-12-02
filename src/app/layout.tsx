import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'

// Lazy load components for better performance
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), {
  ssr: false,
})
const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: true,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true,
})
const Clientele = dynamic(() => import('@/components/Clientele'), {
  ssr: false,
})
const GoToTop = dynamic(() => import('@/components/GoToTop'), {
  ssr: false,
})
const ContactPopup = dynamic(() => import('@/components/ContactPopup'), {
  ssr: false,
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'AI & Software Development Company | Custom Web, Mobile & AI Solutions',
    template: '%s | TruVixo™'
  },
  description: 'We design, build and scale custom software, AI, and cloud solutions — web & mobile apps, generative AI, RAG systems, and dedicated development teams. Get a 1-week risk-free trial.',
  keywords: [
    'custom software development',
    'AI development company',
    'hire developers',
    'web application development',
    'generative AI services',
    'RAG systems development',
    'hire frontend developers remote',
    'AI chatbot development company',
    'enterprise SaaS development',
    'mobile app development',
    'software engineering',
    'cloud solutions',
    'dedicated development teams'
  ],
  authors: [{ name: 'TruVixo', url: 'https://truvixo.com' }],
  creator: 'TruVixo',
  publisher: 'TruVixo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://truvixo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI & Software Development Company | Custom Web, Mobile & AI Solutions',
    description: 'We design, build and scale custom software, AI, and cloud solutions. Talk to our experts and start with a 1-week risk-free trial.',
    url: 'https://truvixo.com',
    siteName: 'TruVixo',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/TruVixo.png',
        width: 1200,
        height: 630,
        alt: 'TruVixo - AI & Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Software Development Company | Custom Web, Mobile & AI Solutions',
    description: 'We design, build and scale custom software, AI, and cloud solutions. Talk to our experts and start with a 1-week risk-free trial.',
    images: ['/TruVixo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/TruVixo.png" as="image" type="image/png" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" href="/fonts/LePetiteCocho-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/LePetiteCocho-Bold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="prefetch" href="/fonts/LePetiteCocho-Regular.otf" as="font" crossOrigin="anonymous" />
        <link rel="prefetch" href="/fonts/LePetiteCocho-Bold.otf" as="font" crossOrigin="anonymous" />
        {/* Prefetch important routes for faster navigation */}
        <link rel="prefetch" href="/contact" />
        <link rel="prefetch" href="/services" />
        <link rel="prefetch" href="/our-work" />
        <link rel="prefetch" href="/about" />
        <link rel="icon" href="/TruVixo logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/TruVixo logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TruVixo",
              "alternateName": "TruVixo™",
              "url": "https://truvixo.com",
              "logo": "https://truvixo.com/TruVixo.png",
              "description": "AI-powered branding, marketing, and technology company helping businesses scale from concept to market leader.",
              "foundingDate": "2017",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Jay Patel"
                },
                {
                  "@type": "Person",
                  "name": "Preet Patel"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "sales@truvixoo.com",
                "telephone": "+916354326412"
              },
              "sameAs": [
                "https://www.linkedin.com/company/truvixo%E2%84%A2/posts/?feedView=all"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "areaServed": "Worldwide",
              "serviceType": [
                "Branding & Identity",
                "Digital Marketing",
                "UI/UX Design",
                "Web & App Development",
                "IT Consulting",
                "AI & Automation",
                "Cloud & DevOps",
                "Startup Growth & Funding"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TruVixo",
              "url": "https://truvixo.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://truvixo.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <CustomCursor />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <GoToTop />
        <ContactPopup />
      </body>
    </html>
  )
}
