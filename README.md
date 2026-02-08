# Elite Plumbing - Premium Service Website

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

A premium, scroll-driven website for a professional plumbing service company featuring immersive animations, modern UI components, and a cohesive navy-and-gold aesthetic. Built with React, TypeScript, and GSAP ScrollTrigger for cinema-quality user experiences.

![Elite Plumbing Hero](https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200&h=600&fit=crop)

## Key Features

- **Cinema-Quality Scroll Animations** - Immersive GSAP ScrollTrigger-powered sections with smooth pinning and snap-to-section navigation
- **Responsive Booking System** - Fully functional appointment request form with validation
- **Premium Visual Design** - Navy and gold color palette conveying trust and luxury
- **Multi-Section Layout** - Hero, Services (5 categories), Membership, and Contact sections
- **Smooth Snap Scrolling** - Intelligent scroll snapping between major sections for storytelling
- **Mobile-First Architecture** - Fully responsive design optimized for all devices
- **Performance Optimized** - Vite-powered development with fast builds and HMR
- **Accessibility Ready** - Semantic HTML, keyboard navigation, and screen reader support
- **Type-Safe Codebase** - Full TypeScript implementation with strict type checking

## Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast development server and optimized builds
- **Tailwind CSS 3.4** - Utility-first styling

### UI Components
- **shadcn/ui** - 40+ pre-built accessible components
- **Radix UI** - Headless UI primitives (Dialog, Dropdown, etc.)
- **Lucide React** - Modern icon library

### Animation & Effects
- **GSAP 3.14** - Professional-grade animations
- **ScrollTrigger** - Scroll-driven animations and pinning
- **Embla Carousel** - Touch-friendly carousels

### Forms & Validation
- **React Hook Form** - Performant form handling
- **Zod** - Schema validation

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Kimi Plugin** - AI-powered development assistance

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        App.tsx                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Global ScrollTrigger Snap               │   │
│  │  (Pinned sections with snap-to-section navigation)   │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              │
    ┌───────────┬─────────────┼─────────────┬───────────┐
    ▼           ▼             ▼             ▼           ▼
┌────────┐ ┌────────┐   ┌──────────┐  ┌──────────┐ ┌──────────┐
│  Hero  │ │Trusted │   │ Services │  │Membership│ │ Contact  │
│Section │ │Section │   │ Sections │  │ Section  │ │ Section  │
└────────┘ └────────┘   └──────────┘  └──────────┘ └──────────┘
     │          │             │             │            │
     ▼          ▼             ▼             ▼            ▼
  ┌──────────────────────────────────────────────────────────┐
│                      Navigation                            │
│                (Fixed, z-index: 1000)                      │
└────────────────────────────────────────────────────────────┘
```

### Section Flow

1. **Hero Section** - Pinned scroll with parallax exit animations
2. **Trusted Section** - Social proof and trust indicators
3. **Service Sections** (Pinned):
   - Leak Detection
   - Emergency Services
   - Fixture Installation
   - Maintenance
   - Renovation
4. **Membership Section** - Service plans and pricing
5. **Contact Section** - Booking form and contact information

### Animation Architecture

Each pinned section follows a **3-phase animation pattern**:
- **Entrance (0-30%)**: Elements animate into view
- **Settle (30-70%)**: Static display for content readability
- **Exit (70-100%)**: Elements animate out for next section

Global scroll snap ensures users always land on section centers.

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Step-by-Step Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/elite-plumbing.git
cd elite-plumbing
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Environment Variables

Create a `.env` file in the root directory:

```env
# Optional: API endpoint for form submissions
VITE_API_URL=https://api.yourdomain.com

# Optional: Analytics ID
VITE_GA_ID=G-XXXXXXXXXX

# Optional: Contact phone
VITE_CONTACT_PHONE=1-800-123-4567
```

## Usage

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

### Project Structure

```
elite-plumbing/
├── src/
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── TrustedSection.tsx
│   │   ├── LeakDetectionSection.tsx
│   │   ├── EmergencySection.tsx
│   │   ├── FixtureSection.tsx
│   │   ├── MaintenanceSection.tsx
│   │   ├── RenovationSection.tsx
│   │   ├── MembershipSection.tsx
│   │   └── ContactSection.tsx
│   ├── components/         # Reusable components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ui/            # shadcn/ui components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── dist/                  # Build output
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

### Customizing Content

- **Images**: Replace files in `public/` directory
- **Colors**: Edit `tailwind.config.js` - navy/gold theme
- **Contact Info**: Update `ContactSection.tsx`
- **Services**: Modify individual section files

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Build command: `npm run build`
4. Output directory: `dist`

### Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### GitHub Pages

```bash
npm run build
# Copy dist contents to gh-pages branch
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host"]
```

## Screenshots

### Hero Section
![Hero](https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=400&fit=crop)
*Cinematic hero with dual-image layout and gold accent panel*

### Services Showcase
![Services](https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=400&fit=crop)
*Scroll-driven service sections with smooth animations*

### Contact Form
![Contact](https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=400&fit=crop)
*Professional booking form with validation*

## Demo

Live demo: [https://elite-plumbing-demo.vercel.app](https://elite-plumbing-demo.vercel.app)

## Roadmap

- [ ] **Backend Integration** - Connect form to real API/email service
- [ ] **CMS Integration** - Headless CMS for content management
- [ ] **Multi-language Support** - i18n for international clients
- [ ] **Service Area Map** - Interactive map with coverage zones
- [ ] **Testimonials Section** - Customer reviews carousel
- [ ] **Blog Section** - Content marketing with MDX
- [ ] **Dark Mode Toggle** - Theme switching capability
- [ ] **Performance Monitoring** - Core Web Vitals tracking
- [ ] **PWA Support** - Service worker and offline capabilities
- [ ] **Admin Dashboard** - Service management interface

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow existing TypeScript patterns
- Use functional components with hooks
- Maintain consistent formatting (ESLint will check)
- Add types for all props and returns
- Write descriptive commit messages

### Reporting Issues

Please use the [GitHub Issues](https://github.com/yourusername/elite-plumbing/issues) page to report bugs or request features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/yourusername">Your Name</a>
</p>

<p align="center">
  <a href="https://twitter.com/yourusername">Twitter</a> •
  <a href="https://linkedin.com/in/yourusername">LinkedIn</a> •
  <a href="https://yourportfolio.com">Portfolio</a>
</p>
