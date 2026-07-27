import { DocShell } from "@/components/docs/doc-layout-shell";
import { UsageGuidelines } from "@/components/docs/usage-guidelines";
import { ComponentPreview } from "@/components/docs/component-preview";
import { VariantGrid, VariantCell } from "@/components/docs/variant-grid";
import { PropsTable, type PropDef } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const props: PropDef[] = [
  { name: "variant", type: '"default" | "secondary" | "destructive" | "outline"', default: '"default"', description: "Visual style variant" },
];

export default function BadgePage() {
  return (
    <DocShell title="Badge" description="Used to highlight status, categories, or labels in a compact format." status="stable">
      <UsageGuidelines
        do={["Showing status indicators", "Labeling items with metadata", "Displaying counts or notifications"]}
        dont={["Replacing buttons or links", "Using more than 3 badges per section", "Truncating important label text"]}
      />

      <h2 id="variants" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Variants</h2>
      <VariantGrid>
        <VariantCell label="Default"><Badge>Badge</Badge></VariantCell>
        <VariantCell label="Secondary"><Badge variant="secondary">Badge</Badge></VariantCell>
        <VariantCell label="Destructive"><Badge variant="destructive">Badge</Badge></VariantCell>
        <VariantCell label="Outline"><Badge variant="outline">Badge</Badge></VariantCell>
      </VariantGrid>

      <h2 id="props" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Props</h2>
      <PropsTable props={props} />

      <h2 id="accessibility" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Accessibility</h2>
      <div className="my-4 space-y-3 text-sm text-muted-foreground">
        <p>✓ Badges are decorative by default (no focus needed)</p>
        <p>✓ Use aria-label when badge conveys status information</p>
        <p>✓ Ensure color is not the only differentiator</p>
      </div>

      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <CodeBlock language="tsx" code={`import { Badge } from "@/components/ui/badge";

export function MyComponent() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}`} />

      <h2 id="related" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Related Components</h2>
      <div className="flex flex-wrap gap-3 my-4">
        <Link href="/components/alert" className="group inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 transition-all duration-300">
          Alert <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-16 flex items-center justify-between gap-4">
        <Link href="/components/button" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" /> Button
        </Link>
        <Link href="/components/card" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          Card <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </DocShell>
  );
}
