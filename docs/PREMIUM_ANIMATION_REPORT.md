# Premium Animation Report – Whole Website

This document defines **premium, smooth entrance animations** for **every element** across the TruVixo website. Every section, heading, description, card, icon, button, and CTA is covered so implementation is consistent site-wide.

---

## 1. Premium animation standards

### 1.1 Design principles

- **Entrance only:** Elements animate **once** when they enter the viewport (or on load for above-the-fold). No repeated or distracting motion.
- **Smooth:** Use easing `--ease-out-expo` (cubic-bezier(0.16, 1, 0.3, 1)) for all entrances. Duration 0.6–0.75s for most elements.
- **Single-card trigger:** In grids, **each card** is observed individually and animates when **that card** enters the viewport (not the whole section at once).
- **Accessibility:** All animations respect `prefers-reduced-motion: reduce` (show immediately, no motion).

### 1.2 Global CSS variables (already in use)

| Variable | Value | Use |
|----------|--------|-----|
| `--ease-out-expo` | cubic-bezier(0.16, 1, 0.3, 1) | Primary entrance easing |
| `--ease-out-smooth` | cubic-bezier(0.25, 0.46, 0.45, 0.94) | Softer transitions |
| `--scroll-duration` | 0.7s | Default animation duration |

### 1.3 Animation classes (entrance only, viewport-triggered)

| Class | Behavior | Use for |
|-------|----------|---------|
| `scroll-animate` | Fade up (opacity + translateY 32px → 0) | Blocks of text, section intros |
| `scroll-animate-scale` | Scale in (0.94 → 1) + fade | **Cards** (grid items, feature cards) |
| `scroll-animate-left` | Slide in from left + fade | Alternate content blocks |
| `scroll-animate-right` | Slide in from right + fade | Alternate content blocks |
| `heading-reveal` | Line-by-line slide up (with `.heading-reveal-line` + `span`) | Section titles (H1/H2) |
| `section-reveal` | Whole section wrapper fades up | Section container (optional) |

**Grid cards:** Use `scroll-animate-scale` on **each card**. Do **not** use `scroll-stagger` on the grid so each card animates when it enters the viewport.

### 1.4 Card inner entrance

| Class | Behavior | Use for |
|-------|----------|---------|
| `card-inner-reveal` | Wrapper inside card. When card gets `.animate`, children reveal in sequence. | Wrap icon + title + description. |
| `card-icon` | Entrance: scale in (first). | Icon container. |
| `card-title` | Entrance: slide from left (second). | Card title. |
| `card-desc` | Entrance: slide from right (third). | Card description. |

### 1.5 Section description (different entrance from heading)

| Class | Behavior | Use for |
|-------|----------|---------|
| `section-desc-reveal` | Slides in from **right** + fade when in viewport (different from heading line-reveal). | Section description `<p>` below section heading on every page. |

### 1.6 Paragraph entrance (site-wide)

| Class / context | Behavior | Use for |
|-----------------|----------|---------|
| **Inside `.section-reveal`** | All `<p>` (except `.section-desc-reveal`) fade in + slide up when section gets `.animate`. | Automatic for section content. |
| `p-reveal` | Standalone paragraph entrance (fade + slide up) when in viewport. | Hero or any `<p>` outside sections. |

### 1.7 Button entrance

| Class | Behavior | Use for |
|-------|----------|---------|
| `btn-entrance` | Container for CTA. When in view (or on load for hero), icon and text animate in. | Primary/secondary CTAs. |
| `btn-icon` | Icon animates first (scale + fade). | Icon inside button. |
| `btn-text` | Label animates after icon (fade + slide up). | Button label / placeholder text. |

### 1.8 Card grid direction and hover

| Class | Behavior | Use for |
|-------|----------|---------|
| `card-grid-direction` | On the **grid wrapper**: odd cards slide in from **left**, even from **right**, every 3rd card **bounce**-in. | Any grid of cards (services, why choose, industries). |
| `card-hover-dark` / `scroll-animate-scale.card-hover` | On hover: **dark border** (`#1f2937`) + subtle shadow. | Every card in every section, site-wide. |

