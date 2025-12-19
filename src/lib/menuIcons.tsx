import { 
  Code, 
  Smartphone, 
  Globe, 
  ShoppingCart, 
  FileText, 
  Building2, 
  Settings, 
  Zap, 
  Brain, 
  Cloud, 
  Wrench, 
  Search, 
  TrendingUp, 
  Users, 
  Mail, 
  Target, 
  Heart, 
  GraduationCap, 
  Truck, 
  Home, 
  Factory, 
  Plane, 
  User, 
  Briefcase, 
  Info,
  Lightbulb,
  Server,
  Network,
  Layers,
  BarChart,
  CreditCard,
  GitBranch,
  TestTube,
  Palette,
  MessageSquare,
  LucideIcon
} from 'lucide-react'
import { ReactElement } from 'react'

// Map menu item names to their corresponding Lucide icon components
const menuIconMap: Record<string, LucideIcon> = {
  // Services
  'Custom Software Development': Code,
  'Web Application Development': Globe,
  'Mobile App Development': Smartphone,
  'SaaS Product Development': Cloud,
  'Enterprise Software Development': Building2,
  'API Development & Integration': Network,
  'E-commerce Development': ShoppingCart,
  'CMS Development': FileText,
  'Legacy App Modernization': Wrench,
  'Maintenance & Support': Settings,
  'AI Development Services': Brain,
  'Machine Learning Model Development': Brain,
  'SEO': Search,
  'PPC': TrendingUp,
  'SMM': Users,
  'Performance Marketing': BarChart,
  'Email Marketing': Mail,
  'CRO': Target,
  
  // Hire
  'Hire AI/ML Engineers': Brain,
  'Hire Full-Stack Developers': Code,
  'Hire Backend Developers': Server,
  'Hire Frontend Developers': Layers,
  'Hire Mobile Developers': Smartphone,
  'Hire DevOps Engineers': GitBranch,
  'Hire QA Engineers': TestTube,
  'Hire UI/UX Designers': Palette,
  'Hire Project Managers': Briefcase,
  'Hire Dedicated Teams': Users,
  
  // Industries
  'Fintech': CreditCard,
  'Healthcare': Heart,
  'Retail & eCommerce': ShoppingCart,
  'Education & eLearning': GraduationCap,
  'Logistics & Transportation': Truck,
  'Real Estate': Home,
  'Manufacturing': Factory,
  'Travel & Hospitality': Plane,
  
  // Company
  'About Us': Info,
  'Our Approach': Lightbulb,
  'Our Work': Briefcase,
  'Insights / Blog': FileText,
  'Careers': User,
  'Contact / Request Quote': MessageSquare,
  
  // AI
  'AI Solutions': Zap,
}

/**
 * Get an icon for a menu item by name with single brand color
 * @param name - The name of the menu item
 * @returns A React element with the icon, or null if not found
 */
export function getMenuIcon(name: string): ReactElement | null {
  const IconComponent = menuIconMap[name]
  if (!IconComponent) {
    return null
  }
  return <IconComponent className="w-4 h-4 text-[#5e2cb6]" />
}
