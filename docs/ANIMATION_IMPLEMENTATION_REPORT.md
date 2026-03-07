# Animation Implementation Report – Understanding & Plan

This document summarizes what has been understood from your animation requirements, **where** each change will apply, **how** it will behave, and **what style** will be used. Please review and confirm if this matches your expectations before implementation starts.

---

## 1. Navbar

| What | Where | How / Style |
|------|--------|-------------|
| **Dropdown open on hover** | All dropdowns: Services, AI, Hire, Industry, Company | Open dropdown when user hovers over the trigger (or the dropdown area), not only on click. Keep click as fallback for touch/keyboard. Small delay (e.g. 150–200ms) before open/close to avoid accidental flicker. |
| **Pastel dropdown background** | Same dropdown panels | Replace plain white with a subtle pastel background (e.g. very light purple/pink/gray tint) so the menu feels softer and more branded. Example: `bg-[#f5f3ff]` or gradient `from-[#faf5ff] to-[#f0fdf4]`. |
| **Active menu item** | Nav link that matches current page | Visually distinguish the active item: e.g. bold + brand color underline, or light pastel pill background + brand color text, so it’s clear which section/page is current. |

---

## 2. Hero Section (Home Page)

| What | Where | How / Style |
|------|--------|-------------|
| **Sequential entrance** | Hero: heading → subheading → buttons → stats | **Order:** (1) Main heading appears first (existing line-reveal or fade-up). (2) After a short delay (e.g. 300–400ms), subheading animates in (fade-up). (3) Then buttons (fade-up or slide-up with stagger). (4) Then stats row (staggered fade-up or scale-in). Each step starts after the previous one has (or is about to) finish. |
| **Heading, subheading, buttons, stats all animated** | Same hero block | All of these elements get an entrance animation (no static pop-in). Use consistent easing (e.g. existing `--ease-out-expo`) and modest movement (e.g. 20–30px translateY + opacity). |

---

## 3. All Headings, Subheadings, Descriptions (Site-Wide)

| What | Where | How / Style |
|------|--------|-------------|
| **Animate every heading, subheading, description** | Every section on every page | Section titles: scroll-triggered (e.g. `heading-reveal` or `scroll-animate`). Subheadings and body descriptions: scroll-triggered fade-up or fade with small translateY when the section enters the viewport. Reuse one pattern (e.g. `.section-heading`, `.section-desc`) so behaviour is consistent. |

---

## 4. Our Works Section (Home)

| What | Where | How / Style |
|------|--------|-------------|
| **Card entrance** | Project/works cards | Cards animate in on scroll: e.g. slide-in from bottom (fade-up) or from the side (alternate left/right by index). Stagger by card index (e.g. 80–100ms delay between cards). Style: smooth, not bouncy; same easing as rest of site. |

---

## 5. Why Choose Section (Home + All Pages)

| What | Where | How / Style |
|------|--------|-------------|
| **Running border** | Each “Why Choose” card (Proven Experience, Scalable Solution, etc.) | On scroll into view: card gets entrance animation (fade-up or scale-in). **Hover:** a slow, continuous “running” gradient border (e.g. 2–3s loop) using the **card’s icon color** (purple, pink, yellow, green, etc.). Implemented with CSS `linear-gradient` + `background-position` animation or similar, so the border moves around the card. |
| **Scroll animation for everything** | Section title, description, each card (icon, title, description) | Section title and description animate when section enters view. Each card (and inside it: icon, title, description) animates with scroll: e.g. card as container with stagger, and inner elements fade/slide in with small delays so icon → title → description feel sequential. |

---

## 6. Industry Section (Home + All Pages)

| What | Where | How / Style |
|------|--------|-------------|
| **Running border from icon color** | Each industry card | Same idea as Why Choose: scroll-triggered entrance. On hover (or on scroll, as you prefer), a **slow running border** around the card using that card’s **icon color**. Same technique as Why Choose (gradient + animation). |
| **Scroll animation** | Section heading, description, all cards (icon, title, description) | Section text and each card (and their icon, title, description) use scroll-triggered entrance animations (fade-up/slide-in + stagger). |

---

## 7. Icons, Titles, Descriptions in All Sections/Cards (Site-Wide)

| What | Where | How / Style |
|------|--------|-------------|
| **Animate icon, title, description** | Every card in every section (Services, Why Choose, Industry, Process, Values, etc.) | When the card (or row) enters the viewport: **icon** animates first (e.g. scale-in or fade-up), then **title**, then **description** (small delay between each, e.g. 60–100ms). Cards themselves get an entrance (fade-up or slide) and can be staggered within the grid. Same pattern on Home and all inner pages (services, industry, about, etc.). |

---

## 8. Our Achievement Section (Home)

