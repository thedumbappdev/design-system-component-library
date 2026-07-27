import { Breadcrumb } from "@/components/docs/breadcrumb";
import Link from "next/link";
import { ArrowRight, Layout, Palette, Accessibility, Paintbrush } from "lucide-react";

const categories = [
  { title: "Foundations", description: "Colors, typography, spacing, radius, and shadows", href: "/foundations", icon: Palette, color: "text-violet-600 dark:text-violet-400 bg-violet-500/10" },
  { title: "Components", description: "14 production-ready UI components with variants", href: "/components", icon: Layout, color: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10" },
  { title: "Accessibility", description: "WCAG AA compliant with keyboard support", href: "/accessibility", icon: Accessibility, color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10" },
  { title: "Design Tokens", description: "Semantic tokens for consistent theming", href: "/foundations/colors", icon: Paintbrush, color: "text-amber-600 dark:text-amber-400 bg-amber-500/10" },
];

export default function ComponentsPage() {
  return (
    <article className="max-w-none">
      <Breadcrumb />
      <div className="mb-10">
        <h1 id="overview" className="text-3xl font-bold tracking-tight text-foreground">Components</h1>
        <p className="text-lg text-muted-foreground max-w-[65ch] mt-2 leading-relaxed">
          Browse the complete component library — from foundational design tokens to interactive UI components.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.title}
              href={cat.href}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] hover:shadow-[0_0_40px_-12px_rgba(79,70,229,0.15)]"
            >
              <div className={`mb-4 inline-flex rounded-xl p-3 ${cat.color}`}>
                <Icon className="size-5" />
              </div>
              <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {cat.title}
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                Browse <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </article>
  );
}
