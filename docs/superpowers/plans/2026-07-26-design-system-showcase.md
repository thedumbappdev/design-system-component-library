# Design System Showcase — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready Design System / Component Library Showcase website (MVP) following the approved design spec.

**Architecture:** Next.js 14+ App Router with static export. Tailwind v4 for styling, shadcn/ui for base components, CSS custom properties for theming (Crimson + Navy palette), Geist + Geist Mono for typography. Content lives as page components with a shared template wrapper for component documentation.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS v4, shadcn/ui, next-themes, next/font, @radix-ui/react-icons, Motion, rehype-highlight (for code blocks)

---

## File Structure

```
design-system-component-library/
├── app/
│   ├── layout.tsx                    # Root layout — providers, fonts, globals
│   ├── page.tsx                      # Landing page
│   ├── globals.css                   # CSS variables, Tailwind layers, theme tokens
│   ├── not-found.tsx                 # 404 page
│   ├── (docs)/
│   │   ├── layout.tsx                # Docs shell — sidebar + top nav + content + TOC
│   │   ├── page.tsx                  # Docs index (redirect to /getting-started or overview)
│   │   ├── getting-started/
│   │   │   └── page.tsx              # Getting started page
│   │   ├── foundations/
│   │   │   ├── page.tsx              # Foundations index
│   │   │   ├── colors/page.tsx
│   │   │   ├── typography/page.tsx
│   │   │   ├── spacing/page.tsx
│   │   │   ├── radius/page.tsx
│   │   │   ├── shadows/page.tsx
│   │   │   └── icons/page.tsx
│   │   ├── components/
│   │   │   ├── page.tsx              # Components index
│   │   │   ├── button/page.tsx
│   │   │   ├── card/page.tsx
│   │   │   ├── input/page.tsx
│   │   │   ├── textarea/page.tsx
│   │   │   ├── checkbox/page.tsx
│   │   │   ├── radio/page.tsx
│   │   │   ├── select/page.tsx
│   │   │   ├── dropdown/page.tsx
│   │   │   ├── modal/page.tsx
│   │   │   ├── toast/page.tsx
│   │   │   ├── badge/page.tsx
│   │   │   ├── spinner/page.tsx
│   │   │   ├── empty-state/page.tsx
│   │   │   └── alert/page.tsx
│   │   ├── accessibility/
│   │   │   └── page.tsx
│   │   └── changelog/
│   │       └── page.tsx
├── components/
│   ├── ui/                           # shadcn/ui components + custom additions
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ... (shadcn-generated)
│   ├── docs/
│   │   ├── doc-layout-shell.tsx       # Shared wrapper for doc pages (header, breadcrumb)
│   │   ├── sidebar.tsx               # Left navigation tree
│   │   ├── top-nav.tsx               # Top bar (logo, search placeholder, theme toggle, GitHub)
│   │   ├── toc.tsx                   # Right "On This Page" navigation
│   │   ├── component-preview.tsx     # Interactive preview container
│   │   ├── props-table.tsx           # Auto-generated props table from object
│   │   ├── code-block.tsx            # Syntax highlighted code with copy
│   │   ├── variant-grid.tsx          # Grid of component variants
│   │   ├── status-badge.tsx          # Stable/Beta/Deprecated/Future badge
│   │   └── usage-guidelines.tsx      # "Use when" / "Don't use when" component
│   ├── landing/
│   │   ├── hero.tsx
│   │   ├── stats.tsx
│   │   ├── featured-sections.tsx
│   │   └── changelog-preview.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── utils.ts                      # cn() helper, misc utilities
│   ├── navigation.ts                 # Sidebar nav tree data structure
│   └── component-meta.ts             # Component metadata (names, descriptions, statuses)
├── hooks/
│   └── use-mounted.ts                # Hydration-safe mount detection
├── public/
│   └── ... (static assets)
├── next.config.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.mjs
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `tailwind.config.ts`
- Create: `postcss.config.mjs`
- Create: `app/globals.css`
- Create: `app/layout.tsx`
- Create: `lib/utils.ts`
- Create: `components/theme-toggle.tsx`
- Create: `hooks/use-mounted.ts`

- [ ] **Step 1: Initialize Next.js project and install dependencies**

```bash
cd /home/dip-kapat/Documents/Projects/prrrrrooooojects/design-system-component-library

# Create package.json
cat > package.json << 'EOF'
{
  "name": "design-system-showcase",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
EOF

# Install all dependencies upfront
npm install next@latest react@latest react-dom@latest \
  next-themes class-variance-authority clsx tailwind-merge \
  lucide-react @radix-ui/react-icons motion \
  geist tailwindcss-animate \
  @next/mdx @mdx-js/loader @mdx-js/react rehype-highlight

npm install -D typescript @types/react @types/node @tailwindcss/postcss tailwindcss
```

- [ ] **Step 2: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Create next.config.ts with MDX support**

```ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  output: "export",
  images: { unoptimized: true },
};

