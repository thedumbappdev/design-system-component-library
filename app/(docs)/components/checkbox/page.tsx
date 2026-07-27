import { DocShell } from "@/components/docs/doc-layout-shell";
import { UsageGuidelines } from "@/components/docs/usage-guidelines";
import { ComponentPreview } from "@/components/docs/component-preview";
import { PropsTable, type PropDef } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const props: PropDef[] = [
  { name: "checked", type: "boolean | 'indeterminate'", default: "false", description: "Controlled checked state" },
  { name: "disabled", type: "boolean", default: "false", description: "Prevent interaction" },
  { name: "onCheckedChange", type: "(checked: boolean) => void", default: "—", description: "Change handler" },
];

export default function CheckboxPage() {
  return (
    <DocShell title="Checkbox" description="Selection control for multiple choices in forms and filters." status="stable">
      <UsageGuidelines
        do={["Multiple selection in forms", "Filter lists and preferences", "Agree to terms confirmation"]}
        dont={["Single selection (use Radio instead)", "Action triggers (use Button or Switch)", "With long labels (keep concise)"]}
      />

      <h2 id="examples" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Examples</h2>
      <ComponentPreview>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="newsletter" defaultChecked />
            <Label htmlFor="newsletter">Subscribe to newsletter</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="disabled-checkbox" disabled />
            <Label htmlFor="disabled-checkbox" className="text-muted-foreground">Disabled option</Label>
          </div>
        </div>
      </ComponentPreview>

      <h2 id="props" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Props</h2>
      <PropsTable props={props} />

      <h2 id="accessibility" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Accessibility</h2>
      <div className="my-4 space-y-3 text-sm text-muted-foreground">
        <p>✓ Keyboard navigation via Tab and Space to toggle</p>
        <p>✓ Always pair with a Label for clickable area</p>
        <p>✓ Indeterminate state announced by screen readers</p>
        <p>✓ Visible focus ring on keyboard navigation</p>
      </div>

      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <CodeBlock language="tsx" code={`import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

<div className="flex items-center gap-3">
  <Checkbox id="option" />
  <Label htmlFor="option">Option label</Label>
</div>`} />

      <div className="mt-16 flex items-center justify-between gap-4">
        <Link href="/components/textarea" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" /> Textarea
        </Link>
        <Link href="/components/radio" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          Radio <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </DocShell>
  );
}
