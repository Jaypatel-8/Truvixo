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
      },
      // Explicitly allow major search engines
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'Slurp', // Yahoo
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: `${site}/sitemap.xml`,
  }
}