---

## 2. Global layout (every page)

| Element | Location | Animation class / behavior |
|---------|----------|----------------------------|
| **Navbar** | Layout | `nav-entrance`: subtle slide down + fade on load (0.4s). |
| **Nav links** | Navbar | Hover: color transition. Active item: distinct style (e.g. underline or pill). |
| **Dropdown panels** | Navbar | Open/close with short transition; pastel background. |
| **Footer** | Layout | No entrance animation (always visible at bottom). Optional: `scroll-animate` on footer wrapper when it enters view. |
| **Go to top button** | Layout | Fade in when scroll position &gt; 400px; no entrance on page load. |
| **Modals (Contact, etc.)** | Layout | Modal overlay + content: fade + scale in (existing or 0.3s ease-out). |

---

## 3. Home page (`/`)

| Section | Element | Animation class | Notes |
|---------|---------|-----------------|-------|
| **Hero** | Main heading (2 lines) | `heading-reveal` + `heading-reveal-line` | Trigger `.animate` on load (~80ms delay). |
| **Hero** | Subheading / description | Part of hero block or `scroll-animate` (above-fold, so visible immediately). | — |
| **Hero** | CTA buttons | `scroll-animate` or sequential delay after heading. | — |
| **Hero** | Stats row (4 items) | Each stat: `scroll-animate-scale` (single-card) or small stagger. | — |
| **Hero** | Background blobs | `hero-blob`: slow float (12s). | — |
| **Clientele** | Section wrapper | `section-reveal` | — |
| **Clientele** | Title (if any) | `scroll-animate` | — |
| **Our Services** | Section wrapper | `section-reveal` | — |
| **Our Services** | Section heading | `heading-reveal` (1 line) | — |
| **Our Services** | Section description | `scroll-animate` | — |
| **Our Services** | CTA button | `scroll-animate` | — |
| **Our Services** | ServicesSwiper container | `scroll-animate` or no (swiper has its own UX). | — |
| **Our Works** | Section wrapper | `section-reveal` | — |
| **Our Works** | Section heading | `heading-reveal` | — |
| **Our Works** | Section description | `scroll-animate` | — |
| **Our Works** | Each project card | `scroll-animate-scale` | **Single-card:** each card when it enters view. |
| **Technologies** | Section wrapper | `section-reveal` | In Technologies.tsx. |
| **Technologies** | Section heading | `scroll-animate` | — |
| **Technologies** | Filter buttons | `scroll-animate` | — |
| **Technologies** | Each tech card | `scroll-animate-scale` | **Single-card.** |
| **Why Choose TruVixo** | Section wrapper | `section-reveal` | — |
| **Why Choose TruVixo** | Section heading | `heading-reveal` | — |
| **Why Choose TruVixo** | Section description | `scroll-animate` | — |
| **Why Choose TruVixo** | Each card | `scroll-animate-scale` | **Single-card.** |
| **Industries We Serve** | Section wrapper | `section-reveal` | — |
| **Industries We Serve** | Section heading | `scroll-animate` | — |
| **Industries We Serve** | Section description | `scroll-animate` | — |
| **Industries We Serve** | Each industry card | `scroll-animate-scale` | **Single-card.** |
| **Our Achievements** | Section wrapper | `section-reveal` | — |
| **Our Achievements** | Section heading | `heading-reveal` | — |
| **Our Achievements** | Section description | `scroll-animate` | — |
| **Our Achievements** | Each stat card | `scroll-animate-scale` | **Single-card.** (Future: count-up from 0.) |
| **Our Expertise** | Section wrapper | `section-reveal` | — |
| **Our Expertise** | Section heading | `heading-reveal` | — |
| **Our Expertise** | Section description | `scroll-animate` | — |
| **Our Expertise** | Each expertise card | `scroll-animate-scale` | **Single-card.** |
| **Our Process** | Section wrapper | `section-reveal` | In ProcessDiagram. |
| **Our Process** | Section heading | `scroll-animate` | — |
| **Our Process** | Section description | `scroll-animate` | — |
| **Our Process** | Each step (desktop/mobile) | `scroll-animate-scale` or `scroll-stagger` (steps as items). | Smooth entrance. |
| **Testimonials** | Section wrapper | `section-reveal` | — |
| **Testimonials** | Section heading | `heading-reveal` | — |
| **Testimonials** | Section description | `scroll-animate` | — |
| **Testimonials** | Carousel | No per-card entrance (carousel motion is the interaction). | — |
| **Trusted Partners** | Section wrapper | `section-reveal` | — |
| **Trusted Partners** | Section heading | `heading-reveal` | — |
| **Trusted Partners** | Section description | `scroll-animate` | — |
| **Trusted Partners** | Each partner card | `scroll-animate-scale` | **Single-card.** |
| **Our Values** | Section wrapper | `section-reveal` | — |
| **Our Values** | Section heading | `heading-reveal` | — |
| **Our Values** | Section description | `scroll-animate` | — |
| **Our Values** | Each value card | `scroll-animate-scale` | **Single-card.** |
| **FAQs** | Section wrapper | `section-reveal` | — |
| **FAQs** | Section heading | `heading-reveal` | — |
| **FAQs** | Section description | `scroll-animate` | — |
| **FAQs** | Each FAQ item | `scroll-animate-scale` (optional) or container only. | — |
| **SEO Location** | Section | `section-reveal` or `scroll-animate` | — |
| **Newsletter CTA** | Section / card | `scroll-animate` | — |
| **Contact Section** | Section | `scroll-animate` or `section-reveal` | — |

