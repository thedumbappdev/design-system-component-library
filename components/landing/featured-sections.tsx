"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Palette, Layout, Eye, Paintbrush, Sparkles, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Foundations",
    description: "Colors, typography, spacing, and design tokens that define the visual language.",
    icon: Palette,
    href: "/foundations",
    iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    borderColor: "border-violet-500/20 hover:border-violet-500/40",
    wide: false,
  },
  {
    title: "Components",
    description: "Reusable UI components with variants, states, and interactive examples. Fully documented with live previews.",
    icon: Layout,
    href: "/components",
    iconBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    borderColor: "border-primary/20 hover:border-primary/40",
    wide: true,
  },
  {
    title: "Accessibility",
    description: "WCAG-compliant components with keyboard support and screen reader guidance.",
    icon: Eye,
    href: "/accessibility",
    iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
    wide: false,
  },
  {
    title: "Design Tokens",
    description: "Semantic tokens for consistent theming across light and dark modes. Every color, shadow, and radius documented.",
    icon: Paintbrush,
    href: "/foundations/colors",
    iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-500/20 hover:border-amber-500/40",
    wide: false,
  },
];

export function FeaturedSections() {
  return (
    <section className="border-b border-border py-20">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <Sparkles className="size-3.5 text-primary" />
            Everything you need
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Explore the design system
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={feature.wide ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <Link
                  href={feature.href}
                  className={`group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 lg:p-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] hover:shadow-[0_0_40px_-12px_rgba(79,70,229,0.15)] ${feature.borderColor}`}
                >
                  <div className={`mb-5 inline-flex rounded-xl p-3.5 ${feature.iconBg}`}>
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    Explore <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <Link
              href="/getting-started"
              className="group relative flex h-full items-center justify-between rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 p-6 lg:p-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.01] hover:shadow-[0_0_40px_-12px_rgba(79,70,229,0.1)]"
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Ready to start building?
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Follow our quickstart guide to integrate the design system into your project.
                </p>
              </div>
              <div className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20">
                Quickstart
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}