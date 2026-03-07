# Card Animation Audit – TruVixo Website

**Target pattern (site design):** Cards should use **entrance animation** + **hover border/scale** + **inner content reveal**:
- **Grid:** `card-grid-direction` (stagger children)
- **Card:** `scroll-animate-scale card-hover card-hover-dark` + `style={{ ['--card-accent']: color }}` + `relative overflow-hidden`
- **Inner wrapper:** `card-inner-reveal`
- **Title:** `card-title` | **Description:** `card-desc` | **Icon wrapper:** `card-icon` (where applicable)

For gradient “Use Cases” cards: same idea — add `scroll-animate-scale card-hover card-hover-dark`, `card-inner-reveal`, and `card-grid-direction` on the grid.

---

## 1. Benefits section – cards have NO animation

These pages use plain `bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all` (no `scroll-animate-scale`, no `card-hover`, no `card-inner-reveal`).

| # | File | Section | Notes |
|---|------|---------|--------|
| 1 | `src/app/services/seo/SEOClient.tsx` | Benefits | 3-col grid, benefit cards |
| 2 | `src/app/services/api-development-integration/APIClient.tsx` | Benefits | 3-col grid |
| 3 | `src/app/services/cms-development/CMSClient.tsx` | Benefits | 3-col grid |
| 4 | `src/app/services/cro/CROClient.tsx` | Benefits | 3-col grid |
| 5 | `src/app/services/ecommerce-development/EcommerceClient.tsx` | Benefits | 3-col grid (line ~339) |
| 6 | `src/app/services/smm/SMMClient.tsx` | Benefits | 3-col grid |
| 7 | `src/app/services/email-marketing/EmailMarketingClient.tsx` | Benefits | 3-col grid |
| 8 | `src/app/services/legacy-app-modernization/LegacyClient.tsx` | Benefits | 3-col grid |
| 9 | `src/app/services/maintenance-support/MaintenanceClient.tsx` | Benefits | 3-col grid |
| 10 | `src/app/services/performance-marketing/PerformanceMarketingClient.tsx` | Benefits | 3-col grid |
| 11 | `src/app/services/machine-learning-model-development/MLClient.tsx` | Benefits | 3-col grid |
| 12 | `src/app/industry/education/EducationClient.tsx` | Benefits | 3-col grid |
| 13 | `src/app/industry/healthcare/HealthcareClient.tsx` | Benefits | 3-col grid |
| 14 | `src/app/industry/fintech/FintechClient.tsx` | Benefits | 3-col grid |
| 15 | `src/app/industry/logistics/LogisticsClient.tsx` | Benefits | 3-col grid |
| 16 | `src/app/industry/manufacturing/ManufacturingClient.tsx` | Benefits | 3-col grid |
| 17 | `src/app/industry/travel-hospitality/TravelHospitalityClient.tsx` | Benefits | 3-col grid |
| 18 | `src/app/industry/retail-ecommerce/RetailEcommerceClient.tsx` | Benefits | 3-col grid |
| 19 | `src/app/industry/real-estate/RealEstateClient.tsx` | Benefits | 3-col grid |
| 20 | `src/app/our-work/OurWorkClient.tsx` | Benefits | 3-col grid |
| 21 | `src/app/our-work/[slug]/ProjectPageClient.tsx` | Benefits | 3 cards (static content) |
| 22 | `src/app/careers/CareersClient.tsx` | Benefits | Single card or small grid |

---

## 2. Use Cases section – gradient cards have NO animation

These use `bg-gradient-to-br ${useCase.gradient} rounded-xl p-8 border` **without** `scroll-animate-scale`, `card-hover`, or `card-inner-reveal`. **SaaS** already has the full pattern.

| # | File | Notes |
|---|------|--------|
| 1 | `src/app/services/seo/SEOClient.tsx` | Use Cases cards |
| 2 | `src/app/services/api-development-integration/APIClient.tsx` | Use Cases cards |
| 3 | `src/app/services/cms-development/CMSClient.tsx` | Use Cases cards |
| 4 | `src/app/services/cro/CROClient.tsx` | Use Cases cards |
| 5 | `src/app/services/ecommerce-development/EcommerceClient.tsx` | Use Cases cards |
| 6 | `src/app/services/legacy-app-modernization/LegacyClient.tsx` | Use Cases cards |
| 7 | `src/app/services/maintenance-support/MaintenanceClient.tsx` | Use Cases cards |
| 8 | `src/app/services/smm/SMMClient.tsx` | Use Cases cards |
| 9 | `src/app/services/performance-marketing/PerformanceMarketingClient.tsx` | Use Cases cards |
| 10 | `src/app/services/email-marketing/EmailMarketingClient.tsx` | Use Cases cards |
| 11 | `src/app/services/ppc/PPCClient.tsx` | Use Cases cards |
| 12 | `src/app/services/machine-learning-model-development/MLClient.tsx` | Use Cases cards |
| 13 | `src/app/industry/fintech/FintechClient.tsx` | Use Cases cards |
| 14 | `src/app/industry/retail-ecommerce/RetailEcommerceClient.tsx` | Use Cases cards |
| 15 | `src/app/services/web-application-development/WebApplicationClient.tsx` | Use Cases cards |

