import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const site = (process.env.NEXT_PUBLIC_SITE_URL || 'https://truvixo.com').replace(/\/$/, '')
  return {
    rules: [
      {
        // Allow all crawlers to access all pages
        userAgent: '*',
        allow: '/',
        disallow: [
          // Only disallow admin or private paths if they exist
          // '/admin',
          // '/api',
        ],
        crawlDelay: 0, // No delay for faster crawling
      },
      // Explicitly allow major search engines
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [],
        crawlDelay: 0,
      },
      {
        userAgent: 'Slurp', // Yahoo
        allow: '/',
        disallow: [],
        crawlDelay: 0,
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: `${site}/sitemap.xml`,
    host: site,
  }
}
