import { DocShell } from "@/components/docs/doc-layout-shell";

const spacingScale = [
  { token: "1", px: 4, class: "p-1" },
  { token: "2", px: 8, class: "p-2" },
  { token: "3", px: 12, class: "p-3" },
  { token: "4", px: 16, class: "p-4" },
  { token: "6", px: 24, class: "p-6" },
  { token: "8", px: 32, class: "p-8" },
  { token: "10", px: 40, class: "p-10" },
  { token: "12", px: 48, class: "p-12" },
  { token: "16", px: 64, class: "p-16" },
  { token: "24", px: 96, class: "p-24" },
];

export default function SpacingPage() {
  return (
    <DocShell title="Spacing" description="Consistent spacing scale for layout and component gaps." status="stable">
      <p className="text-muted-foreground mb-8">The spacing scale follows an 4px base increment system. Use these values for margins, padding, and gap properties.</p>

      <h2 id="scale" className="text-xl font-semibold mb-4">Spacing Scale</h2>
      <div className="overflow-x-auto rounded-lg border border-border mb-10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left font-medium">Token</th>
              <th className="px-4 py-3 text-left font-medium">Pixels</th>
              <th className="px-4 py-3 text-left font-medium">Rem</th>
              <th className="px-4 py-3 text-left font-medium">Preview</th>
            </tr>
          </thead>
          <tbody>
            {spacingScale.map((s) => (
              <tr key={s.token} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-mono text-xs">{s.token}</td>
                <td className="px-4 py-3 text-muted-foreground">{s.px}px</td>
                <td className="px-4 py-3 text-muted-foreground">{s.px / 16}rem</td>
                <td className="px-4 py-3">
                  <div className="h-4 bg-primary/20 rounded" style={{ width: `${s.px * 2}px` }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="guidelines" className="text-xl font-semibold mb-4">Guidelines</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-border p-4">
          <h3 className="text-sm font-semibold mb-2">Stack spacing</h3>
          <p className="text-sm text-muted-foreground">Use gap-4 (16px) between related items. Use gap-6 (24px) between sections. Use gap-8 (32px) between major page sections.</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="text-sm font-semibold mb-2">Inline spacing</h3>
          <p className="text-sm text-muted-foreground">Use gap-2 (8px) between inline elements like badges or tags. Use gap-3 (12px) between form elements in a row.</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="text-sm font-semibold mb-2">Container padding</h3>
          <p className="text-sm text-muted-foreground">Use p-4 (16px) for card content. Use p-6 (24px) for section padding. Use container-main for page-level horizontal padding.</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="text-sm font-semibold mb-2">Negative space</h3>
          <p className="text-sm text-muted-foreground">Generous whitespace improves scannability. Avoid compressing content — let sections breathe with adequate spacing.</p>
        </div>
      </div>
    </DocShell>
  );
}