---

## 3. Other card sections – NO or partial animation

| # | File | Section | Current state |
|---|------|---------|----------------|
| 1 | `src/app/about/AboutClient.tsx` | Hero “Why choose” 4 cards (line ~129) | `scroll-animate-scale` only; no card-hover, no card-inner-reveal |
| 2 | `src/app/about/AboutClient.tsx` | “What We Do” (focus areas) | No scroll-animate-scale, no card-hover, no card-inner-reveal |
| 3 | `src/app/about/AboutClient.tsx` | “Why Choose TruVixo” (whyChooseUs) | No scroll-animate-scale, no card-hover, no card-inner-reveal |
| 4 | `src/app/about/AboutClient.tsx` | Founder cards (2) | scroll-animate on wrapper only; cards themselves no scroll-animate-scale/card-hover |
| 5 | `src/app/services/custom-software-development/CustomSoftwareClient.tsx` | Use Cases (6 static cards) | Plain `border border-gray-200 hover:shadow-lg` |
| 6 | `src/app/services/ai-development-services/AIDevelopmentClient.tsx` | Use Cases (6 static cards) | Same plain style |
| 7 | `src/app/services/enterprise-software-development/EnterpriseSoftwareClient.tsx` | Use Cases (6 static cards) | Same plain style |
| 8 | `src/app/our-approach/OurApproachClient.tsx` | Two card sections (lines ~240, ~274) | Plain `border border-gray-200 hover:shadow-lg` |
| 9 | `src/app/contact/page.tsx` | FAQ cards | Has `scroll-animate-scale` only; no card-hover, no card-inner-reveal |
| 10 | `src/app/hire/HirePageClient.tsx` | Role/option cards | Has `scroll-animate-scale`; no card-hover, no card-inner-reveal |

---

## 4. Technology pages – entrance only (no card-hover / inner-reveal)

All technology pages already use **scroll-animate-scale** on cards but **do not** use `card-hover`, `card-hover-dark`, or `card-inner-reveal`. For full consistency with the rest of the site, these can be upgraded.

| # | File |
|---|------|
| 1 | `src/app/technology/ai-ml/AIMLClient.tsx` |
| 2 | `src/app/technology/database/DatabaseClient.tsx` |
| 3 | `src/app/technology/tools-integrations/ToolsIntegrationsClient.tsx` |
| 4 | `src/app/technology/mobile/MobileClient.tsx` |
| 5 | `src/app/technology/cloud-devops/CloudDevOpsClient.tsx` |
| 6 | `src/app/technology/backend/BackendClient.tsx` |
| 7 | `src/app/technology/frontend/page.tsx` (if client) |

---

## 5. Shared components

| # | Component | Current state |
|---|-----------|----------------|
| 1 | `src/components/sections/WhyChooseSection.tsx` | Has `scroll-animate-scale card-hover card-hover-border`; no `card-inner-reveal` or `card-grid-direction`. Optional: add inner-reveal + grid stagger. |
| 2 | `src/components/RelatedLinks.tsx` | Has `scroll-animate-scale`; no card-hover, no card-inner-reveal. |

---

## 6. Pages that already use the full pattern (reference)

- **SaaS:** Benefits + Use Cases (scroll-animate-scale, card-hover, card-hover-dark, card-inner-reveal, card-grid-direction, --card-accent).
- **SEO / PPC / Custom Software / Ecommerce / Mobile App:** Only their “services grid” and “industries” and some “why choose” blocks use the full pattern; their **Benefits** and **Use Cases** sections in the same files are still in the “no animation” list above where applicable.

---

## Summary counts

- **Benefits sections missing full card animation:** 22 files (services, industries, our-work, project, careers).
- **Use Cases sections missing full card animation:** 15 files (all gradient use-case cards except SaaS).
- **Other card sections (About, Custom Software, AI Dev, Enterprise, Our Approach, Contact, Hire):** 10 sections across 7 files.
- **Technology pages:** 7 files with entrance-only cards (optional upgrade).
- **Shared components:** 2 (WhyChooseSection, RelatedLinks).

**Recommended next step:** Apply the same card pattern (grid + scroll-animate-scale + card-hover + card-inner-reveal + card-title/card-desc/card-icon and --card-accent where applicable) to all sections in sections 1, 2, and 3 for a consistent, even look across the site. Then optionally align technology pages and shared components (sections 4 and 5).
