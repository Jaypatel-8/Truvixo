# Build Audit Report – TruVixo Website

**Audit focus:** What can cause **build failure** or **increased build time**.

---

## 1. Build failure causes

### 1.1 TypeScript / JSX (already fixed)
- **Fixed:** `src/lib/utils/dataTransformers.ts` contained JSX but had a `.ts` extension. It was renamed to `dataTransformers.tsx`. Without this, some tooling could fail when parsing that file.
- **Current:** Next.js is configured with `typescript.ignoreBuildErrors: true`, so **330 TypeScript errors do not fail the Next build**. They would only fail if you run `npx tsc --noEmit` (e.g. in CI).

### 1.2 Postbuild script
- **Script:** `scripts/copy-htaccess.js` runs after `next build` and copies `.htaccess` (and optionally `robots.txt`, `sitemap.xml`) into `out/`.
- **Risk:** If `next build` fails, `out/` may not exist. The script creates `out` if missing, but it **exits with code 1** if the root `.htaccess` is missing.
- **Status:** Root `.htaccess` and `public/.htaccess` exist. So postbuild should not fail under normal conditions.

### 1.3 Static export (SSG) runtime errors
- With `output: 'export'`, every page is pre-rendered at build time. If **any page throws during render** (e.g. accessing `undefined`), the build will fail.
- **Risk areas (from TypeScript):**
  - **“possibly undefined” (TS18048):** Many places use `data.hero.badge`, `data.services`, `data.whyChooseUs`, etc. without optional chaining or fallbacks. If any of these are ever undefined at runtime, that page will throw during SSG and the build will fail.
  - **Technology / arrays:** `Type 'Technology[] | readonly Technology[] | undefined' is not an array type` and similar – passing `undefined` or a readonly type where an array is expected could cause runtime errors during SSG.
- **Recommendation:** Add defensive checks or default values (e.g. `data?.services ?? []`) in pages that use static data, especially hire and industry pages.

### 1.4 Type mismatch that can cause runtime bugs
- **HomeClient → ServicesSwiper:** `ServicesSwiper` expects `Service[]` with a **`name`** property. `HomeClient` passes objects derived from `ServiceItem[]`, which use **`title`**, not `name`. So at runtime, any code in `ServicesSwiper` that uses `service.name` could be wrong or undefined.
- **Recommendation:** Either align types (e.g. pass `name: service.title` in the mapped list) or change `ServicesSwiper` to accept `title` and use it consistently.

---

## 2. Build time (why the build is slow)

### 2.1 Static export and number of pages
- **Config:** `output: 'export'` (in production) + `trailingSlash: true`.
- **Pages:** ~59 `page.tsx` routes + 4 project slugs from `generateStaticParams` → **63+ static HTML pages** generated at build time.
- **Effect:** Each page is fully rendered during `next build`. More pages and heavier components mean a longer build.

### 2.2 Heavy client components and dynamic imports
- **~158 TSX + 56 TS** files in `src`; many pages use heavy UI (Swiper, modals, forms, animations).
- **Many `dynamic()` imports** (e.g. `ContactFormModal`, `Clientele`, `Technologies`, `FAQDropdown`, `ProcessDiagram`, `StatsCounter`, etc.). Each creates extra chunks and can add work during the build.
- **Effect:** More chunks and more components to compile and render per page increase build time.

### 2.3 Dependencies
- **lucide-react** and **swiper** are used across the app. `optimizePackageImports` for these is enabled, which helps but does not remove the cost of many pages using them.
- **Effect:** Large dependency trees and many imports still contribute to compile time.

### 2.4 No persistent build cache
- If `.next` is often deleted or the build runs in a clean environment, there is no incremental/cache benefit.
- **Recommendation:** Avoid unnecessary `clean` before every build so `.next` cache can be reused.

### 2.5 Memory
- Static export can be memory-heavy (many pages in parallel or in sequence). Low memory can cause **slow builds** or **build failure** (e.g. JavaScript heap out of memory).
- **Recommendation:** Run with higher Node heap when needed:  
  `$env:NODE_OPTIONS="--max-old-space-size=4096"; npm run build` (PowerShell).

---

## 3. Summary table

| Category              | Cause                                                                 | Impact                    | Mitigation |
|-----------------------|-----------------------------------------------------------------------|---------------------------|------------|
| Build failure         | Missing/undefined data in SSG (e.g. `data.hero.badge`, `data.services`) | Page throws → build fails | Add `?.` and `?? []` (or defaults) in page/data usage |
| Build failure         | Postbuild: missing root `.htaccess`                                   | `postbuild` exits 1       | Keep root `.htaccess` (current setup is OK) |
| Build failure         | Out of memory during export                                           | Process crash              | Increase Node heap (e.g. 4096 MB) |
| Build time            | 63+ static pages with `output: 'export'`                              | Long build                 | Accept for full static export or reduce pages |
| Build time            | Many `dynamic()` imports and heavy components                        | More chunks, more work     | Keep only where needed (e.g. below-the-fold modals) |
| Build time            | No/invalid cache (e.g. repeated `clean`)                             | No incremental benefit    | Reuse `.next` when possible |
| TypeScript (optional) | 330 tsc errors (ignored by Next)                                      | No direct build impact    | Fix over time; run `npx tsc --noEmit` in CI |

---

## 4. Recommended next steps (in order)

1. **Avoid build failure:** Add safe fallbacks for static data (e.g. `data?.services ?? []`, `data?.hero?.badge`) in hire and industry client components so SSG never hits undefined.
2. **Fix HomeClient ↔ ServicesSwiper:** Ensure the list passed to `ServicesSwiper` has a `name` field (e.g. map `title` → `name`) or change the component to use `title`.
3. **Build with more memory:** Use `NODE_OPTIONS=--max-old-space-size=4096` when running `npm run build` if the build is slow or crashes.
4. **Optional:** Gradually fix TypeScript errors and run `tsc --noEmit` in CI so type issues don’t regress.

---

**Conclusion:** The main risks for **build failure** are runtime errors during static generation (undefined data) and, in heavy runs, out-of-memory. The main driver of **build time** is the large number of statically exported pages and the size/complexity of the app and its dependencies.
