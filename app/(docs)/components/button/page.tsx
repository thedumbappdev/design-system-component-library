import { DocShell } from "@/components/docs/doc-layout-shell";
import { UsageGuidelines } from "@/components/docs/usage-guidelines";
import { ComponentPreview } from "@/components/docs/component-preview";
import { VariantGrid, VariantCell } from "@/components/docs/variant-grid";
import { PropsTable, type PropDef } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const props: PropDef[] = [
  { name: "variant", type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"', default: '"default"', description: "Visual style variant" },
  { name: "size", type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: "Component size" },
  { name: "disabled", type: "boolean", default: "false", description: "Prevent interaction" },
  { name: "asChild", type: "boolean", default: "false", description: "Render as child element (Radix)" },
];

export default function ButtonPage() {
  return (
    <DocShell
      title="Button"
      description="Used to trigger an action or event. Primary call-to-action for forms, dialogs, and user interactions."
      status="stable"
    >
      <UsageGuidelines
        do={[
          "Primary actions like form submission",
          "Dialog confirmation actions",
          "Triggering modals or dropdowns",
          "Call-to-action buttons in empty states",
        ]}
        dont={[
          "Navigation between pages (use Link instead)",
          "Long text labels (keep under 25 characters)",
          "Multiple primary buttons in one section",
          "As a replacement for text links inline",
        ]}
      />

      <h2 id="variants" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Variants</h2>
      <VariantGrid>
        <VariantCell label="Default"><Button>Button</Button></VariantCell>
        <VariantCell label="Secondary"><Button variant="secondary">Button</Button></VariantCell>
        <VariantCell label="Outline"><Button variant="outline">Button</Button></VariantCell>
        <VariantCell label="Ghost"><Button variant="ghost">Button</Button></VariantCell>
        <VariantCell label="Destructive"><Button variant="destructive">Button</Button></VariantCell>
        <VariantCell label="Link"><Button variant="link">Button</Button></VariantCell>
      </VariantGrid>

      <h2 id="sizes" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Sizes</h2>
      <ComponentPreview>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </ComponentPreview>

      <h2 id="states" className="text-2xl font-semibold tracking-tight mt-12 mb-4">States</h2>
      <VariantGrid>
        <VariantCell label="Default"><Button>Default</Button></VariantCell>
        <VariantCell label="Hover"><Button className="hover:bg-primary/90">Hover</Button></VariantCell>
        <VariantCell label="Disabled"><Button disabled>Disabled</Button></VariantCell>
        <VariantCell label="Loading">
          <Button disabled>
            <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
            Loading
          </Button>
        </VariantCell>
      </VariantGrid>

      <h2 id="props" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Props</h2>
      <PropsTable props={props} />

      <h2 id="accessibility" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Accessibility</h2>
      <div className="my-4 space-y-3 text-sm text-muted-foreground">
        <p>✓ Keyboard support via Space and Enter keys (native button behavior)</p>
        <p>✓ Focus ring visible on keyboard navigation using :focus-visible</p>
        <p>✓ ARIA button role applied automatically when using asChild</p>
        <p>✓ Disabled state uses aria-disabled and reduced opacity</p>
        <p>✓ Minimum color contrast ratio of 4.5:1 for text on background</p>
      </div>

      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <CodeBlock
        language="tsx"
        code={`import { Button } from "@/components/ui/button";

export function MyComponent() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Primary Action</Button>
      <Button variant="outline">Secondary Action</Button>
    </div>
  );
}`}
      />

      <h2 id="related" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Related Components</h2>
      <div className="flex flex-wrap gap-3 my-4">
        <Link href="/components/dropdown" className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          Dropdown <ArrowRight className="size-3.5" />
        </Link>
        <Link href="/components/modal" className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          Modal <ArrowRight className="size-3.5" />
        </Link>
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-border pt-6">
        <div />
        <Link href="/components/badge" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          Badge <ArrowRight className="size-4" />
        </Link>
      </div>
    </DocShell>
  );
}
