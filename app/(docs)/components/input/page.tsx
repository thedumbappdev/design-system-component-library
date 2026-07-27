import { DocShell } from "@/components/docs/doc-layout-shell";
import { UsageGuidelines } from "@/components/docs/usage-guidelines";
import { ComponentPreview } from "@/components/docs/component-preview";
import { PropsTable, type PropDef } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const props: PropDef[] = [
  { name: "type", type: '"text" | "email" | "password" | "number" | "search" | "tel" | "url"', default: '"text"', description: "HTML input type" },
  { name: "placeholder", type: "string", default: "—", description: "Placeholder text" },
  { name: "disabled", type: "boolean", default: "false", description: "Prevent interaction" },
];

export default function InputPage() {
  return (
    <DocShell title="Input" description="Text fields for user input in forms and search fields." status="stable">
      <UsageGuidelines
        do={["Form fields for text entry", "Search input with clear button", "Paired with Label for accessibility"]}
        dont={["Multi-line text (use Textarea)", "Without an associated Label", "As a replacement for Select dropdowns"]}
      />

      <h2 id="examples" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Examples</h2>
      <ComponentPreview>
        <div className="flex w-full max-w-sm flex-col gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="disabled">Disabled</Label>
            <Input id="disabled" disabled value="Cannot edit" />
          </div>
        </div>
      </ComponentPreview>

      <h2 id="states" className="text-2xl font-semibold tracking-tight mt-12 mb-4">States</h2>
      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label>Default</Label>
          <Input placeholder="Default input" />
        </div>
        <div className="grid gap-2">
          <Label>Disabled</Label>
          <Input disabled value="Disabled input" />
        </div>
        <div className="grid gap-2">
          <Label>With placeholder</Label>
          <Input placeholder="Placeholder text" />
        </div>
        <div className="grid gap-2">
          <Label>Focused</Label>
          <Input placeholder="Click to focus" className="focus-visible:ring-2 focus-visible:ring-ring" />
        </div>
      </div>

      <h2 id="props" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Props</h2>
      <PropsTable props={props} />

      <h2 id="accessibility" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Accessibility</h2>
      <div className="my-4 space-y-3 text-sm text-muted-foreground">
        <p>✓ Always pair with a Label element</p>
        <p>✓ Visible focus ring on keyboard navigation</p>
        <p>✓ aria-describedby for error messages</p>
        <p>✓ Proper autocomplete attributes for password/email fields</p>
      </div>

      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <CodeBlock language="tsx" code={`import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

<div className="grid gap-2">
  <Label htmlFor="name">Name</Label>
  <Input id="name" placeholder="Enter your name" />
</div>`} />

      <div className="mt-16 flex items-center justify-between border-t border-border pt-6">
        <Link href="/components/card" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="size-4" /> Card
        </Link>
        <Link href="/components/textarea" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          Textarea <ArrowRight className="size-4" />
        </Link>
      </div>
    </DocShell>
  );
}
