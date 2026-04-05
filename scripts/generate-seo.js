const fs = require('fs');
const path = require('path');

/**
 * Static SEO Generator for TruVixo
 * Generates sitemap.xml and robots.txt in the public directory
 */

const baseUrl = 'https://truvixoo.com';
const now = new Date().toISOString();

// 1. Data Definitions (Source: src/app/sitemap.ts)
const mainPages = [
  { url: '', priority: 1.0, changeFrequency: 'daily' },
  { url: '/services', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/technology', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/hire', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/industry', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/our-work', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/ai', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/careers', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/our-approach', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/privacy', priority: 0.5, changeFrequency: 'yearly' },
  { url: '/terms', priority: 0.5, changeFrequency: 'yearly' },
  { url: '/cancellation-refund', priority: 0.5, changeFrequency: 'yearly' },
];

const serviceSlugs = [
  'custom-software-development', 'ai-development-services', 'mobile-app-development',
  'web-application-development', 'saas-product-development', 'enterprise-software-development',
  'api-development-integration', 'cms-development', 'ecommerce-development',
  'legacy-app-modernization', 'maintenance-support', 'machine-learning-model-development',
  'seo', 'ppc', 'smm', 'performance-marketing', 'email-marketing', 'cro'
];

const hireSlugs = [
  'ai-ml-engineers', 'full-stack-developers', 'backend-developers',
  'frontend-developers', 'mobile-developers', 'devops-engineers',
  'qa-engineers', 'ui-ux-designers', 'project-managers', 'dedicated-teams'
];

const industrySlugs = [
  'fintech', 'healthcare', 'retail-ecommerce', 'education',
  'logistics', 'real-estate', 'manufacturing', 'travel-hospitality'
];

const technologySlugs = [
  'frontend', 'backend', 'mobile', 'ai-ml', 'cloud-devops', 'database', 'tools-integrations'
];

const projectSlugs = [
  'nova-logistics', 'brightedge-healthcare-analytics', 'urbanmint-property-platform', 'padmavat-construction-management'
];

// 2. XML Generation Logic
function generateSitemapXml() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add Main Pages
  mainPages.forEach(page => {
    xml += `
  <url>
    <loc>${baseUrl}${page.url}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`;
  });

  // Add Dynamic Pages helper
  const addPages = (slugs, prefix, priority, frequency) => {
    slugs.forEach(slug => {
      xml += `
  <url>
    <loc>${baseUrl}/${prefix}/${slug}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${frequency}</changefreq>
    <priority>${priority.toFixed(2)}</priority>
  </url>`;
    });
  };

  addPages(serviceSlugs, 'services', 0.85, 'weekly');
  addPages(hireSlugs, 'hire', 0.80, 'weekly');
  addPages(industrySlugs, 'industry', 0.85, 'weekly');
  addPages(technologySlugs, 'technology', 0.80, 'weekly');
  addPages(projectSlugs, 'our-work', 0.75, 'monthly');

  xml += `
</urlset>`;
  return xml;
}

// 3. Robots.txt Generation Logic
function generateRobotsTxt() {
  return `User-agent: *
Allow: /
Disallow: /_next/
Disallow: /api/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml
Host: ${baseUrl}
`;
}

// 4. File Writing Logic
const publicDir = path.join(__dirname, '..', 'public');

try {
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write sitemap.xml
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, generateSitemapXml(), 'utf8');
  console.log('✅ Generated public/sitemap.xml');

  // Write robots.txt
  const robotsPath = path.join(publicDir, 'robots.txt');
  fs.writeFileSync(robotsPath, generateRobotsTxt(), 'utf8');
  console.log('✅ Generated public/robots.txt');

} catch (error) {
  console.error('❌ Error generating SEO files:', error.message);
  process.exit(1);
}