---

## 4. Service pages (e.g. `/services/mobile-app-development`, all `/services/*`)

| Section | Element | Animation class | Notes |
|---------|---------|-----------------|-------|
| **Hero** | Badge | `scroll-animate` | — |
| **Hero** | Main heading (e.g. 2 lines) | `heading-reveal` + lines | Trigger on load. |
| **Hero** | Description | `scroll-animate` (or sequential delay). | — |
| **Hero** | Preview cards (e.g. iOS, Android) | Each card: `scroll-animate-scale` | **Single-card;** can stagger delay on load. |
| **Hero** | CTA buttons | `scroll-animate` (or sequential). | — |
| **Clientele** | Wrapper | `section-reveal` | — |
| **Services (grid)** | Section heading | `heading-reveal` or `scroll-animate` | — |
| **Services (grid)** | Section description | `scroll-animate` | — |
| **Services (grid)** | Each service card | `scroll-animate-scale` | **Single-card.** Icon/title/description inside need no extra class (card entrance is enough). |
| **Why Choose** | Section heading | `heading-reveal` | — |
| **Why Choose** | Section description | `scroll-animate` | — |
| **Why Choose** | Each card | `scroll-animate-scale` | **Single-card.** |
| **Industries** | Section heading | `scroll-animate` | — |
| **Industries** | Section description | `scroll-animate` | — |
| **Industries** | Each industry card | `scroll-animate-scale` | **Single-card.** |
| **Technologies** | (As per Technologies component) | `section-reveal`; each tech card `scroll-animate-scale` | — |
| **Process Diagram** | Title + subtitle | `scroll-animate` | — |
| **Process Diagram** | Each step | `scroll-animate-scale` or stagger | — |
| **FAQs** | Section heading + description | `scroll-animate` / `heading-reveal` | — |
| **FAQs** | Each FAQ card | `scroll-animate-scale` (optional) | — |
| **Contact Section** | Wrapper | `scroll-animate` or `section-reveal` | — |
| **Get Quote / CTA** | Section wrapper | `section-reveal` | — |
| **Get Quote / CTA** | Title | `heading-reveal` or `scroll-animate` | — |
| **Get Quote / CTA** | Description | `scroll-animate` | — |
| **Get Quote / CTA** | Buttons | `scroll-animate` | — |
| **Related Links** | Section heading | `scroll-animate` | — |
| **Related Links** | Each link card | `scroll-animate-scale` | **Single-card.** |

