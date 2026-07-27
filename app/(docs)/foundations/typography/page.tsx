import { DocShell } from "@/components/docs/doc-layout-shell";

const typeScale = [
  { name: "h1", tag: "h1", size: "4xl / 6xl", weight: "Bold (700)", example: "Display heading" },
  { name: "h2", tag: "h2", size: "2xl", weight: "Semibold (600)", example: "Section heading" },
  { name: "h3", tag: "h3", size: "xl", weight: "Semibold (600)", example: "Sub-section heading" },
  { name: "h4", tag: "h4", size: "lg", weight: "Semibold (600)", example: "Card heading" },
  { name: "Body", tag: "p", size: "base", weight: "Normal (400)", example: "Body text for paragraphs and content." },
  { name: "Small", tag: "small", size: "sm", weight: "Normal (400)", example: "Small / meta text" },
  { name: "Code", tag: "code", size: "sm", weight: "Normal (400)", example: "console.log('hello')" },
];

export default function TypographyPage() {
  return (
    <DocShell title="Typography" description="Geist and Geist Mono type system for consistent typography." status="stable">
      <p className="text-muted-foreground mb-8">The design system uses Geist for UI and body text, and Geist Mono for code. Both fonts are self-hosted via next/font for zero external requests.</p>

      <h2 id="type-scale" className="text-xl font-semibold mb-4">Type Scale</h2>
      <div className="overflow-x-auto rounded-xl border border-border shadow-sm mb-10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-5 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">Level</th>
              <th className="px-5 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">Size</th>
              <th className="px-5 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">Weight</th>
              <th className="px-5 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">Example</th>
            </tr>
          </thead>
          <tbody>
            {typeScale.map((t) => (
              <tr key={t.name} className="border-b border-border last:border-0 transition-colors hover:bg-muted/30">
                <td className="px-5 py-3.5 font-medium">{t.name}</td>
                <td className="px-5 py-3.5 text-muted-foreground">{t.size}</td>
                <td className="px-5 py-3.5 text-muted-foreground">{t.weight}</td>
                <td className="px-5 py-3.5">
                  {t.name === "Code" ? (
                    <code className="rounded-md bg-muted px-2 py-0.5 font-mono text-sm">{t.example}</code>
                  ) : (
                    <span style={{ fontFamily: t.name === "Code" ? "var(--font-geist-mono)" : undefined }}>
                      {t.example}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="font-families" className="text-xl font-semibold mb-4">Font Families</h2>
      <div className="grid gap-6 sm:grid-cols-2 mb-10">
        <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20">
          <h3 className="text-sm font-semibold text-foreground mb-2">Geist Sans</h3>
          <p className="text-sm text-muted-foreground">Used for headings, body text, and UI elements.</p>
          <div className="mt-4 space-y-2">
            <p className="text-lg font-bold">Bold (700)</p>
            <p className="text-base font-semibold">Semibold (600)</p>
            <p className="text-base font-normal">Regular (400)</p>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20">
          <h3 className="text-sm font-semibold text-foreground mb-2">Geist Mono</h3>
          <p className="text-sm text-muted-foreground">Used for code blocks, props tables, and inline code.</p>
          <div className="mt-4 space-y-2 font-mono">
            <p className="text-base font-bold">Bold (700)</p>
            <p className="text-base font-normal">Regular (400)</p>
          </div>
        </div>
      </div>

      <h2 id="guidelines" className="text-xl font-semibold mb-4">Guidelines</h2>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li>✓ Line length capped at 65 characters for optimal readability</li>
        <li>✓ Headings use text-wrap: balance for even line breaks</li>
        <li>✓ Display headings use tight tracking (tracking-tighter)</li>
        <li>✓ Code blocks use Geist Mono at 0.875rem</li>
        <li>✓ Minimum font size is 0.75rem (12px) for accessibility</li>
      </ul>
    </DocShell>
  );
}
