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
