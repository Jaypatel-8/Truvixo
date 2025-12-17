import { 
  Code, Building2, RefreshCw, Globe, Smartphone, Cloud, Brain, 
  ShoppingCart, Wrench, Search, MousePointerClick, Share2, 
  TrendingUp, Mail, Gauge, Target, Users, Briefcase, 
  FileText, Heart, GraduationCap, Truck, Home, Settings,
  Zap, Database, Network, Layers, Rocket, Shield
} from 'lucide-react'

export const menuIcons = {
  // Services
  'Custom Software Development': <Code className="w-4 h-4" strokeWidth={2} />,
  'Enterprise Software Development': <Building2 className="w-4 h-4" strokeWidth={2} />,
  'Legacy App Modernization': <RefreshCw className="w-4 h-4" strokeWidth={2} />,
  'Web Application Development': <Globe className="w-4 h-4" strokeWidth={2} />,
  'CMS Development': <FileText className="w-4 h-4" strokeWidth={2} />,
  'API Development & Integration': <Network className="w-4 h-4" strokeWidth={2} />,
  'Mobile App Development': <Smartphone className="w-4 h-4" strokeWidth={2} />,
  'SaaS Product Development': <Cloud className="w-4 h-4" strokeWidth={2} />,
  'AI Development Services': <Brain className="w-4 h-4" strokeWidth={2} />,
  'Machine Learning Model Development': <Brain className="w-4 h-4" strokeWidth={2} />,
  'E-commerce Development': <ShoppingCart className="w-4 h-4" strokeWidth={2} />,
  'Maintenance & Support': <Wrench className="w-4 h-4" strokeWidth={2} />,
  'SEO': <Search className="w-4 h-4" strokeWidth={2} />,
  'PPC': <MousePointerClick className="w-4 h-4" strokeWidth={2} />,
  'SMM': <Share2 className="w-4 h-4" strokeWidth={2} />,
  'Performance Marketing': <TrendingUp className="w-4 h-4" strokeWidth={2} />,
  'Email Marketing': <Mail className="w-4 h-4" strokeWidth={2} />,
  'CRO': <Gauge className="w-4 h-4" strokeWidth={2} />,
  
  // Hire
  'Hire AI/ML Engineers': <Brain className="w-4 h-4" strokeWidth={2} />,
  'Hire Full-Stack Developers': <Code className="w-4 h-4" strokeWidth={2} />,
  'Hire Backend Developers': <Database className="w-4 h-4" strokeWidth={2} />,
  'Hire Frontend Developers': <Layers className="w-4 h-4" strokeWidth={2} />,
  'Hire Mobile Developers': <Smartphone className="w-4 h-4" strokeWidth={2} />,
  'Hire DevOps Engineers': <Cloud className="w-4 h-4" strokeWidth={2} />,
  'Hire QA Engineers': <Shield className="w-4 h-4" strokeWidth={2} />,
  'Hire UI/UX Designers': <Target className="w-4 h-4" strokeWidth={2} />,
  'Hire Project Managers': <Users className="w-4 h-4" strokeWidth={2} />,
  'Hire Dedicated Teams': <Rocket className="w-4 h-4" strokeWidth={2} />,
  
  // Industry
  'Fintech': <Building2 className="w-4 h-4" strokeWidth={2} />,
  'Healthcare': <Heart className="w-4 h-4" strokeWidth={2} />,
  'Retail & eCommerce': <ShoppingCart className="w-4 h-4" strokeWidth={2} />,
  'Education & eLearning': <GraduationCap className="w-4 h-4" strokeWidth={2} />,
  'Logistics & Transportation': <Truck className="w-4 h-4" strokeWidth={2} />,
  'Real Estate': <Home className="w-4 h-4" strokeWidth={2} />,
  'Manufacturing': <Settings className="w-4 h-4" strokeWidth={2} />,
  
  // Company
  'About Us': <Users className="w-4 h-4" strokeWidth={2} />,
  'Our Approach': <Target className="w-4 h-4" strokeWidth={2} />,
  'Careers': <Briefcase className="w-4 h-4" strokeWidth={2} />,
  'Contact / Request Quote': <Mail className="w-4 h-4" strokeWidth={2} />,
  
  // AI (additional)
  'AI Solutions': <Zap className="w-4 h-4" strokeWidth={2} />,
}

export function getMenuIcon(name: string) {
  return menuIcons[name as keyof typeof menuIcons] || null
}




