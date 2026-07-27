import { Breadcrumb } from "@/components/docs/breadcrumb";

export default function AccessibilityPage() {
  return (
    <article className="max-w-none">
      <Breadcrumb />
      <div className="mb-8">
        <h1 id="overview" className="text-3xl font-bold tracking-tight text-foreground">Accessibility</h1>
        <p className="text-lg text-muted-foreground max-w-[65ch] mt-2">
          WCAG AA compliance is a core requirement for every component in this design system.
        </p>
      </div>

      <h2 id="standards" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Standards</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        All components target WCAG 2.1 AA compliance. This includes sufficient color contrast, keyboard accessibility,
        screen reader support, and focus management.
      </p>

      <h2 id="keyboard" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Keyboard Navigation</h2>
      <div className="overflow-x-auto rounded-xl border border-border shadow-sm mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-5 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">Component</th>
              <th className="px-5 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">Interaction</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border transition-colors hover:bg-muted/30"><td className="px-5 py-3.5 font-medium">Button</td><td className="px-5 py-3.5 text-muted-foreground">Enter / Space</td></tr>
            <tr className="border-b border-border transition-colors hover:bg-muted/30"><td className="px-5 py-3.5 font-medium">Checkbox</td><td className="px-5 py-3.5 text-muted-foreground">Tab to focus, Space to toggle</td></tr>
            <tr className="border-b border-border transition-colors hover:bg-muted/30"><td className="px-5 py-3.5 font-medium">Radio Group</td><td className="px-5 py-3.5 text-muted-foreground">Arrow keys to navigate, Space to select</td></tr>
            <tr className="border-b border-border transition-colors hover:bg-muted/30"><td className="px-5 py-3.5 font-medium">Select</td><td className="px-5 py-3.5 text-muted-foreground">Arrow keys, Enter to select, Escape to close</td></tr>
            <tr className="border-b border-border transition-colors hover:bg-muted/30"><td className="px-5 py-3.5 font-medium">Dropdown Menu</td><td className="px-5 py-3.5 text-muted-foreground">Arrow keys, Enter to activate, Escape to close</td></tr>
            <tr className="border-b border-border transition-colors hover:bg-muted/30"><td className="px-5 py-3.5 font-medium">Modal</td><td className="px-5 py-3.5 text-muted-foreground">Tab trap, Escape to close, focus returns on close</td></tr>
            <tr className="border-b border-border transition-colors hover:bg-muted/30"><td className="px-5 py-3.5 font-medium">Input / Textarea</td><td className="px-5 py-3.5 text-muted-foreground">Native keyboard input, Tab to navigate</td></tr>
            <tr className="border-0 transition-colors hover:bg-muted/30"><td className="px-5 py-3.5 font-medium">Toast</td><td className="px-5 py-3.5 text-muted-foreground">Auto-dismiss, Escape to dismiss, action buttons focusable</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="color-contrast" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Color Contrast</h2>
      <div className="overflow-x-auto rounded-xl border border-border shadow-sm mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-5 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">Token Pair</th>
              <th className="px-5 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">Ratio</th>
              <th className="px-5 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">AA</th>
              <th className="px-5 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">AAA</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border transition-colors hover:bg-muted/30"><td className="px-5 py-3.5">--foreground on --background</td><td className="px-5 py-3.5 text-muted-foreground">15.3:1</td><td className="px-5 py-3.5 text-emerald-600 font-medium">✓</td><td className="px-5 py-3.5 text-emerald-600 font-medium">✓</td></tr>
            <tr className="border-b border-border transition-colors hover:bg-muted/30"><td className="px-5 py-3.5">--primary on --background</td><td className="px-5 py-3.5 text-muted-foreground">6.8:1</td><td className="px-5 py-3.5 text-emerald-600 font-medium">✓</td><td className="px-5 py-3.5 text-muted-foreground">✗</td></tr>
            <tr className="border-b border-border transition-colors hover:bg-muted/30"><td className="px-5 py-3.5">--primary on --primary-foreground</td><td className="px-5 py-3.5 text-muted-foreground">5.9:1</td><td className="px-5 py-3.5 text-emerald-600 font-medium">✓</td><td className="px-5 py-3.5 text-muted-foreground">✗</td></tr>
            <tr className="border-0 transition-colors hover:bg-muted/30"><td className="px-5 py-3.5">--muted-foreground on --background</td><td className="px-5 py-3.5 text-muted-foreground">7.2:1</td><td className="px-5 py-3.5 text-emerald-600 font-medium">✓</td><td className="px-5 py-3.5 text-emerald-600 font-medium">✓</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="screen-readers" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Screen Reader Support</h2>
      <div className="space-y-3 text-sm text-muted-foreground">
        <p>✓ All form elements have associated Label components</p>
        <p>✓ Interactive elements use aria-label when visual labels are absent</p>
        <p>✓ Modals use role=dialog and aria-modal=true</p>
        <p>✓ Toasts use role=status for announcements</p>
        <p>✓ Icons use aria-hidden=true with text alternatives</p>
        <p>✓ Focus indicators use :focus-visible to avoid mouse focus rings</p>
        <p>✓ Reduced motion respected via prefers-reduced-motion</p>
      </div>

      <h2 id="testing" className="text-2xl font-semibold tracking-tight mt-12 mb-4">Testing</h2>
      <p className="text-muted-foreground">Each component is tested for:</p>
      <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc pl-5">
        <li>Keyboard navigation (Tab, Enter, Escape, Arrow keys)</li>
        <li>Screen reader announcements (NVDA, VoiceOver)</li>
        <li>Color contrast (axe-core, Lighthouse)</li>
        <li>Focus management (trap, return, visible indicators)</li>
        <li>Reduced motion (prefers-reduced-motion)</li>
      </ul>
    </article>
  );
}