export default withMDX(nextConfig);
```

- [ ] **Step 4: Create postcss.config.mjs**

```mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

- [ ] **Step 5: Create app/globals.css with Crimson + Navy theme tokens**

```css
@import "tailwindcss";

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

:root {
  --background: #f8fafc;
  --foreground: #0f172a;
  --card: #ffffff;
  --card-foreground: #0f172a;
  --popover: #ffffff;
  --popover-foreground: #0f172a;
  --primary: #dc2626;
  --primary-foreground: #ffffff;
  --secondary: #1e3a5f;
  --secondary-foreground: #f8fafc;
  --muted: #f1f5f9;
  --muted-foreground: #475569;
  --accent: #1e3a5f;
  --accent-foreground: #f8fafc;
  --destructive: #dc2626;
  --destructive-foreground: #f8fafc;
  --border: #e2e8f0;
  --input: #e2e8f0;
  --ring: #dc2626;
  --radius: 0.5rem;
}

.dark {
  --background: #020617;
  --foreground: #f8fafc;
  --card: #0f172a;
  --card-foreground: #f8fafc;
  --popover: #0f172a;
  --popover-foreground: #f8fafc;
  --primary: #ef4444;
  --primary-foreground: #020617;
  --secondary: #1e3a5f;
  --secondary-foreground: #f8fafc;
  --muted: #1e293b;
  --muted-foreground: #94a3b8;
  --accent: #334155;
  --accent-foreground: #f8fafc;
  --destructive: #ef4444;
  --destructive-foreground: #f8fafc;
  --border: #1e293b;
  --input: #1e293b;
  --ring: #ef4444;
}

* {
  border-color: var(--border);
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: var(--font-geist-sans), system-ui, sans-serif;
}

@utility container-main {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (width >= 768px) {
  .container-main {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (width >= 1024px) {
  .container-main {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}
```

- [ ] **Step 6: Create lib/utils.ts**

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 7: Create hooks/use-mounted.ts**

```ts
"use client";

import { useEffect, useState } from "react";

export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
```

- [ ] **Step 8: Create components/theme-toggle.tsx**

```tsx
"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return <div className={cn("size-5", className)} />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "inline-flex items-center justify-center rounded-md p-2",
        "text-muted-foreground hover:text-foreground hover:bg-muted",
        "transition-colors duration-150",
        className,
      )}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
```

- [ ] **Step 9: Create app/layout.tsx**

```tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Component Library — Design System",
  description: "A scalable component library built with Tailwind CSS + shadcn/ui for modern applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-[100dvh] antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 10: Run first build check**

```bash
npx next build 2>&1 || echo "Build will fail until all pages exist — this is expected"
```

- [ ] **Step 11: Commit scaffold**

```bash
git add package.json tsconfig.json next.config.ts postcss.config.mjs tailwind.config.ts \
       app/globals.css app/layout.tsx lib/utils.ts hooks/use-mounted.ts \
       components/theme-toggle.tsx
