"use client";

import { DocShell } from "@/components/docs/doc-layout-shell";
import { UsageGuidelines } from "@/components/docs/usage-guidelines";
import { ComponentPreview } from "@/components/docs/component-preview";
import { PropsTable, type PropDef } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const props: PropDef[] = [
  { name: "message", type: "string | React.ReactNode", default: "-", description: "Toast message content" },
  { name: "description", type: "string", default: "-", description: "Optional description text" },
  { name: "duration", type: "number", default: "4000", description: "Auto-dismiss duration in ms" },
  { name: "position", type: '"top-right" | "bottom-right" | "top-center" | "bottom-center"', default: '"bottom-right"', description: "Toast position" },
];

export default function ToastPage() {
  return (
    <DocShell title="Toast" description="Transient notifications for feedback, success, and error messages." status="beta">
      <UsageGuidelines
        do={["Success confirmation after actions", "Error notifications from API calls", "Non-blocking status updates"]}
        dont={["Critical errors requiring action (use Alert)", "Persistent messages (use Banner instead)", "More than one toast at a time"]}
      />

      <h2 id="examples" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Examples</h2>
      <ComponentPreview>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => toast("Event has been created", { description: "Your event has been scheduled." })}>
            Show Toast
          </Button>
          <Button variant="outline" onClick={() => toast.success("Saved successfully!")}>
            Success
          </Button>
          <Button variant="outline" onClick={() => toast.error("Something went wrong.")}>
            Error
          </Button>
        </div>
      </ComponentPreview>

      <h2 id="props" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Props</h2>
      <PropsTable props={props} />

      <h2 id="accessibility" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Accessibility</h2>
      <div className="my-4 space-y-3 text-sm text-muted-foreground">
        <p>✓ Toasts use role=status for screen reader announcements</p>
        <p>✓ Auto-dismiss with sufficient reading time (4s minimum)</p>
        <p>✓ Action buttons in toasts are keyboard accessible</p>
        <p>✓ Dismissible with close button or Escape key</p>
      </div>

      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <CodeBlock language="tsx" code={`import { toast } from "sonner";
import { Button } from "@/components/ui/button";

<Button onClick={() => toast("Message sent!", {
  description: "Your message has been delivered.",
})}>
  Send Message
</Button>`} />

      <div className="mt-16 flex items-center justify-between gap-4">
        <Link href="/components/modal" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" /> Modal
        </Link>
        <Link href="/components/spinner" className="group flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/20 hover:shadow-[0_0_30px_-12px_rgba(79,70,229,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          Spinner <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </DocShell>
  );
}
