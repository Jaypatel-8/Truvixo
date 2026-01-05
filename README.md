# TruVixo™ Website

A modern, animated, and professional website for TruVixo™ - an AI-driven digital marketing, branding, and software development company.

## 🚀 Features

- **Modern Design**: Clean, minimal design with TruVixo brand colors (purple, red, yellow, pink, white, black)
- **Responsive**: Fully responsive across desktop, tablet, and mobile devices
- **Animations**: Smooth animations and transitions using Framer Motion
- **SEO Optimized**: Built with Next.js metadata, schema, and OpenGraph
- **Performance**: Optimized for speed and user experience

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend (Ready for Integration)
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **MERN Stack** - Full-stack JavaScript solution

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── work/             # Work/Portfolio page
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation component
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services showcase
│   ├── WorkShowcase.tsx  # Portfolio showcase
│   ├── Testimonials.tsx  # Client testimonials
│   ├── LogoLoop.tsx      # Company logos loop
│   └── Footer.tsx        # Footer component
├── lib/                   # Utility libraries
├── types/                 # TypeScript type definitions
└── utils/                 # Helper functions
```

## 🎨 Design System

### Color Palette
- **Primary Purple**: `#8B5CF6`
- **Primary Red**: `#EF4444`
- **Primary Yellow**: `#F59E0B`
- **Primary Pink**: `#EC4899`
- **White**: `#FFFFFF`
- **Black**: `#111827`

### Typography
- **Primary Font**: Inter (body text)
- **Display Font**: Poppins (headings)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd truvixo-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages & Components

### Home Page (`/`)
- Hero section with animated background
- Services overview with interactive cards
- Work showcase with project gallery
- Client testimonials carousel
- Company logos infinite loop
- Call-to-action sections

### About Page (`/about`)
- Company mission and vision
- Why choose us section
- Team member profiles
- Focus areas showcase
- Company values

### Work Page (`/work`)
- Portfolio with category filters
- Project showcases with details
- Interactive project modals
- Technology stacks
- Results and metrics

### Contact Page (`/contact`)
- Contact information
- Contact form
- Scheduling modal for consultations
- Multiple contact methods

## 🎭 Animations

- **Scroll-triggered animations** using Framer Motion
- **Hover effects** on interactive elements
- **Page transitions** and micro-interactions
- **Loading states** and feedback animations
- **Parallax effects** and smooth scrolling

## 🔧 Customization

### Adding New Services
Edit `src/components/Services.tsx` to add new service cards.

### Updating Team Members
Edit `src/app/about/page.tsx` to modify team information.

### Changing Colors
Update `tailwind.config.js` to modify the color palette.

### Adding New Pages
Create new directories in `src/app/` following Next.js App Router conventions.

## 📊 Performance

- **Lazy loading** for images and components
- **Optimized animations** with Framer Motion
- **CSS-in-JS** with Tailwind for minimal bundle size
- **SEO optimization** with Next.js metadata
- **Responsive images** and optimized assets

