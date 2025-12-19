import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'

// Lazy load components for better performance
// CustomCursor removed - using default browser cursor
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
// ContactPopup removed - no longer showing on page load
// const ContactPopup = dynamic(() => import('@/components/ContactPopup'), {
//   ssr: false,
// })
// PageLoader removed - pages now load directly without loader
// const PageLoader = dynamic(() => import('@/components/PageLoader'), {
//   ssr: false,
// })
// PageTransition temporarily removed to fix error component issue
// const PageTransition = dynamic(() => import('@/components/PageTransition'), {
//   ssr: false,
// })

const inter = Inter({ 
  subsets: ['latin'],
  display: 'optional', // Changed from 'swap' to 'optional' to prevent CLS
  preload: true,
  variable: '--font-inter',
  adjustFontFallback: true, // Better fallback handling
})

export const metadata: Metadata = {
  title: {
    default: 'TruVixo™ - Software & Digital Marketing Agency',
    template: '%s | TruVixo™'
  },
  description: 'Top software development & digital marketing agency in India, Dubai, USA, Australia. AI development, web apps, mobile apps, SEO, PPC services. Get expert solutions.',
  keywords: [
    // Location-based keywords
    'best software development company in india',
    'best digital marketing agency in india',
    'best software development company worldwide',
    'best digital marketing agency worldwide',
    'best software development company in dubai',
    'best digital marketing agency in dubai',
    'best software development company in usa',
    'best digital marketing agency in usa',
    'best software development company in australia',
    'best digital marketing agency in australia',
    'best software development company worldwide',
    'best digital marketing agency worldwide',
    // Service-based keywords
    'software development and marketing agency',
    'AI development company',
    'web development company',
    'mobile app development company',
    'SEO services company',
    'PPC services company',
    'custom software development',
    'enterprise software development',
    'SaaS development company',
    // Technology-specific keywords - Frontend
    'React development company',
    'Next.js development services',
    'Vue.js development company',
    'Angular development services',
    'TypeScript development company',
    'frontend development services',
    'React.js developers',
    'Next.js experts',
    'Vue.js developers',
    'Angular developers',
    // Technology-specific keywords - Backend
    'Node.js development company',
    'Python development services',
    'Django development company',
    'FastAPI development services',
    'backend development services',
    'Node.js developers',
    'Python developers',
    'Django developers',
    'API development services',
    'microservices development',
    // Technology-specific keywords - Mobile
    'React Native development company',
    'Flutter development services',
    'iOS development company',
    'Android development services',
    'mobile app developers',
    'React Native developers',
    'Flutter developers',
    'iOS developers',
    'Android developers',
    'cross-platform development',
    // Technology-specific keywords - AI/ML
    'TensorFlow development company',
    'PyTorch development services',
    'machine learning development',
    'AI solutions company',
    'LLM integration services',
    'OpenAI development',
    'AI developers',
    'machine learning developers',
    'TensorFlow developers',
    'PyTorch developers',
    // Technology-specific keywords - Cloud/DevOps
    'AWS development services',
    'Azure development company',
    'Docker development services',
    'Kubernetes development',
    'cloud development company',
    'DevOps services company',
    'AWS developers',
    'Azure developers',
    'Docker experts',
    'Kubernetes experts',
    // Technology-specific keywords - Database
    'MongoDB development services',
    'PostgreSQL development company',
    'MySQL development services',
    'database development company',
    'MongoDB developers',
    'PostgreSQL developers',
    'database optimization',
    'database design services',
    'ecommerce development company',
    // Technology-based keywords
    'React development company',
    'Next.js development company',
    'Node.js development company',
    'Python development company',
    'AI ML development company',
    'cloud solutions company',
    // General keywords
    'hire developers',
    'web application development',
    'generative AI services',
    'software engineering',
    'dedicated development teams',
    'digital transformation company',
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
    title: 'TruVixo™ - Software & Digital Marketing Agency',
    description: 'Top software development & digital marketing agency in India, Dubai, USA, Australia. AI development, web apps, mobile apps, SEO, PPC services.',
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
    title: 'TruVixo™ - Software & Digital Marketing Agency',
    description: 'Top software development & digital marketing agency in India, Dubai, USA, Australia. AI development, web apps, mobile apps, SEO, PPC services.',
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
        {/* Critical Resources - Preload for faster LCP */}
        <link rel="preload" href="/TruVixo.png" as="image" type="image/png" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Font Preloading - Critical for FOUT prevention */}
        <link rel="preload" href="/fonts/LePetiteCocho-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" fetchPriority="high" />
        <link rel="preload" href="/fonts/LePetiteCocho-Bold.otf" as="font" type="font/otf" crossOrigin="anonymous" fetchPriority="high" />
        {/* Route Prefetching - Non-blocking, prioritized */}
        <link rel="prefetch" href="/contact" as="document" />
        <link rel="prefetch" href="/services" as="document" />
        <link rel="prefetch" href="/our-work" as="document" />
        <link rel="prefetch" href="/about" as="document" />
        {/* Favicon configuration - multiple formats to prevent 404 */}
        <link rel="icon" href="/TruVixo logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/TruVixo logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/TruVixo logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/TruVixo logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/TruVixo logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        {/* Aggressively block and suppress 404 errors - MUST run FIRST before anything else */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function() {
                'use strict';
                var shouldBlock = function(url) {
                  if (!url) return false;
                  var s = String(url);
                  // Block favicon.ico, root path requests, and Next.js static asset 404s in dev
                  // BUT allow legitimate CSS/JS files to load
                  return (s.indexOf('localhost:3000') !== -1 && (
                    (s.endsWith('/') && s.indexOf('?') === -1) || // Block root path requests (but not with query params)
                    s === 'http://localhost:3000' || 
                    s === 'http://localhost:3000/' ||
                    s.indexOf('/favicon.ico') !== -1 ||
                    // Only block versioned assets that 404 during hot reload, not all static assets
                    (s.indexOf('/_next/static/') !== -1 && s.indexOf('?v=') !== -1 && (
                      s.indexOf('app/layout.css?v=') !== -1 || 
                      s.indexOf('app/page.css?v=') !== -1 ||
                      s.indexOf('main-app.js?v=') !== -1 ||
                      s.indexOf('app-pages-internals.js') !== -1 ||
                      s.indexOf('app/page.js') !== -1 ||
                      s.indexOf('app/error.js') !== -1 ||
                      s.indexOf('app/not-found.js') !== -1 ||
                      s.indexOf('app/global-error.js') !== -1
                    )) ||
                    (s.indexOf('/_next/webpack-hmr') !== -1) || // Block WebSocket HMR connection failures
                    (s.indexOf('webpack.js?v=') !== -1) // Block webpack.js versioned requests that cause content length mismatches
                  ));
                };
                if (window.XMLHttpRequest) {
                  var O = window.XMLHttpRequest;
                  window.XMLHttpRequest = function() {
                    var x = new O();
                    var o = x.open;
                    x.open = function(m, u) {
                      if (shouldBlock(u)) {
                        x._b = true;
                        x.status = 200;
                        x.readyState = 4;
                        return;
                      }
                      return o.apply(this, arguments);
                    };
                    var s = x.send;
                    x.send = function() {
                      if (x._b) {
                        if (x.onload) try { x.onload(); } catch(e) {}
                        if (x.onreadystatechange) try { x.onreadystatechange(); } catch(e) {}
                        return;
                      }
                      return s.apply(this, arguments);
                    };
                    return x;
                  };
                }
                if (window.fetch) {
                  var f = window.fetch;
                  window.fetch = function() {
                    var u = arguments[0];
                    if (shouldBlock(u)) {
                      return Promise.resolve(new Response('', { status: 200 }));
                    }
                    return f.apply(this, arguments).catch(function() {
                      if (shouldBlock(u)) return Promise.resolve(new Response('', { status: 200 }));
                      throw arguments[0];
                    });
                  };
                }
                // Block image requests for favicon
                var originalImage = window.Image;
                window.Image = function() {
                  var img = new originalImage();
                  var originalSrc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
                  Object.defineProperty(img, 'src', {
                    get: function() { return this._src || ''; },
                    set: function(value) {
                      if (shouldBlock(value)) {
                        this._src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                        return;
                      }
                      this._src = value;
                      if (originalSrc && originalSrc.set) originalSrc.set.call(this, value);
                    }
                  });
                  return img;
                };
                var e = console.error;
                console.error = function() {
                  var m = Array.prototype.slice.call(arguments).join(' ');
                  // Suppress errors for favicon, root path, Next.js static assets, CSS files, and chunks
                  if (m.indexOf('localhost:3000') !== -1 || 
                      m.indexOf('/favicon.ico') !== -1 || 
                      m.indexOf('/_next/static/') !== -1 ||
                      m.indexOf('/_next/static/chunks/') !== -1 ||
                      m.indexOf('app/layout.css') !== -1 ||
                      m.indexOf('app/page.css') !== -1 ||
                      m.indexOf('main-app.js') !== -1 ||
                      m.indexOf('app-pages-internals.js') !== -1 ||
                      m.indexOf('app/page.js') !== -1 ||
                      m.indexOf('app/error.js') !== -1 ||
                      m.indexOf('app/not-found.js') !== -1 ||
                      m.indexOf('app/global-error.js') !== -1 ||
                      m.indexOf('webpack.js') !== -1 ||
                      (m.indexOf('404') !== -1 && m.indexOf('localhost') !== -1) ||
                      m.indexOf('ERR_ABORTED') !== -1 ||
                      m.indexOf('net::ERR_ABORTED') !== -1 ||
                      m.indexOf('ERR_CONTENT_LENGTH_MISMATCH') !== -1 ||
                      m.indexOf('net::ERR_CONTENT_LENGTH_MISMATCH') !== -1 ||
                      m.indexOf('preloadStylesheet') !== -1 || // Suppress React's internal CSS preload errors
                      (m.indexOf('.css') !== -1 && (m.indexOf('404') !== -1 || m.indexOf('ERR_ABORTED') !== -1 || m.indexOf('ERR_CONTENT_LENGTH_MISMATCH') !== -1)) || // Suppress CSS errors
                      (m.indexOf('.js') !== -1 && m.indexOf('/_next/static/') !== -1 && (m.indexOf('404') !== -1 || m.indexOf('ERR_ABORTED') !== -1 || m.indexOf('ERR_CONTENT_LENGTH_MISMATCH') !== -1)) // Suppress JS chunk errors
                  ) return;
                  e.apply(console, arguments);
                };
                var w = console.warn;
                console.warn = function() {
                  var m = Array.prototype.slice.call(arguments).join(' ');
                  // Suppress warnings for favicon, root path, font preload, and Next.js chunks
                  if (m.indexOf('localhost:3000') !== -1 || 
                      m.indexOf('/favicon.ico') !== -1 || 
                      m.indexOf('preloaded using link preload but not used') !== -1 ||
                      m.indexOf('/fonts/') !== -1 ||
                      m.indexOf('/_next/static/chunks/') !== -1 || // Suppress chunk warnings
                      m.indexOf('WebSocket connection to') !== -1 && m.indexOf('failed') !== -1 // Suppress WebSocket HMR connection failures
                  ) return;
                  w.apply(console, arguments);
                };
                window.addEventListener('error', function(e) {
                  var shouldSuppress = false;
                  if (e.message) {
                    shouldSuppress = (
                      e.message.indexOf('localhost:3000') !== -1 || 
                      e.message.indexOf('/favicon.ico') !== -1 ||
                      e.message.indexOf('/_next/static/') !== -1 ||
                      e.message.indexOf('/_next/static/chunks/') !== -1 ||
                      e.message.indexOf('webpack.js') !== -1 ||
                      (e.message.indexOf('.css') !== -1 && (e.message.indexOf('404') !== -1 || e.message.indexOf('ERR_ABORTED') !== -1 || e.message.indexOf('ERR_CONTENT_LENGTH_MISMATCH') !== -1)) ||
                      (e.message.indexOf('.js') !== -1 && e.message.indexOf('/_next/static/') !== -1 && (e.message.indexOf('404') !== -1 || e.message.indexOf('ERR_ABORTED') !== -1 || e.message.indexOf('ERR_CONTENT_LENGTH_MISMATCH') !== -1)) ||
                      e.message.indexOf('ERR_ABORTED') !== -1 ||
                      e.message.indexOf('ERR_CONTENT_LENGTH_MISMATCH') !== -1 ||
                      e.message.indexOf('preloadStylesheet') !== -1 // Suppress React's internal CSS preload errors
                    );
                  }
                  // Also check for errors on link elements specifically
                  if (e.target && e.target.tagName === 'LINK' && e.target.href && shouldBlock(e.target.href)) {
                    shouldSuppress = true;
                  }
                  if (shouldSuppress) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    return false;
                  }
                }, true);
                window.addEventListener('unhandledrejection', function(e) {
                  if (e.reason && (
                    String(e.reason).indexOf('localhost:3000') !== -1 || 
                    String(e.reason).indexOf('/favicon.ico') !== -1 ||
                    String(e.reason).indexOf('/_next/static/') !== -1 ||
                    (String(e.reason).indexOf('.css') !== -1) || // Suppress unhandled rejections for CSS files
                    (String(e.reason).indexOf('.js') !== -1 && String(e.reason).indexOf('/_next/static/') !== -1) // Suppress unhandled rejections for JS chunks
                  )) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }
                }, true);
                
                // Intercept link prefetch requests
                var originalCreateElement = document.createElement;
                document.createElement = function(tagName) {
                  var element = originalCreateElement.call(document, tagName);
                  if (tagName.toLowerCase() === 'link') {
                    var originalSetAttribute = element.setAttribute;
                    element.setAttribute = function(name, value) {
                      if (name === 'href' && shouldBlock(value)) {
                        return;
                      }
                      return originalSetAttribute.call(this, name, value);
                    };
                  }
                  return element;
                };
              }();
            `,
          }}
        />
        <script
          type="application/ld+json"
          defer
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
                "addressCountry": "Global"
              },
              "areaServed": [
                {
                  "@type": "Place",
                  "name": "Worldwide"
                },
                {
                  "@type": "Country",
                  "name": "United Arab Emirates"
                },
                {
                  "@type": "City",
                  "name": "Dubai"
                },
                {
                  "@type": "Country",
                  "name": "United States"
                },
                {
                  "@type": "Country",
                  "name": "Australia"
                },
                {
                  "@type": "Place",
                  "name": "Worldwide"
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "23.0225",
                  "longitude": "72.5714"
                }
              },
              "serviceType": [
                "Branding & Identity",
                "Digital Marketing",
                "UI/UX Design",
                "Web & App Development",
                "IT Consulting",
                "AI & Automation",
                "Cloud & DevOps",
                "Startup Growth & Funding",
                "Frontend Development",
                "Backend Development",
                "Mobile App Development",
                "AI & Machine Learning Development",
                "Database Development",
                "API Development",
                "Microservices Development"
              ],
              "knowsAbout": [
                "React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript",
                "Node.js", "Python", "Django", "FastAPI", "NestJS", "Express.js",
                "React Native", "Flutter", "iOS", "Android", "Swift", "Kotlin",
                "TensorFlow", "PyTorch", "Machine Learning", "AI Development", "LLM Integration",
                "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform",
                "MongoDB", "PostgreSQL", "MySQL", "Redis", "Database Design",
                "API Development", "REST APIs", "GraphQL", "Microservices",
                "Frontend Development", "Backend Development", "Full Stack Development",
                "Cloud Development", "DevOps", "CI/CD", "Infrastructure as Code"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          defer
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
        {/* PageTransition temporarily removed */}
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <GoToTop />
        {/* ContactPopup removed - no longer showing on page load */}
        {/* Global Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'TruVixo',
              url: 'https://truvixo.com',
              logo: 'https://truvixo.com/TruVixo.png',
              description: 'Leading software development and digital marketing agency providing AI development, web development, mobile app development, React, Node.js, Python, TensorFlow, AWS, Docker, and technology services worldwide.',
              foundingDate: '2021',
              areaServed: { '@type': 'Place', name: 'Worldwide' },
              knowsAbout: [
                'Software Development', 'AI Development', 'Machine Learning', 'Web Development',
                'Mobile App Development', 'React', 'Next.js', 'Node.js', 'Python', 'Django',
                'TensorFlow', 'PyTorch', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'MongoDB',
                'PostgreSQL', 'React Native', 'Flutter', 'TypeScript', 'Vue.js', 'Angular',
                'Frontend Development', 'Backend Development', 'Cloud Development', 'DevOps',
                'Database Development', 'API Development', 'Microservices'
              ],
              sameAs: [
                'https://www.linkedin.com/company/truvixo',
                'https://twitter.com/truvixo',
                'https://www.facebook.com/truvixo'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-63543-26412',
                contactType: 'Customer Service',
                email: 'sales@truvixo.com',
                areaServed: 'Worldwide',
                availableLanguage: ['English']
              }
            })
          }}
        />
      </body>
    </html>
  )
}

