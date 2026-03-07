# TruVixo Animation Audit & Premium Animation Strategy

**Purpose:** Report which parts of the site have animations vs. which don’t, plus a full-site premium animation plan with pros/cons and speed-safe practices.

---

## Part 1: Current State — What Has Animation vs. What Doesn’t

### 1.1 Animation system in use

- **Mechanism:** CSS scroll animations driven by **Intersection Observer** (via `useIntersectionObserver` hook or inline observer in `PageTemplate`).
- **Classes:** `.scroll-animate`, `.scroll-animate-left`, `.scroll-animate-right`, `.scroll-animate-scale` (and sometimes `.scroll-animate-rotate`).
- **Behavior:** Elements start visible; when they enter the viewport (with `rootMargin` / threshold), the `.animate` class is added and CSS keyframes run: `fadeInUp`, `slideInLeft`, `slideInRight`, `scaleIn`.
- **Performance:** Uses `requestIdleCallback` or `requestAnimationFrame`, passive scroll, and optional unobserve-after-animate. No GSAP/Lenis/Framer in the current codebase.

---

### 1.2 Areas that HAVE scroll / entrance animation

| Area | What’s animated | How |
|------|------------------|-----|
| **HeroSection** | Badge, title, description, CTAs, preview cards | `scroll-animate` on main block |
| **GetQuoteSection** | Heading, description, CTAs | `scroll-animate` |
| **ServicesGrid** | Section heading (title + subtitle) | `scroll-animate`; cards use hover only (no scroll animation) |
| **WhyChooseSection** | Section heading only | `scroll-animate`; item cards hover only |
| **FAQDropdown** | Section title + each FAQ card | `scroll-animate` (title), `scroll-animate-scale` (cards) |
| **Technologies** | Section title + tech cards | `scroll-animate` (heading), `scroll-animate-scale` (cards) |
| **GoToTop** | Button entrance | CSS `animate-fade-in` when visible |
| **InfiniteCarousel** | Continuous horizontal scroll | `requestAnimationFrame` (no Intersection Observer) |
| **Service/Industry/Technology sub-pages** | Hero, section headings, content blocks, grids | `scroll-animate` / `-left` / `-right` / `-scale` + `useIntersectionObserver` in each Client |
| **PageTemplate** | All sections that use scroll-animate classes | Its own inline IntersectionObserver |
| **Home, About, Contact, Our Work, Careers** | Sections using scroll-animate classes | `useIntersectionObserver` in respective Client |
| **Contact page** | Sections with scroll-animate classes | `useIntersectionObserver` in contact page client |

---

### 1.3 Areas that do NOT have scroll / entrance animation

| Area | Notes |
|------|------|
| **Navbar** | No entrance animation; only scroll-based background/shadow and dropdowns. No scroll-animate. |
| **Footer** | Static; no reveal or stagger. |
| **ProcessDiagram** | Title block and step cards have **no** `scroll-animate` classes — pure static + hover. |
| **NewsletterCTA** | No scroll reveal; static layout. |
| **ContactSection** (on contact page) | No scroll-animate on heading or form container. |
| **ContactFormModal** | Modal open/close only; no entrance animation on content. |
| **Legal pages (Privacy, Terms, Cancellation-refund)** | No client observer; hero and content are static. |
| **Technology landing** (`/technology`) | No `useIntersectionObserver`; no scroll-animate classes on hero or grid. |
| **Hire landing** (`/hire` + HirePageClient) | No observer; no scroll-animate. |
| **ServicesGrid / WhyChooseSection cards** | Only hover (translate/scale/border); no scroll-triggered entrance. |
| **Clientele** | No scroll-animate (e.g. logo strip). |
| **TestimonialCarousel** | Carousel behavior only; no section reveal. |
| **Error / Not-found** | No scroll animation. |

---

### 1.4 Summary table

