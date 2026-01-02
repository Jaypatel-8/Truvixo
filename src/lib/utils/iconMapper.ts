// Server-safe icon mapper - uses selective imports to avoid bundling all icons
import { LucideIcon } from 'lucide-react'
import {
  Code, Database, Server, Network, Cloud, Zap, Shield, Building2, Heart,
  ShoppingCart, Truck, Home, Users, CheckCircle, Rocket, Target, FileText,
  CreditCard, Wallet, DollarSign, TrendingUp, BarChart, Layers, Globe,
  Smartphone, Monitor, Palette, Search, Mail, Phone, Calendar, ArrowRight,
  Settings, Wrench, Cog, Box, Package, Store, Factory, Car, Plane, Hotel,
  GraduationCap, Book, Stethoscope, Activity, BarChart2, PieChart, LineChart,
  TrendingDown, Lightbulb, Star, Award, ThumbsUp, MessageSquare, Bell, Lock,
  Unlock, Eye, EyeOff, User, UserPlus, Users2, Briefcase, Folder, File,
  Image, Video, Music, Download, Upload, Share, Link, ExternalLink, Copy,
  Edit, Trash, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle,
  ChevronRight, ChevronLeft, ChevronUp, ChevronDown, ArrowUp, ArrowDown,
  ArrowLeft, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Volume,
  Volume2, VolumeX, Mic, MicOff, Camera, CameraOff, Map, MapPin, Navigation,
  Compass, Flag, Tag, Tags, Filter, Sliders, Grid, List, Layout, Columns,
  Rows, Maximize, Minimize, Maximize2, Minimize2, Move, RotateCw, RotateCcw,
  RefreshCw, RefreshCcw, Power, Battery, BatteryCharging, Wifi, WifiOff,
  Signal, SignalLow, SignalMedium, SignalHigh, Bluetooth, BluetoothOff,
  Radio, Tv, MonitorSpeaker, Printer, HardDrive, Disc, Cpu, MemoryStick,
  Mouse, Keyboard, Headphones, Speaker, FileCode, Brain, Megaphone, FlaskConical,
  BarChart3, Clock, Sparkles, Bot, Linkedin, Send, Loader2
} from 'lucide-react'

// Map icon name strings to Lucide icon components - selective imports only
const iconMap: Record<string, LucideIcon> = {
  Code, Database, Server, Network, Cloud, Zap, Shield, Building2, Heart,
  ShoppingCart, Truck, Home, Users, CheckCircle, Rocket, Target, FileText,
  CreditCard, Wallet, DollarSign, TrendingUp, BarChart, Layers, Globe,
  Smartphone, Monitor, Palette, Search, Mail, Phone, Calendar, ArrowRight,
  Settings, Wrench, Cog, Box, Package, Store, Factory, Car, Plane, Hotel,
  GraduationCap, Book, Stethoscope, Activity, BarChart2, PieChart, LineChart,
  TrendingDown, Lightbulb, Star, Award, ThumbsUp, MessageSquare, Bell, Lock,
  Unlock, Eye, EyeOff, User, UserPlus, Users2, Briefcase, Folder, File,
  Image, Video, Music, Download, Upload, Share, Link, ExternalLink, Copy,
  Edit, Trash, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle,
  ChevronRight, ChevronLeft, ChevronUp, ChevronDown, ArrowUp, ArrowDown,
  ArrowLeft, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Volume,
  Volume2, VolumeX, Mic, MicOff, Camera, CameraOff, Map, MapPin, Navigation,
  Compass, Flag, Tag, Tags, Filter, Sliders, Grid, List, Layout, Columns,
  Rows, Maximize, Minimize, Maximize2, Minimize2, Move, RotateCw, RotateCcw,
  RefreshCw, RefreshCcw, Power, Battery, BatteryCharging, Wifi, WifiOff,
  Signal, SignalLow, SignalMedium, SignalHigh, Bluetooth, BluetoothOff,
  Radio, Tv, MonitorSpeaker, Printer, HardDrive, Disc, Cpu, MemoryStick,
  Mouse, Keyboard, Headphones, Speaker, FileCode, Brain, Megaphone, FlaskConical,
  BarChart3, Clock, Sparkles, Bot, Linkedin, Send, Loader2
}

/**
 * Get a Lucide icon component by name
 * @param iconName - The name of the icon (e.g., 'Code', 'Database')
 * @returns The icon component or undefined if not found
 */
export function getIconComponent(iconName: string): LucideIcon | undefined {
  return iconMap[iconName]
}

