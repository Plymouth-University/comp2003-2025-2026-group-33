# ENGAME Website Rebuild

**COMP2003 Group Project - Group 33**

A modern rebuild of the ENGAME marketing website, migrating from Next.js 12 to Next.js 13+ with improved architecture, performance, and maintainability.

## Project Overview

ENGAME is a platform that connects gamers with brands through in-game advertising opportunities. This project represents a complete technical modernization of their marketing website to address technical debt, security vulnerabilities, and performance issues in the legacy system.

### Client Requirements
- Maintain exact visual design and user experience of the original site
- Modernize technology stack to current standards
- Fix critical bugs (slideshow scaling issue)
- Improve code maintainability and scalability

## Tech Stack Migration

### Legacy System
- Next.js 12
- React 17
- TypeScript 4.9
- Tailwind CSS 3.0
- Pages Router architecture

### Modern Implementation
- **Next.js 13.5.11** - App Router with server/client component architecture
- **React 18.2** - Latest React features and performance improvements
- **TypeScript 5.1** - Modern type system with improved inference
- **Tailwind CSS 3.4.7** - Enhanced utilities and modern CSS features
- **Framer Motion 5.3.1** - Smooth animations and transitions

## Key Features

### Completed Pages
- **Home Page** - Hero section, marketing content, trusted brands showcase
- **Our Story** - Company timeline (2018-2022), strategic plan slideshow, core team profiles
- **Privacy Policy** - Complete legal documentation

### Technical Achievements
- Implemented direction-aware slide animations
- Full navigation system with mobile responsive menu
- Server/Client component separation for optimal performance
- Reusable component architecture

## Project Structure

```
comp2003-2025-2026-group-33/
├── SourceCode/              # Modern Next.js 13 implementation
│   ├── app/                 # App Router pages
│   │   ├── page.tsx        # Home page
│   │   ├── our-story/      # Our Story page
│   │   └── privacy/        # Privacy policy page
│   ├── components/
│   │   ├── layout/         # Layout components (Navbar, Footer, Section)
│   │   ├── marketing/      # Marketing components (Slideshow, TrustedCompanies)
│   │   ├── home/           # Home page specific components
│   │   └── ui/             # Reusable UI components
│   ├── context/            # React Context providers
│   ├── public/             # Static assets
│   └── styles/             # Global styles
├── legacy-site/            # Original Next.js 12 implementation (reference)
└── Design Documents/       # Project planning and documentation
```

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Plymouth-University/comp2003-2025-2026-group-33.git
   cd comp2003-2025-2026-group-33
   ```

2. **Navigate to the source code directory**
   ```bash
   cd SourceCode
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Run production server
npm run lint     # Run ESLint checks
```

## Development Methodology

### Agile Sprint-Based Approach

**Sprint 1** - Foundation (Weeks 1-2)
- Technology stack research and selection
- Development environment setup
- Component architecture planning
- Legacy system analysis

**Sprint 2** - Core Development (Weeks 3-4)
- Home page implementation
- Our Story page with timeline and slideshow
- Privacy policy page
- Reusable component library

**Sprint 3** - Integration & Polish (Weeks 5-6)
- Navigation system completion
- Animation implementation
- Bug fixes (slideshow scaling issue)
- Testing and optimization

## Key Technical Decisions

### Framework Selection
After evaluating Vue 3, Angular, and React, we selected **React + TypeScript** for:
- Extensive ecosystem and component libraries
- Team familiarity and expertise
- Strong community support for Next.js integration
- Superior TypeScript integration

### Architecture Patterns
- **App Router over Pages Router** - Modern Next.js architecture with improved performance
- **Server/Client Component Separation** - Optimal bundle sizes and loading performance
- **Component Composition** - Reusable, maintainable component patterns
- **Context API** - Simple state management for modal and global UI state

## Documentation

All technical decisions and planning documents are available in the `Design Documents/` folder:
- **LegacyAnalysis.md** - Legacy system issues and technical debt analysis
- **TechStackDecision.md** - Framework comparison and selection rationale
- **ComponentMapping.md** - Migration plan from legacy to modern structure
- **ProjectPlan.pdf** - Overall project timeline and milestones
- **SprintPlan_Group33.pdf** - Detailed sprint breakdowns
- **RiskAssessment.md** - Risk identification and mitigation strategies
- **KPIs.md** - Key performance indicators for project success

## Future Work

### Remaining Pages
- FAQ page
- Contact Us page
- For Business (Brand Owner) page
- For Gamers page
- Blog with content management
- Pricing page with plan comparisons

### Future Enhancements
- Backend API integration
- User authentication system
- Dashboard functionality
- Analytics integration
- SEO optimization
- Performance monitoring
- Comprehensive test coverage

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is an academic project for COMP2003. Team members should:
1. Create feature branches for new work
2. Write clear, descriptive commit messages
3. Test changes locally before pushing
4. Follow existing code style and patterns

## License

This project is developed for academic purposes as part of the COMP2003 course at University of Plymouth.

## Acknowledgments

- **Client**: ENGAME Platform
- **Course**: COMP2003 - Software Engineering
- **Institution**: Plymouth University
- **Academic Year**: 2025-2026

---

**Project Status**: Prototype Phase - Core pages complete, additional pages in development
