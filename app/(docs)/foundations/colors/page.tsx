import { DocShell } from "@/components/docs/doc-layout-shell";

const colorGroups = [
  {
    title: "Primary",
    colors: [
      { name: "Primary", hex: "#4f46e5", cssVar: "--primary" },
      { name: "Primary Foreground", hex: "#ffffff", cssVar: "--primary-foreground" },
    ],
  },
  {
    title: "Accent",
    colors: [
      { name: "Accent", hex: "#e11d48", cssVar: "--accent" },
      { name: "Accent Foreground", hex: "#ffffff", cssVar: "--accent-foreground" },
    ],
  },
  {
    title: "Neutrals",
    colors: [
      { name: "Background", hex: "#fafaf9", cssVar: "--background" },
      { name: "Foreground", hex: "#1c1917", cssVar: "--foreground" },
      { name: "Muted", hex: "#f5f5f4", cssVar: "--muted" },
      { name: "Muted Foreground", hex: "#78716c", cssVar: "--muted-foreground" },
      { name: "Card", hex: "#ffffff", cssVar: "--card" },
      { name: "Card Foreground", hex: "#1c1917", cssVar: "--card-foreground" },
      { name: "Popover", hex: "#ffffff", cssVar: "--popover" },
      { name: "Popover Foreground", hex: "#1c1917", cssVar: "--popover-foreground" },
      { name: "Border", hex: "#e7e5e4", cssVar: "--border" },
      { name: "Input", hex: "#e7e5e4", cssVar: "--input" },
      { name: "Ring", hex: "#4f46e5", cssVar: "--ring" },
    ],
  },
  {
    title: "Semantic",
    colors: [
      { name: "Destructive", hex: "#e11d48", cssVar: "--destructive" },
      { name: "Destructive Foreground", hex: "#fafaf9", cssVar: "--destructive-foreground" },
      { name: "Secondary", hex: "#292524", cssVar: "--secondary" },
      { name: "Secondary Foreground", hex: "#fafaf9", cssVar: "--secondary-foreground" },
      { name: "Radius", hex: "0.75rem", cssVar: "--radius" },
    ],
  },
  {
    title: "Dark Mode Overrides",
    colors: [
      { name: "Dark Background", hex: "#0c0c0c", cssVar: "--background (dark)" },
      { name: "Dark Foreground", hex: "#fafaf9", cssVar: "--foreground (dark)" },
      { name: "Dark Primary", hex: "#818cf8", cssVar: "--primary (dark)" },
      { name: "Dark Accent", hex: "#fb7185", cssVar: "--accent (dark)" },
      { name: "Dark Card", hex: "#1a1a1a", cssVar: "--card (dark)" },
      { name: "Dark Border", hex: "#27272a", cssVar: "--border (dark)" },
    ],
  },
];

export default function ColorsPage() {
  return (
    <DocShell title="Colors" description="Semantic color tokens for the design system." status="stable">
      <p className="text-muted-foreground mb-8 leading-relaxed">All colors are defined as CSS custom properties and referenced by semantic tokens. This ensures consistent theming across light and dark modes. The palette uses a vibrant indigo primary and rose accent on warm stone neutrals.</p>
      {colorGroups.map((group) => (
        <div key={group.title} className="mb-12">
          <h2 id={group.title.toLowerCase().replace(/\s+/g, "-")} className="text-xl font-semibold mb-4">{group.title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {group.colors.map((color) => (
              <div key={color.name} className="rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.1)]">
                <div className="h-20" style={{ backgroundColor: color.hex }} />
                <div className="p-3.5 space-y-1.5">
                  <div className="text-sm font-semibold text-foreground">{color.name}</div>
                  <div className="font-mono text-xs text-muted-foreground">{color.hex}</div>
                  <div className="font-mono text-xs text-muted-foreground/70">{color.cssVar}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </DocShell>
  );
}
