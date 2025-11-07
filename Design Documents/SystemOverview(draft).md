# 🗺️ System Overview – Rebuild Plan

## Purpose
Rebuild the existing Next.js + TypeScript site into a **modern, modular, accessible** web app while keeping the same visual intent.

## Architecture (Target)
- **Frontend:** Next.js (App Router) + React 18 + TypeScript
- **Styling:** Tailwind CSS (latest v3)
- **Routing:** App Router, route groups for public pages
- **Data/Services:** `lib/` for API clients and analytics
- **Images:** Next `<Image>` with responsive sizes
- **A11y:** WCAG 2.1 AA targets; tested via Lighthouse

## Data Flow
User → App Router page → UI composed from reusable components → optional fetch via `lib/api` → render

## Key Modules
- `components/layout` (shells), `components/header`, `components/footer`
- `components/forms` (inputs/select/select-popover with ARIA)
- `components/marketing` (Hero/Carousel/HowItWorks/Event/Partner/TrendingGame)
- `lib/analytics`, `lib/payments`, `lib/style`
- `hooks` (media query, UI state)

## Non-Functional Goals
- Performance 90+ (Lighthouse), A11y 90+
- Strict TypeScript, ESLint + Prettier
- Clear file naming & deduplication
