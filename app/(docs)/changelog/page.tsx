import { Breadcrumb } from "@/components/docs/breadcrumb";
import { StatusBadge } from "@/components/docs/status-badge";

const versions = [
  {
    version: "0.1.0",
    date: "July 2026",
    status: "stable" as const,
    items: [
      "14 production-ready UI components",
      "6 foundation pages with visual tokens",
      "Landing page with hero, stats, and featured sections",
      "Light + Dark theme support via next-themes",
      "Docs layout with sidebar navigation and TOC",
      "Component doc template with 10 sections",
      "Crimson + Navy color palette",
      "Geist + Geist Mono typography system",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <article className="max-w-none">
      <Breadcrumb />
      <div className="mb-8">
        <h1 id="overview" className="text-3xl font-bold tracking-tight text-foreground">Changelog</h1>
        <p className="text-lg text-muted-foreground max-w-[65ch] mt-2">
          Version history and release notes for the Design System component library.
        </p>
      </div>

      <div className="relative pl-8 border-l-2 border-border space-y-10">
        {versions.map((v) => (
          <div key={v.version} className="relative">
            <div className="absolute -left-[41px] top-0 size-4 rounded-full border-2 border-border bg-background" />
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl font-bold tracking-tight">v{v.version}</h2>
              <StatusBadge status={v.status} />
            </div>
            <p className="text-sm text-muted-foreground mb-4">{v.date}</p>
            <ul className="space-y-2">
              {v.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
