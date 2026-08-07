# Design System Showcase - MVP Design Spec

## Overview

A professional Storybook-like documentation website for a reusable UI component library built with Tailwind CSS. Serves as a living design reference for designers and developers featuring centralized documentation, visual consistency, and standardized interaction patterns.

## Stack

| Layer      | Choice                                                          |
| ---------- | --------------------------------------------------------------- |
| Framework  | Next.js (App Router, static export)                             |
| Language   | TypeScript                                                      |
| Styling    | Tailwind CSS v4                                                 |
| Components | shadcn/ui                                                       |
| Animation  | Motion (framer-motion successor)                                |
| Fonts      | Geist (body/UI) + Geist Mono (code) - self-hosted via next/font |
| Icons      | @radix-ui/react-icons                                           |
| Content    | MDX with embedded React component previews                      |
| Theme      | next-themes for light/dark toggle                               |

## Design Language

### Visual Theme

Bold, premium, developer-focused. High contrast between deep navy ink and white canvas with a vibrant crimson accent. Editorial confidence with tool-like precision. Clean whitespace, generous typographic hierarchy, minimal decorative elements.

### Color Palette

#### Light Mode (default)

| Token       | Hex     | Usage                            |
| ----------- | ------- | -------------------------------- |
| BG          | #f8fafc | Page background                  |
| Surface     | #ffffff | Card/container fill              |
| Ink         | #0f172a | Primary text                     |
| Muted       | #475569 | Secondary text                   |
| Accent      | #dc2626 | CTAs, active states, focus rings |
| Accent-soft | #fef2f2 | Accent hover backgrounds         |
| Alt         | #1e3a5f | Secondary accent, code blocks    |
| Border      | #e2e8f0 | Dividers, card borders           |

#### Dark Mode

| Token       | Hex     | Usage                    |
| ----------- | ------- | ------------------------ |
| BG          | #020617 | Page background          |
| Surface     | #0f172a | Card/container fill      |
| Ink         | #f8fafc | Primary text             |
| Muted       | #94a3b8 | Secondary text           |
| Accent      | #ef4444 | CTAs, active states      |
| Accent-soft | #450a0a | Accent hover backgrounds |
| Alt         | #1e3a5f | Secondary accent         |
| Border      | #1e293b | Dividers, card borders   |

### Typography

| Role             | Font       | Weight  | Size                   |
| ---------------- | ---------- | ------- | ---------------------- |
| Display/Headings | Geist      | 700/600 | clamp(2rem, 5vw, 4rem) |
| Body             | Geist      | 400     | 1rem / 1rem            |
| Small/Meta       | Geist      | 400     | 0.875rem               |
| Code             | Geist Mono | 400     | 0.875rem               |

- Body line length capped at 65ch
- Headings use `text-wrap: balance`
- Tight tracking on display (`tracking-tighter`)

### CSS Variables Architecture

Theme tokens mapped to CSS custom properties in `:root` and `.dark`. shadcn/ui's theming layer configured via these variables. All component styling references semantic tokens, not raw hex values.

```
--background / --foreground
--card / --card-foreground
--primary / --primary-foreground
--secondary / --secondary-foreground
--muted / --muted-foreground
--accent / --accent-foreground
--destructive / --destructive-foreground
--border / --input / --ring
--radius
```

## Site Architecture

### Route Structure

```
/                    → Landing page
/getting-started     → Introduction, Principles, Installation, FAQ
/foundations         → Colors, Typography, Spacing, Radius, Shadows, Icons, Grid
/components          → Buttons, Cards, Inputs, Dropdowns, Modals, Toasts, Alerts, Checkboxes, Radios
/patterns            → Common UI patterns
/accessibility       → A11y guidelines
/resources           → Links, tools, references
/changelog           → Version history
```

### Layout Hierarchy

1. **Root layout** - HTML shell, font loading (`next/font`), `ThemeProvider` (next-themes), global CSS
2. **Docs layout** - Top navigation bar + left sidebar + main content + optional right table of contents
   - Desktop: three-column layout
   - Tablet: collapsible sidebar overlay
   - Mobile: hamburger drawer → sidebar → content stack

### Navigation

**Top bar:** Logo/name, search (future), theme toggle, GitHub link, version badge

**Left sidebar:** Tree navigation mirroring the route hierarchy. Active page highlighted with crimson accent. Categories collapsible. Sticky, scrollable.

**Right TOC:** Current page's heading structure. Sticky below top bar. Shows on desktop only for content pages.

## Component Page Template

Every component page follows a rigid 10-section template:

1. **Header** - Component name (large display), short description, status badge (Stable/Beta/Deprecated), breadcrumb
2. **Usage Guidelines** - "Use when" / "Don't use when" with clear opinionated guidance
3. **Visual Playground** - Live interactive preview with controls for variants, states, and sizes. Changes reflect in real-time.
4. **Variants Grid** - Visual gallery of every variant rendered side-by-side with labels
5. **States** - Hover, focus, active, disabled, loading states shown with code toggle
6. **Props Table** - Prop name, type, default value, description. Scrollable on mobile.
7. **Accessibility** - Keyboard support, ARIA roles, focus management, contrast guidance
8. **Code Snippets** - Syntax-highlighted, copyable implementation examples
9. **Related Components** - Links to connected components
10. **Prev / Next** - Sequential component navigation with breadcrumb

## MVP Component Scope (Phase 1)

### Foundations (7 pages)

Colors, Typography, Spacing, Radius, Shadows, Icons, Grid

### Components (14 pages)

Button, Card, Input, Textarea, Checkbox, Radio, Select, Dropdown, Modal, Toast, Badge, Spinner, Empty State, Alert

### Supporting Pages

Landing (hero, stats, featured sections, changelog preview), Getting Started (introduction, principles, installation, FAQ), Accessibility, Changelog

## Key Design Decisions

1. **shadcn/ui over Flowbite** - Simpler integration with Tailwind v4, full code ownership, better theming via CSS variables, smaller bundle
2. **MDX over JSON/YAML** - Allows embedding live React component previews directly in documentation content, supports rich formatting
3. **Geist font family** - Unified display/body/mono family eliminates font mismatch risk, premium developer-tool aesthetic
4. **Single accent color** - Crimson (#dc2626) used consistently across all interactive elements. No secondary accent to maintain visual discipline
5. **Three-column layout** - Sidebar + content + TOC maximizes information density for documentation browsing
6. **Light mode default** - Developer documentation convention, dark mode available via toggle respecting system preference

## Future Considerations (Post-MVP)

- Full-text search with filtering
- Interactive component playground (edit props, see output)
- Component status tracking (Stable → Beta → Deprecated lifecycle)
- Auto-generated props tables from TypeScript types
- Theming with custom brand colors
- Visual regression testing integration
- Contribution guidelines documentation
