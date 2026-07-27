import { DocShell } from "@/components/docs/doc-layout-shell";
import { UsageGuidelines } from "@/components/docs/usage-guidelines";
import { ComponentPreview } from "@/components/docs/component-preview";
import { PropsTable, type PropDef } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const props: PropDef[] = [
  { name: "value", type: "string", default: "—", description: "Value of the selected radio item" },
  { name: "defaultValue", type: "string", default: "—", description: "Default selected value" },
  { name: "onValueChange", type: "(value: string) => void", default: "—", description: "Change handler" },
  { name: "disabled", type: "boolean", default: "false", description: "Prevent interaction" },
];

export default function RadioPage() {
  return (
    <DocShell title="Radio" description="Selection control for a single choice from a group of options." status="stable">
      <UsageGuidelines
        do={["Single selection from a list", "Settings with mutually exclusive options", "Form fields with 2-5 choices"]}
        dont={["More than 5 options (use Select instead)", "Multi-selection (use Checkbox instead)", "Action triggers (use Button instead)"]}
      />

      <h2 id="examples" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Examples</h2>
      <ComponentPreview>
        <RadioGroup defaultValue="option-1" className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option-1" id="radio-1" />
            <Label htmlFor="radio-1">Option 1</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option-2" id="radio-2" />
            <Label htmlFor="radio-2">Option 2</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option-3" id="radio-3" disabled />
            <Label htmlFor="radio-3" className="text-muted-foreground">Disabled option</Label>
          </div>
        </RadioGroup>
      </ComponentPreview>

      <h2 id="props" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Props</h2>
      <PropsTable props={props} />

      <h2 id="accessibility" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Accessibility</h2>
      <div className="my-4 space-y-3 text-sm text-muted-foreground">
        <p>✓ Arrow keys to navigate between options</p>
        <p>✓ Space to select the focused option</p>
        <p>✓ Always pair with Label for clickable area</p>
        <p>✓ Visible focus ring on keyboard navigation</p>
      </div>

      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <CodeBlock language="tsx" code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-3">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
</RadioGroup>`} />

      <div className="mt-16 flex items-center justify-between gap-4">
        <Link href="/components/checkbox" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" /> Checkbox
        </Link>
        <Link href="/components/select" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          Select <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </DocShell>
  );
}
