import { DocShell } from "@/components/docs/doc-layout-shell";
import { UsageGuidelines } from "@/components/docs/usage-guidelines";
import { ComponentPreview } from "@/components/docs/component-preview";
import { PropsTable, type PropDef } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const props: PropDef[] = [
  { name: "placeholder", type: "string", default: "-", description: "Placeholder text" },
  { name: "disabled", type: "boolean", default: "false", description: "Prevent interaction" },
  { name: "rows", type: "number", default: "-", description: "Number of visible rows" },
];

export default function TextareaPage() {
  return (
    <DocShell title="Textarea" description="Multi-line text input for longer form content." status="stable">
      <UsageGuidelines
        do={["Long-form text entry", "Comments and feedback forms", "Description fields in forms"]}
        dont={["Single-line input (use Input)", "Code editing (use a dedicated editor)", "Without character count for limited fields"]}
      />

      <h2 id="examples" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Examples</h2>
      <ComponentPreview>
        <div className="flex w-full max-w-sm flex-col gap-4">
          <div className="grid gap-2">
            <Label htmlFor="bio">Biography</Label>
            <Textarea id="bio" placeholder="Tell us about yourself..." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="disabled-textarea">Disabled</Label>
            <Textarea id="disabled-textarea" disabled value="Disabled content" />
          </div>
        </div>
      </ComponentPreview>

      <h2 id="props" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Props</h2>
      <PropsTable props={props} />

      <h2 id="accessibility" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Accessibility</h2>
      <div className="my-4 space-y-3 text-sm text-muted-foreground">
        <p>✓ Always pair with a Label element</p>
        <p>✓ Resize handle is accessible via keyboard</p>
        <p>✓ Visible focus ring on keyboard navigation</p>
      </div>

      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <CodeBlock language="tsx" code={`import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

<div className="grid gap-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Type your message..." />
</div>`} />

      <div className="mt-16 flex items-center justify-between gap-4">
        <Link href="/components/input" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" /> Input
        </Link>
        <Link href="/components/checkbox" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          Checkbox <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </DocShell>
  );
}
