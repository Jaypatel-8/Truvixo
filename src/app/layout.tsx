import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TruVixo™ - AI-Driven Digital Solutions & Branding',
  description: 'Transform your business with TruVixo™ - leading provider of AI-driven digital solutions, creative branding, and innovative software development.',
  keywords: 'AI solutions, digital marketing, branding, software development, web design, digital transformation',
  authors: [{ name: 'TruVixo' }],
  creator: 'TruVixo',
  publisher: 'TruVixo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://truvixo.com'),
  openGraph: {
    title: 'TruVixo™ - AI-Driven Digital Solutions & Branding',
    description: 'Transform your business with AI-driven digital solutions, creative branding, and innovative software development.',
    url: 'https://truvixo.com',
    siteName: 'TruVixo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TruVixo™ - AI-Driven Digital Solutions & Branding',
    description: 'Transform your business with AI-driven digital solutions, creative branding, and innovative software development.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/TruVixo 2.svg" as="image" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <CustomCursor />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
