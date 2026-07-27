import { DocShell } from "@/components/docs/doc-layout-shell";
import { CodeBlock } from "@/components/docs/code-block";

const iconSets = [
  {
    name: "lucide-react",
    usage: "import { IconName } from \"lucide-react\"",
    description: "Primary icon library. Used for all UI components, navigation, and action icons.",
    examples: [
      "Search, Moon, Sun, ArrowRight, ArrowLeft, Check, Copy, ChevronDown, AlertCircle, Info, X, Menu, Github, Bell, Settings, User, LogOut, Plus, Minus, Trash, Edit, Loader2, Inbox",
    ],
  },
  {
    name: "@radix-ui/react-icons",
    usage: "import { IconName } from \"@radix-ui/react-icons\"",
    description: "Secondary icon library. Used for specific Radix-related components and supplementary icons.",
    examples: [
      "GitHubLogoIcon, CheckCircledIcon, CrossCircledIcon, InfoCircledIcon, ExclamationTriangleIcon, MagnifyingGlassIcon, SunIcon, MoonIcon",
    ],
  },
];

export default function IconsPage() {
  return (
    <DocShell title="Icons" description="Icon libraries used throughout the design system." status="stable">
      <p className="text-muted-foreground mb-8">Two icon libraries are used in this design system. Lucide React is the primary choice for UI components. Radix Icons supplement specific component needs.</p>

      {iconSets.map((set) => (
        <div key={set.name} className="mb-10">
          <h2 id={set.name.replace("@", "").replace("/", "-")} className="text-xl font-semibold mb-4">{set.name}</h2>
          <p className="text-sm text-muted-foreground mb-4">{set.description}</p>
          <CodeBlock language="tsx" code={set.usage} />
          <div className="mt-6">
            <h3 className="text-sm font-semibold mb-3">Commonly used icons</h3>
            <div className="flex flex-wrap gap-2">
              {set.examples.flatMap((line) => line.split(", ")).map((icon) => (
                <span key={icon} className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      <h2 id="guidelines" className="text-xl font-semibold mb-4">Guidelines</h2>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li>✓ Use lucide-react as the default icon library unless Radix-specific icons are needed</li>
        <li>✓ Icons should always be decorative — provide text alternatives when necessary</li>
        <li>✓ Standard icon size is 16px (size-4) for inline, 20px (size-5) for buttons</li>
        <li>✓ Use aria-hidden=&quot;true&quot; on decorative icons</li>
        <li>✓ Maintain consistent strokeWidth across icons within the same context</li>
      </ul>
    </DocShell>
  );
}
