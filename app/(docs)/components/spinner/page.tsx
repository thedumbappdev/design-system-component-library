import { DocShell } from "@/components/docs/doc-layout-shell";
import { UsageGuidelines } from "@/components/docs/usage-guidelines";
import { ComponentPreview } from "@/components/docs/component-preview";
import { VariantGrid, VariantCell } from "@/components/docs/variant-grid";
import { PropsTable, type PropDef } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

const props: PropDef[] = [
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Spinner size" },
  { name: "className", type: "string", default: "-", description: "Additional CSS classes" },
];

function Spinner({ size = "md", className }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const sizes = { sm: "size-4", md: "size-6", lg: "size-8" };
  return <Loader2 className={`animate-spin text-muted-foreground ${sizes[size]} ${className ?? ""}`} />;
}

export default function SpinnerPage() {
  return (
    <DocShell title="Spinner" description="Loading indicators for asynchronous operations and content loading." status="stable">
      <UsageGuidelines
        do={["Loading states during data fetching", "Form submission loading states", "Content placeholders while streaming"]}
        dont={["Entire page loading (use skeleton instead)", "Without a delay for fast operations", "Multiple spinners on the same view"]}
      />

      <h2 id="variants" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Sizes</h2>
      <VariantGrid>
        <VariantCell label="Small"><Spinner size="sm" /></VariantCell>
        <VariantCell label="Medium"><Spinner size="md" /></VariantCell>
        <VariantCell label="Large"><Spinner size="lg" /></VariantCell>
      </VariantGrid>

      <h2 id="examples" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage Examples</h2>
      <ComponentPreview>
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <Spinner size="sm" />
            <span className="text-sm text-muted-foreground">Loading...</span>
          </div>
          <button
            disabled
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground opacity-70"
          >
            <Spinner size="sm" className="text-primary-foreground" />
            Saving...
          </button>
        </div>
      </ComponentPreview>

      <h2 id="props" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Props</h2>
      <PropsTable props={props} />

      <h2 id="accessibility" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Accessibility</h2>
      <div className="my-4 space-y-3 text-sm text-muted-foreground">
        <p>✓ Spinner uses animate-spin for rotation</p>
        <p>✓ Add aria-label=&quot;Loading&quot; for screen readers</p>
        <p>✓ Reduced motion: prefers-reduced-motion disables animation</p>
      </div>

      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <CodeBlock language="tsx" code={`import { Loader2 } from "lucide-react";

function Spinner({ className }: { className?: string }) {
  return <Loader2 className={\`animate-spin \${className ?? ""}\`} />;
}

<button disabled className="inline-flex items-center gap-2">
  <Spinner />
  Loading...
</button>`} />

      <div className="mt-16 flex items-center justify-between gap-4">
        <Link href="/components/toast" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" /> Toast
        </Link>
        <Link href="/components/alert" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          Alert <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </DocShell>
  );
}
