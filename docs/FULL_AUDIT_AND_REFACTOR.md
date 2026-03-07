# Full Audit & Refactor — TruVixo

## STEP 1 — Page Blink / Double Load: Root Cause

### Root cause

1. **React StrictMode double mount (development)**  
   `next.config.js` has `reactStrictMode: true` (and it’s duplicated). In dev, React mounts → unmounts → remounts components to detect side effects. Any `useEffect` that sets state (e.g. `setIsMounted(true)`) runs twice. That can make content appear → disappear → appear and feel like a “blink”.

2. **`isMounted` conditional rendering**  
   Many pages use:
   - `const [isMounted, setIsMounted] = useState(false)`
   - `useEffect(() => setIsMounted(true), [])`
   - `{isMounted && <Clientele />}` (and similar)
   First paint: `isMounted === false` → Clientele (and similar blocks) are **not in the DOM**. After the first effect run: `isMounted === true` → they mount and layout changes. That causes:
   - Layout shift (CLS)
   - A visible “second load” when the extra content appears

3. **Scroll-animate initial state**  
   `.scroll-animate` (and variants) start with `opacity: 0` and `transform`. Content is only revealed when Intersection Observer adds `.animate`. So:
   - First paint: hero/sections are in DOM but invisible.
   - When the observer runs, they animate in.
   Combined with (1) and (2), the sequence “empty → content → (possible StrictMode flicker) → content” is perceived as a blink or double load.

4. **No layout reservation for client-only content**  
   Where content is rendered only after `isMounted`, its space isn’t reserved. When it appears, the page reflows and CLS increases.

### Affected areas

- **Layout / global:** `LayoutScrollObserver` runs on every page; no blink by itself, but it interacts with scroll-animate and conditional content.
- **Pages using `isMounted` + conditional Clientele (and similar):**  
  HomeClient, AboutClient, OurWorkClient, PageTemplate, all service/industry/tech Client components, CareersClient, OurApproachClient, ProjectPageClient, etc.
- **Scroll-animate:** `globals.css` — initial `opacity: 0` for `.scroll-animate*`; hero and sections use these.

### Fixes applied

- **Above-the-fold visibility:** Hero (and first screen) no longer start hidden. A class `.above-fold` is used so hero is visible on first paint; scroll-animate still used for below-the-fold.
- **Reserve space, avoid conditional mount for layout:** Clientele (and similar) are rendered inside a container with a stable `min-height` so layout is reserved; visibility is controlled with opacity/visibility after mount instead of not rendering.
- **Single observer:** Rely on `LayoutScrollObserver` in the root layout for scroll-animate; page-level observers can stay for page-specific options but use the same selectors and avoid duplicate logic.
- **StrictMode:** Left enabled (recommended). The fix is to avoid layout-affecting conditional render based on `isMounted`; use reserved space + opacity/visibility instead.

---

## STEP 2 — Layout Shift (CLS)

### Findings

- **Images:** Next.js `Image` is used with explicit `width`/`height` in Logo, Footer, Clientele, Technologies — good.
- **Fonts:** `font-display: optional` for Le Petite Cocho; Inter via Next.js with `display: 'swap'`. Optional can cause FOUT/CLS if font fails to load; swap is generally better for text stability.
- **Dynamic content:** `isMounted`-based rendering of Clientele and similar sections causes CLS when they mount.
- **Scroll-animate:** Starting at `opacity: 0` doesn’t reserve “visible” space; with `transform` the layout is reserved but the perceived “pop” can feel like a shift. Above-the-fold content should not start hidden.

### Fixes applied

- Reserve space for client-only sections (e.g. Clientele) with a wrapper `min-height` and always render (no `isMounted &&` that adds/removes DOM).
- Above-the-fold hero: use `.above-fold` so it’s visible immediately (no opacity: 0).
- Font: consider `font-display: swap` for Le Petite Cocho if optional causes visible reflow; keep Inter as-is.
- Ensure all `next/image` usages keep explicit dimensions and, where needed, `sizes` for responsive images.

