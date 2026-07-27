import { DocShell } from "@/components/docs/doc-layout-shell";
import { UsageGuidelines } from "@/components/docs/usage-guidelines";
import { ComponentPreview } from "@/components/docs/component-preview";
import { PropsTable, type PropDef } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { Button } from "@/components/ui/button";
import { Inbox } from "lucide-react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const props: PropDef[] = [
  { name: "icon", type: "React.ElementType", default: "—", description: "Icon component to display" },
  { name: "title", type: "string", default: "—", description: "Empty state heading" },
  { name: "description", type: "string", default: "—", description: "Descriptive message" },
  { name: "action", type: "React.ReactNode", default: "—", description: "Call-to-action button" },
];

function EmptyState({ icon: Icon, title, description, action }: { icon?: React.ElementType; title: string; description: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border p-12 text-center">
      {Icon && (
        <div className="mb-4 rounded-full bg-muted p-3">
          <Icon className="size-8 text-muted-foreground" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export default function EmptyStatePage() {
  return (
    <DocShell title="Empty State" description="Placeholder content when lists, searches, or dashboards have no data." status="stable">
      <UsageGuidelines
        do={["Empty lists and tables", "No search results found", "First-time user onboarding"]}
        dont={["Loading states (use Spinner instead)", "Error states (use Alert instead)", "Without a clear call-to-action"]}
      />

      <h2 id="examples" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Examples</h2>
      <ComponentPreview>
        <EmptyState
          icon={Inbox}
          title="No messages yet"
          description="When you receive messages, they will appear here."
          action={<Button>New Message</Button>}
        />
      </ComponentPreview>

      <h2 id="props" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Props</h2>
      <PropsTable props={props} />

      <h2 id="accessibility" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Accessibility</h2>
      <div className="my-4 space-y-3 text-sm text-muted-foreground">
        <p>✓ Use heading hierarchy (h3) for screen reader navigation</p>
        <p>✓ Action buttons are keyboard accessible</p>
        <p>✓ Decorative icons marked as aria-hidden</p>
      </div>

      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <CodeBlock language="tsx" code={`import { Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";

<div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
  <div className="mb-4 rounded-full bg-muted p-3">
    <Inbox className="size-8 text-muted-foreground" />
  </div>
  <h3 className="text-lg font-semibold">No data</h3>
  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
    Description of empty state.
  </p>
  <Button className="mt-6">Action</Button>
</div>`} />

      <div className="mt-16 flex items-center justify-between border-t border-border pt-6">
        <Link href="/components/alert" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="size-4" /> Alert
        </Link>
        <div />
      </div>
    </DocShell>
  );
}