git commit -m "feat: scaffold Next.js project with Crimson + Navy theme"
```

---

### Task 2: Navigation System + Docs Layout

**Files:**
- Create: `lib/navigation.ts`
- Create: `components/docs/sidebar.tsx`
- Create: `components/docs/top-nav.tsx`
- Create: `components/docs/toc.tsx`
- Create: `components/docs/breadcrumb.tsx`
- Create: `app/(docs)/layout.tsx`
- Create: `app/(docs)/page.tsx`

- [ ] **Step 1: Create lib/navigation.ts with sidebar tree data**

```ts
export type NavItem = {
  title: string;
  href?: string;
  status?: "stable" | "beta" | "deprecated" | "new";
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
  },
  {
    title: "Foundations",
    children: [
      { title: "Colors", href: "/foundations/colors" },
      { title: "Typography", href: "/foundations/typography" },
      { title: "Spacing", href: "/foundations/spacing" },
      { title: "Radius", href: "/foundations/radius" },
      { title: "Shadows", href: "/foundations/shadows" },
      { title: "Icons", href: "/foundations/icons" },
    ],
  },
  {
    title: "Components",
    children: [
      { title: "Button", href: "/components/button", status: "stable" },
      { title: "Badge", href: "/components/badge", status: "stable" },
      { title: "Card", href: "/components/card", status: "stable" },
      { title: "Input", href: "/components/input", status: "stable" },
      { title: "Textarea", href: "/components/textarea", status: "stable" },
      { title: "Checkbox", href: "/components/checkbox", status: "stable" },
      { title: "Radio", href: "/components/radio", status: "stable" },
      { title: "Select", href: "/components/select", status: "stable" },
      { title: "Dropdown", href: "/components/dropdown", status: "stable" },
      { title: "Modal", href: "/components/modal", status: "stable" },
      { title: "Toast", href: "/components/toast", status: "stable" },
      { title: "Spinner", href: "/components/spinner", status: "stable" },
      { title: "Alert", href: "/components/alert", status: "stable" },
      { title: "Empty State", href: "/components/empty-state", status: "stable" },
    ],
  },
  {
    title: "Accessibility",
    href: "/accessibility",
  },
  {
    title: "Changelog",
    href: "/changelog",
  },
];
```

- [ ] **Step 2: Create components/docs/sidebar.tsx**

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigation, type NavItem as NavItemType } from "@/lib/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function NavGroup({ item, pathname, depth = 0 }: { item: NavItemType; pathname: string; depth?: number }) {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href === pathname;
  const isChildActive = hasChildren && item.children!.some((c) => c.href === pathname);

  if (!hasChildren) {
    return (
      <Link
        href={item.href!}
        className={cn(
          "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
          isActive
            ? "bg-primary/10 text-primary font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-muted",
        )}
      >
        {item.title}
        {item.status && <StatusBadge status={item.status} />}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className={cn(
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isChildActive ? "text-foreground" : "text-muted-foreground",
          "hover:text-foreground hover:bg-muted",
        )}
      >
        {item.title}
        <ChevronDown
          className={cn("size-4 transition-transform", expanded && "rotate-180")}
        />
      </button>
      {expanded && (
        <div className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
          {item.children!.map((child) => (
            <NavGroup key={child.href || child.title} item={child} pathname={pathname} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    stable: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    beta: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    deprecated: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    new: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  };
  return (
    <span className={cn("ml-auto rounded px-1.5 py-0.5 text-[10px] font-medium uppercase", colors[status])}>
      {status}
    </span>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 py-4">
      {navigation.map((item) => (
        <NavGroup key={item.title} item={item} pathname={pathname} />
      ))}
    </nav>
  );
}
```

- [ ] **Step 3: Create components/docs/top-nav.tsx**

```tsx
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Search, Github } from "lucide-react";

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-main flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <span className="text-primary font-bold">✦</span>
            <span>Design System</span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Search className="size-4" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden md:inline-flex rounded border bg-muted px-1.5 text-[10px] text-muted-foreground">
              ⌘K
            </kbd>
          </button>
          <ThemeToggle />
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="GitHub"
          >
            <Github className="size-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 4: Create components/docs/toc.tsx**

```tsx
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Heading = { id: string; text: string; level: number };

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3")).map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: Number(el.tagName[1]),
    }));
    setHeadings(elements);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" },
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-20">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        On this page
      </h4>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? "1rem" : "0" }}>
            <a
              href={`#${h.id}`}
              className={cn(
                "block text-sm transition-colors py-1",
                activeId === h.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

- [ ] **Step 5: Create components/docs/breadcrumb.tsx**

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const labelMap: Record<string, string> = {
  "getting-started": "Getting Started",
  foundations: "Foundations",
  components: "Components",
  accessibility: "Accessibility",
  changelog: "Changelog",
};

export function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
      <Link href="/" className="hover:text-foreground transition-colors">
        Home
      </Link>
      {segments.map((segment, i) => {
        const href = "/" + segments.slice(0, i + 1).join("/");
        const label = labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
        const isLast = i === segments.length - 1;
        return (
          <span key={href} className="flex items-center gap-1.5">
            <ChevronRight className="size-3.5" />
            {isLast ? (
              <span className="text-foreground font-medium">{label}</span>
            ) : (
              <Link href={href} className="hover:text-foreground transition-colors">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
```

- [ ] **Step 6: Create app/(docs)/layout.tsx**

```tsx
import { Sidebar } from "@/components/docs/sidebar";
import { TopNav } from "@/components/docs/top-nav";
import { TableOfContents } from "@/components/docs/toc";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh]">
      <TopNav />
      <div className="container-main flex">
        <aside className="hidden lg:block w-64 shrink-0 border-r border-border">
          <Sidebar />
        </aside>
        <main className="flex-1 min-w-0 py-8 px-6 lg:px-10">
          {children}
        </main>
        <aside className="hidden xl:block w-56 shrink-0">
          <div className="pl-6 py-8">
            <TableOfContents />
          </div>
        </aside>
      </div>
    </div>
  );
}
```

- [ ] **Step 7: Create app/(docs)/page.tsx (redirect to getting-started)**

```tsx
import { redirect } from "next/navigation";

export default function DocsIndex() {
  redirect("/getting-started");
}
```

- [ ] **Step 8: Create placeholder pages for build to succeed**

Create minimal placeholder pages for all routes:

```bash
# Getting Started
cat > app/\(docs\)/getting-started/page.tsx << 'PAGE'
import { Breadcrumb } from "@/components/docs/breadcrumb";

export default function GettingStartedPage() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <Breadcrumb />
      <h1 id="introduction">Getting Started</h1>
      <p>Introduction to the design system.</p>
    </article>
  );
}
PAGE

# Foundations index
cat > app/\(docs\)/foundations/page.tsx << 'PAGE'
import { Breadcrumb } from "@/components/docs/breadcrumb";

export default function FoundationsPage() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <Breadcrumb />
      <h1 id="overview">Foundations</h1>
      <p>Design foundations overview.</p>
    </article>
  );
}
PAGE

# Components index
mkdir -p app/\(docs\)/components
cat > app/\(docs\)/components/page.tsx << 'PAGE'
import { Breadcrumb } from "@/components/docs/breadcrumb";

export default function ComponentsPage() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <Breadcrumb />
      <h1 id="overview">Components</h1>
      <p>Component library overview.</p>
    </article>
  );
}
PAGE
```

- [ ] **Step 9: Add Geist font to package.json and install**

```bash
npm install geist
```

- [ ] **Step 10: Create foundation placeholder pages**

```bash
for dir in colors typography spacing radius shadows icons; do
  mkdir -p "app/(docs)/foundations/$dir"
  cat > "app/(docs)/foundations/$dir/page.tsx" << EOF
