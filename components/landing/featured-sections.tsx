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
