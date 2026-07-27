import { DocShell } from "@/components/docs/doc-layout-shell";

const shadowScale = [
  { name: "Sm", token: "shadow-sm", style: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
  { name: "Default", token: "shadow", style: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" },
  { name: "Md", token: "shadow-md", style: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" },
  { name: "Lg", token: "shadow-lg", style: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" },
  { name: "Xl", token: "shadow-xl", style: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" },
  { name: "2xl", token: "shadow-2xl", style: "0 25px 50px -12px rgb(0 0 0 / 0.25)" },
];

export default function ShadowsPage() {
  return (
    <DocShell title="Shadows" description="Box shadow values for elevation and depth." status="stable">
      <p className="text-muted-foreground mb-8">Shadow tokens used to convey elevation hierarchy. Higher shadows indicate closer proximity to the user.</p>

      <h2 id="scale" className="text-xl font-semibold mb-4">Shadow Scale</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {shadowScale.map((s) => (
          <div key={s.name} className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)]" style={{ boxShadow: s.style }}>
            <div className="text-sm font-semibold mb-1">{s.name}</div>
            <div className="font-mono text-xs text-muted-foreground mb-2">{s.token}</div>
            <div className="text-xs text-muted-foreground font-mono break-all leading-relaxed">{s.style}</div>
          </div>
        ))}
      </div>

      <h2 id="guidelines" className="text-xl font-semibold mb-4">Usage Guidelines</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)]">
          <h3 className="text-sm font-semibold mb-2">Cards</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">shadow-sm for default card elevation. Shadow-md for hovered cards.</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)]">
          <h3 className="text-sm font-semibold mb-2">Modals & Dialogs</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">shadow-xl for modal dialogs. Shadow-2xl for full-screen overlays.</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)]">
          <h3 className="text-sm font-semibold mb-2">Dropdowns</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">shadow-lg for dropdown menus and popovers.</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)]">
          <h3 className="text-sm font-semibold mb-2">Dark Mode</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">Shadows are reduced in dark mode to avoid harsh contrast. Use border to define surface boundaries instead.</p>
        </div>
      </div>
    </DocShell>
  );
}
