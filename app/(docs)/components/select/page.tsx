import { DocShell } from "@/components/docs/doc-layout-shell";
import { UsageGuidelines } from "@/components/docs/usage-guidelines";
import { ComponentPreview } from "@/components/docs/component-preview";
import { PropsTable, type PropDef } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const props: PropDef[] = [
  { name: "value", type: "string", default: "-", description: "Controlled selected value" },
  { name: "defaultValue", type: "string", default: "-", description: "Default selected value" },
  { name: "onValueChange", type: "(value: string) => void", default: "-", description: "Change handler" },
  { name: "disabled", type: "boolean", default: "false", description: "Prevent interaction" },
  { name: "placeholder", type: "string", default: "-", description: "Placeholder when no value selected" },
];

export default function SelectPage() {
  return (
    <DocShell title="Select" description="Dropdown selection for choosing from a list of options." status="stable">
      <UsageGuidelines
        do={["5+ options in forms", "Settings with predefined choices", "Filter or sort controls"]}
        dont={["Fewer than 3 options (use Radio instead)", "Multi-select (use Checkbox group instead)", "Navigation menus (use DropdownMenu)"]}
      />

      <h2 id="examples" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Examples</h2>
      <ComponentPreview>
        <div className="flex w-full max-w-xs flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="framework">Framework</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
                <SelectItem value="angular">Angular</SelectItem>
                <SelectItem value="solid">Solid</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="disabled-select">Disabled</Label>
            <Select disabled>
              <SelectTrigger id="disabled-select">
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
            </Select>
          </div>
        </div>
      </ComponentPreview>

      <h2 id="props" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Props</h2>
      <PropsTable props={props} />

      <h2 id="accessibility" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Accessibility</h2>
      <div className="my-4 space-y-3 text-sm text-muted-foreground">
        <p>✓ Arrow keys to navigate between options</p>
        <p>✓ Enter or Space to select an option</p>
        <p>✓ Type-ahead filtering for long lists</p>
        <p>✓ Escape to close the dropdown</p>
      </div>

      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <CodeBlock language="tsx" code={`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>`} />

      <div className="mt-16 flex items-center justify-between gap-4">
        <Link href="/components/radio" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" /> Radio
        </Link>
        <Link href="/components/dropdown" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          Dropdown <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </DocShell>
  );
}