| What | Where | How / Style |
|------|--------|-------------|
| **Count-up from 0** | Stat numbers (e.g. 20+, 7+, 98%, 24/7) | When the section enters the viewport: numbers **count up from 0** to the final value (e.g. 0 → 20, 0 → 7) over ~1–1.5s with easing. Use a small script or React hook (Intersection Observer + requestAnimationFrame or similar) to drive the count. |
| **Entrance + scroll** | Achievement cards (icon, number, label, description) | Cards (and their content) have a scroll-triggered entrance: e.g. fade-up or scale-in, with stagger between cards. Count-up starts when the card is in view (or when the section is in view). |

---

## 9. Our Process Section (Home + All Pages)

| What | Where | How / Style |
|------|--------|-------------|
| **Description animated** | Process section intro text | Section title and description use scroll-triggered animation (e.g. `scroll-animate` / `heading-reveal`). |
| **Process steps: scroll animation** | Each step (icon, title, description) | When the process block enters view: steps animate in sequence (stagger). Inside each step: **icon** → **title** → **description** animate (e.g. fade-up with small delays). Style: smooth, consistent with rest of site. |

---

## 10. Our Values Section (Home)

| What | Where | How / Style |
|------|--------|-------------|
| **Icon, title, description animated** | Each value card | Same pattern as other cards: scroll-triggered entrance for the card; inside the card, **icon** then **title** then **description** animate with small delays. Optional: subtle running border on hover (icon color) to match Why Choose/Industry. |

---

## 11. Example Page: Mobile App Development (Template for All Service/Inner Pages)

### 11.1 Hero Section (Inner Pages)

| What | Where | How / Style |
|------|--------|-------------|
| **First load sequence** | Hero: badge, title, description, cards, buttons | **Order:** (1) Title (and optional badge) animate first (e.g. line-reveal or fade-up). (2) Then description. (3) **In parallel** with or right after description: **one or two preview cards** (e.g. iOS, Android) enter with a slide-in or fade-up (slight stagger between cards). (4) Buttons animate last (fade-up or slide-up). So: title → description → (description + cards in parallel or cards right after) → buttons. |
| **Buttons animated** | Primary and secondary CTA | Buttons get an entrance animation (e.g. fade-up or slide-up) as part of the hero sequence above. |

### 11.2 Clientele Section (All Pages Where It Appears)

| What | Where | How / Style |
|------|--------|-------------|
| **Faster load** | Clientele component | Reduce perceived load time: e.g. load Clientele earlier (less delay), or show a minimal placeholder (fixed height, no heavy content) and load the real content with a quick fade-in. Avoid long “blank” or spinner so the section doesn’t feel slow. |

### 11.3 Services Section (Cards – All Inner Pages)

| What | Where | How / Style |
|------|--------|-------------|
| **Card entrance** | Each service card (icon, title, description) | Cards don’t just “appear”: each card has an **entrance** (e.g. fade-up, slide-in from bottom, or slight scale-in) when the section is in view, with stagger between cards. **Inside each card:** icon, title, description animate (e.g. icon first, then title, then description with 60–80ms delays). Style should feel distinct from the hero cards (e.g. different direction or timing) but still consistent. |

### 11.4 Why Choose Section (Inner Pages)

| What | Where | How / Style |
|------|--------|-------------|
| **Section description first, then cards** | Why Choose block | **Order:** (1) Section heading and description animate first (scroll-triggered). (2) Then cards animate with a **different** scroll effect (e.g. cards slide in from the side or use a different stagger timing) so it doesn’t look identical to the Services section. (3) Inside each card: icon, title, description with entrance + scroll as above. (4) Running border on hover using icon color (same as Home). |

### 11.5 Industry Section (Inner Pages)

| What | Where | How / Style |
|------|--------|-------------|
| **Same as Home** | Industry grid | Running border (icon color) + scroll entrance for section and each card (icon, title, description). |

### 11.6 Process Diagram (Inner Pages)

| What | Where | How / Style |
|------|--------|-------------|
| **Description + process steps animated** | Process section | Section title and description: scroll-triggered. Steps: scroll-triggered stagger; inside each step: icon, title, description animated (same pattern as elsewhere). |

### 11.7 CTA / Get Quote Section (All Pages)

| What | Where | How / Style |
|------|--------|-------------|
| **Entrance animation** | GetQuoteSection (title, description, buttons) | When the CTA section scrolls into view: title, then description, then buttons animate (e.g. fade-up with stagger). Reuse same pattern on every page that shows this section. |

---

## 12. Rollout: “Apply to Every Page”