**Target:** CLS < 0.1.

---

## STEP 3 — Performance

- **Bundle:** Next.js already uses dynamic imports for heavy components (e.g. Clientele, modals, carousels); `optimizePackageImports` for lucide-react and swiper is set.
- **Observer:** Single `LayoutScrollObserver`; `requestIdleCallback` (with timeout) for init; `unobserveAfterIntersect` to reduce work.
- **Animations:** Use only `opacity` and `transform` (GPU-friendly); avoid animating width/height/margins.
- **Images:** Lazy loading via Next.js Image; ensure below-the-fold images are not `priority` unless needed for LCP.

---

## STEP 4–5 — Section design & global animation system

See **Animation system** below: components are designed to match section structure (hero, cards, features, process, CTA) and hierarchy.

---

## STEP 6 — Card hover border animation

- Cards use a hover border animation (running line + subtle glow), plus lift (translateY) and scale (1.02) and shadow.
- Implemented via CSS (pseudo-element or gradient border) and classes; no layout properties animated.

---

## STEP 7–10 — Section-based scroll animations & micro-interactions

- **Hero:** Visible immediately (above-fold); optional writing/slide for headline; CTA fade.
- **Sections:** Staggered card reveal; slide-in left/right for features; process steps reveal; CTA magnetic-style hover (CSS-only where possible).
- **Headings:** Slide-up or writing effect; subheading and body fade with stagger.
- **Stagger:** Card delays 0s, 0.1s, 0.2s, 0.3s via `animation-delay` or data attributes.
- **Micro-interactions:** Button hover scale, link underline, icon motion — all via CSS/transform.

---

## STEP 11 — Animation safety

- Do **not** animate: width, height, margins, padding, border-width (when it changes layout).
- Do animate: opacity, transform (translate, scale, rotate).
- Use `will-change: transform, opacity` only on animating elements and remove after animation.
- Respect `prefers-reduced-motion: reduce` (already in globals.css).

---

## STEP 12 — Scalable animation architecture

- **Global:** One scroll observer in layout (`LayoutScrollObserver`); one set of CSS classes (`.scroll-animate`, `.scroll-animate-left`, `.scroll-animate-right`, `.scroll-animate-scale`, `.above-fold`, `.card-hover`, `.card-hover-border`).
- **Reusable components:** `src/components/animations/` — `RevealAnimation`, `SlideInLeft`, `SlideInRight`, `ScaleInAnimation`, `StaggerContainer`, `HeadingAnimation`, `CardHoverAnimation`. Use these or apply the same class names directly.
- **Section-specific:** Hero uses `.above-fold` so it’s visible on first paint; cards use `.scroll-animate-scale` + `animationDelay` + `.card-hover` + `.card-hover-border`; features use `.scroll-animate-left` / `.scroll-animate-right`; process uses `.scroll-animate` / `.scroll-animate-scale`; CTA uses `.scroll-animate`.
- **67+ pages:** Same layout and observer; page-level clients only pass content. Apply reserved-space pattern for Clientele: `<div className="mt-12 min-h-[100px]" style={{ visibility: isMounted ? 'visible' : 'hidden' }}><Clientele /></div>` to avoid CLS.

### Code examples

**Hero (above-fold, no blink):**
```tsx
<div className="scroll-animate above-fold">
  <h1>...</h1>
</div>
```

**Card with stagger and hover:**
```tsx
<div
  className="scroll-animate-scale card-hover card-hover-border"
  style={{ animationDelay: `${index * 0.06}s` }}
>
  ...
</div>
```

**Reserved space for client-only block (fix CLS):**
```tsx
<div className="mt-12 min-h-[100px]" style={{ visibility: isMounted ? 'visible' : 'hidden' }}>
  <Clientele />
</div>
```
