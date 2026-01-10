// Server-only data loader - ensures static data is only loaded on server
// This prevents client-side bundling of large data objects

'use server'

// Re-export static data with server-only boundary
// This ensures data files are not included in client bundles

export {
  // Home
  homeTechnologies,
  homeServicesList,
  homeWhyChooseUs,
  homeTestimonials,
  homeFAQs,
  homeFeaturedProjects
} from '../staticData/home'

export {
  // About
  aboutWhyChooseUs,
  aboutTeamMembers,
  aboutFocusAreas,
  aboutIndustries
} from '../staticData/about'

// Note: Individual service/industry/hire data files are imported directly in page.tsx
// This is optimal as they're only loaded when needed per route