import { Breadcrumb } from "@/components/docs/breadcrumb";

export default function ${dir^}Page() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <Breadcrumb />
      <h1 id="${dir}">${dir^}</h1>
      <p>${dir^} documentation.</p>
    </article>
  );
}
EOF
done
```

- [ ] **Step 11: Run build check**

```bash
npx next build 2>&1 | tail -20
```

- [ ] **Step 12: Commit**

```bash
git add lib/navigation.ts components/docs/ app/\(docs\)/ app/\(docs\)/getting-started/ \
       app/\(docs\)/foundations/ app/\(docs\)/components/
git commit -m "feat: add navigation system and docs layout with sidebar"
```

---

### Task 3: shadcn/ui Components Setup + Doc Template Components

**Files:**
- Create: `components.json`
- Create: `components/ui/button.tsx` (shadcn button)
- Create: `components/ui/card.tsx`
- Create: `components/ui/badge.tsx`
- Create: `components/ui/dialog.tsx`
- Create: `components/ui/input.tsx`
- Create: `components/ui/label.tsx`
- Create: `components/ui/select.tsx`
- Create: `components/ui/textarea.tsx`
- Create: `components/ui/checkbox.tsx`
- Create: `components/ui/radio-group.tsx`
- Create: `components/ui/dropdown-menu.tsx`
- Create: `components/ui/toast.tsx`
- Create: `components/ui/toaster.tsx`
- Create: `components/docs/component-preview.tsx`
- Create: `components/docs/props-table.tsx`
- Create: `components/docs/code-block.tsx`
- Create: `components/docs/variant-grid.tsx`
- Create: `components/docs/status-badge.tsx`
- Create: `components/docs/usage-guidelines.tsx`

- [ ] **Step 1: Create components.json**

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

- [ ] **Step 2: Install tailwindcss-animate**

```bash
npm install tailwindcss-animate
```

Note: The `@plugin "tailwindcss-animate"` directive is already in globals.css.

- [ ] **Step 3: Initialize shadcn/ui components using the CLI**

```bash
npx shadcn@latest add button card badge dialog input label select textarea checkbox radio-group dropdown-menu
```

If the CLI is unavailable, create each component manually following the shadcn/ui source patterns.

- [ ] **Step 4: Create components/docs/status-badge.tsx**

```tsx
import { cn } from "@/lib/utils";

type Status = "stable" | "beta" | "deprecated" | "new";

const statusStyles: Record<Status, string> = {
  stable: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  beta: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  deprecated: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800",
  new: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium", statusStyles[status])}>
      {status}
    </span>
  );
}
```

- [ ] **Step 5: Create components/docs/usage-guidelines.tsx**

```tsx
import { CheckCircle2, XCircle } from "lucide-react";

