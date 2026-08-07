import { DocShell } from "@/components/docs/doc-layout-shell";
import { UsageGuidelines } from "@/components/docs/usage-guidelines";
import { ComponentPreview } from "@/components/docs/component-preview";
import { VariantGrid, VariantCell } from "@/components/docs/variant-grid";
import { PropsTable, type PropDef } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const props: PropDef[] = [
  { name: "variant", type: '"default" | "destructive" | "warning" | "success"', default: '"default"', description: "Alert style variant" },
  { name: "title", type: "string", default: "-", description: "Alert title text" },
  { name: "children", type: "React.ReactNode", default: "-", description: "Alert description content" },
];

function Alert({ variant = "default", title, children }: { variant?: "default" | "destructive" | "warning" | "success"; title: string; children: React.ReactNode }) {
  const styles = {
    default: "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/20",
    destructive: "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20",
    warning: "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20",
    success: "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/20",
  };
  const icons = {
    default: Info,
    destructive: AlertCircle,
    warning: TriangleAlert,
    success: CheckCircle2,
  };
  const Icon = icons[variant];
  return (
    <div className={`flex gap-3 rounded-xl border p-4 ${styles[variant]}`}>
      <Icon className="size-5 shrink-0 mt-0.5" />
      <div>
        <p className="font-medium text-sm">{title}</p>
        <div className="text-sm text-muted-foreground mt-1">{children}</div>
      </div>
    </div>
  );
}

export default function AlertPage() {
  return (
    <DocShell title="Alert" description="Contextual messages for feedback, warnings, and important information." status="stable">
      <UsageGuidelines
        do={["Important information that needs attention", "Error messages from validation", "Success confirmations", "Warnings about potential issues"]}
        dont={["Replacing Toast for transient messages", "Using without an icon for visual distinction", "Stacking multiple alerts without hierarchy"]}
      />

      <h2 id="variants" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Variants</h2>
      <div className="my-6 space-y-4">
        <Alert title="Information" variant="default">This is an informational alert.</Alert>
        <Alert title="Destructive" variant="destructive">This action cannot be undone.</Alert>
        <Alert title="Warning" variant="warning">Your session is about to expire.</Alert>
        <Alert title="Success" variant="success">Your changes have been saved.</Alert>
      </div>

      <h2 id="props" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Props</h2>
      <PropsTable props={props} />

      <h2 id="accessibility" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Accessibility</h2>
      <div className="my-4 space-y-3 text-sm text-muted-foreground">
        <p>✓ Alerts use role=alert for screen reader prioritization</p>
        <p>✓ Icons provide visual distinction for each severity level</p>
        <p>✓ Color is not the only differentiator (icons + text)</p>
        <p>✓ Focusable action buttons within alerts</p>
      </div>

      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <CodeBlock language="tsx" code={`import { AlertCircle, Info } from "lucide-react";

<div className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
  <AlertCircle className="size-5 shrink-0 mt-0.5" />
  <div>
    <p className="font-medium text-sm">Error</p>
    <p className="text-sm text-muted-foreground mt-1">Description</p>
  </div>
</div>`} />

      <div className="mt-16 flex items-center justify-between gap-4">
        <Link href="/components/spinner" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" /> Spinner
        </Link>
        <Link href="/components/empty-state" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          Empty State <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </DocShell>
  );
}