---

## 5. Industry pages (e.g. `/industry/fintech`, all `/industry/*`)

Same pattern as **Service pages**:

- **Hero:** heading (`heading-reveal`), description, buttons, optional preview cards (`scroll-animate-scale` each).
- **Clientele:** `section-reveal`.
- **All section headings:** `heading-reveal` or `scroll-animate`.
- **All section descriptions:** `scroll-animate`.
- **Every grid card (services, why choose, industries, stats, etc.):** `scroll-animate-scale` on **each card** (single-card entrance).
- **Process, FAQs, CTA, Related:** same as service pages.

---

## 6. Hire pages (e.g. `/hire/frontend-developers`, all `/hire/*`)

Same as **Service pages**:

- Hero, Clientele, sections, all cards use the same classes as in §4.
- **Hire-specific blocks** (e.g. role list, benefits grid): each card/item `scroll-animate-scale`.

---

## 7. Technology pages (e.g. `/technology/mobile`, `/technology/ai-ml`)

Same as **Service pages**:

- Hero, sections, cards: same rules. Technology grid cards: `scroll-animate-scale` per card.

---

## 8. About page (`/about`)

| Section | Element | Animation class |
|---------|---------|-----------------|
| Hero | Title, description, buttons | `heading-reveal`; `scroll-animate` for rest. |
| Content sections | Headings | `heading-reveal` or `scroll-animate` |
| Content sections | Descriptions / paragraphs | `scroll-animate` |
| Content sections | Image blocks | `scroll-animate-left` / `scroll-animate-right` or `scroll-animate-scale` |
| Any card grid | Each card | `scroll-animate-scale` |

---

## 9. Our Work listing (`/our-work`)

| Section | Element | Animation class |
|---------|---------|-----------------|
| Hero | As per page | `heading-reveal`, `scroll-animate` |
| Project grid | Each project card | `scroll-animate-scale` |

---

## 10. Project case study (`/our-work/[slug]`)

| Section | Element | Animation class |
|---------|---------|-----------------|
| Hero | Title, description | `heading-reveal`, `scroll-animate` |
| Content blocks | Headings | `scroll-animate` |
| Content blocks | Body text / images | `scroll-animate` or `scroll-animate-left`/`right` |
| Feature cards / highlights | Each card | `scroll-animate-scale` |

---

## 11. Careers (`/careers`)

Same as a content page: hero (`heading-reveal`, `scroll-animate`), then every section heading, description, and card grid with the same rules; each card `scroll-animate-scale`.

---

## 12. Our Approach (`/our-approach`)

Same as About/Service: hero, section headings, descriptions, and all cards use the same premium entrance classes; each card `scroll-animate-scale`.

---

## 13. Contact page (`/contact`)

| Section | Element | Animation class |
|---------|---------|-----------------|
| Hero / title | Heading | `heading-reveal` or `scroll-animate` |
| Form / info blocks | Container or each block | `section-reveal` or `scroll-animate` / `scroll-animate-scale` |

---

## 14. Legal pages (Privacy, Terms, Cancellation, etc.)

| Element | Animation class |
|---------|-----------------|
| Page title | `scroll-animate` or `heading-reveal` |
| Content blocks / paragraphs | `scroll-animate` (or LegalPageWrapper uses observer for `.scroll-animate` etc.) |

---

## 15. Shared components (used on multiple pages)

