// Server-safe menu icons - no client-side code needed
import { ReactNode } from 'react'
import { getIconComponent } from './utils/iconMapper'
import { ArrowRight } from 'lucide-react'

// Map menu item names to icon names
const menuIconMap: Record<string, string> = {
  // Services
  'Custom Software Development': 'Code',
  'Web Application Development': 'Globe',
  'API Development & Integration': 'Network',
  'CMS Development': 'FileText',
  'Mobile App Development': 'Smartphone',
  'SaaS Product Development': 'Cloud',
  'Enterprise Software Development': 'Building2',
  'AI Development Services': 'Brain',
  'Machine Learning Model Development': 'Brain',
  'E-commerce Development': 'ShoppingCart',
  'Legacy App Modernization': 'Wrench',
  'Maintenance & Support': 'Settings',
  'SEO': 'Search',
  'PPC': 'TrendingUp',
  'SMM': 'Megaphone',
  'Performance Marketing': 'BarChart',
  'Email Marketing': 'Mail',
  'CRO': 'Target',

  // Hire
  'Hire AI/ML Engineers': 'Brain',
  'Hire Full-Stack Developers': 'Code',
  'Hire Backend Developers': 'Server',
  'Hire Frontend Developers': 'Monitor',
  'Hire Mobile Developers': 'Smartphone',
  'Hire DevOps Engineers': 'Cloud',
  'Hire QA Engineers': 'CheckCircle',
  'Hire UI/UX Designers': 'Palette',
  'Hire Project Managers': 'Briefcase',
  'Hire Dedicated Teams': 'Users',

  // Industries
  'Fintech': 'DollarSign',
  'Healthcare': 'Heart',
  'Retail & eCommerce': 'ShoppingCart',
  'Education & eLearning': 'GraduationCap',
  'Logistics & Transportation': 'Truck',
  'Real Estate': 'Home',
  'Manufacturing': 'Factory',

  // Company
  'About Us': 'Info',
  'Our Approach': 'Target',
  'Insights / Blog': 'FileText',
  'Careers': 'Briefcase',
  'Contact / Request Quote': 'Phone',

  // AI
  'AI Solutions': 'Brain',
}

/**
 * Get an icon ReactNode for a menu item by name
 * @param itemName - The name of the menu item
 * @returns A ReactNode with the icon, or null if no icon found
 */
export function getMenuIcon(itemName: string): ReactNode | null {
  // Get the icon name from the map
  const iconName = menuIconMap[itemName]

  if (!iconName) {
    // If no mapping found, return null (no icon)
    return null
  }

  // Get the icon component using the iconMapper
  const IconComponent = getIconComponent(iconName)

  if (!IconComponent) {
    // Fallback to a default icon if the mapped icon doesn't exist
    return <ArrowRight className="w-4 h-4" strokeWidth={2} />
  }

  // Return the icon as a ReactNode
  return <IconComponent className="w-4 h-4" strokeWidth={2} />
}
