import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'TruVixo™ - AI-Driven Digital Marketing & Software Development',
  description: 'Transform your business with TruVixo™ - a new age digital marketing, branding, and software development company. We use AI-driven technology to help businesses recognize and grow their brand.',
  keywords: 'digital marketing, branding, software development, AI solutions, cloud computing, DevOps, IT consulting',
  authors: [{ name: 'TruVixo Team' }],
  creator: 'TruVixo',
  publisher: 'TruVixo',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://truvixo.com',
    title: 'TruVixo™ - AI-Driven Digital Marketing & Software Development',
    description: 'Transform your business with AI-driven technology for digital marketing, branding, and software development.',
    siteName: 'TruVixo',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TruVixo - AI-Driven Digital Marketing & Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TruVixo™ - AI-Driven Digital Marketing & Software Development',
    description: 'Transform your business with AI-driven technology for digital marketing, branding, and software development.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#8B5CF6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