| Component | Element | Animation class |
|-----------|---------|-----------------|
| **HeroSection** | Title lines | `heading-reveal` + `heading-reveal-line` |
| **HeroSection** | Description, CTAs, preview cards | `scroll-animate`; each preview card `scroll-animate-scale` |
| **GetQuoteSection** | Wrapper | `section-reveal` or `scroll-animate` |
| **GetQuoteSection** | Title, description, buttons | `scroll-animate` or `heading-reveal` for title |
| **ProcessDiagram** | Title, subtitle | `scroll-animate` |
| **ProcessDiagram** | Each step | `scroll-animate-scale` (or scroll-stagger for steps) |
| **Technologies** | Section wrapper | `section-reveal` |
| **Technologies** | Heading, filter, each tech card | `scroll-animate`; each card `scroll-animate-scale` |
| **Clientele** | Section | `section-reveal` |
| **FAQDropdown** | Section heading, description | `scroll-animate` |
| **FAQDropdown** | Each FAQ item | `scroll-animate-scale` (optional) |
| **NewsletterCTA** | Block | `scroll-animate` |
| **ContactSection** | Block | `scroll-animate` or `section-reveal` |
| **RelatedLinks** | Heading | `scroll-animate` |
| **RelatedLinks** | Each link card | `scroll-animate-scale` |
| **PageTemplate** | Inner content sections | Per section: heading `scroll-animate`, cards `scroll-animate-scale` |

---

## 16. Summary table: class by element type

| Element type | Class | Trigger |
|--------------|--------|---------|
| Section container (optional) | `section-reveal` | Viewport |
| Section title (H1/H2) | `heading-reveal` (+ `.heading-reveal-line` + `span`) | Viewport (or load for hero) |
| Section description / paragraph | `scroll-animate` | Viewport |
| Any card in a grid | `scroll-animate-scale` | Viewport (per card) |
| Text block / CTA block | `scroll-animate` | Viewport |
| Alternate left/right blocks | `scroll-animate-left` / `scroll-animate-right` | Viewport |
| Buttons (in hero/section) | `scroll-animate` (or sequential delay) | Viewport / load |
| Navbar | `nav-entrance` | Load |

---

## 17. Implementation checklist (by area)

- [ ] **globals.css:** Keep `--ease-out-expo`, `--scroll-duration`; all entrance keyframes use them. `prefers-reduced-motion` resets.
- [ ] **LayoutScrollObserver / useIntersectionObserver:** Selectors include `.scroll-animate`, `.scroll-animate-left`, `.scroll-animate-right`, `.scroll-animate-scale`, `.section-reveal`, `.heading-reveal`.
- [ ] **Home:** Every section and card uses the classes from §3.
- [ ] **Service pages:** Hero + Clientele + Services + Why Choose + Industries + Process + FAQs + CTA + Related: each uses the classes from §4.
- [ ] **Industry / Hire / Technology pages:** Same as Service pages (§5–§7).
- [ ] **About, Our Work, Project, Careers, Our Approach, Contact:** Sections and cards as in §8–§13.
- [x] **Legal:** LegalPageWrapper uses full selectors (incl. section-reveal, heading-reveal).
- [x] **Shared components:** GetQuoteSection (section-reveal), FAQDropdown (per-item scroll-animate-scale), RelatedLinks (section-reveal, scroll-animate, scroll-animate-scale per link), ContactSection (section-reveal). ProcessDiagram, Technologies, Clientele already use section-reveal / scroll-animate-scale.
- [x] **Grids:** No `scroll-stagger` on card grids; each card has `scroll-animate-scale` for single-card entrance.
- [x] **Observer:** LayoutScrollObserver and page-level hooks use full selectors: `.scroll-animate`, `.scroll-animate-left`, `.scroll-animate-right`, `.scroll-animate-scale`, `.scroll-stagger`, `.section-reveal`, `.heading-reveal` (and `.scroll-animate-rotate` where needed).

---

This report is the single reference for **premium, smooth entrance animations** for **every part of the website**. Apply the same classes and rules consistently so every page feels smooth and aligned.
