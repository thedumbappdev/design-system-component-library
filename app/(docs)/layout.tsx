import { Sidebar } from "@/components/docs/sidebar";
import { TableOfContents } from "@/components/docs/toc";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh]">
      <div className="container-main flex pt-24">
        <aside className="hidden lg:block w-64 shrink-0">
  <div className="sticky top-28 max-h-[calc(100dvh-8rem)] overflow-y-auto border-r border-border pr-4 bg-background">
    <Sidebar />
  </div>
</aside>
        <main className="flex-1 min-w-0 py-8 px-6 lg:px-10">
          {children}
        </main>
        <aside className="hidden xl:block w-56 shrink-0">
  <div className="sticky top-28 pl-6 py-8 max-h-[calc(100dvh-8rem)] overflow-y-auto">
    <TableOfContents />
  </div>
</aside>
      </div>
    </div>
  );
}