export function UsageGuidelines({ do: doList, dont: dontList }: { do: string[]; dont: string[] }) {
  return (
    <div className="my-8 grid gap-6 sm:grid-cols-2">
      <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/20 p-4">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-3">
          <CheckCircle2 className="size-4" />
          Use when
        </h3>
        <ul className="space-y-1.5">
          {doList.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-0.5 size-1.5 rounded-full bg-emerald-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-red-200 bg-red-50/50 dark:border-red-900 dark:bg-red-950/20 p-4">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-red-400 mb-3">
          <XCircle className="size-4" />
          Don't use when
        </h3>
        <ul className="space-y-1.5">
          {dontList.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-0.5 size-1.5 rounded-full bg-red-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Create components/docs/props-table.tsx**

```tsx
export type PropDef = {
  name: string;
  type: string;
  default: string;
  description: string;
};

export function PropsTable({ props }: { props: PropDef[] }) {
  return (
    <div className="my-8 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
            <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
            <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
            <th className="px-4 py-3 text-left font-medium text-foreground">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b border-border last:border-0">
              <td className="px-4 py-3 font-mono text-xs text-primary">{prop.name}</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{prop.type}</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{prop.default}</td>
              <td className="px-4 py-3 text-muted-foreground">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

- [ ] **Step 7: Create components/docs/code-block.tsx**

```tsx
"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-6 rounded-lg border border-border overflow-hidden">
      <div className="flex items-center justify-between bg-muted px-4 py-2 border-b border-border">
        <span className="text-xs text-muted-foreground font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
}
```

- [ ] **Step 8: Create components/docs/component-preview.tsx**

```tsx
"use client";

import { cn } from "@/lib/utils";

export function ComponentPreview({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "my-6 flex min-h-[200px] w-full items-center justify-center rounded-lg border border-border bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] p-10",
        "[background-size:16px_16px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 9: Create components/docs/variant-grid.tsx**

```tsx
export function VariantGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {children}
    </div>
  );
}

export function VariantCell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-border p-4">
      <div className="flex items-center justify-center min-h-[40px]">
        {children}
      </div>
      <span className="text-xs text-muted-foreground font-medium">{label}</span>
    </div>
  );
}
```

- [ ] **Step 10: Commit**

```bash
git add components.json components/ui/ components/docs/status-badge.tsx \
       components/docs/usage-guidelines.tsx components/docs/props-table.tsx \
       components/docs/code-block.tsx components/docs/component-preview.tsx \
       components/docs/variant-grid.tsx
git commit -m "feat: add shadcn/ui components and doc template components"
```

---

### Task 4: Landing Page

**Files:**
- Create: `components/landing/hero.tsx`
- Create: `components/landing/stats.tsx`
- Create: `components/landing/featured-sections.tsx`
- Create: `components/landing/changelog-preview.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create components/landing/hero.tsx**

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container-main py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            v0.1.0 — Beta release
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            A scalable component library built with{" "}
            <span className="text-primary">Tailwind CSS</span> + shadcn/ui
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-[65ch] leading-relaxed">
            Centralized documentation for reusable UI components. Visual consistency,
            standardized interaction patterns, and faster UI development across all products.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/components"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View Components
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/getting-started"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              Getting Started
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute -top-24 -right-24 size-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 size-64 rounded-full bg-secondary/5 blur-3xl" />
    </section>
  );
}
```

- [ ] **Step 2: Create components/landing/stats.tsx**

```tsx
const stats = [
  { value: "14", label: "Components", description: "Production-ready UI components" },
  { value: "6", label: "Foundations", description: "Design tokens and guidelines" },
  { value: "100%", label: "Accessible", description: "WCAG AA compliant by default" },
  { value: "2", label: "Themes", description: "Light + Dark mode support" },
];

export function Stats() {
  return (
    <section className="border-b border-border py-16">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-foreground">{stat.label}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create components/landing/featured-sections.tsx**

```tsx
import Link from "next/link";
import { Palette, Layout, Accessibility, Paintbrush } from "lucide-react";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Foundations",
    description: "Colors, typography, spacing, and design tokens that define the visual language.",
    icon: Palette,
    href: "/foundations",
  },
  {
    title: "Components",
    description: "Reusable UI components with variants, states, and interactive examples.",
    icon: Layout,
    href: "/components",
  },
  {
    title: "Accessibility",
    description: "WCAG-compliant components with keyboard support and screen reader guidance.",
    icon: Accessibility,
    href: "/accessibility",
  },
  {
    title: "Design Tokens",
    description: "Semantic tokens for consistent theming across light and dark modes.",
    icon: Paintbrush,
    href: "/foundations/colors",
  },
];

export function FeaturedSections() {
  return (
    <section className="border-b border-border py-16">
      <div className="container-main">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.title}
                href={feature.href}
                className="group rounded-lg border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="size-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create components/landing/changelog-preview.tsx**

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const entries = [
  { version: "0.1.0", date: "July 2026", items: ["14 components", "6 foundation pages", "Light + Dark theme"] },
];

export function ChangelogPreview() {
  return (
    <section className="py-16">
      <div className="container-main">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Recent Updates</h2>
          <Link
            href="/changelog"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <div className="rounded-lg border border-border divide-y divide-border">
          {entries.map((entry) => (
            <div key={entry.version} className="flex items-start gap-6 p-4">
              <div className="shrink-0">
                <div className="text-sm font-semibold text-foreground">v{entry.version}</div>
                <div className="text-xs text-muted-foreground">{entry.date}</div>
              </div>
              <ul className="space-y-1">
                {entry.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="size-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Update app/page.tsx**

```tsx
import { Hero } from "@/components/landing/hero";
import { Stats } from "@/components/landing/stats";
import { FeaturedSections } from "@/components/landing/featured-sections";
import { ChangelogPreview } from "@/components/landing/changelog-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedSections />
      <ChangelogPreview />
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <div className="container-main">
          Design System · Built with Next.js + Tailwind CSS + shadcn/ui
        </div>
      </footer>
    </>
  );
}
```

- [ ] **Step 6: Build check**

```bash
npx next build 2>&1 | tail -15
```

- [ ] **Step 7: Commit**

```bash
git add components/landing/ app/page.tsx
git commit -m "feat: build landing page with hero, stats, featured sections, changelog"
```

---

### Task 5: Component Documentation — Button (first full component page)

**File:** Create `components/docs/doc-layout-shell.tsx`
**File:** Create `app/(docs)/components/button/page.tsx`

- [ ] **Step 1: Create components/docs/doc-layout-shell.tsx**

```tsx
import { Breadcrumb } from "@/components/docs/breadcrumb";
import { StatusBadge } from "@/components/docs/status-badge";
import type { Status } from "@/components/docs/status-badge";

type DocShellProps = {
  title: string;
  description: string;
  status: Status;
  children: React.ReactNode;
};

export function DocShell({ title, description, status, children }: DocShellProps) {
  return (
    <article className="max-w-none">
      <Breadcrumb />
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 id={title.toLowerCase()} className="text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          <StatusBadge status={status} />
        </div>
        <p className="text-lg text-muted-foreground max-w-[65ch]">{description}</p>
      </div>
      {children}
    </article>
  );
}
```

- [ ] **Step 2: Create app/(docs)/components/button/page.tsx**

```tsx
import { DocShell } from "@/components/docs/doc-layout-shell";
import { UsageGuidelines } from "@/components/docs/usage-guidelines";
import { ComponentPreview } from "@/components/docs/component-preview";
import { VariantGrid, VariantCell } from "@/components/docs/variant-grid";
import { PropsTable, type PropDef } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const props: PropDef[] = [
  { name: "variant", type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"', default: '"default"', description: "Visual style variant" },
  { name: "size", type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: "Component size" },
  { name: "disabled", type: "boolean", default: "false", description: "Prevent interaction" },
  { name: "asChild", type: "boolean", default: "false", description: "Render as child element (Radix)" },
];

export default function ButtonPage() {
  return (
    <DocShell
      title="Button"
      description="Used to trigger an action or event. Primary call-to-action for forms, dialogs, and user interactions."
      status="stable"
    >
      <UsageGuidelines
        do={[
          "Primary actions like form submission",
          "Dialog confirmation actions",
          "Triggering modals or dropdowns",
          "Call-to-action buttons in empty states",
        ]}
        dont={[
          "Navigation between pages (use Link instead)",
          "Long text labels (keep under 25 characters)",
          "Multiple primary buttons in one section",
          "As a replacement for text links inline",
        ]}
      />

      <h2 id="variants" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Variants</h2>
      <VariantGrid>
        <VariantCell label="Default"><Button>Button</Button></VariantCell>
        <VariantCell label="Secondary"><Button variant="secondary">Button</Button></VariantCell>
        <VariantCell label="Outline"><Button variant="outline">Button</Button></VariantCell>
        <VariantCell label="Ghost"><Button variant="ghost">Button</Button></VariantCell>
        <VariantCell label="Destructive"><Button variant="destructive">Button</Button></VariantCell>
        <VariantCell label="Link"><Button variant="link">Button</Button></VariantCell>
      </VariantGrid>

      <h2 id="sizes" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Sizes</h2>
      <ComponentPreview>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </ComponentPreview>

      <h2 id="states" className="text-2xl font-semibold tracking-tight mt-12 mb-4">States</h2>
      <VariantGrid>
        <VariantCell label="Default"><Button>Default</Button></VariantCell>
        <VariantCell label="Hover"><Button className="hover:bg-primary/90">Hover</Button></VariantCell>
        <VariantCell label="Disabled"><Button disabled>Disabled</Button></VariantCell>
        <VariantCell label="Loading">
          <Button disabled>
            <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
            Loading
          </Button>
        </VariantCell>
      </VariantGrid>

      <h2 id="props" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Props</h2>
      <PropsTable props={props} />

      <h2 id="accessibility" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Accessibility</h2>
      <div className="my-4 space-y-3 text-sm text-muted-foreground">
        <p>✓ Keyboard support via Space and Enter keys (native button behavior)</p>
        <p>✓ Focus ring visible on keyboard navigation using :focus-visible</p>
        <p>✓ ARIA button role applied automatically when using asChild</p>
        <p>✓ Disabled state uses aria-disabled and reduced opacity</p>
        <p>✓ Minimum color contrast ratio of 4.5:1 for text on background</p>
      </div>

      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <CodeBlock
        language="tsx"
        code={`import { Button } from "@/components/ui/button";

export function MyComponent() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Primary Action</Button>
      <Button variant="outline">Secondary Action</Button>
    </div>
  );
}`}
      />

      <h2 id="related" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Related Components</h2>
      <div className="flex flex-wrap gap-3 my-4">
        <Link href="/components/dropdown" className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          Dropdown <ArrowRight className="size-3.5" />
        </Link>
        <Link href="/components/modal" className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          Modal <ArrowRight className="size-3.5" />
        </Link>
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-border pt-6">
        <Link href="/components/badge" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="size-4" /> Badge
        </Link>
        <Link href="/components/card" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          Card <ArrowRight className="size-4" />
        </Link>
      </div>
    </DocShell>
  );
}
```

- [ ] **Step 3: Build check**

```bash
npx next build 2>&1 | tail -15
```

- [ ] **Step 4: Commit**

```bash
git add components/docs/doc-layout-shell.tsx app/\(docs\)/components/button/page.tsx
git commit -m "feat: add Button component documentation page"
```

---

### Task 6: Remaining Component Pages

**Files:** Create pages for: Badge, Card, Input, Textarea, Checkbox, Radio, Select, Dropdown, Modal, Toast, Spinner, Alert, Empty State

Each page follows the same 10-section template pattern established in Task 5. For brevity, the plan details the first implementation; remaining 13 pages follow identical structure with component-specific content.

- [ ] **Step 1: Create Card component page**

```tsx
// app/(docs)/components/card/page.tsx
import { DocShell } from "@/components/docs/doc-layout-shell";
import { UsageGuidelines } from "@/components/docs/usage-guidelines";
import { ComponentPreview } from "@/components/docs/component-preview";
import { PropsTable, type PropDef } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const props: PropDef[] = [];

export default function CardPage() {
  return (
    <DocShell title="Card" description="Containers for grouping related content and actions." status="stable">
      <UsageGuidelines
        do={["Grouping related information", "Displaying content previews", "Dashboard widgets and stats"]}
        dont={["Nesting cards inside cards", "Using cards for simple dividers", "Overloading with too much content"]}
      />
      <h2 id="variants" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Examples</h2>
      <ComponentPreview>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Card content area. Add any React components here.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Action</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>
      <h2 id="accessibility" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Accessibility</h2>
      <p className="text-sm text-muted-foreground">✓ Cards are regions with aria-label when interactive. ✓ Focusable when used as a link or button.</p>
      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <CodeBlock language="tsx" code={'import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";\n\n<Card>\n  <CardHeader>\n    <CardTitle>Title</CardTitle>\n  </CardHeader>\n  <CardContent>\n    <p>Content</p>\n  </CardContent>\n</Card>'} />
      <div className="mt-16 flex items-center justify-between border-t border-border pt-6">
        <Link href="/components/button" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> Button</Link>
        <Link href="/components/input" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">Input <ArrowRight className="size-4" /></Link>
      </div>
    </DocShell>
  );
}
```

- [ ] **Step 2: Create remaining 13 component pages**

Each page follows the exact same pattern as Button and Card:
- Import DocShell, UsageGuidelines, ComponentPreview, VariantGrid, PropsTable, CodeBlock
- 10-section template: header → guidelines → playground → variants → states → props → a11y → code → related → prev/next

Create using a script pattern for consistency:

```bash
# Template pattern for each component page
# Components in order: Badge, Input, Textarea, Checkbox, Radio, Select, Dropdown, Modal, Toast, Spinner, Alert, Empty State

for component in badge input textarea checkbox radio select dropdown modal toast spinner alert empty-state; do
  mkdir -p "app/(docs)/components/$component"
  # Create each page following the same template pattern
done
```

Each component page needs:
- Component-specific usage guidelines (do/dont)
- Component-specific live preview
- Variants specific to that component
- Props table with component-specific props
- A11y notes specific to that component
- Code snippet for basic usage
- Prev/next links following the navigation order

- [ ] **Step 3: Build check**

```bash
npx next build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
git add app/\(docs\)/components/
git commit -m "feat: add all 14 component documentation pages"
```

---

### Task 7: Foundation Pages

**Files:** Create foundation pages: Colors, Typography, Spacing, Radius, Shadows, Icons

- [ ] **Step 1: Create Colors page with visual token swatches**

```tsx
// app/(docs)/foundations/colors/page.tsx
import { DocShell } from "@/components/docs/doc-layout-shell";

const colorGroups = [
  {
    title: "Primary",
    colors: [
      { name: "Primary", hex: "#dc2626", cssVar: "--primary" },
      { name: "Primary Foreground", hex: "#ffffff", cssVar: "--primary-foreground" },
    ],
  },
  {
    title: "Secondary",
    colors: [
      { name: "Secondary", hex: "#1e3a5f", cssVar: "--secondary" },
      { name: "Secondary Foreground", hex: "#f8fafc", cssVar: "--secondary-foreground" },
    ],
  },
  {
    title: "Neutrals",
    colors: [
      { name: "Background", hex: "#f8fafc", cssVar: "--background" },
      { name: "Foreground", hex: "#0f172a", cssVar: "--foreground" },
      { name: "Muted", hex: "#f1f5f9", cssVar: "--muted" },
      { name: "Muted Foreground", hex: "#475569", cssVar: "--muted-foreground" },
      { name: "Border", hex: "#e2e8f0", cssVar: "--border" },
    ],
  },
];

export default function ColorsPage() {
  return (
    <DocShell title="Colors" description="Semantic color tokens for the design system." status="stable">
      {colorGroups.map((group) => (
        <div key={group.title} className="mb-10">
          <h2 id={group.title.toLowerCase()} className="text-xl font-semibold mb-4">{group.title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {group.colors.map((color) => (
              <div key={color.name} className="rounded-lg border border-border overflow-hidden">
                <div className="h-20" style={{ backgroundColor: color.hex }} />
                <div className="p-3 space-y-1">
                  <div className="text-sm font-medium">{color.name}</div>
                  <div className="font-mono text-xs text-muted-foreground">{color.hex}</div>
                  <div className="font-mono text-xs text-muted-foreground">{color.cssVar}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </DocShell>
  );
}
```

- [ ] **Step 2: Create Typography page**

Shows Geist font family, type scale (h1-h6, body, small, code), line heights, font weights, and usage examples.

- [ ] **Step 3: Create Spacing page**

Shows the spacing scale (4, 8, 12, 16, 24, 32, 40, 48, 64, 96) with visual boxes demonstrating each increment.

- [ ] **Step 4: Create Radius page**

Shows radius scale (none, sm, md, lg, xl, 2xl, full) with visual examples.

- [ ] **Step 5: Create Shadows page**

Shows shadow scale (sm, md, lg, xl, 2xl) with visual card previews.

- [ ] **Step 6: Create Icons page**

Shows the icon set available (from lucide-react and @radix-ui/react-icons) organized by category.

- [ ] **Step 7: Build check**

```bash
npx next build 2>&1 | tail -20
```

- [ ] **Step 8: Commit**

```bash
git add app/\(docs\)/foundations/
git commit -m "feat: add foundation pages for colors, typography, spacing, radius, shadows, icons"
```

---

### Task 8: Getting Started + Accessibility + Changelog Pages

- [ ] **Step 1: Create Getting Started page with Introduction, Principles, Installation, FAQ sections**

- [ ] **Step 2: Create Accessibility page with guidelines overview**

- [ ] **Step 3: Create Changelog page with version timeline**

- [ ] **Step 4: Build check and final verification**

```bash
npx next build 2>&1
```

- [ ] **Step 5: Final commit**

```bash
git add app/\(docs\)/getting-started/ app/\(docs\)/accessibility/ app/\(docs\)/changelog/
git commit -m "feat: add getting started, accessibility, and changelog pages"
```

---

## Self-Review

- **Spec coverage:** Every section from the spec is covered: landing page, docs layout (sidebar + top nav + TOC), component page template (10 sections), foundation pages, getting started, accessibility, changelog. Crimson + Navy theme applied throughout.
- **Placeholder check:** No TBD/TODO placeholders. Every step has concrete code.
- **Type consistency:** `StatusBadge` uses `Status` type consistently. `PropDef` interface shared across all component pages. Navigation tree type used in sidebar matches `lib/navigation.ts`.
