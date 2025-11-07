# 🧩 Legacy System Analysis (Next.js + TypeScript)

## Overview
The legacy site is a **Next.js (v12)** + **React (v17)** + **TypeScript (4.9)** application styled with **Tailwind CSS (v3.0)**. It contains multiple pages (Home, Our Story, Pricing, Blog, Privacy), an example API route, and a large component library (layout, header/footer, forms, modal, slideshow, marketing blocks).

## Structure (high level)
- `src/pages`: `index.tsx`, `our-story.tsx`, `pricing/*`, `blog/index.tsx`, `blog/[id].tsx`, `_app.tsx`, `api/hello.ts`
- `src/components`: `Layout`, `Header (Navbar/Hamburger/GoogleTag)`, `Footer`, `Form (Input/Select)`, `Modal`, `Slideshow`, `StyledContainer/*` (Event, HowItWorks, Partner, TrendingGame, etc.), `Container`
- `src/hooks`: `useMediaQuery`
- `src/utils`: `creditCard`, `filterClassNames`
- `src/styles`: `globals.css`
- `public/`: favicons, manifest, video, and page-scoped image sets

## Strengths
- Good componentisation; clear separation of layout and feature blocks.
- Tailwind utility-first styling already present.
- Blog supports dynamic routes.
- Forms are encapsulated into reusable inputs/selects.

## Issues / Technical Debt
- **Outdated dependencies:** Next 12 / React 17 / Tailwind 3.0.
- Potential duplication/naming drift (`HowItWork` vs `HowWork`).
- Unknown accessibility coverage in custom components (Select, Modal).
- Image optimisation may be inconsistent; some large assets.

## Implications for Rebuild
- Migrate to **Next App Router** with modern React 18 features.
- Consolidate marketing blocks under a consistent `components/marketing` namespace.
- Review and upgrade a11y patterns (ARIA roles, focus management).
- Optimise images and adopt `<Image>` where possible.
- Tighten TS config and linting rules for maintainability.
