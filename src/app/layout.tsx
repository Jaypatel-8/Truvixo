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
  display: 'swap',
  preload: true,
  variable: '--font-inter',
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
        <link rel="preload" href="/fonts/LePetiteCocho-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/LePetiteCocho-Bold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        {/* Route Prefetching - Non-blocking, prioritized */}
        <link rel="prefetch" href="/contact" as="document" />
        <link rel="prefetch" href="/services" as="document" />
        <link rel="prefetch" href="/our-work" as="document" />
        <link rel="prefetch" href="/about" as="document" />
        {/* Prefetch critical CSS chunks */}
        <link rel="prefetch" href="/_next/static/css/app/layout.css" as="style" />
        <link rel="icon" href="/TruVixo logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/TruVixo logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        {/* Critical CSS - Inline for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `html{scroll-behavior:smooth}body{margin:0;font-family:var(--font-inter),system-ui,-apple-system,sans-serif}nav{position:sticky;top:0;z-index:50;background:white;box-shadow:0 1px 3px rgba(0,0,0,0.1)}.hollow-text{font-family:'Le Petite Cocho',sans-serif;-webkit-text-stroke:3px #000;-webkit-text-fill-color:transparent;font-weight:700}h1,h2{font-weight:900;line-height:1.1;color:#111}button{cursor:pointer}a{cursor:pointer}img{max-width:100%;height:auto}`
        }} />
        {/* Aggressively block and suppress 404 errors - runs immediately */}
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              !function() {
                'use strict';
                var shouldBlock = function(url) {
                  if (!url) return false;
                  var s = String(url);
                  return s.indexOf('localhost:3000') !== -1 && (s.endsWith('/') || s === 'http://localhost:3000');
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
                var e = console.error;
                console.error = function() {
                  var m = Array.prototype.slice.call(arguments).join(' ');
                  if (m.indexOf('localhost:3000') !== -1 || (m.indexOf('404') !== -1 && m.indexOf('localhost') !== -1)) return;
                  e.apply(console, arguments);
                };
                var w = console.warn;
                console.warn = function() {
                  var m = Array.prototype.slice.call(arguments).join(' ');
                  if (m.indexOf('localhost:3000') !== -1) return;
                  w.apply(console, arguments);
                };
                window.addEventListener('error', function(e) {
                  if (e.message && e.message.indexOf('localhost:3000') !== -1) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    return false;
                  }
                }, true);
                window.addEventListener('unhandledrejection', function(e) {
                  if (e.reason && String(e.reason).indexOf('localhost:3000') !== -1) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }
                }, true);
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
                "Startup Growth & Funding"
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
      </body>
    </html>
  )
}

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
                var e = console.error;
                console.error = function() {
                  var m = Array.prototype.slice.call(arguments).join(' ');
                  if (m.indexOf('localhost:3000') !== -1 || (m.indexOf('404') !== -1 && m.indexOf('localhost') !== -1)) return;
                  e.apply(console, arguments);
                };
                var w = console.warn;
                console.warn = function() {
                  var m = Array.prototype.slice.call(arguments).join(' ');
                  if (m.indexOf('localhost:3000') !== -1) return;
                  w.apply(console, arguments);
                };
                window.addEventListener('error', function(e) {
                  if (e.message && e.message.indexOf('localhost:3000') !== -1) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    return false;
                  }
                }, true);
                window.addEventListener('unhandledrejection', function(e) {
                  if (e.reason && String(e.reason).indexOf('localhost:3000') !== -1) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }
                }, true);
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
                "Startup Growth & Funding"
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
      </body>
    </html>
  )
}

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
                var e = console.error;
                console.error = function() {
                  var m = Array.prototype.slice.call(arguments).join(' ');
                  if (m.indexOf('localhost:3000') !== -1 || (m.indexOf('404') !== -1 && m.indexOf('localhost') !== -1)) return;
                  e.apply(console, arguments);
                };
                var w = console.warn;
                console.warn = function() {
                  var m = Array.prototype.slice.call(arguments).join(' ');
                  if (m.indexOf('localhost:3000') !== -1) return;
                  w.apply(console, arguments);
                };
                window.addEventListener('error', function(e) {
                  if (e.message && e.message.indexOf('localhost:3000') !== -1) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    return false;
                  }
                }, true);
                window.addEventListener('unhandledrejection', function(e) {
                  if (e.reason && String(e.reason).indexOf('localhost:3000') !== -1) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }
                }, true);
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
                "Startup Growth & Funding"
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
      </body>
    </html>
  )
}
