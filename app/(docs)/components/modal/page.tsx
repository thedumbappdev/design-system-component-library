"use client";

import { DocShell } from "@/components/docs/doc-layout-shell";
import { UsageGuidelines } from "@/components/docs/usage-guidelines";
import { ComponentPreview } from "@/components/docs/component-preview";
import { PropsTable, type PropDef } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const props: PropDef[] = [
  { name: "open", type: "boolean", default: "false", description: "Controlled open state" },
  { name: "defaultOpen", type: "boolean", default: "false", description: "Default open state" },
  { name: "onOpenChange", type: "(open: boolean) => void", default: "—", description: "Open state change handler" },
];

export default function ModalPage() {
  return (
    <DocShell title="Modal" description="Overlay dialogs for focused tasks, confirmations, and forms." status="stable">
      <UsageGuidelines
        do={["Confirming destructive actions", "Forms that require full focus", "Displaying detailed information"]}
        dont={["Complex multi-step workflows", "Showing errors or success (use Toast)", "Replacing navigation or pages"]}
      />

      <h2 id="examples" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Examples</h2>
      <ComponentPreview>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Modal</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>Update your profile information below.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" defaultValue="John Doe" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">Email</Label>
                <Input id="email" defaultValue="john@example.com" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentPreview>

      <h2 id="props" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Props</h2>
      <PropsTable props={props} />

      <h2 id="accessibility" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Accessibility</h2>
      <div className="my-4 space-y-3 text-sm text-muted-foreground">
        <p>✓ Focus is trapped inside the modal</p>
        <p>✓ Escape key closes the modal</p>
        <p>✓ Clicking backdrop closes the modal</p>
        <p>✓ Focus returns to trigger on close</p>
        <p>✓ aria-modal and role=dialog applied automatically</p>
      </div>

      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <CodeBlock language="tsx" code={`import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Modal Title</DialogTitle>
    </DialogHeader>
    <p>Modal content goes here.</p>
  </DialogContent>
</Dialog>`} />

      <div className="mt-16 flex items-center justify-between border-t border-border pt-6">
        <Link href="/components/dropdown" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="size-4" /> Dropdown
        </Link>
        <Link href="/components/toast" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          Toast <ArrowRight className="size-4" />
        </Link>
      </div>
    </DocShell>
  );
}
