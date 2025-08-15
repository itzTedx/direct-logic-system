# Direct Logic Systems

[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE)

A modern, responsive website for Direct Logic Systems - a comprehensive technology and trading partner based in the UAE. This Next.js application showcases the company's IT services, trading solutions, software development, and digital marketing capabilities.

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)](https://github.com/directls/direct-ls)
[![Code Quality](https://img.shields.io/badge/Code%20Quality-A%2B-4CAF50?style=flat-square)](https://biomejs.dev/)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-4CAF50?style=flat-square)](https://www.w3.org/WAI/WCAG2AA-Conformance)
[![Performance](https://img.shields.io/badge/Performance-95%2B-4CAF50?style=flat-square)](https://web.dev/performance/)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-4CAF50?style=flat-square)](https://web.dev/responsive/)

## 🚀 About Direct Logic Systems

Direct Logic Systems is a leading technology company in the UAE, serving 200+ businesses with comprehensive IT solutions. We specialize in:

- **IT Services & Support**: Strategic consulting, infrastructure management, and 2-hour on-site support
- **Trading Solutions**: Electronics, IT equipment, and industrial products sourcing
- **Software & Digital Marketing**: Custom software development, web design, and data-driven marketing campaigns

## ✨ Features

### 🏠 Homepage Sections
- **Hero Section**: Compelling value proposition with call-to-action buttons
- **About**: Company overview and value proposition
- **Services**: Detailed service offerings with interactive cards
- **Solutions**: IT solutions, expertise, and innovation highlights
- **Portfolio**: Showcase of successful projects and case studies
- **Testimonials**: Client feedback and success stories
- **FAQ**: Common questions and answers
- **CTA**: Call-to-action for potential clients

### 🎨 Design & UX
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Responsive Design**: Optimized for all devices and screen sizes
- **Accessibility**: WCAG compliant with proper ARIA attributes
- **Performance**: Optimized with Next.js 15 and Turbopack
- **Animations**: Smooth transitions and micro-interactions

### 🛠 Technical Features
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first styling with custom design system
- **Radix UI**: Accessible, unstyled UI components
- **React Hook Form**: Form handling with Zod validation
- **Motion**: Smooth animations and transitions
- **Biome**: Fast linting and formatting

## 🏗 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── what-we-offer/     # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── global/            # Global components (CTA, FAQ)
│   ├── layout/            # Layout components (Navbar, Footer)
│   └── ui/                # UI components (Button, Card, etc.)
├── data/                  # Static data and constants
│   ├── constant.ts        # Services, testimonials, company info
│   └── portfolio.ts       # Portfolio projects and case studies
├── lib/                   # Utility functions
├── modules/               # Feature modules
│   ├── home/              # Homepage sections
│   └── contact/           # Contact form logic
├── types/                 # TypeScript type definitions
└── assets/                # Static assets (icons, fonts, images)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd direct-ls
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Available Scripts

[![pnpm](https://img.shields.io/badge/pnpm-Recommended-orange?style=flat-square&logo=pnpm)](https://pnpm.io/)
[![npm](https://img.shields.io/badge/npm-Supported-red?style=flat-square&logo=npm)](https://www.npmjs.com/)

| Script | Description | Status |
|--------|-------------|--------|
| `pnpm dev` | Start development server with Turbopack | ![Dev](https://img.shields.io/badge/Status-Ready-brightgreen?style=flat-square) |
| `pnpm build` | Build for production with Turbopack | ![Build](https://img.shields.io/badge/Status-Ready-brightgreen?style=flat-square) |
| `pnpm start` | Start production server | ![Start](https://img.shields.io/badge/Status-Ready-brightgreen?style=flat-square) |
| `pnpm lint` | Run Biome linter | ![Lint](https://img.shields.io/badge/Status-Ready-brightgreen?style=flat-square) |
| `pnpm lint:fix` | Fix linting issues automatically | ![Lint Fix](https://img.shields.io/badge/Status-Ready-brightgreen?style=flat-square) |
| `pnpm format` | Format code with Biome | ![Format](https://img.shields.io/badge/Status-Ready-brightgreen?style=flat-square) |

## 🛠 Tech Stack

### Core Framework
![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)

- **Next.js 15.4.6** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety

### Styling & UI
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=flat-square&logo=tailwind-css)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat-square&logo=radix-ui)
![Lucide React](https://img.shields.io/badge/Lucide_React-000000?style=flat-square&logo=lucide)

- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Icon library
- **Motion** - Animation library

### Forms & Validation
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat-square&logo=react-hook-form)
![Zod](https://img.shields.io/badge/Zod-3B82F6?style=flat-square&logo=zod)

- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Development Tools
![Biome](https://img.shields.io/badge/Biome-2.1.4-000000?style=flat-square&logo=biome)
![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-000000?style=flat-square&logo=turbopack)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=postcss)

- **Biome** - Fast linter and formatter
- **Turbopack** - Fast bundler for development
- **PostCSS** - CSS processing

## 🎯 Key Features

### Services Offered
1. **IT Services & Support**
   - Strategic IT consulting
   - Infrastructure management
   - 2-hour on-site support
   - Security and maintenance

2. **Trading Solutions**
   - Electronics sourcing
   - IT equipment procurement
   - Industrial products supply
   - Global supplier network

3. **Software & Digital Marketing**
   - Custom software development
   - Modern web design
   - SEO optimization
   - Data-driven marketing campaigns

### Portfolio Highlights
- **Manar Events** - Event management platform
- **Almanar Furnishings** - E-commerce furniture store
- **DMD Care** - Healthcare information portal
- **Kursii** - Educational learning platform
- **Abhath UAE** - Research company website

## 🔧 Configuration

### Next.js Configuration
- Turbopack enabled for faster development
- Image optimization with WebP and AVIF formats
- TypeScript build optimization
- Package import optimization

### Biome Configuration
- Strict linting rules for code quality
- Accessibility checks enabled
- Automatic formatting on save
- TypeScript-aware linting

## 📱 Responsive Design

![Desktop](https://img.shields.io/badge/Desktop-1200px%2B-blue?style=flat-square)
![Tablet](https://img.shields.io/badge/Tablet-768px%20%2D%201199px-green?style=flat-square)
![Mobile](https://img.shields.io/badge/Mobile-320px%20%2D%20767px-orange?style=flat-square)

The application is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## ♿ Accessibility

![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-4CAF50?style=flat-square)
![ARIA](https://img.shields.io/badge/ARIA-Supported-4CAF50?style=flat-square)
![Keyboard Nav](https://img.shields.io/badge/Keyboard%20Navigation-Yes-4CAF50?style=flat-square)
![Screen Reader](https://img.shields.io/badge/Screen%20Reader-Compatible-4CAF50?style=flat-square)

- WCAG 2.1 AA compliant
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- High contrast support

## 🚀 Performance

![Lighthouse](https://img.shields.io/badge/Lighthouse-95%2B-4CAF50?style=flat-square)
![Core Web Vitals](https://img.shields.io/badge/Core%20Web%20Vitals-Optimized-4CAF50?style=flat-square)
![Bundle Size](https://img.shields.io/badge/Bundle%20Size-Optimized-4CAF50?style=flat-square)
![Image Optimization](https://img.shields.io/badge/Image%20Optimization-WebP%2F%20AVIF-4CAF50?style=flat-square)

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with tree-shaking
- **Image Optimization**: Automatic WebP/AVIF conversion

## 📄 License

This project is private and proprietary to Direct Logic Systems.

## 🤝 Contact

[![Website](https://img.shields.io/badge/Website-Direct%20Logic%20Systems-blue?style=flat-square)](https://directls.com)
[![Location](https://img.shields.io/badge/Location-UAE-red?style=flat-square)](https://en.wikipedia.org/wiki/United_Arab_Emirates)
[![Services](https://img.shields.io/badge/Services-IT%20%7C%20Trading%20%7C%20Software%20%7C%20Marketing-green?style=flat-square)](https://directls.com)

For more information about Direct Logic Systems:
- **Website**: [Direct Logic Systems](https://directls.com)
- **Location**: UAE
- **Services**: IT Solutions, Trading, Software Development, Digital Marketing

---

[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=flat-square)](https://directls.com)
Built with ❤️ by [Ziron Media](https://www.zironmedia.com)
