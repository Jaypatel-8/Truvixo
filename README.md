# TruVixo Website

A modern, responsive website for TruVixo creative agency built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎨 **Enhanced Design & UX**
- **Custom Logo**: Modern SVG logo with gradient design
- **Advanced Custom Cursor**: Dual-cursor system with magnetic effects, hover states, and smooth animations
- **Sliding Services Cards**: Horizontal scrolling service showcase similar to expandi.io
- **Responsive Design**: Mobile-first approach with smooth animations

### 🚀 **New Pages & Routing**
- **Products Page** (`/products`): Detailed product showcase with ratings and features
- **Solutions Page** (`/solutions`): Industry-specific solutions and use cases
- **Pricing Page** (`/pricing`): Transparent pricing with multiple tiers
- **Resources Page** (`/resources`): Blog posts, guides, and video content
- **About Page** (`/about`): Company information and team details
- **Work Page** (`/work`): Portfolio and case studies
- **Contact Page** (`/contact`): Contact form and information

### 🎯 **Interactive Components**
- **Enhanced Services Section**: Horizontal sliding cards with navigation arrows
- **Improved Navigation**: Dropdown menus and proper routing
- **Custom Cursor**: Magnetic effects, hover states, and click animations
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd truvixo-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── work/              # Work/Portfolio page
│   ├── products/          # Products page
│   ├── solutions/         # Solutions page
│   ├── pricing/           # Pricing page
│   ├── resources/         # Resources page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services showcase
│   ├── WorkShowcase.tsx   # Work portfolio
│   ├── Testimonials.tsx   # Client testimonials
│   ├── LogoLoop.tsx       # Logo carousel
│   ├── CustomCursor.tsx   # Custom cursor
│   └── Logo.tsx           # Logo component
└── public/                 # Static assets
    └── logo.svg           # SVG logo file
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- `truvixo-purple`: Primary brand color
- `truvixo-purple-dark`: Darker shade for hover states
- Additional gradient colors for icons and accents

### Components
- **Services**: Easily add new services by updating the `services` array
- **Navigation**: Modify menu items in the `Navbar.tsx` component
- **Custom Cursor**: Adjust cursor behavior in `CustomCursor.tsx`

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized for all device sizes

## 🚀 Performance Features

- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load as needed
- **Smooth Animations**: Hardware-accelerated animations with Framer Motion

## 🔧 Development

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `Navbar.tsx`

### Styling
- Use Tailwind CSS classes for consistent styling
- Custom CSS in `globals.css` for complex animations
- Component-specific styles using CSS modules if needed

### Animations
- Use Framer Motion for smooth animations
- Implement scroll-triggered animations with `useInView`
- Add micro-interactions for better UX

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact the development team or create an issue in the repository.

---

Built with ❤️ by the TruVixo team
