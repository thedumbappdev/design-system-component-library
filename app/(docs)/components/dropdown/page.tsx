"use client";

import { DocShell } from "@/components/docs/doc-layout-shell";
import { UsageGuidelines } from "@/components/docs/usage-guidelines";
import { ComponentPreview } from "@/components/docs/component-preview";
import { PropsTable, type PropDef } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const props: PropDef[] = [
  { name: "inset", type: "boolean", default: "false", description: "Add left padding to items" },
  { name: "disabled", type: "boolean", default: "false", description: "Prevent item interaction" },
];

export default function DropdownPage() {
  return (
    <DocShell title="Dropdown" description="Contextual menus for actions, navigation, and settings." status="stable">
      <UsageGuidelines
        do={["Action menus triggered by buttons", "Context menus for list items", "User account menus"]}
        dont={["Form selection (use Select instead)", "Navigation with fewer than 3 items", "Critical actions without confirmation"]}
      />

      <h2 id="examples" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Examples</h2>
      <ComponentPreview>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentPreview>

      <h2 id="props" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Props</h2>
      <PropsTable props={props} />

      <h2 id="accessibility" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Accessibility</h2>
      <div className="my-4 space-y-3 text-sm text-muted-foreground">
        <p>✓ Arrow keys to navigate menu items</p>
        <p>✓ Enter or Space to activate an item</p>
        <p>✓ Escape to close the menu</p>
        <p>✓ Sub-menus open on hover or arrow right</p>
      </div>

      <h2 id="usage" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Usage</h2>
      <CodeBlock language="tsx" code={`import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Action</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`} />

      <div className="mt-16 flex items-center justify-between border-t border-border pt-6">
        <Link href="/components/select" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="size-4" /> Select
        </Link>
        <Link href="/components/modal" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          Modal <ArrowRight className="size-4" />
        </Link>
      </div>
    </DocShell>
  );
}