| Category | Has scroll/entrance animation? |
|----------|-------------------------------|
| Hero sections (most pages) | Yes |
| Get Quote section | Yes |
| Section headings (Services, Why Choose, FAQ, Technologies) | Yes |
| Service/Why Choose **cards** | No (hover only) |
| ProcessDiagram | No |
| NewsletterCTA | No |
| ContactSection (contact page) | No |
| Navbar | No |
| Footer | No |
| Legal pages | No |
| Technology landing | No |
| Hire landing | No |
| GoToTop button | Yes (fade-in when visible) |

---

## Part 2: Premium animation ideas (full-site, speed-safe)

Below is a **single, coherent set of animation ideas** that cover the whole site and stay within “no negative impact on speed” by using CSS + Intersection Observer only (no heavy JS animation libs unless you add them later with care).

---

### 2.1 Global / layout

| Idea | What | Pros | Cons | Speed impact |
|------|------|------|------|--------------|
| **Navbar subtle entrance** | On load: nav slides down and/or opacity 0→1 (e.g. 200–300 ms). | Feels polished; frames the page. | Slightly more layout shift if not reserved height. | **None** if CSS-only + single observer or no observer. |
| **Footer reveal** | Footer content (columns, links) fade-in or short slide-up when in view. | Premium feel; consistent with rest of site. | One more observer target. | **Low** — one Intersection Observer + CSS. |
| **Scroll progress** | Thin top bar showing scroll % (e.g. brand color). | Modern, clear affordance. | Extra element + scroll listener. | **Low** if throttle + transform/opacity only. |

---

### 2.2 Hero & above-the-fold

| Idea | What | Pros | Cons | Speed impact |
|------|------|------|------|--------------|
| **Staggered hero** | Badge → title → hollow text → description → CTAs with 50–80 ms stagger. | Premium, editorial feel. | Slightly longer “settle” time. | **None** if CSS-only and no blocking JS. |
| **Hero background subtle motion** | Blur orbs / gradients with very slow movement (e.g. 20–30 s). | Depth, not distracting. | Can be overdone. | **Low** if CSS only (transform/opacity). |
| **CTA micro-interaction** | Primary CTA: light scale on hover; optional subtle “magnetic” pull (needs a bit of JS). | Feels interactive. | Magnetic = extra JS. | **None** for scale; **low** for magnetic if lightweight. |

---

### 2.3 Sections (reusable)

| Idea | What | Pros | Cons | Speed impact |
|------|------|------|------|--------------|
| **Section heading reveal** | Same as now; optionally standardize one “section heading” animation (e.g. short fade-in-up). | Consistency. | — | **None**. |
| **Card stagger** | Service / Why Choose / Process cards: same scroll-animate class but with `animation-delay` by index (e.g. 50 ms steps). | Clear hierarchy, premium. | Many delayed animations. | **Low** if CSS-only and not too many at once. |
| **ProcessDiagram steps** | Add `scroll-animate` or `scroll-animate-scale` to title + each step; optional connector line draw (CSS or small SVG). | Matches rest of site; more narrative. | Slightly more DOM observed. | **Low**. |
| **NewsletterCTA** | Wrap in scroll-animate; optional short scale or fade when in view. | Consistency with other CTAs. | — | **None**. |
| **ContactSection** | Heading + form container with scroll-animate (e.g. fade-in-up). | Aligns with Get Quote / other sections. | — | **None**. |

---

### 2.4 Lists, grids, and content

| Idea | What | Pros | Cons | Speed impact |
|------|------|------|------|--------------|
| **FAQ expand** | Keep current expand/collapse; add 200–300 ms height/opacity transition (CSS). | Smoother, more premium. | — | **None**. |
| **Legal pages** | Hero + first paragraph with scroll-animate (needs client wrapper + observer). | Same language as rest of site. | Need to add client + observer on legal routes. | **Low**. |
| **Technology / Hire landing** | Add `useIntersectionObserver` + scroll-animate on hero and grid cards. | Same experience as service/industry pages. | — | **Low**. |

