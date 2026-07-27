import { DocShell } from "@/components/docs/doc-layout-shell";

const radiusScale = [
  { name: "None", token: "rounded-none", value: "0", class: "rounded-none" },
  { name: "Sm", token: "rounded-sm", value: "0.125rem", class: "rounded-sm" },
  { name: "Default", token: "rounded-md", value: "0.375rem", class: "rounded-md" },
  { name: "Md", token: "rounded-lg", value: "0.5rem", class: "rounded-lg" },
  { name: "Lg", token: "rounded-xl", value: "0.75rem", class: "rounded-xl" },
  { name: "Xl", token: "rounded-2xl", value: "1rem", class: "rounded-2xl" },
  { name: "2xl", token: "rounded-3xl", value: "1.5rem", class: "rounded-3xl" },
  { name: "Full", token: "rounded-full", value: "9999px", class: "rounded-full" },
];

export default function RadiusPage() {
  return (
    <DocShell title="Radius" description="Border radius values for components and containers." status="stable">
      <p className="text-muted-foreground mb-8">Consistent border radius scale applied across components. The default radius (--radius) is 0.5rem.</p>

      <h2 id="scale" className="text-xl font-semibold mb-4">Radius Scale</h2>
      <div className="overflow-x-auto rounded-lg border border-border mb-10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left font-medium">Name</th>
              <th className="px-4 py-3 text-left font-medium">Token</th>
              <th className="px-4 py-3 text-left font-medium">Value</th>
              <th className="px-4 py-3 text-left font-medium">Preview</th>
            </tr>
          </thead>
          <tbody>
            {radiusScale.map((r) => (
              <tr key={r.name} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-medium">{r.name}</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{r.token}</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{r.value}</td>
                <td className="px-4 py-3">
                  <div className={`h-8 w-16 bg-primary/20 ${r.class}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="usage" className="text-xl font-semibold mb-4">Usage Guidelines</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-border p-4">
          <h3 className="text-sm font-semibold mb-2">Cards & Containers</h3>
          <p className="text-sm text-muted-foreground">rounded-lg (0.5rem) — the default --radius value used by all shadcn/ui components.</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="text-sm font-semibold mb-2">Buttons & Inputs</h3>
          <p className="text-sm text-muted-foreground">rounded-md (0.375rem) — slightly tighter radius for interactive elements.</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="text-sm font-semibold mb-2">Badges & Pills</h3>
          <p className="text-sm text-muted-foreground">rounded-full — pill shape for tags, badges, and status indicators.</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="text-sm font-semibold mb-2">Modals & Dialogs</h3>
          <p className="text-sm text-muted-foreground">rounded-xl (0.75rem) — slightly more pronounced radius for elevated surfaces.</p>
        </div>
      </div>
    </DocShell>
  );
}
