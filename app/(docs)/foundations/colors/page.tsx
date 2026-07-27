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
      { name: "Card", hex: "#ffffff", cssVar: "--card" },
      { name: "Card Foreground", hex: "#0f172a", cssVar: "--card-foreground" },
      { name: "Popover", hex: "#ffffff", cssVar: "--popover" },
      { name: "Popover Foreground", hex: "#0f172a", cssVar: "--popover-foreground" },
      { name: "Border", hex: "#e2e8f0", cssVar: "--border" },
      { name: "Input", hex: "#e2e8f0", cssVar: "--input" },
      { name: "Ring", hex: "#dc2626", cssVar: "--ring" },
    ],
  },
  {
    title: "Semantic",
    colors: [
      { name: "Destructive", hex: "#dc2626", cssVar: "--destructive" },
      { name: "Destructive Foreground", hex: "#f8fafc", cssVar: "--destructive-foreground" },
      { name: "Accent", hex: "#1e3a5f", cssVar: "--accent" },
      { name: "Accent Foreground", hex: "#f8fafc", cssVar: "--accent-foreground" },
    ],
  },
];

export default function ColorsPage() {
  return (
    <DocShell title="Colors" description="Semantic color tokens for the design system." status="stable">
      <p className="text-muted-foreground mb-8">All colors are defined as CSS custom properties and referenced by semantic tokens. This ensures consistent theming across light and dark modes.</p>
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