---

### 2.5 Micro-interactions (buttons & links)

| Idea | What | Pros | Cons | Speed impact |
|------|------|------|------|--------------|
| **Button active state** | `transform: scale(0.98)` on `:active` for primary/secondary buttons. | Tactile, premium. | — | **None**. |
| **Link hover underline** | Nav and footer links: underline slide-in or opacity on hover (CSS). | Clear, polished. | — | **None**. |
| **Card hover** | Keep current hover; ensure transition is one short duration (e.g. 200–300 ms). | Already there; just standardize. | — | **None**. |

---

### 2.6 GoToTop & modals

| Idea | What | Pros | Cons | Speed impact |
|------|------|------|------|--------------|
| **GoToTop** | Keep fade-in; optional short scale (e.g. 0.95 → 1) on appear. | Slightly more polished. | — | **None**. |
| **ContactFormModal** | Modal overlay + content: fade + slight scale (e.g. 0.98 → 1) on open (CSS or minimal JS). | Feels intentional. | — | **None**. |

---

## Part 3: Implementation priorities (speed-safe order)

1. **No extra JS, no layout shift**  
   - Button `:active` scale.  
   - Nav/footer link hover underline.  
   - FAQ expand transition (CSS).  
   - Optional hero background slow motion (CSS).

2. **Reuse existing observer**  
   - ProcessDiagram: add scroll-animate to title + steps.  
   - NewsletterCTA: wrap in scroll-animate.  
   - ContactSection: scroll-animate on heading + form.  
   - Technology & Hire landing: add observer + scroll-animate to hero and cards.

3. **One-off additions**  
   - Navbar entrance (CSS + optional single observer).  
   - Footer reveal (one observer + CSS).  
   - Legal pages: client wrapper + observer + scroll-animate on hero/content.

4. **Optional later**  
   - Scroll progress bar (throttled scroll + CSS).  
   - Staggered hero (CSS delays).  
   - Card stagger (animation-delay by index).  
   - Modal open animation.  
   - CTA magnetic effect (lightweight JS).

---

## Part 4: What to avoid (for speed and consistency)

- **Heavy JS animation libraries** (e.g. full GSAP, full Framer) on initial load — use only if you lazy-load and scope to below-the-fold or specific components.  
- **Animating too many elements at once** — e.g. 20+ cards animating on one viewport entry; prefer stagger or “animate container only.”  
- **Expensive properties** — avoid animating `box-shadow` or `filter` on large areas; prefer `opacity` and `transform`.  
- **No `will-change` on everything** — keep it only on elements that actually animate (as you already do when `.animate` is added).  
- **Skipping `prefers-reduced-motion`** — respect `@media (prefers-reduced-motion: reduce)` and disable or shorten animations for users who prefer it.

---

## Part 5: Reduced motion

In `globals.css` (or equivalent), ensure:

- Scroll-animate keyframes are disabled or shortened when `prefers-reduced-motion: reduce`.  
- Stagger delays are removed or set to 0.  
- Optional: a single “reduce motion” class that you set from JS based on `window.matchMedia('(prefers-reduced-motion: reduce)')` to turn off non-essential motion site-wide.

---

## Summary

- **Has animation:** Hero, Get Quote, section headings, FAQ/Technologies blocks, service/industry/tech sub-pages (via observer), GoToTop, carousel.  
- **No animation:** Navbar, Footer, ProcessDiagram, NewsletterCTA, ContactSection, legal pages, Technology/Hire landing, Service/Why Choose cards (only hover).  

Premium direction: **reuse CSS + Intersection Observer everywhere**, add scroll reveal to ProcessDiagram, NewsletterCTA, ContactSection, Technology/Hire and legal pages; add light layout-level polish (navbar, footer, scroll progress); keep micro-interactions CSS-only. That keeps the site feeling premium without affecting Core Web Vitals or Speed Index.
