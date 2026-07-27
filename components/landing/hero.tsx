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
