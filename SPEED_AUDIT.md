# Website Speed Audit – TruVixo

## How to measure speed

1. **Production build** (required for realistic metrics):
   ```bash
   npm run build
   npm run start
   ```
   Then open `http://localhost:3000` and run Lighthouse (Chrome DevTools → Lighthouse tab → Analyze page load).

2. **Lighthouse CLI** (optional):
   ```bash
   npx lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html --view
   ```
   Run this after `npm run start` so the app is served locally.

3. **PageSpeed Insights**:  
   After deploy, use https://pagespeed.web.dev/ with your live URL.

---

## Current setup (already helping speed)

| Item | Status |
|------|--------|
| **Next.js** | 14.x with SWC minification |
| **Static export** | `output: 'export'` – pre-rendered HTML, no Node at runtime |
| **Code splitting** | `optimizePackageImports: ['lucide-react', 'swiper']` – smaller chunks |
| **Webpack** | Custom splitChunks for vendors, swiper, lucide |
| **Console stripping** | `removeConsole` in production (keeps error/warn) |
| **Fonts** | Inter via `next/font` (optimized), Le Petite Cocho preloaded in `<head>` |
| **Preconnect** | fonts.googleapis.com / fonts.gstatic.com for Inter |
| **Prefetch** | `/contact/` and `/services/` in layout |
| **Critical CSS** | Small inline block in layout for above-the-fold |
| **Lazy loading** | LayoutScrollObserver, GoToTop, many below-fold sections use `dynamic()` with `ssr: false` |
| **Images** | Technologies grid uses `loading="lazy"`; layout preloads hero image |

---

## Findings and recommendations

### 1. **Large CSS (~94 KB – `src/app/globals.css`)**
- **Impact**: Parsing and applying a large stylesheet can delay First Contentful Paint (FCP).
- **Cause**: Single global file with many utilities and ~100 `@keyframes` (likely duplicates from copy-paste or legacy blocks).
- **Recommendations**:
  - Audit and remove duplicate `@keyframes` (e.g. same name defined multiple times).
  - Move rarely used animations or page-specific styles into separate CSS modules or lazy-loaded chunks.
  - Rely on Tailwind’s purge in production so only used classes are kept (already the case; the size is mostly custom CSS and keyframes).

### 2. **LCP (Largest Contentful Paint)**
- Hero section is text + blobs (no big image). Preload of `/TruVixo.png` in layout helps if that image is used above the fold elsewhere.
- Ensure the **first visible hero content** (heading/text) is not delayed by:
  - Large sync scripts (you use deferred/inline for the small blocker script).
  - Fonts: Inter and Le Petite Cocho are preloaded; `display: 'swap'` on Inter avoids invisible text.

### 3. **Third-party and scripts**
- No heavy third-party scripts found in the audit; EmailJS and similar are likely loaded only when needed (e.g. contact).
- Keep any analytics or chat widgets lazy-loaded or deferred after first paint.

### 4. **Images**
- `next.config.js` has `images: { unoptimized: true }` for static export, so image optimization runs at build time where supported; for static export, ensure images are already optimized (WebP/AVIF, sensible dimensions).
- Use `loading="lazy"` and `fetchPriority="high"` only for the single LCP image (e.g. hero image if you add one).

### 5. **JavaScript**
- Many pages use `dynamic()` for below-fold components (Technologies, FAQ, ContactSection, ProcessDiagram, etc.) – good.
- Home page and template pages load a reasonable set of chunks; `optimizePackageImports` keeps lucide and swiper from bloating the main bundle.

---

## Quick wins already in place

- Layout observer and GoToTop are dynamically imported with `ssr: false`.
- Critical resources (hero image, fonts) are preloaded/preconnected.
- Route prefetch for `/contact/` and `/services/`.
- Production build strips console (except error/warn).
- Tailwind purges unused utility classes in production.

---

## Suggested next steps

1. Run **Lighthouse** (DevTools or CLI) on a production build and note Performance, FCP, LCP, TBT, CLS.
2. **Reduce `globals.css`** by deduplicating `@keyframes` and moving non-critical animations to lazy-loaded or page-specific CSS.
3. If you add a **hero image**, give it `priority` (Next Image) or `fetchpriority="high"` and keep it optimized.
4. On **Hostinger**, enable **Brotli/Gzip** and **caching** for static assets (`.js`, `.css`, images) to improve repeat-visit speed.

---

*Generated from codebase audit. Re-run Lighthouse on your deployed URL for current scores.*
