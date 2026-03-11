# Website Speed Check – TruVixo

## What’s already in place

- **Dynamic imports** – Below-the-fold sections (Technologies, FAQDropdown, ProcessDiagram, Clientele, TestimonialCarousel, ServicesSwiper, ContactSection, modals) are lazy-loaded with `dynamic(..., { ssr: false })` on HomeClient and many page clients. Good for First Contentful Paint (FCP) and Time to Interactive (TTI).
- **Next.js config**
  - `optimizePackageImports: ['lucide-react', 'swiper']` – tree-shakes icons and Swiper.
  - `removeConsole` in production (keeps error/warn).
  - Webpack `splitChunks` with separate vendor, swiper, and lucide chunks (max 244KB) to keep initial JS smaller.
- **Critical path**
  - Preload for hero image (`/TruVixo.png`) and custom fonts (Le Petite Cocho).
  - Preconnect/dns-prefetch for Google Fonts (if used).
  - Inline critical CSS in layout for above-the-fold (nav, headings, hollow-text, buttons).
  - Prefetch for `/contact/` and `/services/` for faster navigation.
- **Images** – Next/Image used in Logo, Footer, Technologies with `priority` where needed and `loading="lazy"` for tech logos.
- **Scroll observer** – Uses `requestIdleCallback` (fallback `requestAnimationFrame`) and a 600ms re-query for lazy content, so it doesn’t block initial paint.

## Potential issues and quick wins

| Area | Finding | Recommendation |
|------|--------|----------------|
| **CSS size** | `globals.css` is ~94 KB. | Consider splitting: one base file (layout, resets, animations) and one “page” file, or use Tailwind purge more aggressively. Remove duplicate or unused animation keyframes if any. |
| **Build** | Production build failed with `EPERM` on `.next/trace`. | Stop any running dev server/process using `.next`, then run `npm run build` again. Use “build:fresh” (clean + build) if needed. |
| **Lighthouse** | Not run (build blocked). | After a successful build, run: `npx lighthouse http://localhost:3000 --view --output=html --output-path=./lighthouse-report.html` (with `npm run start` in another terminal). For live site: `npx lighthouse https://truvixo.com --view`. |
| **Images** | `images.unoptimized: true` (for static export). | On Hostinger, enable image optimization (e.g. WebP, compression) at CDN/server level to improve LCP. |
| **Fonts** | Custom font preload is good; `font-display: optional` in globals may cause brief FOUT on slow networks. | If you prefer no flash, consider `font-display: swap` and ensure preload URLs match exactly. |

## How to measure speed yourself

1. **Production build and local test**
   - Close other terminals/apps that might lock `.next`.
   - Run: `npm run build` then `npm run start`.
   - Open `http://localhost:3000` and run Lighthouse (Chrome DevTools → Lighthouse, or CLI above).

2. **Live site**
   - [PageSpeed Insights](https://pagespeed.web.dev/) – enter `https://truvixo.com` (or your live URL).
   - Chrome DevTools → Network (throttling) and Performance to check TTI and LCP.

## Summary

- **Strengths:** Lazy loading, code splitting, critical CSS and preloads, and non-blocking scroll observer all support good initial load and interaction.
- **Next steps:** Fix the build (release `.next` lock), run Lighthouse once the app runs, then consider reducing `globals.css` size and enabling server-side image optimization where possible.