| Scope | What will be done |
|-------|-------------------|
| **Global (layout / shared CSS)** | Navbar (hover dropdown, pastel background, active state), smooth scroll, and any new utility classes (e.g. running border, count-up, staggered card content) live in shared components and `globals.css`. |
| **Home page** | Hero sequence, Our Works, Why Choose, Industry, Achievement (count-up), Process, Values, and all headings/descriptions as per above. |
| **Template / shared sections** | Clientele (load behaviour), ProcessDiagram, GetQuoteSection, and any shared “section wrapper” get the same animation patterns so they behave the same on every page. |
| **Service pages (e.g. Mobile App Development)** | Hero sequence, Clientele, Services grid, Why Choose, Industry, Process, CTA: all follow the same rules as in §11. |
| **Other pages** | About, Industry, Technology, Hire, Careers, Our Work, Legal, etc.: same patterns applied (hero or page title → section headings → section descriptions → cards with icon/title/description and, where specified, running borders and count-up). |

---

## 13. Technical Approach (Summary)

- **Scroll triggers:** Continue using `IntersectionObserver` and existing classes (e.g. `scroll-animate`, `scroll-stagger`, `heading-reveal`, `section-reveal`). Add new classes where needed (e.g. `card-entrance`, `running-border`, `count-up`).
- **Sequential hero / section timing:** Use CSS `animation-delay` and/or small JS timeouts (e.g. `setTimeout`) keyed to element visibility or mount.
- **Running border:** CSS keyframes animating `background-position` on a gradient border (pseudo-element), with color from the card’s icon (e.g. inline style or CSS variable).
- **Count-up:** Lightweight JS (React hook or small util) with Intersection Observer; animate number from 0 to target over ~1–1.5s with easing.
- **Performance:** Prefer CSS animations; use `will-change` sparingly; respect `prefers-reduced-motion` (disable or simplify animations when set).
- **Consistency:** One set of patterns for “section heading + description” and “card with icon + title + description” so every page feels the same.

---

## 14. What I Need From You

Please confirm:

1. **Navbar:** Hover to open dropdown (with optional click), pastel dropdown background, and active state as described – is this exactly what you want, or do you want click-only on mobile?
2. **Hero (Home):** Order “heading → subheading → buttons → stats” with delays – are the approximate delays (300–400ms between steps) okay, or do you want faster/slower?
3. **Running border:** Should it run **only on hover**, or **also** animate once when the card enters the viewport (and optionally continue on hover)?
4. **Clientele:** Is “faster load” mainly about reducing delay and improving placeholder” enough, or do you want Clientele to be non-lazy (always loaded)?
5. **Count-up:** Should it run **once** when the section is in view, or **every time** the section enters view (e.g. on scroll back up)?
6. **Mobile:** Should all these animations run on mobile as well, or should we reduce/disable some (e.g. running borders, count-up) on small screens for performance?

Once you confirm or adjust these points, implementation can start in the order: Navbar → Home (hero, works, why choose, industry, achievement, process, values) → shared components (Clientele, Process, CTA) → Mobile App Development page as reference → then all other pages.

---

**Summary:**  
Navbar hover + pastel + active state; hero and all sections with clear entrance order and scroll-triggered animations; running borders (icon color) on Why Choose and Industry cards; icon/title/description animation in all cards; count-up for achievements; faster Clientele; and the same rules applied consistently across the whole site.

---

## Grid card: animate single cards (not the whole section)

**Rule:** Each grid card animates **individually** when **that card** enters the viewport. Do not animate the whole section at once (no `scroll-stagger` on the grid).

### How it works

- **Do not** wrap the grid in `scroll-stagger` or put `scroll-stagger-item` on each card.
- **Do** put one of these classes on **each card**:
  - `scroll-animate-scale` – card scales in + fades in (recommended for cards)
  - `scroll-animate` – card fades up
  - `scroll-animate-left` / `scroll-animate-right` – card slides in from side
- The existing `IntersectionObserver` (LayoutScrollObserver / useIntersectionObserver) watches each element with these classes. When a **card** crosses the viewport, that card gets `.animate` and runs its animation. So cards animate one by one as you scroll, not all together.

### Example (Our Works – Home)

```tsx
{/* Grid container: NO scroll-stagger */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map((item, index) => (
    <Link
      key={index}
      href={item.href}
      className="scroll-animate-scale group bg-white rounded-lg p-8 border ... card-hover"
    >
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </Link>
  ))}
</div>
```

### Where it’s applied (example)

- **Home:** Our Works, Why Choose, Industries, Achievements, Expertise, Values, Partners – each card has `scroll-animate-scale`.
- **Other pages:** Use the same pattern: each card in a grid gets `scroll-animate-scale` (or `scroll-animate` / `scroll-animate-left` / `scroll-animate-right`) so each card animates when it enters the viewport.
