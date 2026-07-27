import { Breadcrumb } from "@/components/docs/breadcrumb";
import { CodeBlock } from "@/components/docs/code-block";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GettingStartedPage() {
  return (
    <article className="max-w-none">
      <Breadcrumb />
      <div className="mb-8">
        <h1 id="introduction" className="text-3xl font-bold tracking-tight text-foreground">Getting Started</h1>
        <p className="text-lg text-muted-foreground max-w-[65ch] mt-2">
          Everything you need to start building with the Design System component library.
        </p>
      </div>

      <h2 id="introduction" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Introduction</h2>
      <p className="text-muted-foreground leading-relaxed">
        This design system provides a centralized, reusable set of UI components built with Tailwind CSS and shadcn/ui.
        It ensures visual consistency, standardized interaction patterns, and faster development across all products.
      </p>

      <h2 id="principles" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Principles</h2>
      <div className="grid gap-6 sm:grid-cols-2 mb-6">
        <div className="rounded-lg border border-border p-4">
          <h3 className="font-semibold text-sm mb-1">Accessible by default</h3>
          <p className="text-sm text-muted-foreground">All components meet WCAG AA standards. Keyboard navigation, screen reader support, and sufficient color contrast are built-in.</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="font-semibold text-sm mb-1">Composable</h3>
          <p className="text-sm text-muted-foreground">Components are designed to be combined. Use them as building blocks — not rigid templates.</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="font-semibold text-sm mb-1">Themeable</h3>
          <p className="text-sm text-muted-foreground">CSS custom properties power the entire design language. Change the tokens, change the look.</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="font-semibold text-sm mb-1">Progressive</h3>
          <p className="text-sm text-muted-foreground">Start with the basics. Add complexity as needed. No mandatory wrappers or boilerplate.</p>
        </div>
      </div>

      <h2 id="installation" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Installation</h2>
      <p className="text-muted-foreground mb-4">The component library is available as a Next.js project. To add it to your project:</p>
      <CodeBlock
        language="bash"
        code={`npm install next@latest react@latest react-dom@latest
npm install next-themes class-variance-authority clsx tailwind-merge
npm install lucide-react @radix-ui/react-icons
npm install geist tailwindcss-animate`}
      />
      <p className="text-muted-foreground mt-4">Configure your globals.css with the theme tokens from the Colors page, and import Geist fonts in your root layout.</p>

      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <p className="text-muted-foreground mb-4">Import components directly from the components/ui directory:</p>
      <CodeBlock
        language="tsx"
        code={`import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function MyComponent() {
  return (
    <Card>
      <CardContent>
        <Button variant="default">Click me</Button>
      </CardContent>
    </Card>
  );
}`}
      />

      <h2 id="faq" className="text-2xl font-semibold tracking-tight mt-12 mb-4">FAQ</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-sm mb-1">Can I customize the colors?</h3>
          <p className="text-sm text-muted-foreground">Yes. All colors are CSS custom properties. Override --primary and --secondary in your globals.css to rebrand.</p>
        </div>
        <div>
          <h3 className="font-semibold text-sm mb-1">How do I add dark mode?</h3>
          <p className="text-sm text-muted-foreground">Dark mode is built-in via next-themes. Use the ThemeToggle component or the class strategy with a .dark class.</p>
        </div>
        <div>
          <h3 className="font-semibold text-sm mb-1">Can I use these components in production?</h3>
          <p className="text-sm text-muted-foreground">Yes. All components are stable (v0.1.0) and follow the same patterns used by shadcn/ui in production applications.</p>
        </div>
      </div>

      <div className="mt-12">
        <Link href="/foundations/colors" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Explore Foundations <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}
